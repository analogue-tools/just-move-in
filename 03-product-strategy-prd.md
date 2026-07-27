# Deliverable 3: Product Strategy
### A lightweight PRD · Just Move In
**Jeanne Piffaut · July 2026**

Repo map: [`README.md`](README.md). Notion skim: [`docs/CASE-STUDY.md`](docs/CASE-STUDY.md).

---

## 0. How to read this

This is a decisions document. Evidence from the research and competitive work is written in plain language below so the file reads standalone. Where a decision is contested, I have said what I gave up and what would change my mind.

| § | Contents |
|---|---|
| 1 | **Rationale.** The bet, the problem it solves, what we are deliberately not doing |
| 2 | **Build.** Voice versus UI, the discovery to checkout flow, the key states |
| 3 | **Impact.** North star, supporting metrics, counter metrics, first experiments |
| 4 | **Tradeoffs.** What I weighed and why I landed here |
| 5 | Risks, open questions, and what I need from JMI |

---

## 1. Rationale

### 1.1 The one line

**What the best Move Specialists do intermittently and expensively, Jay does consistently and for free, across thirty items instead of six and six weeks instead of one call.**

### 1.2 The problem this solves

Deliverable 1 found that JMI's five star reviews are overwhelmingly about individuals: 35 of 39 in the 2026 sample name a specific specialist. The best of those experiences are multi touch, proactive and resilient when the move date slips. **The problem is that this excellence is a property of people, not of the system.** It varies by whoever picks up, it stops after the call for some movers and continues for others, and it cannot scale past headcount.

Deliverable 2 found four capabilities that no player in the market has: lead time and dependency management, move date resilience, presence on moving day, and commission disclosure at the point of choice. Those four are the product.

### 1.3 The bet

**Jay is not a chatbot. Jay is a move operator, and the plan is the product.**

The conversational surface is how a mover understands and confirms. It is not what they are buying. What they are buying is a plan that knows what has to happen, in what order, by when, that executes most of it without them, and that redraws itself when the date moves.

Three assets make this defensible, all from Deliverable 2:

1. **The trigger.** Partner data tells us a move is happening before the mover has told anyone. Comparison sites, Nous and every general AI agent are structurally blind to this.
2. **The rails.** API panel integrations plus a Letter of Authority mechanism gives reliable execution where a general purpose agent manages 38% on OSWorld.
3. **The permission.** Because we arrive through the agent and the service is free to the mover, we get one shot at a relationship rather than a transaction. Updater proved direct to consumer does not work in this category.

**The moat is a data trigger and a set of integration rails. It is not a model.** Any competitor can buy the same models next quarter. Nobody can buy our partner feed or rebuild the council rules table quickly.

### 1.4 The organising principle: Understand, Decide, Do

Every capability in the product falls into one of three buckets, and each bucket has a natural home.

| Bucket | What it is | Who does it | Where it lives |
|---|---|---|---|
| **Understand** | Explaining what a tariff is, what happens next, why this pick | Jay, in conversation | **Voice and chat.** Infinite patience at zero social cost is the clearest place AI beats the human (AI patience at zero social cost beats a human on explanations) |
| **Decide** | Choosing a tariff, a package, a level of cover | The mover, once, in a basket | **UI.** Money decisions need to be seen, disclosed and auditable (trust and commission-disclosure findings) |
| **Do** | Notifying councils, placing orders, chasing installs, capturing readings | The system | **Invisible.** The best interface for admin is no interface |

**Most of the product is invisible.** The interface exists for Understand and Decide only. This is the difference between what we are building and the generic assistant every competitor is heading towards.

### 1.5 What we are deliberately not doing

The hard part of this brief is restraint. Nine explicit non goals.

