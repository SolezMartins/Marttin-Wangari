'use strict';

// ============================================
// CONFIG
// ============================================
var PHONE_E164    = '+254740208683';
var PHONE_DISPLAY = '+254 740 208 683';
var WA_NUMBER     = '254740208683';
var EMAIL         = 'martindevs07@gmail.com';
var WA_MESSAGE    = 'Hi Martin, I found your portfolio and would like to talk.';
var WA_URL        = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(WA_MESSAGE);
var MAX_INPUT     = 120;
var INSTANT_THRESHOLD = 35; // words — outputs longer than this render instantly

// ============================================
// CONTENT
// ============================================
var COMMANDS = {
  welcome: {
    text: "Hi, I'm Martin Mwangi Wangari — Software and AI Developer based in Nairobi, Kenya.\n\nThis is a fully interactive terminal. Type any command and press Enter, press Tab to autocomplete, or click a command above.\n\nIn a hurry? Type 'hire' or tap the WhatsApp button."
  },
  help: {
    text: "Available commands:\n\n  about          who I am\n  experience     work history\n  skills         technical skillset\n  builds         things I've shipped\n  case-studies   deep-dive project walkthroughs\n  certs          certifications\n  contact        every way to reach me\n  whatsapp       open a WhatsApp chat\n  hire           what I'm looking for\n  resume         download my resume\n  whoami         one-line summary\n  sudo           try it and see\n  clear          clear the terminal\n\nShortcuts: Tab autocompletes · ↑↓ walk history · Ctrl+L clears · / focuses prompt"
  },
  about: {
    text: "Software and AI Developer based in Nairobi, Kenya, focused on building practical digital products, intelligent workflows and modern web platforms.\n\nI handle first- and second-line support, administer Office 365 environments, test internal APIs with Postman, and keep business-critical systems running. Before that I spent years on the hardware side — PCB diagnostics, component-level repair, firmware installation on smart meters, and fiber optic installation and splicing.\n\nThat mix of hardware-level thinking and systems-level support is what pulls me toward building things too: a ride-hailing platform with real-time backend integration, browser extensions, internal tools and client websites.\n\nAdaptable and detail-oriented, with the cross-functional communication that fast-paced, multicultural and safety-conscious environments need."
  },
  experience: {
    text: "IT Systems Support Technician — Independent Contractor, Nairobi (Mar 2025 – present)\n  First- and second-line support across hardware, software and network issues via phone, email and in person. Office 365 administration covering user accounts, license allocation and system deployments. API endpoint testing and validation with Postman ahead of release. IT asset inventory management and policy-compliant equipment disposal. Risk identification feeding into policy improvements. User training materials that cut recurring support tickets.\n\nRepair Technician / PCB Technician — M-Gas Kenya Ltd (Jul 2022 – Feb 2025)\n  Diagnosed, repaired and configured PCBs across a range of electronic devices. Replaced faulty components to reduce downtime and extend equipment life. Installed and tested firmware on smart meters for field deployment. General maintenance and repair of electronic equipment.\n\nField Network Technician — G-Tech Technology Ltd (Jan 2022 – Jun 2022)\n  Installed and configured residential fiber internet services. Fiber optic cable splicing and repairs to restore network functionality. Cable installation and router configuration for network stability.\n\nIndustrial Attachment — Broadband Communication Networks Ltd (Mar 2021 – May 2021)\n  Assisted with cabling, router and telephone system installation on infrastructure projects. Hands-on fiber internet installation and diagnostics. Server network hardware configuration under senior supervision."
  },
  skills: {
    text: "IT Support and Administration\n  Office 365 Administration · Help Desk and Ticketing Systems · Hardware and Software Support · Remote Support Tools · Mobile Device Management · Active Directory · Cybersecurity Fundamentals\n\nNetworking and Infrastructure\n  Fiber Optic Installation and Splicing · TCP/IP · DNS · DHCP · Router and Switch Configuration · PCB Repair and Configuration · System Deployments · Cable Installation\n\nSoftware Development\n  Python · JavaScript (React) · PHP · WordPress · HTML · CSS · Bootstrap · PostgreSQL · Supabase\n\nAPI and Data Tools\n  Postman (API testing and debugging) · REST API fundamentals · Data Analytics · Power BI · AI tools and automation\n\nWorking Style\n  Problem solving · Technical communication · Team collaboration · Time management · Adaptability · Customer service"
  },
  builds: {
    text: "Mpambe Hotel POS (point-of-sale system)\n  Full front-end POS for a Swahili-cuisine restaurant — Dine In / Take Away / Delivery ordering, live order totals, cash/M-Pesa/card checkout, printable and PDF receipts, plus orders, inventory, reports, users and settings views.\n\nMaxland Properties PMS (property management system)\n  Frontend property-management demo for Maxland Properties Ltd — property and tenant management, units, leases, payments, maintenance, reports and dashboard workflows.\n\nByZenna Essence (luxury fragrance storefront)\n  Responsive storefront concept with catalogue browsing, product details, filters, wishlist, shopping bag, simulated checkout, local profile and order history.\n\nBenuru Group of Schools SMS (school management system)\n  Professional Kenyan school-management demo — dashboard, students, admissions, academics, CBC, attendance, fees, reports, staff, parents, library, transport and school operations.\n\nJoyrinah Schools Management System (academic, administrative & financial platform)\n  Full interactive school-management demonstration — role-based dashboards, admissions, student records, curriculum, timetable, attendance, assessment, LMS, fees, finance, HR, library, analytics and more.\n\nRide-Hailing Platform (full-stack)\n  Built independently — booking, dispatch and live tracking with real-time backend integration. React, Supabase and REST APIs.\n\nInventory and Asset Tag Manager (browser extension)\n  Tracks IT equipment: tagging assets, logging location and status, and looking up inventory without leaving the ticketing workflow.\n\nEduwincare (healthcare website)\n  Marketing site for a Minnesota-based homecare and private nursing service.\n\nSammy Trucks (automotive website)\n  Sales site for an independent ISUZU truck dealer in Ruaka, Kenya — browsable inventory, financing guidance and WhatsApp-first enquiries.",
    links: [
      { href: '/build/mpambe-hotel/', text: '→ Open Mpambe Hotel POS' },
      { href: '/build/maxland-properties/', text: '→ Open Maxland Properties PMS' },
      { href: '/build/byzenna-essence/', text: '→ Open ByZenna Essence' },
      { href: '/build/benuru-school/', text: '→ Open Benuru School SMS' },
      { href: '/build/joyrinah-schools/', text: '→ Open Joyrinah Schools SMS' }
    ]
  },
  'case-studies': {
    text: "PROJECT WALKTHROUGH\n\nMPAMBE HOTEL POS\n  Problem: restaurant staff need a fast, clear way to build orders and issue receipts.\n  Solution: a touch-friendly POS flow with live totals, tax-inclusive prices, payment simulation and receipt generation.\n  Capabilities: menu search · ordering modes · checkout · receipt PDF · sales history · inventory · reports · roles.\n\nMAXLAND PROPERTIES PMS\n  Problem: property teams need one place to keep track of units, tenants, leases, collections and maintenance.\n  Solution: a role-aware property workspace with connected dashboard, billing and operations workflows.\n  Capabilities: properties · units · tenants · leases · invoices · payments · arrears · maintenance · reports · portals.\n\nBYZENNA ESSENCE\n  Problem: a fragrance brand needs a polished storefront that feels premium while staying easy to browse on phones and desktops.\n  Solution: a responsive catalogue with product details, filters, wishlist, shopping bag, simulated checkout and browser-local customer history.\n  Capabilities: catalogue · search · category/brand/price filters · product detail · wishlist · cart · checkout · profile · orders.\n\nBENURU GROUP OF SCHOOLS SMS\n  Problem: school teams need one workspace for administration, academics, attendance, finance, communication and student services.\n  Solution: a role-aware school management workspace designed around Kenyan school operations.\n  Capabilities: students · admissions · academics · CBC · examinations · attendance · fees · receipts · staff · parents · library · transport · inventory · communication · reports.\n\nJOYRINAH SCHOOLS MANAGEMENT SYSTEM\n  Problem: institutions need one connected workspace for admissions, academics, finance, staff, students and operational oversight.\n  Solution: a role-aware academic, administrative and financial platform with realistic demo data and interactive workflows.\n  Capabilities: admissions · registration · student records · curriculum · timetable · attendance · assessment · LMS · fees · finance · scholarships · HR · library · analytics · security · alumni.\n\nDemo note: these portfolio builds use fictional sample records and local browser storage — demonstrations, not production databases.",
    links: [
      { href: '/build/mpambe-hotel/', text: '→ Open Mpambe Hotel POS' },
      { href: '/build/maxland-properties/', text: '→ Open Maxland Properties PMS' },
      { href: '/build/byzenna-essence/', text: '→ Open ByZenna Essence' },
      { href: '/build/benuru-school/', text: '→ Open Benuru School SMS' },
      { href: '/build/joyrinah-schools/', text: '→ Open Joyrinah Schools SMS' }
    ]
  },
  certs: {
    text: "Information Technology Fundamentals — IBM Skills Build\nData Analytics — IBM Skills Build\nData Analytics — ICT Authority of Kenya\nWeb Design — Inceptor Institute of Technology\nPower BI and AI — Exodus Experts\nNYS Discharge Certificate\nDiploma in ICT"
  },
  hire: {
    text: "Open to work — Nairobi, Kenya, and remote.\n\nWhat I'm looking for: software development roles, IT support and systems positions, or hybrid roles where hardware knowledge and development skills both count.\n\nWhat you get: someone who can diagnose a failing PCB in the morning, sort out an Office 365 license issue at noon, and ship an API integration before end of day.\n\nFastest way to reach me is WhatsApp. Resume is one command away.",
    links: [
      { href: WA_URL, text: 'Message me on WhatsApp', external: true, wa: true },
      { href: 'mailto:' + EMAIL, text: 'Email ' + EMAIL },
      { href: 'Martin_Wangari_Resume.pdf', text: 'Download resume (PDF)', download: true }
    ]
  },
  contact: {
    text: "Reach me directly:",
    links: [
      { label: 'phone',    href: 'tel:' + PHONE_E164, text: PHONE_DISPLAY, copy: PHONE_E164 },
      { label: 'whatsapp', href: WA_URL, text: 'Start a chat', external: true, wa: true },
      { label: 'email',    href: 'mailto:' + EMAIL, text: EMAIL, copy: EMAIL },
      { label: 'linkedin', href: 'https://linkedin.com/in/martin-wangari-586903230', text: '/in/martin-wangari', external: true },
      { label: 'location', text: 'Nairobi, Kenya' }
    ]
  },
  whatsapp: {
    text: "Opening a WhatsApp chat — if it did not open automatically, use the link below.",
    links: [{ href: WA_URL, text: 'Message ' + PHONE_DISPLAY + ' on WhatsApp', external: true, wa: true }],
    onRun: function () {
      try { window.open(WA_URL, '_blank', 'noopener,noreferrer'); } catch (e) {}
    }
  },
  resume: {
    text: "Resume ready for download.",
    links: [{ href: 'Martin_Wangari_Resume.pdf', text: 'Download resume (PDF)', download: true }]
  },
  whoami: {
    text: "martin — Software and AI Developer, Nairobi, Kenya. Open to work."
  },
  sudo: {
    text: "Nice try — but on this system, martin is already root of his own infrastructure.\nPermission granted: there is nothing left to sudo here."
  }
};

