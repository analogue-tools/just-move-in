/**
 * Jay · Feature walkthrough
 * Creates a Figma page of Present frames:
 * phone wireframe (left) + What / Purpose / Rationale / Research / Next (right)
 *
 * Run: Plugins → Development → Import plugin from manifest…
 * then Plugins → Development → Jay · Feature walkthrough
 */

var W = 1920;
var H = 1080;
var PAGE_NAME = '01 Narrative · Jay';

var C = {
  ink: { r: 0.07, g: 0.07, b: 0.1 },
  ink2: { r: 0.29, g: 0.29, b: 0.36 },
  ink3: { r: 0.525, g: 0.525, b: 0.608 },
  paper: { r: 0.957, g: 0.957, b: 0.976 },
  white: { r: 1, g: 1, b: 1 },
  line: { r: 0.902, g: 0.902, b: 0.937 },
  wire: { r: 0.91, g: 0.91, b: 0.925 },
  violet: { r: 0.357, g: 0.239, b: 0.961 },
  violetSub: { r: 0.929, g: 0.914, b: 1 },
  fog: { r: 0.365, g: 0.451, b: 0.569 },
  dark: { r: 0.106, g: 0.106, b: 0.149 },
  dark2: { r: 0.169, g: 0.169, b: 0.227 },
  chip: { r: 0.878, g: 0.878, b: 0.91 },
  phoneBorder: { r: 0.227, g: 0.227, b: 0.29 }
};

