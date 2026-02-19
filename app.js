// Historical polling trends for each race (keyed by abbr)
const pollingTrends = {
  // Senate — Class II seats (up in 2026)
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
  "ME": [
    { date: "2025-11-15", dem: 47.5, rep: 48.5, pollster: "Critical Insights" },
    { date: "2025-12-10", dem: 48.0, rep: 48.0, pollster: "Colby College" },
    { date: "2026-01-08", dem: 48.3, rep: 47.5, pollster: "Critical Insights" },
    { date: "2026-01-20", dem: 48.5, rep: 47.3, pollster: "Pan Atlantic" },
    { date: "2026-02-01", dem: 48.8, rep: 47.0, pollster: "Critical Insights" }
  ],
  "CO": [
    { date: "2025-11-10", dem: 52.5, rep: 41.5, pollster: "Keating Research" },
    { date: "2025-12-06", dem: 53.0, rep: 41.0, pollster: "Magellan Strategies" },
    { date: "2026-01-09", dem: 53.5, rep: 40.5, pollster: "Emerson College" },
    { date: "2026-01-26", dem: 53.9, rep: 40.0, pollster: "Keating Research" },
    { date: "2026-02-03", dem: 54.2, rep: 39.8, pollster: "Keating Research" }
  ],
  "IA": [
    { date: "2025-11-10", dem: 44.0, rep: 50.5, pollster: "Selzer & Co" },
    { date: "2025-12-05", dem: 44.5, rep: 50.0, pollster: "Emerson College" },
    { date: "2026-01-06", dem: 45.0, rep: 49.5, pollster: "Selzer & Co" },
    { date: "2026-01-18", dem: 45.2, rep: 49.3, pollster: "Civiqs" },
    { date: "2026-01-30", dem: 45.5, rep: 49.0, pollster: "Selzer & Co" }
  ],
  "TX": [
    { date: "2025-11-14", dem: 42.8, rep: 51.5, pollster: "UT Tyler" },
    { date: "2025-12-09", dem: 42.2, rep: 52.0, pollster: "Quinnipiac" },
    { date: "2026-01-06", dem: 41.8, rep: 52.8, pollster: "UT Tyler" },
    { date: "2026-01-22", dem: 41.5, rep: 53.1, pollster: "Emerson College" },
    { date: "2026-02-04", dem: 41.2, rep: 53.4, pollster: "UT Tyler" }
  ],
  "VA": [
    { date: "2025-11-12", dem: 50.5, rep: 43.8, pollster: "Roanoke College" },
    { date: "2025-12-08", dem: 50.0, rep: 44.5, pollster: "CNU Wason" },
    { date: "2026-01-10", dem: 49.5, rep: 45.0, pollster: "Roanoke College" },
    { date: "2026-01-28", dem: 49.2, rep: 45.3, pollster: "Emerson College" },
    { date: "2026-02-11", dem: 49.0, rep: 45.5, pollster: "Roanoke College" }
  ],
  "OR": [
    { date: "2025-11-10", dem: 52.0, rep: 42.0, pollster: "DHM Research" },
    { date: "2025-12-06", dem: 52.5, rep: 41.5, pollster: "Emerson College" },
    { date: "2026-01-08", dem: 53.0, rep: 41.0, pollster: "DHM Research" },
    { date: "2026-01-22", dem: 53.2, rep: 40.8, pollster: "SurveyUSA" },
    { date: "2026-02-07", dem: 53.5, rep: 40.5, pollster: "DHM Research" }
  ],
  "MN": [
    { date: "2025-11-15", dem: 50.0, rep: 44.0, pollster: "Star Tribune/MPR" },
    { date: "2025-12-10", dem: 50.5, rep: 43.5, pollster: "Emerson College" },
    { date: "2026-01-06", dem: 51.0, rep: 43.0, pollster: "KSTP/SurveyUSA" },
    { date: "2026-01-20", dem: 51.2, rep: 42.8, pollster: "Star Tribune/MPR" },
    { date: "2026-02-06", dem: 51.5, rep: 42.5, pollster: "Star Tribune/MPR" }
  ],
  "MT": [
    { date: "2025-11-18", dem: 43.0, rep: 51.0, pollster: "Mason-Dixon" },
    { date: "2025-12-12", dem: 43.5, rep: 50.5, pollster: "Emerson College" },
    { date: "2026-01-08", dem: 44.0, rep: 50.0, pollster: "UM Big Sky Poll" },
    { date: "2026-01-24", dem: 44.2, rep: 49.8, pollster: "Mason-Dixon" },
    { date: "2026-02-10", dem: 44.5, rep: 49.5, pollster: "UM Big Sky Poll" }
  ],
  "SC": [
    { date: "2025-11-14", dem: 38.0, rep: 56.0, pollster: "Winthrop University" },
    { date: "2025-12-09", dem: 37.5, rep: 56.5, pollster: "Emerson College" },
    { date: "2026-01-07", dem: 37.0, rep: 57.0, pollster: "Winthrop University" },
    { date: "2026-01-22", dem: 36.8, rep: 57.2, pollster: "Clemson Palmetto" },
    { date: "2026-02-05", dem: 36.5, rep: 57.5, pollster: "Winthrop University" }
  ],
  "IL": [
    { date: "2025-11-10", dem: 55.0, rep: 39.0, pollster: "Paul Simon Institute" },
    { date: "2025-12-06", dem: 55.5, rep: 38.5, pollster: "Emerson College" },
    { date: "2026-01-08", dem: 56.0, rep: 38.0, pollster: "Paul Simon Institute" },
    { date: "2026-01-24", dem: 56.2, rep: 37.8, pollster: "SurveyUSA" },
    { date: "2026-02-08", dem: 56.5, rep: 37.5, pollster: "Paul Simon Institute" }
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
  "NE-02": [
    { date: "2025-11-10", dem: 46.0, rep: 49.0, pollster: "Susquehanna" },
    { date: "2025-12-06", dem: 46.5, rep: 48.8, pollster: "Emerson College" },
    { date: "2026-01-09", dem: 47.0, rep: 48.5, pollster: "Susquehanna" },
    { date: "2026-01-26", dem: 47.2, rep: 48.3, pollster: "SurveyUSA" },
    { date: "2026-02-11", dem: 47.5, rep: 48.2, pollster: "Susquehanna" }
  ],
  "CO-08": [
    { date: "2025-11-18", dem: 46.0, rep: 47.5, pollster: "Keating Research" },
    { date: "2025-12-12", dem: 46.5, rep: 47.2, pollster: "Emerson College" },
    { date: "2026-01-06", dem: 47.0, rep: 47.1, pollster: "Keating Research" },
    { date: "2026-01-22", dem: 47.3, rep: 47.0, pollster: "Magellan Strategies" },
    { date: "2026-02-09", dem: 47.6, rep: 47.0, pollster: "Keating Research" }
  ],
  "MI-07": [
    { date: "2025-11-14", dem: 46.5, rep: 48.0, pollster: "EPIC-MRA" },
    { date: "2025-12-09", dem: 47.0, rep: 47.8, pollster: "Glengariff Group" },
    { date: "2026-01-07", dem: 47.5, rep: 47.6, pollster: "EPIC-MRA" },
    { date: "2026-01-24", dem: 47.8, rep: 47.5, pollster: "Mitchell Research" },
    { date: "2026-02-08", dem: 48.0, rep: 47.5, pollster: "EPIC-MRA" }
  ],
  "WA-03": [
    { date: "2025-11-10", dem: 47.5, rep: 48.0, pollster: "Elway Research" },
    { date: "2025-12-06", dem: 48.0, rep: 47.5, pollster: "Emerson College" },
    { date: "2026-01-08", dem: 48.5, rep: 47.2, pollster: "Elway Research" },
    { date: "2026-01-22", dem: 48.8, rep: 47.0, pollster: "SurveyUSA" },
    { date: "2026-02-07", dem: 49.0, rep: 46.8, pollster: "Elway Research" }
  ],
  "KS-03": [
    { date: "2025-11-15", dem: 47.0, rep: 47.8, pollster: "Fort Hays State" },
    { date: "2025-12-10", dem: 47.5, rep: 47.5, pollster: "Emerson College" },
    { date: "2026-01-06", dem: 48.0, rep: 47.2, pollster: "Fort Hays State" },
    { date: "2026-01-20", dem: 48.5, rep: 47.0, pollster: "SurveyUSA" },
    { date: "2026-02-06", dem: 48.9, rep: 46.7, pollster: "Fort Hays State" }
  ],
  "PA-07": [
    { date: "2025-11-12", dem: 45.5, rep: 49.5, pollster: "Muhlenberg College" },
    { date: "2025-12-08", dem: 46.0, rep: 49.0, pollster: "Franklin & Marshall" },
    { date: "2026-01-10", dem: 46.8, rep: 48.5, pollster: "Muhlenberg College" },
    { date: "2026-01-28", dem: 47.2, rep: 48.2, pollster: "Emerson College" },
    { date: "2026-02-13", dem: 47.8, rep: 48.0, pollster: "Muhlenberg College" }
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
  "OH-09": [
    { date: "2025-11-18", dem: 48.5, rep: 46.5, pollster: "Emerson College" },
    { date: "2025-12-12", dem: 48.2, rep: 47.0, pollster: "Baldwin Wallace" },
    { date: "2026-01-06", dem: 47.8, rep: 47.5, pollster: "Emerson College" },
    { date: "2026-01-20", dem: 47.6, rep: 47.8, pollster: "Quinnipiac" },
    { date: "2026-02-04", dem: 47.5, rep: 48.0, pollster: "Emerson College" }
  ],
  "AZ-06": [
    { date: "2025-11-10", dem: 46.0, rep: 48.5, pollster: "OH Predictive Insights" },
    { date: "2025-12-06", dem: 46.5, rep: 48.2, pollster: "Emerson College" },
    { date: "2026-01-08", dem: 47.0, rep: 48.0, pollster: "OH Predictive Insights" },
    { date: "2026-01-22", dem: 47.2, rep: 48.0, pollster: "Data Orbital" },
    { date: "2026-02-02", dem: 47.5, rep: 48.2, pollster: "OH Predictive Insights" }
  ],
  "IL-06": [
    { date: "2025-11-14", dem: 53.5, rep: 40.5, pollster: "Paul Simon Institute" },
    { date: "2025-12-08", dem: 54.0, rep: 40.0, pollster: "Emerson College" },
    { date: "2026-01-10", dem: 54.5, rep: 39.5, pollster: "Paul Simon Institute" },
    { date: "2026-01-26", dem: 55.0, rep: 39.0, pollster: "SurveyUSA" },
    { date: "2026-02-03", dem: 55.3, rep: 38.7, pollster: "Paul Simon Institute" }
  ],
  "NC-01": [
    { date: "2025-11-12", dem: 46.5, rep: 48.0, pollster: "PPP" },
    { date: "2025-12-08", dem: 47.0, rep: 47.8, pollster: "High Point Univ" },
    { date: "2026-01-06", dem: 47.5, rep: 47.8, pollster: "PPP" },
    { date: "2026-01-22", dem: 48.0, rep: 47.6, pollster: "Meredith College" },
    { date: "2026-02-11", dem: 48.2, rep: 47.5, pollster: "PPP" }
  ]
};

// Sample polling data for Senate and House races
const pollingData = {
  senate: [
    {
      state: "Georgia", abbr: "GA", rating: "lean-r",
      candidates: [
        { name: "Jon Ossoff", party: "dem", pct: 45.1, trend: "down" },
        { name: "Burt Jones", party: "rep", pct: 49.3, trend: "up" }
      ],
      pollster: "Quinnipiac", date: "2026-02-08", sampleSize: 1102
    },
    {
      state: "Michigan", abbr: "MI", rating: "tossup",
      candidates: [
        { name: "Haley Stevens", party: "dem", pct: 47.8, trend: "up" },
        { name: "Mike Rogers", party: "rep", pct: 47.2, trend: "flat" }
      ],
      pollster: "EPIC-MRA", date: "2026-02-12", sampleSize: 980
    },
    {
      state: "North Carolina", abbr: "NC", rating: "tossup",
      candidates: [
        { name: "Roy Cooper", party: "dem", pct: 48.1, trend: "up" },
        { name: "Michael Whatley", party: "rep", pct: 46.8, trend: "flat" }
      ],
      pollster: "PPP", date: "2026-02-14", sampleSize: 890
    },
    {
      state: "New Hampshire", abbr: "NH", rating: "lean-d",
      candidates: [
        { name: "Chris Pappas", party: "dem", pct: 50.0, trend: "up" },
        { name: "John Sununu", party: "rep", pct: 45.0, trend: "flat" }
      ],
      pollster: "UNH Survey Center", date: "2026-02-06", sampleSize: 975
    },
    {
      state: "Maine", abbr: "ME", rating: "tossup",
      candidates: [
        { name: "Janet Mills", party: "dem", pct: 48.8, trend: "up" },
        { name: "Susan Collins", party: "rep", pct: 47.0, trend: "down" }
      ],
      pollster: "Critical Insights", date: "2026-02-01", sampleSize: 780
    },
    {
      state: "Colorado", abbr: "CO", rating: "solid-d",
      candidates: [
        { name: "John Hickenlooper", party: "dem", pct: 54.2, trend: "up" },
        { name: "Gabe Evans", party: "rep", pct: 39.8, trend: "down" }
      ],
      pollster: "Keating Research", date: "2026-02-03", sampleSize: 870
    },
    {
      state: "Iowa", abbr: "IA", rating: "lean-r",
      candidates: [
        { name: "Rob Sand", party: "dem", pct: 45.5, trend: "up" },
        { name: "Joni Ernst", party: "rep", pct: 49.0, trend: "down" }
      ],
      pollster: "Selzer & Co", date: "2026-01-30", sampleSize: 1150
    },
    {
      state: "Texas", abbr: "TX", rating: "solid-r",
      candidates: [
        { name: "Joaquin Castro", party: "dem", pct: 41.2, trend: "down" },
        { name: "John Cornyn", party: "rep", pct: 53.4, trend: "up" }
      ],
      pollster: "UT Tyler", date: "2026-02-04", sampleSize: 1300
    },
    {
      state: "Virginia", abbr: "VA", rating: "lean-d",
      candidates: [
        { name: "Mark Warner", party: "dem", pct: 49.0, trend: "down" },
        { name: "Hung Cao", party: "rep", pct: 45.5, trend: "up" }
      ],
      pollster: "Roanoke College", date: "2026-02-11", sampleSize: 1080
    },
    {
      state: "Oregon", abbr: "OR", rating: "solid-d",
      candidates: [
        { name: "Jeff Merkley", party: "dem", pct: 53.5, trend: "up" },
        { name: "Jo Rae Perkins", party: "rep", pct: 40.5, trend: "down" }
      ],
      pollster: "DHM Research", date: "2026-02-07", sampleSize: 890
    },
    {
      state: "Minnesota", abbr: "MN", rating: "lean-d",
      candidates: [
        { name: "Peggy Flanagan", party: "dem", pct: 50.5, trend: "up" },
        { name: "Jim Schultz", party: "rep", pct: 43.5, trend: "down" }
      ],
      pollster: "Star Tribune/MPR", date: "2026-02-06", sampleSize: 1020
    },
    {
      state: "Montana", abbr: "MT", rating: "lean-r",
      candidates: [
        { name: "Monica Tranel", party: "dem", pct: 44.5, trend: "up" },
        { name: "Steve Daines", party: "rep", pct: 49.5, trend: "flat" }
      ],
      pollster: "UM Big Sky Poll", date: "2026-02-10", sampleSize: 720
    },
    {
      state: "South Carolina", abbr: "SC", rating: "solid-r",
      candidates: [
        { name: "Bakari Sellers", party: "dem", pct: 36.5, trend: "down" },
        { name: "Lindsey Graham", party: "rep", pct: 57.5, trend: "up" }
      ],
      pollster: "Winthrop University", date: "2026-02-05", sampleSize: 950
    },
    {
      state: "Illinois", abbr: "IL", rating: "solid-d",
      candidates: [
        { name: "Raja Krishnamoorthi", party: "dem", pct: 55.0, trend: "up" },
        { name: "Peggy Hubbard", party: "rep", pct: 38.5, trend: "down" }
      ],
      pollster: "Paul Simon Institute", date: "2026-02-08", sampleSize: 1100
    }
  ],
  house: [
    {
      state: "California", abbr: "CA-45", rating: "tossup",
      candidates: [
        { name: "Derek Tran", party: "dem", pct: 48.5, trend: "up" },
        { name: "Michelle Steel", party: "rep", pct: 47.2, trend: "down" }
      ],
      pollster: "PPIC", date: "2026-02-12", sampleSize: 650
    },
    {
      state: "New York", abbr: "NY-19", rating: "tossup",
      candidates: [
        { name: "Josh Riley", party: "dem", pct: 49.1, trend: "flat" },
        { name: "Marc Molinaro", party: "rep", pct: 46.8, trend: "up" }
      ],
      pollster: "Siena College", date: "2026-02-10", sampleSize: 580
    },
    {
      state: "Nebraska", abbr: "NE-02", rating: "tossup",
      candidates: [
        { name: "Tony Vargas", party: "dem", pct: 47.5, trend: "up" },
        { name: "Don Bacon", party: "rep", pct: 48.2, trend: "flat" }
      ],
      pollster: "Susquehanna", date: "2026-02-11", sampleSize: 620
    },
    {
      state: "Colorado", abbr: "CO-08", rating: "tossup",
      candidates: [
        { name: "Yadira Caraveo", party: "dem", pct: 47.6, trend: "up" },
        { name: "Gabe Evans", party: "rep", pct: 47.0, trend: "flat" }
      ],
      pollster: "Keating Research", date: "2026-02-09", sampleSize: 590
    },
    {
      state: "Michigan", abbr: "MI-07", rating: "tossup",
      candidates: [
        { name: "Curtis Hertel", party: "dem", pct: 48.0, trend: "up" },
        { name: "Tom Barrett", party: "rep", pct: 47.5, trend: "flat" }
      ],
      pollster: "EPIC-MRA", date: "2026-02-08", sampleSize: 540
    },
    {
      state: "Washington", abbr: "WA-03", rating: "tossup",
      candidates: [
        { name: "Marie Gluesenkamp Perez", party: "dem", pct: 49.0, trend: "up" },
        { name: "Joe Kent", party: "rep", pct: 46.8, trend: "down" }
      ],
      pollster: "Elway Research", date: "2026-02-07", sampleSize: 610
    },
    {
      state: "Kansas", abbr: "KS-03", rating: "lean-d",
      candidates: [
        { name: "Sharice Davids", party: "dem", pct: 51.2, trend: "up" },
        { name: "Prasanth Reddy", party: "rep", pct: 44.5, trend: "down" }
      ],
      pollster: "Fort Hays State", date: "2026-02-06", sampleSize: 530
    },
    {
      state: "Pennsylvania", abbr: "PA-07", rating: "tossup",
      candidates: [
        { name: "Lamont McClure", party: "dem", pct: 47.8, trend: "up" },
        { name: "Ryan Mackenzie", party: "rep", pct: 48.0, trend: "flat" }
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
        { name: "Sue Altman", party: "dem", pct: 47.3, trend: "up" },
        { name: "Tom Kean Jr.", party: "rep", pct: 48.0, trend: "flat" }
      ],
      pollster: "Monmouth University", date: "2026-02-14", sampleSize: 640
    },
    {
      state: "Ohio", abbr: "OH-09", rating: "tossup",
      candidates: [
        { name: "Marcy Kaptur", party: "dem", pct: 47.5, trend: "down" },
        { name: "Derek Merrin", party: "rep", pct: 48.0, trend: "up" }
      ],
      pollster: "Emerson College", date: "2026-02-04", sampleSize: 510
    },
    {
      state: "Arizona", abbr: "AZ-06", rating: "tossup",
      candidates: [
        { name: "Kirsten Engel", party: "dem", pct: 47.5, trend: "up" },
        { name: "Juan Ciscomani", party: "rep", pct: 48.2, trend: "flat" }
      ],
      pollster: "OH Predictive Insights", date: "2026-02-02", sampleSize: 620
    },
    {
      state: "Illinois", abbr: "IL-06", rating: "solid-d",
      candidates: [
        { name: "Sean Casten", party: "dem", pct: 55.3, trend: "up" },
        { name: "Niki Conforti", party: "rep", pct: 38.7, trend: "down" }
      ],
      pollster: "Paul Simon Institute", date: "2026-02-03", sampleSize: 570
    },
    {
      state: "North Carolina", abbr: "NC-01", rating: "tossup",
      candidates: [
        { name: "Don Davis", party: "dem", pct: 48.2, trend: "up" },
        { name: "Laurie Buckhout", party: "rep", pct: 47.5, trend: "flat" }
      ],
      pollster: "PPP", date: "2026-02-11", sampleSize: 600
    }
  ]
};

// News stories for each race (keyed by abbr)
const raceNews = {
  "GA": [
    { title: "Ossoff faces tough re-election as Georgia shifts right", source: "Atlanta Journal-Constitution" },
    { title: "Burt Jones enters Georgia Senate race with strong GOP backing", source: "Politico" },
    { title: "Suburban Atlanta voters key to Georgia Senate 2026 outcome", source: "CNN" }
  ],
  "MI": [
    { title: "Stevens and McMorrow battle for Democratic Senate nomination in Michigan", source: "Detroit Free Press" },
    { title: "Mike Rogers enters Michigan Senate race with Trump endorsement", source: "Reuters" },
    { title: "Open Michigan Senate seat emerges as top 2026 battleground", source: "The Hill" }
  ],
  "NC": [
    { title: "Roy Cooper jumps into open North Carolina Senate race after Tillis retirement", source: "Charlotte Observer" },
    { title: "Michael Whatley launches Senate bid as former RNC chair", source: "Politico" },
    { title: "North Carolina open Senate seat rated tossup in 2026", source: "WRAL" }
  ],
  "NH": [
    { title: "Pappas leads Democratic field after Shaheen retirement announcement", source: "New Hampshire Union Leader" },
    { title: "Former Senator John Sununu enters NH Senate race to reclaim seat", source: "The Hill" },
    { title: "New Hampshire open Senate seat draws competitive field for 2026", source: "CNN" }
  ],
  "ME": [
    { title: "Governor Janet Mills enters Democratic primary to challenge Collins", source: "Portland Press Herald" },
    { title: "Maine Senate race rated toss-up as Mills enters the field", source: "Bangor Daily News" },
    { title: "Collins seeks sixth term in most competitive race since 2008", source: "AP News" }
  ],
  "CO": [
    { title: "Hickenlooper coasts toward re-election in Colorado", source: "Denver Post" },
    { title: "Colorado Senate race not competitive in 2026, analysts say", source: "Cook Political Report" }
  ],
  "IA": [
    { title: "Rob Sand mounts strong challenge to Ernst in Iowa Senate race", source: "Des Moines Register" },
    { title: "Ernst faces competitive 2026 re-election as Iowa tightens", source: "The Hill" },
    { title: "Iowa Senate race moves to lean-R as Sand closes gap", source: "Politico" }
  ],
  "TX": [
    { title: "Cornyn looks safe in Texas but Democrats eye long game", source: "Texas Tribune" },
    { title: "Castro brings name recognition to Texas Senate bid", source: "Dallas Morning News" },
    { title: "Texas Senate 2026 race fundraising heats up early", source: "AP News" }
  ],
  "VA": [
    { title: "Warner seeks re-election with strong favorability in Virginia", source: "Richmond Times-Dispatch" },
    { title: "Hung Cao makes second run for Virginia Senate seat in 2026", source: "Politico" },
    { title: "Virginia Senate race leans toward Democrats as Warner leads", source: "The Hill" }
  ],
  "OR": [
    { title: "Merkley expected to cruise to re-election in Oregon", source: "Oregonian" },
    { title: "Oregon Senate seat stays safely Democratic in 2026", source: "Cook Political Report" }
  ],
  "MN": [
    { title: "Peggy Flanagan emerges as frontrunner for open Minnesota Senate seat", source: "Star Tribune" },
    { title: "Minnesota open Senate seat expected to stay Democratic in 2026", source: "The Hill" }
  ],
  "MT": [
    { title: "Tranel challenges Daines in competitive Montana Senate race", source: "Missoulian" },
    { title: "Montana Senate race emerges as surprise 2026 battleground", source: "Politico" },
    { title: "Daines leans on rural support as Tranel gains in cities", source: "AP News" }
  ],
  "SC": [
    { title: "Graham faces token opposition in deep-red South Carolina", source: "The State" },
    { title: "South Carolina Senate race remains safely Republican", source: "Cook Political Report" }
  ],
  "IL": [
    { title: "Krishnamoorthi leads crowded Democratic primary after Durbin retirement", source: "Chicago Tribune" },
    { title: "Illinois open Senate seat stays solidly in Democratic column for 2026", source: "The Hill" }
  ],
  "CA-45": [
    { title: "Tran defends Orange County seat in 2026 rematch with Steel", source: "Los Angeles Times" },
    { title: "CA-45 remains top battleground as Steel seeks comeback", source: "Politico" },
    { title: "Asian American voters again decisive in CA-45 contest", source: "NBC News" }
  ],
  "NY-19": [
    { title: "Riley defends NY-19 seat against Molinaro rematch bid", source: "Times Union" },
    { title: "Hudson Valley House race one of nation's closest in 2026", source: "Politico" }
  ],
  "NE-02": [
    { title: "Bacon faces toughest re-election yet in Omaha district", source: "Omaha World-Herald" },
    { title: "NE-02: Vargas mounts second challenge in swing district", source: "The Hill" }
  ],
  "CO-08": [
    { title: "Democrats target Evans in Colorado's competitive 8th District", source: "Denver Post" },
    { title: "CO-08 remains a toss-up as both parties invest heavily in 2026", source: "Politico" }
  ],
  "MI-07": [
    { title: "Hertel defends swing Michigan seat against Barrett rematch", source: "Detroit Free Press" },
    { title: "MI-07: Lansing-area district among nation's most competitive", source: "CNN" }
  ],
  "WA-03": [
    { title: "Gluesenkamp Perez seeks to hold rural Washington seat", source: "Columbian" },
    { title: "WA-03: Blue-collar Democrat defies partisan trends again", source: "AP News" }
  ],
  "KS-03": [
    { title: "Davids favored again in Kansas City-area House race", source: "Kansas City Star" },
    { title: "KS-03: Suburban trends continue to boost Davids", source: "The Hill" }
  ],
  "PA-07": [
    { title: "Crowded Democratic primary forms to challenge freshman Rep. Mackenzie", source: "Morning Call" },
    { title: "PA-07 toss-up: Democrats aim to reclaim Lehigh Valley seat in 2026", source: "Politico" }
  ],
  "TX-34": [
    { title: "Flores looks to hold TX-34 in South Texas for GOP", source: "Texas Tribune" },
    { title: "South Texas district remains competitive battleground in 2026", source: "NBC News" }
  ],
  "NJ-07": [
    { title: "Kean faces strong Democratic challenge in NJ-07", source: "NJ.com" },
    { title: "New Jersey House race among nation's most expensive in 2026", source: "Politico" }
  ],
  "OH-09": [
    { title: "Kaptur fights to hold Toledo-area seat in tough cycle", source: "Toledo Blade" },
    { title: "OH-09: Longest-serving woman in House faces 2026 challenge", source: "The Hill" }
  ],
  "AZ-06": [
    { title: "Ciscomani faces tough re-election in competitive southern Arizona district", source: "Arizona Republic" },
    { title: "AZ-06 rated toss-up as Democrats target Ciscomani in 2026 midterms", source: "Politico" }
  ],
  "IL-06": [
    { title: "Casten cruises in suburban Chicago House race", source: "Chicago Tribune" },
    { title: "IL-06: Democrats maintain strong hold on DuPage County", source: "Daily Herald" }
  ],
  "NC-01": [
    { title: "Don Davis defends eastern NC seat in competitive rematch", source: "Charlotte Observer" },
    { title: "NC-01 emerges as key 2026 House battleground", source: "WRAL" },
    { title: "Rural eastern North Carolina district remains toss-up", source: "Politico" }
  ]
};

// Currents API configuration
const NEWS_API_BASE = "https://api.currentsapi.services/v1";
const NEWS_API_KEY = "75NWdlRmWv9dosLZvtrHcJR8wMMHspVi6Fl1RXVQj5Xnx_Vo";

// News cache: { [query]: { data, timestamp } }
const newsCache = {};
const NEWS_CACHE_TTL = 15 * 60 * 1000; // 15 minutes

async function fetchNews(query) {
  const cacheKey = query.toLowerCase();
  const cached = newsCache[cacheKey];
  if (cached && Date.now() - cached.timestamp < NEWS_CACHE_TTL) {
    return cached.data;
  }

  const url = `${NEWS_API_BASE}/search?keywords=${encodeURIComponent(query)}&language=en&category=politics&page_size=5&apiKey=${NEWS_API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`News API error: ${res.status}`);
  }

  const json = await res.json();
  const cutoff = new Date("2025-11-01").getTime();
  const articles = (json.news || [])
    .filter(a => !a.published || new Date(a.published).getTime() >= cutoff)
    .map(a => ({
      title: a.title,
      source: a.author || new URL(a.url).hostname,
      url: a.url
    }));

  newsCache[cacheKey] = { data: articles, timestamp: Date.now() };
  return articles;
}

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

  // Render related news from curated 2026 data
  const items = raceNews[abbr] || [];
  if (items.length > 0) {
    modalNews.innerHTML = `
      <h3>Related News</h3>
      <ul class="news-list">
        ${items.map(n => {
          const href = `https://duckduckgo.com/?q=!ducky+${encodeURIComponent(n.title + " " + n.source + " 2026")}`;
          return `
          <li class="news-item">
            <a href="${href}" target="_blank" rel="noopener noreferrer">
              <span class="news-title">${n.title}</span>
              <span class="news-source">${n.source}</span>
            </a>
          </li>`;
        }).join("")}
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
