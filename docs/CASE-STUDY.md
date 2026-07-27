# Jay · case study
**Jeanne Piffaut · Just Move In · July 2026**

**Jay** turns Just Move In’s home-setup phone call into a digital operator that does the admin, shows honest proof it happened, and survives the move date changing.

**Working demo:** https://just-move-in-liard.vercel.app  
*(Toolbar outside the phone: **By team**, then **Why this**. Separate from the mover UI.)*

---

# How this maps to the brief

| Brief deliverable | Where |
|---|---|
| **1. Research & problem framing** | §1 Approach · §2 Research |
| **2. Competitive analysis** | §3 |
| **3. Product strategy / lightweight PRD** | §4 · §4.1 Impact · §5 Feature spine · §6 Stakeholders · §7 Later |
| **4. Working demo + eng handoff** | Demo URL · toolbar notes · §8 |
| **5. Handoff judgment** | §8 |
| **AI openness** | §1 |

---

# 1. Approach

I read the brief and the website, wrote down what I wanted to know and how I would research it, then brain-dumped from intuition. I used AI (Claude Opus, Gemini, Cursor / Grok) step by step with sources to check, took notes on what felt relevant, ran a questionnaire plus directed storytelling, wrote analysis and takeaways, built an HTML prototype from that intuition, critiqued and refined it, and pushed it to Vercel. The demo is a co-building whiteboard: clear enough to collaborate, still a prototype open to feedback.

**Steps:** brief + website → AI-assisted desk research with sources → primary survey + directed storytelling → competitive landscape as status-quo anchor → HTML from intuition → critique/refine loops → Vercel.

**How I think about it**
- Protected a first pass so the thinking stayed mine; design is continuous once something is visible.
- Clarity of output over pretending to own every eng detail.
- Most of the product should be **invisible admin**. Screens are for understand + approve; the few mover-facing surfaces are only part of the value.
- Home is the **anxiety anchor**: each screen answers *Where am I? / What’s happening? / What’s next?* in a few seconds.
- Ownership and must-do stay in the open flow (people miss expanders). One continuous discovery → basket.
- Local UK funnel first (data + market saturation); international kits parked.
- Diversify value through the same partner funnel: trust, transparency, stickiness.
- Ads/affiliate placement parked on purpose in §7 Later.
- Lightly informed by current JMI Figma; built for critique rather than as a brand-final UI.

---

# 2. Research (primary + secondary)

## 2.1 Primary (I generated this)

- Survey “Just Moved In?” · **n = 12** responses (directional only) · own network  
  - Form: https://docs.google.com/forms/d/e/1FAIpQLScqlOCiqNvu0Z3V69sj8__K1Jp3pF57yQG8QV3bonzoeDxJyA/viewform?usp=dialog  
  - Responses: https://docs.google.com/spreadsheets/d/1UGXXNjqmZu0KY093rgjrrXPnUxRSOES1aI9phvwMUyg/edit?resourcekey=&gid=107146798#gid=107146798  
- Directed storytelling with 2 people  
- **My** own move experience (16+ moves)

**Sample note:** 12 people answered the survey. Some questions were skipped, so denominators differ (e.g. trust Q5 is 12; modality Q6 is 10). I cite the true denominator each time.

**Biases:** convenience sample; younger / digital / London-weighted (favours trusting a digital assistant); small n; Q5/Q6 positively primed; missing clean consent-channel and tenure questions.

| Theme | Finding (n=12) | Product meaning |
|---|---|---|
| Felt pain | Address updates (4) tied with finding suppliers (4); council tax (2); broadband not the top headache | Soften “broadband first / dozens of forms”; keep broadband for lead time |
| Stress | Mean 5.3, bimodal (some breeze through, some acute) | Design for the acute half; stop implying everyone is drowning |
| Fragmentation | Split 1-3 / 4-8 / 9-15+ | Pitch decision quality + missed outcomes, not volume theatre |
| Trust | 5 want a summary to approve / 5 only if they can reach a human / 2 no (10 of 12 would delegate with conditions) | Summary-to-approve + a named customer support person are must-haves |
| Privacy | Top objection on Q13 (4/12): data handling, where it goes | Plain “what we hold / where it goes” + audit; not only fee disclosure |
| Modality | Of 10 who answered Q6: 6 chose 1-tap; nobody chose voice first | UI for commerce; optional voice on moving day for access when hands are full |
| Day 0 | Ritual real (“lie on the floor…”, first tea); wish utilities already done | Keys + meters first; soft landings that leave room for the joy of arrival |
| Week one | Bins/guides lead; community, discounts, **room planner** also appear | Market / affiliate welcome if labelled; room planner parked in Later |

