// Historical polling trends for each race (keyed by abbr)
const pollingTrends = {
  // Senate
  "AZ": [
    { date: "2025-11-15", dem: 45.0, rep: 47.5, pollster: "OH Predictive" },
    { date: "2025-12-10", dem: 45.8, rep: 47.1, pollster: "Marist College" },
    { date: "2026-01-05", dem: 46.5, rep: 47.0, pollster: "Emerson College" },
    { date: "2026-01-18", dem: 47.2, rep: 47.2, pollster: "Suffolk University" },
    { date: "2026-02-01", dem: 47.8, rep: 46.9, pollster: "Siena College" },
    { date: "2026-02-10", dem: 48.2, rep: 46.8, pollster: "Marist College" }
  ],
  "GA": [
    { date: "2025-11-20", dem: 46.8, rep: 47.0, pollster: "Emerson College" },
    { date: "2025-12-15", dem: 46.2, rep: 47.8, pollster: "AJC/UGA" },
    { date: "2026-01-08", dem: 45.9, rep: 48.5, pollster: "Quinnipiac" },
    { date: "2026-01-22", dem: 45.5, rep: 48.9, pollster: "Fox News" },
    { date: "2026-02-08", dem: 45.1, rep: 49.3, pollster: "Quinnipiac" }
  ],
  "MI": [
    { date: "2025-11-10", dem: 48.0, rep: 45.5, pollster: "EPIC-MRA" },
    { date: "2025-12-05", dem: 48.8, rep: 45.2, pollster: "Glengariff Group" },
    { date: "2026-01-10", dem: 49.3, rep: 45.0, pollster: "EPIC-MRA" },
    { date: "2026-01-25", dem: 49.7, rep: 44.8, pollster: "Mitchell Research" },
    { date: "2026-02-12", dem: 50.1, rep: 44.7, pollster: "EPIC-MRA" }
  ],
  "NV": [
    { date: "2025-11-18", dem: 46.0, rep: 46.2, pollster: "Suffolk University" },
    { date: "2025-12-12", dem: 46.5, rep: 46.8, pollster: "Nevada Ind. Poll" },
    { date: "2026-01-06", dem: 46.8, rep: 47.0, pollster: "Emerson College" },
    { date: "2026-01-20", dem: 47.0, rep: 47.2, pollster: "Mason-Dixon" },
    { date: "2026-02-09", dem: 47.0, rep: 47.5, pollster: "Suffolk University" }
  ],
  "PA": [
    { date: "2025-11-12", dem: 48.5, rep: 45.0, pollster: "Franklin & Marshall" },
    { date: "2025-12-08", dem: 48.0, rep: 45.8, pollster: "Quinnipiac" },
    { date: "2026-01-09", dem: 47.5, rep: 46.2, pollster: "Emerson College" },
    { date: "2026-01-28", dem: 47.2, rep: 46.8, pollster: "Muhlenberg College" },
    { date: "2026-02-11", dem: 46.9, rep: 47.1, pollster: "Franklin & Marshall" }
  ],
  "WI": [
    { date: "2025-11-08", dem: 49.0, rep: 45.5, pollster: "Marquette Law" },
    { date: "2025-12-06", dem: 49.5, rep: 45.0, pollster: "Marquette Law" },
    { date: "2026-01-12", dem: 50.0, rep: 44.5, pollster: "Marquette Law" },
    { date: "2026-01-30", dem: 50.4, rep: 44.3, pollster: "Emerson College" },
    { date: "2026-02-13", dem: 50.8, rep: 44.2, pollster: "Marquette Law" }
  ],
  "OH": [
    { date: "2025-11-15", dem: 45.0, rep: 48.0, pollster: "Emerson College" },
    { date: "2025-12-10", dem: 44.5, rep: 49.0, pollster: "Baldwin Wallace" },
    { date: "2026-01-07", dem: 44.0, rep: 49.5, pollster: "Quinnipiac" },
    { date: "2026-01-25", dem: 43.8, rep: 49.9, pollster: "Emerson College" },
    { date: "2026-02-07", dem: 43.5, rep: 50.2, pollster: "Emerson College" }
  ],
  "NC": [
    { date: "2025-11-20", dem: 46.0, rep: 47.8, pollster: "PPP" },
    { date: "2025-12-14", dem: 46.5, rep: 47.5, pollster: "Meredith College" },
    { date: "2026-01-10", dem: 46.9, rep: 47.5, pollster: "High Point Univ" },
    { date: "2026-01-28", dem: 47.3, rep: 47.4, pollster: "PPP" },
    { date: "2026-02-14", dem: 47.6, rep: 47.3, pollster: "PPP" }
  ],
  "NH": [
    { date: "2025-11-12", dem: 50.0, rep: 44.5, pollster: "UNH Survey Center" },
    { date: "2025-12-08", dem: 50.5, rep: 43.8, pollster: "Saint Anselm" },
    { date: "2026-01-06", dem: 50.9, rep: 43.2, pollster: "UNH Survey Center" },
    { date: "2026-01-22", dem: 51.1, rep: 43.0, pollster: "Emerson College" },
    { date: "2026-02-06", dem: 51.4, rep: 42.8, pollster: "UNH Survey Center" }
  ],
  "FL": [
    { date: "2025-11-18", dem: 45.5, rep: 49.0, pollster: "Mason-Dixon" },
    { date: "2025-12-12", dem: 45.0, rep: 49.5, pollster: "FAU BEPI" },
    { date: "2026-01-08", dem: 44.5, rep: 50.0, pollster: "Quinnipiac" },
    { date: "2026-01-24", dem: 44.2, rep: 50.3, pollster: "Mason-Dixon" },
    { date: "2026-02-05", dem: 44.0, rep: 50.6, pollster: "Mason-Dixon" }
  ],
  "TX": [
    { date: "2025-11-14", dem: 42.8, rep: 51.5, pollster: "UT Tyler" },
    { date: "2025-12-09", dem: 42.2, rep: 52.0, pollster: "Quinnipiac" },
    { date: "2026-01-06", dem: 41.8, rep: 52.8, pollster: "UT Tyler" },
    { date: "2026-01-22", dem: 41.5, rep: 53.1, pollster: "Emerson College" },
    { date: "2026-02-04", dem: 41.2, rep: 53.4, pollster: "UT Tyler" }
  ],
  "CO": [
    { date: "2025-11-10", dem: 52.5, rep: 41.5, pollster: "Keating Research" },
    { date: "2025-12-06", dem: 53.0, rep: 41.0, pollster: "Magellan Strategies" },
    { date: "2026-01-09", dem: 53.5, rep: 40.5, pollster: "Emerson College" },
    { date: "2026-01-26", dem: 53.9, rep: 40.0, pollster: "Keating Research" },
    { date: "2026-02-03", dem: 54.2, rep: 39.8, pollster: "Keating Research" }
  ],
  "ME": [
    { date: "2025-11-15", dem: 48.5, rep: 44.5, pollster: "Critical Insights" },
    { date: "2025-12-10", dem: 49.0, rep: 44.0, pollster: "Colby College" },
    { date: "2026-01-08", dem: 49.3, rep: 43.5, pollster: "Critical Insights" },
    { date: "2026-01-20", dem: 49.5, rep: 43.3, pollster: "Pan Atlantic" },
    { date: "2026-02-01", dem: 49.7, rep: 43.1, pollster: "Critical Insights" }
  ],
  "IA": [
    { date: "2025-11-10", dem: 41.0, rep: 53.5, pollster: "Selzer & Co" },
    { date: "2025-12-05", dem: 40.5, rep: 54.0, pollster: "Emerson College" },
    { date: "2026-01-06", dem: 40.0, rep: 54.5, pollster: "Selzer & Co" },
    { date: "2026-01-18", dem: 39.8, rep: 54.8, pollster: "Civiqs" },
    { date: "2026-01-30", dem: 39.5, rep: 55.1, pollster: "Selzer & Co" }
  ],
  // House
  "CA-45": [
    { date: "2025-11-12", dem: 46.0, rep: 48.5, pollster: "PPIC" },
    { date: "2025-12-08", dem: 46.8, rep: 48.0, pollster: "SurveyUSA" },
    { date: "2026-01-10", dem: 47.5, rep: 47.8, pollster: "Emerson College" },
    { date: "2026-01-28", dem: 48.0, rep: 47.5, pollster: "PPIC" },
    { date: "2026-02-12", dem: 48.5, rep: 47.2, pollster: "PPIC" }
  ],
  "NY-19": [
    { date: "2025-11-15", dem: 47.5, rep: 46.5, pollster: "Siena College" },
    { date: "2025-12-10", dem: 47.2, rep: 47.0, pollster: "Emerson College" },
    { date: "2026-01-08", dem: 47.0, rep: 47.5, pollster: "Siena College" },
    { date: "2026-01-25", dem: 46.9, rep: 47.8, pollster: "Marist College" },
    { date: "2026-02-10", dem: 46.8, rep: 48.1, pollster: "Siena College" }
  ],
  "VA-07": [
    { date: "2025-11-10", dem: 49.5, rep: 45.5, pollster: "Roanoke College" },
    { date: "2025-12-06", dem: 50.0, rep: 45.0, pollster: "CNU Wason" },
    { date: "2026-01-09", dem: 50.5, rep: 44.5, pollster: "Roanoke College" },
    { date: "2026-01-26", dem: 51.0, rep: 44.0, pollster: "Emerson College" },
    { date: "2026-02-11", dem: 51.3, rep: 43.9, pollster: "Roanoke College" }
  ],
  "CO-08": [
    { date: "2025-11-18", dem: 46.0, rep: 47.5, pollster: "Keating Research" },
    { date: "2025-12-12", dem: 46.5, rep: 47.2, pollster: "Emerson College" },
    { date: "2026-01-06", dem: 47.0, rep: 47.1, pollster: "Keating Research" },
    { date: "2026-01-22", dem: 47.3, rep: 47.0, pollster: "Magellan Strategies" },
    { date: "2026-02-09", dem: 47.6, rep: 47.0, pollster: "Keating Research" }
  ],
  "MI-10": [
    { date: "2025-11-14", dem: 45.5, rep: 49.0, pollster: "EPIC-MRA" },
    { date: "2025-12-09", dem: 45.0, rep: 49.5, pollster: "Glengariff Group" },
    { date: "2026-01-07", dem: 44.5, rep: 50.0, pollster: "EPIC-MRA" },
    { date: "2026-01-24", dem: 44.3, rep: 50.5, pollster: "Mitchell Research" },
    { date: "2026-02-08", dem: 44.1, rep: 50.8, pollster: "EPIC-MRA" }
  ],
  "OR-05": [
    { date: "2025-11-10", dem: 48.5, rep: 46.0, pollster: "DHM Research" },
    { date: "2025-12-06", dem: 49.0, rep: 45.8, pollster: "Emerson College" },
    { date: "2026-01-08", dem: 49.3, rep: 45.5, pollster: "DHM Research" },
    { date: "2026-01-22", dem: 49.5, rep: 45.5, pollster: "SurveyUSA" },
    { date: "2026-02-07", dem: 49.8, rep: 45.4, pollster: "DHM Research" }
  ],
  "KS-03": [
    { date: "2025-11-15", dem: 47.0, rep: 47.8, pollster: "Fort Hays State" },
    { date: "2025-12-10", dem: 47.5, rep: 47.5, pollster: "Emerson College" },
    { date: "2026-01-06", dem: 48.0, rep: 47.2, pollster: "Fort Hays State" },
    { date: "2026-01-20", dem: 48.5, rep: 47.0, pollster: "SurveyUSA" },
    { date: "2026-02-06", dem: 48.9, rep: 46.7, pollster: "Fort Hays State" }
  ],
  "PA-07": [
    { date: "2025-11-12", dem: 49.0, rep: 45.5, pollster: "Muhlenberg College" },
    { date: "2025-12-08", dem: 49.5, rep: 45.0, pollster: "Franklin & Marshall" },
    { date: "2026-01-10", dem: 50.0, rep: 44.8, pollster: "Muhlenberg College" },
    { date: "2026-01-28", dem: 50.2, rep: 44.5, pollster: "Emerson College" },
    { date: "2026-02-13", dem: 50.5, rep: 44.3, pollster: "Muhlenberg College" }
  ],
  "TX-34": [
    { date: "2025-11-10", dem: 46.5, rep: 48.0, pollster: "UT Tyler" },
    { date: "2025-12-05", dem: 46.0, rep: 48.5, pollster: "Emerson College" },
    { date: "2026-01-08", dem: 45.5, rep: 49.0, pollster: "UT Tyler" },
    { date: "2026-01-22", dem: 45.0, rep: 49.5, pollster: "SurveyUSA" },
    { date: "2026-02-05", dem: 44.7, rep: 49.9, pollster: "UT Tyler" }
  ],
  "NJ-07": [
    { date: "2025-11-14", dem: 48.0, rep: 46.5, pollster: "Monmouth University" },
    { date: "2025-12-09", dem: 47.8, rep: 47.0, pollster: "Emerson College" },
    { date: "2026-01-07", dem: 47.5, rep: 47.5, pollster: "Monmouth University" },
    { date: "2026-01-24", dem: 47.4, rep: 47.8, pollster: "Quinnipiac" },
    { date: "2026-02-14", dem: 47.3, rep: 48.0, pollster: "Monmouth University" }
  ],
  "OH-01": [
    { date: "2025-11-18", dem: 42.5, rep: 51.0, pollster: "Emerson College" },
    { date: "2025-12-12", dem: 43.0, rep: 50.8, pollster: "Baldwin Wallace" },
    { date: "2026-01-06", dem: 43.5, rep: 50.5, pollster: "Emerson College" },
    { date: "2026-01-20", dem: 43.8, rep: 50.3, pollster: "Quinnipiac" },
    { date: "2026-02-04", dem: 44.0, rep: 50.1, pollster: "Emerson College" }
  ],
  "WA-03": [
    { date: "2025-11-10", dem: 41.5, rep: 53.0, pollster: "Elway Research" },
    { date: "2025-12-06", dem: 41.2, rep: 53.5, pollster: "SurveyUSA" },
    { date: "2026-01-08", dem: 41.0, rep: 53.8, pollster: "Elway Research" },
    { date: "2026-01-22", dem: 40.8, rep: 54.0, pollster: "Emerson College" },
    { date: "2026-02-02", dem: 40.5, rep: 54.2, pollster: "Elway Research" }
  ],
  "IL-06": [
    { date: "2025-11-14", dem: 53.5, rep: 40.5, pollster: "Paul Simon Institute" },
    { date: "2025-12-08", dem: 54.0, rep: 40.0, pollster: "Emerson College" },
    { date: "2026-01-10", dem: 54.5, rep: 39.5, pollster: "Paul Simon Institute" },
    { date: "2026-01-26", dem: 55.0, rep: 39.0, pollster: "SurveyUSA" },
    { date: "2026-02-03", dem: 55.3, rep: 38.7, pollster: "Paul Simon Institute" }
  ],
  "NC-13": [
    { date: "2025-11-12", dem: 46.0, rep: 48.0, pollster: "PPP" },
    { date: "2025-12-08", dem: 46.5, rep: 47.8, pollster: "High Point Univ" },
    { date: "2026-01-06", dem: 47.0, rep: 47.8, pollster: "PPP" },
    { date: "2026-01-22", dem: 47.5, rep: 47.6, pollster: "Meredith College" },
    { date: "2026-02-11", dem: 47.8, rep: 47.5, pollster: "PPP" }
  ]
};

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