| # | Not doing | Why | Evidence |
|---|---|---|---|
| 1 | **Bills bundling** | Puts us inside the billing relationship and makes us inherit every metering and estimation error as a trust liability. Bunch's public complaints show the cost. We orchestrate the setup and stay out of the invoice | Bundler billing-error complaints in the competitive scan |
| 2 | **A comparison table** | Three or more options convert at 2.4% to 13.4% against 14.0% to 29.5% for a single offer. This is a measurable conversion penalty, not a style preference | Ofgem one-offer conversion; comparison-site overload |
| 3 | **An "ask me anything" chatbot as the front door** | It is what every competitor is building, it differentiates nothing, and it inherits all of the trust risk with none of the rails. Chat exists inside the product. It is not the product | Competitive scan: every rival is shipping a chat front door |
| 4 | **Voice for the whole move** | Voice AI leads in banking and telco because password resets map to scoped intents. It lags in healthcare and travel because of emotional handling and edge cases. A home move looks like the lagging group | Voice AI benchmarks: lead in scoped intents, lag on emotional edge cases |
| 5 | **Removing the humans** | Klarna rehired after AI only support lowered quality. 35 of 39 reviews name an individual. Removing the humans to prove the AI works destroys the asset we are scaling | Named specialists in reviews; human escape remains load-bearing |
| 6 | **Full autonomy on money** | Only 9% of consumers accept fully autonomous purchasing. 60% of UK adults abandon an agent after one mistake | Low appetite for full autonomy; high abandon-after-one-mistake |
| 7 | **Direct to consumer acquisition** | Updater marketed to individual movers from 2011, failed, and only worked after pivoting to the brokerage channel. The referred sceptic is not a problem to fix, it is the only viable route | Updater DTC failure, then brokerage pivot |
| 8 | **Owning the physical move** | Removals, packing and storage are a different supply chain with thin margins. Refer, take a fee, do not operate | Removals are a different thin-margin supply chain |
| 9 | **The neighbourhood and community layer in v1** | This is the retention thesis and it is the thing I most want to build. It is also the thing that most easily eats a quarter while the core rails go unbuilt. Deferred to v2, deliberately and uncomfortably | Neighbourhood layer is retention, not v1 rails |

**On number 9.** I want to be explicit that this is a sequencing call rather than a judgement that the work does not matter. The first two weeks are where a transaction becomes a relationship. But a beautiful local discovery layer sitting on top of a plan that breaks when the completion date slips is a worse product than a plain plan that holds. Rails first.

---

## 2. Build

### 2.1 Where voice leads and where UI leads

Modality is decided by **access**, not by preference. This is the single most useful output of the phase matrix in Deliverable 1.

| Phase | What the mover physically has | Lead | Rationale |
|---|---|---|---|
| **t minus 30, Watching (pre-exchange)** | Full desktop and mobile, high attention | **Neither. Ambient only** | Certainty is too low to activate. Capture the profile, show the map, ask for nothing |
| **t minus 14, The Countdown** | At a desk, 20 to 50 minutes, fragmented | **UI leads, voice assists** | Four commercial decisions that need to be seen, compared and disclosed. Voice is the escape hatch for "explain that again" |
| **Moving day** | Mobile data only, weak signal, low battery, one free hand, probably no broadband | **Voice leads, UI optional** | The only rail that works. Everything on this day must be completable by voice alone |
| **t plus 14** | Mobile first, evenings, attention low but recovering | **UI leads, ambient** | Discovery and belonging are browsing behaviours, not conversational ones |

**The cross cutting rule.** Voice for explanation and capture. UI for decision and confirmation. Never take a financial commitment by voice alone, because commission disclosure and contract terms have to be rendered to be auditable, and because a voice only confirmation leaves no artifact the mover can point at later.

### 2.2 The multi product discovery to checkout flow

The current human call runs discovery and setup sequentially across six products in about fifty minutes. The design goal is the same closure in five to ten minutes, or asynchronously, without losing the mechanisms that make the call work.

**The core insight: one brief, many baskets.** A skilled specialist does not run six separate discoveries. They ask overlapping questions once and fan the answers out across products. Household size, working from home, tenancy length, pets, EV, appetite for green, and risk tolerance each feed three or four recommendations. Software should do this explicitly.

