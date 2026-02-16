// Sample polling data for Senate and House races
const pollingData = {
  senate: [
    {
      state: "Arizona", abbr: "AZ", rating: "tossup",
      candidates: [
        { name: "Ruben Gallego", party: "dem", pct: 48.2, trend: "up" },
        { name: "Kari Lake", party: "rep", pct: 46.8, trend: "down" }
      ],
      pollster: "Marist College", date: "2026-02-10", sampleSize: 1245
    },
    {
      state: "Georgia", abbr: "GA", rating: "lean-r",
      candidates: [
        { name: "Jon Ossoff", party: "dem", pct: 45.1, trend: "down" },
        { name: "Larry Hogan", party: "rep", pct: 49.3, trend: "up" }
      ],
      pollster: "Quinnipiac", date: "2026-02-08", sampleSize: 1102
    },
    {
      state: "Michigan", abbr: "MI", rating: "lean-d",
      candidates: [
        { name: "Gary Peters", party: "dem", pct: 50.1, trend: "up" },
        { name: "John James", party: "rep", pct: 44.7, trend: "flat" }
      ],
      pollster: "EPIC-MRA", date: "2026-02-12", sampleSize: 980
    },
    {
      state: "Nevada", abbr: "NV", rating: "tossup",
      candidates: [
        { name: "Catherine Cortez Masto", party: "dem", pct: 47.0, trend: "flat" },
        { name: "Sam Brown", party: "rep", pct: 47.5, trend: "up" }
      ],
      pollster: "Suffolk University", date: "2026-02-09", sampleSize: 1050
    },
    {
      state: "Pennsylvania", abbr: "PA", rating: "tossup",
      candidates: [
        { name: "John Fetterman", party: "dem", pct: 46.9, trend: "down" },
        { name: "Dave McCormick", party: "rep", pct: 47.1, trend: "up" }
      ],
      pollster: "Franklin & Marshall", date: "2026-02-11", sampleSize: 1180
    },
    {
      state: "Wisconsin", abbr: "WI", rating: "lean-d",
      candidates: [
        { name: "Tammy Baldwin", party: "dem", pct: 50.8, trend: "up" },
        { name: "Eric Hovde", party: "rep", pct: 44.2, trend: "down" }
      ],
      pollster: "Marquette Law", date: "2026-02-13", sampleSize: 1340
    },
    {
      state: "Ohio", abbr: "OH", rating: "lean-r",
      candidates: [
        { name: "Tim Ryan", party: "dem", pct: 43.5, trend: "down" },
        { name: "Bernie Moreno", party: "rep", pct: 50.2, trend: "up" }
      ],
      pollster: "Emerson College", date: "2026-02-07", sampleSize: 1015
    },
    {
      state: "North Carolina", abbr: "NC", rating: "tossup",
      candidates: [
        { name: "Cheri Beasley", party: "dem", pct: 47.6, trend: "up" },
        { name: "Ted Budd", party: "rep", pct: 47.3, trend: "flat" }
      ],
      pollster: "PPP", date: "2026-02-14", sampleSize: 890
    },
    {
      state: "New Hampshire", abbr: "NH", rating: "lean-d",
      candidates: [
        { name: "Maggie Hassan", party: "dem", pct: 51.4, trend: "up" },
        { name: "Don Bolduc", party: "rep", pct: 42.8, trend: "down" }
      ],
      pollster: "UNH Survey Center", date: "2026-02-06", sampleSize: 975
    },
    {
      state: "Florida", abbr: "FL", rating: "lean-r",
      candidates: [
        { name: "Val Demings", party: "dem", pct: 44.0, trend: "flat" },
        { name: "Rick Scott", party: "rep", pct: 50.6, trend: "up" }
      ],
      pollster: "Mason-Dixon", date: "2026-02-05", sampleSize: 1125
    },
    {
      state: "Texas", abbr: "TX", rating: "solid-r",
      candidates: [
        { name: "Colin Allred", party: "dem", pct: 41.2, trend: "down" },
        { name: "Ted Cruz", party: "rep", pct: 53.4, trend: "up" }
      ],
      pollster: "UT Tyler", date: "2026-02-04", sampleSize: 1300
    },
    {
      state: "Colorado", abbr: "CO", rating: "solid-d",
      candidates: [
        { name: "Michael Bennet", party: "dem", pct: 54.2, trend: "up" },
        { name: "Joe O'Dea", party: "rep", pct: 39.8, trend: "down" }
      ],
      pollster: "Keating Research", date: "2026-02-03", sampleSize: 870
    },
    {
      state: "Maine", abbr: "ME", rating: "lean-d",
      candidates: [
        { name: "Angus King", party: "dem", pct: 49.7, trend: "flat" },
        { name: "Paul LePage", party: "rep", pct: 43.1, trend: "down" }
      ],
      pollster: "Critical Insights", date: "2026-02-01", sampleSize: 780
    },
    {
      state: "Iowa", abbr: "IA", rating: "solid-r",
      candidates: [
        { name: "Mike Franken", party: "dem", pct: 39.5, trend: "down" },
        { name: "Chuck Grassley", party: "rep", pct: 55.1, trend: "flat" }
      ],
      pollster: "Selzer & Co", date: "2026-01-30", sampleSize: 1150
    }
  ],
  house: [
    {
      state: "California", abbr: "CA-45", rating: "tossup",
      candidates: [
        { name: "Jay Chen", party: "dem", pct: 48.5, trend: "up" },
        { name: "Michelle Steel", party: "rep", pct: 47.2, trend: "down" }
      ],
      pollster: "PPIC", date: "2026-02-12", sampleSize: 650
    },
    {
      state: "New York", abbr: "NY-19", rating: "tossup",
      candidates: [
        { name: "Josh Riley", party: "dem", pct: 46.8, trend: "flat" },
        { name: "Marc Molinaro", party: "rep", pct: 48.1, trend: "up" }
      ],
      pollster: "Siena College", date: "2026-02-10", sampleSize: 580
    },
    {
      state: "Virginia", abbr: "VA-07", rating: "lean-d",
      candidates: [
        { name: "Abigail Spanberger", party: "dem", pct: 51.3, trend: "up" },
        { name: "Yesli Vega", party: "rep", pct: 43.9, trend: "down" }
      ],
      pollster: "Roanoke College", date: "2026-02-11", sampleSize: 620
    },
    {
      state: "Colorado", abbr: "CO-08", rating: "tossup",
      candidates: [
        { name: "Yadira Caraveo", party: "dem", pct: 47.6, trend: "up" },
        { name: "Barbara Kirkmeyer", party: "rep", pct: 47.0, trend: "flat" }
      ],
      pollster: "Keating Research", date: "2026-02-09", sampleSize: 590
    },
    {
      state: "Michigan", abbr: "MI-10", rating: "lean-r",
      candidates: [
        { name: "Carl Marlinga", party: "dem", pct: 44.1, trend: "down" },
        { name: "John James", party: "rep", pct: 50.8, trend: "up" }
      ],
      pollster: "EPIC-MRA", date: "2026-02-08", sampleSize: 540
    },
    {
      state: "Oregon", abbr: "OR-05", rating: "lean-d",
      candidates: [
        { name: "Jamie McLeod-Skinner", party: "dem", pct: 49.8, trend: "flat" },
        { name: "Lori Chavez-DeRemer", party: "rep", pct: 45.4, trend: "up" }
      ],
      pollster: "DHM Research", date: "2026-02-07", sampleSize: 610
    },
    {
      state: "Kansas", abbr: "KS-03", rating: "tossup",
      candidates: [
        { name: "Sharice Davids", party: "dem", pct: 48.9, trend: "up" },
        { name: "Amanda Adkins", party: "rep", pct: 46.7, trend: "down" }
      ],
      pollster: "Fort Hays State", date: "2026-02-06", sampleSize: 530
    },
    {
      state: "Pennsylvania", abbr: "PA-07", rating: "lean-d",
      candidates: [
        { name: "Susan Wild", party: "dem", pct: 50.5, trend: "up" },
        { name: "Lisa Scheller", party: "rep", pct: 44.3, trend: "flat" }
      ],
      pollster: "Muhlenberg College", date: "2026-02-13", sampleSize: 680
    },
    {
      state: "Texas", abbr: "TX-34", rating: "lean-r",
      candidates: [
        { name: "Vicente Gonzalez", party: "dem", pct: 44.7, trend: "down" },
        { name: "Mayra Flores", party: "rep", pct: 49.9, trend: "up" }
      ],
      pollster: "UT Tyler", date: "2026-02-05", sampleSize: 560
    },
    {
      state: "New Jersey", abbr: "NJ-07", rating: "tossup",
      candidates: [
        { name: "Tom Malinowski", party: "dem", pct: 47.3, trend: "flat" },
        { name: "Tom Kean Jr.", party: "rep", pct: 48.0, trend: "up" }
      ],
      pollster: "Monmouth University", date: "2026-02-14", sampleSize: 640
    },
    {
      state: "Ohio", abbr: "OH-01", rating: "lean-r",
      candidates: [
        { name: "Greg Landsman", party: "dem", pct: 44.0, trend: "up" },
        { name: "Steve Chabot", party: "rep", pct: 50.1, trend: "flat" }
      ],
      pollster: "Emerson College", date: "2026-02-04", sampleSize: 510
    },
    {
      state: "Washington", abbr: "WA-03", rating: "solid-r",
      candidates: [
        { name: "Marie Perez", party: "dem", pct: 40.5, trend: "down" },
        { name: "Joe Kent", party: "rep", pct: 54.2, trend: "up" }
      ],
      pollster: "Elway Research", date: "2026-02-02", sampleSize: 490
    },
    {
      state: "Illinois", abbr: "IL-06", rating: "solid-d",
      candidates: [
        { name: "Sean Casten", party: "dem", pct: 55.3, trend: "up" },
        { name: "Keith Pekau", party: "rep", pct: 38.7, trend: "down" }
      ],
      pollster: "Paul Simon Institute", date: "2026-02-03", sampleSize: 570
    },
    {
      state: "North Carolina", abbr: "NC-13", rating: "tossup",
      candidates: [
        { name: "Wiley Nickel", party: "dem", pct: 47.8, trend: "up" },
        { name: "Bo Hines", party: "rep", pct: 47.5, trend: "flat" }
      ],
      pollster: "PPP", date: "2026-02-11", sampleSize: 600
    }
  ]
};

