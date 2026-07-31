# Task Breakdown — Event Designer Project

Tasks are split into phases (Structure → HTML → CSS → JS) and combined where two related pieces of work can reasonably fit in one AI session — the goal is fewer, slightly bigger tasks rather than many tiny ones, to make efficient use of a limited quota. Follow the Git Workflow doc for branching on every task below (one feature branch per task, PR reviewed by the other person).

**Team:** Person A / Person B — assign names once tasks are agreed.

---

## Working with AI context — before starting

- Only give the AI the file(s) relevant to the current task, plus the relevant PRD/SRS section — not the entire project every time.
- If a task still feels too big to describe in a few sentences even after combining, split it back out rather than risk a messy, hard-to-review result.
- Commit after each completed task, not after a whole phase.

---

## Phase 0 — Project Structure

Done together (or by one person, reviewed by the other) before anything else starts.

| Task | Description | Depends on |
|---|---|---|
| 0.1 | Create folder structure (`/css`, `/js`, `/assets`) with placeholder files, and bare HTML shells for all three pages (doctype, head, linked CSS/JS, empty body) | — |
| 0.2 | Add shared nav + footer structure (markup only) to all three shells, push to `dev`, confirm both people can pull and run it locally | 0.1 |

---

## Phase 1 — HTML (structure/content markup)

Split by page. Semantic markup only, no styling.

| Task | Description | Suggested owner |
|---|---|---|
| 1.1 | Landing page markup: hero section, headline, CTA button, semantic sections | Person A |
| 1.2 | About page markup: brand story section, mock content blocks | Person B |
| 1.3 | Events page markup: grid container placeholder for event cards, plus the details dialog and confirmation popup markup (structure only, hidden by default) | Person A |

*Cross-review: swap and review each other's markup for consistency before merging into `dev`.*

---

## Phase 2 — CSS (styling)

Foundation first (blocks the rest), then split by page. Each page task includes making that page responsive — no separate responsive pass at the end.

| Task | Description | Suggested owner | Depends on |
|---|---|---|---|
| 2.1 | Theme foundation (CSS variables: colors, typography, spacing, based on the PRD) + shared nav/footer styling | Person A | Phase 1 |
| 2.2 | Landing page styling, including responsive/mobile check | Person A | 2.1 |
| 2.3 | About page styling, including responsive/mobile check | Person B | 2.1 |
| 2.4 | Events grid + dialog/popup styling (layout, hover states, overlay, transitions), including responsive/mobile check | Person B | 2.1 |

*Task 2.1 should be merged before 2.2–2.4 start, so everyone styles against the same variables.*

---

## Phase 3 — JavaScript (behavior)

| Task | Description | Suggested owner | Depends on |
|---|---|---|---|
| 3.1 | `events-data.js` (static event objects per the SRS shape) + dynamic rendering of the grid into the Phase 1.3 container | Person A | Phase 1.3 |
| 3.2 | Manual close for the details dialog (X button / click-outside) | Person A | 3.1 |
| 3.3 | Full selection flow in one go: open dialog on card click and populate it → "Choose" shows confirmation popup → after 2 seconds, confirmation popup and details dialog both close | Person B | 3.1 |
| 3.4 | Integration check: both people test the full click-through flow together (open → choose → auto-close, and open → manual close) | Both | 3.1–3.3 |

---

## Merge order

1. Phase 0 (together)
2. Phase 1 tasks (parallel, cross-reviewed)
3. Phase 2, task 2.1 first — merge before continuing
4. Remaining Phase 2 tasks (parallel)
5. Phase 3, task 3.1 first — merge before 3.2/3.3 start
6. Remaining Phase 3 tasks
7. Task 3.4 (joint check) → PR `dev` into `main`
