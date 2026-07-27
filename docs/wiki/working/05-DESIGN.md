# Design · stakeholder wiki

**Jeanne Piffaut · July 2026**

Part of the Jay case study. Full index in CASE-STUDY.md.

Source of truth for screens: live prototype. Product constraints: [`HANDOFF.md`](../../HANDOFF.md) · [`COMPONENTS.md`](../../COMPONENTS.md)

For design working sessions: vision, language, what each surface should feel like, and open topics. Per-screen Story columns live in the demo toolbar and (next) in Figma comments.

---

## 1. Overall vision (design lens)

Jay should feel like a **calm operator**, not a chatbot, not a checklist app, not a marketplace landing page.

First impression after a partner referral: *someone capable is already on it, and I know what is mine vs theirs.*

Story across the move: stage → one next action → honest status. Social proof and nudging only where they reduce uncertainty, never to manufacture urgency.

---

## 2. Design language (working)

| Principle | What it means in Jay |
|---|---|
| Storytelling | One stage, one primary CTA, supporting context below. Home is not a dashboard dump. |
| **Intention-led** | Every screen answers: what am I doing here / what happens next / who owns it. |
| **Honest status** | `sent · no receipt` beats fake green ticks. Trust > polish. |
| **Social proof with restraint** | Partner name + real context (e.g. Priya Shah · Kentish Town). No fake review stacks in the hero. |
| **Nudging without panic** | Deadlines and “Needs you next” are clear; no alarm theatre. |
| **Human escape is visible** | Named customer support person on high stakes, not buried chrome. |
| **Dual lens without expanders** | You vs Jay stays visible. No toggle-to-reveal for critical ownership. |
| **Commerce is explicit** | Confirm is a decision moment, not a soft continue. |

Typography / motion / colour in the prototype follow the existing Just Move In demo system. When we formalise a design system, preserve calm operator tone over consumer-fintech flash.

---

## 3. Per surface · design focus

| Surface | Design job | Avoid |
|---|---|---|
| Referral | Brand + partner trust + watching clarity | Chatbot front door |
| Discovery | Short, adaptive, one continuous flow | Long forms that feel like KYC |
| Basket | Choose → confirm | Bundling pressure; fake scarcity |
| Confirmed | Snapshot of running work | Second competing home |
| Home stages | Stage story + one CTA | Stats strips, promo clutter |
| Pre-move | Ownership split readable at a glance | Collapsed “Jay is handling” |
| Day 0 | Capture confidence (meters/keys) | Voice-only gate |
| Tasks | List default; Board/Visual as lenses | Three competing truths |
| Market | Browse with clear listing type | Sponsored chrome without rules |
| Settings | Pause / opt-out obvious | Hidden kill switches |
| Ask Jay / customer support | FAQ open; escalate clear | Expanders; bot theatre |

---

## 4. Accessibility & inclusion (discuss + ship)

- Font size / contrast controls (Later, Settings)  
- Voice as optional Day 0 path, never the only path  
- Plain language for receipts and failures  
- Distress language → human path, not more automation  

---

## 5. Topics to discuss with design

| Topic | Why it matters | Tension | Open question |
|---|---|---|---|
| **Operator visual language vs brand kit** | Prototype proves the product idea; JMI already has a Figma system | Calm operator vs inheriting kit that may pull toward consumer chrome | What do we keep from this demo vs adopt from brand? |
| **Market ads / sponsored treatment** | Extra cash after trust; Checkatrade-like | Revenue vs “this feels like spam” | Trust-safe patterns, frequency caps, labelling rules |
| **Revolut-like voucher hub vs Market simplicity** | Stickiness and affiliate value | One calm Market vs a noisy offers surface | Hub under Market vs own tab; after experience only |
| **Packing / Notion-like lists vs calm** | Survey and stickiness want hierarchy | Density that helps packing vs anxiety of a second product | Own tab? After Day 0 only? |
| **Feature voting UI (Later)** | Movers co-shape the roadmap | Engagement vs derailing P0 | Moderation; when to show |
| **Customer-support path duplication** | Named human builds trust | Showing it on every screen trains people to ignore it | High-stakes only; frequency rules |
| **Motion budget** | Presence and hierarchy | 2 to 3 intentional motions vs decorative noise | Which moments earn motion (confirm, keys Yes, date cascade)? |
| **Figma Story template ownership** | Same Challenge → Next structure as the demo toolbar | Who writes / maintains comments per frame | Design owns template; Product owns constraints in the row |

---

## 6. Collaboration model

See [09 · Stakeholder collaboration](09-STAKEHOLDER-COLLABORATION.md). Design owns Story columns + language; product owns constraints; eng owns events; reconcile in the same structure per screen (demo toolbar now, Figma comments next).
