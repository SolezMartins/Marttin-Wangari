'use strict';

// Vercel Web Analytics custom events (queue until the insights script loads).
// Custom events need a Vercel plan that supports them; otherwise they are silently ignored.
window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
function track(name, data) {
  try { window.va('event', data ? { name: name, data: data } : { name: name }); } catch (e) {}
}

// ============================================
// CONFIG
// ============================================
var PHONE_E164    = '+254740208683';
var PHONE_DISPLAY = '+254 740 208 683';
var WA_NUMBER     = '254740208683';
var EMAIL         = 'martindevs07@gmail.com';
var WA_MESSAGE    = 'Hi Martin, I found your portfolio and would like to talk.';
var WA_URL        = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(WA_MESSAGE);
var GITHUB_URL    = 'https://github.com/SolezMartins';
// Contact form: create a free form at formspree.io, paste its ID here (e.g. 'xyzabcde').
// While empty, the form falls back to opening the visitor's email app, pre-filled.
var FORMSPREE_ID  = '';
var MAX_INPUT     = 120;
var LINE_DELAY = 38; // ms between each line — controls the "terminal print" speed

// ============================================
// CONTENT
// ============================================
var COMMANDS = {
  welcome: {
    text: "Hi, I'm Martin Mwangi Wangari — Software Developer and IT Systems Support specialist based in Nairobi, Kenya.\n\nThis is a fully interactive terminal. Type any command and press Enter, press Tab to autocomplete, or click a command above.\n\nIn a hurry? Type 'hire' or tap the WhatsApp button."
  },
  help: {
    text: "Available commands:\n\n  about          who I am\n  experience     work history\n  skills         technical skillset\n  builds         things I've shipped\n  case-studies   deep-dive project walkthroughs\n  certs          certifications\n  contact        every way to reach me\n  whatsapp       open a WhatsApp chat\n  hire           availability and how to engage me\n  message        send me a message from here\n  github         my code\n  theme          toggle light / dark\n  resume         download my resume\n  whoami         one-line summary\n  sudo           try it and see\n  clear          clear the terminal\n\nShortcuts: Tab autocompletes · ↑↓ walk history · Ctrl+L clears · / focuses prompt"
  },
  about: {
    text: "Software Developer and IT Systems Support specialist based in Nairobi, Kenya, focused on building practical digital products, automation and modern web platforms.\n\nI handle first- and second-line support, administer Office 365 environments, test internal APIs with Postman, and keep business-critical systems running. Before that I spent years on the hardware side — PCB diagnostics, component-level repair, firmware installation on smart meters, and fiber optic installation and splicing.\n\nThat mix of hardware-level thinking and systems-level support is what pulls me toward building things too: a ride-hailing platform with real-time backend integration, browser extensions, internal tools and client websites.\n\nAdaptable and detail-oriented, with the cross-functional communication that fast-paced, multicultural and safety-conscious environments need."
  },
  experience: {
    text: "IT Systems Support Technician — Independent Contractor, Nairobi (Mar 2025 – present)\n  First- and second-line support across hardware, software and network issues via phone, email and in person. Office 365 administration covering user accounts, license allocation and system deployments. API endpoint testing and validation with Postman ahead of release. IT asset inventory management and policy-compliant equipment disposal. Risk identification feeding into policy improvements. User training materials that cut recurring support tickets.\n\nRepair Technician / PCB Technician — M-Gas Kenya Ltd (Jul 2022 – Feb 2025)\n  Diagnosed, repaired and configured PCBs across a range of electronic devices. Replaced faulty components to reduce downtime and extend equipment life. Installed and tested firmware on smart meters for field deployment. General maintenance and repair of electronic equipment.\n\nField Network Technician — G-Tech Technology Ltd (Jan 2022 – Jun 2022)\n  Installed and configured residential fiber internet services. Fiber optic cable splicing and repairs to restore network functionality. Cable installation and router configuration for network stability.\n\nIndustrial Attachment — Broadband Communication Networks Ltd (Mar 2021 – May 2021)\n  Assisted with cabling, router and telephone system installation on infrastructure projects. Hands-on fiber internet installation and diagnostics. Server network hardware configuration under senior supervision."
  },
  skills: {
    text: "IT Support and Administration\n  Office 365 Administration · Help Desk and Ticketing Systems · Hardware and Software Support · Remote Support Tools · Mobile Device Management · Active Directory · Cybersecurity Fundamentals\n\nNetworking and Infrastructure\n  Fiber Optic Installation and Splicing · TCP/IP · DNS · DHCP · Router and Switch Configuration · PCB Repair and Configuration · System Deployments · Cable Installation\n\nSoftware Development\n  Python · JavaScript (React) · PHP · WordPress · HTML · CSS · Bootstrap · PostgreSQL · Supabase\n\nAPI and Data Tools\n  Postman (API testing and debugging) · REST API fundamentals · Data Analytics · Power BI · AI tools and automation\n\nWorking Style\n  Problem solving · Technical communication · Team collaboration · Time management · Adaptability · Customer service"
  },
  builds: {
    projects: [
      {
        title: 'Eduwincare',
        kind:  'live',
        tag:   'Healthcare · Minnesota, USA',
        href:  'https://eduwincare.com',
        lines: [
          'Marketing and information site for a Minnesota-based homecare and private',
          'nursing service — built to earn trust with families seeking care.',
          '',
          'What it covers:',
          '  · Service listings and caregiver profiles',
          '  · Accessibility-first design for older audiences',
          '  · Contact and enquiry flows optimised for conversion',
          '  · Mobile-first responsive layout'
        ]
      },
      {
        title: 'Sammy Trucks',
        kind:  'live',
        tag:   'Automotive · Ruaka, Kenya',
        href:  'https://sammytrucks.netlify.app',
        lines: [
          'Sales site for an independent ISUZU truck dealer in Ruaka, Kenya.',
          'Built to turn mobile visitors into leads through a WhatsApp-first enquiry flow.',
          '',
          'What it covers:',
          '  · Browsable truck inventory with specs and photos',
          '  · Financing guidance and monthly estimate calculator',
          '  · WhatsApp-first contact flow for instant lead capture',
          '  · Mobile-optimised layout for on-site browsing'
        ]
      },
      {
        title: 'MicroAfia Healthcare',
        kind:  'client',
        tag:   'Healthcare · DNA Testing · Kenya',
        href:  '/build/microafia-healthcare/',
        lines: [
          'Marketing and booking site for a DNA paternity testing centre in Kenya —',
          'built to make a sensitive service feel professional, private and easy to book.',
          '',
          'What it covers:',
          '  · Service, pricing and turnaround information with clear package tiers',
          '  · Booking form that sends a pre-filled WhatsApp message (no backend)',
          '  · Step-by-step process, FAQ and trust-focused content',
          '  · Floating WhatsApp contact and mobile-first responsive layout',
          '  · React + Vite, component-based, with unit tests and linting'
        ]
      },
      {
        title: 'Mpambe Hotel POS',
        kind:  'demo',
        tag:   'Point-of-Sale · Restaurant',
        href:  '/build/mpambe-hotel/',
        lines: [
          'A touch-friendly, full-featured POS built for a Swahili-cuisine restaurant.',
          'Handles Dine In, Take Away and Delivery orders on a single screen — staff can',
          'build an order in seconds, apply discounts, split by payment method and print',
          'or export a PDF receipt on the spot.',
          '',
          'What it covers:',
          '  · Live order builder with real-time subtotal, tax and total',
          '  · Cash, M-Pesa and Card checkout with change calculation',
          '  · Printable and PDF receipts with restaurant branding',
          '  · Orders history with status tracking',
          '  · Inventory management and low-stock alerts',
          '  · Sales reports and end-of-day summaries',
          '  · Multi-role user access (admin, cashier, waiter)',
          '  · Menu search and category filtering',
          '  · Delivery and take-away mode with customer details'
        ]
      },
      {
        title: 'Maxland Properties PMS',
        kind:  'demo',
        tag:   'Property Management · Real Estate',
        href:  '/build/maxland-properties/',
        lines: [
          'A property management workspace built for Maxland Properties Ltd, Kasarani.',
          'Gives property teams a single connected platform for every stage of tenancy —',
          'from listing a unit to collecting rent and resolving maintenance issues.',
          '',
          'What it covers:',
          '  · Property and unit directory with occupancy overview',
          '  · Tenant onboarding, lease management and renewals',
          '  · Invoice generation and payment recording',
          '  · Arrears tracking and automated reminder workflows',
          '  · Maintenance ticket creation, assignment and status updates',
          '  · Role-based portals for admin, caretaker, accountant and tenant',
          '  · M-Pesa STK push simulation for rent collection',
          '  · Financial dashboard with income, expenses and variance',
          '  · CSV and printable reports for landlords and auditors'
        ]
      },
      {
        title: 'ByZenna Essence',
        kind:  'demo',
        tag:   'E-Commerce · Luxury Fragrance',
        href:  '/build/byzenna-essence/',
        lines: [
          'A premium storefront concept for a luxury fragrance brand — designed to feel',
          'high-end on mobile and desktop while remaining fast and easy to browse.',
          'Every interaction from browsing to checkout is fully functional in the browser',
          'with no backend required.',
          '',
          'What it covers:',
          '  · Full product catalogue with rich detail pages',
          '  · Category, brand, price range and rating filters',
          '  · Wishlist that persists across sessions',
          '  · Shopping bag with quantity controls and live totals',
          '  · Simulated checkout with order confirmation',
          '  · Browser-local customer profile and order history',
          '  · Responsive design optimised for mobile-first browsing',
          '  · Product search with instant results'
        ]
      },
      {
        title: 'Benuru Group of Schools SMS',
        kind:  'demo',
        tag:   'School Management · Education',
        href:  '/build/benuru-school/',
        lines: [
          'A comprehensive school management system built around Kenyan school operations,',
          'covering every department from admissions to transport. Designed for the full',
          'school community — administrators, teachers, parents and students.',
          '',
          'What it covers:',
          '  · Student records, admissions and class assignment',
          '  · Academic scheduling, CBC curriculum and timetable',
          '  · Attendance tracking with teacher and parent visibility',
          '  · Examination management and grade reports',
          '  · Fee billing, receipts and arrears follow-up',
          '  · Staff records, payroll and leave management',
          '  · Parent portal with child progress and messaging',
          '  · Library catalogue and book borrowing',
          '  · Transport routes and vehicle assignment',
          '  · School inventory and procurement'
        ]
      },
      {
        title: 'Joyrinah Schools Management System',
        kind:  'demo',
        tag:   'Academic · Administrative · Financial Platform',
        href:  '/build/joyrinah-schools/',
        lines: [
          'A full-scale, role-aware academic, administrative and financial platform',
          'for institutions that need one connected workspace across every department.',
          'Built with realistic demo data and interactive workflows covering the entire',
          'student and staff lifecycle.',
          '',
          'What it covers:',
          '  · Role-based dashboards for admin, teacher, student, parent, bursar and HR',
          '  · Admissions pipeline, registration and student records',
          '  · Curriculum design, timetable and lesson planning',
          '  · Attendance, assessment, grading and progress reports',
          '  · Learning Management System with assignments and resources',
          '  · Fee structures, invoicing, scholarships and financial reporting',
          '  · HR management, staff contracts, payroll and leave',
          '  · Library catalogue, borrowing and digital resources',
          '  · Analytics dashboards and KPI tracking',
          '  · Alumni management and security access logs'
        ]
      },
      {
        title: 'Ride-Hailing Platform',
        kind:  'wip',
        tag:   'Full-Stack · Real-Time',
        href:  null,
        lines: [
          'A full-stack ride-hailing platform built independently from the ground up,',
          'covering the complete passenger-to-driver flow with a live backend.',
          '',
          'What it covers:',
          '  · Real-time booking, dispatch and live driver tracking',
          '  · Passenger and driver apps with separate flows',
          '  · Fare estimation and trip history',
          '  · REST API integration with Supabase and PostgreSQL',
          '  · Built with React — live URL coming soon'
        ]
      },
      {
        title: 'IT Asset Tag Manager',
        kind:  'wip',
        tag:   'Browser Extension · IT Support',
        href:  null,
        lines: [
          'A browser extension built from real pain points managing physical IT assets',
          'day-to-day — no more switching tabs to check a serial number or log a device.',
          '',
          'What it covers:',
          '  · Tag and register equipment with custom asset IDs',
          '  · Log device location, condition and assignment',
          '  · Look up asset records without leaving the ticketing system',
          '  · Offline-capable with IndexedDB local storage',
          '  · Available for Chrome and Edge — publishing soon'
        ]
      }
    ],
    render: 'projects'
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
    text: "STATUS     ● Available now\nBASED      Nairobi, Kenya\nENGAGEMENT Full-time · Contract / freelance · Remote or on-site (Nairobi)\nROLES      Software development · IT support & systems · hybrid hardware + software\nRATES      Shared on request — tell me the scope and I'll reply with a number\nREPLY TIME Usually the same day on WhatsApp\n\nWhat you get: someone who can diagnose a failing PCB in the morning, sort out an Office 365 license issue at noon, and ship an API integration before end of day.\n\nType 'message' to write to me here, or use a link below.",
    links: [
      { href: WA_URL, text: 'Message me on WhatsApp', external: true, wa: true },
      { href: 'mailto:' + EMAIL, text: 'Email ' + EMAIL },
      { href: GITHUB_URL, text: 'GitHub — github.com/SolezMartins', external: true },
      { href: 'Martin_Wangari_Resume.pdf', text: 'Download resume (PDF)', download: true },
      { href: 'Martin_Wangari_OnePager.pdf', text: 'One-page summary (PDF)', download: true }
    ]
  },
  contact: {
    text: "Reach me directly — or type 'message' to write to me from here:",
    links: [
      { label: 'phone',    href: 'tel:' + PHONE_E164, text: PHONE_DISPLAY, copy: PHONE_E164 },
      { label: 'whatsapp', href: WA_URL, text: 'Start a chat', external: true, wa: true },
      { label: 'email',    href: 'mailto:' + EMAIL, text: EMAIL, copy: EMAIL },
      { label: 'github',   href: GITHUB_URL, text: 'github.com/SolezMartins', external: true },
      { label: 'linkedin', href: 'https://linkedin.com/in/martin-wangari-586903230', text: '/in/martin-wangari', external: true },
      { label: 'location', text: 'Nairobi, Kenya' }
    ]
  },
  github: {
    text: "Code, experiments and contribution activity:",
    links: [{ href: GITHUB_URL, text: 'github.com/SolezMartins', external: true }]
  },
  message: { form: true, text: "Send me a message — it lands straight in my inbox." },
  theme: { text: '', onRun: function () { toggleTheme(true); } },
  whatsapp: {
    text: "Opening a WhatsApp chat — if it did not open automatically, use the link below.",
    links: [{ href: WA_URL, text: 'Message ' + PHONE_DISPLAY + ' on WhatsApp', external: true, wa: true }],
    onRun: function () {
      try { window.open(WA_URL, '_blank', 'noopener,noreferrer'); } catch (e) {}
    }
  },
  resume: {
    text: "Resume ready for download.",
    links: [
      { href: 'Martin_Wangari_Resume.pdf', text: 'Download full resume (PDF)', download: true },
      { href: 'Martin_Wangari_OnePager.pdf', text: 'Download one-page summary (PDF)', download: true }
    ]
  },
  whoami: {
    text: "martin — Software Developer & IT Systems Support · Nairobi, Kenya\n\nWhat's different: I started on the hardware side (PCB repair, fiber splicing, smart-meter firmware) and now build full-stack products — POS, school and property systems, a ride-hailing platform. I can debug the device and ship the software on top of it.\n\nStatus: available now — full-time, contract or remote.\nFastest way in: WhatsApp (type 'whatsapp'), or type 'message' to write to me here.",
    links: [{ href: GITHUB_URL, text: 'github.com/SolezMartins', external: true }]
  },
  sudo: {
    text: "Nice try — but on this system, martin is already root of his own infrastructure.\nPermission granted: there is nothing left to sudo here."
  }
};