#### The flow

**Step 0 · Armed.** The exchange event arrives from the partner feed. The plan is generated from the move record. The mover receives one message: what we know, what happens next, and one thing to do.

**Step 1 · Confirm, do not enter.** One screen. Address, dates, household, pre filled from partner data. The mover corrects rather than types. *Target: under 60 seconds.*

**Step 2 · Single discovery pass.** Six to nine questions, adaptive. The question set is scored by how much each answer changes a recommendation, and stops when confidence thresholds are met across all categories. A mover whose answers point clearly gets six questions. An ambiguous case gets nine.

*Branch A, novice:* if the experience flag is set (first time renter, first time buyer, self declared), the flow opens with orientation rather than price. What these bills are, what you are choosing between, what happens if you do nothing. Deals come second (novices need orientation before price).

*Branch B, time compressed:* if days to move is under 14, the ranking flips from price to activation speed, and we say so on screen. Movers accept a worse price for certainty when time poor, but only if told (time-poor movers trade price for speed when told).

**Step 3 · The basket.** One recommendation per category. Each card carries the pick, a one line reason, the effort estimate, the saving against the default the mover would otherwise land on, the commission we earn, and a collapsed "why not the others". No comparison grid.

**Step 4 · One confirmation, not four.** The mover reviews a basket with a total monthly cost and a total saving against doing nothing, and confirms once. This is the step that converts four decisions into one and is the direct analogue of the closure the phone call delivers.

**Step 5 · Execution splits in two.**
- *Auto run:* council tax at both addresses, water, TV licence, Royal Mail redirect. Reversible, no money, executed under the Letter of Authority without further confirmation.
- *Confirmed orders:* energy, broadband, insurance. Placed on the panel APIs against the mover's explicit confirmation from step 4.

**Step 6 · Closure artifact.** A single view titled "here is everything that is happening and when". Every task, its state, its date, and what we still need from the mover. **This is the product's real deliverable**, and it is what the phone call gives people that a dashboard does not.

**Step 7 · The six weeks.** Scheduled outbound touchpoints driven by state transitions, not by a calendar. Broadband install confirmed. Engineer date approaching. Date changed, plan redrawn. Keys today, two things to do. First bill arrived, it is estimated, here is what to do.

### 2.3 Key states

#### Move states

| State | Entered when | Behaviour |
|---|---|---|
| `watching` | Partner referral, offer accepted or tenancy agreed | Profile stored. **No outbound tasks fire.** Low commitment content only |
| `armed` | Exchange, or contract signed and deposit paid | Plan generated. Discovery invited. This is activation (exchange is the activation trigger) |
| `active` | Discovery complete, basket confirmed | Tasks executing. Touchpoints scheduled |
| `moved` | Keys confirmed, or move date passed | Day 0 voice intents unlock. Post move task set activates |
| `settling` | Move date plus 1 to 14 | Settling tasks, first bill check, local layer in v2 |
| `dormant` | Move date plus 15 onwards | Renewal diary armed. Contract end dates seeded |
| `cancelled` | Sale fell through, or mover opted out | All pending tasks halted, submitted ones reversed where possible, one honest message |

#### Task states

| State | Meaning |
|---|---|
| `blocked` | A dependency is unmet. Example: broadband cannot be ordered before occupancy is confirmed |
| `ready` | Dependencies met, can proceed |
| `awaiting_confirm` | Needs the mover's one tap, because it involves money or a contract |
| `submitted` | Sent to the destination organisation |
| `confirmed` | Destination has acknowledged. Only reachable where an API or receipt exists |
| `unconfirmable` | Sent, no confirmation mechanism exists at the destination |
| `failed` | Rejected or errored, retry scheduled |
| `escalated` | Assigned to the named human owner |

**On `unconfirmable`.** This is the most important state in the model and it exists because of a competitive finding. SlothMove's weakness is not narrow scope, it is that movers cannot verify whether an update landed, with reviewers reporting silent failures (SlothMove silent-failure pattern). **A green tick that might be false is worse than an honest "sent, no confirmation available from this council".** We surface the distinction in the UI. It costs us a little polish and buys the thing the whole product depends on.

