# Research · primary and secondary
**Jeanne Piffaut · July 2026**

Repo map: [`README.md`](../../../README.md). Notion skim: [`docs/CASE-STUDY.md`](../../CASE-STUDY.md).

Full instruments and deep tables live in the root library. This page is the interviewer-facing synthesis.

Deep files: [`01-research-and-problem-framing.md`](../../../01-research-and-problem-framing.md) · [`01c-negative-review-analysis.md`](../../../01c-negative-review-analysis.md) · [`01d-primary-research-survey.md`](../../../01d-primary-research-survey.md) · [`02-competitive-analysis.md`](../../../02-competitive-analysis.md)

---

## 1. Primary research

### 1.1 What I did

- A **primary research survey** (“Just Moved In?”) and informal talks to grasp tangible stories that come with moving, each framed in their own context.
- **Directed storytelling** with 2 people (not formal interviews; directed storytelling is the method).
- Thinking back about **my** own experience (moved 16+ times across different countries).
- Survey: **n = 12** (see `01d-primary-research-survey.md`). Treat percentages as directional only.

Just Move In is in a unique position: clients are funnelled. The product should be **sticky**, so customers stay and use other features. That diversifies income streams and adds layers to the customer experience.

### 1.2 Sampling and biases

| Label | What it means here |
|---|---|
| **Convenience / own-network sample** | People I know. Not a probability sample of UK movers. |
| **Likely skew** | Younger, more digitally comfortable, London-weighted. Cuts **in favour** of trusting a digital assistant. |
| **Move mix** | Majority local UK moves; some international; mixed nationalities. |
| **Positive priming on trust / mechanic questions** | Q5/Q6 describe a flattering product. Stated intent is weakly predictive. |
| **Small n** | n=12. Directional colour on desk research, not prevalence. |
| **Missing questions** | How they were contacted (consent). App vs web vs text. Tenure (rent/own) not asked cleanly. |

I would rather flag these than have them raised for me.

### 1.3 Key takeaways (with what they changed)

| Theme | Finding | Source | What it means for product |
|---|---|---|---|
| **Felt pain order** | Address updates (4) tied with finding suppliers (4); broadband not top | Survey Q3 n=12 | Soften “broadband first” messaging; keep broadband for **lead time** |
| **Fragmentation** | Split across 1-3 / 4-8 / 9-15+ | Survey Q4 | Pitch **decision quality and missed outcomes**, not volume theatre |
| **Trust** | 5 summary / 5 human escape / 2 no | Survey Q5 | Summary-to-approve + named customer support human agent are load-bearing |
| **Privacy** | Top Q13 objection (4/12): data handling / where it goes | Survey Q13 | Plain data visibility + audit on referral/Settings |
| **Modality** | 6 of 10 chose 1-tap; voice not first preference | Survey Q6 | UI decides for commerce; Day 0 voice rests on **access** |
| **Day 0** | Rest and ritual, not admin in the doorway | Open Q7/Q8 | Keys/meters first; soft landings below |
| **Week one** | Bins/guides; community; discounts; room planner surprise | Survey Q14 | Affiliate labelled; planner in Later |
| **Trustpilot praise** | 35/39 five-star name a person | Positive sample (secondary) | Named human escape is the brand asset |
| **Trustpilot pain** | Told handled / was not; unsolicited contact; commercial opacity; near-miss | Negative sample 60 (secondary) | Honest states; watching; panel fee; safety gates |

Representative primary colour: Day 0 on floor, tea, sofa, beer. Day 1 wish: utilities done or a clear guide. Privacy outranks cost as a trust blocker.

---

## 2. Secondary research

### 2.1 How

- AI search: Gemini, Claude (Opus), Cursor (Grok), with sources checked.
- Google search.
- External resources: Ofgem, Connells, Legal & General, Accenture, Buell & Norton, etc. (full list in Deliverable 1).
- Customer feedback: Trustpilot best and worst for emotional response; articles + Reddit-type mover forums for needs language.
- Competitors per market slice (utility setup, marketplace analogues).

### 2.2 Market / competitive stance (including the “frontier” framing)

I do not believe competitive analysis is the creative engine. It is **backward-looking**. It still has to be made, as an **anchor of the status quo**.

Marketplace analogues I care about for commercial mechanics (not as “copy their UI”):

| Analogue | Why it matters |
|---|---|
| **Checkatrade** | Sponsored / paid visibility on listings. Extra cashflow for extra visibility. Partners, not random ads. |
| **Treatwell / Fresha** | Marketplace ops; shops are often unhappy about commission. Design commission so suppliers do not push cash-off-app. |
| **Revolut** | Intent-led vouchers / offers in one place, not in the face. |

Utility / setup competitors (Homebox, SlothMove, Updater, Nous, comparison sites) are fully tabulated in [`02-competitive-analysis.md`](../../../02-competitive-analysis.md).

**Frontier framing (conceptual, not a literal MUBIT product claim):** most tools in this space sit on “holds up at scale” without compounding into capability: they advise, notify, or compare, but they do not absorb date change, presence on Day 0, or honest receipts. The opening is orchestration that **compounds** with partner data + rails + trust. Graph-style “more context” without execution still leaves the same gap: similarity is not experience.

### 2.3 Secondary findings that shaped the spine

| Finding | Implication |
|---|---|
| 37% of agreed sales never complete (Connells) | Watching until exchange |
| Ofgem: single offer converts better than three-plus | One-pick basket |
| 75% trust AI less if picks look paid (Quad/Harris) | Panel fee once, labelled |
| Showing the work raises perceived value (Buell & Norton) | Tasks / honest status |
| Human escape hatch works even unused (Kinch & Buell) | Customer support human agent always named |
| Habit window ~3 months post-move | Post-move / Market stickiness window |

---

## 3. Objectives the research is in service of

Every feature should show value. Each is valid whether commercial or stickiness. Value creation links to what we are trying to achieve:

| Objective family | Examples |
|---|---|
| Additional cash · one time | Basket panel fee, one-off bookings |
| Partner monthly cashflow | Recurring marketplace / sponsored visibility |
| Yearly appliance / utility cashflow | Energy / broadband / insurance panel |
| Customer stickiness | Tasks as personal space, Market, post-move |
| Customer emotional / branding | Rituals, honesty, named human, stories |

---

## 4. What I would do next in research

1. Five follow-up directed storytelling sessions from survey respondents with rich open answers.  
2. Partner discovery: what estate agents want in a weekly value report.  
3. Consent-path survey item: how were you contacted?  
4. Rituals research: how people organise packing and lists (feeds stickiness features in Later / discuss).  
5. Competitive teardowns as a signed-up customer (Homebox, SlothMove, Nous) when time allows.
