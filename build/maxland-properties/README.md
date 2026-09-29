# Maxland Properties Ltd — Property Management System (demo)

A frontend-only, portfolio demo of the software a Kasarani property firm would run day to day.
No backend, no database, no API keys. Open `index.html` and it works — including offline.

## Run it
Double-click `index.html`, or serve the folder:

    npx serve .          # or: python3 -m http.server

## Deploy
Upload the whole folder to Netlify (drag & drop), Vercel (`vercel --prod`), GitHub Pages,
or any static host. There is nothing to build and nothing to configure.

## Embed in a React / Next.js portfolio
Copy this folder into `public/maxland/`, then link or iframe it:

    <a href="/maxland/index.html">Open the demo</a>
    <iframe src="/maxland/index.html" style={{width:'100%',height:'90vh',border:0}} title="Maxland PMS demo" />

## What's inside
- Role picker: admin, property manager, accountant, caretaker, landlord, tenant — each sees a different sidebar.
- Dashboard with KPIs and hand-rolled SVG/CSS charts (collections trend, arrears aging, occupancy, expenses).
- Properties → colour-coded unit board → unit, tenant, ledger, payment history.
- Tenants with a 3-step add wizard, leases with renew / notice-to-vacate.
- Invoices, a batch "generate monthly invoices" job, and one-off charges.
- Simulated M-Pesa STK push: countdown, PIN entry or cancellation, generated confirmation code, allocation oldest-invoice-first, SMS receipt.
- Unmatched M-Pesa payments queue with assign-to-tenant.
- Arrears aging and bulk SMS reminders.
- Drag-and-drop maintenance kanban (Reported → Assigned → In progress → Completed).
- Reports with client-side CSV export, SMS log with composer (English + Swahili templates), landlord statement, tenant portal, settings and Reset demo data.

## Data
Seeded deterministically on first load into `localStorage` under `maxland_demo_v1`:
7 properties, 128 units, 108 tenants, 12 months of invoices and payments, 22 maintenance
tickets and per-property expenses. Every change you make is written back to `localStorage`.
The seed generator lives in the `seed()` function at the top of the script, kept separate from
the rendering code so the numbers are easy to tweak. **Settings → Reset demo data** restores it.

## Honest scope
All names, phone numbers, ID numbers, properties and M-Pesa codes are fictional. M-Pesa and SMS
are simulated in the browser — no Safaricom, Africa's Talking or any other service is contacted.
