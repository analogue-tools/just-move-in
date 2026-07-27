# Jay · Just Move In

**Jeanne Piffaut · Product discovery case · July 2026**

> The home-setup call already works. Automating only the conversation would scale the wrong layer.  
> **Jay** is the digital operator that does the admin, shows honest proof it happened, and survives the move date changing.

**Notion skim:** [`docs/CASE-STUDY.md`](docs/CASE-STUDY.md)  
**Demo:** https://just-move-in-liard.vercel.app  

---

## The problem in one breath

Just Move In’s five-star reviews name people. A meaningful slice of one-star reviews say they were *told* something was handled when it was not. Councils often never acknowledge. About **37% of agreed sales never complete** (Connells), so contacting suppliers too early creates real harm. Trust dies on one fake “done.”

So the product is not a smarter chat. It is **execution you can see**, on the same partner referral funnel that already knows a move is happening.

---

## The bet

| | |
|---|---|
| **From** | Specialist phone call that works because of people |
| **To** | AI-assisted operator that keeps the partner funnel and earns trust with receipts |
| **Commercial** | Yearly utility attach + recurring layers (Market, later vouchers/ads) via trust and usefulness, still on that funnel |
| **Moat** | Partner trigger + integration rails. Not the model |

**Understand / Decide / Do:** Jay explains; the mover decides money in UI; the system does admin mostly invisibly. Voice is for access on moving day, never for financial commitment. A named customer support person stays on money, complaints, vulnerability, and failed automation. In the prototype that person is **Lyndon Beadle**.

---

## How to spend time here

| Time | Do this |
|---|---|
| 2 min | Skim the theme list below |
| 8 min | Demo: Referral → Discovery → Basket → Confirm → Pre-move → Day 0 → Tasks |
| 5 min | Demo toolbar: **By team**, then **Why this** |
| Rest | Open the themes you care about; use instruments when a note is not enough |

Local: open [`prototype/index.html`](prototype/index.html) in a browser (no build, no server; single file). Root [`index.html`](index.html) is the synced copy Vercel serves at `/`.

---

## Rules that must not break

Hand these to eng before polish:

| Rule | In plain terms |
|---|---|
| **Do not contact anyone too early** | After a referral, while the sale can still fall through, Jay may store the profile. Jay must not email or call councils or suppliers yet. |
| **Never fake “done”** | Green / confirmed only when we have proof back from the other end. If we sent something and got silence, show **`sent · no receipt`**, not success. |
| **If the move date changes, nothing disappears** | Deadlines and bookings redraw. Tasks are not silently dropped. |
| **Money stays on a screen** | Tariff / plan choices and the panel-fee disclosure happen in the UI, not by voice alone. Say the fee once on that surface. |
| **Pause and opt out are real** | They stop messages and jobs in the backend, not only in the UI. A named person (Lyndon in the demo) is reachable when money, distress, or failed automation needs a human. |

**What I would measure:** share of moves where time-sensitive setup finishes before it becomes expensive or impossible. Also: how often someone thinks a task is done when the UI still says it is not. **Ship blockers:** confirming without a receipt, or acting on the wrong property.

---

## Deep dive (by theme)

Thematic notes first. Numbered root files are instruments behind them.

| # | Open | What it is |
|---|---|---|
| 01 | [`docs/wiki/working/01-APPROACH.md`](docs/wiki/working/01-APPROACH.md) | How I worked the case |
| 02 | [`docs/wiki/working/02-RESEARCH.md`](docs/wiki/working/02-RESEARCH.md) | Primary + secondary synthesis |
| 03 | [`docs/wiki/working/03-PRODUCT.md`](docs/wiki/working/03-PRODUCT.md) | Product direction and surfaces |
| 04 | [`docs/wiki/working/04-ENGINEERING.md`](docs/wiki/working/04-ENGINEERING.md) | Eng constraints and pointers |
| 05 | [`docs/wiki/working/05-DESIGN.md`](docs/wiki/working/05-DESIGN.md) | Design language and open topics |
| 06 | [`docs/wiki/working/06-SALES-CUSTOMER-SUPPORT.md`](docs/wiki/working/06-SALES-CUSTOMER-SUPPORT.md) | Sales / CS / partnerships |
| 07 | [`docs/wiki/working/07-FEATURE-BRIDGE.md`](docs/wiki/working/07-FEATURE-BRIDGE.md) | Research → feature → events |
| 08 | [`docs/wiki/working/08-LATER-DISCUSS.md`](docs/wiki/working/08-LATER-DISCUSS.md) | Parked bets and discuss list |
| 09 | [`docs/wiki/working/09-STAKEHOLDER-COLLABORATION.md`](docs/wiki/working/09-STAKEHOLDER-COLLABORATION.md) | How I would run the room |
| 10 | [`docs/wiki/working/10-BRIEF-CHECK.md`](docs/wiki/working/10-BRIEF-CHECK.md) | Brief coverage check |

**In the demo toolbar:** **By team** · **Why this**

---

## Instruments (when a theme note is not enough)

| Need | File |
|---|---|
| Survey write-up + sheets | [`01d-primary-research-survey.md`](01d-primary-research-survey.md) |
| Desk research Q tables | [`01-research-and-problem-framing.md`](01-research-and-problem-framing.md) |
| Negative Trustpilot coding | [`01c-negative-review-analysis.md`](01c-negative-review-analysis.md) |
| Full competitive tables | [`02-competitive-analysis.md`](02-competitive-analysis.md) |
| Full PRD | [`03-product-strategy-prd.md`](03-product-strategy-prd.md) |
| Eng states / adapters | [`04-engineering-spec.md`](04-engineering-spec.md) · [`HANDOFF.md`](HANDOFF.md) · [`COMPONENTS.md`](COMPONENTS.md) |
| Events / funnels / dashboard | [`FLOWS-EVENTS-ANALYTICS.md`](FLOWS-EVENTS-ANALYTICS.md) · [`analytics/dashboard.html`](analytics/dashboard.html) |
| Rollout / testing | [`06-rollout-plan.md`](06-rollout-plan.md) · [`08-testing-plan.md`](08-testing-plan.md) |
| Journey / Market note | [`USER-JOURNEY.md`](USER-JOURNEY.md) · [`09-local-services-note.md`](09-local-services-note.md) |
| Design tokens / FAQ | [`DESIGN-LANGUAGE.md`](DESIGN-LANGUAGE.md) · [`FAQ.md`](FAQ.md) |

Event names: FLOWS is authoritative; HANDOFF §9 matches it.

---

This is a discovery artefact for co-building. It is **not** a production system and **not** brand-final UI.

Built with AI in the loop (Claude, Gemini, Cursor / Grok) and a first pass I protected as mine. The judgment was mine: the negative reviews flipped my own conclusion from inconsistent follow-up to a structural gap, which became the whole product. Prototype for critique.
