# HANDOFF

**Jeanne Piffaut · July 2026**

Repo map: [`README.md`](README.md). Notion skim: [`docs/CASE-STUDY.md`](docs/CASE-STUDY.md).

Behavioural spec. **The prototype is authoritative on anything visual. This file is authoritative on anything behavioural.** If the prototype shows a state this file does not define, this file is wrong and needs updating.

Prototype path: `prototype/index.html`. Tokens: `tokens/tokens.json`, `tokens/tailwind.config.js`.

---

## 1 · Move state

```
watching ──(exchange_confirmed)──> armed ──(basket_confirmed)──> active
    │                                                               │
    │                                              (keys_confirmed OR date passed)
    │                                                               ▼
    └──(fall_through)──> cancelled                                moved
                                                                    │
                                                          (move_date + 1d)
                                                                    ▼
                                                                settling
                                                                    │
                                                         (move_date + 15d)
                                                                    ▼
                                                                 dormant
```

| State | Outbound fires? | Notes |
|---|---|---|
| `watching` | **No** | Profile stored only. Enforce at the scheduler, not in the UI |
| `armed` | Yes | Plan generated, discovery invited |
| `active` | Yes | Orders placed, touchpoints scheduled |
| `moved` | Yes | **Voice intents unlock here and nowhere else** |
| `settling` | Yes | Post-move task set |
| `dormant` | Renewal only | Contract end dates seeded for month 11 |
| `cancelled` | **No** | Pending halted, submitted reversed where possible, one honest message |

**The `watching` gate is the most commonly broken rule in a build like this.** 37% of pre-exchange moves never complete. A notification firing here means contacting a council about a move that is not happening. Enforce server-side.

---

## 2 · Task state

| State | Chip | Display pattern | Meaning |
|---|---|---|---|
| `blocked` | `st-block` | `blocked · <reason>` | Dependency unmet, e.g. `blocked · needs keys` |
| `queued` | `st-block` | `sends <date>` | **Deliberate delay, shown not hidden** |
| `ready` | `st-need` | `do by <date>` | Actionable |
| `awaiting_confirm` | `st-need` | `needs you · <effort>` | Money or contract |
| `submitted` | `st-live` | `in progress` | Sent, awaiting response |
| `confirmed` | `st-done` | `confirmed` or `<detail>` | **Destination acknowledged. Receipt stored** |
| `unconfirmable` | `st-pend` | `sent · no receipt` | Sent, destination provides no confirmation |
| `failed` | `st-need` | `redo · <reason>` | Reason must name what the mover has to do |
| `escalated` | `st-live` | `<owner> is on it` | Assigned to the named human |

### The one constraint to enforce in code review

```
A task may enter `confirmed` only if
  destination.confirmationMethod != null
  AND a receipt is stored.

If confirmationMethod is null, the terminal success state is `unconfirmable`.
```

Make this a database constraint, not a convention. It is the single rule the whole product rests on, and 18 of 60 negative reviews exist because the current service cannot honour it.

---

## 3 · The `move_date_changed` cascade

```
1. Persist newDate. Retain oldDate for the diff.
2. For each task:
   a. Recompute scheduledAt from its offset against newDate.
   b. If state in (submitted, confirmed, unconfirmable):
        destination.amendable  -> issue amendment, state holds, log it
        !destination.amendable -> state = failed
                                  reason names the required action
   c. If blocked: re-evaluate dependencies, may become ready.
   d. If newDate makes it impossible: state = failed, reason names the
      constraint. NEVER silently drop.
3. Recompute time-compressed mode: daysToMove < 14 flips ranking to speed.
4. Emit diff { rescheduled, needsRedoing, lostOrReentered }.
   lostOrReentered MUST be 0. If it isn't, that's a bug, not a message.
5. Send ONE message. Not one per task.
```

