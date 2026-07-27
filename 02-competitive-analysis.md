# Deliverable 2: Competitive Analysis
### Just Move In · Product Discovery & Design Exercise
**Jeanne Piffaut · July 2026**

Wiki home: [`docs/wiki/00-INDEX.md`](docs/wiki/00-INDEX.md). Notion skim: [`docs/CASE-STUDY.md`](docs/CASE-STUDY.md).

---

## 0. How to read this

Same structure as Deliverable 1. Every competitive question is answered with the **finding**, what it means **technically**, what it means for the **customer experience**, and the **source**. Each row also carries a **research link** back to the Q numbers in Deliverable 1, so the two documents stack rather than repeat.

| § | Contents |
|---|---|
| 1 | The landscape map, and who is actually a competitor |
| 2 | Category A: mover concierge and home setup |
| 3 | Category B: address change utilities |
| 4 | Category C: comparison sites |
| 5 | Category D: AI bill management |
| 6 | Category E: general purpose AI agents and voice assistants |
| 7 | Category F: agent infrastructure, our suppliers not our rivals |
| 8 | Coverage matrix, where everyone stops |
| 9 | **The problem to resolve** |
| 10 | Where the opening is, and what would make us lose |
| 11 | **Carry forward summary** |
| 12 | Sources |

**Method note.** Desk research across company sites, product documentation, trade press and independent benchmark aggregations, completed in the same half day box. I have not signed up to competitor products end to end, which is the obvious gap: a real teardown of Homebox, SlothMove and Nous as a customer would take a day and would sharpen §8 considerably. Where a claim rests on a company's own marketing rather than independent verification, I have said so, because in this category the vendor claims and the field results diverge sharply (see §7).

---

## 1. The landscape map

Nobody competes with the whole job. Six categories each own a slice, and the slices do not overlap in the way you would expect.

| Category | Players | What slice they own | Do they know you are moving? | Do they execute, or advise? |
|---|---|---|---|---|
| **A. Mover concierge / home setup** | Just Move In, Homebox, The Bunch, Updater (US) | The commercial setup, via agent referral | **Yes**, from partner data | Execute, mostly by human |
| **B. Address change utilities** | SlothMove, Moveinout, Royal Mail Redirection | Notifications only | Yes, you tell them | Execute, no advice |
| **C. Comparison sites** | Uswitch, MoneySuperMarket, Compare the Market, Confused | Price discovery, one vertical at a time | **No** | Advise, hand off to the supplier |
| **D. AI bill management** | Nous.co | Ongoing bill monitoring and switching | **No** | Execute, with user confirm |
| **E. General AI agents** | ChatGPT agent, Alexa+, Gemini, Siri | General task execution | No | Attempt to execute, unreliably |
| **F. Agent infrastructure** | Sierra, Decagon, Parloa, Retell, Fin | The voice and agent layer itself | Not applicable | **Suppliers, not competitors** |

**The important structural observation.** Only Category A knows a move is happening before the mover tells anyone. That trigger, sourced from letting agent and property partner data, is the single asset that comparison sites and general AI agents structurally cannot replicate. It is also the asset that Deliverable 1 identified as the activation moment (Q3, Q23). **Our moat is a data trigger, not a model.**

---

## 2. Category A: mover concierge and home setup

The direct competition. Same channel, same customer, same moment.