// Real numbers turn descriptions into proof. Fill these in with FIGURES YOU CAN STAND BEHIND
// (e.g. '50+ orders/day, receipts 3x faster'). Empty entries are simply not shown.
var IMPACT = {
  'MPAMBE HOTEL POS': '',
  'MAXLAND PROPERTIES PMS': '',
  'BYZENNA ESSENCE': '',
  'BENURU GROUP OF SCHOOLS SMS': '',
  'JOYRINAH SCHOOLS MANAGEMENT SYSTEM': ''
};
function withImpact(text) {
  Object.keys(IMPACT).forEach(function (name) {
    if (!IMPACT[name]) return;
    var i = text.indexOf(name); if (i < 0) return;
    var end = text.indexOf('\n\n', i); if (end < 0) end = text.length;
    text = text.slice(0, end) + '\n  Impact: ' + IMPACT[name] + text.slice(end);
  });
  return text;
}

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
  hireme: 'hire',
  email: 'contact',
  phone: 'contact',
  ls: 'help',
  man: 'help',
  '?': 'help'
};

var COMPLETIONS = [
  'about','builds','case-studies','certs','clear','contact','experience','github',
  'help','hire','message','resume','skills','sudo','theme','whatsapp','whoami'
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
var srStatus    = document.getElementById('srStatus');
var outputMarker = null;  // index in termStream where the current command's output starts
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
function typeText(container, text, _delayMs, onDone) {
  // Reduced-motion: dump everything at once
  if (reduceMotion) {
    container.appendChild(document.createTextNode(text));
    scrollBottom();
    if (onDone) onDone();
    return;
  }

  // Split into lines (preserving blank lines between sections)
  var lines = text.split('\n');
  var i = 0;

  function printLine() {
    if (i >= lines.length) {
      if (onDone) onDone();
      return;
    }
    // Append the line + newline as a single text node
    var lineText = lines[i] + (i < lines.length - 1 ? '\n' : '');
    container.appendChild(document.createTextNode(lineText));
    i++;
    scrollBottom();
    window.setTimeout(printLine, LINE_DELAY);
  }

  printLine();
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
// PROJECT RENDERER — for builds command
// ============================================
var KIND_LABEL = { live: 'LIVE CLIENT SITE', client: 'CLIENT BUILD', demo: 'INTERACTIVE DEMO · SAMPLE DATA', wip: 'IN PROGRESS' };

function renderProjects(projects, container) {
  var legend = document.createElement('div');
  legend.className = 'project-legend';
  legend.textContent = 'LIVE CLIENT SITE = in production for a real client · CLIENT BUILD = site built for a client business · INTERACTIVE DEMO = working build running on sample data · IN PROGRESS = not released yet';
  container.appendChild(legend);
  var delay = 0;
  var STEP  = 60; // ms between each project block appearing

  projects.forEach(function (proj, idx) {
    window.setTimeout(function () {

      var block = document.createElement('div');
      block.className = 'project-block';

      // ── Title: link or plain ──
      var titleEl;
      if (proj.href) {
        titleEl = document.createElement('a');
        titleEl.className = 'project-title-link';
        titleEl.href = proj.href;
        // All project links open in a new tab — keeps the portfolio open
        titleEl.target = '_blank';
        titleEl.rel = /^https?:\/\//i.test(proj.href) ? 'noopener noreferrer' : '';
        titleEl.textContent = proj.title;
        // Pulse glow once after a short delay to hint it's clickable
        window.setTimeout(function () {
          titleEl.classList.add('pulse-once');
          titleEl.addEventListener('animationend', function () {
            titleEl.classList.remove('pulse-once');
          }, { once: true });
        }, 200);
      } else {
        titleEl = document.createElement('span');
        titleEl.className = 'project-title-plain';
        titleEl.textContent = proj.title;
      }
      block.appendChild(titleEl);

      // ── Tag line ──
      var tag = document.createElement('span');
      tag.className = 'project-tag';
      var badge = document.createElement('span');
      badge.className = 'project-kind' + (proj.kind === 'demo' ? ' is-demo' : proj.kind === 'wip' ? ' is-wip' : '');
      badge.textContent = KIND_LABEL[proj.kind] || '';
      tag.appendChild(badge);
      tag.appendChild(document.createTextNode(proj.tag));
      block.appendChild(tag);

      // ── Body: lines printed one by one ──
      var body = document.createElement('div');
      body.className = 'project-body';
      block.appendChild(body);
      container.appendChild(block);
      scrollBottom();

      // Print description lines word-by-word style (reuse LINE_DELAY)
      var lines = proj.lines;
      var li = 0;
      function nextLine() {
        if (li >= lines.length) { scrollBottom(); return; }
        body.appendChild(document.createTextNode(lines[li] + (li < lines.length - 1 ? '\n' : '')));
        li++;
        scrollBottom();
        window.setTimeout(nextLine, LINE_DELAY);
      }
      nextLine();

    }, delay);
    delay += STEP + (proj.lines.length * LINE_DELAY);
  });

  // Fire createActiveRow after all projects have rendered
  var totalDelay = delay + 200;
  window.setTimeout(createActiveRow, totalDelay);
}

// ============================================
// PROMPT ROW — invisible input + visible blinking cursor
// ============================================
function announceOutput() {
  if (!srStatus || outputMarker === null) return;
  var parts = [];
  for (var i = outputMarker; i < termStream.children.length; i++) {
    var n = termStream.children[i];
    if (n.matches && n.matches('.term-output-block, .term-links')) parts.push(n.textContent);
  }
  outputMarker = null;
  var t = parts.join(' ').replace(/\s+/g, ' ').trim().slice(0, 3000);
  srStatus.textContent = '';
  if (t) window.setTimeout(function () { srStatus.textContent = t; }, 60);
}

function createActiveRow() {
  announceOutput();
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

  outputMarker = termStream.children.length;
  var outWrap = document.createElement('div');
  outWrap.className = 'term-output-block';
  termStream.appendChild(outWrap);

  if (key) track('command', { name: key });

  if (!key) {
    outWrap.classList.add('is-error');
    var guess = suggestFor(normalized);
    var msg = 'command not found: ' + raw;
    msg += guess
      ? "\nDid you mean '" + guess + "'? Type 'help' for the full list."
      : "\nType 'help' to see available commands.";
    typeText(outWrap, msg, 0, createActiveRow);
    return;
  }

  var entry = COMMANDS[key];
  if (typeof entry.onRun === 'function') entry.onRun();

  // Special renderer: structured project list with clickable titles
  if (entry.render === 'projects') {
    renderProjects(entry.projects, outWrap);
    return;
  }

  if (entry.form) {
    typeText(outWrap, entry.text, 0, function () { renderMessageForm(); });
    return;
  }
  if (key === 'theme') { outWrap.parentNode.removeChild(outWrap); createActiveRow(); return; }
  var shown = key === 'case-studies' ? withImpact(entry.text) : entry.text;
  typeText(outWrap, shown, 0, function () {
    if (entry.links && entry.links.length) {
      termStream.appendChild(renderLinks(entry.links));
    }
    createActiveRow();
  });
}

// ============================================
// MESSAGE FORM
// ============================================
function fieldEl(tag, id, label, type) {
  var wrap = document.createElement('div');
  var l = document.createElement('label'); l.htmlFor = id; l.textContent = label;
  var f = document.createElement(tag); f.id = id; f.name = id;
  if (type) f.type = type;
  f.maxLength = tag === 'textarea' ? 2000 : 120;
  wrap.appendChild(l); wrap.appendChild(f);
  return { wrap: wrap, el: f };
}

function renderMessageForm() {
  var form = document.createElement('div');
  form.className = 'term-form';
  var n = fieldEl('input', 'mf-name', 'your name', 'text');
  var e = fieldEl('input', 'mf-email', 'your email', 'email');
  var m = fieldEl('textarea', 'mf-msg');
  m.wrap.firstChild.textContent = 'message';
  var hp = fieldEl('input', 'mf-hp', 'leave empty', 'text');
  hp.wrap.className = 'hp'; hp.el.tabIndex = -1; hp.el.setAttribute('autocomplete', 'off');
  var actions = document.createElement('div'); actions.className = 'tf-actions';
  var send = document.createElement('button'); send.type = 'button'; send.className = 'tf-btn'; send.textContent = 'send message';
  var cancel = document.createElement('button'); cancel.type = 'button'; cancel.className = 'tf-cancel'; cancel.textContent = 'cancel';
  var status = document.createElement('span'); status.className = 'tf-status'; status.setAttribute('role', 'status');
  actions.appendChild(send); actions.appendChild(cancel); actions.appendChild(status);
  [n.wrap, e.wrap, m.wrap, hp.wrap, actions].forEach(function (x) { form.appendChild(x); });
  termStream.appendChild(form);
  scrollBottom();
  n.el.focus();

  function finish(msg) {
    form.parentNode.removeChild(form);
    var out = document.createElement('div'); out.className = 'term-output-block'; out.textContent = msg;
    termStream.appendChild(out);
    createActiveRow();
  }
  function fail(msg) { status.textContent = msg; status.className = 'tf-status is-error'; send.disabled = false; }

  cancel.addEventListener('click', function () { finish('message cancelled.'); });
  send.addEventListener('click', function () {
    var name = sanitize(n.el.value), email = sanitize(e.el.value), msg = String(m.el.value).trim().slice(0, 2000);
    if (hp.el.value) { finish('message sent.'); return; } // bot trap
    if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || msg.length < 5) {
      fail('Please add your name, a valid email and a short message.'); return;
    }
    if (!FORMSPREE_ID) {
      window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Portfolio message from ' + name) +
        '&body=' + encodeURIComponent(msg + '\n\n— ' + name + ' (' + email + ')');
      track('message_mailto');
      finish('Opening your email app with the message pre-filled.');
      return;
    }
    send.disabled = true; status.className = 'tf-status'; status.textContent = 'sending…';
    fetch('https://formspree.io/f/' + FORMSPREE_ID, {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ name: name, email: email, message: msg })
    }).then(function (r) {
      if (r.ok) track('message_sent');
      if (r.ok) finish('✓ Message sent — thanks ' + name + ', I\'ll reply to ' + email + ' soon.');
      else fail('Could not send — please try WhatsApp or email instead.');
    }).catch(function () { fail('Network error — please try WhatsApp or email instead.'); });
  });
}

