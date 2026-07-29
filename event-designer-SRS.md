# Software Requirements Specification (SRS)
## Mini Project: Event Designer Website

---

## 1. Scope

A static, front-end-only website: HTML, CSS, and vanilla JavaScript. No frameworks, no backend, no build tooling required — kept intentionally simple to be a manageable first project for prompting/AI-assisted development practice.

---

## 2. Tech Stack

- **HTML5** — semantic structure
- **CSS3** — styling; plain CSS (no preprocessor needed at this scale)
- **Vanilla JavaScript (ES6+)** — no libraries or frameworks
- Static hosting only (e.g. opened directly or served via GitHub Pages) — no server-side code

---

## 3. Site Structure

```
/
├── index.html          (Landing page)
├── about.html           (About page)
├── events.html           (Events page)
├── /css
│   └── styles.css       (shared styles across all pages)
├── /js
│   ├── events-data.js    (static event data)
│   └── events.js         (dialog + interaction logic)
└── /assets               (images, icons, etc.)
```

Shared header/navigation and footer should be visually and structurally consistent across all three pages.

---

## 4. Functional Requirements

### 4.1 Navigation
- FR-1: All three pages are reachable from a shared navigation element present on every page.
- FR-2: The current page is visually indicated in the navigation (e.g. active state).

### 4.2 Landing Page
- FR-3: Displays a hero section with headline, short supporting text, and a call-to-action button linking to the Events page.

### 4.3 About Page
- FR-4: Displays static mock content (brand story, etc.) using the shared visual theme.

### 4.4 Events Page
- FR-5: Displays a responsive grid of event cards. Each card shows at minimum a title and image/visual.
- FR-6: Event data is stored in a single static JS data structure (array of objects), not hardcoded per-card in HTML — so the grid is generated dynamically from data.
- FR-7: Clicking an event card opens a modal/dialog showing that event's full details (pulled from the same data structure).
- FR-8: The details dialog includes a "Choose" button.
- FR-9: Clicking "Choose" triggers a second, smaller confirmation popup/dialog indicating success (e.g. "Event selected!").
- FR-10: The confirmation popup automatically closes after exactly 2 seconds.
- FR-11: When the confirmation popup closes, the underlying details dialog also closes automatically — the user returns to the events grid.
- FR-12: The details dialog can also be closed manually (e.g. a close/X button or clicking outside it) without going through "Choose."

### 4.5 Data Structure (example shape)
```js
{
  id: "wedding-01",
  title: "Elegant Wedding",
  image: "assets/wedding.jpg",
  shortDescription: "...",
  fullDescription: "...",
}
```
Exact fields to be finalized during task breakdown, but the principle (grid rendered from data, not hand-written HTML per card) is a requirement.

---

## 5. Non-Functional Requirements

- NFR-1: **Responsive** — usable and visually correct from mobile widths up through desktop, mobile-first.
- NFR-2: **No console errors** on any page under normal use.
- NFR-3: **Cross-browser basics** — should work correctly on current versions of Chrome and Firefox at minimum.
- NFR-4: **Accessibility basics** — dialogs should be dismissible via a visible close control (not just click-outside), and interactive elements should be reachable/operable without relying solely on hover.
- NFR-5: **Performance** — no unnecessary asset weight; images reasonably sized/optimized given this is a static, lightweight project.
- NFR-6: **Code organization** — CSS and JS kept in separate files (not inline), consistent naming conventions across both contributors' code.

---

## 6. Interaction Flow — Event Selection

1. User is on the Events page, sees the grid of event cards.
2. User clicks a card → details dialog opens, populated from that event's data.
3. User clicks "Choose" inside the dialog → confirmation popup appears.
4. Confirmation popup is visible for 2 seconds.
5. After 2 seconds: confirmation popup closes AND details dialog closes, in that order or simultaneously.
6. User is back at the events grid, no dialogs open.

Alternate flow: user closes the details dialog manually at step 2 without clicking "Choose" → dialog closes, no confirmation is ever shown.

---

## 7. Constraints

- No external JS/CSS frameworks (e.g. no Bootstrap, no React) — the point is practicing vanilla fundamentals and AI-assisted coding without framework abstraction in the way.
- No backend — "Choose" does not persist or send data anywhere; it's a UI-only simulation.
