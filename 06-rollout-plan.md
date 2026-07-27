# Rollout Plan
### Jay · agentic home setup · Just Move In
**Jeanne Piffaut · July 2026**

Part of the Jay case study. Full index in CASE-STUDY.md.

---

## 0. Three principles that shape the whole plan

**1. Fix the service before automating it.** The largest complaint theme in the negative reviews is being told something was done when it was not, and the root cause is structural: notifications go out seven days after the move date, councils take up to six weeks, and nobody can see any of it. Putting an AI on top of that does not fix it, it scales it. **Phase 0 ships no AI at all.**

**2. Start where there is nothing to lose.** The first cohort exposed to the agent should be movers who never answer the phone. They generate no revenue today, so anything the agent converts is incremental rather than cannibalised, and the worst case leaves them exactly where they already are.

**3. Tell the Move Specialists first.** They are the brand. 35 of 39 positive reviews name one of them. If they believe this is a redundancy programme they will give poor feedback during testing and the best ones will leave, which destroys the asset we are trying to scale. The internal sequence matters as much as the external one.

---

## 1. The phases

| Phase | What ships | Cohort | Duration | Commercial logic |
|---|---|---|---|---|
| **0 · Receipts** | Move record, task lifecycle states, status visibility. **No AI** | All movers, existing human service | Weeks 0 to 8 | Fixes the biggest complaint theme immediately. Value lands even if the agent slips |
| **1 · Shadow** | Agent runs in parallel on live moves, output never shown to a customer | Internal only | Weeks 6 to 12 | Zero customer risk. Buys the accuracy data the business case needs |
| **2 · The unreached** | Full agent flow, self serve | Movers who never answered the phone | Weeks 12 to 20 | **Pure upside.** These moves are worth nothing today |
| **3 · Design partner** | Agent led with human escape, full flow | One named letting agent partner, opt in | Weeks 20 to 30 | Contained blast radius. A partner who has agreed to be a test bed |
| **4 · Day zero voice** | Two voice intents, keys and meter capture | Phase 3 cohort | Weeks 30 to 38 | Highest emotional stakes, so it goes last and only on a stable base |
| **5 · Scale** | Everything, across the partner book | All partners, staged | Weeks 38+ | Only after unit economics are proven on a real cohort |

### Phase 0 · Receipts, in detail

This is the phase I would defend hardest in a planning meeting, because it looks like a delay and is not.

**Ships:** the canonical move record, the task state machine including a real `sent, no receipt` state, a status page the mover can open from an SMS link, and the seven day queue made visible with its send date.

**Why first.** It fixes 18 of 60 complaints without any model involved. It builds the exact rails the agent needs later, so none of the work is thrown away. It generates the first clean dataset of what actually happens to a task after a call, which we currently do not have. And it de-risks the programme: if the agent is delayed two quarters, the business has still materially improved.

**Success looks like:** support contacts per move down, and the first honest measurement of how many Tier 2 notifications can be confirmed at all.

### Phase 2 · Why the unreached cohort is the right first exposure

Today, a mover who never picks up produces no revenue and no complaint. That makes them the only cohort where the agent has an unambiguous baseline of zero.

It also removes the argument that will otherwise dominate every review meeting, which is whether the agent converts worse than a human. On this cohort, there is no human to compare against. Once we have conversion, attach and complaint data from a live population, the comparison against the human call in Phase 3 is an informed decision rather than a leap.

---

## 2. Gates between phases

Written before we start, so nobody negotiates them afterwards.