// ============================================
// THEME (dark default, light optional)
// ============================================
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', t === 'light' ? '#f6f7f5' : '#000000');
}
function toggleTheme(announce) {
  var next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  applyTheme(next);
  try { localStorage.setItem('mw-theme', next); } catch (e) {}
  if (announce) showToast(next + ' mode');
}
(function initTheme() {
  var t = null;
  try { t = localStorage.getItem('mw-theme'); } catch (e) {}
  if (!t && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) t = 'light';
  applyTheme(t === 'light' ? 'light' : 'dark');
  var b = document.getElementById('themeBtn');
  if (b) b.addEventListener('click', function () { toggleTheme(false); });
})();

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

  outputMarker = termStream.children.length;
  var outWrap = document.createElement('div');
  outWrap.className = 'term-output-block';
  termStream.appendChild(outWrap);
  isTyping = true;
  function welcome() { typeText(outWrap, COMMANDS.welcome.text, 0, createActiveRow); }

  // Boot sequence: once per session, skipped for reduced-motion
  var seen = false;
  try { seen = sessionStorage.getItem('mw-booted') === '1'; sessionStorage.setItem('mw-booted', '1'); } catch (e) {}
  if (reduceMotion || seen) { welcome(); return; }
  var steps = ['Initialising…', 'Loading modules… ok', 'Mounting portfolio… ok', 'Welcome.\n'];
  var k = 0, done = false;
  function finishBoot() { if (done) return; done = true; document.removeEventListener('keydown', finishBoot); welcome(); }
  document.addEventListener('keydown', finishBoot); // any key skips
  (function next() {
    if (done) return;
    if (k >= steps.length) { finishBoot(); return; }
    outWrap.appendChild(document.createTextNode(steps[k++] + '\n'));
    window.setTimeout(next, 320);
  })();
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


// ============================================
// LINK CLICK TRACKING (link type only, no personal data) + hidden-content tab order
// ============================================
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a[href]');
  if (!a) return;
  var href = a.getAttribute('href') || '', name = null, data = null;
  if (/wa\.me\//.test(href)) name = 'whatsapp_click';
  else if (/^mailto:/.test(href)) name = 'email_click';
  else if (/^tel:/.test(href)) name = 'phone_click';
  else if (/github\.com\//.test(href)) name = 'github_click';
  else if (/linkedin\.com\//.test(href)) name = 'linkedin_click';
  else if (/\.pdf$/i.test(href)) { name = 'pdf_download'; data = { file: href.replace(/^.*\//, '') }; }
  else if (a.classList.contains('project-title-link') || /^\/build\//.test(href)) { name = 'project_open'; data = { project: href.slice(0, 80) }; }
  if (name) track(name, data);
});

(function () {
  var links = document.querySelectorAll('.seo-content a');
  for (var i = 0; i < links.length; i++) links[i].setAttribute('tabindex', '-1');
})();