var ALIASES = {
  projects: 'builds',
  'case-study': 'case-studies',
  work: 'experience',
  jobs: 'experience',
  cv: 'resume',
  download: 'resume',
  education: 'certs',
  certifications: 'certs',
  wa: 'whatsapp',
  chat: 'whatsapp',
  message: 'whatsapp',
  hireme: 'hire',
  email: 'contact',
  phone: 'contact',
  ls: 'help',
  man: 'help',
  '?': 'help'
};

var COMPLETIONS = [
  'about','builds','case-studies','certs','clear','contact',
  'experience','help','hire','resume','skills','sudo','whatsapp','whoami'
];

// ============================================
// STATE
// ============================================
var termStream  = document.getElementById('termStream');
var toastEl     = document.getElementById('toast');
var activeInput = null;   // the hidden <input> that receives keystrokes
var isTyping    = false;  // true while typeText animation is running
var pendingCmds = [];     // queue of tapped commands during animation
var cmdHistory  = [];
var historyIndex = 0;

var reduceMotion = !!(window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches);

// ============================================
// HELPERS
// ============================================
function scrollBottom() {
  termStream.scrollTop = termStream.scrollHeight;
}

function showToast(msg) {
  if (!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.add('is-visible');
  window.clearTimeout(showToast._t);
  showToast._t = window.setTimeout(function () {
    toastEl.classList.remove('is-visible');
  }, 1900);
}

function sanitize(raw) {
  return String(raw)
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, MAX_INPUT);
}

