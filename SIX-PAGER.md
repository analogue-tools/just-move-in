# Jay: the home setup call, rebuilt as a system
**Product discovery exercise · Jeanne Piffaut · July 2026**

Prototype: `prototype/index.html`. Flows, events, and analytics: `FLOWS-EVENTS-ANALYTICS.md`.

---

# 1 · What's actually broken

## The move itself

Moving means telling 25 to 40 organisations you have moved. None of them talk to each other. Two councils keep separate records. Your solicitor confirming completion tells nobody anything.

| Finding | Source |
|---|---|
| Most stressful life event for 57% of UK buyers. 41% anxiety, 31% sleep loss, 25% arguing with their partner | Legal & General survey of 1,000+ buyers |
| **37% of agreed sales did not complete in 2025.** Offer to exchange averages 104 days, up from 76 in 2019. Exchange to completion runs 1 to 3 weeks | Connells Group conveyancing data |
| Broadband takes 14 to 21 days to install and usually cannot be ordered before occupancy is confirmed. Over a third of movers hit delays | TechRadar, Citizens Advice |
| Council tax runs daily from move-in day, backdated, £70 penalty in some boroughs. Energy defaults to a deemed tariff up to 30% above the same supplier's best offer | Local authority guidance, The Energy Shop |

## What your reviews say

Two samples. 39 five star reviews from Trustpilot's own positive theme sets, and 60 reviews at three stars and below spanning May 2024 to July 2026.

**35 of 39 five star reviews name a specific Move Specialist.** Trustpilot's summary across 835 reviews leads with Staff before Service. People praise customer support human agent, a person, more than a funnel.

Then I read the other end.

| Theme | Count | What it looks like |
|---|---|---|
| **Told it was handled, it was not** | **18 of 60** | Council tax never registered. Water left open at the old address. Broadband orders never placed. Found out via a bill or a debt letter. Theme confidence high in-sample; prevalence medium; Reddit brand corroboration low (see one-pager) |
| Consent and unwanted contact | 16 of 60 | Details passed by agents, OpenRent, AnyVan, Settio, Acorn, Goodlord. Calls in work hours, on Saturdays, to people moving *out*. Opt-outs ignored |
| Commercial opacity | 13 of 60 | Consolidation packages at double or triple going direct. One mover told a provider was the only one available in their area, then found several |
| **Action on the wrong property or person** | **9 of 60** | An energy account opened at an address a mover had left, triggering a debt collection threat. A landlord's accounts closed and reopened in tenants' names |
| Near miss | 1 | A mover switched supplier before anyone checked the meter was prepayment, then spent a weekend unsure whether they had one supplier, two or none, while dependent on mains-powered medical equipment |

### Confidence on the 18 of 60 theme

| Layer | Confidence | Why |
|---|---|---|
| Theme in the coded Trustpilot sample | **High** | 18 of 60 coded as silent non-execution (council, water, energy, broadband). Live Trustpilot still shows the pattern (suppliers uninformed, billed a week later after being told it was handled). |
| Structural cause | **High** | Just Move In's own replies state notifications go out about seven days after the move date, and councils and water can take up to six weeks. That creates up to seven weeks with no mover-visible status. |
| Prevalence across all customers | **Medium / low for rate claims** | 60 complaints against roughly 3,700 reviews is theme discovery, not a prevalence rate. The four-star band is still missing. |
| Reddit corroboration of Just Move In specifically | **Low** | Sparse brand mentions. Reddit does corroborate the general UK moving admin failure pattern: council registration friction, broadband install delays, forgotten notifications. |

## The bit that changed my direction

**At least 10 of those 60 praise the person while giving one to three stars.** The difficult reviews almost always land on what happens after the call.

And the cause is in Just Move In's own replies. Notifications go out **seven days after the move date**. Councils and water take **up to six weeks** to process. That is seven weeks where the mover can see nothing, and usually the first thing they hear is a bill from a supplier nobody told.

**The call already works. Automating only the conversation would scale the wrong layer.**

Nobody wants to do admin. That is the product. The first thing to fix is that nobody can see whether the admin actually happened.

---

