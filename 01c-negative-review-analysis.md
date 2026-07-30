# Deliverable 1c: The Negative Tail
### 60 reviews at 3 stars and below · what they change
**Jeanne Piffaut · July 2026**

Repo map: [`README.md`](README.md). Notion skim: [`docs/CASE-STUDY.md`](docs/CASE-STUDY.md).

---

## 0. The sample

60 reviews, 1 to 3 stars, dated May 2024 to July 2026. Roughly 40 carry a company reply, and those replies are often more informative than the reviews because they state policy.

This is the dataset I asked for in Deliverable 1 and did not have. It matters because the positive sample I worked from was drawn from Trustpilot's own positive theme sets and contained nothing below 5 stars. **It told me what works. It could not tell me what breaks.**

Reviews are coded by theme below. Most carry more than one, so the counts sum to more than 60.

---

## 1. The headline

**The five star reviews are about the call. The one to three star reviews are almost never about the call. They are about what happened before it and after it.**

At least **10 of the 60** explicitly praise the person while rating the service 1 to 3 stars. The pattern is consistent enough to quote in outline: the agent was pleasant, thorough, friendly, efficient, and then nothing happened. One reviewer describes being impressed enough to have planned a glowing review. Another wrote a positive review when prompted, then discovered none of the agreed changes had been made.

**In Deliverable 2 I wrote that the failure mode is "variance in follow through". That is too generous and I want to correct it.** The failure mode is a structural gap between what the call promises and what the system afterwards does, and the negative tail shows it is not occasional.

This has a direct strategic consequence. **Automating the call would be solving the part that already works.** The product is the execution layer and the receipts, not the conversation.

---

## 2. Nine themes

### T1 · Silent non-execution · 18 of 60 · the most damaging pattern

Told it was handled. It was not. Discovered weeks later through a bill, a debt letter or a chase.

Council tax not registered at either authority. Water accounts left open at the old address. Old energy supplier never told, so direct debits kept running. Broadband orders that were never actually placed, discovered only when the mover called the provider. One reviewer had a follow-up email summarising exactly what was agreed, and none of it happened.

**Why it happens is visible in the company's own replies.** Notifications are sent seven days *after* the move date, and processing is said to take up to six weeks for water and councils. So a mover can be up to seven weeks from their call with no confirmation, no visibility, and no way to check. Several reviewers describe discovering the gap at week two and assuming incompetence, when the policy is that nothing had been sent yet.

| | |
|---|---|
| **Technical** | This is the `unconfirmable` state, and the negative tail promotes it from a nice honesty touch to the single most important feature in the product. Every Tier 2 notification needs a visible lifecycle: queued, sent on this date, chased on this date, confirmed or explicitly not confirmable. A summary email is a promise. Only a state is a receipt. |
| **Customer** | The mover's real question is never "did you say you would do it". It is "has it actually happened". A product that answers that question continuously is a different product from one that answers it once on a call. |

### T2 · Consent and unwanted contact · 16 of 60

Details passed by letting agents, OpenRent, AnyVan, Settio, Acorn and Goodlord without the mover knowing. Calls during work hours, on Saturdays, repeatedly, sometimes weeks before a move and sometimes to people who were moving *out* rather than in. Opt-out requests not honoured. One reviewer reports messaging to say stop, and being called again.

Two details make this worse than ordinary marketing friction. Contact is described as arriving with wording that sounds administrative rather than commercial. And the company's own reply frames it plainly: as a sales company, they contact customers a few times.

| | |
|---|---|
| **Technical** | Consent scope, source and timestamp must be fields on the move record, and a one tap opt-out must propagate to every channel within minutes, not on request to an inbox. Contact frequency needs a hard cap per state. A mover in `watching` should receive almost nothing. |
| **Customer** | This is the sceptical first-contact persona, and it is worse than I modelled. The default assumption on first contact is not indifference, it is suspicion of a scam. The opening screen has to survive that. |

### T3 · Actions taken on the wrong property or wrong person · 9 of 60

The most serious category, because the damage lands outside the transaction.