// ============================================
// TYPETEXT — instant for long outputs, animated for short ones
// ============================================
function typeText(container, text, delayMs, onDone) {
  var wordCount = text.split(/\s+/).length;

  if (reduceMotion || wordCount > INSTANT_THRESHOLD) {
    container.appendChild(document.createTextNode(text));
    scrollBottom();
    if (onDone) onDone();
    return;
  }

  var tokens = text.split(/(\s+)/);
  var i = 0;
  function step() {
    if (i >= tokens.length) { if (onDone) onDone(); return; }
    var tok = tokens[i++];
    container.appendChild(document.createTextNode(tok));
    scrollBottom();
    /^\s+$/.test(tok) ? step() : window.setTimeout(step, delayMs);
  }
  step();
}

// ============================================
// LINK RENDERING — DOM only, never innerHTML
// ============================================
function buildLinkAnchor(link) {
  var a = document.createElement('a');
  a.href = link.href;
  a.textContent = link.text;
  if (link.external) {
    a.target = '_blank';
    a.rel = /^https?:\/\//i.test(link.href) ? 'noopener noreferrer' : '';
  }
  if (link.download) a.setAttribute('download', '');
  if (link.wa) a.className = 'is-wa';
  return a;
}

function buildCopyButton(value, what) {
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'cl-copy';
  btn.textContent = 'copy';
  btn.setAttribute('aria-label', 'Copy ' + what);
  btn.addEventListener('click', function () {
    copyToClipboard(value, function (ok) {
      showToast(ok ? what + ' copied' : 'Copy failed — select manually');
      if (ok) { btn.textContent = 'copied'; window.setTimeout(function () { btn.textContent = 'copy'; }, 1600); }
    });
  });
  return btn;
}

