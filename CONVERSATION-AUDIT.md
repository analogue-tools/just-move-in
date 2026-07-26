# CONVERSATION AUDIT

**Jeanne Piffaut · checklist vs original brief deliverables 1-5 + notes · July 2026**

Status key: **Done** · **Partial** · **Gap** · **Pending input**

---

## Brief deliverables 1-5

| # | Deliverable | Status | Where it lives | Notes |
|---|---|---|---|---|
| 1 | Research and problem framing | **Done** | `01-research-and-problem-framing.md`, `01c-negative-review-analysis.md`, `ONE-PAGER.md`, `SIX-PAGER.md` §1 | Trustpilot positive + negative coded; structural 7-day / 6-week mechanism from JMI replies |
| 1b / primary | Primary research | **Done** | `01d-primary-research-survey.md` | Instrument + analysis plan + **§4 results filled** from Forms export (n = 12, July 2026). Directional only; own-network sample. Implications noted in ONE-PAGER and SIX-PAGER. |
| 2 | Competitive analysis | **Done** | `02-competitive-analysis.md`, `SIX-PAGER.md` §2 | Homebox, Bunch, Updater, SlothMove, comparison sites, Nous, general AI agents |
| 3 | Product strategy / PRD | **Done** | `03-product-strategy-prd.md`, `03b-experience-design-addendum.md`, `SIX-PAGER.md` §3-4 | Event table, modality split, two-list model, transparency card |
| 4 | Engineering / handoff spec | **Done** | `HANDOFF.md`, `COMPONENTS.md`, `04-engineering-spec.md`, `prototype/index.html`, `tokens/` | Behavioural spec + HTML prototype; panel-fee and board contracts updated |
| 5 | Handoff judgment | **Done** | `05-handoff-judgment.md` | Defends HTML + behavioural spec; names illustration, voice persona, full AA as specialist gaps |

---

## Supporting artifacts

| Artifact | Status | Path |
|---|---|---|
| One-pager | **Done** | `ONE-PAGER.md` (confidence table + product corrections + survey implications) |
| Six-pager | **Done** | `SIX-PAGER.md` (provenance, design goals, confidence + primary research results) |
| User journey | **Done** | `USER-JOURNEY.md` |
| Testing plan | **Done** | `08-testing-plan.md` |
| Rollout plan | **Done** | `06-rollout-plan.md` |
| Local services note | **Done** | `09-local-services-note.md` |
| Design language | **Done** | `DESIGN-LANGUAGE.md` |
| FAQ (mover + in-product map) | **Done** | `FAQ.md` |
| WCAG pressure test | **Done** | `WCAG-AUDIT.md` |
| Type / colour directions (exploratory) | **Done** | `07-type-and-colour-directions.html` |
| README / layout | **Done** | `README.md` → `prototype/`, `tokens/` |
| Wireframe sheet (incl. offline) | **Done** | `WIREFRAMES.html` |

---

## Jeanne notes / product corrections (conversation)

| Note | Status | Evidence |
|---|---|---|
| Author = Jeanne Piffaut (replace Fabio where authorship appears in core case docs) | **Done** | Authorship headers and bylines use Jeanne Piffaut. No remaining Fabio authorship in project markdown. |
| Confidence on 18/60: High theme, High mechanism, Low Reddit-for-JMI, honest non-prevalence | **Done** | ONE-PAGER + SIX-PAGER confidence tables |
| One pick explained via Ofgem | **Done** | ONE/SIX-PAGER, HANDOFF, COMPONENTS (`OfferCarousel`) |
| Panel-fee transparency; no per-card £ as primary UX | **Done** | HANDOFF §5, `PanelFeeNote`, SIX-PAGER |
| Voice + UI modular; voice leads day 0; UI always available | **Done** | HANDOFF §6, COMPONENTS `VoicePlusUI` |
| Home board as system of record | **Done** | HANDOFF board contract, COMPONENTS `Board` |
| Receipts first | **Done** | ONE/SIX-PAGER Phase 0 |
| Marketplace search + map | **Done** | HANDOFF §8, COMPONENTS |
| FAQ + Ask Jay | **Done** | `FAQ.md`, HANDOFF §7 |
| Scrub double dashes / em dashes and "not X, it's Y" in refreshed docs | **Partial** | Applied on refreshed core docs; older `0x` files and state-machine ASCII (`──>`) still use hyphen runs |
| Do not invent survey results | **Done** | §4 filled from spreadsheet only; n and caveats stated |
| Do not commit | **Done** | No commit from this pass |

---

## Remaining gaps (honest)

1. **External WCAG 2.2 AA audit** after remediations in `WCAG-AUDIT.md`.
2. **Voice persona / illustration** specialist work.
3. **Four-star Trustpilot band** still missing for prevalence.
4. Optional: retire root `index.html` duplicate once teams only open `prototype/index.html` (both are currently in sync).
5. Optional prose scrub on older `0x-*.md` files for double-dash / negative constructions.
6. Primary survey is directional (n = 12); follow-up calls and prototype task re-test of Q6 still valuable per `01d` §6.

Prototype parity for Board, PanelFeeNote, FAQSheet, Marketplace, Ask Jay, and moving-day Yes / Looks right is **Done** in `prototype/index.html` (see demo rebuild).

Engineering notes (`c-note`, toggle in demo bar) updated July 2026 to cite: watching/consent gate, human escape + survey Q5/Q6, Ofgem one-pick, panel-fee once, unconfirmable constraint + 18/60, survey address-update reorder, Day 0 voice-for-access, deposit/PSR safety, Market/Settings/Ask Jay brief rules, Change plan → basket.


---

## Brief score (at a glance)

| Deliverable | Score |
|---|---|
| 1 Research | Done (primary results filled, n = 12) |
| 2 Competitive | Done |
| 3 Product | Done |
| 4 Engineering handoff | Done |
| 5 Handoff judgment | Done |
