// Language Dropdown Functions

const TRANSLATIONS = {
  en: {
    // Navigation
    nav_home: 'Home',
    nav_energy: 'Energy',
    nav_tech: 'Tech',
    nav_business: 'Business',
    nav_mining: 'Mining',
    nav_agri: 'Agriculture',
    nav_africa: 'Africa',
    nav_markets: 'Markets',
    nav_insights: 'Insights',
    nav_events: 'Events',
    // Sections
    sec_energy: 'Energy',
    sec_tech: 'Tech',
    sec_business: 'Business',
    sec_mining: 'Mining',
    sec_agri: 'Agric',
    sec_africa: 'Across Africa',
    sec_afcfta: 'AfCFTA & Trade',
    sec_collab: 'Regional Collaboration',
    // Sidebar
    side_fuel: 'SADC Fuel Prices (USD/L)',
    side_zse: 'Zimbabwe Stock Exchange',
    side_converter: 'Currency Converter',
    side_trending: 'Trending Topics',
    side_commodities: 'Commodities',
    side_weather: 'National Weather',
    side_newsletter: 'Newsletter',
    side_alerts: 'Breaking News Alerts',
    // Buttons & placeholders
    btn_subscribe: 'Subscribe',
    btn_alerts: 'Enable Alerts',
    ph_email: 'Enter your email',
    // Footer
    foot_about: 'About',
    foot_contact: 'Contact',
    foot_privacy: 'Privacy',
    foot_terms: 'Terms',
    foot_advertise: 'Advertise',
    // Meta
    lang_name: 'English',
    lang_flag: '🇬🇧'
  },
  sn: {
    // Navigation
    nav_home: 'Kumba',
    nav_energy: 'Simba',
    nav_tech: 'Tech',
    nav_business: 'Bhizinisi',
    nav_mining: 'Kuchera',
    nav_agri: 'Kurima',
    nav_africa: 'Kunyika dzose dzeAfrica',
    nav_markets: 'Mashoko',
    nav_insights: 'Kuziva',
    nav_events: 'Zviitiko',
    // Sections
    sec_energy: 'Simba & Mafuta',
    sec_tech: 'Technology',
    sec_business: 'Bhizinisi',
    sec_mining: 'Kuchera',
    sec_agri: 'Kurima',
    sec_africa: 'Kunyika dzose dzeAfrica',
    sec_afcfta: 'AfCFTA & Kutengesana',
    sec_collab: 'Kushandirana',
    // Sidebar
    side_fuel: 'Mitengo yemafuta muSADC (USD/L)',
    side_zse: 'Zimbabwe Stock Exchange',
    side_converter: 'Kushandura Mari',
    side_trending: 'Zvinhu zvinozivikanwa',
    side_commodities: 'Zvinhu zvinotengeswa',
    side_weather: 'Mamiriro ekunze',
    side_newsletter: 'Tsamba yezuva nezuva',
    side_alerts: 'Zvitsauko zveNhau',
    // Buttons & placeholders
    btn_subscribe: 'Nyorera',
    btn_alerts: 'Tumira Zvitsauko',
    ph_email: 'Isa email yako',
    // Footer
    foot_about: 'Nezvedu',
    foot_contact: 'Taura nesu',
    foot_privacy: 'Chakavanzika',
    foot_terms: 'Mitemo',
    foot_advertise: 'Tengesa',
    // Meta
    lang_name: 'ChiShona',
    lang_flag: '🇿🇼'
  },
  nd: {
    // Navigation
    nav_home: 'Ekhaya',
    nav_energy: 'Amandla',
    nav_tech: 'Tech',
    nav_business: 'Ibhizinisi',
    nav_mining: 'Ukumba',
    nav_agri: 'Ulimo',
    nav_africa: 'Emhlabeni wonke jikelele weAfrica',
    nav_markets: 'Imakethe',
    nav_insights: 'Ukuqonda',
    nav_events: 'Izenzakalo',
    // Sections
    sec_energy: 'Amandla & Amafutha',
    sec_tech: 'Technology',
    sec_business: 'Ibhizinisi',
    sec_mining: 'Ukumba',
    sec_agri: 'Ulimo',
    sec_africa: 'Emhlabeni wonke jikelele weAfrica',
    sec_afcfta: 'AfCFTA & Ukuthengiselana',
    sec_collab: 'Ukusebenzisana',
    // Sidebar
    side_fuel: 'Amafutha eSADC (USD/L)',
    side_zse: 'Zimbabwe Stock Exchange',
    side_converter: 'Ukuguqula Imali',
    side_trending: 'Izinto ezidumile',
    side_commodities: 'Izimpahla zokuthengwa',
    side_weather: 'Isimo sezulu',
    side_newsletter: 'Incwadi yosuku ngosuku',
    side_alerts: 'Izaziso zezindaba',
    // Buttons & placeholders
    btn_subscribe: 'Bhalisa',
    btn_alerts: 'Vumela Izaziso',
    ph_email: 'Faka i-imeyili yakho',
    // Footer
    foot_about: 'Ngathi',
    foot_contact: 'Xhumana nathi',
    foot_privacy: 'Okuyimfihlo',
    foot_terms: 'Imithetho',
    foot_advertise: 'Thengisa',
    // Meta
    lang_name: 'isiNdebele',
    lang_flag: '🇿🇼'
  }
};