// News stories for each race (keyed by abbr)
const raceNews = {
  "AZ": [
    { title: "Arizona Senate race tightens as Gallego edges ahead", source: "Arizona Republic", url: "https://www.azcentral.com" },
    { title: "Kari Lake pivots strategy in closely watched Senate bid", source: "Politico", url: "https://www.politico.com" },
    { title: "Latino voter turnout could decide Arizona Senate race", source: "NBC News", url: "https://www.nbcnews.com" }
  ],
  "GA": [
    { title: "Georgia Senate race heats up as Hogan builds lead", source: "Atlanta Journal-Constitution", url: "https://www.ajc.com" },
    { title: "Ossoff faces headwinds in re-election campaign", source: "The Hill", url: "https://thehill.com" },
    { title: "Suburban Atlanta voters key to Georgia Senate outcome", source: "CNN", url: "https://www.cnn.com" }
  ],
  "MI": [
    { title: "Peters holds steady lead in Michigan Senate race", source: "Detroit Free Press", url: "https://www.freep.com" },
    { title: "Auto industry policy dominates Michigan Senate debate", source: "Reuters", url: "https://www.reuters.com" },
    { title: "Michigan poll shows Peters expanding advantage", source: "The Hill", url: "https://thehill.com" }
  ],
  "NV": [
    { title: "Nevada Senate race remains a coin flip", source: "Las Vegas Review-Journal", url: "https://www.reviewjournal.com" },
    { title: "Cortez Masto and Brown clash on immigration policy", source: "Politico", url: "https://www.politico.com" },
    { title: "Housing costs emerge as top issue in Nevada Senate race", source: "AP News", url: "https://apnews.com" }
  ],
  "PA": [
    { title: "Pennsylvania Senate race narrows to within margin of error", source: "Philadelphia Inquirer", url: "https://www.inquirer.com" },
    { title: "Fetterman's voting record becomes campaign flashpoint", source: "CNN", url: "https://www.cnn.com" },
    { title: "McCormick gains ground in crucial Pennsylvania contest", source: "Politico", url: "https://www.politico.com" }
  ],
  "WI": [
    { title: "Baldwin builds comfortable lead in Wisconsin", source: "Milwaukee Journal Sentinel", url: "https://www.jsonline.com" },
    { title: "Wisconsin Senate race: Hovde struggles to gain traction", source: "The Hill", url: "https://thehill.com" },
    { title: "Rural vs. urban divide shapes Wisconsin Senate battle", source: "AP News", url: "https://apnews.com" }
  ],
  "OH": [
    { title: "Ohio trends further toward Moreno in Senate race", source: "Cleveland Plain Dealer", url: "https://www.cleveland.com" },
    { title: "Ryan faces uphill battle in increasingly red Ohio", source: "NBC News", url: "https://www.nbcnews.com" },
    { title: "Manufacturing jobs top voter concerns in Ohio Senate race", source: "Reuters", url: "https://www.reuters.com" }
  ],
  "NC": [
    { title: "North Carolina Senate race tightening in final stretch", source: "Charlotte Observer", url: "https://www.charlotteobserver.com" },
    { title: "Beasley edges ahead in latest NC polling", source: "Politico", url: "https://www.politico.com" },
    { title: "Education policy splits NC Senate candidates", source: "WRAL", url: "https://www.wral.com" }
  ],
  "NH": [
    { title: "Hassan cruises toward re-election in New Hampshire", source: "New Hampshire Union Leader", url: "https://www.unionleader.com" },
    { title: "Bolduc campaign struggles with fundraising gap", source: "The Hill", url: "https://thehill.com" },
    { title: "New Hampshire Senate race reflects broader GOP challenges", source: "CNN", url: "https://www.cnn.com" }
  ],
  "FL": [
    { title: "Rick Scott extends lead in Florida Senate race", source: "Miami Herald", url: "https://www.miamiherald.com" },
    { title: "Demings faces name recognition challenge statewide", source: "Politico", url: "https://www.politico.com" },
    { title: "Florida's shifting demographics test Senate candidates", source: "NBC News", url: "https://www.nbcnews.com" }
  ],
  "TX": [
    { title: "Cruz holds comfortable lead in Texas Senate race", source: "Texas Tribune", url: "https://www.texastribune.org" },
    { title: "Allred focuses campaign on border communities", source: "Dallas Morning News", url: "https://www.dallasnews.com" },
    { title: "Texas Senate race fundraising sets new records", source: "AP News", url: "https://apnews.com" }
  ],
  "CO": [
    { title: "Bennet in strong position for Colorado re-election", source: "Denver Post", url: "https://www.denverpost.com" },
    { title: "Colorado Senate race not competitive, analysts say", source: "Cook Political Report", url: "https://www.cookpolitical.com" }
  ],
  "ME": [
    { title: "King maintains steady lead in Maine Senate race", source: "Portland Press Herald", url: "https://www.pressherald.com" },
    { title: "LePage struggles to gain ground against King", source: "Bangor Daily News", url: "https://bangordailynews.com" }
  ],
  "IA": [
    { title: "Grassley remains dominant in Iowa Senate race", source: "Des Moines Register", url: "https://www.desmoinesregister.com" },
    { title: "Iowa Senate race stays firmly in GOP column", source: "The Hill", url: "https://thehill.com" }
  ],
  "CA-45": [
    { title: "Orange County House race emerges as top battleground", source: "Los Angeles Times", url: "https://www.latimes.com" },
    { title: "Chen gains momentum in CA-45 against Steel", source: "Politico", url: "https://www.politico.com" },
    { title: "Asian American voters could tip CA-45 outcome", source: "NBC News", url: "https://www.nbcnews.com" }
  ],
  "NY-19": [
    { title: "Molinaro holds narrow lead in NY-19 rematch", source: "Times Union", url: "https://www.timesunion.com" },
    { title: "Hudson Valley House race one of nation's closest", source: "Politico", url: "https://www.politico.com" }
  ],
  "VA-07": [
    { title: "Spanberger builds lead in Virginia's 7th District", source: "Richmond Times-Dispatch", url: "https://richmond.com" },
    { title: "VA-07: Suburban shift continues to favor Democrats", source: "The Hill", url: "https://thehill.com" }
  ],
  "CO-08": [
    { title: "Colorado's newest district remains a toss-up", source: "Denver Post", url: "https://www.denverpost.com" },
    { title: "Caraveo edges ahead in CO-08 race", source: "Politico", url: "https://www.politico.com" }
  ],
  "MI-10": [
    { title: "John James leads in Michigan's 10th District", source: "Detroit News", url: "https://www.detroitnews.com" },
    { title: "MI-10: Macomb County voters split on economy", source: "CNN", url: "https://www.cnn.com" }
  ],
  "OR-05": [
    { title: "McLeod-Skinner holds edge in Oregon's 5th", source: "Oregonian", url: "https://www.oregonlive.com" },
    { title: "Oregon redistricting reshapes competitive House race", source: "AP News", url: "https://apnews.com" }
  ],
  "KS-03": [
    { title: "Davids favored in Kansas City-area House race", source: "Kansas City Star", url: "https://www.kansascity.com" },
    { title: "KS-03: Suburban trends boost Davids re-election bid", source: "The Hill", url: "https://thehill.com" }
  ],
  "PA-07": [
    { title: "Wild leads comfortably in Lehigh Valley district", source: "Morning Call", url: "https://www.mcall.com" },
    { title: "PA-07: Democrats feel confident in House race", source: "Politico", url: "https://www.politico.com" }
  ],
  "TX-34": [
    { title: "Flores looks to hold TX-34 for Republicans", source: "Texas Tribune", url: "https://www.texastribune.org" },
    { title: "South Texas district remains competitive battleground", source: "NBC News", url: "https://www.nbcnews.com" }
  ],
  "NJ-07": [
    { title: "Kean edges Malinowski in NJ-07 rematch", source: "NJ.com", url: "https://www.nj.com" },
    { title: "New Jersey House race among nation's most expensive", source: "Politico", url: "https://www.politico.com" }
  ],
  "OH-01": [
    { title: "Chabot holds lead in Cincinnati-area House race", source: "Cincinnati Enquirer", url: "https://www.cincinnati.com" },
    { title: "OH-01: Landsman closes gap in competitive district", source: "The Hill", url: "https://thehill.com" }
  ],
  "WA-03": [
    { title: "Kent holds solid lead in Washington's 3rd District", source: "Columbian", url: "https://www.columbian.com" },
    { title: "WA-03 stays in Republican column, polls show", source: "AP News", url: "https://apnews.com" }
  ],
  "IL-06": [
    { title: "Casten cruises in suburban Chicago House race", source: "Chicago Tribune", url: "https://www.chicagotribune.com" },
    { title: "IL-06: Democrats maintain strong hold on DuPage County", source: "Daily Herald", url: "https://www.dailyherald.com" }
  ],
  "NC-13": [
    { title: "NC-13 emerges as one of nation's tightest House races", source: "Charlotte Observer", url: "https://www.charlotteobserver.com" },
    { title: "Nickel and Hines battle for Research Triangle voters", source: "WRAL", url: "https://www.wral.com" },
    { title: "North Carolina redistricting creates new battleground", source: "Politico", url: "https://www.politico.com" }
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
    <div class="race-card" data-race-abbr="${race.abbr}" role="button" tabindex="0">
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
      <div class="tap-hint">Tap for trend &rarr;</div>
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

// Modal elements
const modalOverlay = document.getElementById("modal-overlay");
const raceModal = document.getElementById("race-modal");
const modalClose = document.getElementById("modal-close");
const modalHeader = document.getElementById("modal-header");
const modalPolls = document.getElementById("modal-polls");
const modalNews = document.getElementById("modal-news");
const trendCanvas = document.getElementById("trend-chart");

function openRaceDetail(abbr) {
  const race = pollingData[currentChamber].find(r => r.abbr === abbr);
  const trends = pollingTrends[abbr];
  if (!race || !trends) return;

  const dem = race.candidates.find(c => c.party === "dem");
  const rep = race.candidates.find(c => c.party === "rep");

  modalHeader.innerHTML = `
    <div class="modal-title-row">
      <h2>${race.state} <span class="state-abbr">${race.abbr}</span></h2>
      <span class="race-rating ${race.rating}">${getRatingLabel(race.rating)}</span>
    </div>
    <div class="modal-candidates">
      <span class="modal-cand dem-text">${dem.name} (D) — ${dem.pct}%</span>
      <span class="modal-vs">vs</span>
      <span class="modal-cand rep-text">${rep.name} (R) — ${rep.pct}%</span>
    </div>
  `;

  // Render poll history table
  modalPolls.innerHTML = `
    <h3>Poll History</h3>
    <div class="poll-table-wrapper">
      <table class="poll-table">
        <thead>
          <tr><th>Date</th><th>Pollster</th><th class="dem-text">Dem</th><th class="rep-text">Rep</th><th>Margin</th></tr>
        </thead>
        <tbody>
          ${trends.slice().reverse().map(p => {
            const m = (p.dem - p.rep).toFixed(1);
            const mLabel = m > 0 ? `D+${m}` : m < 0 ? `R+${Math.abs(m).toFixed(1)}` : "Tie";
            const mClass = m > 0 ? "dem-leading" : m < 0 ? "rep-leading" : "tied";
            return `<tr>
              <td>${formatDate(p.date)}</td>
              <td>${p.pollster}</td>
              <td class="dem-text">${p.dem}%</td>
              <td class="rep-text">${p.rep}%</td>
              <td class="margin-text ${mClass}">${mLabel}</td>
            </tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;

  // Render related news
  const news = raceNews[abbr] || [];
  if (news.length > 0) {
    modalNews.innerHTML = `
      <h3>Related News</h3>
      <ul class="news-list">
        ${news.map(n => `
          <li class="news-item">
            <a href="${n.url}" target="_blank" rel="noopener noreferrer">
              <span class="news-title">${n.title}</span>
              <span class="news-source">${n.source}</span>
            </a>
          </li>
        `).join("")}
      </ul>
    `;
  } else {
    modalNews.innerHTML = "";
  }

  drawTrendChart(trends);
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Delegate click on race cards
racesContainer.addEventListener("click", (e) => {
  const card = e.target.closest(".race-card");
  if (card) openRaceDetail(card.dataset.raceAbbr);
});

function drawTrendChart(trends) {
  const dpr = window.devicePixelRatio || 1;
  const rect = trendCanvas.parentElement.getBoundingClientRect();
  const w = rect.width || 600;
  const h = 280;

  trendCanvas.width = w * dpr;
  trendCanvas.height = h * dpr;
  trendCanvas.style.width = w + "px";
  trendCanvas.style.height = h + "px";

  const ctx = trendCanvas.getContext("2d");
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  const pad = { top: 30, right: 20, bottom: 50, left: 45 };
  const chartW = w - pad.left - pad.right;
  const chartH = h - pad.top - pad.bottom;

  // Compute y range
  const allVals = trends.flatMap(t => [t.dem, t.rep]);
  const yMin = Math.floor(Math.min(...allVals) - 2);
  const yMax = Math.ceil(Math.max(...allVals) + 2);

  const xScale = (i) => pad.left + (i / (trends.length - 1)) * chartW;
  const yScale = (v) => pad.top + chartH - ((v - yMin) / (yMax - yMin)) * chartH;

  // Grid lines
  ctx.strokeStyle = "#333744";
  ctx.lineWidth = 0.5;
  const ySteps = 5;
  for (let i = 0; i <= ySteps; i++) {
    const val = yMin + (i / ySteps) * (yMax - yMin);
    const y = yScale(val);
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(w - pad.right, y);
    ctx.stroke();
    ctx.fillStyle = "#9aa0a6";
    ctx.font = "11px -apple-system, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(val.toFixed(0) + "%", pad.left - 8, y + 4);
  }

  // X-axis labels
  ctx.textAlign = "center";
  ctx.fillStyle = "#9aa0a6";
  trends.forEach((t, i) => {
    const x = xScale(i);
    ctx.fillText(formatDate(t.date), x, h - pad.bottom + 20);
  });

  // Draw Dem line
  ctx.strokeStyle = "#4393c3";
  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.beginPath();
  trends.forEach((t, i) => {
    const x = xScale(i);
    const y = yScale(t.dem);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Draw Rep line
  ctx.strokeStyle = "#d6604d";
  ctx.beginPath();
  trends.forEach((t, i) => {
    const x = xScale(i);
    const y = yScale(t.rep);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Data points
  trends.forEach((t, i) => {
    const x = xScale(i);
    // Dem dot
    ctx.fillStyle = "#4393c3";
    ctx.beginPath();
    ctx.arc(x, yScale(t.dem), 5, 0, Math.PI * 2);
    ctx.fill();
    // Rep dot
    ctx.fillStyle = "#d6604d";
    ctx.beginPath();
    ctx.arc(x, yScale(t.rep), 5, 0, Math.PI * 2);
    ctx.fill();
  });

  // Legend
  ctx.font = "12px -apple-system, sans-serif";
  ctx.fillStyle = "#4393c3";
  ctx.fillRect(pad.left, 8, 14, 14);
  ctx.fillStyle = "#e8eaed";
  ctx.textAlign = "left";
  ctx.fillText("Dem", pad.left + 20, 20);

  ctx.fillStyle = "#d6604d";
  ctx.fillRect(pad.left + 65, 8, 14, 14);
  ctx.fillStyle = "#e8eaed";
  ctx.fillText("Rep", pad.left + 85, 20);
}

init();