## 2.2 Secondary (existing material I analysed)

Includes desk sources (Connells, Ofgem, Buell & Norton, etc.) and **Trustpilot**. Trustpilot is **not** primary: the reviews already existed; I coded themes from positive and negative samples. That is secondary customer-feedback analysis.

| Finding | Implication |
|---|---|
| 35/39 five-stars name a person | A named person you can reach is the brand asset |
| 18/60 negatives: told handled, was not | Honest status; never show “done” without proof |
| 16/60: unsolicited contact / consent | Stay silent until the move is real; pause and opt-out equal and immediate |
| 13/60: commercial opacity | Say the panel fee once, in plain words, at the point of choice |
| Near-miss prepay / medical | Safety checks before any energy switch |
| 37% agreed sales never complete (Connells) | Stay in watching until exchange; no outbound before then |
| Ofgem: one offer converts better than many | One recommended pick per category, not a comparison grid |
| AI picks look paid → trust drops (Quad/Harris) | Disclose panel fee; commercial intent stays visible |
| Showing the work raises perceived value (Buell & Norton) | Visible task list + honest status |
| Human escape works even unused (Kinch & Buell) | Keep a named customer support person visible on high-stakes screens |
| ~3-month habit window post-move | Stickiness / Market window after keys |

I can walk the negative-review coding in more depth if useful.

---

# 3. Competitive analysis

Competition analysis is **backward-looking**. I still use it as an **anchor of the status quo**, not as the creative engine.

## 3.1 Landscape (who owns which slice)

| Category | Players | Slice | Know you are moving? | Execute or advise? |
|---|---|---|---|---|
| Mover concierge / home setup | JMI, Homebox, The Bunch, Updater (US) | Commercial setup via partners | Yes | Execute (mostly human) |
| Address change utilities | SlothMove, Moveinout, Royal Mail Redirection | Notifications | You tell them | Execute, no advice |
| Comparison sites | Uswitch, MSM, CTM | Price, one vertical | No | Advise, hand off |
| AI bill management | Nous.co | Steady-state bills / switching | No | Execute with confirm |
| General AI / voice assistants | ChatGPT agent, Alexa+, Gemini, Siri | General tasks | No | Unreliable / narrow |
| Agent infrastructure | Sierra, Decagon, Parloa, Retell, Fin | Voice/agent layer | n/a | **Suppliers, not rivals** |

**Structural point:** only the concierge channel knows a move is happening before the mover tells anyone. The moat is the **partner trigger + rails**, not the model.

## 3.2 What’s good / what’s missing / our opening

| Player | What’s good | What’s missing |
|---|---|---|
| **Homebox** | Same partner-referral trigger; free setup consult | Bills bundling ≠ full orchestration; weak on date changes and moving day |
| **Updater** | Mature partner plumbing; invite at the right moment | Passive hub that waits to be opened |
| **SlothMove** | Letter of Authority pattern; cheap mass notify | No confirmation loop; no commercial panel; no move-date brain |
| **Comparison sites** | Familiar price discovery | Date blind; choice overload; commission often opaque |
| **Nous** | AI + human confirm on bills works in market | Move blind; retention product after the transition |
| **General agents** | Normalise talking to machines | ~38% OSWorld-class reliability; unusable for irreversible money actions |

**Four cells empty across the market (the product):** manage lead times/dependencies · survive a date change · present on moving day · disclose commission at the point of choice.

Advise / notify / compare tools do not **compound** into that set. The frontier is date-resilient orchestration + Day 0 presence + honest receipts on the same partner trigger.

**Opening:** partner referral knows the move is happening → execution rails + permission from someone who did not choose us → a proactive operator that shows honest receipts, survives date changes, and keeps a named customer support person. Stay out of the monthly bill (no bills bundling in v1).