**Non-amendable destinations to encode on day one:** Royal Mail redirection start date, broadband install slots inside 48 hours, some council change-of-occupancy submissions. This list lives in the rules table, not in code.

---

## 4 · Data contracts

### Move record

```json
{
  "moveId": "mv_8f21c",
  "state": "active",
  "source": {
    "partnerId": "ktl_camden",
    "referredAt": "2026-07-19T09:12:00Z",
    "consentScope": ["address","dates","household"],
    "consentAt": "2026-07-19T09:14:22Z",
    "optedOutAt": null
  },
  "moveDate": "2026-08-14",
  "moveDateSource": "solicitor_feed",
  "moveDateConfidence": "confirmed",
  "exchangeConfirmedAt": "2026-08-02T14:03:00Z",
  "liability": {
    "resolved": true,
    "liablePerson": "usr_921",
    "property": "uprn_100023...",
    "from": "2026-08-14",
    "agreementType": "assured_shorthold",
    "billsIncluded": false
  },
  "from": { "uprn": "100021...", "postcode": "N1 3XX", "council": "islington" },
  "to":   { "uprn": "100023...", "postcode": "NW5 3QT", "council": "camden",
            "waterRegion": "thames", "tenure": "rented", "tenancyMonths": 12 },
  "household": { "adults": 2, "children": 0, "homeInDay": true, "pets": [] },
  "flags": { "vulnerability": false, "novice": true, "timeCompressed": true,
             "prepaymentMeter": false },
  "owner": { "userId": "sp_cs_agent", "name": "customer support human agent", "movesCompleted": 340 },
  "autonomyScopes": { "notifications": "auto", "commerce": "confirm", "renewals": "ask" }
}
```

`moveDateConfidence` is `estimated` in `watching` and `confirmed` from `armed`. **The UI must not show a confirmed-looking date while confidence is `estimated`.**

`liability.resolved` must be true before any task leaves `queued`.

### Task

```json
{
  "taskId": "tk_council_new",
  "catalogueId": "council_tax_register",
  "tier": 2,
  "list": "must",
  "state": "unconfirmable",
  "actor": "jay",
  "effortMinutes": 0,
  "offsetDays": 0,
  "scheduledAt": "2026-08-21",
  "deadlineAt": "2026-09-04",
  "dependsOn": ["tk_loa_signed", "liability_resolved"],
  "destination": {
    "name": "London Borough of Camden",
    "team": "Council tax",
    "method": "occupancy_form",
    "confirmationMethod": null,
    "amendable": true,
    "chaseAfterDays": 2
  },
  "why": {
    "consequenceText": "Council tax is charged daily from the day you move in...",
    "penaltyGbp": 70,
    "windowDays": 21
  },
  "panelFeeApplies": false,
  "auditRef": "aud_9931"
}
```

### Offer

```json
{
  "offerId": "of_energy_1",
  "category": "energy",
  "rank": 1,
  "supplier": "OVO Energy",
  "product": "12M Fixed",
  "monthlyGbp": 118,
  "savingVsDefaultGbp": 214,
  "defaultBaseline": "deemed_tariff_incumbent",
  "reasonText": "Fixed for exactly as long as your tenancy...",
  "reasonFactors": ["tenancy_months=12","household_adults=2","home_in_day=true"],
  "activationDays": 5,
  "panelFeeApplies": true,
  "panelFeeNote": "Suppliers on our panel pay Just Move In a fee. It does not change your price.",
  "panelScope": { "categoryProviders": 7, "availableAtAddress": 4 },
  "socialProof": { "share": 0.64, "sampleSize": 187,
                   "denominator": "all_who_saw", "suppressed": false },
  "rejected": [ { "supplier": "British Gas", "reason": "18 month term, longer than your tenancy" } ]
}
```

**`savingVsDefaultGbp` is computed against the deemed tariff or incumbent renewal price, never against a list price.** Movers are financially depleted at this moment and an inflated saving is the fastest route to a complaint.