function copyToClipboard(value, cb) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(value).then(function () { cb(true); }, function () { cb(false); });
    return;
  }
  try {
    var ta = document.createElement('textarea');
    ta.value = value; ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none;';
    document.body.appendChild(ta); ta.select();
    var ok = document.execCommand('copy');
    document.body.removeChild(ta); cb(ok);
  } catch (e) { cb(false); }
}

function renderLinks(links) {
  var block = document.createElement('div');
  block.className = 'term-links';
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    if (link.label) {
      var row = document.createElement('span');
      row.className = 'cl-item';
      var lab = document.createElement('span');
      lab.className = 'cl-label';
      lab.textContent = link.label;
      row.appendChild(lab);
      link.href ? row.appendChild(buildLinkAnchor(link))
                : row.appendChild(document.createTextNode(link.text));
      if (link.copy) row.appendChild(buildCopyButton(link.copy, link.label));
      block.appendChild(row);
    } else {
      block.appendChild(buildLinkAnchor(link));
    }
  }
  return block;
}

// ============================================
// PROMPT ROW — invisible input + visible blinking cursor
// ============================================
function createActiveRow() {
  var row = document.createElement('p');
  row.className = 'term-row';
  row.style.position = 'relative'; // anchor the absolute input

  // Prompt label
  var prompt = document.createElement('span');
  prompt.className = 'prompt';
  prompt.textContent = 'root@martinsdevs07';
  var sep = document.createElement('span');
  sep.className = 'sep';
  sep.textContent = ':~$';
  row.appendChild(prompt);
  row.appendChild(sep);

  // ── Hidden real input (receives every keystroke) ──
  var input = document.createElement('input');
  input.type = 'text';
  input.setAttribute('aria-label', 'Terminal command input');
  input.autocomplete = 'off';
  input.setAttribute('autocorrect', 'off');
  input.autocapitalize = 'off';
  input.spellcheck = false;
  input.setAttribute('enterkeyhint', 'go');
  input.maxLength = MAX_INPUT;
  // Visually hidden but still reachable by keyboard/screen-readers
  input.style.cssText = [
    'position:absolute',
    'left:0', 'top:0',
    'width:100%', 'height:100%',
    'opacity:0',
    'background:transparent',
    'border:none', 'outline:none',
    'cursor:default',
    'color:transparent',
    'caret-color:transparent',
    'font:inherit',
    'z-index:1'
  ].join(';');
  row.appendChild(input);

  // ── Visible display: [typed chars][blinking block cursor] ──
  var display = document.createElement('span');
  display.className = 'term-typed-display';
  display.setAttribute('aria-hidden', 'true');

  var cursor = document.createElement('span');
  cursor.className = 'term-cursor';
  cursor.setAttribute('aria-hidden', 'true');

  row.appendChild(display);
  row.appendChild(cursor);

  termStream.appendChild(row);
  activeInput = input;
  isTyping = false;

  // Mirror input → visible display
  function syncDisplay() {
    display.textContent = input.value;
    // Pause blink while characters are present; resume when empty
    cursor.classList.toggle('is-typing', input.value.length > 0);
  }

  input.addEventListener('input', syncDisplay);

  // keydown: handle Enter / Tab / Ctrl+L / history before syncDisplay
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitCommand(input.value, input);
      return;
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      autocomplete(input);
      return;
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
      e.preventDefault();
      clearTerminal();
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) input.value = cmdHistory[--historyIndex] || '';
      window.setTimeout(syncDisplay, 0);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      input.value = (historyIndex < cmdHistory.length - 1)
        ? cmdHistory[++historyIndex]
        : (historyIndex = cmdHistory.length, '');
      window.setTimeout(syncDisplay, 0);
    }
  });

  // Keep cursor solid when focused, blink when blurred
  input.addEventListener('focus', function () {
    cursor.style.animationPlayState = 'running';
  });
  input.addEventListener('blur', function () {
    cursor.style.animationPlayState = 'running'; // keep blinking even unfocused
  });

  // Clicking the visible display area focuses the hidden input
  display.addEventListener('click', function () { input.focus(); });
  cursor.addEventListener('click', function () { input.focus(); });

  // Auto-focus on desktop only (avoids keyboard popup on mobile load)
  if (window.matchMedia('(min-width:861px)').matches) input.focus();

  scrollBottom();

  // Flush any command queued during animation
  if (pendingCmds.length) {
    var q = pendingCmds.shift();
    submitCommand(q, input);
  }
}

