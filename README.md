<div align="center">

# ✦ Event Designer

**A minimalist, high-end event showcase interface**

---

*Three pages. Zero dependencies. Pure HTML, CSS, and Vanilla JavaScript.*

</div>

---

## Overview

Event Designer is a static, front-end-only website built as a structured AI-assisted development practice project. It simulates the public-facing interface of a fictional event-planning brand — presenting curated event offerings through a clean, interactive grid experience.

The site has no backend, no framework, and no build step. It runs directly in any modern browser.

---

## Pages

### `index.html` — Landing
The entry point of the interface. Features a full-viewport hero section with a strong headline and a single call-to-action directing visitors toward the Events page. Typography carries the visual weight — layout is intentionally sparse.

### `about.html` — About
Presents the brand's identity through a structured content layout: an origin story block, a philosophy statement, and three value propositions rendered as a card grid. Content is mock but consistent in tone.

### `events.html` — Events
The core interactive page. Renders a responsive CSS Grid of event cards — each card populated dynamically from a static JavaScript data structure, not hand-written HTML. Three event types are currently featured:

| Event | Description |
|---|---|
| **Elegant Wedding** | Timeless, intimate celebrations coordinated around every detail |
| **Corporate Gala** | Professional networking events with premium staging and lighting |
| **Bespoke Birthday** | High-energy milestone parties with personalized visual themes |

---

## Interaction Flow

```
Events Grid
    │
    ▼  [ Click a card ]
Details Dialog (modal)
    │
    ├─── [ × button or click outside ] ──▶ Dialog closes. Back to grid.
    │
    ▼  [ Click "Choose" ]
Confirmation Toast (2 seconds)
    │
    ▼  [ Auto-close at 2s ]
Dialog + Toast both close. Back to grid.
```

The confirmation toast is a native `<dialog>` element rendered in the browser's top layer — it surfaces above the details modal without relying on `z-index` stacking.

---

## Visual Design

| Property | Approach |
|---|---|
| **Color** | Dark neutral base with a single warm gold accent — used exclusively for interactive elements |
| **Typography** | Heading font paired with a clean body font, loaded from Google Fonts |
| **Motion** | Subtle `scale` + `opacity` transitions on dialog open/close via `@starting-style` |
| **Layout** | Mobile-first CSS Grid; fluid sizing via `clamp()` and `auto-fill` columns |
| **Backdrop** | Native `<dialog>::backdrop` with `backdrop-filter: blur` — no JS-managed overlays |

---

## File Structure

```
/
├── index.html              Landing page
├── about.html              About page
├── events.html             Events page
│
├── css/
│   └── styles.css          All styles — shared and per-page
│
├── js/
│   ├── events-data.js      Static event objects (EVENTS_DATA array)
│   └── events.js           Grid rendering + dialog + selection logic
│
├── assets/
│   ├── wedding.jpg
│   ├── corporate.jpg
│   └── birthday.jpg
│
└── context/                Project planning and documentation
    ├── event-designer-PRD.md
    ├── event-designer-SRS.md
    ├── event-designer-task-breakdown.md
    └── CHANGES.md
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 (semantic elements throughout) |
| Styling | Vanilla CSS3 (custom properties, Grid, `clamp()`, `@starting-style`) |
| Behavior | Vanilla JavaScript ES6+ (no libraries, no frameworks) |
| Hosting | Static — no server required |

---

## Key Implementation Details

- **Data-driven grid:** Event cards are generated from a JavaScript array (`EVENTS_DATA`) — adding a new event requires only a new object in `events-data.js`, no HTML changes.
- **Native `<dialog>`:** Both the details modal and the confirmation toast use the HTML `<dialog>` element with `showModal()`, placing them in the browser's top layer natively.
- **Click-outside dismiss:** Backdrop clicks are detected by comparing `event.target === dialog` — no third-party overlay needed.
- **CSS-only transitions:** Dialog entrance/exit animations use `@starting-style` for the entry frame and `opacity`/`transform` transitions for close — no JavaScript animation code.
- **No console errors** under normal use across Chrome and Firefox.

---

## Development Context

This project was built as a collaborative AI-assisted development exercise — one of the practice tracks for the **Tripoli Municipality Pre-Internship Program**. The workflow used explicit rule files (`AGENTS.md`, `ponytail.md`) and structured context documents (PRD, SRS, task breakdown) to guide each session, with every change logged in `CHANGES.md`.

---

<div align="center">

*Built with structured prompting, a real Git workflow, and no shortcuts.*

</div>