| Gate | Entry criteria | Exit criteria to proceed | Kill criteria: stop and reassess |
|---|---|---|---|
| **0 to 1** | Move record live, task states rendering | Status page opened by a majority of movers who receive the link. Zero incidents of a false `confirmed` | Any task shown as confirmed without a stored receipt reaching a customer |
| **1 to 2** | 500+ shadow moves processed | Agent recommendation agrees with the specialist's on a large majority of moves. **Liability resolution accuracy at or near 100%.** Data extraction errors below an agreed threshold | Any liability error in shadow, meaning wrong property or wrong person. This is the one that produces debt letters |
| **2 to 3** | Agent live on the unreached cohort | Complaint rate at or below the current human service. Attach rate meaningfully above zero. No safety incidents | Complaint rate above the current service, or any prepayment or vulnerability case mishandled |
| **3 to 4** | Design partner cohort stable | NPS at or above the human baseline. Resolution without human contact at or above 40%. Partner willing to be a reference | Design partner asks to pause, or specialist attrition rises materially |
| **4 to 5** | Voice intents live | Meter capture accuracy above an agreed threshold with read-back confirmation. Zero payment or credential requests on any call | Any voice interaction that requests credentials, or any call to a mover who opted out |

**The overall stop condition.** If at any point the agent produces a wrong-property action that reaches a supplier, the programme pauses and we do a full review before resuming. That failure mode lands on credit files, not on convenience, and it is the one the current service already produces in 9 of 60 negative reviews.

---

## 3. Testing strategy

Six layers, each answering a different question.

| Layer | Question it answers | Method | Owner | Phase |
|---|---|---|---|---|
| **Unit and integration** | Do the rails work | Standard suite. Contract tests against every partner API sandbox | Engineering | 0 |
| **Cascade regression** | Does a date change ever lose anything | Dedicated suite. Every destination type, every task state, asserting `lostOrReentered` is always zero | Engineering | 0 |
| **Golden dataset replay** | Would the agent have made the same call a good specialist made | Replay 200 historical moves through the agent, compare recommendations and notifications to what actually happened | Product and Data | 1 |
| **Shadow mode** | Does it hold up on live, messy data | Parallel run on real moves. Specialist decision is authoritative, agent output logged and scored | Product and Ops | 1 |
| **Adversarial and edge** | What breaks it | Prompt injection on any third party content the agent reads. Prepayment meters. Landlord-liable tenancies. Chains. Leasehold. Fall-throughs mid-flow. Vulnerability flags | Engineering and Compliance | 1 to 2 |
| **Accessibility audit** | Can everyone use it | External WCAG 2.2 AA audit, not a self assessment | External specialist | Before 2 |
| **Specialist UAT** | Would a domain expert accept this recommendation | The Move Specialists test it. They are the only people who can spot a subtly wrong tariff match | Ops | 1 to 2 |
| **Moderated customer testing** | Does it make sense to a mover | 8 recent movers, moderated, on the real prototype. Watch whether they tap approve or ask for a human | Product | Before 2 |
| **Failure and degradation** | What happens when a partner is down | Chaos testing on panel APIs. Confirm the flow degrades to queued rather than to a false state | Engineering | 2 |

**On specialist UAT.** This is both a testing method and a change management mechanism. Having the people whose job is changing be the ones who judge whether the agent is good enough gives them authorship rather than a fait accompli, and their domain knowledge is genuinely the sharpest quality filter available.

---

## 4. Team enablement: who gets what, when

The rule I would hold to: **no team hears about this from another team first.**

| Team | What changes for them | Document they get | When | What we need back |
|---|---|---|---|---|
| **Move Specialists** | Role shifts from running every setup call to owning escalations, complex and high value moves | Specialist playbook: what the agent does, what stays yours, how escalation reaches you, what your named-owner role means | **Week 0, before anyone else** | UAT participation, edge cases from experience, honest feedback |
| **Ops leadership** | Capacity model, shift patterns, staffing plan | Capacity model with the 40 to 50% resolution assumption stated, and the explicit position that headcount is not falling in year one | Week 0 | Sign off on staffing, escalation SLAs |
| **Engineering** | Builds it | PRD, engineering spec with tokens, state machines, data contracts and acceptance criteria, plus the clickable prototype | Week 1 | Estimate, and a challenge on anything unbuildable |
| **Data** | New event stream, new dashboard | Metrics spec: north star, supporting metrics, counter metrics, event schema | Week 2 | Dashboard before Phase 0 ships, not after |
| **Legal and Compliance** | FCA introductions, consent, disclosure | Compliance memo: commission disclosure wording, CAP Code position on affiliate items, consent model, LoA scope, audit log design | **Week 1, on the critical path** | Written sign off before Phase 2 exposes any customer |
| **Sales and Partnerships** | New story to partners, and a competitive weapon | Partner one pager, objection handling, demo script, and the honest list of what is not live yet | Week 4, before Phase 2 | Design partner identified and signed by week 16 |
| **Customer Support** | New failure modes, new escalation paths | Escalation runbook, state glossary so they can read a task lifecycle, and the "what to say when a council cannot confirm" script | Week 6 | Feedback loop into task copy |
| **Finance** | Revenue per move changes shape | Revenue model with cannibalisation scenarios, cost per move, and the disclosure conversion sensitivity | Week 4 | Agreement on what a bad quarter looks like before it happens |
| **Marketing and Brand** | New positioning, and a reputational asset | Comms pack. The receipts story is the external message, not the AI story | Week 8 | Positioning that does not overclaim |
| **Exec and Board** | Business case, gates, kill criteria | This plan, plus the phase gates | Week 0 | Agreement to the kill criteria **in advance** |

