# COMPONENTS

**Jeanne Piffaut · July 2026**

Wiki home: [`docs/wiki/00-INDEX.md`](docs/wiki/00-INDEX.md). Notion skim: [`docs/CASE-STUDY.md`](docs/CASE-STUDY.md).

Class names in `prototype/index.html` map to this inventory. Built on shadcn/ui primitives where one exists. An engineer should be able to implement each row without inventing props, states or a11y behaviour.

**Shared rules**
1. **Mono means machine.** Every value derived from a system renders in mono: states, prices, percentages, dates, timestamps, meter readings. Every value written by a person renders in Instrument Sans (or brand sans).
2. **Could-do never borrows must-do components.** If a could-do item appears in a must-do row, it inherits urgency it must not have.
3. **Targets.** Primary actions ≥ 44×44px. Works at 360px width. Visible `:focus-visible` ring on all interactive elements.
4. **Motion.** Respect `prefers-reduced-motion`.

---

## Inventory

| Component | Class / name | shadcn base | Props | Variants / states | A11y | Rule |
|---|---|---|---|---|---|---|
| Button | `.btn-pri` `.btn-sec` / `c-btn` | `Button` | `label`, `onPress`, `disabled`, `loading` | primary, secondary, ghost; idle / pressed / disabled / loading | `aria-busy` when loading; min 44px height | Radius from `radius.component.button` |
| Card | `.card` / `c-card` | `Card` | `children` | default | Landmark optional | Radius from `radius.component.card` |
| Eyebrow | `.eyebrow` / `c-eyebrow` | none | `text` | none | Decorative; do not use as sole heading | Mono, uppercase, ≥14px in production floor |
| State chip | `.st-*` / `c-state` | `Badge` | `state` | done, pending/fog, need, block, live | Text conveys meaning without colour alone | **Lowercase mono.** Strings from HANDOFF §2 |
| Task row | `.task` / `c-task` | none | `task`, `urgent?` | default, urgent (`border-l-warning`) | Entire row is a button or link; state announced | Must-do only |
| Could-do tile | `.could` / `c-could` | none | `item` | none | Link/button with name | No state chip, no deadline, no progress contribution |
| AccordionStageMap | `.s-map` / `AccordionStageMap` | `Accordion` | `stages[]`, `counts`, `expandedId` | collapsed / expanded per stage | `aria-expanded`, keyboard | Referral + fog: whole move map, items not individually actionable while `watching` |
| Board | `.board` / `Board` / `c-kanban` | none | `columns[]` from `BOARD_TASKS` | Done, Current, Future | Column headings as `h2`/`h3`; list semantics | Same store as List. Must-Do heavier than Could-Do |
| BoardCard | `.board-card` | none | `taskId`, `list`, `state`, `weight` | heavy (must), light (could) | Same as Task row / Could-do | Weight controls type and chrome only |
| OfferCarousel | `.offer-carousel` / `OfferCarousel` | none | `primary`, `alternatives[]` | primary slot + horizontal alternatives | Focusable slides; swipe + arrow keys; `aria-roledescription="carousel"` | **Exactly one primary per category.** Alternatives one swipe away |
| Offer card | `.card` + `.badge` / `c-offer` | `Card` | `offer` | primary | Heading = supplier + product | Reason + saving + panel scope; no primary £ earnings line |
| PanelFeeNote | `.panel-fee` / `PanelFeeNote` | none | `surface`, `expanded?` | compact, expanded | `aria-expanded` on toggle | **Single blueprint.** Same copy on basket and marketplace. Optional secondary "How this works" |
| ExplanationCard | `.explain` / `ExplanationCard` | `Card` | `title`, `body`, `whyThisPick` | novice, standard | Readable at 16px+ | Used when `flags.novice` or category needs orientation before price |
| Disclosure block (legacy) | `.disc` `.dk` | none | prefer `PanelFeeNote` |, |, | Prefer panel-fee blueprint over per-card £ |
| Transparency / Explanation rows | `.tr` `.tk` `.tv` / `c-trans` | none | `fields[7]` | null → honest string | Definition list or table | Seven rows: what, who, when, where, why, status, cost |
| FAQSheet | `.faq-sheet` / `FAQSheet` | `Sheet` / `Dialog` | `topics[]`, `stageFilter?` | open / closed | Focus trap, `Esc` closes, return focus | Structure from `FAQ.md` |
| AskBar / Ask Jay | `.ask` `.ask-b` / `AskBar` | none | `placeholder`, `onSubmit` | idle, loading, answered, escalated | `role="search"`; announce answer in live region | Soft questions only; escalate hard cases |
| VoicePlusUI | `.voice-plus` / `VoicePlusUI` | none | `intents[]`, `lead: 'voice'\|'ui'`, `transcript` | voice-leading, ui-leading, transferring | Transcript in live region; UI buttons always present | Day 0: voice leads, UI mirrors intents |
| MeterConfirm | `.meter` / `c-meter` / `MeterConfirm` | none | `reading`, `capturedAt`, `photoRef`, `confirmed` | preview, readback, confirmed, failed | Confirm control labelled; reading in mono | **Never submit on OCR alone.** Read back required |
| MarketplaceSearch | `.mkt-search` / `MarketplaceSearch` | `Input` | `query`, `needClusters[]`, `onSearch` | empty, results, no-results | Labelled input; suggest clusters on empty | Need clusters before free text |
| MarketplaceMap | `.mkt-map` / `MarketplaceMap` | none | `pins[]`, `selectedId`, `center` | list-sync | Keyboard list alternative required | Selection syncs with list; treat as progressive enhancement |
| ListingCard | `.listing` | `Card` | `listing` | verified, free, fee | Trust signals in accessible text | Verified, rating, count, guarantee at listing level |
| DateProvenanceBar | `.datebar` / `c-datebar` / `DateProvenanceBar` | none | `moveDate`, `source`, `confidence` | estimated, confirmed | Confidence announced; change control adjacent | Estimated must never look confirmed |
| CascadeDiff | `.diff` / `c-diff` | none | `rescheduled`, `needsRedoing`, `lostOrReentered` | ok, warn | Figures in mono; `lostOrReentered` must be 0 | One summary after date change |
| Lens switcher | `.lens-wrap` `.lens` | `Tabs` | `active` | List, Board/Home | `role="tablist"` | Preserves scroll. Does not refetch |
| Stage stepper | `.stg` / `c-stepper` | none | `stages`, `currentIndex` | past, current, future | Current stage `aria-current` | Four stages, fixed |
| Named human | `.human` / `c-human` | none | `owner` | none | Name + role as text; call control labelled | Required on hard screens |
| Verified badge | `.verified` | `Badge` | none | none | Text "Verified", colour secondary | Marketplace listing level only |
| Chip | `.chip` | `Badge` | `label` | none |, | Attributes, mono, tabular |
| Option pill | `.opt` | `ToggleGroup` | `label`, `pressed` | selected / unselected | `aria-pressed` | Single-select groups |
| Bottom nav | `.tab` / `c-nav` | `Tabs` | `current` | Home, Tasks, Market, Settings | `aria-current="page"` | Four tabs |
| Row | `.row` | `Separator` | children | none |, | List row with bottom border |
| Trust markers | `.trust` / `c-trust` | none | `markers[]` | none | Live figures | Hard-coded review counts fail review |
| Numeric | `.num` | none | `value` | none |, | `lining-nums tabular-nums` on every machine figure |
| Engineering note | `.note` | none | `text` | none | `aria-hidden` in production strip | Demo only |

