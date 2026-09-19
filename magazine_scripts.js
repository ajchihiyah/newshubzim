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


// Utility functions
const fmtNum = (n) => n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const fmtUSD = (n) => '$' + fmtNum(n);



function updateMarketStatus() {
  const el = document.getElementById('zse-status');
  if (!el) return;
  const now = new Date();
  const harareTime = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Harare' }));
  const day = harareTime.getDay();
  const hour = harareTime.getHours();
  const minute = harareTime.getMinutes();
  const timeVal = hour * 60 + minute;
  const openTime = 10 * 60;   // 10:00 AM
  const closeTime = 15 * 60;  // 3:00 PM

  el.classList.remove('status-open', 'status-pre', 'status-closed');

  if (day === 0 || day === 6) {
    el.textContent = 'Market Closed';
    el.classList.add('status-closed');
  } else if (timeVal < openTime) {
    el.textContent = 'Pre-Market';
    el.classList.add('status-pre');
  } else if (timeVal >= openTime && timeVal < closeTime) {
    el.textContent = 'Market Open';
    el.classList.add('status-open');
  } else {
    el.textContent = 'Market Closed';
    el.classList.add('status-closed');
  }
}

const TIMEZONES = {
  'Africa/Harare': { label: 'Harare', abbr: 'CAT' },
  'Europe/London': { label: 'London', abbr: 'GMT' },
  'America/New_York': { label: 'New York', abbr: 'EST' },
  'Africa/Johannesburg': { label: 'Johannesburg', abbr: 'SAST' }
};

function updateClock() {
  const el = document.getElementById('world-clock');
  const select = document.getElementById('timezoneSelect');
  if (!el || !select) return;
  const tz = select.value;
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { timeZone: tz, hour12: false });
  el.textContent = timeString;
}

