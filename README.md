# ALAB / MRVL Fact-Check Dashboard

Static research dashboard for fact-checking Korean blog investment theses on:

- Astera Labs, Inc. (`ALAB`)
- Marvell Technology, Inc. (`MRVL`)

The dashboard uses primary sources first: company IR releases, SEC filings, and official NVIDIA / standards-body announcements. Analyst targets, price moves, and long-term multi-bagger narratives are treated as secondary or unsupported where appropriate.

## Open Locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8765/
```

## Contents

- `ALAB` tab: Astera Labs KPI, claim checks, product map, timeline, risk radar, scenarios.
- `MRVL` tab: Marvell KPI, claim checks, custom silicon / optics / networking map, timeline, risk radar, scenarios.
- `Compare` tab: ALAB vs MRVL business model and risk comparison.

## Important Note

This is a research and fact-checking dashboard, not investment advice. All data should be re-verified before making financial decisions.