# 2 · Where the gap is

| Who | What they own | Where they stop |
|---|---|---|
| **Homebox** | Your exact model. Agent referral, auto-contact on move in, free setup consultation, monetised on energy switching | Bundling. Solves budgeting anxiety; leaves admin anxiety and puts them inside the billing relationship |
| **The Bunch** | Bills bundling. Bought Monadd in Jan 2026 | Public complaints on estimated data and apportioned usage. Own the invoice, own every metering error |
| **Updater (US)** | The mature version. $215M raised, invite-only via brokerages, around 5% of US moves | **A passive hub.** You visit it. Nothing reaches out on moving day, nothing absorbs a date change |
| **SlothMove** | Notifications at scale under a Letter of Authority. 75,000 users, £30 to £35 | **Cannot confirm delivery.** Reviewers report updates that silently did not land |
| **Comparison sites** | Price discovery, total familiarity | Single vertical, date blind, optimised for choice, which suppresses action |
| **Nous.co** | The AI analogue. Inbox connection, spots estimated bills, £126 to £141 average saving | **Move blind.** Optimises the settled household |
| **ChatGPT agent** | Can attempt anything | 38.1% on OSWorld. Operator withdrawn partly over checkout and session reliability. Capped around 40 tasks a month |
| **Alexa+, Gemini, Siri** | Normalised talking to a machine | Curated partner commerce. No UK council, water or Openreach integration, and no route to one |

## Four things nobody has

1. Nobody manages lead times and dependencies.
2. Nobody survives a move date change.
3. Nobody is there on moving day.
4. **Nobody can tell a mover whether a notification landed.**

The moat is the letting agent trigger and the integration rails. The model is replaceable next quarter. The partner feed is not.

## Boundaries I set on purpose

| Choice | Why |
|---|---|
| Orchestrate setup; stay out of the invoice | Bundling owns metering errors and the trust hit that follows |
| One recommendation with alternatives collapsed | Ofgem trials: a single offer converts at 14 to 29.5%; three or more at 2.4 to 13.4%. A comparison table of equals is a conversion penalty |
| Plan and receipts as the front door; FAQ and Ask Jay as support | Every competitor is building a general chatbot first |
| Voice leads on moving day; UI stays available everywhere | Access decides this. Banking and telco win with scoped voice intents; a move looks more like healthcare and travel on emotional edge cases |
| Keep named humans on every hard screen | 35 of 39 reviews name a person. That is the asset |
| Partner / agent channel first | Updater's direct-to-consumer years failed until the broker channel |

---

# 3 · The product

Jay is a move operator. The plan is the product.

## Understand, Decide, Do

| Bucket | Who does it | Where it lives |
|---|---|---|
| **Understand** what a tariff is, what happens next, why this pick | Jay, in conversation | Voice and chat. Infinite patience at no social cost is where AI genuinely beats a human |
| **Decide** which tariff, which package, what cover | The mover, once, in a basket | UI. Money has to be seen and disclosed to be auditable |
| **Do** notify councils, place orders, chase installs, capture readings | The system | **Invisible.** The best interface for admin is no interface |

Most of this product has no interface. Of 38 steps in a move, 12 go from manual to invisible and only 7 need a screen. That is the value, and it demos quietly, so it is worth saying out loud.

## Product corrections worth stating once

- **One pick per category, explained via Ofgem.** Alternatives sit one swipe away in a horizontal carousel. Control stays; choice overload goes.
- **Panel-fee transparency.** Suppliers pay Just Move In a panel fee. It does not change the customer's price. Same rule across the panel. Quiet blueprint copy once beats a profit figure on every card.
- **Voice and UI together.** Great UX is modular. UI leads for discovery, money and confirmation. Voice leads on moving day for keys and meter readings, when there is often no broadband and one free hand. Buttons stay available either way.
- **Home is the board.** Ongoing on the left, upcoming on the right, Must-Do heavier than Could-Do. One system of record, with a widget surface for what needs attention.
- **Receipts first.** Phase 0 ships the move record, task lifecycle and status page with no AI in it.

## The flow, event by event