// ============================================
// COMMAND SUBMISSION
// ============================================
function submitCommand(raw, inputEl) {
  var cmd = sanitize(raw);
  if (!cmd) return;
  if (!inputEl.parentElement) return; // guard: already removed (Enter held down)

  var row = inputEl.parentElement;

  // Remove hidden input immediately (prevents double-fire on held Enter)
  row.removeChild(inputEl);
  activeInput = null;
  isTyping = true;

  // Remove cursor-wrap elements
  var disp = row.querySelector('.term-typed-display');
  var curs = row.querySelector('.term-cursor');
  if (disp) row.removeChild(disp);
  if (curs) row.removeChild(curs);

  // Show the submitted command as plain text
  var span = document.createElement('span');
  span.className = 'typed-cmd';
  span.textContent = cmd;
  row.appendChild(span);

  // History
  cmdHistory.push(cmd);
  if (cmdHistory.length > 80) cmdHistory.shift();
  historyIndex = cmdHistory.length;

  runCommand(cmd);
}

// ============================================
// AUTOCOMPLETE
// ============================================
function autocomplete(input) {
  var val = input.value.trim().toLowerCase();
  if (!val) return;
  var matches = COMPLETIONS.filter(function (c) { return c.indexOf(val) === 0; });
  if (matches.length === 1) {
    input.value = matches[0];
  } else if (matches.length > 1) {
    var prefix = matches[0];
    for (var i = 1; i < matches.length; i++) {
      var j = 0;
      while (j < prefix.length && prefix[j] === matches[i][j]) j++;
      prefix = prefix.slice(0, j);
    }
    input.value = prefix;
    showToast(matches.join('   '));
  }
  input.dispatchEvent(new Event('input')); // sync display
}

