# Dar Alkahrbaa Training Academy — website concept

Static prototype of the training academy site (أكاديمية دار الكهرباء للتدريب) plus its admin panel.

- `index.html` — public site. English by default, Arabic (RTL) via the toggle in the header.
  Pages: home, courses catalog, course page with registration form, past rounds, feedback, about, FAQ, contact.
  Floating WhatsApp button (right) and a "Help me choose" course helper (left).
- `admin.html` — admin panel (Arabic): rounds and courses, posters, university workshops, yearly photos,
  registrations, feedback, partners, FAQ, site settings and team roles.
- `dk-data.js` — shared data store and seed content. The admin saves to `localStorage`; the site reads the same key,
  so edits show on the site in the same browser. In the real build this file is replaced by API calls
  (routes are listed at the bottom of the file).
- `assets/` — logo, round posters, workshop photos, university logos, yearly group photos.

## Run locally

Any static server works, for example:

```bash
npx serve .
```

Then open `http://localhost:3000` (site) and `http://localhost:3000/admin.html` (admin).

## Status

Concept version. Prices, exact start dates, hours per module, the mechanical rounds and the per-round
graduate numbers are sample data until the real data arrives. Sign-in (Google) is a demo.