var FEATURES = [
  {
    id: '01 Referral',
    kicker: 'Entry · watching',
    title: 'Referral',
    what: 'The first screen after a letting agent or solicitor sends the mover in. It explains the service before anything is due.',
    purpose: 'Earn permission from someone who did not choose Jay. Set the watching rule: profile can be stored, nobody is contacted yet.',
    rationale: 'Gives before it asks. Three value cards, named human escape, pause and opt-out as equals to continue. No task list, no green ticks, no urgency theatre.',
    research: '37% of agreed sales never complete (Connells 2025). 16/60 negative Trustpilot themes cite unsolicited contact. Survey Q5 (n=9): 2/9 only accept with a human path, 2/9 refuse.',
    next: 'Partner-specific referral variants; measure opt-out vs pause vs continue; A/B the three value claims against Q13 trust objections.',
    phone: [
      ['eye', 'Kentish Town Lettings · referred'],
      ['h', 'Your move is on 14 August'],
      ['p', 'Nothing due yet. We wait for exchange.'],
      ['box', '01 Watch', 'Until exchange'],
      ['box', '02 Basket', 'One 60s pass'],
      ['box', '03 Notify', 'With LOA'],
      ['box', 'Jay + Lyndon', 'Human escape always on'],
      ['btn', 'Show me my plan'],
      ['btng', 'Pause']
    ]
  },
  {
    id: '02 Home · Getting Started',
    kicker: 'Hub',
    title: 'Home · Getting Started',
    what: 'The move hub. Four stage tabs. Getting Started holds LOA, stage cards, and the sequenced CTAs into discovery and basket.',
    purpose: 'Orient the mover, show receipts of permission, and sequence the only commercial decisions Jay needs before work can run.',
    rationale: 'Tabs replaced a duplicate stage stepper. One primary CTA at a time (Start discovery → Confirm basket). Change answers / Change plan are text links, not competing buttons. Date provenance stays visible and small.',
    research: 'Survey Q6: 1-tap approve led (5/9), voice 0 as completion. LOA in plain English answers control fears. Brief: receipts before AI.',
    next: 'Instrument stage completion funnels; test whether mile cards help or add noise; partner feed confidence chip when date is still estimated.',
    nav: 'Home',
    phone: [
      ['eye', 'Stage 1 of 4'],
      ['h', 'Home'],
      ['box', '2 reminders', 'Redirect · Camden'],
      ['row', 'Moving 14 August', 'Change'],
      ['tabs', 'Started|Pre|Day 0|Post', 0],
      ['box', 'LOA', 'signed · active'],
      ['task', '01 Before contracts', 'Start here'],
      ['btn', 'Start discovery']
    ]
  },
  {
    id: '03 Discovery',
    kicker: 'Activation',
    title: 'Discovery',
    what: 'A short adaptive questionnaire over Home. Answers become ranking inputs for energy, broadband, and insurance.',
    purpose: 'Capture household, occupancy, and tenancy once so the mover never retypes the same facts at three checkouts.',
    rationale: 'UI decides: large tappable options, not a chatbot front door. Ask Jay is a side channel. Stop when confidence is enough (6 to 9 questions). Tenancy caps contract length so an 18 month deal cannot win a 12 month tenancy.',
    research: 'Survey Q6: 1-tap led; voice 0. Q4: most reported 1–3 or 4–8 calls, not 9–15+, so the pitch is decision quality, not form count.',
    next: 'Ship POST /discovery/next with real confidence thresholds; log abandon by question index; test 4 vs 6 question stop rules.',
    phone: [
      ['eye', '← Back · Stage 2'],
      ['h', 'A few answers, then the matches'],
      ['p', 'Answers fan out once across three utilities'],
      ['eye', 'Question 3 of 6'],
      ['h', 'How many living there?'],
      ['btng', 'Just me'],
      ['btn', 'Two of us'],
      ['btng', 'Three or four'],
      ['btn', 'See what I would pick']
    ]
  },
  {
    id: '04 Basket',
    kicker: 'Commerce',
    title: 'Basket · one pick per category',
    what: 'Three carousels (energy, broadband, insurance). One recommended pick is the decision; alternatives sit behind arrows, not in a comparison grid.',
    purpose: 'Get an explicit confirm on money and contracts before Jay places orders. Disclose panel economics once. Block unsafe energy switches.',
    rationale: 'Ofgem-shaped choice architecture. Time-compressed ranking (<14 days) prefers install speed and says so. Safety checkboxes sit on the confirm path. OVO reflects panel reality, not a brand we do not sell.',
    research: 'Ofgem trials: single offer 14–29.5% vs 2.4–13.4% for three-plus. 13/60 negatives: commercial opacity. 75% trust AI less if picks look paid (Quad/Harris). Trustpilot near-miss on prepayment + medical.',
    next: 'Experiment E1: retest one-pick on JMI population. Wire safety flags to hard block + Lyndon. Live panel fee and social-proof thresholds in data.',
    phone: [
      ['eye', 'Stage 2 · basket'],
      ['h', 'Three picks. One decision.'],
      ['box', 'Energy · OVO 12M Fixed', 'Recommended · £118'],
      ['box', 'Broadband · Community Fibre', 'installs before move'],
      ['box', 'Safety gate', 'Prepay · medical · PSR'],
      ['p', 'Panel fee · once'],
      ['btn', 'Confirm selected plans']
    ]
  },
  {
    id: '05 Confirmed',
    kicker: 'Closure',
    title: 'Confirmed',
    what: 'The closure artifact after basket confirm: what is running, in what honest state, and what still needs the mover.',
    purpose: 'Replace the specialist’s “that is everything and here is what happens next” sentence. Create confidence without lying about councils that never send receipts.',
    rationale: '“sent · no receipt” uses the fog register. Green only when a receipt exists. No false ticks. CTA sends people into Pre-move work, not a dead end dashboard.',
    research: '18/60 negatives: told it was handled, it was not. Competitive C8 (SlothMove): verification gaps. 60% abandon an agent after one mistake (ACI).',
    next: 'DB constraint: confirmed requires receipt_id. Chase scheduler for fog states. False-confidence probe in analytics.',
    phone: [
      ['h', 'That is the hard part done.'],
      ['p', 'Eleven running. Two need you later.'],
      ['row', 'OVO switch', 'in progress'],
      ['row', 'Camden', 'sent · no receipt'],
      ['row', 'Water', 'confirmed'],
      ['btn', 'Go to Home · Pre-move']
    ]
  },
  {
    id: '06 Home · Pre-move',
    kicker: 'Execution',
    title: 'Home · Pre-move',
    what: 'Compact task rows with owner (Jay / You) and honest state. The board of work between exchange and move day.',
    purpose: 'Make must-do work visible and chaseable. Separate what Jay runs from what only the mover can do (redirect, removals, packing).',
    rationale: 'Ordering follows felt pain, not only lead time: address updates and council/suppliers ahead of broadband as the headline headache, while broadband stays for install lead time. Deadpan cards, amber for deadlines, fog for unconfirmable.',
    research: 'Survey Q3 (n=9): address updates 3/9, council 2/9, finding suppliers 2/9; broadband never named as biggest headache.',
    next: 'Bind Pre-move rows to the same BOARD_TASKS dataset as Tasks; push notifications timed to deadlines; Royal Mail deep link with status sync.',
    nav: 'Home',
    phone: [
      ['tabs', 'Started|Pre-move|Day 0|Post', 1],
      ['eye', 'Early checks'],
      ['row', 'Broadband', 'Done'],
      ['row', 'Energy detect', 'in progress'],
      ['row', 'Removals', 'blocked'],
      ['row', 'Redirect post', 'do by 9 Aug'],
      ['row', 'Camden tax', 'sent · no receipt']
    ]
  },
  {
    id: '07 Move-in day',
    kicker: 'Day 0',
    title: 'Move-in day · modular voice + UI',
    what: 'Keys and meters with voice leading and large equal buttons always on screen. Deposit and safety checklists sit below meters.',
    purpose: 'Capture the two intents that unlock occupancy while the mover has no broadband and one free hand. Fire council start date and cover when keys = yes.',
    rationale: 'Voice for access, not because survey preferred it. No separate Enable button; tap card or Yes/No unlocks mic. Welcome home soft landings after keys, not before.',
    research: 'Survey Q6: voice = 0 as completion mechanic. Day 0 rests on access conditions and ritual evidence (Q7/Q8), not preference share.',
    next: 'PSTN bridge for real calls; OCR meter pipeline; transfer-to-Lyndon on distress; measure voice vs UI completion rates.',
    nav: 'Home',
    phone: [
      ['tabs', 'Started|Pre|Day 0|Post', 2],
      ['voice', 'Have you got the keys?'],
      ['box', 'Keys', 'Yes · No'],
      ['box', 'Meters', 'Looks right · Wrong'],
      ['p', 'Deposit photos + safety below']
    ]
  },
  {
    id: '08 Post-move + survey',
    kicker: 'Settling',
    title: 'Post-move + soft survey',
    what: 'First bill check, bins, vote, GP, and an optional in-product survey with Skip on every step.',
    purpose: 'Catch estimated vs metered bills early; hand local orientation; learn whether recommendations landed, without trapping people in research UX.',
    rationale: 'Settling window is short; keep tasks light. Survey is optional and stoppable. Market deep links for GP/food stay labelled.',
    research: 'Survey Q14: bins/guides, community, and housewarming discounts tied. Habit window ~3 months post-move. Nous-style bill value is move-aware.',
    next: 'Wire bill mismatch to dispute chat with seed context; localise bin data by council API; keep survey response rate as a north-star for product learning.',
    nav: 'Home',
    phone: [
      ['tabs', 'Started|Pre|Day 0|Post', 3],
      ['p', 'Hard admin finished. Leftovers.'],
      ['row', 'First bill check', '£34'],
      ['row', 'Bin days', 'Tue'],
      ['row', 'Vote', 'open'],
      ['row', 'GP', 'open'],
      ['box', 'Help us get better', 'Q1 of 5 · Skip always']
    ]
  },
  {
    id: '09 Tasks',
    kicker: 'System of record',
    title: 'Tasks · dual lens',
    what: 'List (kanban columns) and Home (house fill + must-do list). One dataset; the toggle only changes presentation.',
    purpose: 'Status truth for operators and movers. Visual progress that never decays. Change plan returns to basket, not a free-text dead end.',
    rationale: 'Operational transparency (Buell & Norton): showing the work raises perceived value. House is additive only. No streaks or timers.',
    research: 'Trustpilot praise clusters on “someone handled it.” Negatives cluster on invisible failure. Dual lens makes both status and progress legible.',
    next: 'Live sync from task engine; specialist ops view; bind Home Pre-move list to the same array end to end.',
    nav: 'Tasks',
    phone: [
      ['h', 'Tasks'],
      ['tabs', 'List|Home', 0],
      ['box', 'Done', 'BB · Energy'],
      ['box', 'Current', 'Camden · Post'],
      ['box', 'Future', 'Meters'],
      ['p', 'Same BOARD_TASKS array']
    ]
  },
  {
    id: '10 Date change',
    kicker: 'Resilience',
    title: 'Date change cascade',
    what: 'Calendar to pick a new move date, then a diff: rescheduled, needs redoing, lost.',
    purpose: 'Absorb the reality that dates slip. Rebook what can amend; name what cannot (e.g. Royal Mail redirect). Never silently wrong.',
    rationale: 'One action, one summary message. lost must be 0. Provenance flips from solicitor to you. Honest failure beats fourteen quiet mistakes.',
    research: 'Connells: long offer-to-exchange. Best specialists multi-touch when dates slip (research Q3/Q16). Product thesis: date is mutable.',
    next: 'Rules table for non-amendable destinations; partner webhooks for solicitor date; alert if lost > 0 in production.',
    phone: [
      ['eye', '← Cancel'],
      ['h', 'When are you moving now?'],
      ['box', 'Was 14 August', 'Solicitor feed'],
      ['box', 'Calendar', 'Pick a new date'],
      ['btn', 'Move everything'],
      ['p', '14 moved · 1 redo · 0 lost']
    ]
  },
  {
    id: '11 Ask Jay · Market',
    kicker: 'Side channels',
    title: 'Ask Jay, FAQ, Market',
    what: 'Sticky Ask + FAQ sheets for soft questions. Market for local listings with NHS/council free and panel labelled.',
    purpose: 'Absorb edge questions without making chat the product. Local week-one needs without bundling bills.',
    rationale: 'Brief rule: no general chatbot as front door. Lyndon only under Talk to a human. Panel fee once; no bills bundling.',
    research: 'Survey Q14 welcomed discounts alongside guides. 35/39 five-star reviews name a person. Production agents resolve ~38–50% of contacts.',
    next: 'FAQ retrieval quality bar; escalate on distress language; Market booking with moveDateOffset in cascade.',
    nav: 'Market',
    phone: [
      ['eye', 'Market · NW5'],
      ['h', 'Find help nearby'],
      ['box', 'Search · chips · map', ''],
      ['task', 'GP · NHS', 'Free listing'],
      ['task', 'Locksmith', 'Panel · labelled'],
      ['box', 'Ask Jay…', 'FAQ'],
      ['p', 'Chat is side channel, not entry']
    ]
  }
];