// ============================================
// COMMAND EXECUTION
// ============================================
function echoAndRun(cmd) {
  var row = document.createElement('p');
  row.className = 'term-row';
  var prompt = document.createElement('span');
  prompt.className = 'prompt';
  prompt.textContent = 'root@martinsdevs07';
  var sep = document.createElement('span');
  sep.className = 'sep';
  sep.textContent = ':~$';
  var typed = document.createElement('span');
  typed.className = 'typed-cmd';
  typed.textContent = cmd;
  row.appendChild(prompt); row.appendChild(sep); row.appendChild(typed);
  termStream.appendChild(row);
  isTyping = true;
  runCommand(cmd);
}

function clearTerminal() {
  while (termStream.firstChild) termStream.removeChild(termStream.firstChild);
  createActiveRow();
}

function suggestFor(raw) {
  var best = null, bestScore = 4;
  for (var i = 0; i < COMPLETIONS.length; i++) {
    var c = COMPLETIONS[i];
    var score = Math.abs(c.length - raw.length);
    var shared = 0;
    for (var j = 0; j < Math.min(c.length, raw.length); j++) {
      if (c[j] === raw[j]) shared++;
    }
    score += Math.max(c.length, raw.length) - shared;
    if (score < bestScore) { bestScore = score; best = c; }
  }
  return best;
}

function runCommand(raw) {
  var normalized = raw.toLowerCase().replace(/^(cat|open|run|sudo\s+)\s*/, '').trim();

  if (normalized === 'clear' || normalized === 'cls') {
    clearTerminal();
    return;
  }

  var key = Object.prototype.hasOwnProperty.call(COMMANDS, normalized)
    ? normalized
    : (Object.prototype.hasOwnProperty.call(ALIASES, normalized) ? ALIASES[normalized] : null);

  var outWrap = document.createElement('div');
  outWrap.className = 'term-output-block';
  termStream.appendChild(outWrap);

  if (!key) {
    outWrap.classList.add('is-error');
    var guess = suggestFor(normalized);
    var msg = 'command not found: ' + raw;
    msg += guess
      ? "\nDid you mean '" + guess + "'? Type 'help' for the full list."
      : "\nType 'help' to see available commands.";
    typeText(outWrap, msg, 40, createActiveRow);
    return;
  }

  var entry = COMMANDS[key];
  if (typeof entry.onRun === 'function') entry.onRun();

  typeText(outWrap, entry.text, reduceMotion ? 0 : 38, function () {
    if (entry.links && entry.links.length) {
      termStream.appendChild(renderLinks(entry.links));
    }
    createActiveRow();
  });
}

