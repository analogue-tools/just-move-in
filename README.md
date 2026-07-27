# Jay · Just Move In

**Jeanne Piffaut · Product discovery case · July 2026**

> The home-setup call already works. Automating only the conversation would scale the wrong layer.  
> **Jay** is the digital operator that does the admin, shows honest proof it happened, and survives the move date changing.

**Deep dive (this repo):** [`docs/wiki/00-INDEX.md`](docs/wiki/00-INDEX.md)  
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
| 2 min | Open the [wiki index](docs/wiki/00-INDEX.md) and skim the theme list |
| 8 min | Demo: Referral → Discovery → Basket → Confirm → Pre-move → Day 0 → Tasks |
| 5 min | Demo toolbar: **By team**, then **Why this** |
| Rest | Wiki themes you care about (Product, Eng, Design, Research…); instruments linked from each note |

Local: open [`prototype/index.html`](prototype/index.html) in a browser (no build, no server; single file). Root [`index.html`](index.html) is the synced copy Vercel serves at `/`.

---

## Product contracts (non-negotiable)

These are the rules I would hand an engineer before polish:

1. **Watching:** referred, move not yet real → no outbound to councils or suppliers.  
2. **Confirmed:** only with a stored receipt. Otherwise **`sent · no receipt`** (neither success nor failure).  
3. **Date cascade:** deadlines redraw; **`lost = 0`** (nothing silently drops).  
4. **Money in UI:** never by voice alone; panel fee said once at choice.  
5. **Human path real:** named support on high stakes; pause and opt-out actually stop outreach.

North star I would measure: **Critical Path Completion** (time-sensitive setup finished before it becomes expensive or impossible), plus a **false confidence rate** (mover believes done vs honest state). Kill if we confirm without a receipt, or act on the wrong property.

---

## How this repo is organised

| Layer | Role | Start |
|---|---|---|
| **Wiki** | Thematic spine for GitHub readers | [`docs/wiki/00-INDEX.md`](docs/wiki/00-INDEX.md) |
| **Case study** | One-page Notion / interview skim | [`docs/CASE-STUDY.md`](docs/CASE-STUDY.md) |
| **Demo** | Clickable co-building whiteboard | [Live](https://just-move-in-liard.vercel.app) · [`prototype/index.html`](prototype/index.html) |
| **Instruments** | Full tables, PRD, eng, survey coding | Linked from the wiki index (root `01`… files) |

This is a discovery artefact for co-building. It is **not** a production system and **not** brand-final UI.

Built with AI in the loop (Claude, Gemini, Cursor / Grok) and a first pass I protected as mine. The judgment was mine: the negative reviews flipped my own conclusion from inconsistent follow-up to a structural gap, which became the whole product. Prototype for critique.
