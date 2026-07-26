# Deliverable 5: Handoff Judgment

**Jeanne Piffaut · July 2026**

---

## What I chose

**A single-file HTML prototype plus a written behavioural spec.** No Figma file as the handoff artifact.

| Audience | What they need | Why this pair works |
|---|---|---|
| Stakeholder | Walkthrough of the idea | Prototype is clickable; Engineering notes toggle explains decisions inline |
| Mover (research) | Something that scrolls, reflows and responds on a phone | HTML behaves like the product; image-sequence Figma prototypes do not |
| Engineer | Behaviour as rules, pixels as reference | `HANDOFF.md` owns states and contracts; `prototype/index.html` owns visual truth |

The hard parts of this product are behavioural. Figma can draw `confirmed` and `sent · no receipt`. It cannot express the rule that a task only reaches `confirmed` if a receipt is stored. That rule belongs in a database constraint and in acceptance criteria written to paste into tickets (`HANDOFF.md` §10).

I also took seriously the note that engineers have had trouble reading HTML handed over from Claude. So the prototype is built to be read: no framework, no build step, no bundler, semantic markup, CSS custom properties as the token layer, one commented block per component with class names matching `COMPONENTS.md`, and vanilla JS a front-end engineer can skim quickly. **The CSS is meant to be lifted, not thrown away.**

---

## Why this is good enough to build from

An engineer can implement the flow without asking a designer about spacing, colour, type or state for v1.

- **Tokens are complete and enforceable.** Named colour jobs including the load-bearing fog / pending token. Type scale with sizes and roles. 8pt spacing. Motion with durations and easings. See `DESIGN-LANGUAGE.md` and `tokens/`.
- **Component inventory is build-ready.** Props, variants, a11y and states in `COMPONENTS.md`, mapped to prototype class names.
- **Every task state has a defined display string**, so nobody invents copy for `blocked` on a Friday afternoon.
- **Behavioural acceptance criteria** cover referral, board, basket, panel-fee note, FAQ/Ask Jay, marketplace search+map, voice+UI, and date cascade.
- **Quality floor is in the file:** visible keyboard focus, reduced motion, 360px width, 14px type minimum, 44px targets called out in the spec.

This product's differentiation is mostly restraint, and restraint specifies well. One recommendation instead of four. Panel-fee blueprint once instead of profit figures on every card. No gamification on mandatory admin. Honest fog state instead of a fake green tick. Those are rules. Rules survive handoff. Delight specifies poorly, and v1 deliberately carries little of it.

**Good enough means:** an engineer can ship a correct, consistent, defensible v1 from these artifacts alone. It does **not** mean the product is finished or certified.

---

## Where another designer (or specialist) is needed

| Gap | Why I stop here | Blocking? |
|---|---|---|
| **Illustration system and could-do at scale** | Home progress SVG is a proof of concept. Could-do past ~8 tiles needs real IA and drawing craft | No for receipts MVP; yes before settling marketing |
| **Voice persona, script and prosody** | Scope and behavioural rules are specified (two intents, AI disclosed, read-back). Conversational design is not | **Yes** before day-0 voice ships |
| **Full WCAG 2.2 AA audit** | I pressure-tested the prototype (`WCAG-AUDIT.md`). A floor is not a certification. Disabled movers show up unprompted in reviews as a segment that values this most | **Yes** before broad customer exposure |
| **Brand type sign-off** | Instrument Sans + mono encode human vs machine. Brand may require a licensed display face; keep the split | Soft; resolve before public brand launch |

I would treat voice persona and the accessibility audit as the two gaps we do not ship past. Failure there is easy for the team to miss and expensive for the people least able to absorb it.

---

## What I would hand a second designer first

1. `DESIGN-LANGUAGE.md` and `tokens/` so they inherit goals rather than invent a parallel look.
2. `COMPONENTS.md` Board, OfferCarousel, PanelFeeNote, VoicePlusUI, FAQSheet.
3. `WCAG-AUDIT.md` remediation list as the first sprint on polish.
4. The five testing risks in the six-pager (especially whether `sent · no receipt` reads as failure).

---

## The principle

Ship receipts and honest state with this handoff. Bring specialists for voice and AA certification before those surfaces meet customers at scale. Everything else on the gap list is a quality improvement better made with usage data than with taste alone today.
