# Feature bridge · research → product
**Jeanne Piffaut · July 2026**

Wiki home: [`docs/wiki/00-INDEX.md`](../00-INDEX.md). Notion skim: [`docs/CASE-STUDY.md`](../../CASE-STUDY.md).

This table is the spine: what we ship (or propose), why (research), how it is delivered (design / behavioural intent), data, and commercial role.

**Objective tags:** `cash-once` · `cash-partner` · `cash-utility` · `sticky` · `emotion` · `trust` · `ops`

---

## Core spine (in the demo)

| Feature | Description | Source / why | How delivered & why | Data from interaction | Commercial / objective |
|---|---|---|---|---|---|
| **Watching gate** | Profile stored; no outbound until exchange | Connells 37%; Trustpilot unsolicited contact 16/60; Survey Q5 | Referral copy + pause/opt-out as equals. Gives before it asks. | `referral_continue` / `pause` / `opt_out` | `trust` |
| **Named referrer** | Agent person named (Priya Shah) | Trust + partner channel reality | Eyebrow + first sentence. Social proof of provenance. | partner_id, agent_name | `trust` · partner relationship |
| **LOA plain English** | Signed permission visible | Control fears; SlothMove LoA pattern | Receipt chip `signed · active` on Home | loa_status | `trust` · enables `ops` |
| **Discovery (collect once)** | Household / occupancy / tenancy once | Survey Q4/Q6; retype pain | Structured choices; Ask Jay side channel. Nudge to complete. | discovery answers | feeds `cash-utility` |
| **One-pick basket** | Energy, broadband, contents | Ofgem one-offer conversion; opacity 13/60 | Recommended prominent; alts via arrows; reasons (tenancy, install, exit fee, cover day) | plan_selected, safety flags | `cash-utility` |
| **Panel fee disclosure** | Same fee across panel | Quad/Harris paid-looking AI; CAP | Once at basket foot | ack_panel_fee | `trust` · `cash-utility` |
| **Energy safety gates** | Prepay / medical / PSR | Trustpilot near-miss | Hard path before confirm | safety_check_* | `trust` · `ops` |
| **Confirmed closure** | Jay handling vs Needs you | “Told handled” 18/60 | Calm split; honest states | confirmed_view | `emotion` · `trust` |
| **Honest states** | `sent · no receipt` ≠ confirmed | SlothMove verification gap; ACI one mistake | sent · no receipt state; chase date | task.state, receipt_id | `trust` · `ops` |
| **Pre-move ownership** | You vs Jay lists | Invisible failure / praise for handling | You first, Jay below | task.owner | `ops` · `sticky` |
| **Day 0 voice + UI** | Keys then meters | Access conditions; Survey voice=0 for completion | Voice can lead; buttons always. Ritual after Yes (affordance + feedback). | keys_yes/no, meter_* | `ops` · `emotion` |
| **Tasks List / Board / Visual** | One dataset, three lenses | Buell & Norton operational transparency | List default on phone; Board; Visual progress | task_view, task_open | `sticky` · `ops` |
| **Date change cascade** | Date mutable; lost must be 0 | Connells timelines; specialist multi-touch | Diff: moved / redo / lost | move_date_changed | `ops` · `trust` |
| **Ask Jay + FAQ** | Soft questions | Agents resolve ~38-50%; chat not front door | Side channel | faq_open, chat_send | `ops` |
| **Customer support human agent escape** | Named human | 35/39 name a person; Kinch & Buell | Always reachable on high stakes | escalate_cs_agent | `trust` · `emotion` |
| **Market** | Local help; labelled | Survey Q14 discounts+guides | Intention-led search; trust lines; panel fee note | market_search, listing_open | `cash-partner` · `sticky` |
| **Post-move survey** | Optional, skippable | Learning loop | Soft card; skip always | survey_* | research · `sticky` |
| **Settings controls** | Pause, opt-out, LOA, audit; left-hand mode | Consent; ~1 in 10 left-handed; Day 0 one free hand | Grouped settings; flip ask bar / nav primary taps | settings_*, `settings_left_hand_toggle` | `trust` |

---

## Behavioural / UX intent (short)

| Surface | Intent lens |
|---|---|
| Discovery | **Nudging** toward complete, reusable answers |
| Basket | **Choice architecture** (defaults + disclosure), not comparison theatre |
| Tasks | **Explorative / transparency**, show the work |
| Market | **Intention-led**, search and filters, not banner spam |
| Day 0 Yes | **Ritual + feedback**, action that symbolises moving in (haptic / confetti ideas in Design Later) |

---

## Potential future features (not in demo spine)

See [08 · Later / discuss](08-LATER-DISCUSS.md) for full categorisation. High-signal examples:

| Idea | Metric family | Customer | AARRR-ish seat |
|---|---|---|---|
| Packing / box hierarchy | Stickiness, retention | Mover | Retention / engagement |
| User-added todos + vote board | Feature discovery | Mover | Retention → product insight |
| Sponsored partner listings | Partner cashflow | Partner + mover | Revenue |
| Voucher hub (intent-led) | Affiliate + sticky | Mover | Revenue / retention |
| Weekly partner agentic report | Partner value | Estate agent | B2B retention |
| Meet your neighbour events | Brand / emotion | Mover | Retention |
| International first-mover kit | Acquisition niche | International mover | Acquisition (parked) |

---

## Live in the demo

Toolbar leads with **By team**.  
**Why this**: the problem · the design · the evidence (numbers + source) · road not taken.  
This markdown table remains the compact spine.