async function main() {
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Medium' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Semi Bold' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Bold' });

  var page = figma.root.children.find(function (p) { return p.name === PAGE_NAME; });
  if (page) {
    page.children.slice().forEach(function (n) { n.remove(); });
  } else {
    page = figma.createPage();
    page.name = PAGE_NAME;
  }
  await figma.setCurrentPageAsync(page);

  var frames = [];
  frames.push(buildTitleSlide(page, 0));
  frames.push(buildAgendaSlide(page, 1));

  FEATURES.forEach(function (f, i) {
    frames.push(buildFeatureSlide(page, f, i + 2));
  });

  frames.push(buildClosingSlide(page, FEATURES.length + 2));

  figma.currentPage.selection = frames;
  figma.viewport.scrollAndZoomIntoView(frames);
  figma.notify('Created ' + frames.length + ' Present frames on “' + PAGE_NAME + '”. Press Present.');
  figma.closePlugin();
}

function buildTitleSlide(page, index) {
  var frame = slideFrame(page, '00 Cover', index);
  paintSolid(frame, C.dark);

  addText(frame, {
    x: 200, y: 280, w: 1520,
    chars: 'Jeanne Piffaut · Just Move In · July 2026',
    size: 18, style: 'Medium', color: C.ink3, align: 'CENTER'
  });
  addText(frame, {
    x: 200, y: 340, w: 1520,
    chars: 'Jay · feature walkthrough',
    size: 64, style: 'Bold', color: C.white, align: 'CENTER'
  });
  addText(frame, {
    x: 360, y: 440, w: 1200,
    chars: 'Each screen: what it is, why it exists, why it looks this way, the research behind it, and what I would do next.',
    size: 22, style: 'Regular', color: C.ink3, align: 'CENTER'
  });
  addText(frame, {
    x: 360, y: 560, w: 1200,
    chars: 'Prototype: just-move-in-liard.vercel.app\nWireframes sit beside the story. Present this page.',
    size: 16, style: 'Medium', color: { r: 0.54, g: 0.54, b: 0.64 }, align: 'CENTER'
  });
  return frame;
}