| # | Event | UX: what the mover sees | Tech: what happens | Commercial | Guardrail |
|---|---|---|---|---|---|
| 0 | **Referral lands** | Nothing yet | Move record created, `watching`. Consent source, scope, timestamp stored | None | **No outbound tasks fire.** Hard contact cap |
| 1 | **Exchange confirmed** | One message: what we know, what's next, one thing to do | Webhook from partner or solicitor. Plan generates from the task catalogue | The activation moment. Everything monetisable is downstream | Nothing before this. No effort on the 37% that collapse |
| 2 | **Confirm details** | One screen, pre-filled. Correct, don't type. Under 60 seconds | Address resolved to a property ID, which fixes council, water region, broadband availability | Pre-fill is the conversion edge no comparison site has | Anything unresolved is asked, never guessed |
| 3 | **Liability check** | One question only if it can't be resolved | Resolve property, liable person, start date, agreement type | Prevents remediation cost | **Nothing fires until this resolves** |
| 4 | **Discovery** | 6 to 9 questions, told what each is for | Scored by how much each answer moves a recommendation | One brief serves every category | Novice flag opens with orientation, then price. Under 14 days flips ranking to speed |
| 5 | **Basket** | One pick per category. Reason, saving, panel-fee note, how many chose it | Returns rank 1 with a rationale string, stored for audit | The commercial moment | Panel scope stated. Social proof hidden below 50 comparable moves |
| 6 | **One confirmation** | Total monthly, total saving, one button | Orders queued. Letter of Authority signed | Four decisions become one | No payment or credentials by voice, ever |
| 7 | **Auto-run** | Each task shows queued, with its send date | Council x2, water, TV licence, redirect, under the Letter of Authority | Free to run, and why movers stay | Show the delay. A queued task with a date is honest. A task shown as done without a receipt is not |
| 8 | **Panel orders** | In progress, with install or switch date | Energy, broadband, insurance on partner APIs | Where the panel fee is earned | **Meter type, prepayment status and vulnerability checked before any energy switch** |
| 9 | **The wait, day 1 to 42** | Sent 2 Aug. Chasing 16 Aug. Confirmed, or sent with no receipt | Status polled where an API exists, chase timers where it doesn't | Where trust is won or lost | **A green tick requires a stored receipt** |
| 10 | **Date changes** | New date, then a diff: 14 rescheduled, 1 needs redoing, 0 lost | Cascade recomputes every offset, amends where destinations allow, flags what's impossible | Protects booked revenue that would otherwise fail silently | Non-amendable destinations fail loudly and name the fix |
| 11 | **Keys** | "Two things and I'll leave you to it. Have you got the keys?" | State moves to `moved`. Council tax start, insurance, occupancy all fire | Correct start dates prevent billing disputes | Outbound voice, pre-agreed slot, UI still available, never takes payment |
| 12 | **Meter readings** | Camera on the meter. Read back aloud before anything's sent | OCR, timestamp, photo stored as evidence, sent to both suppliers | Makes the day 14 bill check possible | Never submitted on OCR alone |
| 13 | **First fortnight** | "Your first bill's an estimate. They billed 512 kWh, your reading makes it 388" | Bill compared to the stored day 0 reading | **The catch that earns inbox access** | Ask for inbox access only after finding them something |
| 14 | **Settling** | Local layer, the home filling in, feedback on one decision | Places and NHS data. Progress rendered over completed task IDs | Marketplace and affiliate, same panel-fee disclosure pattern | No deadlines, no streaks, the house never decays |
| 15 | **Renewal, month 11** | "Your fix ends in a month. Here's what I'd do" | Contract end dates seeded at signup | Year two revenue at near zero acquisition cost | Re-consented, asked again |

## Where voice leads

Access decides this, taste does not.

| Phase | What they physically have | Lead |
|---|---|---|
| t-30 | Everything | **Neither.** Ambient only |
| t-14 | Desk, 20 to 50 minutes | **UI leads, voice explains** |
| Moving day | No broadband, one free hand | **Voice leads, UI always available** |
| t+14 | Mobile, low attention | **UI leads, ambient** |