**Commission / panel fee UX rule.** Primary disclosure is the shared panel-fee blueprint (`panelFeeNote`), rendered once per basket (and again on marketplace surfaces that earn a fee). Per-card £ earnings are optional secondary detail behind "How this works", never the primary commercial line. Same copy pattern everywhere fees apply.

### Home board (system of record)

```json
{
  "boardId": "board_mv_8f21c",
  "moveId": "mv_8f21c",
  "columns": [
    {
      "id": "done",
      "title": "Done",
      "items": [
        { "taskId": "tk_water_old", "list": "must", "state": "confirmed", "weight": "heavy" },
        { "taskId": "tk_tv", "list": "must", "state": "confirmed", "weight": "heavy" }
      ]
    },
    {
      "id": "current",
      "title": "Current",
      "items": [
        { "taskId": "tk_council_new", "list": "must", "state": "sent_no_receipt", "weight": "heavy" },
        { "taskId": "tk_broadband", "list": "must", "state": "live", "weight": "heavy" }
      ]
    },
    {
      "id": "future",
      "title": "Future",
      "items": [
        { "taskId": "tk_meter", "list": "must", "state": "blocked", "weight": "heavy" },
        { "taskId": "tk_gp", "list": "could", "state": "needs", "weight": "light" }
      ]
    }
  ],
  "attentionWidget": {
    "taskId": "tk_broadband",
    "reason": "install_slot_tomorrow",
    "priority": 1
  },
  "lens": "board"
}
```

**Rules.** Must-Do items render heavier than Could-Do. Columns are derived from task state + `scheduledAt`, never a second data store. `attentionWidget` may surface at most one item. Home lens / progress SVG (if present) reads the same `completedTaskIds`. Additive only; never remove a completed mark.

---

## 5 · Rules that must not be relaxed

**One recommendation per category.** `GET /offers` returns `rank: 1` only in the primary payload. Rejected alternatives ship inside the offer object for the carousel / expander. The API should make a comparison grid awkward to build by accident.

**Panel-fee disclosure pattern.**

| Surface | What renders |
|---|---|
| Basket (once) | Single `PanelFeeNote` blueprint: suppliers pay a panel fee; price unchanged |
| Offer card | Reason, saving, panel scope, social proof. Optional "How this works" expands the same blueprint |
| Marketplace listing with fee | Same blueprint component, reused |
| Free listing | Explicit "We earn nothing on this" |

**Social proof and commercial intent render together or commercial intent alone.** Social proof must never render without the panel-fee note in the same commercial context. Split apart, a percentage next to a paid recommendation reads as a sales device.

**Disclosure wording.** Plain English. Prefer the panel-fee blueprint over "affiliate". ASA has ruled consumers do not reliably understand "affiliate" alone. CAP Code: commercial intent obvious at the point of choice.

**Autonomy gating.**

| Class | Default | Confirm needed |
|---|---|---|
| Reversible, no money: council, water, TV licence, redirect | `auto` | No, covered by the LoA |
| Money or contract: energy, broadband, insurance | `confirm` | **Yes, always** |
| Renewals at month 11 | `ask` | Yes, and re-consented |

There is no configuration that moves commerce to `auto`. Only 9% of consumers accept fully autonomous purchasing.

**Pre-switch safety validation.** Meter type, prepayment status and vulnerability flag are mandatory before any energy switch executes. Priority Services Register offered at the same point.

**No credentials or payment by voice.** No one time passcodes, no card details, no direct debit setup on a call. Payment moves to a link the mover opens, with a recognisable descriptor.

**Escalation triggers.** Distress language, a task failing twice, complaint intent, `flags.vulnerability`, `flags.novice` plus two abandoned sessions, or `daysToMove <= 7` with any must-do incomplete.

---

## 6 · Voice scope

Voice **leads on day 0** (keys + meter). **UI stays available in parallel** on every screen, including moving day. Voice does not replace the UI; it leads when access conditions demand it.

