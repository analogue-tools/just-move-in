# Engineering · stakeholder wiki
**Jeanne Piffaut · July 2026**

Repo map: [`README.md`](../../../README.md). Notion skim: [`docs/CASE-STUDY.md`](../../CASE-STUDY.md).

Authoritative deep dive: [`FLOWS-EVENTS-ANALYTICS.md`](../../../FLOWS-EVENTS-ANALYTICS.md) · [`HANDOFF.md`](../../../HANDOFF.md) · [`COMPONENTS.md`](../../../COMPONENTS.md)

This page is what I would bring into an eng working session: vision, what must be true, where events live, and what we need to discuss together. I am not pretending to replace your system design. The prototype is the whiteboard.

---

## 1. Overall vision (eng lens)

Jay is a **move operator**: watching gate → collect once → confirm commerce → execute with honest receipts → survive date change → Day 0 capture → stickiness surfaces.

Non-negotiables (from FLOWS + HANDOFF):

1. No outbound while watching  
2. `confirmed` requires receipt evidence  
3. One task system of record  
4. Commerce always confirms  
5. Named human escape  
6. Cascade `lost = 0`

---

## 2. What I need from engineering in the table

For each important wireframe / feature (to expand in Figma comments / Story):

| Column | Meaning |
|---|---|
| Feature | Name |
| User-visible behaviour | What the mover sees |
| Events triggered | `snake_case` catalogue |
| Downstream jobs | Scheduler, adapters, chase |
| Data written | Entities / fields |
| Guardrails | What must never ship |
| Open eng questions | What we decide together |

The event catalogue and per-tab flow charts already exist in [`FLOWS-EVENTS-ANALYTICS.md`](../../../FLOWS-EVENTS-ANALYTICS.md). Do not re-derive blindly; reconcile the demo to that wiki.

---

## 3. Per tab · eng focus

| Tab | Eng focus | Outcome |
|---|---|---|
| Referral | Partner payload, watching state, consent | No notify jobs enqueued |
| Discovery | Adaptive question engine, profile object | Ranking inputs once |
| Basket | Ranking, safety hard-block, panel fee ack | Explicit confirm |
| Confirmed | Snapshot of running tasks | Not a second dashboard truth |
| Home stages | Stage derived from task/date state | One CTA sequencing |
| Pre-move | Owner split You/Jay | Push on deadlines |
| Day 0 | Voice optional; UI always; occupancy fire on keys | Meter evidence store |
| Tasks | List/Board/Visual = presentation only | Single store |
| Date change | Cascade worker | lost must be 0 |
| Market | Listing type enum; booking hooks | No fake bookings |
| Settings | Pause/opt-out kill switches | Honoured everywhere |
| Ask Jay / customer support human agent | FAQ retrieval; escalate rules | No chatbot front door |

---

## 4. Automatic internal analytics events (beyond UI)

Already sketched in FLOWS; emphasise:

| Class | Examples |
|---|---|
| **Dashboard metrics** | Funnel drop-off, confirm rate, age of sent · no receipt tasks, Day 0 completion |
| **Incident automations** | Outbound while watching; false confirmed; cascade lost > 0; distress language |
| **Feature goals** | Tag each event stream: partner conversion vs stickiness vs trust |

I would even experiment **backwards**: start from the best layout of data for what we are trying to find out, then shape experience flow. Curious what we learn. (Discuss.)

---

## 5. List of topics to discuss with engineering

1. Watching enforcement in scheduler vs client-only  
2. Receipt model and council adapters that never ACK  
3. Ranking service ownership and panel feed freshness  
4. Voice: Web Speech vs PSTN bridge for Day 0  
5. Photo pipeline for meters / deposit (OCR later)  
6. Cascade rules table for non-amendable destinations  
7. Event bus choice and warehouse path  
8. Ops console for customer support human agent (minimum viable)  
9. Feature flags for `?mode=test` style spines in prod  
10. Effort estimates for Later items: packing hierarchy, vote board, partner report agent  

---

## 6. Collaboration model

See [09 · Stakeholder collaboration](09-STAKEHOLDER-COLLABORATION.md). Short version: prototype → Story/Figma comments → event table reconciliation → spike the P0 spine → instrument before polish.