**Gap I would close next:** signed-up teardowns of Homebox, SlothMove, Nous as a customer.

---

# 4. Product bet (lightweight PRD)

**Thesis:** the call already works. Automating only the conversation would scale the wrong layer. The first thing to fix is that nobody can see whether the admin actually happened.

**From:** specialist phone call that works because of people.  
**To:** digital / AI equivalent that keeps the partner funnel and earns trust with receipts.

**Proposal:** more service layers on the same funnel → yearly utility cashflow plus recurring / sticky layers, via trust, usefulness, transparency, honest status.

Label features by objective family: **cash-once · partner-cash · utility-cash · sticky · emotion/brand**.

| User | Job |
|---|---|
| Mover | Set up without scam / retype / being stuck, human if needed |
| Partner | Refer once; look good |
| Customer support human agent | Named person for money, complaints, vulnerability, failed automation; available around peak stress |
| Jay | Operator: explain → surface decisions → do the admin |

**Terms I use below (so the rest reads cleanly)**

| Term | Meaning |
|---|---|
| **Watching** | Early state after a partner referral, *before* exchange (or equivalent). We may store a profile. We must **not** contact councils, suppliers, or chase anyone yet. About 37% of agreed sales never complete (Connells), so acting early creates real harm. |
| **Outbound** | Any contact we initiate toward the outside world: notify a council, place energy/broadband, chase a utility, sales-style outreach. |
| **Active / armed** | After exchange (or equivalent) and consent: Jay is allowed to run reversible admin and to place confirmed commercial orders. |
| **`sent · no receipt`** | We sent the notification, but the destination (often a council) gives no acknowledgement. Shown as neither success nor failure. Never painted as “done.” |
| **Confirmed** | Allowed only when we hold a real receipt or proof. No receipt → not confirmed. |
| **Date cascade** | When the move date changes, every dependent deadline redraws. **`lost = 0`** means nothing silently drops off the plan. |
| **Panel fee** | What a supplier on JMI’s panel pays JMI. Same across the panel; said once at choice. Does not change the mover’s price. |
| **Day 0** | Moving day: keys, meters, access. Often no broadband, one free hand. |

## Understand · Decide · Do

| Bucket | Who | Where it lives |
|---|---|---|
| **Understand** (what a tariff is, what happens next, why this pick) | Jay | Ask Jay / FAQ / short explanations. Patience at no social cost is where AI helps |
| **Decide** (which plan, what cover) | The mover, once | UI. Money has to be seen and disclosed to be auditable |
| **Do** (notify, place, chase, capture) | The system | Mostly invisible. Best interface for admin is often no interface |

**Voice vs UI:** decided by what the mover physically has, not by preference. UI for money and confirm. Optional voice on moving day when there is no broadband and one free hand. Never take a financial commitment by voice. Named customer support person when a human is needed.

**Out of scope for v1 (on purpose)**
- Stay out of the monthly bill (no bills bundling)
- One recommended pick per category (Ofgem: grids of equals convert worse)
- Structured flows first; Ask Jay is a side channel
- Voice only where access needs it (moving day), money stays in UI
- Keep named humans (35 of 39 five-stars name a person)
- Partner referral stays primary (Updater already failed DTC as the main path)
- Local UK funnel first; international kit waits

**Commercial (v1 clarity)**

| Stream | Role |
|---|---|
| Utilities panel (annual) | Core, one pick, fee once |
| Marketplace | Recurring / episodic, labelled partners |
| Sponsored visibility | Later, after trust, in Market |
| Vouchers hub | Later, Revolut-like, not in-face |
| Bills bundling | Out of v1 |

## 4.1 Impact · how I would know this worked

Draft numbers and thresholds to validate with JMI. I also mocked the dashboard a team would run on these metrics.

**North star (two layers, on purpose)**
- **Outcome I want for the business:** a completed move that felt calm *and* a partner who still wants to refer. Longevity means great for both the mover and the agent channel, not a one-shot utility sale.
- **Outcome I would measure week to week:** **Critical Path Completion (CPC)**. Share of moves where every time-sensitive task finishes before it becomes impossible or expensive: broadband ordered inside the install window, energy chosen instead of the expensive default tariff, council tax notified, insurance live on move day, opening meter readings captured. CPC is a customer outcome. App opens do not count.