Voice for explaining and capturing. UI for deciding and confirming. Financial commitment stays on screen, because panel-fee disclosure has to be seen to be auditable. Voice currently arrives in reviews as an unsolicited sales call, so it has to be outbound on an agreed slot or it inherits that reputation.

---

# 4 · Every feature, and where it came from

| Feature | Why it exists |
|---|---|
| **Event triggers, not calendar checklists** | 37% fall through, 104 day exchange. A minus-30 checklist is fiction |
| **Activate on exchange** | Same, plus standard advice to wait until contracts exchange before notifying anyone |
| **Task lifecycle with a real `sent · no receipt` state** | The 18 of 60 who were told it was done when it was not, and the seven week window your own replies describe |
| **Panel-fee blueprint once, plus panel scope** | 75% trust an agent less when recommendations are paid for, plus the 13 of 60 on commercial opacity. Quiet \"suppliers pay us; same across the panel\" keeps CAP intent obvious without a profit figure on every card |
| **Home board as system of record** | Ongoing left, upcoming right, Must-Do heavier. One interface for past, current and future |
| **Treatwell-style marketplace** | Free-text search to map + list, chips, save; soft-list recommendations from could-do |
| **FAQ + Ask Jay + human** | Navigable answers first; Jay second; named specialist for hard cases. Human invitation lifts uptake even unused |
| **Queued shown with its send date, visible** | Buell and Norton, Management Science: across five experiments people preferred services that visibly signalled effort over instant results, **even when the results were identical**. Show the wait |
| **Liability resolved before anything fires** | The 9 of 60 where action hit the wrong property or person, one of which triggered a debt collection threat |
| **Consent stored, one tap opt-out** | The 16 of 60 about unwanted contact, and your own reply that as a sales company you contact customers a few times |
| **Meter and vulnerability check before any switch** | The prepayment meter and medical equipment case |
| **One recommendation, alternatives in a carousel** | Ofgem trials: a single offer converted 14 to 29.5%, three or more at 2.4 to 13.4%. Also validates the Top Pick already in your Figma |
| **Panel-fee note once, same rule across the panel** | 75% trust an agent less when recommendations are paid for, plus the 13 of 60 on commercial opacity. CAP Code requires commercial intent to be obvious; ASA has ruled "affiliate" alone is insufficient. Per-card £ earnings are secondary UX |
| **Delegate tasks, keep decisions with the mover** | Accenture, 25,590 respondents: 74% delegate routine instructed tasks, 32% allow a decision within limits, only 9% accept full autonomy |
| **Machine agent, named human owner** | 35 of 39 name a person. Plus consumers identify AI by responses arriving too fast or sounding too formal, so a machine caught pretending loses everything |
| **Human reachable on every screen, even if rarely used** | Kinch and Buell, Management Science: an invitation to reach a human raised uptake of approved loans **24%** in a credit union field experiment, and worked even though almost nobody used it |
| **FAQ sheet + Ask Jay for soft questions** | Movers need answers without opening a ticket; hard cases still route to customer support human agent |
| **Voice leads on moving day; UI parallel everywhere** | No broadband, one free hand. Production agents resolve 38 to 50% against vendor claims of 67 to 86%, and 70 to 85% only on well-scoped deeply integrated cases |
| **Home board as system of record (ongoing / upcoming)** | One glanceable surface. Must-Do heavier than Could-Do. Widget-ready for attention items |
| **Two lists, must do and could do** | The mover cannot tell which of 30 items are load bearing. Tone maps to the tier, so nobody picks an interface before they can start |
| **Marketplace search + map, organised by need** | Movers often do not know what to search for, and general local search loses to Google Maps. Treatwell-style discovery around how services get chosen during a move |
| **Trust signals at listing level** | Highest-impact marketplace signals: verified badges, aggregated ratings on the listing, visible guarantees. Decide without opening a profile |
| **Local layer inside the first three months** | Habit discontinuity: a field experiment with 800 UK adults found behaviour change worked better on people who'd recently relocated, and the window lasts about three months |
| **Date provenance bar** | Show where the move date came from (solicitor feed, agent, mover) and confidence (`estimated` vs `confirmed`) |
| **Type floor at 14px, 16px to act** | GOV.UK removed 14 and below from its scale citing British Dyslexia Association guidance. Disabled movers appear unprompted in your reviews as the segment who need this most |
| **Plan for 50% resolution, keep the humans** | Klarna rehired after AI-only support lowered quality. Your brand equity is 35 named specialists |
| **Receipts before AI (Phase 0)** | Fixes the biggest complaint theme with no model risk; builds rails the agent needs later |

