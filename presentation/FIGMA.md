# Jay narrative → Figma (not FigJam)

## Figma or FigJam?

**Use Figma Design.** One Present frame per feature: wireframe left, story right.

| | Figma Design | FigJam |
|---|---|---|
| Best for | Review / interview walkthrough | Sticky brainstorm, workshop |
| Present mode | Yes (arrow through frames) | Loose |
| Wireframes as UI frames | Native | Stickies + pasted images |
| Your format (screen → 5 story blocks) | Fits | Overkill / messier |

Keep FigJam only if you want a separate workshop board. Do **not** put the discovery narrative in FigJam.

Your existing `Mobile` + `Ask Jay` chat frames are an old concept. Present the new page the plugin creates instead.

---

## What I cannot do from Cursor

I cannot write layers into your Figma file over the link. Figma’s REST API does not create frames. A **local plugin** does, run it once inside your file.

---

## Create the walkthrough in your file (2 minutes)

Plugin path (this repo):

`presentation/figma-plugin/`

1. Open your file: [Jeanne - Product discovery exercise (Copy)](https://www.figma.com/design/luk6ICz9RU8Y2TP805G2Rl/Jeanne---Product-discovery-exercise--Copy-).
2. Menu → **Plugins** → **Development** → **Import plugin from manifest…**
3. Select: `presentation/figma-plugin/manifest.json`
4. **Plugins** → **Development** → **Jay · Feature walkthrough**
5. It creates / refreshes page **`01 Narrative · Jay`** with 14 Present frames:
   - Cover, Agenda
   - 11 feature slides (phone wireframe + What / Purpose / Design rationale / Research / Next)
   - Closing next steps
6. Press **Present** (top right). Arrow through.

Re-run anytime to rebuild that page (it clears and recreates only `01 Narrative · Jay`).

---

## Source of truth

| Artifact | Role |
|---|---|
| Live prototype | Proof: https://just-move-in-liard.vercel.app |
| HTML deck | Same narrative offline: [`jay-feature-walkthrough.html`](jay-feature-walkthrough.html) |
| Figma plugin | Writes editable frames into your `.fig` |
| Full wireframe board | [`../wireframes/jay-wireframes.html`](../wireframes/jay-wireframes.html) |

---

## Optional: full lo-fi board page

If you also want every phone from the HTML wireframe board as images:

1. Open `wireframes/jay-wireframes.html`
2. Screenshot each flow row
3. Paste onto a Figma page named `02 Wireframes`

The narrative page from the plugin is enough for the feature presentation.
