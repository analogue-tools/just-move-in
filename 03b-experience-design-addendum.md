# Deliverable 3b: Experience Design Addendum
### Trust, the two list model, and partner rails · Just Move In
**Jeanne Piffaut · July 2026**

---

## 0. What this covers

This extends §2 of the PRD. It answers six things raised after the PRD was written:

1. The **two list model**, and whether to build a second, gamified experience alongside it
2. The **transparency card**: who, what, when, where, why
3. **Trust markers and social proof**, and how to present Trustpilot data honestly
4. **Reaching a human**
5. **Anxiety mitigating resources** at each stage
6. **Partner rails**, including how affiliate links actually work commercially and legally

I have led with a recommendation rather than a menu on the gamification question, because I think there is a better answer than "build both and let people choose", and the reasoning matters more than the conclusion.

---

## 1. The two list model, and the gamification question

### 1.1 The idea, restated

Two lists at every stage. The things you **really have to do**, and the things you **could do** or could learn. Purely factual, tick box, per phase. Then, separately, a Sims style visual experience where the same checklist gets done in a playful way.

**The two list part is right and should be core.** It maps exactly onto the phase matrix in Deliverable 1, which already separates "must do" from "would be nice" at every stage. It also solves a real problem: the mover cannot tell which of the thirty items are load bearing and which are optional, and that ambiguity is a large part of what makes the list feel infinite.

### 1.2 Where I would push back

The instinct to offer a second, gamified mode as a **user choice** has three problems.

**One. A mode picker is a decision tax at the exact moment the mover has no decisions left.** At t minus 14 the mover is in admin panic with four significant purchases to make. Asking them first to choose an interface paradigm adds a decision before the decisions. The research on choice overload (Q7, Q8) applies to the product's own configuration, not only to its tariff cards.

**Two. Two front ends double design, build and QA cost, and the PRD already defers the community layer to V2 to protect the rails.** If we can afford a second interface, we can afford the local discovery layer, and that has a clearer retention case.

**Three, and this is the real objection. Gamifying mandatory financial admin is tonally dangerous.** The evidence on gamification is that it works for discretionary, repeated behaviour where the user has already opted into wanting to do more of something. It works badly for one shot, high stakes obligations. Concretely: a playful animation attached to the sentence "your council can add a £70 penalty if you notify late" reads as trivialising. For the two segments Deliverable 1 identified as valuing this service most, the disabled or vulnerable mover (Q27) and the novice who does not know what a tariff is (Q28), a game layer over an obligation they are already anxious about is likely to feel patronising rather than fun.

### 1.3 What I would do instead

**Do not map mode to user preference. Map tone to the tier of task.**

| | **Must do** | **Could do** |
|---|---|---|
| **What it contains** | Lead time critical and legally consequential items: broadband, energy, council tax, water, insurance, meter readings, redirect | Everything discretionary: neighbourhood discovery, first night kit, cleaning, plants, furniture, gym, GP registration timing, community |
| **Tone** | Deadpan. Factual. Consequence stated in numbers | Warm, visual, exploratory, browsable |
| **Ordering** | Cost of delay multiplied by lead time. Non negotiable | Whatever the mover finds interesting |
| **Interaction** | Confirm, then get out of the way | Browse, save, come back |
| **Gamification** | **None.** No streaks, no confetti on a council tax notification | **Yes.** Progress, collection, the home filling in |
| **Where the money is** | Panel commission, disclosed | Affiliate and marketplace, disclosed |
| **Serves** | The stress removal job | The belonging job (J6) |

**This is the same two lists the idea proposes, and it resolves the tonal risk without building a second product.** One system, one data model, two registers. The visual, playful, Sims like energy is not a mode you switch into, it is what the could do tier looks like everywhere it appears.

### 1.4 What the Sims idea becomes

The Sims instinct is a good one and it should survive, but as **a view, not an alternative interface.**

**The Home view.** A simple visual of your new home that fills in as things get done. Broadband confirmed and the router appears. Energy set and the lights come on. Council tax notified and the door number appears. Meter readings captured and the meter cupboard is ticked. Then the could do tier populates it further: a plant, a rug, a coffee shop pinned nearby.

Why this is worth building and a full game is not:

- It is a **progress visualisation over the existing task data**, so it costs a rendering layer rather than a second product
- It solves a real problem the research flagged: the settling phase is where movers describe the "we live here now" moment receding, and a visible, filling home is a literal answer to that
- It is naturally shareable, which is a cheap acquisition surface in a category where the referral channel is everything
- It gives the could do tier somewhere to live that is not a list, which is the point of the original idea