---

# 5 · Design language and UI goals

Full rationale lives in `DESIGN-LANGUAGE.md`. The short version:

| Goal | How it shows up |
|---|---|
| **Trust** | Named human, live Trustpilot figures, honest state chips, panel-fee note once |
| **Transparency** | Seven-row task card (what, who, when, where, why, status, cost); date provenance; receipts |
| **Stickiness** | Home board as the place you return to; settling progress that fills in and never decays |
| **Modularity** | Voice and UI both available; voice leads only when access demands it |
| **Accessibility, one-hand** | 44px targets, 14px floor, 16px to act, works at 360px, sticky Ask bar |
| **Human escape** | Connect to customer support human agent on every hard screen; FAQ and Ask Jay for soft questions |
| **Real state** | `fog` token for `sent · no receipt`; green only when a receipt is stored |

Type: **Instrument Sans** for human-written copy; **mono** for machine-derived values (states, prices, dates, readings). Colour: **fog** is the product thesis in a swatch. Home is board-first. Marketplace borrows Treatwell cues (search + map + need clusters) without becoming a second product.

---

# 6 · Impact and rollout

## Metrics

**North star: Critical Path Completion.** The share of moves where every lead-time-critical task gets done before it is too late to matter. A customer outcome, and it resists being gamed by making the app stickier.

| Watch | Guard against |
|---|---|
| Tasks completed per move: 6 to 8 today, 15 in v1 | Complaint rate, and FCA reportable complaints |
| **Share of tasks reaching a confirmed receipt** | **Share of confirmed states later proven false** |
| Date changes absorbed with zero re-entry | Cancellation within 14 days of a switch |
| Time to closure: 50 minutes today, under 10 | Re-presenting a declined recommendation, which must be zero |
| Renewal attach at 12 months | Time to a human for vulnerability-flagged movers |
| NPS at day +3 and +14 | Contact attempts before an opt-out is honoured |

**One metric nobody else in this market can compute: false confidence rate.** Because we show real state, we can compare what a mover believes against what is true. If a high share report confidence a task is done when its state is `sent, no receipt`, the honest state design has failed at its one job.

## Rollout

| Phase | What ships | Cohort | Why |
|---|---|---|---|
| **0 · Receipts** | Move record, task lifecycle, status page. **No AI** | Everyone, existing human service | Fixes the biggest complaint theme now. Value lands even if the agent slips |
| **1 · Shadow** | Agent runs in parallel, never shown to a customer | Internal | Zero customer risk. Buys the accuracy data |
| **2 · The unreached** | Full agent flow | Movers who never answer the phone | **Pure upside.** Worth nothing today, so nothing can be cannibalised |
| **3 · Design partner** | Agent led, human escape | One named letting agent, opt in | Contained blast radius |
| **4 · Day zero voice** | Keys, meter capture | Phase 3 cohort | Highest stakes, so it goes last |
| **5 · Scale** | Everything | Partner book, staged | Only once unit economics are proven |

**Phase 0 ships no AI, on purpose.** Putting an agent on top of a process with no visibility for seven weeks scales the vacuum. Phase 0 addresses the 18 of 60 theme with no model, builds the exact rails the agent needs, and means a two quarter delay still leaves the business better off.

**Stop condition.** If the agent takes a wrong-property action that reaches a supplier, the programme pauses. That failure lands on credit files, and the current service already produces it in 9 of 60 reviews.

**The people part.** Move Specialists are told in week 0, before any partner or customer, in writing: this is a role change in year one, with named ownership of a book of moves. Roughly half of movers will still touch a person. **Specialist attrition is a tracked programme metric with a threshold.** Get this wrong and the reviews stop naming people, which removes the asset before the replacement exists.

