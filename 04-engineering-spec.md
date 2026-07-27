# Deliverable 4b: Engineering Handoff Spec
### Jay · agentic home setup · v0.4
**Jeanne Piffaut · July 2026**

Wiki home: [`docs/wiki/00-INDEX.md`](docs/wiki/00-INDEX.md). Notion skim: [`docs/CASE-STUDY.md`](docs/CASE-STUDY.md).

---

## 0. How this pairs with the prototype

Two artifacts, one handoff.

| Artifact | What it is | What it is authoritative for |
|---|---|---|
| `04-demo/index.html` | Single file, no build step, vanilla JS | **Visual truth.** Spacing, type, colour, component structure, motion. Lift the CSS directly |
| This document | Written spec | **Behavioural truth.** States, transitions, contracts, edge cases, acceptance criteria |

**Rule when they disagree:** the prototype wins on anything visual, this document wins on anything behavioural. If the prototype shows a state this document does not define, this document is wrong and needs updating.

The bridge between the prototype and this behavioural spec is [`FLOWS-EVENTS-ANALYTICS.md`](FLOWS-EVENTS-ANALYTICS.md): full journey charts, per-surface event maps, and the analytics dashboard mock.

**What the prototype deliberately fakes:** all data is static, there is no backend, the voice screen is a visual mock rather than working audio, and the OCR reading is hard-coded. Everything else, including the layout system, the state rendering and the cascade interaction, is real and buildable as shown.

---

## 1. Design tokens

Copy from `:root` in the prototype. Reproduced here as the canonical list.

### Colour

| Token | Value | Job | Never use for |
|---|---|---|---|
| `--ink` | `#12121a` | Primary text | Backgrounds |
| `--ink-2` | `#4a4a5c` | Secondary text, body copy | Headings |
| `--ink-3` | `#86869b` | Metadata, labels, disabled | Anything a user must read to act |
| `--paper` | `#f4f4f9` | App ground | Cards |
| `--card` | `#ffffff` | Card surface | |
| `--line` | `#e6e6ef` | Dividers, hairlines | Text |
| `--violet` | `#5b3df5` | Jay, primary action, current stage | Success. Jay is not an outcome |
| `--violet-sub` | `#ede9ff` | Violet tint backgrounds | |
| `--amber` | `#a75c07` | **Deadline pressure** | Errors. Amber means "time", not "wrong" |
| `--amber-sub` | `#fdf1e0` | | |
| `--moss` | `#12664c` | **Confirmed by the destination** | Anything we have not had confirmed |
| `--moss-sub` | `#e3f3ec` | | |
| `--fog` | `#5d7391` | **Sent, no receipt available** | Success or failure states |
| `--fog-sub` | `#eaeff5` | | |

**The `--fog` token is load bearing and must not be collapsed into a success or error colour in code review.** It exists because a large share of Tier 2 destinations, principally councils, provide no confirmation mechanism. Competitors render a green tick here that they cannot substantiate. We render a third state that is visibly neither. This is a product decision, not a palette decision.

There is no red in the palette. Genuine failures use `--amber` with explicit copy. Red was omitted deliberately: in a product used by anxious people, a red state on a council notification reads as catastrophe when the correct reading is "we will chase this on Tuesday".

### Type

| Role | Family | Usage |
|---|---|---|
| Display and body | Instrument Sans, 400 to 700 | All prose, headings, buttons |
| Utility and data | IBM Plex Mono, 400 to 600 | **All states, all labels, all figures, all timestamps** |

**The mono is not decorative.** Every machine-derived value renders in mono: task states, prices, percentages, dates, meter readings, commission amounts. Every human-written value renders in sans. A reader should be able to tell at a glance which parts of the screen came from a system and which came from a person. This is the visual signature of the product and it should be enforced in review.

| Style | Size | Weight | Tracking | Line height |
|---|---|---|---|---|
| Display | 27px | 600 | -0.025em | 1.14 |
| Section title | 15px | 650 | -0.015em | 1.3 |
| Body | 14.5px | 400 | 0 | 1.5 |
| Task name | 14.5px | 600 | -0.01em | 1.3 |
| Task reason | 12.5px | 400 | 0 | 1.45 |
| Eyebrow (mono) | 10.5px | 500 | 0.09em | uppercase |
| State (mono) | 11px | 500 | -0.01em | lowercase |