A new energy account opened in a mover's name at the address she had left, leading to overdue notices and a debt collection threat. Utility contracts cancelled at the address of a family member who had not moved at all. A landlord's utility accounts closed without authorisation and new ones opened in tenants' names when the tenancy made utilities the landlord's responsibility. Suppliers told a household was moving out when they had not yet moved. Three separate energy accounts created for one mover, including one at the old property.

| | |
|---|---|
| **Technical** | **A liability check is a missing primitive in my data model and I am adding it.** Before any notification fires, the system must resolve: which property, which person is liable, from which date, under what agreement. Tenure and bill responsibility are tenancy facts, not address facts, and the landlord case proves the address alone is not enough. |
| **Customer** | The consequence of a wrong action here is a credit file, not an inconvenience. That asymmetry justifies a confirmation step even where the task is otherwise auto-run. |

### T4 · Commercial opacity · 13 of 60

Two distinct sub-patterns, and they need different fixes.

*The consolidation premium.* Movers placed with bill bundling services and quoted figures well above going direct. One reports roughly double. Another, on a six month let, was quoted a package around three times their previous larger home. The company reply concedes that consolidation carries a premium and that short tenancies make the difference more pronounced. That is a true and reasonable explanation which the customer did not receive until after they complained.

*The panel presented as the market.* One reviewer says they were told a provider was the only one available in their area and later found several. Others describe an exclusive deal that comparison sites beat easily.

| | |
|---|---|
| **Technical** | Commission disclosure alone does not cover this. The offer object needs the **panel scope** stated on the card, and where a category is thin at that postcode the card must say so. The saving figure must be against a named baseline, and where the recommendation is more expensive than the market for a stated reason, that has to be visible before purchase rather than in a complaint response. |
| **Customer** | This is the exact fear the trust data predicts: 75% trust an agent less when recommendations are paid for. These reviews are that statistic happening. |

### T5 · Payment and identity mechanics that read as fraud · 6 of 60

A one time passcode requested over an inbound call. Bank details and direct debits taken on unsolicited calls. A £10 charge appearing under a company name the customer did not recognise, for a deposit the provider later said it does not take. An agent asking to verify the customer's identity before stating who he was or where he was calling from.

| | |
|---|---|
| **Technical** | Never take an OTP by voice, ever. Any charge must present a descriptor the customer recognises. Payment should move to a link the mover opens themselves, which also solves the audit trail. |
| **Customer** | The service's own mechanics are currently indistinguishable from a scam script, and several reviewers say exactly that. For an AI version this is fatal rather than awkward, because a machine asking for bank details on an unsolicited call has no plausible defence. |

### T6 · Continuity collapses on the second contact · 6 of 60

Different person each time with no context. The original specialist unreachable. Details repeated across calls. A 45 minute queue ending in contradictory information. An agreed call slot missed, which one reviewer says destroyed their confidence outright.

| | |
|---|---|
| **Technical** | The named owner needs to be a real assignment with a real routing rule, not a label on a first call. |
| **Customer** | The named specialist is JMI's greatest asset and its most fragile one. It works beautifully once. The moment a mover needs a second conversation, the magic inverts into "I have explained this three times". |

### T7 · The seven week information vacuum · policy, not accident

Pulled out separately because it is the root cause of T1 and it comes from the company's own replies rather than from a reviewer's guess.

Notifications go out seven days after the move date. Councils and water can take six weeks to process. During that window the mover has no status, no receipt and no way to verify, and the only signal they eventually receive is often a bill from a supplier who was never told.

| | |
|---|---|
| **Technical** | If the delay is deliberate, and there are good reasons for it around meter readings and last minute changes, then the delay must be *shown*. A task in `queued, sends 21 August` is honest. A task shown as done on the call is not. |
| **Customer** | Movers are not angry about the seven days. They are angry about discovering it by accident, seven weeks later, from a debt letter. |

### T8 · Vulnerability handled without a safety net · 3 of 60, but severe

One case stands out and I would put it in front of the team directly. A mover was switched supplier, and only afterwards did it emerge that the property was on a prepayment meter requiring a separate process. They were left over a weekend not knowing whether they had one supplier, two, or none, while dependent on mains powered medical equipment.

