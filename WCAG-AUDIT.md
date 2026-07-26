# WCAG 2.2 AA pressure test

**Jeanne Piffaut · prototype `prototype/index.html` · July 2026**

This is a **pressure test**, not a certification. It records what likely passes, what fails or is at risk, and remediation before customer exposure. A full audit by an accessibility specialist remains on the blocking list in `05-handoff-judgment.md`.

Scope: static HTML prototype, keyboard, semantics, colour, motion, target size, and readable type. Out of scope until built: live screen reader passes on production components, voice IVR (separate standard), map canvas alternatives in production.

---

## Summary

| Area | Verdict |
|---|---|
| Document language, landmarks (partial) | Partial pass |
| Colour contrast (ink on paper, moss, fog) | Likely pass for primary text; verify fog chip text |
| Non-colour state meaning | Pass (mono strings) |
| Keyboard focus visibility | Pass in CSS floor |
| Focus order / focus traps (sheets) | Fail / incomplete (FAQ sheet not fully implemented) |
| Target size (2.5.8) | At risk (some chips and text buttons undersized) |
| Text resize / reflow to 360px | Likely pass |
| Motion (`prefers-reduced-motion`) | Pass |
| Forms and labels | Partial (demo inputs) |
| Status messages / live regions | Fail (voice transcript, Ask Jay answers) |
| Name, Role, Value on custom controls | At risk (carousel, board, map) |

---

## What likely passes

| Criterion | Evidence in prototype / tokens |
|---|---|
| **1.4.3 Contrast (AA)** | Primary ink on paper/card is high contrast by design |
| **1.4.1 Use of colour** | State chips use lowercase text strings, not colour alone |
| **1.4.12 Text spacing** | Layout tolerates increased spacing; no absolute clipped text in main flow |
| **2.3.3 Animation from interactions** | `prefers-reduced-motion` collapses durations |
| **1.4.4 Resize text** | Relative-friendly UI; no bitmap text for critical UI |
| **1.4.10 Reflow** | Designed down to 360px width |
| **2.4.7 Focus visible** | Visible focus styles called out in handoff acceptance criteria |
| **3.1.1 Language of page** | Set `lang="en"` on `<html>` (verify in prototype root) |

---

## What fails or is at risk

| Criterion | Issue | Remediation |
|---|---|---|
| **1.3.1 Info and relationships** | Some visual headings may be styled `<p>` / divs | Real heading hierarchy per screen (`h1` once, then `h2` for Board columns) |
| **1.3.5 Identify input purpose** | Address / name fields in discovery may omit autocomplete tokens | Add `autocomplete` for name, address, tel, email |
| **1.4.3 / 1.4.11** | Fog and ink-3 metadata may sit near the 4.5:1 edge on tinted chips | Measure fog-on-fog-sub and ink-3-on-paper; darken text or boost chip contrast |
| **1.4.13 Content on hover/focus** | Engineering notes / tooltips if any dismiss awkwardly | Ensure hover content is dismissible, hoverable, persistent |
| **2.1.1 Keyboard** | Horizontal `OfferCarousel` and map pins may be pointer-first | Arrow key support, focusable slides, list alternative for map |
| **2.4.3 Focus order** | Demo jump nav vs in-phone tab order can confuse | Separate prototype chrome from product tab order in production |
| **2.4.6 Headings and labels** | Eyebrows used where headings should be | Pair eyebrow with a real heading |
| **2.4.11 Focus not obscured (2.2)** | Sticky Ask bar may cover focused controls at bottom | Scroll-margin / padding so focused item clears sticky chrome |
| **2.5.8 Target size (minimum)** | State chips, ghost text buttons, map pins often &lt; 24×24 CSS px | Enlarge hit areas; keep visual size if needed via padding |
| **3.2.2 On input** | Lens switcher must not surprise-refetch (already a product rule) | Keep "preserves scroll, no refetch" in QA |
| **3.3.1 / 3.3.3 Error identification** | Meter confirm / discovery errors are mocked | Inline text errors, not colour-only; suggest fix |
| **4.1.2 Name, Role, Value** | Custom Board, carousel, voice panel need roles | Use tabs/listbox/dialog patterns from shadcn; expose `aria-*` |
| **4.1.3 Status messages** | Voice transcript and Ask Jay answers update visually only | `aria-live="polite"` regions; assertive for transfer / failure |
| **2.2.2 Pause, stop, hide** | Any auto-advancing demo chrome | User control; no auto carousel in production basket |

---

## Voice and moving-day specifics

| Topic | Note |
|---|---|
| Voice UI on screen | Buttons must mirror intents (already specified) for people who cannot or will not take the call |
| Transcript | Treat as a live region; do not rely on audio alone for confirmation |
| Meter read-back | Confirmation control must be operable by keyboard and AT; reading in mono text |
| Outbound call | IVR accessibility is a separate workstream from the HTML AA audit |

---

## Recommended remediation order

1. Heading hierarchy + labels on every interactive control  
2. Live regions for Ask Jay, voice transcript, cascade diff  
3. Carousel and map keyboard paths  
4. Target size pass on chips and secondary actions  
5. Contrast re-measure on fog / pending chips and metadata  
6. Sticky-bar focus occlusion  
7. External AA audit on the production component library  

---

## Sign-off stance

Present this document as **known gaps + floor**, never as "WCAG AA compliant". Phase 0 receipts can ship internally with the floor. Broad customer exposure waits on remediation items 1-5 and an external audit.
