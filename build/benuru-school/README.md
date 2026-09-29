# Benuru School Management System — Portfolio Demo

A polished, interactive school-management-system concept for **Benuru Group of Schools, Mlolongo, Kenya**, prepared as a Malik Technologies portfolio project.

## Portfolio deployment

Designed to work from a nested path such as:

`/build/benuru-school/`

The included Netlify redirect supports direct navigation and refreshes on nested routes.

## Included

- Responsive school administration dashboard
- Role-based demo access
- Students and student profiles
- Admissions
- Academics and editable demo marks
- Attendance
- Fees and payment records
- Receipts
- Timetable
- Staff
- Library
- Transport
- Inventory
- Communication
- Reports
- Settings
- Parent portal
- SVG icon system
- Custom SVG favicon
- Responsive mobile/tablet layout
- Print-friendly styling
- Portfolio footer: © Malik Technologies 2026
- Fictional demo data only

## Important

This is a **portfolio/demo build**, not a live Benuru Group of Schools system and not connected to real school records.

External services such as M-Pesa, SMS, email, database authentication and production PDF generation require a backend/integration before real deployment.

## Deploy

This is a static Netlify-ready project.

### Netlify Drop

Upload the project folder to Netlify Drop.

### Netlify CLI

```bash
npm install -g netlify-cli
netlify deploy --prod
```

The publish directory is the project root (`.`).

## Recommended production next step

For a real deployment, move the demo data into PostgreSQL and add:

- secure authentication
- server-side authorization
- audit logging
- encrypted/securable document storage
- backups
- M-Pesa integration
- SMS/email provider
- production PDF generation
- school/campus configuration
- formal data protection and access controls

## Branding

The footer links to the Malik Technologies portfolio:

https://marttin-wangari.netlify.app/