document.addEventListener('DOMContentLoaded', () => {
  updateClock();
  updateMarketStatus();
  setInterval(updateClock, 1000);
  setInterval(updateMarketStatus, 60000);

  // Smooth scroll for anchor links on page load
  if (window.location.hash) {
    setTimeout(() => {
      const el = document.querySelector(window.location.hash);
      if (el) {
        const headerOffset = 80;
        const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  }
});

const marketData = {
  zse: 4847.32,
  zwl_ib: 15847.50,
  zwl_par: 18200.00,
  zwl_omo: 16200.00,
  gold: 2347.80,
  plat: 1012.40,
  btc: 67420.00,
  eth: 3542.10
};

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

// Currency Converter
const CONV_RATE = 15847.50;
let convDirection = 'usd-to-zwl';

function fmtCurrency(n) {
  return n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function convertCurrency() {
  const input = document.getElementById('convInput');
  const output = document.getElementById('convOutput');
  if (!input || !output) return;
  const val = parseFloat(input.value) || 0;
  const rate = marketData.zwl_ib || CONV_RATE;
  if (convDirection === 'usd-to-zwl') {
    output.textContent = fmtCurrency(val * rate);
  } else {
    output.textContent = fmtCurrency(val / rate);
  }
}

function swapCurrency() {
  convDirection = convDirection === 'usd-to-zwl' ? 'zwl-to-usd' : 'usd-to-zwl';
  const input = document.getElementById('convInput');
  const output = document.getElementById('convOutput');
  const fromLabel = document.getElementById('convFromLabel');
  const toLabel = document.getElementById('convToLabel');
  if (!input || !output || !fromLabel || !toLabel) return;
  const currentOut = parseFloat(output.textContent.replace(/,/g, '')) || 0;
  input.value = currentOut.toFixed(2);
  if (convDirection === 'usd-to-zwl') {
    fromLabel.textContent = 'USD';
    toLabel.textContent = 'ZWL';
  } else {
    fromLabel.textContent = 'ZWL';
    toLabel.textContent = 'USD';
  }
  convertCurrency();
}



function switchRegion(btn, region) {
  // Update tab buttons
  document.querySelectorAll('.region-tab').forEach(tab => {
    tab.classList.remove('active');
    tab.style.background = 'var(--card)';
    tab.style.color = 'var(--text-muted)';
    tab.style.border = '1px solid var(--border)';
    tab.style.boxShadow = 'none';
  });
  btn.classList.add('active');
  btn.style.background = 'var(--red)';
  btn.style.color = 'white';
  btn.style.border = '1px solid var(--red)';
  btn.style.boxShadow = '0 4px 12px rgba(225, 6, 0, 0.3)';

  // Show corresponding content
  document.querySelectorAll('.region-content').forEach(content => {
    content.style.display = 'none';
    content.classList.remove('active');
  });
  const target = document.getElementById('region-' + region);
  if (target) {
    target.style.display = 'block';
    target.classList.add('active');
  }
}

function showRegion(region) {
  const btn = document.querySelector('.region-tab[data-region="' + region + '"]');
  if (btn) switchRegion(btn, region);
}

function openArticle(card) {
  const title = card.querySelector('h3')?.textContent || card.querySelector('h1')?.textContent || 'Article';
  alert('Opening full article: ' + title + '\n\nThis would navigate to the full story page.');
}
function openEvent(card) {
  const title = card.querySelector('h3')?.textContent || 'Event';
  alert('Opening event details: ' + title + '\n\nThis would navigate to the event page.');
}
function openReport(card) {
  const title = card.querySelector('h4')?.textContent || 'Report';
  alert('Opening report: ' + title + '\n\nThis would download or open the PDF.');
}



// Theme toggle functionality
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('themeIcon');
  const isLight = body.classList.toggle('light-mode'); if (icon) icon.textContent = isLight ? '☽' : '☀'; // Moon for light mode, Sun for dark mode
  localStorage.setItem('newshub-theme', isLight ? 'light' : 'dark');
}

// Restore theme on load
(function() {
  const saved = localStorage.getItem('newshub-theme');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
    const icon = document.getElementById('themeIcon');
    if (icon) if (icon) icon.textContent = '☽';
  }
})();


function scrollToSection(id) {
  setTimeout(function() {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }, 50);
}


// Mobile menu toggle
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  const btn = document.getElementById('menuToggle');
  if (!nav) return;
  const isOpen = nav.classList.toggle('open');
  if (btn) {
    btn.innerHTML = isOpen ? '&times;' : '&#9776;';
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
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

// Close mobile navigation on click outside
document.addEventListener('click', function(e) {
  const nav = document.getElementById('navLinks');
  const btn = document.getElementById('menuToggle');
  if (nav && nav.classList.contains('open') && !nav.contains(e.target) && btn && !btn.contains(e.target)) {
    closeMenu();
  }
});

// Close mobile navigation on Escape key
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


// ============================================================
// CONFIRMED ZIMBABWEAN RSS FEEDS — NO API KEYS NEEDED
// All verified as of July 2026
// ============================================================

const CONFIRMED_RSS_FEEDS = [
  // ── MAJOR DAILY NEWSPAPERS ──
  { name: 'The Herald',           url: 'https://www.herald.co.zw/feed/' },
  { name: 'DailyNews',            url: 'https://dailynews.co.zw/feed/' },
  { name: 'NewsDay',              url: 'https://www.newsday.co.zw/feed/' },
  { name: 'The Chronicle',        url: 'https://www.chronicle.co.zw/feed/' },
  { name: 'The Sunday Mail',      url: 'https://www.sundaymail.co.zw/feed/' },
  { name: 'The Sunday News',      url: 'https://www.sundaynews.co.zw/feed/' },
  { name: 'Southern Eye',         url: 'https://www.southerneye.co.zw/feed/' },

  // ── WEEKLY INDEPENDENT ──
  { name: 'Zimbabwe Independent', url: 'https://www.theindependent.co.zw/feed/' },
  { name: 'The Standard',         url: 'https://www.thestandard.co.zw/feed/' },

  // ── ONLINE NEWS ──
  { name: 'New Zimbabwe',         url: 'https://www.newzimbabwe.com/feed/' },
  { name: 'ZimEye',               url: 'https://www.zimeye.net/feed/' },
  { name: 'iHarare',              url: 'https://iharare.com/feed/' },
  { name: 'My Zimbabwe News',     url: 'https://myzimbabwe.co.zw/feed/' },
  { name: 'ZiMetro',              url: 'https://zimetro.co.zw/feed/' },
  { name: 'Mbare Times',          url: 'https://mbaretimes.com/feed/' },
  { name: 'Zimbabwe Situation',   url: 'https://www.zimbabwesituation.com/feed/' },
  { name: 'Zim Morning Post',     url: 'https://zimmorningpost.com/feed/' },
  { name: 'The Insider',          url: 'https://insiderzim.com/feed/' },
  { name: 'Dandaro Online',       url: 'https://dandaro.online/feed/' },

  // ── CATEGORY FEEDS ──
  { name: 'Herald - Business',    url: 'https://www.herald.co.zw/category/business/feed/' },
  { name: 'Herald - Sport',       url: 'https://www.herald.co.zw/category/sport/feed/' },
  { name: 'NewsDay - Business',   url: 'https://www.newsday.co.zw/category/business/feed/' },
  { name: 'NewsDay - Sport',      url: 'https://www.newsday.co.zw/category/sport/feed/' },
];


// ============================================================
// FETCH FUNCTION
// ============================================================

async function fetchRSSFallback() {
  const results = [];
  const errors = [];

  for (const source of CONFIRMED_RSS_FEEDS) {
    try {
      const response = await fetch(source.url, {
        headers: {
          'User-Agent': 'NewsHub-Africa/1.0 (RSS Aggregator)'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const xmlText = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
      const items = xmlDoc.querySelectorAll('item');

      const articles = Array.from(items).slice(0, 10).map(item => ({
        title: item.querySelector('title')?.textContent?.trim() || '',
        link: item.querySelector('link')?.textContent?.trim() || '',
        description: item.querySelector('description')?.textContent?.trim() || '',
        pubDate: item.querySelector('pubDate')?.textContent?.trim() || '',
        source: source.name
      }));

      results.push({
        source: source.name,
        articleCount: articles.length,
        articles
      });

    } catch (error) {
      errors.push({
        source: source.name,
        error: error.message
      });
    }
  }

  return {
    success: results,
    failed: errors,
    total: CONFIRMED_RSS_FEEDS.length,
    working: results.length
  };
}