const LANG_NAMES = { en: 'EN', sn: 'SN', nd: 'ND' };

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;

  document.body.classList.add('lang-switching');

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[lang][key]) {
      el.placeholder = TRANSLATIONS[lang][key];
    }
  });

  // Update language button
  const flagEl = document.getElementById('currentLangFlag');
  const codeEl = document.getElementById('currentLangCode');
  if (flagEl) flagEl.textContent = TRANSLATIONS[lang].lang_flag;
  if (codeEl) codeEl.textContent = LANG_NAMES[lang];

  // Update dropdown active state
  document.querySelectorAll('.lang-option').forEach(function(opt) {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
  });

  // Update html lang attribute
  document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : lang);

  // Save preference
  localStorage.setItem('newshub-lang', lang);

  setTimeout(function() {
    document.body.classList.remove('lang-switching');
  }, 200);

  // Close dropdown
  closeLangDropdown();
}


function detectLanguage() {
  const saved = localStorage.getItem('newshub-lang');
  if (saved && TRANSLATIONS[saved]) {
    return saved;
  }

  // Check browser language
  const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  if (browserLang.startsWith('sn') || browserLang.startsWith('sh')) return 'sn';
  if (browserLang.startsWith('nd') || browserLang.startsWith('nr')) return 'nd';

  // Check Zimbabwe locale patterns
  const languages = navigator.languages || [];
  for (const lang of languages) {
    const l = lang.toLowerCase();
    if (l.startsWith('sn') || l.startsWith('sh')) return 'sn';
    if (l.startsWith('nd') || l.startsWith('nr')) return 'nd';
  }

  return 'en';
}



// Initialize language based on saved preference or browser settings
(function initLanguage() {
  const lang = detectLanguage();
  if (lang !== 'en') {
    // Defer to DOM ready so elements exist
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() { setLanguage(lang); });
    } else {
      setLanguage(lang);
    }
  }
})();

function toggleLangDropdown() {
  const dropdown = document.getElementById('langDropdown');
  const btn = document.getElementById('langBtn');
  if (!dropdown || !btn) return;

  const isOpen = dropdown.classList.contains('open');
  if (isOpen) {
    closeLangDropdown();
  } else {
    dropdown.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    // Close on outside click
    setTimeout(function() {
      document.addEventListener('click', closeLangDropdownOnClickOutside);
    }, 10);
  }
}

function closeLangDropdown() {
  const dropdown = document.getElementById('langDropdown');
  const btn = document.getElementById('langBtn');
  if (dropdown) dropdown.classList.remove('open');
  if (btn) btn.setAttribute('aria-expanded', 'false');
  document.removeEventListener('click', closeLangDropdownOnClickOutside);
}

function closeLangDropdownOnClickOutside(e) {
  const switcher = document.getElementById('langSwitcher');
  if (switcher && !switcher.contains(e.target)) {
    closeLangDropdown();
  }
}

