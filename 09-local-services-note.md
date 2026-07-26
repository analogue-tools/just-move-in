# Product Note: The Local Services Layer
### Why it should not be a search box
**Jeanne Piffaut · July 2026**

---

## 1. The instinct is right

A mover needs a cleaner, a locksmith, a handyman, a GP, a vet and eventually a barber, and right now they get none of that from us. The Marketplace tab already exists in the Figma. The could-do tier is the retention surface. And the habit discontinuity research puts a number on the urgency: the window in which a relocated person is genuinely open to new options **closes at around three months**. Whatever we build here has a shelf life.

So yes, build it. But not as a search engine.

---

## 2. Three reasons search is the wrong front door

**Search assumes you know what you want.** The entire product thesis is that movers do not know what they do not know. The mover who searches "cleaner NW5" was never the problem. The problem is the mover who does not know that most tenancies require a professional end of tenancy clean with a receipt, and finds out when their deposit is withheld. A search box serves the first person and abandons the second.

**We cannot win general local search.** Google Maps has every business, every review, every photo, real hours, and it is already installed. If someone types "plumber" into our box and gets four results against Google's forty, we have not added a feature, we have damaged trust in everything else on the screen. Cold start in a marketplace is not a launch problem to push through, it is a visible quality signal.

**Treatwell is a company, not a feature.** It runs supply acquisition, calendar integration with thousands of salon systems, payments, no-show policy, cancellation handling, review moderation and disputes. Building that would consume the roadmap and it is not where our moat is. Our moat is the partner trigger and the integration rails.

---

## 3. The version that is actually defensible

Two things a mover needs that Google Maps structurally cannot do.

**One. Tell them what they need, not where it is.** A move-specific needs list, organised by moment, that surfaces the job before they know to look for it. That is a content and curation problem, which is cheap, rather than a marketplace problem, which is not.

**Two, and this is the differentiated bit. Book it against the move date, and move it when the date moves.**

> Your completion has moved to 28 August. I have moved your end of tenancy clean to the 27th and your locksmith to the morning of the 28th. Neither needed re-booking.

Nothing else in this market can do that, because nothing else knows the move date, and nothing else has a cascade engine that already reschedules dependent tasks. **We built that for council tax and broadband. A cleaner is just another task with a date offset.** That is a genuinely novel, genuinely delightful moment and it costs almost nothing extra because the hard part already exists.

So: **a date-aware needs list with booking, not a search marketplace.** Search exists inside it as a fallback, not as the entrance.

---

## 4. The needs list, by moment

| Moment | What they need | Where the data comes from | How it earns |
|---|---|---|---|
| **t-30** | Removals, storage, packing materials, charity collection for declutter | Partner panel plus affiliate | Panel commission, meaningful basket |
| **t-14** | End of tenancy clean at the old place, handyman for pre-checkout repairs, professional inventory | Local partner panel | **Booking commission. £150 to £300 basket** |
| **Moving day** | Locksmith for a lock change, first clean at the new place, late supermarket, takeaway | Places data for the practical, panel for the bookable | Booking commission on locksmith and clean, nothing on the chippy |
| **t+14** | GP, dentist, optician, vet, pharmacy, bin days, parking permit | NHS service search, council open data, Places | **Nothing. Deliberately.** These are the trust builders |
| **t+14** | Curtain and blind fitting, flat pack assembly, carpet cleaning, TV aerial, boiler service | Affiliate and local panel | Affiliate, small but real |
| **t+90** | Gym, barber, coffee, pub, classes, sports clubs, community groups, nursery and schools | Places data plus editorial curation | Affiliate where it exists, otherwise pure retention |

**The rule that keeps this honest:** the NHS, council and bin day content earns nothing and is never gated. If the only things we surface are the things we are paid for, the mover works it out inside a week and every other recommendation in the product becomes suspect.

---

## 5. Where search does belong

Three places, none of them the front door.

**Inside a category.** Once the mover is looking at cleaners, a filter and a search over that set is obviously useful.

**Over our own content.** "What do I do about council tax?" should find the task and the explanation. This is the highest value search in the product and it is search over a small, known, high quality corpus rather than over the world.

**As an escape hatch.** A single quiet "looking for something else?" at the bottom of the needs list, which hands off to a Places query. Honest about what it is, and not pretending to be a marketplace.

---

## 6. Data sourcing, concretely

| Layer | Source | Notes |
|---|---|---|
| Discovery: name, rating, hours, photos | **Google Places API** | Per-request cost, so cache aggressively by postcode. Terms restrict storing most fields beyond a limited period, which shapes the caching design |
| GP, dentist, pharmacy | **NHS service search** | Free, authoritative, and exactly the kind of thing a mover forgets |
| Bin days, parking permits, recycling | **Council open data**, patchy and per-authority | Same rules table problem as the notifications. Reuse the ownership model |
| Schools | **DfE open data** | Catchments and Ofsted ratings |
| Bookable services | **Partner panel**, negotiated | The only layer that needs commercial work, and the only one that earns properly |
| Everything else | **Affiliate networks** | Awin, Impact. Low build cost, low and slow revenue |

**The build order that follows:** free authoritative data first, because it earns trust and costs nothing. Places second, for the browse layer. Bookable partners last, in one or two categories only, where the basket is large enough to justify the operational overhead.

---

## 7. Monetisation, honestly

Booking commission is materially better than affiliate click-through. An end of tenancy clean runs £150 to £300, so a booking fee in the low double digits per job is realistic, which puts it in the same range as the energy commission. Two or three high value move-specific categories are worth more than a hundred affiliate links.

Everything here carries the same disclosure component as the panel: **"We earn £14 if you book this."** Same wording, same placement, no exceptions. The CAP Code requires commercial intent to be obvious, and consistency across tiers is what makes the disclosure read as candour rather than as a legal footnote in one corner of the app.

---

## 8. Where I would put it

**Not now.** The rollout plan has Phase 0 as receipts and no AI, and the PRD defers the local layer to V2 deliberately. Nothing here changes that. A beautiful local booking layer on top of a plan that breaks when the completion date slips is a worse product than a plain plan that holds.

**But the sequencing note matters.** The three month habit window means this cannot wait for year two. Once the rails are stable, this should land inside the first fortnight of the mover's new life, not at the eleven month renewal. That is a change to the PRD's V2 timing and I would make it.

**The v1 shape, when it comes:** the needs list by moment, free authoritative data, one bookable category, and the date cascade wired through. One category proves whether the reschedule moment lands. If it does, add categories. If it does not, we have spent very little finding out.

---

## 9. The line I would use in the room

We are not building a marketplace. We are building the only local booking that knows your completion date, and moves your cleaner when your solicitor moves your move.
