# Jay · Just Move In

**Jeanne Piffaut · Product discovery case · July 2026**

> The home-setup call already works. Automating only the conversation would scale the wrong layer.  
> **Jay** is the digital operator that does the admin, shows honest proof it happened, and survives the move date changing.

**Read this first:** [`docs/CASE-STUDY.md`](docs/CASE-STUDY.md)  
**Click this next:** https://just-move-in-liard.vercel.app  
**Repo:** https://github.com/analogue-tools/just-move-in

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

**Understand / Decide / Do:** Jay explains; the mover decides money in UI; the system does admin mostly invisibly. Voice is for access on moving day, never for financial commitment. A named customer support person stays on money, complaints, vulnerability, and failed automation.

---

## How to spend 20 minutes

| Time | Do this |
|---|---|
| 2 min | Skim the case study brief map + thesis |
| 8 min | Demo: Referral → Discovery → Basket → Confirm → Pre-move → Day 0 → Tasks |
| 5 min | Demo toolbar: **For design · eng · sales · CS**, then **Features · evidence** |
| 5 min | Case study §4.1 Impact (OKRs, counters, kill criteria) + §7 Later (what I parked on purpose) |

Local: open [`prototype/index.html`](prototype/index.html) (no build). Vercel serves the same build from root `index.html`.

---

## Product contracts (non-negotiable)

These are the rules I would hand an engineer before polish:

1. **Watching** — referred, move not yet real → no outbound to councils or suppliers.  
2. **Confirmed** — only with a stored receipt. Otherwise **`sent · no receipt`** (neither success nor failure).  
3. **Date cascade** — deadlines redraw; **`lost = 0`** (nothing silently drops).  
4. **Money in UI** — never by voice alone; panel fee said once at choice.  
5. **Human path real** — named support on high stakes; pause and opt-out actually stop outreach.

North star I would measure: **Critical Path Completion** (time-sensitive setup finished before it becomes expensive or impossible), plus a **false confidence rate** (mover believes done vs honest state). Kill if we confirm without a receipt, or act on the wrong property.

---

## What this repo is

A discovery artefact for co-building: case study + clickable prototype + the depth behind them. It is **not** a production system and **not** brand-final UI. Older one-pagers / six-pagers / walkthrough decks were removed so this stays one spine.

| If you care about… | Open |
|---|---|
| Narrative for interview / Notion | [`docs/CASE-STUDY.md`](docs/CASE-STUDY.md) |
| Primary survey (n=12, directional) + sheet links | Case study §2 · [`01d-primary-research-survey.md`](01d-primary-research-survey.md) |
| Desk research framing | [`01-research-and-problem-framing.md`](01-research-and-problem-framing.md) |
| Trustpilot coding (secondary) | [`01c-negative-review-analysis.md`](01c-negative-review-analysis.md) |
| Competitive landscape | [`02-competitive-analysis.md`](02-competitive-analysis.md) |
| Full PRD / tradeoffs / risks | [`03-product-strategy-prd.md`](03-product-strategy-prd.md) |
| Eng detail + component inventory | [`04-engineering-spec.md`](04-engineering-spec.md) · [`COMPONENTS.md`](COMPONENTS.md) · [`HANDOFF.md`](HANDOFF.md) |
| Events, funnels, dashboard | [`FLOWS-EVENTS-ANALYTICS.md`](FLOWS-EVENTS-ANALYTICS.md) · [`analytics/dashboard.html`](analytics/dashboard.html) |
| Rollout + testing | [`06-rollout-plan.md`](06-rollout-plan.md) · [`08-testing-plan.md`](08-testing-plan.md) |
| Journey + Market note | [`USER-JOURNEY.md`](USER-JOURNEY.md) · [`09-local-services-note.md`](09-local-services-note.md) |
| Design language / FAQ | [`DESIGN-LANGUAGE.md`](DESIGN-LANGUAGE.md) · [`FAQ.md`](FAQ.md) |
| Working notes by theme | [`docs/wiki/working/`](docs/wiki/working/) |
| What I would send vs hold | [`docs/wiki/00-INDEX.md`](docs/wiki/00-INDEX.md) |

Built with AI in the loop (Claude, Gemini, Cursor / Grok) and a first pass I protected as mine. Prototype for critique.