#### The cross cutting event: `move_date_changed`

Fires from a partner feed or a one tap user action. Triggers a cascade that reschedules dependent tasks, cancels and reissues provider orders where the panel permits it, flags anything now impossible, and sends one message explaining what changed. **Nothing is re entered by the mover.**

This is the moment the product most earns trust, because it is the moment the mover most expects to be let down (movers expect to be let down at confirmation).

#### Edge states that must be designed, not discovered

Fall through, chain slippage on completion day, prepayment meter with no credit, vulnerability flag set, panel gap where we have no deal in a category, and LoA unsigned so notifications are held.

### 2.4 The voice agent, scoped deliberately

Two intents at launch. Not more.

| Intent | Trigger | What it does |
|---|---|---|
| **Keys confirmation** | Mover says the keys are in hand, or answers an outbound call on move day | Sets `moved`, fires every downstream notification with the correct date, confirms the council tax start date back |
| **Meter capture** | Same call, or inbound at any time | Captures opening and closing readings by voice plus camera, timestamps them, submits to both suppliers |

**Why only two.** Independent benchmarks put realistic resolution at 30% to 50% for early deployments, with 70% to 85% reachable only for deeply integrated agents on well scoped use cases (realistic early AI resolution rates). Two intents is what "well scoped" looks like. Meter readings are also the highest leverage and most forgotten item in the entire journey.

Everything else on Day 0 routes to a human or defers to the UI.

### 2.5 Trust architecture

Four mechanisms, each traceable to a finding.

| Mechanism | Implementation | Evidence |
|---|---|---|
| **Graduated autonomy** | Permission scopes per task category, defaulted by consequence, widened by the mover as trust accrues | Graduated autonomy matches trust research |
| **Commission disclosure** | Required field on every catalogue item, rendered by the offer card component | Paid influence kills trust; panel gaps must be visible |
| **Audit log** | Plain language record of every action taken on the mover's behalf, visible to them, with undo where the downstream system allows | Auditability after AI mistakes |
| **Named human owner** | A field on the move record, exposed in the UI, receiving all escalations | Named specialists in reviews; human escape remains load-bearing |

Jay is visibly a machine. No simulated typing delays, no human tells, AI status disclosed at the start of any voice call. Escalation triggers: distress language, repeated failure, complaint intent, and the vulnerability flag.

### 2.6 Release shape

| Release | Name | Contains | Why this order |
|---|---|---|---|
| **V1** | The plan that survives | Exchange trigger, move record, event driven plan, single discovery to basket to one confirm, energy and broadband on API, council tax and water and TV licence under LoA, date change cascade, honest task states, two intent voice agent, named human owner | Proves the rails, the differentiation and the demo in one release. The two voice intents are cheap once the event engine exists |
| **V2** | The first fortnight | Settling task set, local discovery layer, bin day, inbox connection after a demonstrated catch, renewal diary | Retention. Inbox access is asked for only once we have found the mover something |
| **V3** | Coverage | Tier 3 prefilled deep links across the long tail, DVLA, HMRC, electoral roll, GP, pet microchip | Cheap, low risk, high perceived completeness. Deliberately last because it adds surface without adding differentiation |

---

## 3. Impact

### 3.1 North star

**Critical Path Completion (CPC): the percentage of moves where every lead time critical task is completed before it becomes impossible or expensive.**

Critical tasks are defined by the cost of inaction ledger in Deliverable 1: broadband ordered inside the lead time window, energy tariff selected off the deemed contract, council tax notified inside 21 days at both addresses, insurance effective on the move date, opening meter readings captured.

**Why this one.** It is a customer outcome rather than an engagement proxy. It is directly tied to money and stress the mover would otherwise lose. It cannot be gamed by making the app stickier. And it degrades honestly: if our rails fail, CPC falls, regardless of how many people opened the app.

