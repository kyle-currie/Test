/* NASA Budget Dashboard — FY2027
 * Sources:
 *   NASA FY26 CBJ Technical Supplement (May 2025)
 *   NASA Authorization Act of 2026 / S.933 Cruz-Cantwell (Senate Commerce, Mar 4 2026)
 *   H.R.1 One Big Beautiful Bill Act (P.L. 119-21), Title IV, Sec. 40005
 */

const { useState } = React;
const {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} = Recharts;

/* ── Color palette ───────────────────────────────────────────── */
const ORANGE = "#f0883e";
const BLUE   = "#58a6ff";
const PURPLE = "#a371f7";
const GRAY   = "#8b949e";
const GREEN  = "#3fb950";
const RED    = "#f85149";

/* ── Budget data (FY27 by directorate) ──────────────────────── */
// PPBE = FY26 CBJ outyear column; Auth = S.933 Cruz-Cantwell authorized level
// OBBA = one-time H.R.1 supplemental (Title IV § 40005), available thru Sep 30 2032
const DATA = [
  {
    short: "SMD",
    full:  "Science Mission Directorate",
    ppbe:  6.147,
    auth:  7.264,
    obba:  0,
  },
  {
    short: "STMD",
    full:  "Space Technology Mission Directorate",
    ppbe:  1.100,
    auth:  1.350,
    obba:  0,
  },
  {
    short: "ESDMD",
    full:  "Exploration Systems Development Mission Directorate",
    ppbe:  7.165,
    auth:  8.100,
    obba:  3.450,
  },
  {
    short: "SOMD",
    full:  "Space Operations Mission Directorate",
    ppbe:  4.328,
    auth:  4.750,
    obba:  0,
  },
  {
    short: "ARMD",
    full:  "Aeronautics Research Mission Directorate",
    ppbe:  0.935,
    auth:  1.100,
    obba:  0,
  },
  {
    short: "MSD",
    full:  "Mission Support Directorate",
    ppbe:  2.982,
    auth:  3.150,
    obba:  0,
  },
  {
    short: "SSMS",
    full:  "Safety, Security & Mission Services",
    ppbe:  0.285,
    auth:  0.310,
    obba:  0,
  },
  {
    short: "CERC",
    full:  "Construction & Environmental Compliance",
    ppbe:  0.523,
    auth:  0.650,
    obba:  0.100,
  },
  {
    short: "OIG",
    full:  "Office of Inspector General",
    ppbe:  0.044,
    auth:  0.051,
    obba:  0,
  },
];

/* ── OBBA line-item detail ───────────────────────────────────── */
const OBBA_PROGRAMS = [
  {
    name: "Space Launch System — Production Surge",
    amt:  1.500,
    dir:  "ESDMD",
    note: "Min. 2 cores/yr production rate; avail. thru Sep 30 2032",
  },
  {
    name: "Orion Crew Vehicle — Block 2 Development",
    amt:  0.850,
    dir:  "ESDMD",
    note: "Avail. thru Sep 30 2032",
  },
  {
    name: "Lunar Gateway — HALO/PPE Production",
    amt:  0.600,
    dir:  "ESDMD",
    note: "Avail. thru Sep 30 2032",
  },
  {
    name: "Human Landing System — Option B Provider",
    amt:  0.400,
    dir:  "ESDMD",
    note: "Non-SpaceX commercial provider; avail. thru Sep 30 2032",
  },
  {
    name: "Artemis Surface Mobility (Lunar Terrain Vehicle)",
    amt:  0.100,
    dir:  "ESDMD",
    note: "Avail. thru Sep 30 2032",
  },
  {
    name: "Facility Revitalization — KSC / MSFC / JSC",
    amt:  0.100,
    dir:  "CERC",
    note: "Critical infrastructure; avail. thru Sep 30 2032",
  },
];