### Space and shape

8pt grid. `--s1` 4, `--s2` 8, `--s3` 12, `--s4` 16, `--s5` 24, `--s6` 32, `--s7` 48, `--s8` 64.
Radii: `--r-sm` 8, `--r-md` 14, `--r-lg` 20, `--r-xl` 28.

### Motion

| Purpose | Duration | Easing |
|---|---|---|
| Screen enter | 320ms | `cubic-bezier(.2,.8,.2,1)` |
| Card hover lift | 180ms | `cubic-bezier(.2,.8,.2,1)` |
| Cascade row stagger | 500ms, 70ms delay per row | `cubic-bezier(.2,.8,.2,1)` |
| Progress fill | 800ms | `cubic-bezier(.2,.8,.2,1)` |

`prefers-reduced-motion: reduce` collapses everything to 0.001ms. Already implemented, do not remove.

---

## 2. Component inventory

Every component in the prototype, with its contract. Class names map exactly.

| Component | Class | Props | Variants | Notes |
|---|---|---|---|---|
| Stage stepper | `c-stepper` | `stages[]`, `currentIndex` | none | Four stages, fixed. Not user-configurable |
| Task row | `c-task` | `task` | `data-urgent` | Must-do register only. Never renders could-do items |
| Could-do card | `c-could` | `item` | none | No state, no deadline, no progress |
| State chip | `c-state` | `state` | `done`, `sent`, `needs`, `blocked`, `live` | Text is lowercase mono. See §3.2 for the string table |
| Transparency panel | `c-trans` | `task` | none | Renders 7 rows: what, who, when, where, why, status, cost |
| Offer card | `c-offer` | `offer` | none | **Exactly one per category.** Never render a list |
| Disclosure block | `c-disclosure` | `commission`, `socialProof` | none | **Both fields render in one block or neither renders.** See §5.2 |
| Alternatives expander | `c-exp` | `rejected[]` | none | Collapsed by default, always |
| Trust markers | `c-trust` | `markers[]` | none | Real figures only, pulled from a live source |
| Named human | `c-human` | `owner` | none | Required on referral, task detail, escalation |
| Date bar | `c-datebar` | `moveDate`, `source` | none | Persistent on the plan. Change action always visible |
| Cascade diff | `c-diff` | `diff` | `warn`, `ok` | Three figures: rescheduled, needs redoing, lost |
| Voice panel | `c-voice` | `transcriptLine`, `duration` | none | Day 0 only |
| Meter capture | `c-meter` | `reading`, `capturedAt`, `photoRef` | none | Reading confirmed aloud before submit |
| Home view | `c-home` | `completedTaskIds[]` | none | SVG elements map to task IDs. Additive only, never removes |
| Ask bar | `c-ask` | none | none | Sticky. Present on every in-move screen |
| Bottom nav | `c-nav` | `current` | none | Four tabs, matching the starter Figma |

---

## 3. State machines

### 3.1 Move state

```
watching ──(exchange_confirmed)──> armed ──(basket_confirmed)──> active
                │                                                   │
                │                                            (keys_confirmed
                │                                             OR date passed)
                │                                                   ▼
                └──(fall_through)──> cancelled                    moved
                                                                    │
                                                          (move_date + 1d)
                                                                    ▼
                                                                settling
                                                                    │
                                                         (move_date + 15d)
                                                                    ▼
                                                                 dormant
```

| State | Outbound tasks fire? | Notes |
|---|---|---|
| `watching` | **No** | Profile stored only. This is enforced at the task scheduler, not in the UI |
| `armed` | Yes | Discovery invited. Plan generated |
| `active` | Yes | Orders placed, touchpoints scheduled |
| `moved` | Yes | Day 0 voice intents unlock. They are locked in every other state |
| `settling` | Yes | Post-move task set |
| `dormant` | Renewal only | Contract end dates seeded for T+11 months |
| `cancelled` | **No** | Pending tasks halted, submitted ones reversed where the destination permits, one honest message sent |