function buildAgendaSlide(page, index) {
  var frame = slideFrame(page, '00 Agenda', index);
  paintSolid(frame, C.dark);

  addText(frame, {
    x: 200, y: 160, w: 800,
    chars: 'Agenda',
    size: 40, style: 'Bold', color: C.white
  });

  var items = [
    'Entry and trust (Referral)',
    'Activation (Discovery → Basket → Confirmed)',
    'Home as the move hub',
    'Move-in day (voice + UI)',
    'Tasks as system of record',
    'Date change cascade',
    'Side channels and Market',
    'What I would do next'
  ];
  items.forEach(function (t, i) {
    addText(frame, {
      x: 200, y: 240 + i * 56, w: 1400,
      chars: (i + 1) + '.  ' + t,
      size: 24, style: 'Regular', color: { r: 0.81, g: 0.81, b: 0.88 }
    });
  });
  return frame;
}

function buildClosingSlide(page, index) {
  var frame = slideFrame(page, '12 What I would do next', index);
  paintSolid(frame, C.dark);

  addText(frame, {
    x: 200, y: 140, w: 1400,
    chars: 'What I would do next',
    size: 40, style: 'Bold', color: C.white
  });

  var items = [
    'Production spine: watching gate, receipt constraint, cascade worker, panel feeds.',
    'Instrumentation: activation funnel + P0 alerts (outbound while watching, false confirmed).',
    'Experiment E1: one-pick basket conversion on JMI movers.',
    'Day 0: real telephony + OCR; keep UI parity.',
    'Customer tests: run ?mode=test on the live prototype; moderate with this deck.',
    'Keep this Figma page as the narrative source; do not present the old Mobile/chat concept frames.'
  ];
  items.forEach(function (t, i) {
    var y = 230 + i * 72;
    var bullet = figma.createRectangle();
    bullet.resize(10, 10);
    bullet.x = 200;
    bullet.y = y + 8;
    bullet.cornerRadius = 5;
    paintSolid(bullet, C.violet);
    frame.appendChild(bullet);
    addText(frame, {
      x: 230, y: y, w: 1400,
      chars: t,
      size: 20, style: 'Regular', color: { r: 0.81, g: 0.81, b: 0.88 }
    });
  });
  return frame;
}