**What it must not do.** No timers, no streaks, no loss framing, no penalty for inaction on the must do tier. The house does not decay if you are slow. Movers are already anxious and a decaying house is a punishment mechanic aimed at people in the middle of the most stressful event in their lives.

### 1.5 Navigation: stages, not scroll

Both tiers live inside a **stage stepper** rather than a long scrolling feed. Four stages, matching the phase matrix: The Fog, The Countdown, The Day, Settling In. The mover sees where they are, what is behind them, and what is ahead.

Two reasons beyond the stated preference for slides over scrolling. It tells the mover **where they are in a process that otherwise feels formless**, which is one of the strongest emotional findings in the research. And it makes the two lists legible: each stage has its own must do and could do, so neither list is ever thirty items long.

---

## 2. The transparency card: who, what, when, where, why

Every task, must do or could do, renders through one component. This is the single most useful thing to hand an engineer because it is concrete, reusable, and it carries the trust architecture inside it.

| Field | Content | Source |
|---|---|---|
| **What** | The task in plain language. Not "Council Tax notification" but "Tell Camden you are moving out" | Task catalogue |
| **Who** | Who performs it: Jay, you, your named specialist, or the provider. Shown as an explicit badge | Task type |
| **When** | When it happens, and the deadline that matters. "We send this the day you get keys. Councils want to know within 21 days" | Move record plus rules table |
| **Where** | The organisation receiving it, named. "Camden Council, council tax team" | Rules table |
| **Why** | The consequence of not doing it, in real numbers from the cost of inaction ledger. "Camden charges council tax daily from your move in date. Late notification can add a £70 penalty" | Cost of inaction ledger |
| **Effort** | Time estimate. "5 mins" or "we do this, nothing needed from you" | Task catalogue |
| **Money** | For commercial items: the saving against the default, and what we earn. "Saves £190 a year against the deemed tariff. We earn £45 if you switch" | Catalogue commission field |
| **State** | Ready, awaiting your confirm, submitted, confirmed, or sent with no confirmation available | Task state machine |

**On the Why field.** This is the fear led narrative done honestly. Every consequence shown is sourced from the ledger in Deliverable 1: real penalty amounts, real lead times, real tariff differences. Nothing invented, no countdown timers, no artificial scarcity. If we cannot cite a real consequence, the task does not belong on the must do list.

**On the State field.** The distinction between "confirmed" and "sent, no confirmation available from this organisation" is the honesty mechanism from the competitive analysis (C8). It looks like a small copy decision and it is the load bearing one.

---

## 3. Trust markers and social proof

### 3.1 The core insight about JMI's existing trust asset

The research found that 35 of 39 reviews name a specific Move Specialist. Trust in this business already attaches to people. **So the most authentic social proof available is not a star rating, it is the people themselves.**

Concretely: rather than a generic Trustpilot badge, the offer card can carry "customer support human agent has set up 340 moves like yours." That does four things at once. It is genuine social proof. It preserves the named accountability mechanism the research says is hardest to replicate. It reassures without pretending the AI is human. And it is uniquely ours, because no comparison site has a customer support human agent.

### 3.2 The four types of trust signal, and where each belongs

| Type | Signal | Where it goes | Guardrail |
|---|---|---|---|
| **Institutional** | Trustpilot score and volume, FCA status, ICO registration, B Corp, Ofgem Confidence Code if applicable | Footer and first contact screen, where the sceptic decides whether to engage at all | Show the real number of reviews, not a curated selection |
| **Human** | Named specialist, moves completed, photo, and a direct route to them | Offer cards and the escalation path | Must be a real person who actually receives escalations |
| **Quantitative peer** | Share of comparable movers who chose this option | Offer cards, but only above a data threshold | See 3.3 |
| **Qualitative peer** | Short review excerpts from movers in a similar situation | Offer cards, one per card maximum | Attributed, dated, and never edited into a better quote |

### 3.3 Quantitative social proof, done without lying

Showing what others chose is powerful and it is easy to do dishonestly. Four rules.

**Rule 1. Compute it on everyone, not on conversions.** The denominator must be everyone who saw the option, including those who declined. A percentage computed only over people who bought is marketing, not information.

**Rule 2. Declare the sample and suppress below a threshold.** "68% of movers into two bed flats in NW1 chose this, from 214 moves" is useful. The same sentence with a sample of nine is noise dressed as evidence. Below a threshold, show nothing rather than something vague.