// Check if setLanguage is already present

// ==================== CLOCK & THEME ====================
function updateClock() {
  const el = document.getElementById('world-clock');
  const select = document.getElementById('timezoneSelect');
  if (!el || !select) return;
  const tz = select.value;
  const now = new Date();
  el.textContent = now.toLocaleTimeString('en-US', { timeZone: tz, hour12: false });
}
document.addEventListener('DOMContentLoaded', () => {
  updateClock();
  setInterval(updateClock, 1000);
});
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('themeIcon');
  const isLight = body.classList.toggle('light-mode');
  body.classList.toggle('dark-mode', !isLight);
  if (icon) if (icon) icon.textContent = isLight ? '☽' : '☀';
  localStorage.setItem('newshub-theme', isLight ? 'light' : 'dark');
}
(function() {
  const saved = localStorage.getItem('newshub-theme');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
    const icon = document.getElementById('themeIcon');
    if (icon) if (icon) icon.textContent = '☽';
  }
})();
// Mobile & Tablet Menu Toggle
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  const btn = document.getElementById('menuToggle');
  if (!nav) return;
  const isOpen = nav.classList.contains('open');
  if (isOpen) {
    closeMenu();
  } else {
    nav.classList.add('open');
    if (btn) {
      btn.innerHTML = '&times;';
      btn.setAttribute('aria-expanded', 'true');
    }
  }
}

function closeMenu() {
  const nav = document.getElementById('navLinks');
  const btn = document.getElementById('menuToggle');
  if (nav) nav.classList.remove('open');
  if (btn) {
    btn.innerHTML = '&#9776;';
    btn.setAttribute('aria-expanded', 'false');
  }
}

// Close menu on click outside
document.addEventListener('click', function(e) {
  const nav = document.getElementById('navLinks');
  const btn = document.getElementById('menuToggle');
  if (nav && nav.classList.contains('open')) {
    if (!nav.contains(e.target) && btn && !btn.contains(e.target)) {
      closeMenu();
    }
  }
});

// Close menu on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeMenu();
  }
});

// 1. High-Conversion Newsletter Submission
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('homeNewsletterEmail');
  const successEl = document.getElementById('homeNewsletterSuccess');
  if (!input) return;
  const email = input.value.trim();
  if (email) {
    input.value = '';
    if (successEl) {
      successEl.style.display = 'block';
      setTimeout(() => {
        successEl.style.display = 'none';
      }, 6000);
    }
  }
}
function openEvent(card) {
  const title = card.querySelector('h3')?.textContent || 'Event';
  alert('Opening event details: ' + title + '\n\nThis would navigate to the event page.');
}