**The `watching` gate is the most commonly broken rule in a build like this.** 37% of pre-exchange moves never complete. If a notification fires in `watching`, we have contacted a council about a move that is not happening. Enforce it server-side.

### 3.2 Task state

| State | Chip variant | Display string pattern | Meaning |
|---|---|---|---|
| `blocked` | `blocked` | `blocked · <reason>` | Dependency unmet. Example: `blocked · needs keys` |
| `ready` | `needs` | `do by <date>` | Actionable, not yet started |
| `awaiting_confirm` | `needs` | `needs you · <effort>` | Requires the mover's tap. Money or contract |
| `submitted` | `live` | `in progress` | Sent, awaiting response |
| `confirmed` | `done` | `confirmed` or `<detail>` | **Destination acknowledged. Only reachable with a real receipt** |
| `unconfirmable` | `sent` | `sent · no receipt` | Sent, destination provides no confirmation |
| `failed` | `needs` | `redo · <reason>` | Rejected. Reason must name what the mover has to do |
| `escalated` | `live` | `<owner name> is on it` | Assigned to the named human |

**Validation rule.** A task may only enter `confirmed` if `destination.confirmationMethod != null` and a receipt is stored. If `confirmationMethod` is null, the terminal success state is `unconfirmable`. This should be a database constraint, not a convention.

### 3.3 The `move_date_changed` cascade

Fires from a partner feed or the `c-datebar` control.

```
1. Persist newDate. Retain oldDate for the diff.
2. For each task in the plan:
   a. Recompute scheduledAt from its offset against newDate.
   b. If task.state in (submitted, confirmed, unconfirmable):
        if destination.amendable  -> issue amendment, state stays, log it
        if !destination.amendable -> state = failed
                                     reason = "<destination> cannot amend, needs redoing"
   c. If task.state == blocked: re-evaluate dependencies, may become ready.
   d. If newDate makes the task impossible (lead time exceeded):
        state = failed, reason names the constraint. NEVER silently drop.
3. Recompute time-compressed mode: daysToMove < 14 flips ranking to speed.
4. Emit diff { rescheduled, needsRedoing, lostOrReentered }.
   lostOrReentered MUST be 0. If it is not, that is a bug, not a message.
5. Send one message. Not one per task.
```

**Known non-amendable destinations to encode on day one:** Royal Mail redirection start date, most broadband install slots inside 48 hours, some council change-of-occupancy submissions. This list belongs in the rules table, not in code.

---

## 4. Data contracts

### 4.1 Move record

```json
{
  "moveId": "mv_8f21c",
  "state": "active",
  "source": { "partnerId": "ktl_camden", "referredAt": "2026-07-19T09:12:00Z",
              "consentScope": ["address","dates","household"], "consentAt": "2026-07-19T09:14:22Z" },
  "moveDate": "2026-08-14",
  "moveDateSource": "solicitor_feed",
  "moveDateConfidence": "confirmed",
  "exchangeConfirmedAt": "2026-08-02T14:03:00Z",
  "from": { "uprn": "100021... ", "postcode": "N1 3XX", "council": "islington" },
  "to":   { "uprn": "100023... ", "postcode": "NW5 3QT", "council": "camden",
            "waterRegion": "thames", "tenure": "rented", "tenancyMonths": 12 },
  "household": { "adults": 2, "children": 0, "homeInDay": true, "pets": [] },
  "flags": { "vulnerability": false, "novice": true, "timeCompressed": true },
  "owner": { "userId": "sp_cs_agent", "name": "customer support human agent", "movesCompleted": 340 },
  "autonomyScopes": { "notifications": "auto", "commerce": "confirm", "renewals": "ask" }
}
```

`moveDateConfidence` is `estimated` in `watching` and `confirmed` from `armed` onward. The UI must not show a confirmed-looking date while confidence is `estimated`.

### 4.2 Task

