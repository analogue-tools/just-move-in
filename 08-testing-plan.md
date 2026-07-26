# Testing Plan
### How we validate this, who we test with, and what we ask
**Jeanne Piffaut · July 2026**

---

## 1. What we are actually testing

Not "is it usable". Five specific risks, each of which could sink the direction.

| # | Risk | Why it matters | The question that exposes it |
|---|---|---|---|
| **R1** | **`sent · no receipt` reads as failure** | The entire differentiator is honest state. If movers read the honest state as "they messed it up", the strategy backfires and we would be better off lying like everyone else | Show the plan, take it away, ask: has Camden been told? How do you know? |
| **R2** | **Commission disclosure kills the recommendation** | I have claimed disclosure buys trust and predicted it costs some conversion. Both halves need testing | Two versions of the offer card, between subjects. Which would you take, and why |
| **R3** | **One pick reads as being sold to** | Ofgem's data says a single offer converts better. It does not say it feels better | Does it feel like advice or like a sales pitch? What would make you check elsewhere? |
| **R4** | **Nobody finds the date change control** | The single most valuable behaviour in the product is invisible if the affordance is missed | Your completion has moved to 28 August. Show me what you would do |
| **R5** | **Movers do not realise Jay is a machine** | AI disclosure comprehension. If they think Jay is a person, every trust assumption inverts | Who or what is Jay? Is there a person involved? |

**R1 is the one I would test first and hardest.** Everything else is a refinement. R1 is a bet on human psychology that I have argued from published research but never observed in this context.

---

## 2. The four phases

| Phase | Method | n | Cost | Time | Answers |
|---|---|---|---|---|---|
| **A · Comprehension** | Unmoderated. Five second exposure, then recall and state questions | 30 to 40 | £300 to £450 | 3 days | R1, R5 |
| **B · Moderated walkthrough** | 30 minute think-aloud on the prototype | 6 to 8 | £250 plus time | 1 week | R1 to R5, and everything I have not thought of |
| **C · Preference split** | Unmoderated, between subjects, disclosure on versus off | 60, 30 per cell | £500 | 4 days | R2, R3 |
| **D · In-product** | Micro-feedback once live, plus a day 14 outcome measure | Everyone | Build cost only | Ongoing | Whether any of it held up in the real world |

**On sample size, stated honestly.** The familiar "five users finds most problems" figure applies to qualitative discovery of usability faults. It does not apply to preference, comprehension rates or conversion, where you need 30 or more per cell before the numbers mean anything. Phase B is qualitative and 6 to 8 is right. Phases A and C are quantitative and 30 plus is the floor. I would not report a percentage from Phase B.

---

## 3. Recruitment: how we actually get these people

Ranked by quality of respondent, which is the opposite of ranked by speed.

| Source | Who you get | Speed | Cost | Notes |
|---|---|---|---|---|
| **1. Just Move In's own recent customers** | Real movers, real recall, already in the funnel | 1 week | £30 to £40 per 30 min session | **Best source by a distance.** Ask ops for movers 2 to 8 weeks post-completion. Include people who complained, not only promoters |
| **2. Survey respondents who opted in** | Self-selected, already engaged | Immediate | Low | Add a "happy to be contacted for a 20 minute call" question to the form now. Costs nothing and compounds |
| **3. Prolific** | UK-heavy academic panel, screenable, fast | 24 to 48 hours | About £9 per hour plus fees | Best value for unmoderated Phases A and C. Screening on "moved home in the last 6 months" works well |
| **4. Lyssna or Maze** | Unmoderated prototype testing with built-in first-click and comprehension | Days | Subscription plus panel fees | Purpose-built for exactly Phase A. Point it at the hosted prototype |
| **5. User Interviews or Respondent** | Higher quality moderated recruits, better screening | 3 to 7 days | £60 to £100 per participant all-in | Use when you need a specific segment, for example a landlord or someone on a prepayment meter |
| **6. A letting agent partner** | Movers mid-flow, the actual context | 2 weeks | Partner goodwill | Highest fidelity, highest overhead. Save it for validating with a design partner later |
| **7. Reddit and forums** | Free, opinionated, skewed | Slow | Free | r/HousingUK, r/UKPersonalFinance, Mumsnet property. Fine for qualitative colour, not for numbers |

### The screener

Recruit for the move, not for demographics.

- **Moved in the last 90 days.** Recall decays fast and the emotional detail is what we want
- **Mix of tenure:** at least 3 renters, at least 3 buyers. They have different triggers and different liability
- **At least 2 first time movers.** The novice segment is a branch in the flow and needs testing separately
- **At least 1 person who is not confident with technology,** and if possible **1 person with a visual or cognitive impairment.** Disabled movers appear unprompted in the review data as the segment who value this most. Testing only with confident users tells us nothing about them
- **At least 1 person who had something go wrong.** They will spot the honest state design faster than anyone
- **Exclude** anyone who works in product, design or utilities

### Incentives, at UK rates

£30 to £40 for a 30 minute moderated session. £8 to £12 for a 10 minute unmoderated task. Pay everyone, including people who fail the screener after starting. It is both fair and it protects the panel relationship.

---

## 4. Testing inside the UI, done properly

Your instinct is right. Two refinements would make it much stronger.

### Refinement one: ask about the decision, not the session

"Was this clear?" and "are you happy?" both invite agreement, and neither tells you what to change. Every probe should attach to the specific thing that just happened.