### 3.2 Supporting metrics

| Group | Metric | Baseline | Direction |
|---|---|---|---|
| **Coverage** | Tasks completed per move | About 6 to 8 on the current call | 15 in V1, 30 by V3 |
| **Coverage** | Categories set up per move | Measure from current funnel | Up |
| **Reliability** | Task confirmation rate | Not currently measured | Up |
| **Reliability** | Share of tasks in `unconfirmable` | Unknown | **Down, by adding confirmation paths.** Reported honestly, never hidden |
| **Reliability** | Date change events absorbed without mover re entry | Zero today | Approaching 100% |
| **Resolution** | Interactions handled without human | Not applicable | **Plan for about 50% at launch**, not 85% |
| **Trust** | Opt in rate to widen autonomy scope | New | Up over the move |
| **Trust** | Churn after a single failed task | New | Watch closely, given the 60% one mistake finding |
| **Speed** | Time to closure, from armed to basket confirmed | About 50 minutes on the call | Under 10 minutes, or asynchronous |
| **Emotional** | NPS at move day plus 3, and plus 14 | Trustpilot only today | Up, and measured at two points rather than one |
| **Emotional** | Support contacts per move | Measure from current volume | Down |
| **Commercial** | Attach rate per category | Measure from current funnel | Up |
| **Commercial** | Revenue per completed move | Known | Up |
| **Commercial** | 12 month renewal attach | Likely low today | Up, seeded by the renewal diary in V2 |
| **Partner** | Invite to activation rate | Measure from current funnel | Up |
| **Partner** | Partner retention | Known | Up |

### 3.3 Counter metrics

Metrics that must not move, so we cannot buy the north star with something worse.

| Counter metric | Why it is here |
|---|---|
| Complaint rate, and FCA reportable complaints | Speed and automation should not be bought with mis selling |
| Cancellation within 14 days of a switch | Catches recommendations that convert but do not suit |
| Re presentation of a declined recommendation | Must stay at zero. "No hard sell" becomes a system property (no hard sell; disclosure at choice) |
| Time to human for vulnerability flagged movers | Accessibility is a value proposition here, not a compliance item (vulnerability / accessibility segment) |
| Share of `confirmed` states that later prove false | Guards directly against the SlothMove failure mode |

### 3.4 The first four experiments

| # | Experiment | Hypothesis | Why it matters |
|---|---|---|---|
| **E1** | One recommendation versus three, per category | One pick converts materially better | The Ofgem data is energy specific and from letters. It must be retested on our population and our surface before we bet the UI on it |
| **E2** | Activate on exchange versus on offer accepted | Exchange raises completion and reduces churn, because no work is wasted on the 37% that fall through | This is the largest architectural bet in the PRD and it is currently inferred, not observed |
| **E3** | Commission disclosure on versus off | Disclosure costs some short term conversion and buys retention and complaint reduction | **I expect to lose a little conversion here and I want to know how much.** Asserting that transparency is free would be dishonest |
| **E4** | Day 0 proactive voice touch versus none | Improves billing accuracy and raises NPS | The most distinctive feature in the product and the least proven |

---

## 4. Tradeoffs

The nine decisions where a reasonable person could have gone the other way.