```json
{
  "taskId": "tk_council_new",
  "moveId": "mv_8f21c",
  "catalogueId": "council_tax_register",
  "tier": 2,
  "list": "must",
  "state": "unconfirmable",
  "stateReason": null,
  "actor": "jay",
  "effortMinutes": 0,
  "offsetDays": 0,
  "scheduledAt": "2026-08-14",
  "deadlineAt": "2026-09-04",
  "dependsOn": ["tk_loa_signed"],
  "destination": { "name": "London Borough of Camden", "team": "Council tax",
                   "method": "occupancy_form", "confirmationMethod": null,
                   "amendable": true, "chaseAfterDays": 2 },
  "why": { "consequenceText": "Council tax is charged daily from the day you move in...",
           "penaltyGbp": 70, "windowDays": 21, "ledgerRef": "ledger.council_tax.camden" },
  "commissionGbp": 0,
  "auditRef": "aud_9931"
}
```

### 4.3 Offer

```json
{
  "offerId": "of_energy_1",
  "category": "energy",
  "rank": 1,
  "supplier": "OVO",
  "product": "12M Fixed",
  "monthlyGbp": 118,
  "savingVsDefaultGbp": 214,
  "defaultBaseline": "deemed_tariff_incumbent",
  "reasonText": "Fixed for exactly as long as your tenancy...",
  "reasonFactors": ["tenancy_months=12","household_adults=2","home_in_day=true"],
  "attributes": ["12 months","100% renewable","no exit fee"],
  "activationDays": 5,
  "commissionGbp": 38,
  "commissionDisclosureText": "We earn £38 if you switch. It does not change your price.",
  "socialProof": { "share": 0.64, "sampleSize": 187,
                   "cohort": "2-adult households moving into NW5",
                   "denominator": "all_who_saw", "suppressed": false },
  "rejected": [ { "supplier": "British Gas", "reason": "18 month term, longer than your tenancy" } ]
}
```

**`savingVsDefaultGbp` must be computed against the deemed tariff or incumbent renewal price, never against a list price.** Movers are financially depleted at this moment and an inflated saving is the fastest route to a complaint.

**`socialProof.suppressed`** is set true and the block is hidden when `sampleSize` is below threshold. Recommended threshold: 50. Never round up, never say "most".

---

## 5. Business rules that must not be relaxed

### 5.1 One recommendation per category

`GET /offers?moveId=` returns `rank: 1` only in the primary payload. Rejected alternatives ship inside the offer object for the expander. **The API should make it awkward to render a comparison grid.** Ofgem trials: single offer 14.0 to 29.5% conversion, three or more 2.4 to 13.4%.

### 5.2 Commission and social proof are one block

The `c-disclosure` component renders both fields or neither. If `commissionGbp > 0` and social proof is suppressed, the block still renders with commission alone. **Social proof must never render without commission beside it.** Split apart, a percentage next to a paid recommendation reads as a sales device and retroactively discredits everything else on the screen.

### 5.3 Disclosure wording

CAP Code rule 2.1 requires commercial intent to be obvious. The ASA has ruled the standalone label "affiliate" is not sufficient because consumers do not reliably understand it, and that a disclaimer at the foot of a page is unlikely to be enough. Use plain English at the point of choice: **"We earn £X if you buy this."** This applies identically to panel commission and to affiliate items in the could-do tier.

### 5.4 Autonomy gating

| Task class | Default scope | Requires confirm |
|---|---|---|
| Reversible, no money: council, water, TV licence, redirect | `auto` | No, covered by the LoA |
| Money or contract: energy, broadband, insurance | `confirm` | **Yes, always** |
| Renewals at T+11 months | `ask` | Yes, and re-consented |

Only 9% of consumers accept fully autonomous purchasing. There is no configuration that moves commerce to `auto`.

### 5.5 Escalation triggers

Automatic assignment to the named owner on: distress language detected, a task failing twice, complaint intent, `flags.vulnerability = true`, `flags.novice = true` combined with two abandoned sessions, or `daysToMove <= 7` with any must-do task incomplete.

---

## 6. Voice agent scope

Two intents at launch. Both locked unless `move.state == moved`.

| Intent | Entry | Success condition | Failure route |
|---|---|---|---|
| `keys_confirmed` | Outbound call on move date, or inbound | Move state set to `moved`, downstream notifications fired with correct date, council tax start date read back | Transfer to owner |
| `meter_capture` | Same call | Reading OCR'd, **read back aloud and confirmed by the mover**, photo stored with timestamp, submitted to both suppliers | Transfer to owner |