// ==================== MARKET TICKER ====================
const marketData = { zse: 4847.32, zwl_ib: 15847.50, gold: 2347.80, plat: 1012.40, btc: 67420.00, eth: 3542.10 };
function updateMarketData() {
  marketData.zse += (Math.random() - 0.5) * 20;
  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setTxt('tick-zse', marketData.zse.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  setTxt('side-zse', marketData.zse.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  setTxt('mkt-zse', marketData.zse.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));

  marketData.zwl_ib += (Math.random() - 0.5) * 50;
  setTxt('tick-zwl', marketData.zwl_ib.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  setTxt('mkt-zwl-ib', marketData.zwl_ib.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  setTxt('fx-ib', marketData.zwl_ib.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));

  marketData.zwl_par += (Math.random() - 0.5) * 80;
  setTxt('mkt-zwl-par', marketData.zwl_par.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  setTxt('fx-par', marketData.zwl_par.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));

  marketData.zwl_omo += (Math.random() - 0.5) * 40;
  setTxt('fx-omo', marketData.zwl_omo.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));

  marketData.gold += (Math.random() - 0.5) * 5;
  setTxt('tick-gold', '$' + marketData.gold.toFixed(2));
  setTxt('mkt-gold', '$' + marketData.gold.toFixed(2));
  setTxt('side-gold', '$' + marketData.gold.toFixed(2) + ' ' + (Math.random() > 0.5 ? '↑' : '↓'));

  marketData.plat += (Math.random() - 0.5) * 3;
  setTxt('tick-plat', '$' + marketData.plat.toFixed(2));
  setTxt('mkt-plat', '$' + marketData.plat.toFixed(2));
  setTxt('side-plat', '$' + marketData.plat.toFixed(2) + ' ' + (Math.random() > 0.5 ? '↑' : '↓'));

  marketData.btc += (Math.random() - 0.5) * 200;
  setTxt('tick-btc', '$' + marketData.btc.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  setTxt('mkt-btc', '$' + marketData.btc.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));

  marketData.eth += (Math.random() - 0.5) * 15;
  setTxt('tick-eth', '$' + marketData.eth.toFixed(2));
  setTxt('mkt-eth', '$' + marketData.eth.toFixed(2));
}
setInterval(updateMarketData, 30000);

// ==================== EVENT STATUS + COUNTDOWN + SORTING ====================
function getEventStatus(startStr, endStr) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const start = new Date(startStr);
  const end = new Date(endStr);
  end.setHours(23, 59, 59, 999);
  if (today > end) return { status: 'past', sortKey: 3, start, end };
  if (today >= start && today <= end) {
    if (start.getTime() === end.getTime()) return { status: 'today', sortKey: 1, start, end };
    return { status: 'ongoing', sortKey: 0, start, end };
  }
  return { status: 'upcoming', sortKey: 2, start, end };
}
function formatCountdown(ms, status) {
  if (status === 'past') return '';
  const absMs = Math.abs(ms);
  const days = Math.floor(absMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((absMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((absMs % (1000 * 60 * 60)) / (1000 * 60));
  if (status === 'ongoing') {
    if (days > 0) return `Ends in ${days}d ${hours}h`;
    if (hours > 0) return `Ends in ${hours}h ${minutes}m`;
    return `Ends in ${minutes}m`;
  }
  if (status === 'today') return `Happening today`;
  if (days > 0) return `Starts in ${days}d ${hours}h`;
  if (hours > 0) return `Starts in ${hours}h ${minutes}m`;
  return `Starts in ${minutes}m`;
}
function getStatusLabel(status, start, end) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (status === 'past') return 'Past Event';
  if (status === 'ongoing') return 'Happening Now';
  if (status === 'today') return 'Today';
  const diffMs = start - today;
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 1) return 'Tomorrow';
  if (diffDays === 0) return 'Today';
  if (diffDays <= 7) return `In ${diffDays} days`;
  if (diffDays <= 30) {
    const weeks = Math.ceil(diffDays / 7);
    return `In ${weeks} week${weeks > 1 ? 's' : ''}`;
  }
  const months = Math.ceil(diffDays / 30);
  return `In ${months} month${months > 1 ? 's' : ''}`;
}
function getCountdownIcon(status) {
  if (status === 'ongoing') return '&#127881;';
  if (status === 'today') return '&#128197;';
  if (status === 'past') return '&#10060;';
  return '&#9200;';
}
function updateEventCard(card) {
  const startStr = card.dataset.start;
  const endStr = card.dataset.end;
  if (!startStr || !endStr) return null;
  const info = getEventStatus(startStr, endStr);
  const badge = card.querySelector('.event-date');
  const countdownEl = card.querySelector('.countdown-text');
  const countdownWrap = card.querySelector('.event-countdown');
  const iconEl = card.querySelector('.countdown-icon');
  if (badge) {
    badge.className = 'event-date status-' + info.status;
    badge.textContent = getStatusLabel(info.status, info.start, info.end);
  }
  if (countdownEl && countdownWrap) {
    const now = new Date();
    let targetMs;
    if (info.status === 'upcoming') targetMs = info.start - now;
    else if (info.status === 'ongoing') targetMs = info.end - now;
    else targetMs = 0;
    countdownEl.textContent = formatCountdown(targetMs, info.status);
    countdownWrap.className = 'event-countdown countdown-' + info.status;
    if (iconEl) iconEl.innerHTML = getCountdownIcon(info.status);
  }
  if (info.status === 'past') card.classList.add('past-event');
  else card.classList.remove('past-event');
  return info;
}
function sortEvents() {
  const grid = document.getElementById('eventsGrid');
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll('.event-card'));
  const scored = cards.map(card => {
    const startStr = card.dataset.start;
    const endStr = card.dataset.end;
    const info = getEventStatus(startStr, endStr);
    return { card, info };
  });
  scored.sort((a, b) => {
    if (a.info.sortKey !== b.info.sortKey) return a.info.sortKey - b.info.sortKey;
    return a.info.start - b.info.start;
  });
  grid.querySelectorAll('.events-section-header').forEach(h => h.remove());
  const groups = { ongoing: [], today: [], upcoming: [], past: [] };
  scored.forEach(({ card, info }) => { groups[info.status].push(card); });
  const sectionTitles = {
    ongoing: { title: 'Happening Now', cls: 'section-ongoing' },
    today: { title: 'Today', cls: 'section-today' },
    upcoming: { title: 'Upcoming', cls: 'section-upcoming' },
    past: { title: 'Past Events', cls: 'section-past' }
  };
  const order = ['ongoing', 'today', 'upcoming', 'past'];
  order.forEach(key => {
    const group = groups[key];
    if (group.length === 0) return;
    const sec = sectionTitles[key];
    const header = document.createElement('div');
    header.className = 'events-section-header ' + sec.cls;
    header.innerHTML = `<h2>${sec.title}</h2><span class="section-count">${group.length}</span><div class="section-line"></div>`;
    grid.appendChild(header);
    group.forEach(card => grid.appendChild(card));
  });
}
function updateAllEvents() {
  document.querySelectorAll('.event-card').forEach(card => updateEventCard(card));
}

