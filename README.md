# Security Dashboard

## Overview

A mock dashboard for a Cyber Security Continuous Controls Monitoring (CCM) platform.
It provides a high-level view of an organisation’s security posture, helping analysts quickly identify vulnerabilities, trends, and areas of risk.

The focus of this implementation is on clarity, usability, and appropriate data visualisation, rather than completeness or backend functionality.

---

## Getting started

1. Install dependencies

```bash
npm install
```

2. Run the project

```bash
npm run start
```

3. Open in browser
   [http://localhost:3000](http://localhost:3000).

---

## Tech stack

- **React** (Create React App)
- **Recharts** — charts and visualisations
- **Tailwind CSS** — styling and responsive layout
- **Framer Motion** — entrance animations and subtle UI animations

---

## Features & Design Decisions

### KPI row

Five cards at the top give an immediate snapshot: total open vulnerabilities plus a breakdown by severity (Critical, High, Medium, Low). The values are derived directly from the summary dataset, so they always stay in sync with the charts below.

### Vulnerability Summary — donut chart

A proportional view of current open vulnerabilities by severity. A donut chart works well here because the analyst's primary question is "how bad is it right now, and where?" — proportions answer that faster than raw numbers alone.

### Risk Concentration by Asset Type — stacked bar chart

Shows how vulnerabilities are distributed across Servers, Endpoints, Cloud, Network, and Applications, with each bar segment coloured by severity. A stacked bar was the right call over a simple bar because it surfaces both _where_ the risk lives and _what kind_ of risk it is in a single glance.

### Vulnerabilities Over Time — line chart

Tracks daily open vulnerability counts over the past 30 days, one line per severity level. The dataset isn't a straight line — it has realistic spikes and variance around a general downward trend, which reflects a team actively remediating while new findings still come in. The last day's values match the summary chart exactly.

---

## UI & UX Considerations worth noting

**Consistent severity colour scheme across everything** — red, orange, yellow, green map to Critical → Low everywhere. The colours are defined once in `src/constants/severities.js` and imported wherever they're needed, so there's no risk of them drifting out of sync.

**Responsive legend** — on the line chart, the legend sits top-right on desktop and drops to centre-bottom on smaller screens. A custom `useIsMobile` hook handles this reactively.

**Custom legend component** — all three charts share the same `CustomLegend` component (circle icons, consistent spacing and colour). Easy to update in one place.

**Clean card-based layout for readability**

---

## Project structure

```
src/
├── components/
│   ├── Card.jsx                      # Base card wrapper used by all charts
│   ├── CustomLegend.jsx              # Shared legend renderer for all charts
│   ├── KPI.jsx                       # Single metric card
│   ├── RiskByAsset.jsx               # Stacked bar chart
│   ├── VulnerabilitiesOverTime.jsx   # Line chart
│   └── VulnerabilitySummary.jsx      # Donut pie chart
├── constants/
│   └── severities.js                 # Single source of truth for severity colours
├── data/
│   └── dummyData.js                  # All static datasets
├── hooks/
│   └── useIsMobile.js                # Responsive breakpoint hook
├── pages/
│   └── Dashboard.jsx                 # Page layout and composition
└── App.jsx
```

---

## Possible Improvements

Given more time, I would:

- Add filtering (by severity, asset type)
- Introduce real-time data updates
- Enhance accessibility (keyboard navigation, ARIA roles)
- Add dark mode support

---

## Author
Hejer Laouani