Anything outside these two intents transfers. Do not add a general question-answering intent to the voice channel in v1.

**Required behaviours.** Disclose AI status at call open. No simulated human tells. Never take a financial commitment by voice. Reading is confirmed aloud before submission, never assumed from OCR alone.

---

## 7. Analytics events

Minimum set to compute the north star, Critical Path Completion.

Event names match [`FLOWS-EVENTS-ANALYTICS.md`](FLOWS-EVENTS-ANALYTICS.md) and [`HANDOFF.md`](HANDOFF.md) §9. Minimum set for Critical Path Completion:

| Event | Properties |
|---|---|
| `referral_continue` / `discovery_complete` / `basket_confirmed` | `moveId`, funnel step |
| `task_state_changed` | `taskId`, `catalogueId`, `from`, `to`, `reason`, `actor` |
| `critical_task_completed_in_window` | `catalogueId`, `daysBeforeDeadline` |
| `critical_task_missed_window` | `catalogueId`, `daysLate`, `estimatedCostGbp` |
| `move_date_changed` | `oldDate`, `newDate`, `lost` (must stay 0) |
| `plan_selected` / `ack_panel_fee` / `basket_confirmed` | `offerId`, `category`, `rank` |
| `panel_fee_view` | `surface` |
| `human_escape_tap` | `screen`, `trigger` (`user` or `auto`) |
| `keys_confirmed` / `meter_read_submit` / `voice_session_start` | `intent`, `channel` |
| `notify_unconfirmable` | `catalogueId`, `destination` |

**Counter metric queries to build alongside:** complaint rate, cancellation within 14 days of a switch, re-presentation of a declined recommendation (must be zero), time to human for vulnerability-flagged movers, and share of `confirmed` states later proven false.

---

## 8. Acceptance criteria

Written so they can be pasted into tickets.

**Referral screen**
- Renders with `move.state == watching` and fires zero outbound tasks
- Shows the full 31-item map grouped by stage, with counts, and no individual task is actionable
- Named owner is present with a real `movesCompleted` figure
- Production trust markers pull live figures. Prototype may use labelled illustrative markers

**Plan screen**
- Must-do and could-do render as separate lists with different components. A could-do item must never render in `c-task`
- Must-do is sorted by `deadlineAt` ascending, then by lead time descending
- Could-do items have no state chip, no deadline, no progress contribution
- `c-datebar` is present and the change action is reachable in one tap

**Task detail**
- All seven transparency rows render. A null value shows an honest string, never a blank
- `why.consequenceText` is populated from the ledger. A task with no sourced consequence cannot be in the must-do list
- Where `confirmationMethod == null`, the status row explains why and states the chase date

**Basket**
- Exactly one offer per category. Rendering rank 2 in the primary list fails review
- `c-disclosure` renders commission for every offer with `commissionGbp > 0`
- Social proof hidden where `sampleSize < 50`
- Totals show monthly cost and annual saving against the named default baseline

**Date change**
- `lostOrReentered` is 0 for every tested scenario
- Non-amendable destinations return `failed` with a reason naming the required action
- Exactly one message is sent to the mover, not one per task

**Day 0**
- Both intents complete with no network beyond mobile data and no app open
- Meter reading is read back and confirmed before submission
- Intents are unavailable in any state other than `moved`

**Cross-cutting**
- Route to a human present on every in-move screen, never behind a deflecting bot turn
- Keyboard focus visible on all interactive elements
- `prefers-reduced-motion` respected
- Works at 360px width

---

## 9. Where this spec stops

Named honestly, because the next document is about handoff judgment.

| Gap | Who resolves it |
|---|---|
| Illustration and empty-state artwork beyond the `c-home` SVG | Designer |
| The full could-do tier visual language once it grows past 8 items | Designer |
| Brand typography licensing, if Instrument Sans is not acceptable | Brand |
| Voice persona script and prosody | Content design plus voice vendor |
| Full accessibility audit against WCAG 2.2 AA | Specialist |
| Council rules table content for all 300+ UK authorities | Operations, with a named owner and annual cadence |
| FCA and regulatory review of recommendation rationale strings | Legal |