// ==================== PUBLIC HOLIDAYS CALENDAR ====================
const ZIM_HOLIDAYS = [
  { name: "Heroes' Day", date: "2026-08-10", icon: "&#9874;" },
  { name: "Defence Forces Day", date: "2026-08-11", icon: "&#9876;" },
  { name: "Unity Day", date: "2026-12-22", icon: "&#129309;" },
  { name: "Christmas Day", date: "2026-12-25", icon: "&#127876;" },
  { name: "Boxing Day", date: "2026-12-26", icon: "&#127873;" },
  { name: "New Year's Day", date: "2027-01-01", icon: "&#127878;" },
  { name: "Good Friday", date: "2027-03-26", icon: "&#10013;" },
  { name: "Easter Monday", date: "2027-03-29", icon: "&#10013;" },
  { name: "Independence Day", date: "2027-04-18", icon: "&#127987;" },
  { name: "Workers' Day", date: "2027-05-01", icon: "&#128736;" },
  { name: "Africa Day", date: "2027-05-25", icon: "&#127757;" },
];

function getHolidayCountdown(dateStr) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const holiday = new Date(dateStr);
  const diffMs = holiday - today;
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays < 0) return { text: 'Past', days: diffDays, isPast: true };
  if (diffDays === 0) return { text: 'Today', days: 0, isPast: false };
  if (diffDays === 1) return { text: 'Tomorrow', days: 1, isPast: false };
  if (diffDays <= 7) return { text: `In ${diffDays} days`, days: diffDays, isPast: false };
  if (diffDays <= 30) {
    const weeks = Math.ceil(diffDays / 7);
    return { text: `In ${weeks}w`, days: diffDays, isPast: false };
  }
  const months = Math.ceil(diffDays / 30);
  return { text: `In ${months}mo`, days: diffDays, isPast: false };
}

function updateHolidayList() {
  const list = document.getElementById('holidayList');
  if (!list) return;
  const items = list.querySelectorAll('li');
  items.forEach(li => {
    const dateStr = li.dataset.date;
    if (!dateStr) return;
    const countdown = getHolidayCountdown(dateStr);
    const badge = li.querySelector('.holiday-countdown');
    if (badge) {
      badge.textContent = countdown.text;
      badge.classList.toggle('past', countdown.isPast);
    }
  });
}

