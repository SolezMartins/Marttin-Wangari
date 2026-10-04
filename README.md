# Martin Wangari — Terminal Portfolio

Software Developer & IT Systems Support · Nairobi, Kenya

An interactive, terminal-style developer portfolio: type commands (`about`, `builds`, `hire`, `message`…) or click them.
Live: https://marttin-wangari.vercel.app

## Highlights
- Pure HTML, CSS and vanilla JavaScript — no framework, no build step
- Strict Content Security Policy (no inline scripts apart from one hashed flag, no third-party JS)
- Crawlable plain-HTML version of all content for search engines and screen readers
- Dark and light themes, reduced-motion support, keyboard shortcuts (Tab, ↑/↓, Ctrl+L, `/`)
- Contact form via Formspree (set `FORMSPREE_ID` in `script.js`)
- Vercel Web Analytics with custom events for link and command usage

## Demo builds (in `/build`)
MicroAfia Healthcare (React + Vite client build, pre-built into `/build/microafia-healthcare`) · Mpambe Hotel POS · Maxland Properties PMS · ByZenna Essence · Benuru Schools SMS · Joyrinah Schools MS —
interactive demos running on sample data. Live client sites (Eduwincare, Sammy Trucks) are linked from the `builds` command.

## Run locally
```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy
Push to GitHub; Vercel deploys automatically. Headers and redirects live in `vercel.json`.

## Contact
martindevs07@gmail.com · [LinkedIn](https://linkedin.com/in/martin-wangari-586903230)
