# DESIGN LANGUAGE

**Jeanne Piffaut · Jay / Just Move In · July 2026**

Part of the Jay case study. Full index in CASE-STUDY.md.

This file explains *why* the prototype looks the way it does. Tokens live in `tokens/tokens.json`. Visual authority is `prototype/index.html`.

---

## Goals (design for behaviour)

| Goal | What success looks like on screen |
|---|---|
| **Trust** | Named human, live institutional markers, honest chips, one clear commercial rule |
| **Transparency** | Seven-row task truth; date provenance; queued tasks show their send date |
| **Stickiness** | Home board is the place you return to; settling fills in and never decays |
| **Modularity** | Voice and UI both exist; lead modality follows access, buttons always remain |
| **Accessibility, one-hand** | Large targets, readable type, works at 360px, sticky human escape |
| **Human escape** | Connect to customer support human agent on hard screens; FAQ + Ask Jay for soft questions |
| **Real state** | Fog for `sent · no receipt`; green only with a stored receipt |

---

## Type: Instrument Sans + mono

| Role | Face | Job |
|---|---|---|
| Human-written | **Instrument Sans** | Headings, body, buttons, reasons, FAQ answers |
| Machine-derived | **Mono** (IBM Plex Mono / Geist Mono in tooling) | States, prices, dates, timestamps, meter readings, panel-fee figures if shown |

**Why this pairing.** Movers need to tell at a glance what a person decided and what a system reported. Sans carries warmth and brand; mono carries auditability. The split is the visual signature. The prototype uses Instrument Sans as a freely available stand-in for licensed Degular Display; IBM Plex Mono and Geist Mono are interchangeable for machine values. Keep the human/machine split intact when faces change.

**Floors.** Nothing below 14px. Anything a mover reads in order to act is 16px or larger. GOV.UK dropped sub-14 sizes citing British Dyslexia Association guidance. Disabled movers appear unprompted in JMI reviews as a segment that needs this most.

**Numerals.** Lining tabular on every machine figure so columns align when states update.

---

## Colour: fog is the thesis

| Token (concept) | Job |
|---|---|
| Ink / paper / card / line | Everyday reading and surfaces |
| Violet (Jay) | Primary action and "Jay is here"; never success |
| Amber | Deadline pressure and time; never "you failed" alone |
| Moss | Destination confirmed; receipt stored |
| **Fog** | **Sent, no receipt available.** Neither success nor failure |

Competitors paint unconfirmed council notifications green. Fog exists so we refuse that lie. Do not collapse fog into success or destructive in code review. There is no red in the mover-facing flow: genuine failures use amber plus explicit copy naming the fix.

Atmospheric ground (soft paper, light depth) beats a flat white slab. Atmosphere comes from stage, board density and honest status, not from decorative gradients as the main idea.

---

## Home is board-first

The Home tab is a **system of record**, not a marketing dashboard.

- **Ongoing** (left): work in flight.
- **Upcoming** (right): what is next.
- **Must-Do** heavier than **Could-Do** (type, chrome, position).
- Optional attention widget: one thing that needs a human glance.
- Same task data as List lens; switcher preserves scroll and does not refetch.

A progress / "home filling in" illustration may sit on top of `completedTaskIds` later. It is additive only: no decay, no streaks, no punishment for being mid-move.

---

## Marketplace: Treatwell cues, move context

Local services borrow patterns people already trust from booking apps:

- Need clusters before free-text search
- Search + map in sync
- Trust signals on the listing (verified, rating, count, guarantee)
- Clear fee rule via the same `PanelFeeNote` blueprint

This stays inside the move. It is discovery for "I just got keys", not a second consumer brand.

---

## Large targets and one-hand use

Moving day and the first fortnight are often one-handed, outdoors, low battery, patchy data.

- Primary controls ≥ 44×44px
- Sticky Ask bar / human escape
- Voice leads on day 0; UI mirrors the same intents
- No payment or credentials by voice

---

## Commercial chrome: quiet and consistent

Suppliers pay Just Move In a **panel fee**. It does not change the customer's price. Say that once, plainly, with one component. Skip a profit figure on every card as the primary pattern. Alternatives live in a horizontal carousel so control remains without a comparison-grid penalty (Ofgem: single offer converts higher than three-plus).

---

## Motion

Use motion for presence and hierarchy: screen enter, board attention, cascade diff stagger, progress fill. Collapse under `prefers-reduced-motion`. Avoid noise, confetti on obligations, or decorative loops.

---

## What this language refuses

- Fake green ticks
- Comparison tables of equal peers as the default
- Mode pickers before the mover can act
- Gamification on must-do admin
- Hiding the human behind a deflecting bot
- Per-card earnings as the hero commercial line