**OKR sketch**

| | What I would hold the team to |
|---|---|
| **O1 · Permission** | Move someone from watching (referred, not yet real) to active setup **without** cold-calling them or contacting suppliers early |
| KRs | Opt-out rate; pause vs continue; referral → basket confirm |
| **O2 · Honest execution** | Never mark work done without proof; chase anything stuck in `sent · no receipt` |
| KRs | % tasks with a real receipt; false-confidence incidents = 0; after a date change, nothing silently lost (`lost` = 0) |
| **O3 · Stickiness** | Still useful in the roughly three-month habit window after the move |
| KRs | Return visits to Market; post-move tasks finished; engagement with renewal seed |

**Supporting metrics (short list)**

| Group | Metric | Direction |
|---|---|---|
| Coverage | Tasks / categories set up per move | Up (today’s call covers about 6 to 8) |
| Reliability | Share we can truly confirm; share stuck with no acknowledgement | Confirm up; “no reply possible” down by adding real paths, never by faking ticks |
| Trust | Opt-out actually stops contact; people later widen what Jay may do alone | Opt-out = always honoured; widen-scope opt-in up over the move |
| Speed | Exchange/consent → basket confirmed | Under about 10 minutes, or async (call is about 50 minutes) |
| Day 0 | Keys / meters captured | Up |
| Commercial | Attach per category; revenue per completed move | Up |
| Partner | Invite → activation; partner retention | Up |
| Human load | Interactions finished without a person | Plan about 50% at launch, not 85% |

**Counter metrics (must not buy CPC with these)**

| Counter | Why |
|---|---|
| Complaint rate / FCA-reportable | Speed is not worth misselling |
| Cancel within 14 days of a switch | Catches convert-then-regret |
| Pushing a plan again after the mover said no | Must stay 0. “No hard sell” is a system rule |
| Time for a vulnerable mover to reach a human | Accessibility is the product, not a checkbox |
| Share of “confirmed” later proven false | Guards “told handled, was not” |
| **False confidence rate** | Mover thinks it is done, but the honest state says it is not. If we show real status, we can measure this |

**Guardrails / kill (I would write these before build)**

| If this happens | In plain terms | Action |
|---|---|---|
| Outbound while still watching | We contacted a council/supplier (or chased) before the move was legally real | Incident. Stop that path |
| “Confirmed” without a stored receipt | UI or ops said done with no proof | Incident. Pause the programme until fixed |
| Date cascade with anything lost | A date change dropped a task off the plan | Block ship / hotfix |
| Distress / vulnerability with no human path | Someone in a hard moment cannot reach customer support | Block ship |
| Wrong property or wrong person reaches a supplier | We acted on the wrong address or account (already 9/60 negatives) | **Hard stop.** Full review before resume |
| Voice asks for passwords/payment, or contacts someone who opted out | Voice channel becomes a scam risk or consent breach | Kill that voice path |

I would also gate rollout in phases: fix honest receipts **before** AI, run the agent in shadow first, then try it on movers who never answer the phone (pure upside). Tell specialists in week 0 before any partner or customer sees this. Happy to walk that plan.

**Top risks (my view)**

| Risk | Severity | What I would do |
|---|---|---|
| Partner systems do not tell us when exchange happens, so we never know when to start | High | Confirm the data feed in week 1; weaker fallback = mover taps “exchange happened” |
| AI reads as a downgrade from the named specialist | High | Named human from day one; Jay does more, does not erase the person |
| Councils never acknowledge, so many tasks stay `sent · no receipt` | Medium | Show that honestly; negotiate real receipts with the largest authorities over time |
| One recommendation looks dishonest when the panel is thin | Medium | Say what we can and cannot offer; a visible gap beats a hidden one |
| Regulatory exposure on energy / insurance recommendations | Medium | Legal reviews the “why this pick” text; store that rationale on every order |
| Specialists disengage (reviews stop naming people) | High | Tell them week 0; they judge recommendation quality in testing; track attrition as a programme metric |

**Assumptions I am making** (stated so they can be challenged)
1. **Exchange** (contracts exchanged, move becomes real) is the right moment to start acting, not “offer accepted” (inferred from fall-through data; test it).
2. Movers will let Jay run boring no-money admin alone (inferred; if wrong, we still have a strong guided flow).
3. The first fortnight after keys drives whether people come back (asserted; if wrong, pull renewal earlier).