**Rule 3. Never show a descriptive norm that endorses the wrong behaviour.** The behavioural literature is clear that telling people most others do the undesirable thing increases the undesirable thing. If most movers procrastinate on council tax, we do not say so. Social proof is used on choices, never on compliance.

**Rule 4. Social proof and commission must appear together.** This is the one that matters most given the trust findings. If a card says "68% chose this" and we also earn commission on it, and the mover discovers the commission separately, the social proof retroactively looks like a sales device and poisons everything else on the screen. **Shown together, they read as candour. Shown apart, they read as a trick.**

### 3.4 The trust ladder

Trust is not one gate, it is a sequence, and the product should ask for things in ascending order of intimacy, each earned by having delivered something first.

| Step | What we ask for | What we have already given |
|---|---|---|
| 1 | Attention, at referral | Nothing. So the first screen must give before it asks: the full picture of what is coming, with no obligation |
| 2 | Confirmation of pre filled details | We showed we already know their move, which is a demonstration of competence |
| 3 | Answers to discovery questions | We showed the ordered plan and named the real consequences |
| 4 | A Letter of Authority | We executed nothing yet, so this is the largest single ask, and it needs the clearest explanation of scope |
| 5 | One tap on the basket | We produced recommendations with reasons and disclosed what we earn |
| 6 | **Inbox connection** | We have completed the move and caught something. Per the competitive read of Nous, nobody connects their inbox to a promise. They connect it to a demonstrated catch |

**The Connect Email card in the starter Figma sits at step 1 and belongs at step 6.** That is the single highest impact change I would make to the current design.

---

## 4. Reaching a human

Three mechanisms, all of which must exist in V1.

**Always visible.** A persistent route to a person, on every screen, never behind a chatbot that first tries to deflect. The most common way to destroy trust in an AI service is to make the human hard to reach, and given that 55% of UK adults trust a human expert against 19% for AI, hiding the human is fighting the customer's actual preference.

**Named and specific.** Not "contact support" but the named owner on the case, with their photo and their record. This is the mechanism that carries JMI's existing trust equity into the new product.

**Proactive, on triggers.** The system escalates without being asked when it detects: distress language, a task failing twice, complaint intent, a vulnerability flag, a novice flag combined with hesitation, or a move date inside 7 days with critical tasks incomplete.

**Design the handoff as a feature.** The independent benchmarks put realistic resolution at 38% to 50% early on, so roughly half of movers will touch a human. Framing that as failure produces a product that hides its own escalation path. Framing it as the design intent produces "Jay has done the first eleven things, and customer support human agent is picking up the two that need judgement", which is a better experience than either alone.

---

## 5. Anxiety mitigating resources, by stage

The research identified a distinct anxiety at each phase. Each needs a specific antidote, not general reassurance.

| Stage | The specific anxiety | The antidote | Format |
|---|---|---|---|
| **t minus 30, The Fog** | The unknown unknown. Not knowing what is on the list, and dreading that something is missing | **The full map, with explicit permission not to act.** "Here is everything. None of it is due yet. We will tell you when." | One page overview. No tasks assigned. No notifications |
| **t minus 30** | Fear the sale collapses and the work is wasted | Honesty that we are waiting too, and that nothing is sent before exchange | A single line on the overview, not a warning banner |
| **t minus 14, The Countdown** | Overwhelm, four decisions at once, no expertise | **The ordered plan plus one confirmation.** Sequence removes the burden of adjudication | The basket, one confirm |
| **t minus 14** | "What if my date moves and I have to redo this?" | A visible, one tap date change affordance, present **before** it is needed | Persistent control on the plan header |
| **t minus 14** | "Am I overpaying? Are they selling to me?" | Saving against the default, plus commission disclosed on the same card | Transparency card |
| **Moving day** | "Is my broadband actually coming?" and "have I forgotten something?" | **Two things only, by voice, then silence.** Plus a live status line on the install | Voice call or SMS. No app required |
| **Moving day** | Practical panic: where is the stopcock, where is food at 9pm | A single Day 0 card with the practical answers, cached for offline | Pre loaded before move day, works with no signal |
| **t plus 14, Settling** | "Is this bill right?" | The estimated bill check, with the actual reading we captured on Day 0 | Proactive message, not a dashboard the mover must open |
| **t plus 14** | Disorientation and lost familiarity | The could do tier: local discovery, one small suggestion at a time, never a task list | Home view, browsable, no deadlines |
| **t plus 14** | Motivation collapse once the frightening items are done | Proactive nudges on the remaining must do items, framed as closing out rather than starting up | Scheduled touchpoints on state transitions |

