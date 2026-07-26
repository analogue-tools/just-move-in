# Jay · Just Move In

**Jeanne Piffaut · July 2026**

Product discovery case: the digital / AI equivalent of Just Move In’s home-setup call. Jay does the admin, shows honest proof it happened, and survives the move date changing.

---

## Start here

| What | Link |
|---|---|
| **Case study** (the narrative) | [`docs/CASE-STUDY.md`](docs/CASE-STUDY.md) |
| **Live demo** | https://just-move-in-liard.vercel.app |
| **This repo** | https://github.com/analogue-tools/just-move-in |
| **Local demo** | open [`prototype/index.html`](prototype/index.html) (no build) |

In the demo toolbar (outside the phone): **For design · eng · sales · CS**, then **Features · evidence**.

The rest of this repo is the working depth behind that pack: research, competitive analysis, PRD, eng handoff, rollout, analytics. You do not have to read it all. It is here so the work is visible and usable if you dig.

---

## What is in the repo

```
docs/CASE-STUDY.md              share narrative
docs/wiki/00-INDEX.md           what to send vs hold
docs/wiki/working/              longer notes by theme
prototype/index.html            app UI (source of truth)
index.html                      same build (Vercel serves this)
HANDOFF.md                      states, contracts, acceptance
FLOWS-EVENTS-ANALYTICS.md       events, funnels, metrics
01d-primary-research-survey.md  survey instrument + results (n=12)
01c-negative-review-analysis.md Trustpilot coding
02-competitive-analysis.md      full competitive
03-product-strategy-prd.md      full PRD
04-engineering-spec.md          eng detail
06-rollout-plan.md              phases + kill criteria
08-testing-plan.md              testing risks
analytics/dashboard.html        metrics dashboard mock
```

Survey live links are also in the case study (§2).

---

## Non-negotiables (short)

1. **Watching** = referred, move not yet real → no contact with councils or suppliers.  
2. **Confirmed** only with a real receipt. Otherwise show `sent · no receipt`.  
3. **Date change** redraws the plan; nothing silently drops.  
4. **UI** for money; voice optional on moving day for access.  
5. **Named customer support person** on high-stakes moments.

---

## Design notes

Type and colour rationale: [`DESIGN-LANGUAGE.md`](DESIGN-LANGUAGE.md). Tokens: [`tokens/`](tokens/). Built to sit near Tailwind / shadcn patterns in JMI’s Figma, without pretending this HTML is brand-final.