// Find nearest holiday to an event date
function findNearestHoliday(eventStartStr, eventEndStr) {
  const eventStart = new Date(eventStartStr);
  const eventEnd = new Date(eventEndStr);
  let nearest = null;
  let minDiff = Infinity;
  const PROXIMITY_DAYS = 21; // 3 weeks

  for (const h of ZIM_HOLIDAYS) {
    const hDate = new Date(h.date);
    // Check if holiday is before event start
    const diffBefore = eventStart - hDate;
    const daysBefore = Math.ceil(diffBefore / (1000 * 60 * 60 * 24));
    if (daysBefore >= 0 && daysBefore <= PROXIMITY_DAYS && daysBefore < minDiff) {
      minDiff = daysBefore;
      nearest = { ...h, days: daysBefore, position: 'before' };
    }
    // Check if holiday is after event end
    const diffAfter = hDate - eventEnd;
    const daysAfter = Math.ceil(diffAfter / (1000 * 60 * 60 * 24));
    if (daysAfter >= 0 && daysAfter <= PROXIMITY_DAYS && daysAfter < minDiff) {
      minDiff = daysAfter;
      nearest = { ...h, days: daysAfter, position: 'after' };
    }
    // Check if holiday falls DURING the event
    if (hDate >= eventStart && hDate <= eventEnd) {
      minDiff = 0;
      nearest = { ...h, days: 0, position: 'during' };
    }
  }
  return nearest;
}

function addHolidayProximityToCards() {
  document.querySelectorAll('.event-card').forEach(card => {
    const start = card.dataset.start;
    const end = card.dataset.end;
    if (!start || !end) return;
    const nearest = findNearestHoliday(start, end);
    if (!nearest) return;

    const body = card.querySelector('.event-body');
    if (!body) return;

    // Remove existing proximity badge
    const existing = body.querySelector('.holiday-proximity');
    if (existing) existing.remove();

    const badge = document.createElement('div');
    badge.className = 'holiday-proximity';
    let text = '';
    if (nearest.position === 'during') {
      text = `&#127881; ${nearest.name} during event`;
    } else if (nearest.position === 'before') {
      text = `&#128197; ${nearest.days}d after ${nearest.name}`;
    } else {
      text = `&#128197; ${nearest.days}d before ${nearest.name}`;
    }
    badge.innerHTML = `<span class="hp-icon">&#127881;</span>${text}`;

    // Insert after date-range
    const dateRange = body.querySelector('.event-date-range');
    if (dateRange) dateRange.after(badge);
    else body.insertBefore(badge, body.firstChild);

    // Add holiday tag if very close (within 7 days)
    if (nearest.days <= 7) {
      const tags = body.querySelector('.event-tags');
      if (tags && !tags.querySelector('.holiday-tag')) {
        const tag = document.createElement('span');
        tag.className = 'event-tag holiday-tag';
        tag.textContent = 'Near Holiday';
        tags.appendChild(tag);
      }
    }
  });
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  updateAllEvents();
  sortEvents();
  updateHolidayList();
  addHolidayProximityToCards();
  setInterval(() => {
    updateAllEvents();
    updateHolidayList();
  }, 60000);
  setInterval(() => {
    sortEvents();
    addHolidayProximityToCards();
  }, 3600000);
});

// ==================== ECOCASH PAYMENT ====================
let currentPaymentEvent = null;
let selectedTicketPrice = 0;

