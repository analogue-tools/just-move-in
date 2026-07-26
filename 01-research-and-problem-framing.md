# Deliverable 1: Research & Problem Framing
### Just Move In · Product Discovery & Design Exercise
**Jeanne Piffaut · July 2026**

---

## 0. How to read this

Every research question below is answered in four parts: the **finding**, what it means **technically** (partner rails, data model, integration tier), what it means for the **customer** (modality, emotional state, what they can actually do), and the **source**.

The split matters because this brief has two audiences. An engineer needs to know that the move date is a mutable field with a cascade, not that movers feel anxious. A stakeholder needs to know that on moving day there is probably no WiFi, so the phone rings instead of the app pinging. Most research documents collapse these and serve neither.

**Structure**

| § | Contents |
|---|---|
| 1 | Research findings, split technical and customer |
| 2 | Cost of inaction ledger |
| 3 | Why the human call works, mechanism by mechanism |
| 4 | Where the human call breaks |
| 5 | **The four phase matrix** |
| 6 | Jobs to be done |
| 7 | The three moments that matter most |
| 8 | What this says about the starter Figma |
| 9 | What I would validate with primary research |
| 10 | **Carry forward summary** |
| 11 | Sources |

**Method note, and a caveat about the review sample.**

Secondary research plus two passes over the Trustpilot corpus, completed inside the half day box.

*Pass one* used search across the review history back to 2018. This surfaced the critical signals: call length, fee transparency, panel gaps, and the post call handoff to providers.

*Pass two* used a structured sample of **39 unique reviews dated April to July 2026**, supplied directly, alongside Trustpilot's own AI generated theme summaries covering **835 reviews**.

**The caveat matters.** The 39 review sample is drawn from Trustpilot's "reviews shaping this summary" sets across five positive theme categories. It is selected to illustrate themes, not sampled at random, and contains no reviews below 5 stars. **It cannot be used to estimate sentiment distribution.** Where this document discusses weaknesses in §4, the evidence comes from pass one. Percentages from pass two describe that sample only and are labelled as such.

Primary research (five recent movers) is scoped in §9 but not executed. The three load bearing and least evidenced conclusions are flagged there. AI usage is documented in Deliverable 5.

---

## 1. Research findings

### 1.1 The customer problem