function buildFeatureSlide(page, feature, index) {
  var frame = slideFrame(page, feature.id, index);
  paintSolid(frame, C.paper);

  // left phone
  var phone = buildPhone(feature);
  phone.x = 96;
  phone.y = 120;
  frame.appendChild(phone);

  addText(frame, {
    x: 96, y: 78, w: 320,
    chars: feature.id,
    size: 14, style: 'Medium', color: C.violet
  });

  // right story card
  var story = figma.createFrame();
  story.name = 'Story';
  story.layoutMode = 'VERTICAL';
  story.primaryAxisSizingMode = 'AUTO';
  story.counterAxisSizingMode = 'FIXED';
  story.resize(1280, 10);
  story.itemSpacing = 18;
  story.paddingTop = 36;
  story.paddingBottom = 36;
  story.paddingLeft = 40;
  story.paddingRight = 40;
  story.cornerRadius = 20;
  paintSolid(story, C.white);
  story.x = 500;
  story.y = 96;
  frame.appendChild(story);

  addTextNode(story, feature.kicker.toUpperCase(), {
    size: 13, style: 'Semi Bold', color: C.violet, w: 1200
  });
  addTextNode(story, feature.title, {
    size: 36, style: 'Bold', color: C.ink, w: 1200
  });

  addStoryBlock(story, 'What it is', feature.what, false);
  addStoryBlock(story, 'Purpose', feature.purpose, false);
  addStoryBlock(story, 'Design rationale', feature.rationale, false);
  addStoryBlock(story, 'Research', feature.research, true);
  addStoryBlock(story, 'What I would do next', feature.next, false, true);

  return frame;
}