Two voice intents. Both locked unless `move.state == moved`.

| Intent | Success condition | Failure route |
|---|---|---|
| `keys_confirmed` | State set to `moved`, downstream notifications fired with the correct date, council tax start date read back | Transfer to owner |
| `meter_capture` | Reading OCR'd, **read back aloud and confirmed by the mover**, photo stored with timestamp, submitted to both suppliers | Transfer to owner |

Anything outside these transfers. Do not add a general question-answering intent to voice in v1. Soft questions go to **FAQ + Ask Jay** in the UI.

Disclose AI status at call open. No simulated human tells. Outbound only, on a pre-agreed slot.

| Phase | Lead | UI |
|---|---|---|
| Discovery / basket / confirm | UI | Required |
| Moving day | Voice | Always available (buttons mirror the two intents) |
| Settling | UI | Required |

---

## 7 · FAQ and Ask Jay

| Surface | Job | Behaviour |
|---|---|---|
| `FAQSheet` | Structured mover FAQ (see `FAQ.md`) | Browse by stage and topic; offline-capable copy |
| `AskBar` / Ask Jay | Soft natural-language questions mapped to FAQ entries | Returns cited FAQ answer; never invents policy |
| Connect to customer support human agent | Hard cases, distress, vulnerability, failed tasks | Always visible on hard screens; never behind a deflecting bot turn |

**Routing.** FAQ match above confidence threshold → show answer + "Was this useful?". Below threshold or complaint / distress language → escalate to named owner. Ask Jay never collects payment or credentials.

---

## 8 · Marketplace: search + map

| Capability | Behaviour |
|---|---|
| Need clusters | Organised by move need (clean, handyman, packing) before free text |
| Search | Free-text over listings; empty state suggests need clusters |
| Map | Pin listings near `to.postcode`; list and map stay in sync |
| Trust at listing level | Verified badge, aggregated rating, review count, guarantee |
| Fees | Same `PanelFeeNote` pattern; free items labelled as earning nothing |
| Booking | Carries `moveDateOffset`; included in date-change cascade |

Treatwell-style cues: search + map + need entry. Local discovery stays inside the move product; it is not a second app.

---

## 9 · Analytics events

**Source of truth for names and funnels:** [`FLOWS-EVENTS-ANALYTICS.md`](FLOWS-EVENTS-ANALYTICS.md) (§4 to §6 and the event catalogue). Names below match that file. Do not invent parallel catalogues.

| Event | Properties |
|---|---|
| `referral_continue` / `referral_pause` / `referral_opt_out` | `partnerId`, `moveId` |
| `discovery_start` / `discovery_complete` / `discovery_abandon` | `moveId`, `answersComplete` |
| `basket_open` / `plan_selected` / `ack_panel_fee` / `basket_confirmed` | `offerId`, `category`, `rank`, `panelFeeApplies` |
| `panel_fee_view` | `surface` (`basket`, `market`, `confirm`) |
| `closure_continue` | `moveId` |
| `human_escape_tap` | `screen`, `trigger` (`user` or `auto`) |
| `faq_open` / `chat_open` / `chat_send` | `topicId`, `matched` |
| `keys_confirmed` / `meter_read_submit` / `voice_session_start` | `intent`, `channel` (`ui` or `voice`) |
| `notify_sent` / `notify_confirmed` / `notify_unconfirmable` | `catalogueId`, `destination` |
| `move_date_changed` / `cascade_diff_view` / `cascade_ack` | `oldDate`, `newDate`, `lost` (must stay 0) |
| `market_search` / `listing_open` | `query`, `listingType`, `resultCount` |
| `tasks_view_toggle` | `from`, `to` (presentation only; same task store) |
| `task_state_changed` | `taskId`, `from`, `to`, `actor` |
| `confidence_probe_answered` | `taskId`, `statedConfidence`, `actualState` |

