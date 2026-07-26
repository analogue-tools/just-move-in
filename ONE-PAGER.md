# Jay: the home setup call, rebuilt as a system
**Product discovery exercise · Jeanne Piffaut · July 2026**

---

### The problem

Moving means telling 25 to 40 organisations you have moved. None of them talk to each other. Two councils will not tell each other. Your solicitor confirming completion tells nobody anything.

It is the most stressful life event for 57% of UK buyers, the date moves constantly, and 37% of agreed sales never complete at all.

Just Move In solves this through people, and it works. **35 of 39 five star reviews name a specific Move Specialist.** People rave about customer support human agent, not a funnel.

### What changed the direction

I read the other end too. 60 reviews at three stars and below.

**At least 10 of them praise the person while giving one to three stars.** The bad reviews are almost never about the call. They are about what happens after it.

**18 of 60 say the same thing: I was told it was handled, it was not.**

**How confident am I in that claim?**

| Layer | Confidence | Why |
|---|---|---|
| Theme in the coded Trustpilot sample | High | 18 of 60 coded as silent non-execution (council, water, energy, broadband). Live Trustpilot still shows the pattern (e.g. billed a week later after being told suppliers were notified). |
| Structural cause | High | Just Move In's own replies state notifications go out about seven days after the move date, and councils and water can take up to six weeks. That is up to seven weeks with no mover-visible status. |
| Prevalence across all customers | Medium (theme) / Low (rate) | 60 complaints against roughly 3,700 reviews is theme discovery, not prevalence. Do not quote 18/60 as a company-wide rate. The four-star band is still missing. |
| Reddit corroboration of Just Move In specifically | Low | Sparse brand mentions. Reddit does corroborate the general UK moving admin failure pattern: council registration friction, broadband install delays, forgotten notifications. |

So the call is the part that already works. Automating only the conversation would scale the wrong layer.

Nobody wants to do admin. That is the product. The first thing to fix is that nobody can see whether the admin actually happened.

### The product

Jay is a move operator. The plan is the product.

- **Triggered by events, not dates.** It starts at exchange. When the date moves, one tap redraws the plan and you re-enter nothing.
- **Every task shows its real state.** Queued with a send date. Sent. Chased. Then confirmed, or honestly marked as unconfirmable when a council sends no receipt. A green tick we cannot back up is worse than no tick.
- **One pick per category, with alternatives one swipe away.** Ofgem's trials: a single offer converts at 14 to 29.5%. Three or more converts at 2.4 to 13.4%. A comparison table of equals is a conversion penalty. Horizontal explore keeps control without dumping choice overload.
- **How we get paid, said once and plainly.** Suppliers pay Just Move In a panel fee. It does not change the customer's price. Same rule across the panel. Quiet blueprint copy beats a profit figure on every card.
- **Voice and UI together.** Great UX is modular. UI leads for discovery, money and confirmation. Voice leads on moving day for keys and meter readings, when there is often no broadband and one free hand. Buttons stay available either way.
- **Home is the board.** Ongoing on the left, upcoming on the right, Must-Do heavier than Could-Do. One interface to check, and a widget surface for what needs attention.
- **A named human on every hard screen.** Ask Jay for FAQ and soft questions. Connect to customer support human agent when it matters.

The flow: referral, exchange, confirm pre-filled details, one discovery pass, one basket, one confirmation, then six weeks you can watch.

### Why we win

Four things are missing from everyone in this market, including the US leader with $215M behind it. Nobody manages lead times. Nobody survives a date change. Nobody is there on moving day. **And nobody can tell you whether a notification landed.**

The moat is the letting agent trigger and the integration rails. The model is replaceable next quarter. The partner feed is not.

### Ship first

**Receipts. No AI in it.** The move record, the task lifecycle, a status page.

It fixes the biggest complaint theme straight away, builds the rails the agent needs later, and if the agent slips two quarters the business is still better off.

Ship receipts before you ship AI.

### Knowing if it worked

North star: the share of moves where every lead-time-critical task gets done before it is too late to matter.

Watched next to tasks completed per move (six to eight today), and the share of tasks that reach a real confirmed receipt.

Guarded by complaint rate, and by the share of confirmed states that later turn out to be false.

---

*Prototype (`prototype/index.html`), engineering handoff, competitive analysis, rollout plan and mover survey report available.*

### Survey implications

Primary survey, July 2026, **n = 12** (own network; directional only). Full write-up: `01d-primary-research-survey.md`.

- **Keep:** receipts-first, summary-to-approve, 1-tap as the default mechanic, persistent human escape. Mean trust leans yes-with-summary (5/9); 1-tap won Q6 (5/9, voice 0).
- **Adjust messaging, not the core bet:** felt pain ranks address updates first, then council tax and finding suppliers. Broadband was never named as the biggest headache. Soften any "dozens of forms" pitch; only 1/9 reported 9-15+ calls or forms.
- **Keep broadband elevated on the critical path anyway:** lead time (14 to 21 days) still makes it late-sensitive even when it is not the loudest complaint. Felt pain and cost-of-delay are different sorts.
- **Could-do:** week-one demand splits across bin/council guides, local community, and housewarming discounts. Affiliate offers are welcome enough to stay in the tier.
- **Voice:** Q6 preference was UI, not voice. Day 0 voice stays justified by access (one hand, weak signal), with buttons always present.