function addStoryBlock(parent, label, body, isCite, isNext) {
  var block = figma.createFrame();
  block.name = label;
  block.layoutMode = 'VERTICAL';
  block.primaryAxisSizingMode = 'AUTO';
  block.counterAxisSizingMode = 'FIXED';
  block.resize(1200, 10);
  block.itemSpacing = 6;
  if (isNext) {
    block.paddingTop = 14;
    block.paddingBottom = 14;
    block.paddingLeft = 16;
    block.paddingRight = 16;
    block.cornerRadius = 12;
    paintSolid(block, C.violetSub);
  }
  parent.appendChild(block);

  addTextNode(block, label.toUpperCase(), {
    size: 12,
    style: 'Semi Bold',
    color: isNext ? C.violet : C.ink3,
    w: isNext ? 1168 : 1200
  });
  addTextNode(block, body, {
    size: isCite ? 14 : 16,
    style: isCite ? 'Medium' : 'Regular',
    color: isNext ? { r: 0.184, g: 0.141, b: 0.502 } : (isCite ? C.fog : C.ink2),
    w: isNext ? 1168 : 1200
  });
}

function buildPhone(feature) {
  var phone = figma.createFrame();
  phone.name = 'Wireframe';
  phone.resize(320, 640);
  phone.cornerRadius = 36;
  phone.strokes = [{ type: 'SOLID', color: C.phoneBorder }];
  phone.strokeWeight = 3;
  paintSolid(phone, C.white);
  phone.clipsContent = true;
  phone.layoutMode = 'VERTICAL';
  phone.primaryAxisSizingMode = 'FIXED';
  phone.counterAxisSizingMode = 'FIXED';
  phone.paddingTop = 14;
  phone.paddingBottom = feature.nav ? 0 : 16;
  phone.paddingLeft = 16;
  phone.paddingRight = 16;
  phone.itemSpacing = 8;

  var notch = figma.createRectangle();
  notch.resize(72, 14);
  notch.cornerRadius = 10;
  paintSolid(notch, C.ink);
  phone.appendChild(notch);
  notch.layoutAlign = 'CENTER';

  var body = figma.createFrame();
  body.name = 'Body';
  body.layoutMode = 'VERTICAL';
  body.primaryAxisSizingMode = 'FIXED';
  body.counterAxisSizingMode = 'FIXED';
  body.layoutGrow = 1;
  body.resize(288, 100);
  body.itemSpacing = 8;
  paintSolid(body, C.white);
  phone.appendChild(body);

  (feature.phone || []).forEach(function (row) {
    appendPhoneRow(body, row);
  });

  if (feature.nav) {
    var nav = figma.createFrame();
    nav.name = 'Nav';
    nav.layoutMode = 'HORIZONTAL';
    nav.primaryAxisSizingMode = 'FIXED';
    nav.counterAxisSizingMode = 'FIXED';
    nav.resize(320, 52);
    nav.paddingTop = 8;
    nav.paddingBottom = 12;
    nav.paddingLeft = 8;
    nav.paddingRight = 8;
    nav.itemSpacing = 4;
    nav.strokes = [{ type: 'SOLID', color: C.line }];
    nav.strokeTopWeight = 1;
    nav.strokeBottomWeight = 0;
    nav.strokeLeftWeight = 0;
    nav.strokeRightWeight = 0;
    paintSolid(nav, C.white);
    phone.appendChild(nav);

    ['Home', 'Tasks', 'Market', 'Settings'].forEach(function (label) {
      var cell = figma.createFrame();
      cell.layoutMode = 'VERTICAL';
      cell.primaryAxisAlignItems = 'CENTER';
      cell.counterAxisAlignItems = 'CENTER';
      cell.layoutGrow = 1;
      cell.resize(70, 32);
      paintSolid(cell, C.white);
      nav.appendChild(cell);
      addTextNode(cell, label, {
        size: 10,
        style: label === feature.nav ? 'Semi Bold' : 'Regular',
        color: label === feature.nav ? C.violet : C.ink3,
        w: 70,
        align: 'CENTER'
      });
    });
  }

  return phone;
}