| # | Question | Finding | Technical implication | Customer implication | Source |
|---|---|---|---|---|---|
| Q1 | How stressful is moving? | 57% of UK homebuyers rank it the most stressful life event, above having a child or divorce. 47% report raised stress, 41% anxiety, 31% sleep loss, 25% arguing with their partner. Other surveys reach 66%. | Instrument stress by proxy rather than by survey: time to first completed task, tasks left open at Day 0, abandonment mid flow, and support contacts per move. These become the north star metrics in the PRD. | Do not perform empathy at the customer. The stress is already documented and reassurance copy does not reduce it. Removing load does. Every screen should end with fewer open items than it started with. | [Legal & General via Mortgage Strategy](https://www.mortgagestrategy.co.uk/news/moving-house-ranked-most-stressful-life-event-by-brits-lg/), [NationalWorld](https://www.nationalworld.com/your-world/as-66-of-brits-say-moving-house-is-their-most-stressful-life-event-expert-shares-10-ways-to-make-it-easier-6575868) |
| Q2 | What actually has to get done? | A representative UK move requires notifying 25 to 40 organisations, and none share data. A solicitor confirming completion, an agent holding a tenancy, or a Royal Mail redirect tells the council nothing. Two councils will not inform each other. | **This is the core build.** A canonical move record (person, household, old address, new address, dates, meter references, vehicle, pets) that every integration reads from, and **three integration tiers**: *Tier 1 API* for the commercial panel (energy, broadband, insurance) with real time quote and order placement. *Tier 2 semi automated* for councils and water, which have no public APIs, so structured notification files, generated email or form automation, plus a per council rules table. *Tier 3 assisted* for DVLA, HMRC, electoral roll, GP, where we prefill and deep link but the user submits. Everything needs idempotency and retry, because these endpoints are unreliable. | The customer enters their details **once**. Every subsequent request is a confirmation, never a re entry. The perceived product is "I told one thing, thirty things happened." | [Welwyn Hatfield checklist](https://www.welhat.gov.uk/tenants/tenant-handbook/2), [Best London Removals](https://bestlondonremovals.co.uk/council-tax-moving/) |
| Q3 | When is the move date knowable? | 37% of agreed sales did not complete in 2025. Under offer to exchange averages 104 days, up from 76 in 2019. Exchange to completion is typically 1 to 3 weeks. New build buyers can get a week's notice. | **The most important architectural finding.** `move_date` is a mutable field, not a constant. Every task is stored as an offset against it with a dependency graph, not as a fixed calendar entry. A date change fires a cascade that reschedules downstream tasks, cancels and reissues provider orders where allowed, and flags anything now impossible. Tasks are state machines, not checkboxes. Ingest the exchange event by webhook from the partner or agent CRM where available. | "My date has changed" is a one tap action with a visible, instant consequence: the plan redraws itself and nothing is lost. This is the moment the product earns the most trust, because it is the moment the mover most expects to be let down. | [Connells Group](https://www.connellsgroup.co.uk/news/2026/05/11/conveyancing-delays-push-time-to-exchange-contracts-past-100-days/), [Halifax](https://www.halifax.co.uk/mortgages/help-and-advice/exchange-of-contracts-explained.html), [Rightmove via AOL](https://www.aol.com/articles/property-sales-fall-costs-britain-000100494.html) |
| Q4 | What is the long pole? | Broadband. Install takes 14 to 21 days, providers want 14 to 30 days notice, and it usually cannot be ordered until occupancy is confirmed, which collides with Q3. Over a third of movers hit delays, some left without a connection for weeks. | Address level availability check by UPRN, covering Openreach and altnets, since availability changes street by street. Per provider lead time data held as structured attributes on the product feed, not marketing copy. A **queued order state** that holds a broadband order and fires it automatically the moment completion is confirmed. Provider order status polling where an API exists. | Surface broadband first, always. Set the expectation of a gap honestly rather than promising a date we do not control, and offer a 4G or 5G stopgap as a first class option rather than a consolation. The mover's real question is not "which package" but "will I have internet on day one." | [TechRadar](https://www.techradar.com/computing/wi-fi-broadband/how-long-does-it-take-to-get-broadband-installed), [thinkbroadband](https://www.thinkbroadband.com/guides/broadband-guide-for-moving-home), [Citizens Advice via Yorkshire Post](https://www.pressreader.com/uk/yorkshire-post/20170901/281530816162527) |
| Q5 | What does doing nothing cost? | Council tax is charged daily, with liability from the day you move in regardless of registration, backdated, and a £70 penalty in some councils for late notification. Energy defaults to a deemed tariff that could be 30% above the same supplier's best offer. | A rules engine holding per task consequence data (penalty amounts, liability rules, notification windows) as **configurable content, not hardcoded copy**, because council rules vary by authority and change annually. This needs an owner and a maintenance cadence, which is a real ongoing cost to name in the PRD. | Show the real consequence with the real number, or show nothing. "Urgent" is noise. "Avoids a £70 penalty" is information. Manufactured urgency is the fastest way to lose a customer who is already braced for a sales call (Q18). | [Pure Magazine](https://puremagazine.co.uk/council-tax-moving-house/), [Best London Removals](https://bestlondonremovals.co.uk/council-tax-moving/), [The Energy Shop](https://www.theenergyshop.com/guides/moving-home-energy-guide) |
| Q6 | Can movers use a screen when the work is due? | Friday is the most popular moving day at 27%, chosen to get the weekend. On the day, movers are lifting boxes, managing removers and chasing solicitors, often with no WiFi, weak signal and a dying phone. | Telephony as a first class channel, not a fallback: outbound and inbound voice, speech to text and text to speech, plus SMS. The web client must degrade gracefully on poor mobile data and tolerate being offline. Any Day 0 flow must be completable over voice alone with no screen dependency. | **This is the clearest case for voice in the entire product.** Not because voice is delightful, but because on moving day it is the only rail that works. One hand, no desk, no broadband, no patience. A phone call beats an app notification here, and it is precisely where the current human service does not reach. | [Estate Agent Today and reallymoving](https://www.estateagenttoday.co.uk/breaking-news/2025/12/revealed-the-key-home-moving-stats-of-2025/) |

### 1.2 Behaviour and decision making

| # | Question | Finding | Technical implication | Customer implication | Source |
|---|---|---|---|---|---|
| Q7 | Why don't movers act, even when acting saves money? | Ofgem's behavioural unit named the barriers directly: choice overload leading to inaction, status quo bias, and personalisation raising response. | Effort estimates ("5 mins") stored as a per task attribute and used in ranking, not written as copy. Personalisation tokens available to every task and offer template, sourced from the move record. | Cut the number of visible choices, show the effort cost up front, and make it obvious the task is finite. The enemy is not disagreement, it is the sense of an unbounded list. | [Ofgem BIU slides](https://www.ofgem.gov.uk/sites/default/files/docs/2019/09/collective_switch_slides_for_publication.pdf) |
| Q8 | Does one recommendation beat a comparison? | Yes, with trial evidence. Ofgem's collective switch trials, presenting a single offer, achieved 14.0% to 29.5% switching. The "better offer" trials presenting three or more options achieved 2.4% to 13.4%. A single personalised letter tripled switching from a 1% baseline to 3.4%. | The recommendation service returns **one ranked pick plus a machine generated reason string**, with alternatives available but not returned by default. Store the rationale against the order for auditability and complaint handling. Build the A/B harness to retest one versus three on our own population, since the Ofgem data is energy specific. | One confident pick with a stated reason. Alternatives collapse behind "show more." This is not hiding information, it is removing the burden of adjudication from someone with no expertise and no time. | [Energies, MDPI](https://mdpi.com/1996-1073/13/19/5179/htm), [Energy Policy RCT](https://www.sciencedirect.com/science/article/abs/pii/S221480431830452X) |
| Q9 | Will UK consumers trust an AI here? | A June 2026 YouGov survey of 2,000+ UK adults: 19% trust AI assistants for everyday purchasing decisions against 55% for a human expert. 69% do not trust AI even when it follows rules they set. 60% would stop after one mistake. | Confirmation gates on anything irreversible or financial. A complete, user visible **audit log of every agent action**, with an undo path where the downstream system permits it. Error budgets should be set far tighter than for a normal consumer product, because the tolerance is one. | Trust, not capability, is the ceiling. The customer needs to see what was done on their behalf, in plain language, after the fact. Silent competence reads as risk, not as service. | [ACI Worldwide and YouGov](https://www.businesswire.com/news/home/20260628382944/en/Six-in-Ten-UK-Consumers-Would-Stop-Using-an-AI-Shopping-Agent-After-One-Mistake-ACI-Survey-Finds) |
| Q10 | Is there appetite for delegation at all? | Yes, and it is task shaped. 74% would delegate routine instructed tasks. 32% would let an agent decide within set budget and brand limits. Only 9% accept fully autonomous purchasing. | A **permission model with scopes per task category**, defaulted by consequence: reversible and no money runs autonomously, money and contract requires confirm. Scopes are stored on the move record and adjustable by the user. | **Delegate the tasks, not the decisions.** The customer sets how much rope the agent gets, and can widen it as trust accrues. This also gives us a natural engagement ladder rather than an all or nothing consent moment. | [Accenture Consumer Pulse](https://www.accenture.com/us-en/insights/consulting/talk-my-ai-agent) |
| Q11 | Does commission disclosure hurt or help? | 75% would trust an AI agent less if its recommendations were influenced by brand payments, and the same share would trust the brand less. | Commission and referral fee metadata must be a **required field on every product in the catalogue**, sourced from commercial agreements and rendered by the UI component. This is a data contract with the commercial team, not a design decision. | Disclose on the card, at the point of choice, in one line. Given JMI's model, concealment is the larger commercial risk. Done well this is a differentiator against comparison sites, which movers already assume are paid for. | [Quad and Harris Poll](https://www.quad.com/newsroom/americans-say-they-would-lose-trust-in-ai-shopping-if-results-were-sponsored) |
| Q12 | Should the agent sound human? | Consumers identify AI by responses arriving too fast (50%) and sounding too formal or robotic (49%). | Do not simulate typing delays or human tells. Disclose AI status in the interface and at the start of any voice call. Route to a human on defined triggers (distress language, repeated failure, complaint intent, vulnerability flag). | Be an obviously capable machine, not a fake person. A machine that gets things done is trustworthy. A machine caught pretending is not, and the discovery moment is unrecoverable given Q9. | [Klaviyo](https://www.klaviyo.com/solutions/ai/consumer-trust-in-ai) |

### 1.3 Why the human call works, and where it breaks

| # | Question | Finding | Technical implication | Customer implication | Source |
|---|---|---|---|---|---|
| Q13 | What is the review corpus about? | **35 of 39 reviews in the sample name a specific Move Specialist**, roughly 90%. About 15 individuals recur. Trustpilot's theme summary for 835 reviews leads on Staff before Service. | Assign a **named human owner per case** as a field on the move record, expose it in the interface, and route all escalations to that person. This is a CRM and staffing model decision as much as a product one, and it constrains how far headcount can fall. | Trust attaches to people, not brands. The customer needs a name attached to their move who is accountable when the machine fails. That name does not have to do the work, but it has to exist and be reachable. | Customer supplied Trustpilot extract, Apr to Jul 2026 |
| Q14 | Why do customers rave about the call? | Six mechanisms, none of which is "they were nice": cognitive offload into one bounded event, the agent supplying the sequence, the comprehension loop, one recommendation, multi touch follow up, and named accountability. Full detail in §3. | Five of six are buildable with conventional software. Only named accountability requires an organisational answer rather than a technical one. | The mover is buying **closure**, not speed. A flow that ends with "that is everything, here is what happens next and when" is the product. A flow that ends by returning them to a dashboard is not. | Customer supplied extract; [Trustpilot p.3](https://www.trustpilot.com/review/justmovein.com?page=3), [p.8](https://www.trustpilot.com/review/justmovein.com?page=8) |
| Q15 | Where can AI beat the human decisively? | The **comprehension loop**. Agents are praised for going through everything and then going through it again to check understanding, unprompted, and for using everyday language. Reviewers describe themselves as clueless about bills and are met without condescension. | Build an explicit "explain that differently" intent with multiple registers per concept (plain, detailed, analogy), plus a comprehension check step in the flow. This is content architecture, not model behaviour, and should not be left to the prompt. | Unlimited patience at zero social cost, at 11pm, without the sense of wasting someone's time. **This is the clearest better than human claim available and should headline the PRD.** A human doing this spends a scarce resource. An agent doing it spends nothing. | Customer supplied extract, Jun 11 and Jun 25 2026 |
| Q16 | Is the call a single point event? | **No, and this corrects an earlier assumption.** The best experiences are multi touch. One reviewer had three conversations with the same specialist, twice before and once after moving in. Another registered early, was followed up on their hoped completion date, completed later, and was followed up again. | A scheduled outbound touchpoint engine driven by move state, with cross channel orchestration (email, push, SMS, voice) and suppression rules so the mover is not contacted four ways about one thing. Touchpoints are triggered by state transitions, not by cron. | **What the best agents do intermittently and expensively, software can do consistently and for free.** That sentence is the pitch. The customer experience to aim for is being remembered, not being processed. | Customer supplied extract, Jul 6 and Jun 8 2026 |
| Q17 | Where does the human model break? | Scheduling friction, a 50 minute call costing both sides, perceived sales pressure and fee opacity, visible panel gaps, and inconsistent follow through. JMI's own reply explains the broadband account is set up on the call, after which [installation is handed to the provider](https://uk.trustpilot.com/review/justmovein.com?page=6). | Provider status polling where APIs exist, and chase workflows with SLA timers where they do not. Automated compensation claims against missed install dates. Panel coverage should be exposed honestly in the data model, including known gaps. | The failure mode is **variance**, not absence. Some movers get chased, some get handed off and forgotten. The customer promise is that the boring persistence is now guaranteed rather than dependent on which specialist they drew. | [Trustpilot p.6](https://uk.trustpilot.com/review/justmovein.com?page=6), [p.5](https://www.trustpilot.com/review/justmovein.com?page=5), [p.41](https://www.trustpilot.com/review/justmovein.com?page=41) |
| Q18 | Is "no hard sell" a real theme? | Real, explicit and unprompted. Multiple reviewers volunteer praise for the absence of hard sell tactics without being asked. | Enforce it structurally: no countdown timers, no false scarcity, disclosure component mandatory on offer cards, and a rule that a declined recommendation is not re presented in the same session. | If customers name the *absence* of pressure as a benefit, the category baseline is a sales call. Non pushiness is currently a property of individual agents. It has to become a property of the system. | Customer supplied extract, Jun 5 and Jul 2 2026 |
| Q19 | How much does the call cover? | Roughly six to eight high value items. The mover's real list runs to 25 to 40. | The long tail is cheap: Tier 3 prefilled deep links cost little to add and carry no commercial risk. Coverage is a content and integration backlog, not a hard engineering problem. | The opportunity is not a cheaper call. It is going from 6 items to 30, and from one interaction to a six week relationship. Coverage is what makes the product feel like it replaced the problem rather than a phone call. | [Welwyn Hatfield](https://www.welhat.gov.uk/tenants/tenant-handbook/2), [Just Move In](https://justmovein.com/home-moving-services) |

### 1.4 Commercial and channel

| # | Question | Finding | Technical implication | Customer implication | Source |
|---|---|---|---|---|---|
| Q20 | How valuable is a mover commercially? | Moving is the strongest single trigger for high value buying decisions across mortgages, insurance, furniture, white goods, home improvement, energy, TV and broadband. Movers spend roughly $17,000 setting up a home, and a third buy a vehicle within 12 months. | Affiliate and marketplace infrastructure with proper attribution, plus a product catalogue that can hold non panel items. Keep commercial metadata (Q11) mandatory across all of it so the disclosure component works for affiliate items too. | There is far more monetisable surface than energy, broadband and insurance, but every added surface is a trust liability unless disclosed. The design problem is being commercial without *feeling* commercial, and disclosure is what buys that permission. | [WhenFresh](https://www.whenfresh.com/service/uk-home-mover-alerts/), [Realtor.com via StockTitan](https://www.stocktitan.net/news/NWS/new-study-from-realtor-com-finds-movers-spend-more-than-17-000-on-gy5zof3ikizg.html) |
| Q21 | What does the move cost the customer? | A record £17,831 for a simultaneous buy and sell in 2025: £9,750 stamp duty, £4,615 agent fees, £2,182 conveyancing, £709 removals. First time buyers paid £2,315 upfront. | Savings must be **calculated and stored per decision**, against a named baseline (the deemed tariff, the incumbent renewal price), so the cumulative figure is defensible rather than marketing. | Movers are financially depleted at exactly the moment we ask them to transact. Frame everything as savings against what they would otherwise pay by default. This is not tone, it is the only honest framing given the deemed tariff data in Q5. | [Estate Agent Today and reallymoving](https://www.estateagenttoday.co.uk/breaking-news/2025/12/revealed-the-key-home-moving-stats-of-2025/) |
| Q22 | How does the customer arrive? | Via letting agent and property partner referral, typically complimentary to the mover. JMI also supplies utilities and void energy management to hundreds of property partners. | Partner data ingest (address, dates, tenancy, household), identity matching, and **explicit consent capture** at the point of transfer. The scope of what partners can legally pass determines how much of the profile is pre filled, and this needs confirming before the flow is designed, not after. | First contact is unsolicited from the mover's point of view, so the sceptical persona is the default, not the eager one. The opening must earn permission in one screen. The upside is a head start on personalisation no pure D2C competitor has. | [Trustpilot p.27](https://www.trustpilot.com/review/justmovein.com?page=27) |

### 1.5 The moments

| # | Question | Finding | Technical implication | Customer implication | Source |
|---|---|---|---|---|---|
| Q23 | When should the product activate? | Exchange, or contract signed with deposit paid. Before that certainty is too low (Q3) and standard advice is [not to notify anyone until contracts are exchanged](https://nidirect.gov.uk/articles/moving-to-your-new-home), because a fall through means redoing it all. | Detect the exchange event via partner or conveyancer feed where possible, with user confirmation as fallback. Everything before it runs in a low commitment "watching" state that stores profile data but fires no outbound tasks. | Do not nag before it is real. A 30 item task list sent at offer stage creates anxiety, gets ignored, and if the sale collapses it burns the relationship entirely. Earn the right to be demanding by waiting until the customer knows it is happening. | [nidirect](https://nidirect.gov.uk/articles/moving-to-your-new-home), [Connells Group](https://www.connellsgroup.co.uk/news/2026/05/11/conveyancing-delays-push-time-to-exchange-contracts-past-100-days/) |
| Q24 | Is moving day purely stressful? | No. 36% of movers report feeling excited. Rituals are strikingly consistent: the essentials box in the car, tea and biscuits for the removers, and universally a takeaway on the first night. | Local data layer (places, opening hours, delivery) to serve the ritual rather than the admin. This is a read only integration and cheap to build. | There is a joy layer to protect, not only a stress layer to remove. Day 0 content should serve the ritual, not push admin at someone holding a box. Get the two mandatory items done in ninety seconds, then get out of the way. | [Realtor.com via StockTitan](https://www.stocktitan.net/news/NWS/new-study-from-realtor-com-finds-movers-spend-more-than-17-000-on-gy5zof3ikizg.html), [Mumsnet](https://www.mumsnet.com/talk/_chat/4944404-moving-house-any-good-tips) |
| Q25 | What happens after the boxes are in? | A distinct, under served emotional phase: disorientation described as [the unsettled in between](https://rachelwanders.substack.com/p/notes-from-the-unsettled-in-between), low grade grief for lost familiarity, alongside pride and fatigue. Movers manufacture familiarity deliberately, returning to the same class or cafe weekly. | Local discovery layer, council bin day data, and a renewal diary seeded at signup for contracts taken during the move. This is where the 12 month retention hooks are technically established. | **The retention thesis.** The admin ends, the relationship with the home does not. It is also the only surface where commercial content can appear without feeling predatory, because the mover is pulling rather than being pushed. | [Rachel Wanders](https://rachelwanders.substack.com/p/notes-from-the-unsettled-in-between), [Amblus](https://amblus.substack.com/p/landing-with-a-thud/comments) |
| Q26 | Which moments matter most? | Three: the exchange trigger, moving day hands free, and the first two weeks. | Prioritise the exchange webhook, the voice and SMS rail, and the local data layer in that order. | Detail and testable hypotheses in §7. | Synthesis |

### 1.6 Who we are designing for

Three segments surfaced by the review sample that secondary research alone had missed.

| # | Question | Finding | Technical implication | Customer implication | Source |
|---|---|---|---|---|---|
| Q27 | Who values this most intensely? | **Disabled and vulnerable movers.** Two of 39 reviewers self identify as disabled and describe dreading the admin, one saying they were feeling completely overwhelmed before the call. Unprompted, in a context where nobody asked. | WCAG conformance with genuine parity across modalities, not a degraded text alternative. A vulnerability flag on the move record that can be passed to energy partners for the [Ofgem Priority Services Register](https://www.ofgem.gov.uk/get-energy-if-you-are-moving-home-or-business-premises), which is free and under used. Human escalation triggers must include this flag. | **Accessibility is a value proposition here, not a compliance checkbox.** The phone gauntlet of holding, repeating details and navigating menus is disproportionately punishing for this group, and unlimited patience is disproportionately valuable. Voice only or app only both exclude people, at opposite ends. | Customer supplied extract, May 20 and May 27 2026 |
| Q28 | Is "save me money" the main job? | Not for everyone. A **novice segment** describes having no idea how the process works: a first time renter with no clue about renting, a reviewer relatively clueless about bills, a first time mover with many questions. Their job is comprehension, not price. | An experience level flag captured or inferred at onboarding that branches the flow, with a different first screen and a different default explanation register (Q15). This is a routing decision in the flow graph, not a copy variant. | A price led opening ("we found you a cheaper tariff") lands badly on someone who does not yet know what a tariff is. Novices need orientation first and deals second. Getting this backwards loses them at the first screen. | Customer supplied extract, May 21 and Jun 25 2026 |
| Q29 | What happens on a compressed timeline? | Short notice moves recur. One reviewer had a very short notice date and was set up with no downtime on any service. Another flags as a drawback that you cannot instruct until a certain point, which is the customer voiced version of the Q3 and Q23 constraint. | When `days_to_move < 14`, **re rank recommendations by speed of activation rather than price**. This requires per SKU activation lead time as structured data on the product feed, which is a partner data requirement to negotiate now rather than later. | Say openly that we are optimising for speed over price because the date is tight, and show what it costs. Movers accept a worse price for certainty when time poor, but only if told. This is a capability comparison sites structurally cannot offer. | Customer supplied extract, May 5 and Jul 2 2026 |

---

## 2. Cost of inaction ledger

The evidence base for urgency messaging. Every number sourced, nothing invented.

| Task | If late | Real cost | Source |
|---|---|---|---|
| **Broadband** | 14 to 21 day install, usually cannot order pre occupancy | Weeks without connection. £6.24 per day compensation applies only if the provider misses an agreed date | [TechRadar](https://www.techradar.com/computing/wi-fi-broadband/how-long-does-it-take-to-get-broadband-installed), [Switchity](https://switchity.co.uk/broadband-guides/switching-when-moving-house/) |
| **Energy** | Auto placed on a deemed contract | Up to 30% above the same supplier's best offer, with no exit fee, so pure loss | [The Energy Shop](https://www.theenergyshop.com/guides/moving-home-energy-guide), [Ofgem](https://www.ofgem.gov.uk/get-energy-if-you-are-moving-home-or-business-premises) |
| **Opening meter readings** | Estimated billing at both ends | Inflated final bill at the old address, disputed opening bill at the new | [Energy Saving Trust](https://energysavingtrust.org.uk/moving-house-energy-checklist/) |
| **Council tax, new** | Liability starts on move in day regardless of registration, charged daily | Backdated arrears, penalty notices, enforcement letters | [Pure Magazine](https://puremagazine.co.uk/council-tax-moving-house/) |
| **Council tax, old** | Old council keeps charging until told | Paying for two properties at once | [hellobills](https://hellobills.co.uk/council-tax/council-tax-when-moving-house/) |
| **Council tax notification** | Most councils require notification within 21 days | Some apply a £70 penalty notice | [Best London Removals](https://bestlondonremovals.co.uk/council-tax-moving/) |
| **Home and contents insurance** | Cover not updated | Moving day accidents may not be covered. An out of date address can invalidate cover | [Movesmith](https://movesmith.uk/guides/change-of-address-checklist) |
| **Royal Mail redirect** | Needs about 5 working days and ID | Post goes to strangers, with identity fraud exposure | [Movesmith](https://movesmith.uk/guides/change-of-address-checklist) |
| **GP registration** | Removed from the old surgery list after about 30 days | Gap in care. NHS dental places limited in many areas | [Apartment Checklist](https://apartment-checklist.com/uk/articles/moving-house-checklist.html) |

**Design implication.** The checklist is not 30 equal items. Order by cost of delay multiplied by lead time, and give each item its real consequence.

---

## 3. Why the human home setup call works

I read the corpus for mechanism, not sentiment. Only mechanisms port to software.

**3.1 Cognitive offload into one bounded container.** The claim is not that the agent was nice, it is that it was *one* interaction. One reviewer set up all their bills in a five minute call. Another says it [took all the anxiety out of setting up utilities, broadband and council tax](https://www.trustpilot.com/review/justmovein.com?page=3). A third describes pressure that had been piling up being eased. The value is **closure**, not speed. *Ports easily, if the flow has a real ending.*

**3.2 The agent supplies the sequence.** Movers do not know what order things go in or which carry lead times. The agent holds the domain model. *Ports trivially. Deterministic and rules shaped, and the least AI dependent part of the product.*

**3.3 The comprehension loop.** The mechanism I most underweighted. Agents are praised not for explaining but for **checking the explanation landed and then repeating it differently, unprompted**. One reviewer describes the agent going through everything and then going through it again. Another praises everyday language with anything unclear explained on request. *Ports perfectly, and this is where AI wins.* See Q15.

**3.4 One recommendation with a reason.** Agents recommend rather than presenting a matrix, for instance matching contract length to a short lease. Maps onto the Ofgem evidence in Q8. *Ports, if we resist the comparison table instinct.*

**3.5 Multi touch and date change resilience.** The best experiences are not single calls. One reviewer had three conversations with the same specialist across the move. Another was followed up after their completion date slipped. That is a live case study of Q3 being absorbed by a human rather than a system. *This is the product.*

**3.6 Named accountability.** 35 of 39 reviews name an individual. Trust attaches to customer support human agent, Will, Daryl, Ray, Tom, Nadia, Phil, Lynn, Katrina, Donna, Finn and Rio, not to Just Move In. *Ports badly, and it is the central design problem.* Position argued in §7: visibly a machine, very good, backed by a named human who owns the outcome.

---

## 4. Where the human call breaks

| Break | Evidence | Implication |
|---|---|---|
| Scheduling friction | The call must be booked and attended. Reviewers report needing two calls when details could not be located | Asynchronous by default with a synchronous option, not a mandatory appointment |
| Call length costs both sides | One reviewer withheld a star over the [50 minute length](https://www.trustpilot.com/review/justmovein.com?page=5), another praised the same duration as productive | 50 minutes is a cost the great agent earns back. AI must deliver the same closure in 5 to 10 minutes, or asynchronously |
| Follow through is inconsistent, not absent | JMI's own reply explains the broadband handoff to the provider, yet the 2026 sample contains movers contacted three times, and one chased after their date slipped | **Correction to an earlier draft.** The good experiences are multi touch. The failure mode is **variance**. Software makes the good version the floor rather than the ceiling |
| Perceived sales pressure and fee opacity | Reviewers praise the absence of hard sell, implying pressure is the salient risk. One flagged that it [lacked transparency about the management fees](https://uk.trustpilot.com/review/justmovein.com) | Commission disclosure on every card. Non pushiness becomes a system property |
| Panel gaps are visible | A reviewer noted [they do not have a deal with Octopus Energy](https://www.trustpilot.com/review/justmovein.com?page=5) | Be explicit about panel scope. A mover who spots an undisclosed gap loses trust in everything else |
| Does not scale, cannot cover the tail | 50 minutes per mover is a hard ceiling, and the call covers about six items | The 25 to 40 item tail can be covered at near zero marginal cost. That is where the added value sits |

---

## 5. The four phase matrix

Day counts are indicative. The real anchors are events, per Q3 and Q23.

| Topic / Time | **t minus 30**<br>*Offer accepted or tenancy agreed* | **t minus 14**<br>*Exchange or contract signed* | **Moving day**<br>*Keys and completion* | **t plus 14**<br>*First fortnight* |
|---|---|---|---|---|
| **What happens** | Nothing legally binding. Chain forming. Notice given on the current home. Removals researched. **37% of these never complete.** | The date becomes legally real. The setup call happens. Every commercial decision is taken inside one compressed window. | Funds transfer, keys released, often afternoon and time uncertain. Removals. Meter readings. Property handover and inventory. | Unpacking. First bills land. Registration with local services. Deposit and snagging evidence window closes. |
| **Emotions** | **Excited, but conditional.** Anticipation contaminated by fear of collapse, powerlessness while waiting on solicitors and chains, and low grade dread of a list they cannot yet see. | **Admin panic, friction.** Time pressure, decision fatigue across four significant purchases in a week, choice overload at maximum. Also relief that it is finally real. | **Physical exhaustion, anxiety.** Plus adrenaline and genuine excitement, since 36% report feeling excited. Acute frustration the moment anything fails. | **Settling, not settled.** *This is where the evidence diverges from the assumption.* Disorientation, low grade grief for lost familiarity, pride and fatigue, all at once. The "we live here now" moment keeps receding. |
| **Must do** | Give notice, typically 30 days. Book removals, since firms fill fast on Fridays and month end. Check broadband availability at the exact address. Ask who supplies the energy. Declutter and order materials. | Order broadband. Notify old energy supplier, identify the new one, choose a tariff. Water and sewerage. Close old council tax, open new. Insurance effective the move date. Royal Mail redirect, 5 working days plus ID. TV licence. Confirm removals, parking and access. | Opening and closing meter readings with timestamped photos. Photograph both properties. Locate meters, stopcock, fuse box, thermostat. Confirm the council tax move in date. Collect keys only once funds are confirmed. | Register with the new council. GP and dentist, within about 30 days. Electoral roll. DVLA, HMRC, bank, employer. Check every fixture and appliance. Verify the first energy bill uses actual readings. |
| **Would be nice** | See the whole list with no obligation to act. A cost of move estimate. Browse furniture and plan layouts. Preview the neighbourhood. Know whether this is actually going to happen. | **One confirmation that everything is handled.** Know what happens if the date moves. Know we are not overpaying. Have someone else do the boring notifications entirely. | Kettle and first night box to hand. Takeaway ordered. One room habitable. Kids and pets settled. Know where late food is. | Make it feel like home. Find "my" coffee shop, gym, GP, running route. Meet a neighbour. Bin day in the calendar. A tariff sanity check now a real bill has arrived. Trusted tradespeople. |
| **Access** | **Full.** Desktop and mobile, high attention, at leisure. Email works. Best window for research and profile building. | **Good but fragmented.** At a desk, 20 to 50 minutes available. Email, app and phone all viable. **The best window for a considered commercial decision.** | **Unlikely to have internet.** Mobile data only, possibly weak signal, low battery, one hand free, no desk. **Voice and SMS are the only reliable rails.** Any web client must degrade or work offline. | **Broadband may still not be live**, given 14 to 21 day lead times. Mobile first, evenings, attention low but recovering. |
| **Likely blockers** | Sale falls through. Date unknown so nothing can be firmly booked. Cannot order broadband without confirmed occupancy. Does not know who supplies the energy. Genuinely too early to notify anyone. | Everything simultaneous. Decision fatigue and choice overload causing inaction. Cannot find account numbers or documents. Provider wants 14 to 30 days notice they no longer have. Call must be scheduled and attended. Cannot instruct until a certain point in the process. | Completion time slips through chain sequencing. Keys late. No internet. Removers late. Meter cupboard locked or inaccessible. Prepayment meter with no credit. Phone battery. **Forgetting the meter readings entirely.** | Broadband install delayed or engineer no show. Deemed tariff still running. First bill estimated. Council backdating. GP catchment full, no NHS dentist available. **Motivation collapse once the urgent items are done.** |

**Reading the matrix.** Three things fall out of it directly.

*Access drives modality, not preference.* The Access row alone determines where voice leads. At t minus 14 the mover is at a desk and UI should lead with voice as the escape hatch. On moving day there is probably no broadband and one free hand, so voice leads and the UI is optional. This is an infrastructure fact, not a design taste.

*The blockers row is the backlog.* Almost every entry is either an integration (occupancy confirmation, provider notice periods, council backdating) or a state management problem (date slippage, chain sequencing). Very few are UI problems. That is the honest shape of this build.

*t plus 14 is mislabelled as "settled" almost everywhere, including in our own instinct.* The evidence says it is the least settled phase emotionally, and it is where motivation collapses once the frightening items are done. That combination, high need and low motivation, is exactly where a proactive agent earns its keep.

---

## 6. Jobs to be done

| # | Job | Phase | Functional | Emotional | Social |
|---|---|---|---|---|---|
| J1 | When my move becomes real, help me know the complete list so I can stop worrying I have forgotten something | t-30 to t-14 | Enumerate and sequence | Relieve dread of the unknown unknown | Look competent to my partner |
| J2 | When I have to choose a tariff or package, tell me what to pick so I do not have to become an expert | t-14 | Decide | Escape decision fatigue | Not be the person who overpaid |
| J3 | When there is admin with no decision in it, do it for me so I never see it | t-14, t+14 | Execute | Reclaim time and dignity | |
| J4 | When I am mid move and cannot use a screen, let me get things done anyway | Moving day | Act hands free | Stay in control amid chaos | |
| J5 | When something might go wrong, warn me early enough to fix it | t-14 to t+14 | Monitor and chase | Avoid the specific dread of no internet | Not be blamed for the fallout |
| J6 | When I have moved in, help me turn this house into my home | t+14 | Discover locally | Belonging, replacing lost familiarity | Be part of a community |
| J7 | When my move date changes, absorb it for me | t-30 to moving day | Reschedule everything | Avoid redoing work | |
| J8 | When I need reassurance, let me ask a stupid question without feeling stupid | All | Explain | Psychological safety | |

J3, J4, J7 and J8 are where AI wins outright. J2 is where AI is currently distrusted and needs the confirm pattern. J1 and J5 hold the largest unserved value.

---

## 7. The three moments that matter most

**① The exchange trigger.** The only moment with both high certainty and remaining lead time. Everything upstream is speculative, everything downstream is too late for broadband.
*Hypothesis:* activating on exchange rather than offer accepted raises completion and reduces churn, because no work is wasted on the 37% that fall through.

**② Moving day, hands free.** Unserved by the current model, highest emotional stakes, and it contains the highest leverage micro task in the journey. The only moment where voice is unambiguously correct.
*Hypothesis:* a proactive Day 0 voice or SMS touch capturing meter readings and confirming the move in date improves billing accuracy and materially raises NPS.

**③ The first two weeks.** Where a transaction becomes a relationship and the second commercial cycle is seeded.
*Hypothesis:* movers completing a settling in action within 14 days show higher 12 month retention and renewal attach.

**Position on trust,** given Q9 to Q13: the agent is visibly a machine, autonomy is graduated by consequence, commission is disclosed at the point of choice, and a named human owns the case.

---

## 8. What this says about the starter Figma

**Working, and now evidenced.** The Top Pick single deal is directly supported by the Ofgem trial data in Q8. The "5 Mins" effort labels are a well evidenced nudge (Q7). The Urgent flag on Notify Council is justified by the £70 penalty and daily liability (Q5). "Get to know your new area" serves the t plus 14 belonging job and is the most strategically important card on the screen, currently below the fold. The B Corp, renewable and contract length chips make a recommendation auditable rather than asserted.

**Questions I would raise.** Connect Email is the highest trust ask in the product and appears before the product has done anything, so move it behind a first completed win (Q9). The IKEA banner reads commercial before we have earned it, so test it as a reward after first task completion (Q18). No commission disclosure on the deal cards, which Q11 says we need. No "my date has changed" affordance, which Q3 makes a first class action. Ask Jay is a chat window, and chat is the wrong rail for moving day (Q6). And on the long scroll: a stage based view following the four phases is worth testing as primary navigation, since it also tells the mover where they are in a process that otherwise feels formless.

---

## 9. What I would validate with primary research

Five 20 minute calls with movers from the last 60 days: two renters, two buyers, one first time buyer.

1. Walk me through the day your move date was confirmed. What did you do in the next 24 hours?
2. What did you leave latest, and why?
3. Tell me about something that went wrong. What did it cost you?
4. When did it start to feel like home, and what made that happen?
5. If a service had offered to do all of this for you, what would have stopped you trusting it?

**Load bearing and least evidenced:** that exchange is the right activation trigger (inferred from fall through data, not observed). That movers accept autonomous execution of no decision admin (inferred from Accenture, not tested on this population). That the settling in phase drives retention (asserted, needs JMI cohort data).

**Data to request from JMI:** the 1 and 2 star reviews, setup call recordings, digital funnel drop off, and the partner data sharing schema.

---

## 10. Carry forward summary

Ten decisions to take into the competitive analysis and the PRD.

| # | Carry forward | Key takeaways | Evidence |
|---|---|---|---|
| 1 | **Event driven, not calendar driven** | · `move_date` is mutable with a cascade, not a constant<br>· Tasks are state machines with dependencies, not checkboxes<br>· "My date changed" is a one tap action that redraws the plan<br>· This is the moment the mover most expects to be let down, so it is the moment to over deliver | Q3, Q23 |
| 2 | **Activate on exchange** | · Before exchange, store profile but fire nothing<br>· 37% of pre exchange moves never happen<br>· Ingest the event from partner or conveyancer feeds where possible<br>· Waiting earns the right to be demanding later | Q3, Q23 |
| 3 | **Three integration tiers, one move record** | · Tier 1 API for the commercial panel<br>· Tier 2 semi automated for councils and water, with a per council rules table<br>· Tier 3 prefilled deep links for the long tail<br>· Customer enters data once, confirms thereafter | Q2, Q19 |
| 4 | **Voice leads on moving day, UI leads at t minus 14** | · Access, not preference, decides this<br>· Day 0 means no broadband, weak signal, one hand<br>· Telephony and SMS are first class channels, not fallbacks<br>· Any Day 0 flow must be completable by voice alone | Q6, matrix Access row |
| 5 | **One recommendation, one reason** | · Single pick converts 14 to 29% versus 2 to 13% for three or more<br>· Recommendation service returns one pick plus a rationale string<br>· Alternatives collapse behind "show more"<br>· Store the rationale for audit and complaints | Q7, Q8 |
| 6 | **Delegate tasks, not decisions** | · Reversible and no money runs autonomously<br>· Money and contract needs a one tap confirm<br>· Permission scopes stored per category and user adjustable<br>· Full audit log of agent actions, visible to the customer | Q9, Q10 |
| 7 | **Disclose commission at the point of choice** | · 75% trust an agent less if recommendations are paid for<br>· Commission is a required field on every catalogue item<br>· Data contract with the commercial team, not a design choice<br>· Turns the biggest liability into the differentiator | Q11, Q18, Q20 |
| 8 | **Machine agent, named human owner** | · 35 of 39 reviews name an individual<br>· Do not simulate human tells, disclose AI status<br>· Named owner is a field on the move record, exposed in UI<br>· Escalation routes to that person, including on vulnerability flags | Q12, Q13, Q27 |
| 9 | **Build the comprehension loop explicitly** | · Praised repeatedly, and the clearest better than human claim<br>· Multiple explanation registers per concept, as content not prompt<br>· Comprehension check as a designed step in the flow<br>· Novice branch at onboarding, orientation before deals | Q15, Q28 |
| 10 | **Own the six weeks, not the fifty minutes** | · The failure mode is variance in follow through, not absence<br>· Scheduled outbound touchpoints driven by state transitions<br>· Provider status polling, chase SLAs, automated compensation claims<br>· t plus 14 is high need and low motivation, which is where retention is won | Q16, Q17, Q25, Q26 |

**If only three things survive contact with reality:** event driven architecture (1), voice on moving day (4), and one recommendation with disclosed commission (5 plus 7). Those three carry the majority of the evidence and the majority of the differentiation.

---

## 11. Sources

**Company and customer feedback**

*Primary sample:* customer supplied Trustpilot extract, 39 unique reviews April to July 2026, plus Trustpilot AI theme summaries for Staff, Service, Customer service, User experience and Customer communications covering 835 reviews. Selection bias caveat in §0.

*Secondary:* [Just Move In](https://justmovein.com/home-moving-services) ·
[Trustpilot UK](https://uk.trustpilot.com/review/justmovein.com) ·
[p.3](https://www.trustpilot.com/review/justmovein.com?page=3) ·
[p.5](https://www.trustpilot.com/review/justmovein.com?page=5) ·
[p.6](https://uk.trustpilot.com/review/justmovein.com?page=6) ·
[p.8](https://www.trustpilot.com/review/justmovein.com?page=8) ·
[p.27](https://www.trustpilot.com/review/justmovein.com?page=27) ·
[p.41](https://www.trustpilot.com/review/justmovein.com?page=41)

**Market and stress data**
[Legal & General via Mortgage Strategy](https://www.mortgagestrategy.co.uk/news/moving-house-ranked-most-stressful-life-event-by-brits-lg/) ·
[NationalWorld](https://www.nationalworld.com/your-world/as-66-of-brits-say-moving-house-is-their-most-stressful-life-event-expert-shares-10-ways-to-make-it-easier-6575868) ·
[Estate Agent Today and reallymoving](https://www.estateagenttoday.co.uk/breaking-news/2025/12/revealed-the-key-home-moving-stats-of-2025/) ·
[Connells Group](https://www.connellsgroup.co.uk/news/2026/05/11/conveyancing-delays-push-time-to-exchange-contracts-past-100-days/) ·
[Rightmove via AOL](https://www.aol.com/articles/property-sales-fall-costs-britain-000100494.html) ·
[Halifax](https://www.halifax.co.uk/mortgages/help-and-advice/exchange-of-contracts-explained.html) ·
[WhenFresh](https://www.whenfresh.com/service/uk-home-mover-alerts/) ·
[Realtor.com via StockTitan](https://www.stocktitan.net/news/NWS/new-study-from-realtor-com-finds-movers-spend-more-than-17-000-on-gy5zof3ikizg.html)

**Operational constraints**
[TechRadar](https://www.techradar.com/computing/wi-fi-broadband/how-long-does-it-take-to-get-broadband-installed) ·
[thinkbroadband](https://www.thinkbroadband.com/guides/broadband-guide-for-moving-home) ·
[Confused.com](https://www.confused.com/broadband/guides/broadband-and-moving-house) ·
[Citizens Advice via Yorkshire Post](https://www.pressreader.com/uk/yorkshire-post/20170901/281530816162527) ·
[Switchity](https://switchity.co.uk/broadband-guides/switching-when-moving-house/) ·
[Ofgem, moving home](https://www.ofgem.gov.uk/get-energy-if-you-are-moving-home-or-business-premises) ·
[Energy Saving Trust](https://energysavingtrust.org.uk/moving-house-energy-checklist/) ·
[The Energy Shop](https://www.theenergyshop.com/guides/moving-home-energy-guide) ·
[Pure Magazine](https://puremagazine.co.uk/council-tax-moving-house/) ·
[Best London Removals](https://bestlondonremovals.co.uk/council-tax-moving/) ·
[hellobills](https://hellobills.co.uk/council-tax/council-tax-when-moving-house/) ·
[nidirect](https://nidirect.gov.uk/articles/moving-to-your-new-home)

**Checklists, the task universe**
[Welwyn Hatfield](https://www.welhat.gov.uk/tenants/tenant-handbook/2) ·
[Chesterfield](https://chesterfield.gov.uk/media/yhthugwu/moving-home-checklist.pdf) ·
[Haringey](https://www.haringey.gov.uk/sites/default/files/2024-01/moving_home_checklist.pdf) ·
[Movesmith](https://movesmith.uk/guides/change-of-address-checklist) ·
[Apartment Checklist UK](https://apartment-checklist.com/uk/articles/moving-house-checklist.html) ·
[Property Passport UK](https://www.propertypassport.uk/guides/moving-house-checklist-uk) ·
[West Suffolk](https://www.westsuffolk.gov.uk/doit/moving.cfm)

**Behavioural evidence**
[Ofgem Behavioural Insights Unit](https://www.ofgem.gov.uk/sites/default/files/docs/2019/09/collective_switch_slides_for_publication.pdf) ·
[Energies, MDPI](https://mdpi.com/1996-1073/13/19/5179/htm) ·
[Energy Policy RCT](https://www.sciencedirect.com/science/article/abs/pii/S221480431830452X) ·
[Ofgem tariff choices, 2024](https://www.ofgem.gov.uk/research/understanding-consumers-energy-tariff-choices-research-report)

**AI trust evidence**
[ACI Worldwide and YouGov](https://www.businesswire.com/news/home/20260628382944/en/Six-in-Ten-UK-Consumers-Would-Stop-Using-an-AI-Shopping-Agent-After-One-Mistake-ACI-Survey-Finds) ·
[Accenture](https://www.accenture.com/us-en/insights/consulting/talk-my-ai-agent) ·
[Quad and Harris Poll](https://www.quad.com/newsroom/americans-say-they-would-lose-trust-in-ai-shopping-if-results-were-sponsored) ·
[Klaviyo](https://www.klaviyo.com/solutions/ai/consumer-trust-in-ai)

**Qualitative, mover voices**
[Mumsnet, tips](https://www.mumsnet.com/talk/_chat/4944404-moving-house-any-good-tips) ·
[Mumsnet, essentials box](https://www.mumsnet.com/talk/property/4325021-What-to-include-in-essentials-box-on-moving-day) ·
[Mumsnet, moving day](https://www.mumsnet.com/talk/property/4604966-is-there-a-moving-housemoving-day-tips-thread) ·
[Mumsnet, with children](https://www.mumsnet.com/articles/moving-house-essential-checklist) ·
[Lauren Kate Brook](https://laurenkatebrook.substack.com/p/we-bought-a-house-and-it-was-really) ·
[Rachel Wanders](https://rachelwanders.substack.com/p/notes-from-the-unsettled-in-between) ·
[Amblus](https://amblus.substack.com/p/landing-with-a-thud/comments) ·
[The Undefined](https://theundefined.substack.com/p/there-is-no-lesson-here) ·
[The Sentimental Wardrobe](https://livpurvis.substack.com/p/the-end-of-a-chapter)