function openPaymentModal(btn) {
  const card = btn.closest('.event-card');
  if (!card) return;
  currentPaymentEvent = card;
  const title = card.querySelector('h3')?.textContent || 'Event';
  const img = card.querySelector('img')?.src || '';
  const dateRange = card.querySelector('.event-date-range')?.textContent || '';
  const price = parseFloat(card.dataset.price) || 0;
  selectedTicketPrice = price;

  const modal = document.getElementById('paymentModal');
  const body = document.getElementById('paymentModalBody');

  body.innerHTML = `
    <div class="payment-event-info">
      <img src="${img}" alt="" class="payment-event-img" />
      <div class="payment-event-details">
        <h4>${title}</h4>
        <p>${dateRange}</p>
      </div>
    </div>
    <div class="payment-amount">$${price.toFixed(2)} USD</div>
    <div class="ticket-selector">
      <div class="ticket-option selected" onclick="selectTicket(this, ${price})">
        <div class="ticket-type-name">Standard</div>
        <div class="ticket-type-price">$${price.toFixed(2)}</div>
      </div>
      <div class="ticket-option" onclick="selectTicket(this, ${(price * 1.5).toFixed(2)})">
        <div class="ticket-type-name">VIP</div>
        <div class="ticket-type-price">$${(price * 1.5).toFixed(2)}</div>
      </div>
      <div class="ticket-option" onclick="selectTicket(this, ${(price * 2.5).toFixed(2)})">
        <div class="ticket-type-name">Premium</div>
        <div class="ticket-type-price">$${(price * 2.5).toFixed(2)}</div>
      </div>
    </div>
    <div class="payment-form-group">
      <label>EcoCash Phone Number</label>
      <input type="tel" id="ecocashPhone" placeholder="0771 234 567" maxlength="12" />
      <div class="input-hint">Enter your registered EcoCash number</div>
    </div>
    <div class="payment-form-group">
      <label>PIN (simulated)</label>
      <input type="password" id="ecocashPin" placeholder="****" maxlength="4" />
      <div class="input-hint">Your EcoCash PIN for authorization</div>
    </div>
    <div class="payment-actions">
      <button class="btn-secondary" onclick="closePaymentModal()">Cancel</button>
      <button class="btn-primary" onclick="processEcoCashPayment()">Confirm Payment</button>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function selectTicket(el, price) {
  document.querySelectorAll('.ticket-option').forEach(opt => opt.classList.remove('selected'));
  el.classList.add('selected');
  selectedTicketPrice = parseFloat(price);
  const amountEl = document.querySelector('.payment-amount');
  if (amountEl) amountEl.textContent = '$' + selectedTicketPrice.toFixed(2) + ' USD';
}

function closePaymentModal() {
  const modal = document.getElementById('paymentModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
  currentPaymentEvent = null;
}

function processEcoCashPayment() {
  const phone = document.getElementById('ecocashPhone')?.value.trim() || '';
  const pin = document.getElementById('ecocashPin')?.value.trim() || '';

  if (!phone || phone.length < 9) {
    alert('Please enter a valid EcoCash phone number.');
    return;
  }
  if (!pin || pin.length < 4) {
    alert('Please enter your 4-digit EcoCash PIN.');
    return;
  }

  const body = document.getElementById('paymentModalBody');
  const title = currentPaymentEvent?.querySelector('h3')?.textContent || 'Event';

  // Show USSD-style processing screen
  body.innerHTML = `
    <div class="ussd-screen">
      <div class="ussd-line">EcoCash Transaction</div>
      <div class="ussd-line">-------------------</div>
      <div class="ussd-line">Merchant: NewsHub Events</div>
      <div class="ussd-line">Amount: $${selectedTicketPrice.toFixed(2)} USD</div>
      <div class="ussd-line">Phone: ${phone}</div>
      <div class="ussd-line">-------------------</div>
      <div class="ussd-prompt">Processing...</div>
      <div class="ussd-options">Please wait</div>
    </div>
  `;

  // Simulate processing delay
  setTimeout(() => {
    const txnId = 'ECO' + Date.now().toString().slice(-8);
    body.innerHTML = `
      <div class="payment-success">
        <div class="success-icon">&#10003;</div>
        <h4>Payment Successful!</h4>
        <p>Your ticket for <strong>${title}</strong> has been confirmed.</p>
        <p>A confirmation SMS has been sent to ${phone}.</p>
        <div class="txn-id">Txn Ref: ${txnId}</div>
        <div class="payment-actions" style="margin-top:20px;">
          <button class="btn-secondary" onclick="closePaymentModal()">Close</button>
          <button class="btn-primary" onclick="alert('Ticket saved to downloads.')">Download Ticket</button>
        </div>
      </div>
    `;
  }, 2500);
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePaymentModal();
});