Separately, a mover acting for elderly parents had her own address affected, and a disabled customer had a difficult experience with a recommended removals partner.

| | |
|---|---|
| **Technical** | **Mandatory pre-switch validation: meter type, prepayment status, and vulnerability flag, before any energy action.** No switch executes without them. The Ofgem Priority Services Register should be offered at the same point rather than as an afterthought. |
| **Customer** | disabled movers are one of the two segments the research flags who value this service most. This is the same segment carrying the highest downside when it goes wrong. |

### T9 · Referral partner damage · 4 of 60

Two reviews are about a removals company entirely, and JMI has to reply explaining they do not provide removals. Two more blame JMI for a recommended remover's failures.

| | |
|---|---|
| **Technical** | Referred suppliers need the same status tracking and the same disclosure as panel suppliers, or the brand absorbs their failures without any ability to intervene. |
| **Customer** | A recommendation is an endorsement. The mover does not distinguish between who we sold and who we suggested. |

---

## 3. What this changes

| I previously said | The negative tail says | Change |
|---|---|---|
| The failure mode is variance in follow through | It is a structural gap between the call's promise and the system's execution, visible in 18 of 60 | Reframed. The product is receipts, not conversation |
| `unconfirmable` is an honesty touch that differentiates us | It is the fix for the single largest source of complaints | Promoted to the core feature of V1 |
| First contact meets a sceptic | First contact often meets someone who thinks they are being scammed, and did not consent to the referral | Opening screen redesigned around consent and opt-out, not around value proposition |
| Commission disclosure covers the trust problem | It does not cover consolidation premiums or panel gaps | Panel scope and baseline now required fields |
| Autonomy can be defaulted by consequence class | Wrong-property actions have credit file consequences even for free notifications | Liability check required before any auto-run task |
| Voice on moving day, two intents | Voice is currently associated with unsolicited sales calls and OTP requests | Voice is outbound only, on a pre-agreed slot, and never takes payment or credentials |

---

## 4. Five new hard requirements

These go into the spec as non-negotiable.

**R1 · Liability resolution before any action.** Resolve property, liable person, start date and agreement type before firing a single notification. Reject if unresolved rather than defaulting to the mover.

**R2 · Every task shows its real lifecycle.** Queued with a send date, sent, chased, then confirmed or explicitly not confirmable. Nothing is ever displayed as complete on the basis of a conversation.

**R3 · No credentials or payment by voice.** No one time passcodes, no card details, no direct debit setup on a call. Payment moves to a link the mover opens, with a recognisable descriptor.

**R4 · Pre-switch safety validation.** Meter type, prepayment status and vulnerability flag are mandatory before any energy switch executes, with the Priority Services Register offered at the same point.

**R5 · Consent is a first class object.** Source, scope and timestamp stored. One tap opt-out propagating to every channel within minutes. Hard contact caps per move state, with near silence in `watching`.

---

## 5. What I would still want

**The middle.** I now have the top and the bottom of the distribution and nothing in between. The 4 star reviews would tell me what nearly worked, which is usually where the cheapest fixes live.

**Volumes.** 60 negative reviews against 3,700 total is not a crisis rate on its own. What matters is whether T1 is 18 out of 60 complainers or 18% of all moves, and only internal data answers that. **The complaint themes tell me what to design for. They do not tell me how common it is, and I would not present them as if they did.**

**The seven day policy rationale.** There are legitimate reasons to wait, and I want the real one before I design around it.

---

## 6. The uncomfortable version, which I would say on the call

The five star reviews describe a service that takes the stress away. A meaningful slice of the one star reviews describe a service that added stress on top of a move, sometimes with financial consequences, to people who never asked to be contacted.

Both are true. They are describing different parts of the same company: the conversation, and everything around it.

**That is the strongest possible argument for the direction in this PRD.** Not because AI is better at talking to people, but because the failures here are systems failures: state that is never tracked, actions taken without checking who is liable, consent that is not modelled, and a seven week window where nobody, including JMI, actually knows what has happened. Those are exactly the problems software is good at and humans on a fifty minute call are not.