---

# 7 · Handoff, testing, and how I worked

## Handoff

**A single-file prototype plus a written behavioural spec. No Figma.**

Figma serves two of three audiences well. A customer cannot really use one on a phone, and an engineer gets pixels without behaviour. The hard parts here are behavioural. Figma can draw `confirmed` and `sent, no receipt`. It cannot express the rule that a task only reaches `confirmed` if a receipt is stored, which is a database constraint.

Your Figma is shadcn/ui on Tailwind. I rebuilt on the same system. Token names map one to one. Fonts in the living prototype lean Instrument Sans + mono (see `DESIGN-LANGUAGE.md`); brand licensing may swap the display face later without losing the human/machine split.

**Four deliberate deviations, all documented in the token file with reasoning:** the 14px floor, the added `pending` / fog colour, red removed from the mover-facing flow, and tabular lining numerals throughout.

**Where it needs another designer:** illustration and the could-do tier once it grows past eight tiles, the voice persona and script, and a full WCAG 2.2 AA audit. The last two I would treat as blocking, because failure there is invisible to us and expensive to the people least able to absorb it. See `05-handoff-judgment.md` and `WCAG-AUDIT.md`.

## Testing

Five risks, in order of how much they would hurt:

1. **`sent · no receipt` reads as failure.** If the honest state reads as "they messed up", the whole strategy backfires.
2. Panel-fee disclosure kills the recommendation.
3. One pick reads as being sold to.
4. Nobody finds the date change control.
5. Movers do not realise Jay is a machine.

**If there were budget for one test:** 30 people, about £350, three days. Show the plan for twenty seconds, hide it, ask which tasks have actually been done and how confident they are. If movers reliably tell `confirmed` from `sent, no receipt`, the strategy works and the rest is polish. If they do not, the most important idea here does not survive a real person, and I would rather know in week one.

Recruit through your own recent customers first, including people who complained, then Prolific for the unmoderated work. £30 to £40 for a 30 minute session at UK rates.

## Primary research

I fielded a 15 question survey to recent movers in July 2026 (**n = 12**, own network). Full results: `01d-primary-research-survey.md`.

The two questions carrying most weight landed like this. **Biggest headache (Q3):** address updates 3/9, council tax 2/9, finding energy/water suppliers 2/9; broadband was never named, so felt-pain ordering in the must-do list needs to follow that ranking even if broadband stays lead-time critical. **Preferred mechanic (Q6):** 1-tap approve 5/9, manual 2/9, blank 2/9, voice 0, which supports UI for commercial decisions. Trust (Q5) was 5/9 yes-with-summary, 2/9 only-with-human, 2/9 manual. Call volume (Q4) sat mostly in 1-3 and 4-8 (4 each); only one respondent reported 9-15+.

Caveats stay attached to every number: trust questions are positively primed, and the sample skews young and digitally comfortable, which cuts in favour of the agent. This does not overturn receipts-first or the modality split; it does force softer volume claims and a headache ranking that leads with address updates and supplier discovery rather than broadband.

## How I used AI

Heavily, and I would rather show you where than summarise it.

Claude did the search, the synthesis and the build. Where it earned its place was coding roughly 100 reviews for mechanism rather than sentiment, holding an evidence chain together while the direction changed twice, and producing a precise front end quickly.

**The context curation was the actual work.** It got to a reasonable answer from the brief and public sources. It got to a good one when I fed it the Trustpilot exports, then the negative reviews, then your Figma file. Each of those inverted something.

**And it was confidently wrong in ways I had to catch.** It used Octopus Energy as the hero recommendation when your public review record indicates there is no current deal. It set type at 10 and 11px, below the accessibility floor. It framed the human call as a point event when your own reviews show the good experiences are multi-touch.

**The moment worth walking through in person:** the negative reviews reversed the central conclusion. Working only from the positive sample, the read was that follow-up is inconsistent. The negative sample shows something structural: the call works and the system around it does not. That reversal is why this direction is about receipts rather than conversation, and it is a better demonstration of working with these tools than any prompt would be.
