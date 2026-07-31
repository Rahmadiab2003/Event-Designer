# Product Requirements Document (PRD)
## Mini Project: Event Designer Website

---

## 1. Overview

A small three-page website for a fictional event-planning brand, built as a practice project. The goal isn't a real product — it's a low-token-cost way to practice working with AI tools (prompting, rule files, context files) inside a real git workflow, on something small enough to fully understand end to end.

---

## 2. Pages

### 2.1 Landing Page
- First impression of the "brand." Should feel minimal but stylish — not a generic template.
- Needs a strong hero section, clear headline, and a call-to-action pointing to the Events page.
- Should hint at what the brand does without overexplaining — let the visuals and short copy carry it.

### 2.2 About Page
- Follows the same visual theme as the landing page (same colors, type, spacing language).
- Contains mock/placeholder content: a short brand story, what the (fictional) company does, maybe a couple of made-up team members or values. Content doesn't need to be real — just consistent and readable.

### 2.3 Events Page
- A grid layout showing different event occasions (e.g. weddings, corporate events, birthdays — exact list to be decided).
- Clicking an event opens a dialog with more details about that event (description, maybe an image, mock pricing or highlights).
- The dialog has a "Choose" action. Clicking it:
  1. Opens a second, smaller confirmation popup saying the event selection was successful.
  2. That confirmation stays visible for 2 seconds.
  3. After 2 seconds, both the confirmation popup and the original details dialog close.

---

## 3. Visual Theme

Based on current design direction for small/minimal sites:

- **Style:** Minimalist — clean lines, generous white space, limited color palette. Every element should feel intentional; nothing decorative just to fill space.
- **Typography:** Bold, confident headline type paired with a simple, readable body font. Typography carries more visual weight than imagery.
- **Color:** A limited palette — one neutral base (off-white or soft dark) plus one accent color used consistently for buttons/highlights. Optional: support a dark-mode-friendly palette, since it's a current baseline expectation rather than a novelty.
- **Motion:** Small, subtle micro-animations (hover states, dialog open/close transitions) to make the interface feel responsive — not flashy, just polished.
- **Layout:** Mobile-first — the layout should work cleanly on small screens first, then scale up.

This theme should stay consistent across all three pages.

---

## 4. Content Notes

- All written content (About page bio, event descriptions) is mock/placeholder — realistic in tone, but invented for the purpose of the project.
- Event occasions on the Events page: exact list and descriptions to be decided during task breakdown.

---

## 5. Out of Scope

- No real backend, database, or payment processing — "Choose" is a simulated confirmation only.
- No user accounts or authentication.
- No CMS — all content is hardcoded or in a static local data structure.