**On the Legal timing.** Compliance sits on the critical path, not alongside it. Commission disclosure wording, the consent model and the Letter of Authority scope all need to be settled before anything is built around them, because retrofitting disclosure into a component library is cheap and retrofitting it into a signed partner agreement is not.

---

## 5. Commercial plan

### Revenue shape through the rollout

| Phase | Revenue effect | Risk | Mitigation |
|---|---|---|---|
| 0 | Neutral to slightly positive. Fewer cancellations from billing disputes | None material | |
| 1 | Neutral. No customer exposure | Cost only | Time boxed |
| 2 | **Incremental only.** This cohort is worth zero today | None. Cannot cannibalise nothing | |
| 3 | Mixed. Some human-served moves shift to agent | **Conversion may fall initially** | Run the human call as the default for anyone who asks. Measure per cohort, not in aggregate |
| 4 | Positive. Accurate opening readings reduce billing disputes and cancellations | Voice reputational risk given the current complaint profile | Outbound only, on a pre-agreed slot, never taking payment or credentials |
| 5 | Positive at scale. Lower cost per move, higher coverage per move | Partner concentration | Stage across partners, never all at once |

### The three commercial questions I would want answered before Phase 3

**1. What does disclosure cost?** I expect commission disclosure to cost some conversion. I would rather measure it than argue about it, so it runs as a split test in Phase 2 where the downside is capped at a cohort worth zero. If it costs more than a few points with no retention gain, we revisit placement, not the principle.

**2. What is a mover worth across two years, not one?** The current model books commission at the move. The renewal diary makes year two revenue possible at near zero acquisition cost, and the habit discontinuity evidence says the window for the could-do tier closes at around three months. Both change the payback calculation and neither is in today's numbers.

**3. What is partner churn actually worth?** Homebox runs the same referral model with a bundling wedge. If the agentic experience is the reason a letting agent picks us, that is a defensible partner subscription line that does not depend on the mover transacting at all. That is the most durable revenue in the plan and the least exposed to the disclosure question.

### Partner communications

Partners are the channel and they did not ask for this change. Sequence: design partner briefed at week 16 with a working demo and a named owner at JMI. Wider partner book briefed at week 30, after the design partner can be quoted. Nobody hears about it from a mover first.

**The one thing not to say to partners:** that this reduces cost. Say it increases coverage and reduces the complaints that currently come back to them. Cost stories invite fee renegotiation.

---

## 6. Change management for the Move Specialists

The hardest part of this plan and the one most likely to be underdone.

**The honest position.** In year one this is not a headcount reduction. Production AI agents resolve 38 to 50% of contacts, and independent evidence shows a credit union raised loan uptake 24% simply by offering access to a human. Roughly half of movers will still touch a person, and the human escape hatch has commercial value even when it is not used. The staffing plan should say this in writing.

**What actually changes.** The specialist stops running every setup call from scratch and starts owning a book of moves as a named accountable person, picking up escalations, complex tenures, vulnerable customers and anything with money and ambiguity in it. That is a more skilled job, not a smaller one.

