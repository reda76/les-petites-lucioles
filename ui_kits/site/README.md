# UI kit — site les-petites-lucioles.fr

Recreation of the home page mockup provided by the client (`uploads/WhatsApp Image 2026-08-13 at 11.37.00.jpeg`), extended to the page structure requested in the brief.

- `index.html` — interactive shell: header nav switches between screens, footer on every page.
- `shared.jsx` — `Section` wrapper, nav labels, asset base path.
- `HomeScreen.jsx` — hero, valeurs, deux micro-crèches, focus Routot, journée, équipe + tarifs, CTA final.
- `MaisonScreen.jsx` — page Bosgouet : infos pratiques, espaces, projet pédagogique.
- `PagesScreens.jsx` — `RoutotScreen` (projet + calendrier), `JourneeScreen` (journée type + activités), `TarifsScreen` (grille + simulateur d'aides), `EquipeScreen` (portraits, méthode, recrutement).
- `PreinscriptionScreen.jsx` — working form with validation, confirmation state and FAQ.

Everything is composed from the design-system components; no primitive is re-implemented here.

Content status: copy for Routot, tarification, journée and équipe is **placeholder written in brand voice** — real addresses, opening dates, prices, staff names and photos still needed from the client.