function appendPhoneRow(parent, row) {
  var kind = row[0];
  if (kind === 'eye') {
    addTextNode(parent, String(row[1]).toUpperCase(), {
      size: 10, style: 'Medium', color: C.ink3, w: 288
    });
    return;
  }
  if (kind === 'h') {
    addTextNode(parent, String(row[1]), {
      size: 18, style: 'Bold', color: C.ink, w: 288
    });
    return;
  }
  if (kind === 'p') {
    addTextNode(parent, String(row[1]), {
      size: 12, style: 'Regular', color: C.ink3, w: 288
    });
    return;
  }
  if (kind === 'btn' || kind === 'btng') {
    var btn = figma.createFrame();
    btn.layoutMode = 'HORIZONTAL';
    btn.primaryAxisAlignItems = 'CENTER';
    btn.counterAxisAlignItems = 'CENTER';
    btn.resize(288, 40);
    btn.cornerRadius = 10;
    if (kind === 'btn') {
      paintSolid(btn, C.ink);
    } else {
      paintSolid(btn, C.white);
      btn.strokes = [{ type: 'SOLID', color: C.line }];
      btn.strokeWeight = 1;
    }
    parent.appendChild(btn);
    addTextNode(btn, String(row[1]), {
      size: 12,
      style: 'Semi Bold',
      color: kind === 'btn' ? C.white : C.ink,
      w: 260,
      align: 'CENTER'
    });
    return;
  }
  if (kind === 'box' || kind === 'task') {
    var box = figma.createFrame();
    box.layoutMode = 'VERTICAL';
    box.primaryAxisSizingMode = 'AUTO';
    box.counterAxisSizingMode = 'FIXED';
    box.resize(288, 10);
    box.itemSpacing = 4;
    box.paddingTop = 10;
    box.paddingBottom = 10;
    box.paddingLeft = 12;
    box.paddingRight = 12;
    box.cornerRadius = 10;
    paintSolid(box, C.wire);
    if (kind === 'task') {
      paintSolid(box, C.white);
      box.strokes = [{ type: 'SOLID', color: C.line }];
      box.strokeWeight = 1;
    }
    parent.appendChild(box);
    addTextNode(box, String(row[1]), {
      size: 12, style: 'Semi Bold', color: C.ink, w: 264
    });
    if (row[2]) {
      addTextNode(box, String(row[2]), {
        size: 11, style: 'Regular', color: C.ink3, w: 264
      });
    }
    return;
  }
  if (kind === 'row') {
    var rowF = figma.createFrame();
    rowF.layoutMode = 'HORIZONTAL';
    rowF.primaryAxisAlignItems = 'CENTER';
    rowF.counterAxisAlignItems = 'CENTER';
    rowF.primaryAxisSizingMode = 'FIXED';
    rowF.counterAxisSizingMode = 'AUTO';
    rowF.resize(288, 10);
    rowF.paddingTop = 10;
    rowF.paddingBottom = 10;
    rowF.paddingLeft = 12;
    rowF.paddingRight = 12;
    rowF.itemSpacing = 8;
    rowF.cornerRadius = 10;
    paintSolid(rowF, C.white);
    rowF.strokes = [{ type: 'SOLID', color: C.line }];
    rowF.strokeWeight = 1;
    parent.appendChild(rowF);

    var left = addTextNode(rowF, String(row[1]), {
      size: 12, style: 'Semi Bold', color: C.ink, w: 160
    });
    left.layoutGrow = 1;

    var chip = figma.createFrame();
    chip.layoutMode = 'HORIZONTAL';
    chip.primaryAxisAlignItems = 'CENTER';
    chip.counterAxisAlignItems = 'CENTER';
    chip.paddingLeft = 6;
    chip.paddingRight = 6;
    chip.paddingTop = 3;
    chip.paddingBottom = 3;
    chip.cornerRadius = 5;
    chip.primaryAxisSizingMode = 'AUTO';
    chip.counterAxisSizingMode = 'AUTO';
    paintSolid(chip, C.chip);
    rowF.appendChild(chip);
    addTextNode(chip, String(row[2]), {
      size: 10, style: 'Medium', color: C.ink2, w: 100
    });
    return;
  }
  if (kind === 'tabs') {
    var labels = String(row[1]).split('|');
    var on = row[2] || 0;
    var tabs = figma.createFrame();
    tabs.layoutMode = 'HORIZONTAL';
    tabs.resize(288, 34);
    tabs.itemSpacing = 3;
    tabs.paddingTop = 3;
    tabs.paddingBottom = 3;
    tabs.paddingLeft = 3;
    tabs.paddingRight = 3;
    tabs.cornerRadius = 10;
    paintSolid(tabs, C.wire);
    parent.appendChild(tabs);
    labels.forEach(function (label, i) {
      var tab = figma.createFrame();
      tab.layoutMode = 'HORIZONTAL';
      tab.primaryAxisAlignItems = 'CENTER';
      tab.counterAxisAlignItems = 'CENTER';
      tab.layoutGrow = 1;
      tab.resize(60, 28);
      tab.cornerRadius = 8;
      paintSolid(tab, i === on ? C.white : C.wire);
      tabs.appendChild(tab);
      addTextNode(tab, label, {
        size: 9,
        style: i === on ? 'Semi Bold' : 'Regular',
        color: i === on ? C.violet : C.ink3,
        w: 56,
        align: 'CENTER'
      });
    });
    return;
  }
  if (kind === 'voice') {
    var voice = figma.createFrame();
    voice.layoutMode = 'VERTICAL';
    voice.primaryAxisAlignItems = 'CENTER';
    voice.counterAxisAlignItems = 'CENTER';
    voice.resize(288, 96);
    voice.itemSpacing = 8;
    voice.paddingTop = 14;
    voice.paddingBottom = 14;
    voice.cornerRadius = 14;
    paintSolid(voice, C.ink);
    parent.appendChild(voice);
    var orb = figma.createEllipse();
    orb.resize(28, 28);
    orb.strokes = [{ type: 'SOLID', color: { r: 0.53, g: 0.53, b: 0.53 } }];
    orb.strokeWeight = 2;
    orb.fills = [];
    voice.appendChild(orb);
    addTextNode(voice, 'Jay · voice', {
      size: 10, style: 'Medium', color: { r: 0.67, g: 0.67, b: 0.67 }, w: 240, align: 'CENTER'
    });
    addTextNode(voice, '“' + row[1] + '”', {
      size: 13, style: 'Medium', color: C.white, w: 240, align: 'CENTER'
    });
  }
}

