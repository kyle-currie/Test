'use strict';

/* ── Storage ─────────────────────────────────────────────────── */
const STORAGE_KEY = 'bill-tracker-v1';

function load() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}

function save(bills) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bills));
}

/* ── State ───────────────────────────────────────────────────── */
let bills = load();
let editingId = null;
let historyBillId = null;
let filterCategory = '';
let filterStatus   = '';
let searchQuery    = '';

/* ── Helpers ─────────────────────────────────────────────────── */
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function fmt(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n || 0);
}

/** Returns 'overdue', 'due-soon' (within 7 days), or '' */
function dueSeverity(dueDateStr, paid) {
  if (paid) return '';
  const today = new Date(); today.setHours(0,0,0,0);
  const due   = new Date(dueDateStr + 'T00:00:00');
  const diff  = Math.round((due - today) / 86400000);
  if (diff < 0)  return 'overdue';
  if (diff <= 7) return 'due-soon';
  return '';
}

function formatDueDate(dueDateStr) {
  const d = new Date(dueDateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function daysUntil(dueDateStr) {
  const today = new Date(); today.setHours(0,0,0,0);
  const due   = new Date(dueDateStr + 'T00:00:00');
  return Math.round((due - today) / 86400000);
}

/* ── Render: Summary ─────────────────────────────────────────── */
function renderSummary() {
  const unpaid = bills.filter(b => !b.paid);
  const total  = unpaid.reduce((s, b) => s + (b.amount || 0), 0);

  const today  = new Date(); today.setHours(0,0,0,0);
  const week   = new Date(today); week.setDate(week.getDate() + 7);
  const dueThisWeek = unpaid
    .filter(b => {
      const d = new Date(b.dueDate + 'T00:00:00');
      return d >= today && d <= week;
    })
    .reduce((s, b) => s + (b.amount || 0), 0);

  const autopayCount = bills.filter(b => b.autopay).length;

  document.getElementById('total-owed').textContent   = fmt(total);
  document.getElementById('due-week').textContent     = fmt(dueThisWeek);
  document.getElementById('autopay-count').textContent = autopayCount;
  document.getElementById('total-bills').textContent  = bills.length;
}

/* ── Render: Upcoming Strip ──────────────────────────────────── */
function renderUpcoming() {
  const strip = document.querySelector('.upcoming-strip');
  const list  = document.getElementById('upcoming-list');
  const empty = document.getElementById('upcoming-empty');

  // Next 30 days of unpaid bills, sorted by date
  const upcoming = bills
    .filter(b => !b.paid && b.dueDate)
    .map(b => ({ ...b, _days: daysUntil(b.dueDate) }))
    .filter(b => b._days <= 30)
    .sort((a, b) => a._days - b._days);

  if (!strip) return; // not in DOM yet — will be injected below
  list.innerHTML = '';

  if (upcoming.length === 0) {
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  upcoming.forEach(b => {
    const severity = dueSeverity(b.dueDate, b.paid);
    const chip = document.createElement('div');
    chip.className = 'upcoming-chip' + (severity ? ' ' + severity : '');

    let dateLabel;
    if (b._days < 0)      dateLabel = `${Math.abs(b._days)}d overdue`;
    else if (b._days === 0) dateLabel = 'Due today';
    else if (b._days === 1) dateLabel = 'Due tomorrow';
    else                   dateLabel = `Due in ${b._days}d`;

    chip.innerHTML = `
      <span class="chip-name">${esc(b.name)}</span>
      <span class="chip-date">${dateLabel} · ${formatDueDate(b.dueDate)}</span>
      <span class="chip-amount">${fmt(b.amount)}</span>
    `;
    list.appendChild(chip);
  });
}

/* ── Render: Table ───────────────────────────────────────────── */
function renderTable() {
  const tbody = document.getElementById('bills-body');
  const empty = document.getElementById('empty-state');
  tbody.innerHTML = '';

  let filtered = bills.filter(b => {
    if (filterCategory && b.category !== filterCategory) return false;
    if (filterStatus === 'paid'   &&  !b.paid) return false;
    if (filterStatus === 'unpaid' &&   b.paid) return false;
    if (searchQuery && !b.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  // Sort: overdue first, then by due date asc, then paid at bottom
  filtered.sort((a, b) => {
    if (a.paid !== b.paid) return a.paid ? 1 : -1;
    return new Date(a.dueDate) - new Date(b.dueDate);
  });

  if (filtered.length === 0) {
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  filtered.forEach(bill => {
    const severity = dueSeverity(bill.dueDate, bill.paid);
    const days     = daysUntil(bill.dueDate);

    let statusBadge;
    if (bill.paid) {
      statusBadge = '<span class="badge badge-paid">Paid</span>';
    } else if (severity === 'overdue') {
      statusBadge = '<span class="badge badge-overdue">Overdue</span>';
    } else {
      statusBadge = '<span class="badge badge-unpaid">Unpaid</span>';
    }

    let dueDateHtml = formatDueDate(bill.dueDate);
    if (!bill.paid) {
      let sub = '';
      if (days < 0)       sub = `<span class="due-date-label" style="color:var(--danger)">${Math.abs(days)}d overdue</span>`;
      else if (days === 0) sub = `<span class="due-date-label" style="color:var(--warn-text)">Today!</span>`;
      else if (days <= 7)  sub = `<span class="due-date-label" style="color:var(--warn-text)">In ${days}d</span>`;
      dueDateHtml += sub;
    }

    const tr = document.createElement('tr');
    if (!bill.paid && severity) tr.classList.add(severity);
    if (bill.paid) tr.classList.add('paid');

    tr.innerHTML = `
      <td>
        <strong>${esc(bill.name)}</strong>
        ${bill.notes ? `<br><small style="color:var(--muted)">${esc(bill.notes)}</small>` : ''}
      </td>
      <td><span class="badge badge-category">${esc(bill.category)}</span></td>
      <td><strong>${fmt(bill.amount)}</strong></td>
      <td class="due-date-cell">${dueDateHtml}</td>
      <td>${bill.autopay ? '✓ Yes' : '—'}</td>
      <td>${statusBadge}</td>
      <td>
        <div class="actions-cell">
          <button class="btn-icon" title="${bill.paid ? 'Mark unpaid' : 'Mark paid'}" data-action="toggle-paid" data-id="${bill.id}">
            ${bill.paid ? '↩' : '✓'}
          </button>
          <button class="btn-icon" title="Payment history" data-action="history" data-id="${bill.id}">📋</button>
          <button class="btn-icon" title="Edit" data-action="edit" data-id="${bill.id}">✎</button>
          <button class="btn-icon" title="Delete" data-action="delete" data-id="${bill.id}" style="color:var(--danger)">✕</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function render() {
  renderSummary();
  renderUpcoming();
  renderTable();
}

/* ── Escape HTML ─────────────────────────────────────────────── */
function esc(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── Modal helpers ───────────────────────────────────────────── */
function openAddModal() {
  editingId = null;
  document.getElementById('modal-title').textContent = 'Add Bill';
  document.getElementById('bill-form').reset();
  document.getElementById('bill-id').value = '';
  // Default due date to today
  document.getElementById('bill-due-date').value = new Date().toISOString().slice(0, 10);
  document.getElementById('modal-overlay').classList.remove('hidden');
  document.getElementById('bill-name').focus();
}

function openEditModal(id) {
  const bill = bills.find(b => b.id === id);
  if (!bill) return;
  editingId = id;
  document.getElementById('modal-title').textContent = 'Edit Bill';
  document.getElementById('bill-id').value       = bill.id;
  document.getElementById('bill-name').value     = bill.name;
  document.getElementById('bill-category').value = bill.category;
  document.getElementById('bill-amount').value   = bill.amount;
  document.getElementById('bill-due-date').value = bill.dueDate;
  document.getElementById('bill-autopay').checked = bill.autopay;
  document.getElementById('bill-notes').value    = bill.notes || '';
  document.getElementById('modal-overlay').classList.remove('hidden');
  document.getElementById('bill-name').focus();
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}

/* ── History Modal ───────────────────────────────────────────── */
function openHistoryModal(id) {
  historyBillId = id;
  const bill = bills.find(b => b.id === id);
  if (!bill) return;
  document.getElementById('history-bill-name').textContent = bill.name;
  document.getElementById('pay-amount').value = bill.amount || '';
  document.getElementById('pay-date').value   = new Date().toISOString().slice(0, 10);
  document.getElementById('history-overlay').classList.remove('hidden');
  renderHistoryTable(bill);
}

function renderHistoryTable(bill) {
  const tbody = document.getElementById('history-body');
  const empty = document.getElementById('history-empty');
  tbody.innerHTML = '';
  const payments = bill.payments || [];
  if (payments.length === 0) {
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');
  [...payments].reverse().forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${formatDueDate(p.date)}</td><td>${fmt(p.amount)}</td>`;
    tbody.appendChild(tr);
  });
}

function closeHistoryModal() {
  document.getElementById('history-overlay').classList.add('hidden');
  historyBillId = null;
}

/* ── Event handlers ──────────────────────────────────────────── */
document.getElementById('btn-add').addEventListener('click', openAddModal);
document.getElementById('btn-cancel').addEventListener('click', closeModal);
document.getElementById('btn-close-history').addEventListener('click', closeHistoryModal);

// Close modals on overlay click
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});
document.getElementById('history-overlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeHistoryModal();
});

// Form submit (add / edit)
document.getElementById('bill-form').addEventListener('submit', e => {
  e.preventDefault();
  const id       = document.getElementById('bill-id').value;
  const name     = document.getElementById('bill-name').value.trim();
  const category = document.getElementById('bill-category').value;
  const amount   = parseFloat(document.getElementById('bill-amount').value) || 0;
  const dueDate  = document.getElementById('bill-due-date').value;
  const autopay  = document.getElementById('bill-autopay').checked;
  const notes    = document.getElementById('bill-notes').value.trim();

  if (!name || !dueDate) return;

  if (id) {
    // Edit
    const idx = bills.findIndex(b => b.id === id);
    if (idx !== -1) {
      bills[idx] = { ...bills[idx], name, category, amount, dueDate, autopay, notes };
    }
  } else {
    // Add
    bills.push({ id: uid(), name, category, amount, dueDate, autopay, notes, paid: false, payments: [] });
  }

  save(bills);
  render();
  closeModal();
});

// Log payment
document.getElementById('btn-log-payment').addEventListener('click', () => {
  const amount = parseFloat(document.getElementById('pay-amount').value) || 0;
  const date   = document.getElementById('pay-date').value;
  if (!amount || !date || !historyBillId) return;

  const bill = bills.find(b => b.id === historyBillId);
  if (!bill) return;
  bill.payments = bill.payments || [];
  bill.payments.push({ amount, date });
  save(bills);
  renderHistoryTable(bill);
  render();
});

// Table action buttons (delegated)
document.getElementById('bills-body').addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const { action, id } = btn.dataset;

  if (action === 'edit') {
    openEditModal(id);
  } else if (action === 'delete') {
    if (confirm('Delete this bill?')) {
      bills = bills.filter(b => b.id !== id);
      save(bills);
      render();
    }
  } else if (action === 'toggle-paid') {
    const bill = bills.find(b => b.id === id);
    if (bill) { bill.paid = !bill.paid; save(bills); render(); }
  } else if (action === 'history') {
    openHistoryModal(id);
  }
});

// Filters
document.getElementById('search').addEventListener('input', e => {
  searchQuery = e.target.value;
  renderTable();
});
document.getElementById('filter-category').addEventListener('change', e => {
  filterCategory = e.target.value;
  renderTable();
});
document.getElementById('filter-status').addEventListener('change', e => {
  filterStatus = e.target.value;
  renderTable();
});

// Keyboard shortcut: Escape closes modals
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeHistoryModal();
  }
});

/* ── Inject upcoming strip into DOM (after summary) ──────────── */
(function injectUpcomingStrip() {
  const strip = document.createElement('section');
  strip.className = 'upcoming-strip';
  strip.innerHTML = `
    <h2>Upcoming (next 30 days)</h2>
    <div class="upcoming-list" id="upcoming-list"></div>
    <p id="upcoming-empty" class="hidden">No unpaid bills due in the next 30 days.</p>
  `;
  const summary = document.querySelector('.summary');
  summary.parentNode.insertBefore(strip, summary.nextSibling);
})();

/* ── Boot ────────────────────────────────────────────────────── */
render();
