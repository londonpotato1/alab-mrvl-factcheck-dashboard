# ALAB / MRVL Investment Research Dashboard

Static research dashboard for comparing two U.S.-listed semiconductor companies:

- Astera Labs, Inc. (`ALAB`)
- Marvell Technology, Inc. (`MRVL`)

The dashboard focuses on business model, AI infrastructure exposure, financial momentum, valuation, risk profile, and investor-fit framing. It uses primary sources first: company IR releases, SEC filings, and official NVIDIA / standards-body announcements. Market-price-derived valuation metrics should be refreshed before use.

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

- `ALAB` tab: investment snapshot, business map, AI relevance, financial momentum, valuation lens, growth drivers, risks, investment-read framework.
- `MRVL` tab: custom silicon / optics / networking investment lens, financial momentum, valuation, growth drivers, risks, investment-read framework.
- `Compare` tab: ALAB vs MRVL investment character, investor fit, decision matrix, final research view.

## Important Note

This is a research dashboard, not investment advice. All data should be re-verified before making financial decisions.