**Sequence.**

| When | What |
|---|---|
| Week 0 | Told directly, in person, before any partner or customer communication. Including the honest bit: this is intended to change the job, and here is what the new job looks like |
| Weeks 1 to 8 | Specialists contribute edge cases from experience. Paid time, treated as expert input, not a suggestion box |
| Weeks 8 to 20 | Specialists run UAT and hold a veto on recommendation quality |
| Week 20 | Named owner model goes live. Their name is on the product |
| Ongoing | Attrition among specialists is a tracked programme metric with a threshold, not a HR footnote |

**The risk if we get this wrong** is not morale. It is that the reviews stop naming people, and the thing customers actually love disappears before the replacement is ready.

---

## 7. Regulatory and compliance gates

| Area | Requirement | Gate |
|---|---|---|
| **FCA** | Introductions for insurance and energy. Recommendation rationale strings reviewed and stored against every order | Before Phase 2 |
| **Consent and ICO** | Consent source, scope and timestamp on every record. One tap opt-out propagating across channels within minutes. Contact caps per state | **Before Phase 0**, because it fixes a live complaint theme |
| **CAP Code** | Commercial intent obvious at the point of choice. Plain English "we earn £X", not the word "affiliate" | Before any affiliate item ships |
| **Vulnerability** | Meter type, prepayment status and vulnerability checked before any energy switch. Priority Services Register offered | Before Phase 2 |
| **AI disclosure** | Machine status disclosed on screen and at voice call open. No simulated human tells | Before Phase 2 |
| **Accessibility** | External WCAG 2.2 AA audit | Before Phase 2 |

---

## 8. Risk register

| Risk | Likelihood | Impact | Owner | Mitigation |
|---|---|---|---|---|
| Partner feed does not carry the exchange event | Medium | **High.** The core trigger fails | Product | Confirm the schema in week 1. Fallback to a mover-confirmed trigger, weaker but workable |
| Agent takes a wrong-property action in production | Low | **Severe.** Credit file damage | Engineering | Liability resolution gate. Programme pause condition |
| Specialists disengage or leave | Medium | **High.** Destroys the brand asset | Ops | Week 0 communication, UAT authorship, tracked attrition metric |
| Conversion falls in Phase 3 | Medium | Medium | Product and Finance | Cohort measurement, human call available on request, disclosure tested separately |
| Councils cannot confirm, so most tasks sit unconfirmable | High | Medium | Ops | Ship the honest state. Negotiate receipts with the largest authorities over time |
| Voice inherits the existing sales call reputation | Medium | High | Product | Outbound only, on a pre-agreed slot, never takes payment or credentials |
| A partner leaves for a competitor mid-rollout | Low | High | Partnerships | Design partner contract. Stage rollout so no single partner is more than a slice |
| Compliance review lands late | Medium | High | Legal | On the critical path from week 1, not parallel |

---

## 9. What I need decided before day one

1. **Does the partner feed carry exchange or contract signature, or only tenancy start?** This determines whether the core trigger is automatic or asked for.
2. **What can partners legally pass at referral, and what consent is captured where?** Determines how much of the profile is pre-filled and whether Phase 0 can fix the consent complaints.
3. **What is the real reason for the seven day notification delay?** There are good reasons around meter readings and last minute changes. I want the actual one before I design around it.
4. **Is there an appetite to change the staffing model, or is headcount fixed?** Changes the phasing and the honesty of what we tell specialists in week 0.
5. **Which partner is the design partner, and will they sign up to it?** Phase 3 does not start without one.

---

## 10. The one thing I would protect

If the plan has to be cut, cut Phase 4 and Phase 5. Ship Phase 0 and stop if you must.

**A mover who can see that their council notification was sent on the second, is being chased on the sixteenth, and cannot be confirmed because Camden does not confirm to third parties, is a mover who does not write the review that says they were told it was handled and it was not.** That is 18 of 60 complaints addressed with no model, no voice agent and no partner renegotiation.

Everything else in this plan is upside on top of that.