**The general principle.** Anxiety in this journey is nearly always caused by uncertainty about state, not by the work itself. The antidote is almost never encouragement. It is telling the mover exactly where things stand, including when the answer is "we sent it and this council does not confirm".

---

## 6. Partner rails

### 6.1 What comes in from the partner

The referral payload determines how much of the profile is pre filled and whether the activation trigger can fire automatically. This needs confirming with JMI's partner team before build, because it is the largest single dependency in the architecture.

| Field | Why it matters | Confidence |
|---|---|---|
| New address, ideally UPRN | Drives broadband availability, council rules, water region | Almost certainly available |
| Move in date or tenancy start | Base for every task offset | Likely available |
| **Exchange or contract signature event** | **The activation trigger. The single most important field** | **Unknown. Must confirm** |
| Tenancy length | Drives contract length matching, which reviewers praise specialists for | Likely for lettings, not for sales |
| Household composition | Drives energy sizing and council tax discounts | Possibly |
| Old address | Needed to close accounts and notify the old council | Sometimes |
| Consent scope and timestamp | Determines what we may legally do with all of the above | Must be explicit |

### 6.2 The three integration tiers

| Tier | Mechanism | Covers | Confirmation | Build cost |
|---|---|---|---|---|
| **Tier 1: API** | Direct panel integrations. Quote, order, status | Energy, broadband, insurance, removals | Real, from the provider | High per integration, high value |
| **Tier 2: Letter of Authority** | Signed LoA authorises us to notify on the mover's behalf. Structured file, portal submission or generated correspondence, per organisation | Councils, water, TV licence | **Often none.** Hence the `unconfirmable` state | Medium, plus an ongoing rules table |
| **Tier 3: Assisted** | Prefilled deep link. We prepare, the mover submits | DVLA, HMRC, electoral roll, GP, pet microchip | The mover confirms | Low. Deliberately last in the roadmap |

**On the Letter of Authority.** This is the mechanism to copy from SlothMove and it deserves a dedicated design pass rather than being treated as paperwork. It is proven at scale in the UK, it is the practical answer to organisations with no API, and, handled well, it converts consent from a buried checkbox into an explicit legible act, which the trust findings reward. Note the operational implication: notifications are held until the LoA is signed, so signature is a funnel step with a drop off rate that needs measuring.

**On the rules table.** Council rules vary by authority and change annually. Notification windows, penalty amounts, submission routes and confirmation availability all need to be structured data with a named owner and a maintenance cadence. **This looks free in a PRD and eats a team later.** It should be budgeted explicitly.

### 6.3 Monetisation mechanics, and how affiliate links actually work

Three revenue mechanisms, with very different properties. This matters because the could do tier is the answer to short term cashflow, and it is monetised differently from the panel.

#### Mechanism 1: Panel commission, for the must do tier

Direct commercial agreements with energy, broadband and insurance providers. We place the order through their API, they pay a fee per activated account, reconciled against our own move ID. Reliable attribution, higher rates, and the commercial relationship is directly negotiated. **This is the existing JMI model and it should stay the core.**

#### Mechanism 2: Affiliate links, for the could do tier

Since this was flagged as unfamiliar, here is the mechanism in plain terms.

**How it works.** You join an affiliate network, in the UK typically Awin, Impact, CJ or Rakuten. The network sits between you (the publisher) and the merchant. You get a tracking link containing your publisher ID. When a mover clicks it, the network records the click and sets a cookie in the mover's browser. If that mover buys within the cookie window, commonly 30 days, the merchant's checkout fires a pixel or a server to server postback to the network, the network attributes the sale to you on a last click basis, and pays a percentage after a validation period, typically 30 to 90 days to allow for returns.

**Why it is attractive for the could do tier.** Almost no build cost, no commercial negotiation, thousands of merchants available immediately, and it fits discretionary purchases like furniture, cleaning, plants, storage boxes and gym memberships. It is a plausible short term cashflow answer while the panel relationships mature.

**Four problems to design around.**

*Attribution is fragile.* Third party cookie restrictions in Safari and Firefox break a meaningful share of tracking. For anything material, ask merchants for a server to server postback rather than relying on cookies.

*Last click means you often lose.* If the mover clicks your link, then later clicks a voucher site, the voucher site takes the commission. In a category where purchases happen weeks after discovery, this is a real leak.