function slideFrame(page, name, index) {
  var frame = figma.createFrame();
  frame.name = name;
  frame.resize(W, H);
  frame.x = index * (W + 80);
  frame.y = 0;
  page.appendChild(frame);
  return frame;
}

function paintSolid(node, color) {
  node.fills = [{ type: 'SOLID', color: color }];
}

function addText(parent, opts) {
  var t = figma.createText();
  t.fontName = { family: 'Inter', style: opts.style || 'Regular' };
  t.characters = opts.chars;
  t.fontSize = opts.size;
  t.fills = [{ type: 'SOLID', color: opts.color }];
  t.textAlignHorizontal = opts.align || 'LEFT';
  t.resize(opts.w, opts.size * 1.4 * (opts.chars.split('\n').length));
  t.textAutoResize = 'HEIGHT';
  t.x = opts.x;
  t.y = opts.y;
  parent.appendChild(t);
  return t;
}

function addTextNode(parent, chars, opts) {
  var t = figma.createText();
  t.fontName = { family: 'Inter', style: opts.style || 'Regular' };
  t.characters = chars;
  t.fontSize = opts.size;
  t.fills = [{ type: 'SOLID', color: opts.color }];
  t.textAlignHorizontal = opts.align || 'LEFT';
  t.layoutAlign = 'STRETCH';
  t.textAutoResize = 'HEIGHT';
  if (opts.w) t.resize(opts.w, opts.size * 1.5);
  parent.appendChild(t);
  return t;
}

main().catch(function (err) {
  figma.notify('Plugin error: ' + (err && err.message ? err.message : String(err)), { error: true });
  figma.closePlugin();
});