---

## State string table (chips)

| State | Display |
|---|---|
| `blocked` | `blocked · <reason>` |
| `queued` | `sends <date>` |
| `ready` | `do by <date>` |
| `awaiting_confirm` | `needs you · <effort>` |
| `submitted` | `in progress` |
| `confirmed` | `confirmed` or detail |
| `unconfirmable` | `sent · no receipt` |
| `failed` | `redo · <reason>` |
| `escalated` | `<owner> is on it` |

Fog / pending colour token applies only to `unconfirmable` and honest in-flight waits that are neither success nor failure.

---

## Composition recipes

**Basket commercial block**
1. `ExplanationCard` (if novice)
2. `OfferCarousel` (primary + alternatives)
3. `PanelFeeNote` once for the basket
4. Primary confirm button

**Home tab**
1. `DateProvenanceBar`
2. `Board` (Done | Current | Future)
3. Optional attention widget
4. Sticky `AskBar`

**Moving day**
1. `VoicePlusUI` with `lead: 'voice'`
2. Mirrored UI buttons for `keys_confirmed` and `meter_capture`
3. `MeterConfirm` after capture
4. Named human escape

**Marketplace**
1. Need clusters + `MarketplaceSearch`
2. Results list + `MarketplaceMap`
3. `ListingCard`s with trust signals
4. `PanelFeeNote` when any fee listing is visible
