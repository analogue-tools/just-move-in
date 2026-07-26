# Design · stakeholder wiki
**Jeanne Piffaut · July 2026**

Source of truth for screens: live prototype + Figma Present. Authoritative product constraints: [`HANDOFF.md`](../../HANDOFF.md) · [`COMPONENTS.md`](../../COMPONENTS.md)

This page is for design working sessions: vision, language of the product, what each surface should feel like, and topics to discuss. Feature-by-wireframe Story columns (Challenge / Decision / Why / How / Evidence / Next) come next in Figma comments, this doc sets the shared vocabulary.

---

## 1. Overall vision (design lens)

Jay should feel like a **calm operator**, not a chatbot, not a checklist app, not a marketplace landing page.

The first impression after a partner referral: *someone capable is already on it, and I know what is mine vs theirs.*

Directed storytelling across the move: stage → one next action → honest status. Social proof and nudging only where they reduce uncertainty, not where they manufacture urgency.

---

## 2. Design language (working)

| Principle | What it means in Jay |
|---|---|
| **Directed storytelling** | One stage, one primary CTA, supporting context below. Home is not a dashboard dump. |
| **Intention-led** | Every screen answers: what am I doing here / what happens next / who owns it. |
| **Honest status** | `sent · no receipt` beats fake green ticks. Trust > polish. |
| **Social proof with restraint** | Partner name + real context (e.g. Priya Shah · Kentish Town). No fake review stacks in the hero. |
| **Nudging without panic** | Deadlines and “Needs you next” are clear; no alarm theatre. |
| **Human escape is visible** | The customer support human agent is a named path, not buried support chrome. |
| **Dual lens without expanders** | You vs Jay-is-handling stays visible. No toggle-to-reveal patterns for critical ownership. |
| **Commerce is explicit** | Confirm is a decision moment, not a soft continue. |

Typography / motion / colour in the prototype follow the existing Just Move In demo system. When we formalise a design system, preserve calm operator tone over consumer-fintech flash.

---

## 3. Per surface · design focus

| Surface | Design job | Avoid |
|---|---|---|
| Referral | Brand + partner trust + watching clarity | Chatbot front door |
| Discovery | Short, adaptive, one question at a time feel | Long forms that feel like KYC |
| Basket | Compare → choose → confirm | Bundling pressure; fake scarcity |
| Confirmed | Snapshot of running work | Second competing home |
| Home stages | Stage story + one CTA | Stats strips, promo clutter |
| Pre-move | Ownership split readable at a glance | Collapsed “Jay is handling” |
| Day 0 | Capture confidence (meters/keys) | Voice-only gate; survey said voice=0 as preference |
| Tasks | List default; Board/Visual as lenses | Three competing truths |
| Market | Browse with clear listing type | Checkatrade clone chrome without rules |
| Settings | Pause / opt-out obvious | Hidden kill switches |
| Ask Jay / customer support human agent | FAQ cards always open; escalate clear | `<details>` expanders; bot theatre |

---

## 4. Accessibility & inclusion (discuss + ship)

- Font size / contrast controls (Later, Settings)  
- Voice as optional Day 0 path, never the only path  
- Plain language for receipts and failures  
- Distress language → human path, not more automation  

---

## 5. Topics to discuss with design

1. Formalising the operator visual language vs inheriting brand kit  
2. Market ads / sponsored treatment (if ever), trust-safe patterns  
3. Revolut-like voucher hub vs current Market simplicity  
4. Packing / hierarchical lists, Notion-like density vs calm  
5. Feature voting UI for movers (Later)  
6. Reducing customer-support-escape duplication across screens  
7. Motion budget: 2-3 intentional motions, not noise  
8. Wireframe Story template in Figma (Challenge → Next) ownership  

---

## 6. Collaboration model

See [09 · Stakeholder collaboration](09-STAKEHOLDER-COLLABORATION.md). Short version: design owns Story columns + language; product owns constraints; eng owns events; we reconcile in the same Figma comment structure per wireframe.