`confidence_probe_answered` supports **false confidence rate**: movers who report high confidence a task is done when its state is still queued or `sent · no receipt`.

---

## 10 · Acceptance criteria

Written to be pasted into tickets.

**Referral**
- Renders with `move.state == watching` and fires zero outbound tasks
- Shows all 31 items grouped by stage, none individually actionable
- Named owner present with a real `movesCompleted` figure
- Production trust markers pull live figures. The prototype may use labelled illustrative markers; unlabelled hard-coded counts fail review

**Plan / Home board**
- Must-do and could-do use different components. A could-do item must never render in `.task`
- Must-do sorted by `deadlineAt` ascending, then lead time descending
- Could-do has no state chip, no deadline, no progress contribution
- Tasks board columns: Done | Current | Future (same `BOARD_TASKS` store as List). Must-Do visually heavier than Could-Do. Home uses stage tabs (Getting started / Pre-move / Day 0 / After), not a second board model.
- Date change action reachable in one tap
- `DateProvenanceBar` shows source + confidence; estimated dates never look confirmed
- **Lens / board switcher preserves scroll position and does not refetch**

**Home progress lens (optional SVG)**
- Renders only from `completedTaskIds`. Additive only
- No element is ever removed once shown
- No streaks, no timers, no decay
- Must-do copy identical to the List / Board view

**Task detail**
- All seven transparency rows render. A null value shows an honest string, never a blank
- `why.consequenceText` populated. A task with no sourced consequence cannot be must-do
- Where `confirmationMethod == null`, the status row explains why and states the chase date

**Basket**
- Exactly one offer per category in the primary slot. Alternatives only in `OfferCarousel`
- `PanelFeeNote` renders once on the basket for any `panelFeeApplies: true` offer
- Per-card £ earnings are absent from the primary card chrome (optional secondary only)
- Social proof hidden where `sampleSize < 50`
- Totals show monthly cost and annual saving against the named baseline

**FAQ / Ask Jay**
- FAQ sheet covers the structure in `FAQ.md`
- Ask Jay answers only from FAQ corpus; unmatched soft questions escalate
- Connect to customer support human agent visible on every hard screen

**Date change**
- `lostOrReentered` is 0 in every tested scenario
- Non-amendable destinations return `failed` with a reason naming the required action
- Exactly one message sent, not one per task

**Marketplace**
- Search and map both present; selection syncs
- Need clusters available before free-text search
- Verified badge, aggregated rating, review count and guarantee all render at listing level
- Free items labelled as earning nothing; fee items reuse `PanelFeeNote`
- Bookings carry a `moveDateOffset` and are included in the cascade

**Day 0 / VoicePlusUI**
- Voice leads for keys and meter when `move.state == moved`
- UI mirrors both intents and remains usable with mobile data only
- Meter reading read back and confirmed before submission
- Intents unavailable in any state other than `moved`
- No payment or credentials collected by voice

**Cross-cutting**
- Route to a human on every in-move screen, never behind a deflecting bot turn
- Visible keyboard focus on all interactive elements
- `prefers-reduced-motion` respected
- Works at 360px width; primary targets ≥ 44×44px
- No type below 14px. Nothing read to make a decision below 16px

---

## 11 · Where this spec stops

| Gap | Who resolves it |
|---|---|
| Illustration and empty states beyond the Home progress SVG | Designer |
| Could-do tier visual language past 8 items | Designer |
| Brand type licensing if Instrument Sans is swapped | Brand |
| Voice persona script and prosody | Content design plus voice vendor |
| Full WCAG 2.2 AA certification | External specialist (see `WCAG-AUDIT.md` for pressure test) |
| Council rules table for 300+ UK authorities | Operations, named owner, annual cadence |
| FCA review of recommendation rationale strings | Legal |
| Primary survey result numbers | Filled in `01d-primary-research-survey.md` §4 (n = 12, July 2026). Directional only. |