*Long conversion windows do not suit us.* A mover browsing sofas at t plus 14 may buy in six weeks, outside the window.

*Cookie consent is required.* Affiliate tracking cookies are not "strictly necessary" under UK GDPR and cannot be set without valid consent. That is a consent banner interaction on a screen where we are trying to build trust.

**The legal requirement, which is non negotiable.** Under CAP Code rule 2.1, marketing communications must be obviously identifiable as such, and rule 2.3 requires commercial intent to be clear where it is not obvious from context. The ASA has ruled that **the label "affiliate" alone is not sufficient**, because consumers do not reliably understand it, and that a disclaimer at the bottom of a page is unlikely to be enough. Both the merchant and the publisher are responsible under the Code.

**How this converts a compliance obligation into an asset.** We already decided to disclose panel commission at the point of choice. Applying the same component to affiliate items costs nothing extra and means every commercial item in the product carries the same honest label in the same place. Given that 75% of consumers say paid influence reduces their trust in an AI recommendation, **consistent disclosure across both tiers is more valuable than the incremental revenue from hiding it.** The wording should be plain: "We earn a commission if you buy this", not "affiliate link".

#### Mechanism 3: Partner subscription, for the B2B side

Updater charges brokerages a subscription and gives the product to movers free. JMI already has property partners. If the agentic experience becomes the reason a letting agent picks JMI over Homebox, that is a defensible subscription line that does not depend on the mover transacting at all, and it is the revenue least exposed to the disclosure question.

#### The revenue shape

| Tier | Mechanism | Timing | Reliability | Disclosure |
|---|---|---|---|---|
| Must do | Panel commission | At activation, weeks after order | High, own move ID | On the card |
| Could do | Affiliate | 30 to 90 days after purchase | Low to medium | On the card, same component |
| Could do | Direct marketplace deals | Negotiated | High | On the card |
| Partner | Subscription | Recurring | Highest | Not applicable |
| Year two | Renewal switching | T plus 11 months | Medium | On the card |

**The honest read on cashflow.** Affiliate revenue on the could do tier is real but small and slow, and it will not carry the business. Its value is that it makes the could do tier self funding rather than a pure cost, which is what lets us justify building the part of the product that drives retention. The serious money remains panel commission at the move and renewal switching at twelve months.

---

## 7. Capturing feedback inside the product

Two mechanisms, both cheap and both directly serving the brief's requirement to put this in front of customers.

**Per decision micro feedback.** A single thumbs up or down beside each recommendation and each completed task, with an optional one line reason. Not a survey, not a modal, no NPS popup mid flow. The value is that it attaches sentiment to a specific decision rather than to the session, which makes it actionable: we learn that the broadband recommendation is disliked, not that the app scored 6.

**A request board with validation and voting.** Movers submit what they wish the product did. JMI validates for duplicates and feasibility, then publishes for other movers to vote. Three benefits: a live prioritisation signal from real customers, a public demonstration that the roadmap is shaped by movers rather than by commercial partners, which supports the trust position, and a cheap acquisition surface.

**One caution on timing.** Do not ask for feedback at t minus 14 or on moving day. The mover has no capacity. Collect passively during the move and ask actively at t plus 3 and t plus 14, which is also where the NPS measurement points already sit.

---

## 8. If only one quarter existed

Ranked by evidence strength divided by build cost.

| Priority | Ship | Why |
|---|---|---|
| 1 | **The transparency card** with who, what, when, where, why, plus the honest state model | One component, carries the entire trust architecture, and it is what an engineer can start on Monday |
| 2 | **The two tier list**, must do ordered by cost of delay, could do separate and untimed | Directly implements the two list idea, costs a taxonomy rather than an interface |
| 3 | **Commission disclosure**, same component for panel and affiliate | Cheapest differentiation available, and legally required for affiliate anyway |
| 4 | **Named human, always reachable** | Carries the existing trust equity, and is a staffing decision more than a build |
| 5 | **Stage stepper navigation** | Replaces the scroll, tells the mover where they are |
| 6 | **Social proof, quantitative and human**, with the four guardrails | Real lift, but only once there is enough data to be honest with |
| 7 | **The Home view** | The Sims idea, as a progress layer over existing data rather than a second product |
| 8 | Request board and micro feedback | Valuable, but only once there are enough movers to generate signal |

**What I would explicitly not ship in that quarter:** a gamified alternative interface, streaks or rewards on must do tasks, and the inbox connection. The first two are tonally risky on mandatory admin, and the third has not yet earned the right to be asked for.