| # | Tradeoff | Where I landed | What I gave up | What would change my mind |
|---|---|---|---|---|
| 1 | **Voice first versus UI first** | Modality by phase, decided by access. Voice leads only on moving day | A single clean story. "Voice AI concierge" is a better pitch than "the right rail per phase" | If Day 0 voice resolution lands above 80% on the two scoped intents, I would test extending voice into t minus 14 discovery |
| 2 | **Autonomy versus control** | Graduated by consequence. Reversible and free runs alone, money needs one tap | The fully hands off product that would demo brilliantly | If the widen scope opt in rate runs high across a cohort, push the default further |
| 3 | **Coverage versus depth** | Depth first. Six categories done properly in V1, long tail deferred to V3 | The completeness claim, which is what the market advertises | If Tier 3 deep links prove near free to add, pull V3 forward, since perceived completeness may drive partner selection |
| 4 | **Disclosure versus conversion** | Disclose, and measure the cost | Possibly some short term revenue per move | If E3 shows disclosure costs more than a few points of conversion with no retention gain, revisit the placement rather than the principle |
| 5 | **Automation versus human cost** | Keep the humans, plan for about 50% resolution at launch | The headcount saving that makes the business case easy | Nothing in the next 12 months. Klarna's reversal and our own named specialist equity both point the same way |
| 6 | **Bundling revenue versus billing liability** | No bundling. Orchestrate setup, stay out of the invoice | A proven revenue line that Homebox and Bunch already run | If a partner requires bills included to work with us, treat it as a separate product with its own operational budget, not a feature of this one |
| 7 | **Speed to market versus depth of rails** | Rails first, accept a slower launch | Being second to a demo | If a partner deal is contingent on shipping by a date, ship V1 with fewer categories rather than shallower rails |
| 8 | **Activate early versus activate on exchange** | Exchange, with a `watching` state that captures the profile early | About 30 days of extra lead time, which matters most for broadband | If E2 shows offer accepted activation does not increase churn among the fall through cohort, move earlier for broadband only |
| 9 | **Community layer now versus later** | Later, and it is the call I am least comfortable with | The retention thesis and the most emotionally resonant part of the product | If V1 retention data shows movers going dormant before the renewal diary fires, pull V2 forward aggressively |

**The tradeoff underneath all of them.** Every one of these resolves the same way: pick the option that is defensible when it fails. A product whose failure mode is "we told you honestly that the council did not confirm" survives. A product whose failure mode is "the green tick was wrong" does not, because 60% of UK adults abandon an agent after a single mistake. **In a category where forgiveness is this low, the right design instinct is not to maximise the good case, it is to make the bad case survivable.**

---

## 5. Risks, open questions, and what I need from JMI

### Top risks

| Risk | Severity | Mitigation |
|---|---|---|
| Partner data does not carry the exchange event, so the core trigger cannot fire | **High** | Confirm the partner schema before build. Fall back to a mover confirmed trigger with a prompt, which is weaker but workable |
| Councils have no confirmation path, so a large share of tasks sit in `unconfirmable` | Medium | Ship the honest state. Negotiate receipts with the largest authorities over time |
| Panel gaps become visible and undermine the single recommendation | Medium | Expose scope honestly. A disclosed gap is survivable, a hidden one is not (panel gaps noticed by movers) |
| The AI is perceived as a downgrade from the named specialist | **High** | Named human owner from day one. Position Jay as doing more, not as replacing someone |
| Regulatory exposure on insurance and energy recommendations | Medium | Legal review of the recommendation logic and the rationale strings before launch. Store the rationale against every order |

### Open questions I cannot answer without JMI

1. Does the partner feed carry exchange or contract signature, or only tenancy start?
2. What exactly can partners legally pass at referral, and what consent is captured where?
3. What is the current digital funnel drop off, and at which step?
4. What is revenue per completed move today, by category, and what is the commission structure we would be disclosing?
5. What are the 1 and 2 star reviews saying? Deliverable 1's sample was selected for positive themes and the negative tail is where the real constraints hide.

### The three assumptions this PRD rests on

Stated plainly so they can be attacked.

1. **Exchange is the right activation trigger.** Inferred from fall through data, not observed. Tested by E2.
2. **Movers will accept autonomous execution of no decision admin.** Inferred from Accenture's routine task delegation figure, not tested on this population.
3. **The first fortnight drives retention.** Asserted. Needs JMI cohort data to confirm, and it is the reason V2 exists.

If assumption 1 is wrong, the architecture still holds but the timing changes. If assumption 2 is wrong, the product becomes a very good guided flow rather than an agent, which is a smaller but still valuable business. If assumption 3 is wrong, V2 is the wrong investment and the renewal diary should be pulled into V1 on its own.