/* ── Derived totals ──────────────────────────────────────────── */
const tPPBE = DATA.reduce((s, d) => s + d.ppbe, 0); // ≈ 23.5
const tAuth = DATA.reduce((s, d) => s + d.auth, 0); // ≈ 26.7
const tOBBA = DATA.reduce((s, d) => s + d.obba, 0); // ≈ 3.55

/* ── Chart data ──────────────────────────────────────────────── */
const chartData = DATA.map(d => ({
  short: d.short,
  ppbe:  d.ppbe,
  auth:  d.auth,
  obba:  d.obba,
}));

/* ── Custom tooltip ──────────────────────────────────────────── */
function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div style={{
      background: "#161b22",
      border: "1px solid #30363d",
      borderRadius: 8,
      padding: "10px 14px",
      fontSize: 11,
      fontFamily: "monospace",
    }}>
      <div style={{ color: "#f0f6fc", fontWeight: 700, marginBottom: 6 }}>{label}</div>
      {payload.map(p => (
        <div key={p.name} style={{ color: p.fill, marginBottom: 3 }}>
          {p.name}: <strong>${p.value.toFixed(2)}B</strong>
        </div>
      ))}
    </div>
  );
}

/* ── Main dashboard ──────────────────────────────────────────── */
function App() {
  const [view, setView] = useState("chart");

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
          <span style={{
            background: "rgba(88,166,255,.12)",
            border: "1px solid rgba(88,166,255,.3)",
            borderRadius: 6,
            padding: "3px 9px",
            fontSize: 10,
            color: BLUE,
            fontFamily: "monospace",
            letterSpacing: ".12em",
            textTransform: "uppercase",
          }}>
            NASA · FY2027
          </span>
          <span style={{ fontSize: 10, color: GRAY }}>Budget Comparison Dashboard</span>
        </div>
        <h1 style={{
          fontSize: "clamp(18px,3vw,26px)",
          fontWeight: 700,
          color: "#f0f6fc",
          letterSpacing: "-.01em",
        }}>
          FY2027 Budget Authority by Directorate
        </h1>
        <p style={{ fontSize: 11, color: GRAY, marginTop: 4 }}>
          PPBE outyear vs. Authorization Act vs. OBBA supplemental
        </p>
      </div>

      {/* Summary cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 20 }}>
        {[
          { label: "FY27 PPBE Outyear",  value: `$${tPPBE.toFixed(1)}B`, color: ORANGE, sub: "Annual · FY26 CBJ outyear column" },
          { label: "Auth Act FY27",       value: `$${tAuth.toFixed(1)}B`, color: BLUE,   sub: "Annual · S.933 Cruz-Cantwell" },
          { label: "OBBA Supplemental",   value: `$${tOBBA.toFixed(2)}B`, color: PURPLE, sub: "One-time · thru Sep 30 2032" },
        ].map(c => (
          <div key={c.label} style={{
            background: "rgba(255,255,255,.04)",
            border: "1px solid #21262d",
            borderRadius: 10,
            padding: "12px 14px",
          }}>
            <div style={{ fontSize: 9, color: GRAY, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 4 }}>{c.label}</div>
            <div style={{ fontSize: "clamp(18px,2.5vw,24px)", fontWeight: 700, color: c.color }}>{c.value}</div>
            <div style={{ fontSize: 9, color: GRAY, marginTop: 3 }}>{c.sub}</div>
          </div>
        ))}
      </div>

      {/* View toggle */}
      <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
        {["chart", "table", "obba"].map(v => (
          <button
            key={v}
            onClick={() => setView(v)}
            style={{
              background: view === v ? "rgba(255,255,255,.1)" : "transparent",
              border: `1px solid ${view === v ? "#444" : "#21262d"}`,
              borderRadius: 6,
              padding: "5px 14px",
              color: view === v ? "#f0f6fc" : GRAY,
              fontSize: 10,
              fontFamily: "monospace",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: ".1em",
            }}
          >
            {v === "obba" ? "OBBA Detail" : v}
          </button>
        ))}
      </div>

      {/* ── Chart view ── */}
      {view === "chart" && (
        <div style={{
          background: "rgba(255,255,255,.025)",
          border: "1px solid #21262d",
          borderRadius: 12,
          padding: "20px 8px 12px",
        }}>
          <ResponsiveContainer width="100%" height={340}>
            <BarChart data={chartData} margin={{ top: 4, right: 12, left: 4, bottom: 4 }} barCategoryGap="22%">
              <CartesianGrid strokeDasharray="3 3" stroke="#1c2128" vertical={false} />
              <XAxis
                dataKey="short"
                tick={{ fill: GRAY, fontSize: 10, fontFamily: "monospace" }}
                axisLine={{ stroke: "#21262d" }}
                tickLine={false}
              />
              <YAxis
                tickFormatter={v => `$${v}B`}
                tick={{ fill: GRAY, fontSize: 10, fontFamily: "monospace" }}
                axisLine={false}
                tickLine={false}
                width={44}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,.04)" }} />
              <Bar dataKey="ppbe" name="PPBE FY27"     fill={ORANGE} radius={[3, 3, 0, 0]} />
              <Bar dataKey="auth" name="Auth Act FY27" fill={BLUE}   radius={[3, 3, 0, 0]} />
              <Bar dataKey="obba" name="OBBA Supp."    fill={PURPLE} radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div style={{ display: "flex", gap: 20, justifyContent: "center", marginTop: 8, fontSize: 10, color: GRAY }}>
            {[["PPBE FY27", ORANGE], ["Auth Act FY27", BLUE], ["OBBA Supp.", PURPLE]].map(([label, color]) => (
              <span key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 10, height: 10, borderRadius: 2, background: color, display: "inline-block" }} />
                {label}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 10, fontSize: 9, color: "#6e7681", textAlign: "center" }}>
            OBBA is a one-time supplemental (available thru FY2032), not annual budget authority — shown for scale reference only
          </div>
        </div>
      )}

      {/* ── Table view ── */}
      {view === "table" && (
        <div style={{
          background: "rgba(255,255,255,.025)",
          border: "1px solid #21262d",
          borderRadius: 12,
          overflow: "auto",
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
            <thead>
              <tr style={{ background: "rgba(255,255,255,.04)" }}>
                {["Directorate", "PPBE FY27", "Auth Act FY27", "Δ $B", "Δ %", "OBBA Supp."].map((h, i) => (
                  <th key={h} style={{
                    padding: "10px 14px",
                    textAlign: i === 0 ? "left" : "right",
                    color: GRAY,
                    fontWeight: 600,
                    borderBottom: "1px solid #21262d",
                    whiteSpace: "nowrap",
                    fontSize: 10,
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DATA.map((d, i) => {
                const dl = d.auth - d.ppbe;
                const pc = d.ppbe > 0 ? (dl / d.ppbe * 100).toFixed(0) : null;
                return (
                  <tr
                    key={i}
                    style={{ borderBottom: "1px solid #161b22", transition: "background .12s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.04)"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >
                    <td style={{ padding: "9px 14px", color: "#f0f6fc" }}>{d.full}</td>
                    <td style={{ padding: "9px 14px", textAlign: "right", color: ORANGE }}>${d.ppbe.toFixed(2)}B</td>
                    <td style={{ padding: "9px 14px", textAlign: "right", color: BLUE }}>${d.auth.toFixed(2)}B</td>
                    <td style={{ padding: "9px 14px", textAlign: "right", fontWeight: 600, color: dl >= 0 ? GREEN : RED }}>
                      {dl >= 0 ? "+" : ""}{dl.toFixed(2)}B
                    </td>
                    <td style={{ padding: "9px 14px", textAlign: "right", color: dl >= 0 ? GREEN : RED }}>
                      {pc === null ? "∞" : `${Number(pc) >= 0 ? "+" : ""}${pc}%`}
                    </td>
                    <td style={{ padding: "9px 14px", textAlign: "right", color: d.obba > 0 ? PURPLE : GRAY }}>
                      {d.obba > 0 ? `$${d.obba.toFixed(2)}B` : "—"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr style={{ background: "rgba(255,255,255,.04)", borderTop: "1px solid #444" }}>
                <td style={{ padding: "10px 14px", fontWeight: 700, color: "#f0f6fc" }}>TOTAL</td>
                <td style={{ padding: "10px 14px", textAlign: "right", fontWeight: 700, color: ORANGE }}>${tPPBE.toFixed(1)}B</td>
                <td style={{ padding: "10px 14px", textAlign: "right", fontWeight: 700, color: BLUE }}>${tAuth.toFixed(1)}B</td>
                <td style={{ padding: "10px 14px", textAlign: "right", fontWeight: 700, color: GREEN }}>
                  +${(tAuth - tPPBE).toFixed(1)}B
                </td>
                <td style={{ padding: "10px 14px", textAlign: "right", fontWeight: 700, color: GREEN }}>
                  +{((tAuth - tPPBE) / tPPBE * 100).toFixed(0)}%
                </td>
                <td style={{ padding: "10px 14px", textAlign: "right", fontWeight: 700, color: PURPLE }}>
                  ${DATA.reduce((s, d) => s + d.obba, 0).toFixed(2)}B
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}

      {/* ── OBBA detail view ── */}
      {view === "obba" && (
        <div style={{
          background: "rgba(255,255,255,.025)",
          border: "1px solid #21262d",
          borderRadius: 12,
          overflow: "hidden",
        }}>
          <div style={{
            padding: "12px 16px",
            borderBottom: "1px solid #21262d",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <div>
              <span style={{ fontSize: 10, color: PURPLE, letterSpacing: ".15em", textTransform: "uppercase" }}>
                One Big Beautiful Bill Act
              </span>
              <span style={{ fontSize: 10, color: GRAY, marginLeft: 10 }}>
                Signed Jul 4 2025 · H.R.1 · Available thru Sep 30 2032
              </span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: PURPLE }}>${tOBBA.toFixed(3)}B total</span>
          </div>
          <div style={{ padding: "8px 0 4px", fontSize: 9, color: RED, textAlign: "center" }}>
            ⚠ Supplemental appropriation — separate from annual budget authority
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
            <thead>
              <tr style={{ background: "rgba(255,255,255,.04)" }}>
                {["Program / Item", "Amount", "Directorate", "Key Conditions"].map((h, i) => (
                  <th key={h} style={{
                    padding: "9px 14px",
                    textAlign: i === 1 ? "right" : "left",
                    color: GRAY,
                    fontWeight: 600,
                    borderBottom: "1px solid #21262d",
                    fontSize: 10,
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {OBBA_PROGRAMS.map((p, i) => (
                <tr
                  key={i}
                  style={{ borderBottom: "1px solid #161b22", transition: "background .12s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(167,113,247,.06)"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                >
                  <td style={{ padding: "9px 14px", color: "#f0f6fc" }}>{p.name}</td>
                  <td style={{ padding: "9px 14px", textAlign: "right", color: PURPLE, fontWeight: 600 }}>
                    ${p.amt.toFixed(3)}B
                  </td>
                  <td style={{ padding: "9px 14px", color: GRAY }}>{p.dir}</td>
                  <td style={{ padding: "9px 14px", color: GRAY, fontSize: 10, fontStyle: "italic" }}>{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Footer / sources */}
      <div style={{ marginTop: 14, fontSize: 9, color: "#6e7681", lineHeight: 1.8 }}>
        Sources: NASA FY26 CBJ Technical Supplement (May 2025) · NASA Authorization Act of 2026 / S.933 Cruz-Cantwell
        substitute (Senate Commerce, Mar 4 2026) · H.R.1 One Big Beautiful Bill Act (P.L. 119-21), Title IV, Sec. 40005
      </div>
    </div>
  );
}

/* ── Bootstrap ───────────────────────────────────────────────── */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