**Tradeoff underneath:** in a category where 60% quit after one mistake, design for a survivable bad case, not a dazzling happy path. An honest `sent · no receipt` beats a fake green tick.

---

# 5. Feature spine (research → product)

| Feature | Why (research) | How in demo | Objective |
|---|---|---|---|
| Watching gate | 37% fall through; unsolicited-contact pain | Referral screen; pause and opt-out equal; no supplier contact yet | trust |
| Named referrer + personal greeting | Trust + partner channel | Priya Shah · Kentish Town; greet the mover by name from referral data | trust |
| Discovery once | Retype pain; 1-tap preference | One set of answers → rankings; no hidden expanders for must-do | cash-utility |
| One-pick basket | Ofgem; fee opacity | One recommended pick + alternatives; safety checks; panel fee once | cash-utility · trust |
| Honest states | “Told handled, was not”; councils often silent | `sent · no receipt` is visibly not “confirmed” | trust · ops |
| You vs Jay | Ownership anxiety | Pre-move: your jobs first, Jay’s below; mover can override only non-locked statuses | ops |
| Day 0 keys/meters | Access + ritual; survey did not prefer voice first | Capture always possible in UI; voice optional when hands are full | ops · emotion |
| Tasks 3 lenses | Need to see the work | List default; Board; Visual map | sticky · ops |
| Date cascade | Move dates slip | Show what moved and what to redo; nothing silently lost | ops |
| Ask Jay + customer support | Named humans; chat is not the product | FAQ / Ask Jay as side channel; named human on high-stakes screens only | trust |
| Market / settling | Week-one needs | Free NHS/council vs local vs panel labelled; GP/dentist, electoral roll, deep links, first-bill check | cash-partner · sticky |
| Settings | Consent / control; left-handers + Day 0 one-hand use | Pause, opt-out, signed permission, audit log; left-handed mode flips ask bar and primary taps | trust |
| Renewal seeding | Habit window; re-consent later | Plant early; ask again around month 11 (not noisy in v1 UI) | sticky · trust |

In the demo toolbar: **By team** first, then **Why this** (problem / design / evidence / road not taken). That toolbar is the live version of §6.

---

# 6. Value by stakeholder

The spine is for the mover. The same work has to make sense to the people who sell, build, and support it. This is how I would talk about it in the room.

| Who | What they get from this direction | What I would not oversell |
|---|---|---|
| **Mover** | One profile, see what actually happened, You vs Jay ownership, human when money or distress hits | That Jay replaces every utility portal, or that voice is the whole product |
| **Referring partner** | Looks competent at handoff; named in the UI; no spam while the sale can still fall through; later: weekly “what happened to my referrals” | Instant attach on day one of watching |
| **Sales / partnerships** | Story: starts at referral, watching gate, confirm = commerce, date change survives, Day 0 evidence, stickiness after keys | Bills bundling; “AI replaces the specialist”; chatbot-first pitch |
| **Customer support** | Clear when FAQ ends and a person starts; show `sent · no receipt` instead of a fake green tick; distress priority; pause/opt-out actually kill outreach. In the prototype the named person is **Lyndon Beadle** | Ticket volume as the success metric (success = stuck notifications chased, no false confirms, humans reachable) |
| **Engineering** | Three hard contracts: watching = no outbound; confirmed only with receipt; date cascade loses nothing. Demo + toolbar are the whiteboard | That the HTML is production; adapters and receipt model still need reality-check |
| **Design** | Calm operator tone; no expanders for must-do; status language that matches CS scripts. Open topics: brand kit vs operator language, ads treatment, voucher hub, packing density, motion budget, support-path frequency, Figma Story ownership | Final brand polish or Market ad density without another design pass |

**How I would run a working session (if we go deeper than the interview)**  
1. Playback research with bias labels (n=12 is directional).  
2. Walk the demo spine only.  
3. Open the toolbar: reconcile eng events, design language, sales claims, CS playbook.  
4. Triage §7 Later theme by theme: none forgotten, none smuggled into v1.  
5. Spike watching + confirm + cascade + Day 0 before Market polish.