| Instead of | Ask |
|---|---|
| Was that clear? | Do you know what happens next? · Yes / Not sure |
| Are you happy? | How easy or difficult was that? · 1 to 7 |
| Any feedback? | What is the one thing you would change about this screen? |
| Do you trust us? | How confident are you that Camden has been told? · Not at all to Completely |

The last one is the most valuable question in the product, for a reason in the next section.

### Refinement two: measure false confidence, not confidence

Because the plan screen shows real state, we can compare what someone believes against what is actually true. That gives a metric nobody else in this market can compute:

> **False confidence rate.** The share of movers who report high confidence that a task is done when its state is `sent, no receipt` or `queued`.

If that number is high, the honest state design has failed at its one job and the visual treatment needs work. If it is near zero, we have evidence the whole strategy works. It is cheap to compute, it is unambiguous, and it maps directly to the complaint theme it exists to fix.

### Where the probes go, and where they must not

| Moment | Probe | Why here |
|---|---|---|
| **After the basket is confirmed** | "How easy or difficult was choosing?" 1 to 7, plus optional one line | The highest stakes decision in the flow, and the moment recall is sharpest |
| **First view of the plan, on exit** | "Which of these has already been done?" pick from a list | The comprehension check. Directly computes false confidence |
| **After a date change cascade** | "Did anything get lost?" Yes / No / Not sure | Tests the one behaviour we claim nobody else has |
| **Day 14** | Per decision thumbs, plus one outcome question | Attaches sentiment to a specific recommendation rather than to the app |

**Where probes must never appear:** during discovery, at t minus 14 when the mover is in admin panic, and at any point on moving day. Those are the moments with the least attention and the highest stress, and a survey there is a tax on the exact experience we are trying to prove is calm.

### Rules for the component

- One question. One tap to answer, one tap to dismiss
- Never a blocking modal. Inline, in the flow, ignorable
- Never the same question twice to the same person
- Free text is optional and never required
- Response rate is itself a signal. If nobody answers, the placement is wrong

---

## 5. The moderated script, in outline

30 minutes, think-aloud, on the hosted prototype. Same five risks, in an order that avoids priming.

1. **Warm up, 3 min.** Tell me about your last move. What was the worst part?
2. **Referral screen, 4 min.** This arrived from your letting agent. What is it? Would you carry on? *Do not explain anything.*
3. **Discovery and basket, 8 min.** Talk me through choosing. *Silence. Let them struggle.* Then: does this feel like advice or like a sales pitch? Would you check anywhere else?
4. **The comprehension test, 5 min.** *Show the plan for 20 seconds, then hide it.* Which of these has actually been done? How do you know? How confident are you that Camden has been told?
5. **Date change, 3 min.** Your completion has moved to 28 August. Show me what you would do. *Time to first click on the date control.*
6. **Jay, 2 min.** Who or what is Jay? Is a person involved anywhere?
7. **Close, 5 min.** If a friend asked whether to use this, what would you say? What would have stopped you trusting it?

**The rule for whoever moderates:** when they get stuck, count to ten before helping. The silence is the data.

---

## 6. What good looks like

Thresholds set before we test, so nobody negotiates them afterwards.

| Measure | Pass | Investigate | Fail |
|---|---|---|---|
| False confidence rate | Under 10% | 10 to 25% | Over 25%, redesign the state treatment |
| Correctly identifies `sent, no receipt` as not yet confirmed | Over 80% | 60 to 80% | Under 60% |
| Finds the date change control unprompted | Over 80% | 60 to 80% | Under 60%, promote the affordance |
| Describes the recommendation as advice rather than a sale | Over 70% | 50 to 70% | Under 50%, revisit the single-pick presentation |
| Identifies Jay as a machine | Over 90% | 75 to 90% | Under 75%, disclosure is failing |
| SEQ on the basket task | Mean above 5.5 of 7 | 4.5 to 5.5 | Below 4.5 |
| Disclosure split, conversion delta | Under 5 points | 5 to 10 points | Over 10 points, revisit placement not principle |

---

## 7. Sequence and cost

| Week | Activity | Output |
|---|---|---|
| 0 | Host the prototype. Add the opt-in question to the survey. Request the customer list from ops | Recruitment pipeline open |
| 1 | Phase A comprehension test on Prolific or Lyssna, n=30 to 40 | R1 and R5 answered, cheaply, before anyone builds |
| 2 | Phase B moderated, 6 to 8 sessions | The qualitative picture, and the problems I have not anticipated |
| 3 | Fix what broke. Re-run the comprehension test if the state treatment changed | Revised prototype |
| 4 | Phase C preference split, n=60 | The disclosure number for the PRD |
| Live | Phase D in-product probes ship with the first release | Continuous, and the false confidence rate becomes a tracked metric |

**Total for phases A to C: roughly £1,000 to £1,500 and four weeks.** That is a very cheap way to find out whether the central bet in this product is wrong before an engineering team spends a quarter on it.

---

## 8. The one test I would run if there were only budget for one

Phase A, the comprehension test, n=30, about £350 and three days.

Show the plan screen for twenty seconds. Hide it. Ask which tasks have actually been done and how confident they are about each.

If movers reliably distinguish "confirmed" from "sent, no receipt", the honest state strategy works and the rest is polish. If they do not, the most important idea in this project is a nice thought that does not survive contact with a real person, and I would rather find that out in week one for £350 than in month nine.