| # | Question | Finding | Technical implication | Customer implication | Research link | Source |
|---|---|---|---|---|---|---|
| C1 | Who else runs the exact JMI model? | **Homebox.** Same B2B2C route through letting agents, landlords and Build to Rent operators. Their system automatically contacts the tenant on receipt of a move in or move out, and offers either self serve deals or a **free Home Setup Consultation**. They state plainly that they make money by switching energy suppliers and setting tenants up with leading suppliers. | The move in and move out event feed from partners is table stakes, not a differentiator. Both of us have it. The differentiation has to sit in what happens **after** the trigger fires: orchestration, follow through, and coverage. | The mover cannot tell us apart at first contact. Both arrive unsolicited, referred by the agent, offering a free consultation. Whoever earns permission faster in the first screen wins the relationship. | Q19, Q22 | [Homebox landlords](https://www.homebox.co.uk/business/landlords), [Homebox BTR](https://www.homebox.co.uk/business/build-to-rent) |
| C2 | What is Homebox's actual wedge? | **Bundling.** One monthly payment covering energy, water, broadband, TV licence, aimed at house shares, students and BTR. They also let agents earn commission via a referral programme instead of offering bills included. | Bundling is a billing and collections product, not an orchestration product. It requires payment infrastructure, credit risk and reconciliation. It is a different technical bet from ours. | Bundling solves *budgeting anxiety*, not *admin anxiety*. It is a strong offer for shared houses where splitting bills is the pain. It does nothing for the buyer with a 104 day chain who cannot get broadband installed. **Different job, adjacent customer.** | Q2 | [Homebox](https://www.homebox.co.uk/), [Homebox bills included](https://www.homebox.co.uk/business/bills-included) |
| C3 | What does the bundling model cost in trust? | The Bunch, a comparable bundler, carries public complaints about billing accuracy: estimated data carried over from a previous billing company, historic usage apportioned across housemates, and a formal complaint running months. | Bundling puts us between the customer and the supplier on **billing**, which means we inherit every metering and estimation error as a customer service liability. This is a large hidden operational cost. | Given the one mistake and out finding, inserting ourselves into the billing relationship multiplies the surface where a single error destroys trust. **A strong argument for orchestrating the setup and staying out of the invoice.** | Q9 | [Bunch reviews](https://ca.trustpilot.com/review/the-bunch.co.uk) |
| C4 | Is the market consolidating? | Yes. **Monadd was acquired by Bunch in January 2026** and is no longer available. Updater acquired Bridgevine to deepen its subscription services reach. | Consolidation usually follows a realisation that the integration rails are the expensive part and are worth more combined. Expect partner exclusivity to tighten. | For movers, fewer independent options and more bundled defaults. For us, the window to establish the agentic experience is narrowing while everyone is still building forms. | Q2 | [Moveinout](https://www.moveinout.co.uk/blog/slothmove-alternative), [The American Genius](https://theamericangenius.com/housing/real-estate-tech/moving-just-got-a-lot-easier-with-this-nar-invested-app-updater/) |
| C5 | What does the mature version of this look like? | **Updater**, the US analogue. Founded 2011, failed selling direct to movers, then pivoted in 2013 to selling through real estate brokerages. Reached roughly 5% of all US moves. Raised **$215M** from Vista Credit Partners. Invite only, co branded to the agent, integrated into transaction management software so the invitation fires at the right moment. Charges brokerages a subscription. Movers use it free. | **The most important technical lesson in this document:** Updater's core investment is integration with transaction management software so the invite lands at the right moment. That is Q3 and Q23 solved by plumbing rather than by UX. It validates prioritising the exchange webhook above almost everything else. | Updater's own framing is a "digital hub". The mover visits a dashboard and completes tasks. **That is the ceiling of the current category, and it is a passive model.** It waits to be opened. Nothing reaches out on moving day. Nothing absorbs a date change. That passivity is the gap. | Q3, Q16, Q23 | [Inman 2014](https://www.inman.com/2014/09/22/app-streamlines-and-brands-the-change-of-address-process-for-your-clients/), [Inman 2018](https://www.inman.com/2018/11/04/moving-concierge-updater-expands-to-work-with-more-brokerages/), [Built In NYC](https://www.builtinnyc.com/articles/updater-raises-215m-home-moving-app), [Time](https://time.com/3626367/updater-real-estate-startup/) |
| C6 | Does direct to consumer work in this category? | **No, and Updater proved it expensively.** They marketed to individual movers from 2011 and failed to gain traction, then succeeded only after switching to the brokerage channel in 2013. | Build for the partner integration first. A consumer acquisition funnel is not a viable primary channel and should not drive the architecture. | This reframes the sceptical first contact from a weakness into the only viable route. The mover will always arrive referred. The design problem is converting a referred sceptic, not attracting a searcher. | Q22 | [Time](https://time.com/3626367/updater-real-estate-startup/) |

**Category A summary.** The channel is proven and contested. Homebox has our exact model in the rental segment with a bundling wedge. Updater has the mature version and it is a passive hub. **Nobody in this category is proactive, date resilient, or present on moving day.**

---

## 3. Category B: address change utilities

| # | Question | Finding | Technical implication | Customer implication | Research link | Source |
|---|---|---|---|---|---|---|
| C7 | What does SlothMove actually do? | A single form that notifies multiple organisations under a signed **Letter of Authority**. Around £30 to £35. Nine provider categories. Over 75,000 users since 2019. Explicitly positioned against Royal Mail Redirection, which costs £41.50 to £87 and only forwards post rather than updating anything at source. | **The Letter of Authority is the key mechanism and we should study it closely.** It is the legal instrument that lets a third party act on the mover's behalf with organisations that have no API. It is the practical answer to Tier 2 integrations in Deliverable 1, and it is proven at scale in the UK. Notifications are held until the LoA is signed, which is a real funnel step to design around. | The customer signs one document and gets a batch of notifications. Clean, cheap, comprehensible. **It also converts consent from an implicit checkbox into an explicit, legible act**, which given the trust findings is a feature rather than a friction. | Q2, Q9, Q10 | [SlothMove](https://slothmove.com/), [SlothMove how it works](https://slothmove.com/how-it-works/) |
| C8 | Where does SlothMove stop? | Coverage gaps and verification gaps. Nine categories leaves out banks, HMRC, opticians and vets by third party account. Reviews report categories working (DVLA, electoral roll, NHS) while others silently did not land, with one reviewer noting an update that did not reach the NHS Spine. Another says they cannot tell whether the change went through. | **The lesson is confirmation, not coverage.** A fire and forget notification with no receipt from the destination organisation produces exactly this: the customer cannot verify, so the value is unprovable. Any Tier 2 integration needs a status back or a documented best effort statement. Where no confirmation is possible, say so explicitly rather than showing a green tick. | The unresolvable anxiety of the move is "did that actually happen?" A service that removes the task but not the doubt has only done half the job. **A green tick that might be false is worse than an honest "sent, no confirmation available".** | Q1, Q9, Q17 | [SlothMove Trustpilot](https://uk.trustpilot.com/review/slothmove.com) |
| C9 | Is any of this defensible? | Not obviously. Every underlying update is free to do directly: DVLA and HMRC at gov.uk, banks in their own apps. SlothMove sells time, not access. | If the value is purely time saved on free actions, the price ceiling is low and the product is copyable. **Defensibility has to come from the timing trigger and the commercial panel, neither of which SlothMove has.** | For the mover this is a cheap point solution bought after they have already realised the problem. It is bought reactively. We arrive before the mover knows what they need, which is a better position if we use it well and an intrusive one if we do not. | Q22, Q23 | [Moveinout](https://www.moveinout.co.uk/blog/slothmove-alternative) |

**Category B summary.** SlothMove has solved the legal and operational mechanism for mass notification, cheaply, and has proven UK demand. It has no commercial layer, no move date awareness, no lead time management, no post move presence and, critically, **no confirmation loop.** The LoA pattern is the single most directly reusable idea in the competitive set.

---

## 4. Category C: comparison sites

| # | Question | Finding | Technical implication | Customer implication | Research link | Source |
|---|---|---|---|---|---|---|
| C10 | What do comparison sites do well? | Breadth of panel, genuine price discovery, and in energy an accreditation regime through the Ofgem Confidence Code. They are the default mental model for "find me a cheaper deal" in the UK. | Their quote APIs and panel relationships are the same rails we need. In several verticals they are a potential supplier rather than only a rival. Worth scoping a quote aggregation partnership rather than assuming we build every integration. | Familiarity is their asset. Movers already know what a comparison result looks like, which means our single recommendation format has to justify itself immediately or it reads as a narrower, less trustworthy comparison site. | Q8, Q11 | [The Energy Shop on the Confidence Code](https://www.theenergyshop.com/guides/moving-home-energy-guide) |
| C11 | Where do they structurally fail the mover? | **Three ways.** They are single vertical, so a mover repeats the whole exercise four times. They are date blind, with no concept of a move date, a lead time or a dependency. And they are optimised for choice, which the Ofgem trials show suppresses action: three or more options converted at 2.4% to 13.4% against 14.0% to 29.5% for a single offer. | Nothing to build here, but everything to avoid. **A comparison table is not a neutral design choice, it is a measurable conversion penalty.** Build the recommendation service to return one pick and collapse the rest. | The mover at t minus 14 has four decisions, no expertise and no time. A comparison site hands them a research project. That is precisely the gap the human setup call fills, and it is why the call gets five star reviews while the comparison site does not. | Q7, Q8 | [Energies, MDPI](https://mdpi.com/1996-1073/13/19/5179/htm), [Ofgem BIU](https://www.ofgem.gov.uk/sites/default/files/docs/2019/09/collective_switch_slides_for_publication.pdf) |
| C12 | What about their commercial model? | Commission funded, with limited salience of that fact at the point of choice. Panels are not always whole of market, and movers do notice: one JMI reviewer spotted the absence of an Octopus Energy deal unprompted. | Commission metadata as a required catalogue field (Deliverable 1, Q11) is the concrete implementation of this differentiation. Panel gaps should be exposed in the data model rather than hidden. | **This is the clearest available differentiation and it is cheap to execute.** 75% of consumers say paid influence reduces their trust in an AI recommendation. Comparison sites cannot easily adopt disclosure without undermining their own model. We can, and we should do it loudly. | Q11, Q17 | [Quad and Harris Poll](https://www.quad.com/newsroom/americans-say-they-would-lose-trust-in-ai-shopping-if-results-were-sponsored), [JMI Trustpilot p.5](https://www.trustpilot.com/review/justmovein.com?page=5) |

---

## 5. Category D: AI bill management

| # | Question | Finding | Technical implication | Customer implication | Research link | Source |
|---|---|---|---|---|---|---|
| C13 | Who is closest to the AI version of this? | **Nous.co.** A UK bill management platform using generative AI to categorise and summarise bills, monitor energy, broadband and mobile contracts, and handle the switching admin while leaving the final decision to the user. Claims average energy savings of £126 to £141 and up to £1,000 a year across categories. Alerts via WhatsApp. | Their architecture is the one to study: continuous monitoring plus AI extraction plus a human confirm gate. It is a direct real world implementation of the delegation dial from Deliverable 1, running in the UK market today. | This validates the core bet. A UK consumer product already asks people to hand over bill data to an AI that switches on their behalf, and it has traction. **The behaviour we are designing for is not hypothetical.** | Q10, Q11 | [Nous blog](https://www.nous.co/blog/nous-launches-new-ai-assistant-to-make-sense-of-household-bills), [TechCrunch](https://techcrunch.com/2023/07/20/what-happened-when-nous-co-hooked-up-generative-ai-to-its-users-household-bills) |
| C14 | What is their most transferable feature? | **Inbox connection**, where users forward bills or connect their email so documents arrive automatically, and the assistant flags issues. Nous specifically claims it can spot when a supplier sends an estimated bill rather than a final one. | Email ingestion plus document extraction is a well trodden path with a clear payoff. The estimated bill detector is directly relevant to us: Deliverable 1 lists "verify the first bill uses actual readings" as a t plus 14 must do that movers reliably forget. | This is the Connect Email card in the starter Figma, and Nous shows what earns it. **Nobody connects their inbox to a promise. They connect it to a demonstrated catch.** Ask for it after we have found something, not before. | Q9, Q25, matrix t+14 | [Nous blog](https://www.nous.co/blog/nous-launches-new-ai-assistant-to-make-sense-of-household-bills) |
| C15 | Where does Nous stop? | It is **move blind**. It optimises the steady state of a household that already exists. There is no move date, no lead time, no council or water notification, no removals, no moving day, and no concept of the six week window where all the decisions are forced at once. | The two systems are complementary rather than competing. A move is the acquisition event; ongoing bill management is the retention product. **This is the strongest external evidence for the renewal loop flagged as t plus 11 months in Deliverable 1.** | Nous serves the settled household. We serve the transition, and then have the right to serve the settled household afterwards. Whoever owns the move owns the customer before Nous ever meets them. | Q20, Q25 | [Nous review coverage](https://www.northamptonchron.co.uk/recommended/nous-billswitching-energy-broadband-savings-ai-5607984) |

---

## 6. Category E: general purpose AI agents and voice assistants

The category most likely to be raised as an existential threat in a stakeholder meeting. The evidence says it is not, yet, and the reasons are specific.

| # | Question | Finding | Technical implication | Customer implication | Research link | Source |
|---|---|---|---|---|---|---|
| C16 | Can ChatGPT agent just do this? | Not reliably. The underlying Computer Using Agent scores **38.1% on OSWorld** and 58.1% on WebArena. The standalone Operator product was shut down in August 2025 partly because of reliability gaps on exactly our use case: **complex JavaScript checkout flows, CAPTCHAs and session management**. OpenAI published no success rates for web navigation or form completion. | **This is the single strongest argument for partner API rails over screen scraping.** A general agent driving a browser at 38% task success is unusable for irreversible financial actions. Our Tier 1 API integrations are not merely more elegant, they are the only approach that clears the reliability bar the trust data demands. | Movers will not use a general agent for this, and if they try it once and it fails, they will not try again given the one mistake finding. Our claim is not "we have AI", it is "we have the rails that make AI trustworthy here". | Q2, Q9 | [Presenc AI tracker](https://presenc.ai/research/openai-operator-update-tracker-2026), [Wikipedia](https://en.wikipedia.org/wiki/OpenAI_Operator), [UC Strategies](https://ucstrategies.com/news/openai-operator-specs-pricing-real-world-performance-guide-2026/) |
| C17 | What are the other constraints? | Agent mode is paid only, capped at roughly 40 agent messages a month on Plus and 400 on Pro, with tasks running 5 to 30 minutes. It pauses for confirmation before consequential actions. OpenAI explicitly flags **prompt injection** as a live risk for agentic systems on the open web. | Volume caps and latency rule it out as consumer infrastructure for a 30 task move. Prompt injection is a genuine security consideration for any design where our agent reads third party web content, and should be an explicit guardrail in the PRD. | The mover would spend a meaningful share of a monthly allowance on one move, waiting half an hour per task, confirming each one. **That is worse than the phone call it replaces.** | Q9, Q10 | [OpenAI ChatGPT agent](https://openai.com/index/introducing-chatgpt-agent/), [Agensi](https://www.agensi.io/learn/chatgpt-agent-mode) |
| C18 | What about voice assistants? | Alexa+ launched to all US users in February 2026 with agentic integrations including Uber, Ticketmaster and OpenTable, free for Prime or $19.99 a month. Gemini replaced Google Assistant. Siri was rebuilt with Gemini underneath at WWDC 2026. But the agentic capability runs across **select partner apps with user review before completion**, and the assistants remain ecosystem bound. | The commerce integrations are **curated, narrow and negotiated one by one**. There is no UK council, water company or Openreach integration in any of them, and no plausible route to one. The long tail of UK move admin is not a market any assistant platform will build for. | Voice assistants have normalised talking to a machine to get something done, which helps us. They have not touched, and will not soon touch, the specific job. **Their real contribution is user education, not competition.** | Q6, Q12 | [The Robowire](https://therobowire.com/voice-assistant-comparison-alexa-google-siri-2026/), [Dual Media](https://www.dualmedia.com/mobile-ai-assistant-2026/), [Developments Today](https://developmentstoday.com/ai-robotics/apple-unveils-siri-ai-gemini-integration-wwdc-2026) |

---

## 7. Category F: agent infrastructure, our suppliers not our rivals

Sierra, Decagon, Parloa, Retell and Fin sell the layer we would build on. Reading them as competitors is a category error. Reading their **benchmarks** is essential, because they tell us what is actually achievable.

| # | Question | Finding | Technical implication | Customer implication | Research link | Source |
|---|---|---|---|---|---|---|
| C19 | Is the voice AI shift real? | Yes, and it is fast. Voice AI reached **19% of inbound contact centre volume in 2026, against 6% in 2024**, with a forecast of 33% to 37% by 2027. The market has capital behind it: Sierra at $150M ARR seven quarters after launch, Decagon at a $4.5B valuation, Parloa raising €310M. | The infrastructure to build a voice agent is now buyable rather than buildable. Time to a working voice rail is weeks, not quarters. **This makes the Day 0 voice moment a realistic near term bet rather than a moonshot.** | The customer is being trained on voice agents in banking and telco right now. By the time we ship, talking to a machine to sort a bill will not be novel. | Q6 | [Digital Applied statistics](https://www.digitalapplied.com/blog/customer-service-ai-agent-statistics-2026-data), [Dynamic Business](https://dynamicbusiness.com/featured/tech-tuesday/tech-tuesday-best-autonomous-customer-service-agents.html) |
| C20 | What resolution rate should we actually plan for? | **Far lower than the marketing.** Vendors advertise 67% to 86%. Production tells another story: Intercom's own Fin case studies cluster at 42% to 50%, an independent 500 ticket test landed at 38%, and Zendesk's enterprise median across all CX programmes is **41.2%** with a top quartile of 58.7%. Independent framing puts realistic 2026 ranges at 30% to 50% for early deployments and 70% to 85% only for deeply integrated, action taking agents on **well scoped** use cases. | Plan for a genuine human handoff on roughly half of interactions at launch. Staffing does not fall off a cliff, and the business case should not assume it does. The 70% to 85% band is reachable only through deep integration on narrow scopes, which is an argument for **shipping a small number of tasks brilliantly rather than all thirty adequately**. | Half of movers will still touch a human early on. That is fine, and it protects the named accountability mechanism from Deliverable 1. **Design the handoff as a feature, not a failure state.** | Q13, Q17 | [Superframeworks](https://superframeworks.com/articles/best-ai-customer-support-tools), [Digital Applied](https://www.digitalapplied.com/blog/ai-customer-support-statistics-2026-adoption-roi-data), [Lorikeet](https://www.lorikeetcx.ai/articles/resolution-rate-ai-customer-support-benchmarks-2026) |
| C21 | Which use cases does voice AI handle well, and is ours one of them? | **Ours is the hard kind.** Banking and telco lead adoption because password resets, balances and outages map cleanly to scoped voice intents. **Healthcare and travel lag, because emotional handling, regulated topics and edge case complexity remain hard for voice models.** | A home move is regulated (energy, insurance, FCA adjacent), emotionally loaded, and dense with edge cases: chains, leasehold, prepayment meters, vulnerability, short notice. It resembles the lagging group, not the leading one. **Scope the voice agent tightly to the intents that genuinely are simple**, with meter reading capture on Day 0 as the obvious first one. | Do not promise a voice agent that handles the whole move. Promise one that handles the specific things a mover cannot do on a screen at that moment, and hands over cleanly for everything else. | Q6, Q9 | [Digital Applied statistics](https://www.digitalapplied.com/blog/customer-service-ai-agent-statistics-2026-data) |
| C22 | Is there a cautionary tale? | Yes. **Klarna**, after publicly claiming its AI did the work of 700 agents, rehired humans in 2025 because AI only support produced lower quality. The independent guidance is blunt: never ship an AI agent without a clean human handoff path. | Build the handoff path in the first release, not the second. Escalation triggers should include distress language, repeated failure, complaint intent and the vulnerability flag from Q27. | The Klarna reversal is the exact risk for JMI, whose entire brand equity currently sits in named humans. **Removing the humans to prove the AI works would destroy the asset we are trying to scale.** | Q13, Q27 | [Superframeworks](https://superframeworks.com/articles/best-ai-customer-support-tools) |

---

## 8. Coverage matrix: where everyone stops

Reading the whole landscape against the four phases and the core capabilities from Deliverable 1.

| Capability | JMI today | Homebox | SlothMove | Comparison sites | Nous | ChatGPT agent | Voice assistants |
|---|---|---|---|---|---|---|---|
| Knows a move is happening before you tell it | **Yes** | **Yes** | No | No | No | No | No |
| Notifies councils, water, TV licence | Yes | Partial | **Yes** | No | No | Unreliably | No |
| Commercial setup, energy, broadband, insurance | **Yes** | Yes | No | Advice only | Yes, steady state | Unreliably | Narrow partners |
| One recommendation rather than a list | **Yes**, by human | Partial | Not applicable | **No, by design** | Yes | Varies | Varies |
| Manages lead times and dependencies | Partly, by human | No | No | No | No | No | No |
| Survives a move date change | Partly, by human | No | No | Not applicable | Not applicable | No | No |
| Confirms the task actually landed | Partly | Unknown | **No** | No | Yes, for bills | No | No |
| Present on moving day, no broadband | **No** | No | No | No | No | No | No |
| Present in the first two weeks | Partly | No | No | No | Not move aware | No | No |
| Ongoing renewal loop | Partly | Via bundle | No | Re marketing | **Yes** | No | No |
| Commission disclosed at point of choice | No | No | Not applicable | **No** | Unclear | Not applicable | Not applicable |
| Accessible to a disabled or novice mover | **Yes**, by human | By human | Self serve only | Self serve only | Self serve only | No | Partly |

**Four cells are empty across the entire market.** Nobody manages lead times and dependencies. Nobody survives a date change. Nobody is present on moving day. Nobody discloses commission at the point of choice. Those four are the product.

---

## 9. The problem to resolve

Stated plainly, because everything downstream depends on it.

### The research finding

A UK home move is a **six week, thirty counterparty, date unstable process** in which the mover has maximum need and minimum capacity at exactly the same moments. The market has solved fragments of it. **Comparison sites solve price but are date blind and choice overloaded. Address change services solve notification but cannot confirm delivery and carry no commercial layer. Bundlers solve budgeting but inherit billing liability. General AI agents can attempt anything at roughly 38% reliability, which is unusable for irreversible actions. And the mover concierge category, including us, solves the commercial setup brilliantly through a human, at a scheduled point in time, for about six of the thirty items.**

Just Move In's five star reviews are almost entirely about individuals: 35 of 39 in the 2026 sample name a specific Move Specialist. The best of those experiences are multi touch, proactive and resilient when the date slips. **The problem is that this excellence is a property of individual people, not of the system, so it varies by whoever answers the phone and cannot scale past headcount.**

### The problem statement

> **How might we make the best version of the home setup call the guaranteed minimum for every mover, extend it from six items to thirty and from one call to six weeks, and deliver it through a machine that a referred sceptic will trust, including on the one day they have no broadband and one free hand?**

### The four sub problems, in priority order

| # | Sub problem | Why it is unsolved | Success looks like |
|---|---|---|---|
| **P1** | **The date moves and everything breaks** | 37% of pre exchange moves never happen, and no competitor's system has a concept of a mutable move date | A date change is one tap, the plan redraws itself, nothing is re entered, and nothing silently fails |
| **P2** | **Nobody is there on moving day** | It is the moment of maximum need and minimum access. Every competitor requires a screen and a connection | Meter readings captured and submitted by voice in under two minutes, with no app open |
| **P3** | **Excellence is a person, not a system** | Follow through varies by specialist. The market's mature player, Updater, is a passive hub that waits to be opened | Every mover gets the proactive multi touch experience that today's best specialists give some movers |
| **P4** | **Trust is the ceiling, not capability** | 19% of UK adults trust AI for purchase decisions against 55% for a human expert, and 60% quit after one mistake | Graduated autonomy, disclosed commission, an audit log, a named human owner, and an honest "sent, not confirmed" instead of a false green tick |

---

## 10. Where the opening is, and what would make us lose

### The opening

Three assets combine into a position nobody else can occupy.

**1. The trigger.** Partner data tells us a move is happening before the mover has told anyone. Comparison sites, Nous and every general agent are structurally blind to this. Homebox and Updater have it, and both waste it on a passive dashboard.

**2. The rails.** Tier 1 API panel relationships plus a Letter of Authority mechanism for Tier 2 gives reliable execution where a general agent manages 38%. This is where the money and the time go, and it is the actual moat.

**3. The permission.** Because we arrive through the agent and the service is free to the mover, we get one shot at a relationship rather than a transaction. Updater proved direct to consumer does not work here, which means this channel is the whole game.

**Layered on top, four unoccupied capabilities:** dependency and lead time management, date change resilience, moving day presence, and commission disclosure.

### What would make us lose

| Risk | Why it is real | Mitigation |
|---|---|---|
| We remove the humans to prove the AI works | Klarna did exactly this and reversed. Our brand equity is 35 of 39 named specialists | Human handoff in v1. Plan for roughly 50% resolution at launch, not 85% |
| We build a chatbot on top of the existing funnel | Every competitor is heading for the same generic assistant. It differentiates nothing and inherits all the trust risk | Lead with the rails and the trigger. The conversation is the surface, not the product |
| We over promise on voice | Our use case resembles the lagging voice categories, not banking and telco | Scope voice tightly to Day 0 and to explanation. Do not attempt the whole move by voice |
| Bundling looks like an easy revenue line | It puts us inside the billing relationship and inherits every metering error, as Bunch's reviews show | Orchestrate the setup, stay out of the invoice |
| Partner exclusivity closes the channel | Consolidation is already happening, Monadd into Bunch in January 2026 | Speed. The agentic experience is the reason a partner picks us over Homebox |

---

## 11. Carry forward summary

| # | Carry forward | Key takeaways | Evidence |
|---|---|---|---|
| 1 | **The moat is the trigger and the rails, not the model** | · Only mover concierge players know a move is happening in advance<br>· Updater's core investment was transaction software integration, not UX<br>· A general agent at 38% OSWorld cannot do irreversible financial actions<br>· Prioritise the exchange webhook above almost everything | C1, C5, C16 |
| 2 | **Steal the Letter of Authority pattern** | · Proven UK mechanism for third party notification at scale, 75,000+ users<br>· Makes consent explicit and legible, which the trust data rewards<br>· It is the practical implementation of Tier 2 integrations<br>· Design the signing step as a funnel stage, since notifications are held until it lands | C7 |
| 3 | **Confirmation beats coverage** | · SlothMove's weakness is unverifiable delivery, not narrow scope<br>· Every Tier 2 notification needs a status back or an honest disclaimer<br>· A green tick that might be false is worse than "sent, no confirmation available"<br>· The mover's real anxiety is "did that actually happen?" | C8 |
| 4 | **Do not build a comparison table** | · Three or more options convert at 2.4 to 13.4%, a single offer at 14.0 to 29.5%<br>· Comparison sites are single vertical and date blind by construction<br>· One pick, one reason, alternatives collapsed<br>· This is measurable conversion, not aesthetic preference | C11 |
| 5 | **Disclose commission loudly** | · 75% trust an AI less when recommendations are paid for<br>· Comparison sites structurally cannot copy this without damaging themselves<br>· Required catalogue field, rendered by the component, not a design choice<br>· Cheapest available differentiation in the entire competitive set | C12 |
| 6 | **Copy Nous on the inbox, not the timing** | · Inbox connection plus bill extraction is proven in the UK market today<br>· Their estimated bill detector maps to a t plus 14 task movers always forget<br>· Ask for inbox access after a demonstrated catch, never before<br>· Nous is move blind, so they are the retention analogue and not the rival | C13, C14, C15 |
| 7 | **Own the four empty cells** | · Nobody manages lead times and dependencies<br>· Nobody survives a move date change<br>· Nobody is present on moving day<br>· Nobody discloses commission at the point of choice | §8 matrix |
| 8 | **Buy the voice layer, scope it tightly** | · Voice AI hit 19% of inbound contact volume in 2026, from 6% in 2024<br>· Infrastructure is buyable, so time to a working rail is weeks<br>· Our use case resembles healthcare and travel, the lagging categories<br>· Day 0 meter capture is the right first voice intent | C19, C21 |
| 9 | **Plan for 50% resolution, not 85%** | · Vendor claims 67 to 86%, production clusters at 38 to 50%<br>· Zendesk enterprise median is 41.2%<br>· 70 to 85% needs deep integration on narrow scope<br>· Ship a few tasks brilliantly rather than thirty adequately | C20 |
| 10 | **Keep the humans, design the handoff** | · Klarna rehired after AI only support lowered quality<br>· 35 of 39 reviews name an individual, which is the asset we are scaling<br>· Handoff in v1, with distress, repeat failure and vulnerability triggers<br>· Handoff is a feature, not a failure state | C20, C22 |

**If only three survive:** own the trigger and the rails (1), own the four empty cells (7), and keep the humans while scoping voice honestly (8 plus 10).

---

## 12. Sources

**Mover concierge and home setup**
[Homebox](https://www.homebox.co.uk/) ·
[Homebox for landlords](https://www.homebox.co.uk/business/landlords) ·
[Homebox Build to Rent](https://www.homebox.co.uk/business/build-to-rent) ·
[Homebox bills included](https://www.homebox.co.uk/business/bills-included) ·
[Bunch reviews](https://ca.trustpilot.com/review/the-bunch.co.uk) ·
[Updater, real estate](https://updater.com/solutions/real-estate) ·
[Updater raises $215M, Built In NYC](https://www.builtinnyc.com/articles/updater-raises-215m-home-moving-app) ·
[Time on Updater's pivot](https://time.com/3626367/updater-real-estate-startup/) ·
[Inman 2014](https://www.inman.com/2014/09/22/app-streamlines-and-brands-the-change-of-address-process-for-your-clients/) ·
[Inman 2018](https://www.inman.com/2018/11/04/moving-concierge-updater-expands-to-work-with-more-brokerages/) ·
[The American Genius on Bridgevine](https://theamericangenius.com/housing/real-estate-tech/moving-just-got-a-lot-easier-with-this-nar-invested-app-updater/)

**Address change**
[SlothMove](https://slothmove.com/) ·
[SlothMove how it works](https://slothmove.com/how-it-works/) ·
[SlothMove Trustpilot](https://uk.trustpilot.com/review/slothmove.com) ·
[Moveinout comparison and Monadd acquisition](https://www.moveinout.co.uk/blog/slothmove-alternative)

**Comparison and behavioural**
[Ofgem Behavioural Insights Unit](https://www.ofgem.gov.uk/sites/default/files/docs/2019/09/collective_switch_slides_for_publication.pdf) ·
[Energies, MDPI, analysis of Ofgem trials](https://mdpi.com/1996-1073/13/19/5179/htm) ·
[The Energy Shop on the Ofgem Confidence Code](https://www.theenergyshop.com/guides/moving-home-energy-guide) ·
[Quad and Harris Poll on sponsored AI results](https://www.quad.com/newsroom/americans-say-they-would-lose-trust-in-ai-shopping-if-results-were-sponsored)

**AI bill management**
[Nous AI assistant launch](https://www.nous.co/blog/nous-launches-new-ai-assistant-to-make-sense-of-household-bills) ·
[TechCrunch on Nous](https://techcrunch.com/2023/07/20/what-happened-when-nous-co-hooked-up-generative-ai-to-its-users-household-bills) ·
[Nous review coverage](https://www.northamptonchron.co.uk/recommended/nous-billswitching-energy-broadband-savings-ai-5607984)

**General purpose agents and assistants**
[OpenAI, introducing ChatGPT agent](https://openai.com/index/introducing-chatgpt-agent/) ·
[OpenAI, introducing Operator](https://openai.com/index/introducing-operator/) ·
[Presenc AI, Operator update tracker](https://presenc.ai/research/openai-operator-update-tracker-2026) ·
[Wikipedia, OpenAI Operator benchmarks](https://en.wikipedia.org/wiki/OpenAI_Operator) ·
[UC Strategies on Operator performance](https://ucstrategies.com/news/openai-operator-specs-pricing-real-world-performance-guide-2026/) ·
[Agensi, agent mode limits](https://www.agensi.io/learn/chatgpt-agent-mode) ·
[The Robowire, assistant comparison](https://therobowire.com/voice-assistant-comparison-alexa-google-siri-2026/) ·
[Dual Media, mobile AI assistants](https://www.dualmedia.com/mobile-ai-assistant-2026/) ·
[Developments Today, Siri and Gemini](https://developmentstoday.com/ai-robotics/apple-unveils-siri-ai-gemini-integration-wwdc-2026)

**Agent infrastructure benchmarks**
[Digital Applied, customer service AI agent statistics 2026](https://www.digitalapplied.com/blog/customer-service-ai-agent-statistics-2026-data) ·
[Digital Applied, adoption and ROI data](https://www.digitalapplied.com/blog/ai-customer-support-statistics-2026-adoption-roi-data) ·
[Superframeworks, real resolution rates](https://superframeworks.com/articles/best-ai-customer-support-tools) ·
[Lorikeet, 2026 resolution benchmarks](https://www.lorikeetcx.ai/articles/resolution-rate-ai-customer-support-benchmarks-2026) ·
[Fin, platform comparison](https://fin.ai/learn/ai-customer-service-agents-compared) ·
[Dynamic Business, autonomous agents market](https://dynamicbusiness.com/featured/tech-tuesday/tech-tuesday-best-autonomous-customer-service-agents.html)