Open topics I would bring to Sales / CS / Partnerships: panel economics and disclosure; partner weekly reports; Market ads rules; voucher hub vs spam; when AI FAQ ends and a human starts; specialist change-management (tell them week 0).

Open topics for Design (same list, more detail in the design working notes): operator language vs brand kit; trust-safe sponsored Market; Revolut-like vouchers vs simple Market; packing hierarchy vs calm; feature voting later; how often to show the human support path; 2 to 3 intentional motions; who owns the Figma Story template.

---

# 7. Later / discuss

These are **intentional bets and questions**, parked by theme until debated. They sit outside the v1 spine on purpose.

**If I had to pick three to build next:** (1) harden honest receipts and chase anything stuck in `sent · no receipt`, (2) weekly partner report on what happened to referrals, (3) room / furniture planner from the survey surprise. Everything else waits.

| Theme | Parked ideas |
|---|---|
| **Commercial & ads** | Sponsored Market listings (Checkatrade-like); voucher hub; commission design (explore charging only for discovery so suppliers do not push cash off-app); business branding packs; complementary apps e.g. Mindspace-like (labelled affiliate) |
| **Discovery & acquisition** | One-question A/B; referral ads; international first-mover kit; SEO + LLM / app-store findability |
| **Tasks & stickiness** | Packing tab; Notion-like box hierarchy; user todos; feature vote board; **2D room / furniture planner** (survey surprise); shared packing playlist / checklist with a packing partner |
| **Marketplace** | Broader catalogue; supplier stories; Treatwell/Fresha depth |
| **Day 0 / brand** | Celebration vs factual split; haptics; show the human support path less often on low-stakes screens; neighbour events; avatar + ruler-camera tools that do not fight main UI; first-night “what’s open nearby” soft landing |
| **Settings** | Font size; deeper web parity |
| **Analytics / agents** | Backwards from best data layout; incident automations; weekly partner report agent |
| **Partner ops** | Partner Day 0 notify; discovery on agent↔mover streamline (report first) |
| **CS ops** | Peak coverage around exchange / Day 0 / failed automation; named fallback if primary unavailable; confirm whether 24/7; when AI FAQ ends and a human starts (capacity) |
| **Research / content** | **User-collected stories for branding:** reuse survey + storytelling language for Marketing (LinkedIn / SaaS, later newsletter); rituals research; partner discovery interviews |
| **Process** | In-flow surveys; watch sessions; Loom homework; UI style experiments (Monzo/Revolut/Wise/…); soft wavy aesthetic experiment |

---

# 8. Handoff judgment

**What I would hand over:** the clickable prototype, plus short rules an engineer can trust (while watching: no outbound; confirmed only with a receipt; date changes never silently drop work), and the toolbar notes that spell out design / eng / sales / CS implications per screen (§6 in prose; demo toolbar in practice).

**Why this form:** each stakeholder can click the spine and see their non-negotiables in context. That beats a static deck for co-building.

**Good enough without a polish designer for:** flow, states, ownership split, honest status, confirm commerce, Day 0 capture, Market labelling.

**Needs another designer’s hand for:** final visual system alignment to JMI brand kit, motion polish, Market density / sponsored-ad rules if those ship, packing / stickiness surfaces in Later.

**CS / ops:** the named customer support person must stay real on money, complaints, vulnerability, and twice-failed automation. Peak-stress coverage and capacity are open questions with JMI, not assumed solved in the demo.

---

# 9. Suggested path through the demo

1. Referral → Continue (you are still in watching: profile only, no supplier contact)  
2. Discovery → Basket → Confirm  
3. Home stages · Pre-move (You vs Jay) · Day 0  
4. Tasks (List / Board / Visual)  
5. Market · Settings · Ask Jay / connect to a person  
6. Toolbar: **By team** first; **Why this** second  

---

# 10. Where the rest of the work lives

This page + the demo are enough for a short interview skim. For a deep check in the repo, start at the **wiki spine:** [`docs/wiki/00-INDEX.md`](wiki/00-INDEX.md) (Approach → Research → Product → Eng → Design → …). Numbered root files are instruments linked from those notes. Repo front door: https://github.com/analogue-tools/just-move-in · `README.md`.