// State
let currentChamber = "senate";

// DOM elements
const racesContainer = document.getElementById("races-container");
const stateFilter = document.getElementById("state-filter");
const ratingFilter = document.getElementById("rating-filter");
const sortFilter = document.getElementById("sort-filter");
const tabs = document.querySelectorAll(".tab");

// Initialize
function init() {
  document.getElementById("last-updated").textContent = new Date().toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric"
  });

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentChamber = tab.dataset.chamber;
      populateStateFilter();
      render();
    });
  });

  stateFilter.addEventListener("change", render);
  ratingFilter.addEventListener("change", render);
  sortFilter.addEventListener("change", render);

  populateStateFilter();
  render();
}

function populateStateFilter() {
  const races = pollingData[currentChamber];
  const states = [...new Set(races.map(r => r.state))].sort();
  stateFilter.innerHTML = '<option value="all">All States</option>';
  states.forEach(s => {
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = s;
    stateFilter.appendChild(opt);
  });
}

function getRatingLabel(rating) {
  const labels = {
    "solid-d": "Solid D",
    "lean-d": "Lean D",
    "tossup": "Tossup",
    "lean-r": "Lean R",
    "solid-r": "Solid R"
  };
  return labels[rating] || rating;
}

function getFilteredRaces() {
  let races = [...pollingData[currentChamber]];
  const stateVal = stateFilter.value;
  const ratingVal = ratingFilter.value;
  const sortVal = sortFilter.value;

  if (stateVal !== "all") {
    races = races.filter(r => r.state === stateVal);
  }
  if (ratingVal !== "all") {
    races = races.filter(r => r.rating === ratingVal);
  }

  if (sortVal === "margin") {
    races.sort((a, b) => {
      const marginA = Math.abs(a.candidates[0].pct - a.candidates[1].pct);
      const marginB = Math.abs(b.candidates[0].pct - b.candidates[1].pct);
      return marginA - marginB;
    });
  } else if (sortVal === "recent") {
    races.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else {
    races.sort((a, b) => a.state.localeCompare(b.state));
  }

  return races;
}

function getTrendArrow(trend) {
  if (trend === "up") return '<span class="trend-arrow up">&#9650;</span>';
  if (trend === "down") return '<span class="trend-arrow down">&#9660;</span>';
  return '<span class="trend-arrow flat">&#9644;</span>';
}

function updateSummary(races) {
  const allRaces = pollingData[currentChamber];
  const counts = { "solid-d": 0, "lean-d": 0, "tossup": 0, "lean-r": 0, "solid-r": 0 };
  allRaces.forEach(r => counts[r.rating]++);

  document.getElementById("dem-count").textContent = counts["solid-d"];
  document.getElementById("lean-d-count").textContent = counts["lean-d"];
  document.getElementById("tossup-count").textContent = counts["tossup"];
  document.getElementById("lean-r-count").textContent = counts["lean-r"];
  document.getElementById("rep-count").textContent = counts["solid-r"];

  // Seat bar
  const total = allRaces.length;
  const seatBar = document.getElementById("seat-bar");
  const demTotal = counts["solid-d"] + counts["lean-d"];
  const repTotal = counts["solid-r"] + counts["lean-r"];

  seatBar.innerHTML = `
    <div class="segment solid-d" style="width: ${(counts["solid-d"] / total) * 100}%"></div>
    <div class="segment lean-d" style="width: ${(counts["lean-d"] / total) * 100}%"></div>
    <div class="segment tossup-seg" style="width: ${(counts["tossup"] / total) * 100}%"></div>
    <div class="segment lean-r" style="width: ${(counts["lean-r"] / total) * 100}%"></div>
    <div class="segment solid-r" style="width: ${(counts["solid-r"] / total) * 100}%"></div>
  `;

  document.querySelector(".dem-label").textContent = `${demTotal} Dem`;
  document.querySelector(".rep-label").textContent = `${repTotal} Rep`;

  const majorityLabel = document.getElementById("majority-label");
  if (currentChamber === "senate") {
    majorityLabel.textContent = "Majority: 51";
  } else {
    majorityLabel.textContent = "Majority: 218";
  }
}

function renderRaceCard(race) {
  const dem = race.candidates.find(c => c.party === "dem");
  const rep = race.candidates.find(c => c.party === "rep");
  const total = dem.pct + rep.pct;
  const margin = Math.abs(dem.pct - rep.pct).toFixed(1);
  const leader = dem.pct > rep.pct ? "D" : dem.pct < rep.pct ? "R" : "Tie";
  const marginClass = leader === "D" ? "dem-leading" : leader === "R" ? "rep-leading" : "tied";
  const marginText = leader === "Tie" ? "Tied" : `${leader}+${margin}`;

  const demLeading = dem.pct >= rep.pct;
  const repLeading = rep.pct >= dem.pct;

  return `
    <div class="race-card">
      <div class="race-header">
        <div class="race-title">
          ${race.state} <span class="state-abbr">${race.abbr}</span>
        </div>
        <span class="race-rating ${race.rating}">${getRatingLabel(race.rating)}</span>
      </div>
      <div class="candidates">
        <div class="candidate-row">
          <div class="candidate-party dem"></div>
          <div class="candidate-info">
            <span class="candidate-name">${dem.name} <span class="party-label">(D)</span></span>
            <span class="candidate-pct ${demLeading ? 'leading' : ''}">${dem.pct}% <span class="trend">${getTrendArrow(dem.trend)}</span></span>
          </div>
        </div>
        <div class="candidate-row">
          <div class="candidate-party rep"></div>
          <div class="candidate-info">
            <span class="candidate-name">${rep.name} <span class="party-label">(R)</span></span>
            <span class="candidate-pct ${repLeading && !demLeading ? 'leading' : ''}">${rep.pct}% <span class="trend">${getTrendArrow(rep.trend)}</span></span>
          </div>
        </div>
      </div>
      <div class="poll-bar-container">
        <div class="poll-bar-dem" style="width: ${(dem.pct / total) * 100}%"></div>
        <div class="poll-bar-rep" style="width: ${(rep.pct / total) * 100}%"></div>
      </div>
      <div class="race-meta">
        <span class="margin-text ${marginClass}">${marginText}</span>
        <span>${race.pollster} &middot; n=${race.sampleSize} &middot; ${formatDate(race.date)}</span>
      </div>
    </div>
  `;
}

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function render() {
  const races = getFilteredRaces();
  updateSummary(races);

  if (races.length === 0) {
    racesContainer.innerHTML = '<div class="no-results">No races match the selected filters.</div>';
    return;
  }

  racesContainer.innerHTML = races.map(renderRaceCard).join("");
}

init();