// ============================================
// MENU — event delegation
// ============================================
document.getElementById('termMenu').addEventListener('click', function (e) {
  var target = e.target.closest('.tm-cmd');
  if (!target) return;
  var cmd = target.dataset.cmd;
  if (activeInput) {
    submitCommand(cmd, activeInput);
  } else if (isTyping) {
    pendingCmds.push(cmd);
  } else {
    echoAndRun(cmd);
  }
});

// Clicking anywhere in the stream focuses the hidden input
termStream.addEventListener('click', function (e) {
  if (e.target.closest('a') || e.target.closest('button')) return;
  if (activeInput) activeInput.focus();
});

// ============================================
// GLOBAL KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', function (e) {
  // '/' jumps focus to the prompt (like a search shortcut)
  if (e.key === '/' && document.activeElement !== activeInput && activeInput) {
    e.preventDefault();
    activeInput.focus();
  }
});

// ============================================
// BOOTSTRAP
// ============================================
(function bootstrap() {
  var row = document.createElement('p');
  row.className = 'term-row';
  var prompt = document.createElement('span'); prompt.className = 'prompt'; prompt.textContent = 'root@martinsdevs07';
  var sep    = document.createElement('span'); sep.className    = 'sep';    sep.textContent    = ':~$';
  var typed  = document.createElement('span'); typed.className  = 'typed-cmd'; typed.textContent = 'welcome';
  row.appendChild(prompt); row.appendChild(sep); row.appendChild(typed);
  termStream.appendChild(row);

  var outWrap = document.createElement('div');
  outWrap.className = 'term-output-block';
  termStream.appendChild(outWrap);
  isTyping = true;
  typeText(outWrap, COMMANDS.welcome.text, reduceMotion ? 0 : 33, createActiveRow);
})();

// ============================================
// ID CARD TILT
// ============================================
(function cardTilt() {
  var stage = document.getElementById('cardStage');
  var card  = document.getElementById('idCard');
  if (!stage || !card || reduceMotion) return;
  var maxDeg = 10, frame = null;

  function apply(rx, ry) {
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(function () {
      card.style.transform = 'rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg)';
    });
  }
  function move(cx, cy) {
    var r = card.getBoundingClientRect();
    if (!r.width || !r.height) return;
    var px = Math.max(0, Math.min(1, (cx - r.left) / r.width));
    var py = Math.max(0, Math.min(1, (cy - r.top)  / r.height));
    apply((0.5 - py) * maxDeg * 2, (px - 0.5) * maxDeg * 2);
  }
  function reset() { apply(0, 0); }

  stage.addEventListener('pointermove', function (e) {
    if (e.pointerType === 'mouse' || e.pointerType === 'pen') move(e.clientX, e.clientY);
  });
  stage.addEventListener('pointerleave',  reset);
  stage.addEventListener('pointercancel', reset);
  stage.addEventListener('touchmove',  function (e) { var t = e.touches[0]; if (t) move(t.clientX, t.clientY); }, { passive: true });
  stage.addEventListener('touchend',   reset, { passive: true });
  stage.addEventListener('touchcancel',reset, { passive: true });
})();

// ============================================
// STATUS BAR CLOCK (Nairobi / EAT)
// ============================================
(function statusClock() {
  var el = document.getElementById('fsTime');
  if (!el) return;
  var opts = { timeZone: 'Africa/Nairobi', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
  function update() {
    try { el.textContent = new Date().toLocaleString('en-GB', opts) + ' EAT'; }
    catch (e) { el.textContent = new Date().toLocaleString(); }
  }
  update();
  window.setInterval(update, 30000);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) update(); });
})();

// ============================================
// HEADER BADGE → hire
// ============================================
document.getElementById('badgeLink').addEventListener('click', function () {
  if (activeInput) submitCommand('hire', activeInput);
  else if (isTyping) pendingCmds.push('hire');
  else echoAndRun('hire');
});
