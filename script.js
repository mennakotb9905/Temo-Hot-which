/**
 * ==========================================================================
 * Temo (Hot Which) - Restaurant Menu Script
 * Standalone JavaScript Module • Menu Data • State Management • Interactions
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. Categories & Menu Items Data (All prices preserved 100% exactly as provided)
// --------------------------------------------------------------------------
const CATEGORIES = [
  {
    id: "shawarma-sandwich",
    name: "سندوتشات الشاورما",
    icon: "🌯",
    items: [
      { name: "شاورما كبير", price: 100 },
      { name: "شاورما وسط", price: 80 },
      { name: "شاورما بطاطس", price: 60 },
      { name: "شاورما فرنساوي", price: 110 },
      { name: "شاورما كايزر", price: 50 },
      { name: "شاورما سوبر", price: 160 }
    ]
  },
  {
    id: "shawarma-meals",
    name: "وجبات شاورما",
    icon: "🍱",
    items: [
      { name: "وجبة شاورما عربي سينجل", price: 125 },
      { name: "وجبة شاورما عربي سوبر", price: 199 },
      { name: "وجبة شاورما هوت ويتش", price: 150, badge: "🔥 وجبة مميزة" },
      { name: "وجبة شاورما حمص", price: 125 },
      { name: "وجبة ماريا", price: 135 },
      { name: "فتة شاورما", price: 99 }
    ]
  },
  {
    id: "gharby",
    name: "القسم الغربي",
    icon: "🍟",
    dual: true,
    col1: "سوري",
    col2: "فرنساوي",
    items: [
      { name: "بطاطس", price1: 30, price2: 40 },
      { name: "زنجر", price1: 70, price2: 80 },
      { name: "كرسبي", price1: 70, price2: 80 },
      { name: "سكالوب", price1: 70, price2: 80 },
      { name: "فاهيتا", price1: 60, price2: 70 },
      { name: "مكسيكانو", price1: 60, price2: 70 },
      { name: "كفتة", price1: 75, price2: 85 },
      { name: "سجق", price1: 70, price2: 80 },
      { name: "شيش", price1: 75, price2: 85 }
    ]
  },
  {
    id: "gharby-meals",
    name: "وجبات غربي",
    icon: "🍽️",
    items: [
      { name: "زنجر", price: 130 },
      { name: "كرسبي", price: 130 },
      { name: "شيش", price: 150 },
      { name: "فاهيتا", price: 130 },
      { name: "سكالوب", price: 130 },
      { name: "سجق", price: 150 }
    ]
  },
  {
    id: "mashawy",
    name: "المشويات",
    icon: "🥩",
    items: [
      { name: "فرخة كاملة", price: 350, badge: "🔥 مشوي فحم" },
      { name: "نص فرخة", price: 190 },
      { name: "ربع فرخة صدر", price: 110 },
      { name: "ربع فرخة ورك", price: 100 },
      { name: "كيلو كفتة", price: 500 },
      { name: "نص كيلو كفتة", price: 250 },
      { name: "ربع كيلو كفتة", price: 125 }
    ]
  },
  {
    id: "hawawshy",
    name: "الحواوشي",
    icon: "🥟",
    items: [
      { name: "حواوشي بلدي", price: 50 },
      { name: "حواوشي سوري", price: 65 },
      { name: "ميكس لحوم بلدي", price: 65 },
      { name: "ميكس لحوم سوري", price: 75 },
      { name: "إضافة جبن", price: 20 }
    ]
  },
  {
    id: "temo-burger",
    name: "برجر Temo",
    icon: "🔥",
    items: [
      { name: "Temo smoked", price: 125, desc: "عيش / كابوتشا / استريبس / تركي مدخن / جبنة شيدر" },
      { name: "Hot wich", price: 125, desc: "خبز / ستربس سبايسي / مايونيز سبايسي / كابوتشا / هاليبينو / جبنة شيدر", badge: "🔥 الأكثر طلباً" },
      { name: "Temo roll", price: 85, desc: "خبز تورتيلا / جبنة شيدر / استريبس / كابوتشا" },
      { name: "Temo tower", price: 180, desc: "خبز / ستريبس / كابوتشا / كول سلو / جبنة شيدر", badge: "⭐ حجم عملاق" },
      { name: "Temo Ranch", price: 120, desc: "عيش / ستربس / كابوتشا / جبنة شيدر / تركي / رانش" },
      { name: "Temo classic", price: 115, desc: "عيش / كابوتشا / استربس / جبنة شيدر / تركي / مايونيز" },
      { name: "Temo Texas", price: 120, desc: "عيش / ستربس / كابوتشا / جبنة شيدر / تركي / تكساس" },
      { name: "Temo triple", price: 270, desc: "عيش / ستريبس / كابوتشا / موزاريلا ستيكس / شيدر", badge: "👑 تريبل ميكس" }
    ]
  },
  {
    id: "burger",
    name: "البرجر",
    icon: "🍔",
    items: [
      { name: "برجر كلاسيك", price: 80 },
      { name: "تشيز برجر", price: 95 },
      { name: "تكساس برجر", price: 99 },
      { name: "دبل برجر", price: 165 }
    ]
  },
  {
    id: "kaiser",
    name: "الكايزر",
    icon: "🥪",
    items: [
      { name: "كرسبي", price: 50 },
      { name: "زنجر", price: 50 },
      { name: "سكالوب", price: 50 },
      { name: "شيش", price: 50 },
      { name: "فاهيتا", price: 50 }
    ]
  },
  {
    id: "crepe",
    name: "الكريبات",
    icon: "🥞",
    items: [
      { name: "كريب كريسبي", price: 90 },
      { name: "كريب زنجر", price: 90 },
      { name: "سكالوب بانيه", price: 90 },
      { name: "شاورما", price: 100 },
      { name: "شيش", price: 100 },
      { name: "بطاطس", price: 45 },
      { name: "ميكس جبن", price: 65 }
    ]
  },
  {
    id: "rizo",
    name: "الريزو",
    icon: "🍚",
    items: [
      { name: "ريزو كريسبي", price: 65 },
      { name: "ريزو زنجر", price: 65 },
      { name: "ريزو سكالوب", price: 65 },
      { name: "ريزو شيش", price: 75 },
      { name: "ريزو شاورما", price: 75 }
    ]
  },
  {
    id: "broast-meals",
    name: "وجبات البروست",
    icon: "🍗",
    items: [
      { name: "وجبة فرد سنجل", price: 120, desc: "2 بروست + 1 عيش + 1 تومية + 1 بطاطس" },
      { name: "وجبة فرد XL", price: 160, desc: "3 بروست + 1 عيش + 1 تومية + 1 بطاطس + 1 كولسلو" },
      { name: "Double meal", price: 210, desc: "4 بروست + 2 عيش + 1 تومية + 1 بطاطس + 1 كولسلو" },
      { name: "Friends meal", price: 350, desc: "7 بروست + 1 بطاطس عائلي + 3 عيش + تومية + كولسلو" },
      { name: "Super Friends meal", price: 450, desc: "9 بروست + 4 عيش + 1 تومية + 1 بطاطس عائلي + 1 كولسلو + 1 رز + لتر كولا" },
      { name: "Family meal", price: 580, desc: "12 بروست + 3 تومية + 1 بطاطس عائلي + 2 كولسلو + 2 رز + لتر كولا", badge: "👨‍👩‍👧‍👦 الأكثر طلباً" },
      { name: "Family XL Meal", price: 770, desc: "15 بروست + 8 عيش + 4 تومية + بطاطس عائلي + 4 كولسلو + 3 رز + لتر كولا" },
      { name: "Mix fry", price: 170, desc: "2 بروست + 3 ستريبس + 2 عيش + 1 تومية + 1 بطاطس" }
    ]
  },
  {
    id: "extras",
    name: "الإضافات",
    icon: "🍟",
    items: [
      { name: "باكت بطاطس فرد", price: 15 },
      { name: "باكت بطاطس عائلي", price: 25 },
      { name: "كول سلو", price: 20 },
      { name: "تومية", price: 15 },
      { name: "صوصات", price: 20 },
      { name: "موزاريلا ستيكس", price: 15 },
      { name: "هاليبينو", price: 10 },
      { name: "خبز", price: 5 }
    ]
  },
  {
    id: "drinks",
    name: "المشروبات",
    icon: "🥤",
    items: [
      { name: "كانز", price: 25 },
      { name: "عصير", price: 15 },
      { name: "مياه", price: 10 }
    ]
  }
];

// --------------------------------------------------------------------------
// 2. DOM Elements Selection
// --------------------------------------------------------------------------
const splashEl = document.getElementById('splash');
const pageList = document.getElementById('page-list');
const pageCat = document.getElementById('page-cat');
const categoriesGrid = document.getElementById('categories-grid');
const catNameEl = document.getElementById('cat-name');
const catDescEl = document.getElementById('cat-desc');
const catItemsCountEl = document.getElementById('cat-items-count');
const catIconHaloEl = document.getElementById('cat-icon-halo');
const crumbCatNameEl = document.getElementById('crumb-cat-name');
const crumbHomeEl = document.getElementById('crumb-home');
const catItemsCountTextEl = document.getElementById('cat-items-count-text');
const catQuickTabsEl = document.getElementById('cat-quick-tabs');
const itemsEl = document.getElementById('items');
const dualHeadWrap = document.getElementById('dual-head-wrap');
const backBtn = document.getElementById('back-btn');
const backBtnInline = document.getElementById('back-btn-inline');
const brandHome = document.getElementById('brand-home');
const menuSearch = document.getElementById('menu-search');
const clearSearch = document.getElementById('clear-search');
const searchResultsWrap = document.getElementById('search-results-wrap');
const searchItemsEl = document.getElementById('search-items');
const resultsCountEl = document.getElementById('results-count');
const categoriesWrap = document.getElementById('categories-wrap');
const embersEl = document.getElementById('embers');
const scrollTopBtn = document.getElementById('scroll-top-btn');
const btnShare = document.getElementById('btn-share');
const toastEl = document.getElementById('toast');

// Custom Appetizing Taglines for Categories
const CATEGORY_TAGLINES = {
  "shawarma-sandwich": "أشهى ساندوتشات الشاورما السوري والفرنساوي بتتبيلة تيمو الخاصة وثومية أصلية",
  "shawarma-meals": "وجبات شاورما عائلية وسوبر متكاملة مع البطاطس والثومية والمخلل والعيش المحمص",
  "gharby": "تشكيلة الساندوتشات الغربية اللذيذة: زنجر، كرسبي، شيش، وفاهيتا بالعيش السوري والفرنساوي",
  "gharby-meals": "وجبات غربي مشبعة تقدم ساخنة مع الأرز والبطاطس المقرمشة وألذ الصصوصات",
  "mashawy": "مشويات على الفحم بتتبيلة تيمو السرية، فراخ مشوية طازجة وكفتة بلدي ممتازة",
  "hawawshy": "حواوشي بلدي وسوري على أصوله بميكس اللحوم المتبلة والجبنة السايحة",
  "temo-burger": "سلسلة برجر Temo الأسطورية بأحجام عملاقة مع الستريبس والموزاريلا ستيكس",
  "burger": "برجر لحم بقري صافي 100% مشوي على اللهب مع الجبنة الشيدر والصوصات الخاصة",
  "kaiser": "ساندوتشات كايزر سريعة وشهية من الكريسبي والزنجر والشيش والفاهيتا",
  "crepe": "كريب فرنسي مقرمش محشو بألذ قطع الدجاج واللحوم ومكس الجبن الموتزاريلا",
  "broast": "قطع دجاج بروست مقرمشة على الطريقة الخاصة مع بطاطس ذهبية وثومية وعيش",
  "pizza": "بيتزا إيطالية بعجينة هشة وخفيفة مخبوزة طازجة مع أشهى المكونات ومكس الجبن",
  "fatta": "فتة أرز بسمتي بالخلطة الخاصة مع الشاورما أو الفاهيتا وصوص الثومية",
  "drinks": "مشروبات غازية باردة وعصائر فريش ومياه مثلجة لإنعاش وجبتك"
};

// --------------------------------------------------------------------------
// 3. Render Categories Grid
// --------------------------------------------------------------------------
function renderCategories() {
  categoriesGrid.innerHTML = '';
  CATEGORIES.forEach((cat, index) => {
    const card = document.createElement('a');
    card.className = 'cat-card glass-card';
    card.href = `#${cat.id}`;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `فتح قسم ${cat.name}`);
    card.style.animationDelay = `${index * 0.04}s`;

    card.innerHTML = `
      <div class="cat-card-main">
        <div class="cat-icon-badge" aria-hidden="true">${cat.icon || '🍽️'}</div>
        <div class="cat-meta">
          <span class="name">${cat.name}</span>
          <span class="items-count">${cat.items.length} أصناف</span>
        </div>
      </div>
      <span class="arrow" aria-hidden="true">‹</span>
    `;

    card.addEventListener('click', (ev) => {
      ev.preventDefault();
      showCategory(cat.id, true);
    });

    categoriesGrid.appendChild(card);
  });
}

// --------------------------------------------------------------------------
// 4. View Switching & Category Details
// --------------------------------------------------------------------------
function renderCategoryQuickTabs(activeId) {
  if (!catQuickTabsEl) return;
  catQuickTabsEl.innerHTML = '';

  CATEGORIES.forEach(cat => {
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = `quick-cat-tab ${cat.id === activeId ? 'active' : ''}`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', cat.id === activeId ? 'true' : 'false');
    tab.setAttribute('aria-label', `الانتقال لقسم ${cat.name}`);
    tab.innerHTML = `
      <span class="tab-icon" aria-hidden="true">${cat.icon || '🍽️'}</span>
      <span class="tab-name">${cat.name}</span>
    `;

    tab.addEventListener('click', () => {
      if (cat.id !== activeId) {
        showCategory(cat.id);
      }
    });

    catQuickTabsEl.appendChild(tab);

    if (cat.id === activeId) {
      setTimeout(() => {
        tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }, 60);
    }
  });
}

function showCategory(id, pushHistory = true) {
  const cat = CATEGORIES.find(c => c.id === id);
  if (!cat) return;

  // Reset category items container
  itemsEl.innerHTML = '';
  dualHeadWrap.innerHTML = '';

  // Update Category Header
  catNameEl.textContent = cat.name;
  if (crumbCatNameEl) crumbCatNameEl.textContent = cat.name;
  if (catIconHaloEl) catIconHaloEl.textContent = cat.icon || '🍽️';
  if (catItemsCountTextEl) {
    catItemsCountTextEl.textContent = `${cat.items.length} أصناف متوفرة`;
  } else if (catItemsCountEl) {
    catItemsCountEl.textContent = `${cat.items.length} أصناف`;
  }

  const customDesc = CATEGORY_TAGLINES[cat.id];
  if (customDesc) {
    catDescEl.textContent = customDesc + (cat.dual ? ' • الأسعار محددة وفق الحجم (سوري / فرنساوي)' : '');
  } else {
    catDescEl.textContent = cat.dual 
      ? 'الأسعار محددة وفق الحجم (سوري / فرنساوي) بالجنيه المصري' 
      : 'جميع الأسعار بالجنيه المصري (ج.م)';
  }

  // Render & highlight quick category tabs
  renderCategoryQuickTabs(cat.id);

  // If Dual-priced Category (e.g. القسم الغربي)
  if (cat.dual) {
    const head = document.createElement('div');
    head.className = 'dual-head';
    head.innerHTML = `
      <span>الصنف</span>
      <span class="cols">
        <span>${cat.col1}</span>
        <span>${cat.col2}</span>
      </span>
    `;
    dualHeadWrap.appendChild(head);
  }

  // Render Category Items with Staggered Fade-in Animation
  cat.items.forEach((item, idx) => {
    const row = document.createElement('div');
    row.className = 'item-row';
    row.style.animationDelay = `${idx * 0.035}s`;

    let priceHtml = '';
    if (cat.dual) {
      priceHtml = `
        <div class="dual-price-wrap">
          <div class="dual-price-box">
            ${item.price1}
            <span>${cat.col1}</span>
          </div>
          <div class="dual-price-box">
            ${item.price2}
            <span>${cat.col2}</span>
          </div>
        </div>
      `;
    } else {
      priceHtml = `
        <div class="price-tag flame-text">
          <span>${item.price}</span>
          <span class="price-currency">ج.م</span>
        </div>
      `;
    }

    const descHtml = item.desc ? `<p class="item-desc">${item.desc}</p>` : '';
    const badgeHtml = item.badge ? `<span class="item-badge-special">${item.badge}</span>` : '';

    row.innerHTML = `
      <div class="item-info">
        <h3 class="item-name">${item.name} ${badgeHtml}</h3>
        ${descHtml}
      </div>
      ${priceHtml}
    `;

    itemsEl.appendChild(row);
  });

  // Switch Active Page
  pageList.classList.remove('show');
  pageCat.classList.add('show');
  backBtn.classList.add('visible');

  // Clear search query if open
  if (menuSearch.value.trim().length > 0) {
    clearSearchInput();
  }

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Push state for mobile back button support
  if (pushHistory) {
    history.pushState({ view: 'cat', id: id }, '', `#${id}`);
  }
}

function showList(pushHistory = true) {
  pageCat.classList.remove('show');
  pageList.classList.add('show');
  backBtn.classList.remove('visible');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (pushHistory) {
    history.pushState({ view: 'list' }, '', '#');
  }
}

// --------------------------------------------------------------------------
// 5. Client-Side Instant Menu Search
// --------------------------------------------------------------------------
function handleSearch() {
  const query = menuSearch.value.trim().toLowerCase();

  if (query.length === 0) {
    clearSearchInput();
    return;
  }

  clearSearch.style.display = 'flex';
  searchResultsWrap.style.display = 'block';
  categoriesWrap.style.display = 'none';

  // Search across all items and categories
  const matches = [];
  CATEGORIES.forEach(cat => {
    cat.items.forEach(item => {
      const matchName = item.name.toLowerCase().includes(query);
      const matchDesc = item.desc ? item.desc.toLowerCase().includes(query) : false;
      const matchCat = cat.name.toLowerCase().includes(query);

      if (matchName || matchDesc || matchCat) {
        matches.push({ item, cat });
      }
    });
  });

  resultsCountEl.textContent = matches.length;
  searchItemsEl.innerHTML = '';

  if (matches.length === 0) {
    searchItemsEl.innerHTML = `
      <div class="no-results glass-card">
        <span class="no-results-icon">🔍</span>
        <p>لا توجد وجبات أو أصناف مطابقة لكلمة "<strong>${query}</strong>"</p>
        <span style="font-size:12.5px;color:var(--text-dim);margin-top:6px;display:block;">جرب البحث بكلمة أخرى مثل: شاورما، زنجر، بروست، كفتة</span>
      </div>
    `;
    return;
  }

  matches.forEach(({ item, cat }, idx) => {
    const row = document.createElement('div');
    row.className = 'item-row';
    row.style.animationDelay = `${idx * 0.025}s`;

    let priceHtml = '';
    if (cat.dual) {
      priceHtml = `
        <div class="dual-price-wrap">
          <div class="dual-price-box">
            ${item.price1}
            <span>${cat.col1}</span>
          </div>
          <div class="dual-price-box">
            ${item.price2}
            <span>${cat.col2}</span>
          </div>
        </div>
      `;
    } else {
      priceHtml = `
        <div class="price-tag flame-text">
          <span>${item.price}</span>
          <span class="price-currency">ج.م</span>
        </div>
      `;
    }

    const descHtml = item.desc ? `<p class="item-desc">${item.desc}</p>` : '';
    const badgeHtml = item.badge ? `<span class="item-badge-special">${item.badge}</span>` : '';

    row.innerHTML = `
      <div class="item-info">
        <span class="item-badge-cat">${cat.name}</span>
        <h3 class="item-name">${item.name} ${badgeHtml}</h3>
        ${descHtml}
      </div>
      ${priceHtml}
    `;

    searchItemsEl.appendChild(row);
  });
}

function clearSearchInput() {
  menuSearch.value = '';
  clearSearch.style.display = 'none';
  searchResultsWrap.style.display = 'none';
  categoriesWrap.style.display = 'block';
  searchItemsEl.innerHTML = '';
}

// --------------------------------------------------------------------------
// 6. Toast Notification Helper
// --------------------------------------------------------------------------
let toastTimeout;
function showToast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2600);
}

// --------------------------------------------------------------------------
// 7. Optimized Embers Particle Animation
// --------------------------------------------------------------------------
function initEmbers() {
  if (!embersEl) return;
  const count = window.innerWidth < 600 ? 18 : 28;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const ember = document.createElement('div');
    ember.className = 'ember';

    const size = (Math.random() * 3 + 2).toFixed(1);
    const left = (Math.random() * 100).toFixed(2);
    const duration = (Math.random() * 6 + 5).toFixed(2);
    const delay = (Math.random() * 8).toFixed(2);
    const drift = ((Math.random() - 0.5) * 80).toFixed(1) + 'px';

    // Color variety: gold, flame orange, ember ruby
    const colors = [
      'rgba(255, 224, 102, 0.85)',
      'rgba(255, 106, 0, 0.9)',
      'rgba(255, 158, 0, 0.85)',
      'rgba(217, 4, 41, 0.75)'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    ember.style.width = `${size}px`;
    ember.style.height = `${size}px`;
    ember.style.left = `${left}%`;
    ember.style.backgroundColor = color;
    ember.style.boxShadow = `0 0 ${size * 3}px ${color}`;
    ember.style.setProperty('--drift', drift);
    ember.style.animationDuration = `${duration}s`;
    ember.style.animationDelay = `${delay}s`;

    fragment.appendChild(ember);
  }

  embersEl.appendChild(fragment);
}

// --------------------------------------------------------------------------
// 8. Event Listeners & PWA Initialization
// --------------------------------------------------------------------------
function initEvents() {
  // Back button listeners
  backBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    showList();
  });

  backBtnInline.addEventListener('click', (ev) => {
    ev.preventDefault();
    showList();
  });

  if (crumbHomeEl) {
    crumbHomeEl.addEventListener('click', (ev) => {
      ev.preventDefault();
      showList();
    });
  }

  brandHome.addEventListener('click', (ev) => {
    ev.preventDefault();
    showList();
  });

  // Hero interactive jump badges
  const menuJumpBadge = document.querySelector('.menu-jump-badge');
  if (menuJumpBadge) {
    menuJumpBadge.addEventListener('click', (ev) => {
      ev.preventDefault();
      clearSearchInput();
      const catWrap = document.getElementById('categories-wrap');
      if (catWrap) {
        catWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  const reviewJumpBadge = document.querySelector('.review-jump-badge');
  if (reviewJumpBadge) {
    reviewJumpBadge.addEventListener('click', (ev) => {
      ev.preventDefault();
      const revSec = document.getElementById('reviews-section');
      if (revSec) {
        revSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Search input listeners
  menuSearch.addEventListener('input', handleSearch);
  clearSearch.addEventListener('click', () => {
    clearSearchInput();
    menuSearch.focus();
  });

  // Scroll To Top Button
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 280) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Share Menu Button -> Opens WhatsApp to share menu link with anyone
  if (btnShare) {
    function getWhatsAppShareLink() {
      const shareUrl = window.location.href;
      const shareText = 'استعرض منيو وأسعار مطعم Temo (Hot Which) أونلاين:\n' + shareUrl;
      return 'https://api.whatsapp.com/send?text=' + encodeURIComponent(shareText);
    }

    // Set dynamic URL on load
    btnShare.href = getWhatsAppShareLink();

    btnShare.addEventListener('click', (e) => {
      // Refresh URL to current state before opening
      btnShare.href = getWhatsAppShareLink();
      showToast('جارٍ فتح واتساب لمشاركة المنيو... 💬');
    });
  }

  // Mobile Back Button Support via popstate
  window.addEventListener('popstate', (event) => {
    if (event.state && event.state.view === 'cat') {
      showCategory(event.state.id, false);
    } else {
      showList(false);
    }
  });

  // Handle URL Hash if opened directly (e.g., #temo-burger)
  if (window.location.hash) {
    const catId = window.location.hash.replace('#', '');
    if (CATEGORIES.some(c => c.id === catId)) {
      showCategory(catId, false);
    }
  }

  // Dismiss Splash Screen on Page Load
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (splashEl) {
        splashEl.classList.add('hide');
      }
    }, 900);
  });

  // Register PWA Service Worker for Offline Support (Only on HTTP/HTTPS to prevent RESULT_CODE_KILLED_BAD_MESSAGE on file://)
  const isHttpOrHttps = window.location.protocol === 'http:' || window.location.protocol === 'https:';
  if ('serviceWorker' in navigator && isHttpOrHttps) {
    window.addEventListener('load', () => {
      try {
        navigator.serviceWorker.register('./sw.js')
          .then((reg) => {
            console.log('Temo PWA Service Worker registered successfully:', reg.scope);
          })
          .catch((err) => {
            console.warn('Service Worker registration skipped or failed:', err);
          });
      } catch (err) {
        console.warn('Service Worker registration error:', err);
      }
    });
  }
}

// --------------------------------------------------------------------------
// 9. Customer Reviews Management (Dual: Cloud Firestore + LocalStorage Fallback)
// --------------------------------------------------------------------------

// ⚙️ إعدادات فايربيس (Firebase Config)
// يمكنك استبدال القيم أدناه ببيانات مشروعك من Firebase Console لتفعيل التزامن السحابي الحقيقي بين جميع الأجهزة
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

let firestoreDb = null;
let isFirebaseActive = false;
let cloudReviewsCache = null;

const DEFAULT_REVIEWS = [
  {
    id: 'rev-1',
    name: 'محمود الشريف',
    rating: 5,
    date: 'منذ 3 أيام',
    tag: 'زبون دائم',
    meal: 'وجبة شاورما هوت ويتش',
    comment: 'شاورما هوت ويتش بجد ملهاش حل، التتبيلة مظبوطة جداً والتومية ممتازة.. من أحسن مطاعم الشاورما اللي جربتها والعيش طازة.'
  },
  {
    id: 'rev-2',
    name: 'سارة العوضي',
    rating: 5,
    date: 'منذ أسبوع',
    tag: 'تجربة موثقة',
    meal: 'Temo tower',
    comment: 'برجر Temo Tower حجمه جبار وطعم الستربس كرسبي وسخن ونظيف جداً، ومبسوطين جداً من المعاملة وسرعة التحضير.'
  },
  {
    id: 'rev-3',
    name: 'كابتن إبراهيم',
    rating: 5,
    date: 'منذ 5 أيام',
    tag: 'زبون دائم',
    meal: 'Family meal بروست',
    comment: 'وجبة الـ Family Meal بروست تكفي وزيادة، الفراخ مستوية من جوه وكرانشي من بره والرز والكولسلو فريش.. عاش يا تيمو.'
  },
  {
    id: 'rev-4',
    name: 'عمر ناصر',
    rating: 5,
    date: 'منذ أسبوعين',
    tag: 'تجربة موثقة',
    meal: 'فرخة كاملة مشوي فحم + ريزو',
    comment: 'جربت الفراخ المشوية والكفتة على الفحم والريزو، الطعم فوق الوصف والأسعار ممتازة مقارنة بالجودة والكمية الكبيرة.'
  }
];

function formatFirebaseDate(timestamp) {
  if (!timestamp) return 'الآن';
  try {
    const d = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diffSec = Math.floor((now - d) / 1000);
    if (diffSec < 60) return 'الآن';
    if (diffSec < 3600) return `منذ ${Math.floor(diffSec / 60)} دقيقة`;
    if (diffSec < 86400) return `منذ ${Math.floor(diffSec / 3600)} ساعة`;
    if (diffSec < 604800) return `منذ ${Math.floor(diffSec / 86400)} أيام`;
    return d.toLocaleDateString('ar-EG', { day: 'numeric', month: 'short' });
  } catch (e) {
    return 'مؤخراً';
  }
}

function initFirebase() {
  try {
    const hasValidKey = FIREBASE_CONFIG && 
                         FIREBASE_CONFIG.apiKey && 
                         !FIREBASE_CONFIG.apiKey.includes('YOUR_') &&
                         FIREBASE_CONFIG.projectId &&
                         !FIREBASE_CONFIG.projectId.includes('YOUR_');

    if (typeof firebase !== 'undefined' && hasValidKey) {
      if (!firebase.apps.length) {
        firebase.initializeApp(FIREBASE_CONFIG);
      }
      firestoreDb = firebase.firestore();
      isFirebaseActive = true;
      console.log('🔥 Firebase Firestore connected successfully.');
      listenToCloudReviews();
    } else {
      console.info('ℹ️ Reviews running in Local Fallback mode (LocalStorage).');
    }
  } catch (err) {
    console.warn('Firebase initialization skipped or failed:', err);
    isFirebaseActive = false;
    firestoreDb = null;
  }
}

function listenToCloudReviews() {
  if (!firestoreDb) return;
  try {
    firestoreDb.collection('temo_reviews')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        const cloudList = [];
        snapshot.forEach((doc) => {
          const d = doc.data();
          cloudList.push({
            id: doc.id,
            name: d.name || 'عميل المطعم',
            rating: Number(d.rating) || 5,
            date: formatFirebaseDate(d.createdAt),
            tag: d.tag || 'تجربة موثقة',
            meal: d.meal || undefined,
            comment: d.comment || '',
            isCloud: true
          });
        });
        cloudReviewsCache = [...cloudList, ...DEFAULT_REVIEWS];
        renderReviews();
      }, (err) => {
        console.warn('Firestore snapshot listener warning:', err);
      });
  } catch (e) {
    console.warn('Could not attach Firestore listener:', e);
  }
}

function getLocalReviews() {
  try {
    const saved = localStorage.getItem('temo_reviews');
    if (saved) {
      let parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const cleaned = parsed.filter(r => r && r.comment && !r.comment.includes('خهعغ') && !r.name.includes('خهعغ'));
        if (cleaned.length !== parsed.length) {
          localStorage.setItem('temo_reviews', JSON.stringify(cleaned));
        }
        return cleaned.length > 0 ? cleaned : DEFAULT_REVIEWS;
      }
    }
  } catch (e) {
    console.warn('Could not read reviews from localStorage:', e);
  }
  return DEFAULT_REVIEWS;
}

function getReviews() {
  if (isFirebaseActive && cloudReviewsCache !== null) {
    return cloudReviewsCache;
  }
  return getLocalReviews();
}

async function saveReview(newRev) {
  if (isFirebaseActive && firestoreDb) {
    try {
      await firestoreDb.collection('temo_reviews').add({
        name: newRev.name,
        rating: newRev.rating,
        meal: newRev.meal || '',
        comment: newRev.comment,
        tag: 'تجربة جديدة',
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      showToast('شكراً لك! تم نشر تقييمك بنجاح على السحابة ⭐');
      return;
    } catch (err) {
      console.warn('Failed to save to Firestore, falling back to localStorage:', err);
    }
  }

  // Fallback to localStorage
  const current = getLocalReviews();
  const updated = [newRev, ...current];
  try {
    localStorage.setItem('temo_reviews', JSON.stringify(updated));
  } catch (e) {
    console.warn('Could not save review to localStorage:', e);
  }
  renderReviews();
  showToast('شكراً لك! تم نشر تقييمك بنجاح ⭐');
}

async function deleteReview(id) {
  if (isFirebaseActive && firestoreDb && !id.startsWith('rev-')) {
    try {
      await firestoreDb.collection('temo_reviews').doc(id).delete();
      showToast('تم حذف التقييم بنجاح 🗑️');
      return;
    } catch (err) {
      console.warn('Failed to delete from Firestore, falling back to localStorage:', err);
    }
  }

  const current = getLocalReviews();
  const updated = current.filter(r => r.id !== id);
  try {
    localStorage.setItem('temo_reviews', JSON.stringify(updated));
  } catch (e) {
    console.warn('Could not delete review from localStorage:', e);
  }
  renderReviews();
  showToast('تم حذف التقييم بنجاح 🗑️');
}

function renderReviews() {
  const reviewsGrid = document.getElementById('reviews-grid');
  if (!reviewsGrid) return;

  const reviews = getReviews();
  reviewsGrid.innerHTML = '';

  reviews.forEach((rev, idx) => {
    const card = document.createElement('article');
    card.className = 'review-card glass-card';
    card.style.animationDelay = `${idx * 0.05}s`;

    // Extract first letter for avatar
    const initial = rev.name.trim().charAt(0) || 'ت';

    // Generate Stars SVG
    let starsHtml = '';
    for (let s = 1; s <= 5; s++) {
      const isFilled = s <= rev.rating;
      starsHtml += `
        <svg class="star-icon ${isFilled ? 'fill' : 'empty'}" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      `;
    }

    const mealHtml = rev.meal 
      ? `<div class="review-meal-badge"><span>طلب:</span> <strong>${rev.meal}</strong></div>` 
      : '';

    const isUserReview = !['rev-1', 'rev-2', 'rev-3', 'rev-4'].includes(rev.id);
    const deleteBtnHtml = isUserReview ? `
      <button type="button" class="delete-review-btn" data-id="${rev.id}" title="حذف هذا التقييم" aria-label="حذف التقييم">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
        <span>حذف</span>
      </button>
    ` : '';

    card.innerHTML = `
      <div class="review-card-head">
        <div class="reviewer-profile">
          <div class="reviewer-avatar" aria-hidden="true">${initial}</div>
          <div class="reviewer-details">
            <span class="reviewer-name">${rev.name}</span>
            <span class="reviewer-tag">${rev.tag || 'تجربة موثقة'}</span>
          </div>
        </div>
        <div class="review-meta-actions">
          <span class="review-date">${rev.date || 'مؤخراً'}</span>
          ${deleteBtnHtml}
        </div>
      </div>

      <div class="review-rating-stars" aria-label="تقييم ${rev.rating} من 5">
        ${starsHtml}
      </div>

      <p class="review-comment">"${rev.comment}"</p>

      ${mealHtml}
    `;

    if (isUserReview) {
      const delBtn = card.querySelector('.delete-review-btn');
      if (delBtn) {
        delBtn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          deleteReview(rev.id);
        });
      }
    }

    reviewsGrid.appendChild(card);
  });
}

function initReviewModal() {
  const reviewModal = document.getElementById('review-modal');
  const openModalBtn = document.getElementById('open-review-modal-btn');
  const closeModalBtn = document.getElementById('close-review-modal-btn');
  const reviewForm = document.getElementById('review-form');
  const starBtns = document.querySelectorAll('.star-select-btn');
  const ratingInput = document.getElementById('review-rating-value');

  if (!reviewModal || !openModalBtn) return;

  function openModal() {
    reviewModal.classList.add('show');
    reviewModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const firstInput = document.getElementById('reviewer-name');
    if (firstInput) firstInput.focus();
  }

  function closeModal() {
    reviewModal.classList.remove('show');
    reviewModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openModalBtn.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

  // Close on backdrop click
  reviewModal.addEventListener('click', (ev) => {
    if (ev.target === reviewModal) {
      closeModal();
    }
  });

  // Close on Escape key
  window.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape' && reviewModal.classList.contains('show')) {
      closeModal();
    }
  });

  // Interactive Star Selection
  starBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedRating = parseInt(btn.getAttribute('data-rating'), 10);
      ratingInput.value = selectedRating;

      starBtns.forEach(b => {
        const r = parseInt(b.getAttribute('data-rating'), 10);
        if (r <= selectedRating) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
    });
  });

  // Review Form Submit
  if (reviewForm) {
    reviewForm.addEventListener('submit', (ev) => {
      ev.preventDefault();

      const nameInput = document.getElementById('reviewer-name');
      const mealInput = document.getElementById('review-meal');
      const commentInput = document.getElementById('review-comment');

      const name = nameInput.value.trim();
      const meal = mealInput.value.trim();
      const comment = commentInput.value.trim();
      const rating = parseInt(ratingInput.value, 10) || 5;

      if (!name || !comment) {
        showToast('يرجى ملء جميع الحقول المطلوبة');
        return;
      }

      const newReview = {
        id: 'rev-' + Date.now(),
        name: name,
        rating: rating,
        date: 'الآن',
        tag: 'تجربة جديدة',
        meal: meal || undefined,
        comment: comment
      };

      saveReview(newReview);
      closeModal();
      reviewForm.reset();

      // Reset stars to 5
      ratingInput.value = 5;
      starBtns.forEach(b => b.classList.add('active'));
    });
  }
}

// --------------------------------------------------------------------------
// 10. Temo AI Assistant Engine (Conversational NLP & Menu Consultant)
// --------------------------------------------------------------------------
function initTemoAI() {
  const fabBtn = document.getElementById('ai-fab-btn');
  const chatWindow = document.getElementById('ai-chat-window');
  const closeBtn = document.getElementById('ai-close-btn');
  const clearBtn = document.getElementById('ai-clear-btn');
  const chatForm = document.getElementById('ai-chat-form');
  const chatInput = document.getElementById('ai-user-input');
  const chatMessages = document.getElementById('ai-chat-messages');
  const chips = document.querySelectorAll('.ai-chip');
  const fabBadge = document.getElementById('ai-fab-badge');

  if (!fabBtn || !chatWindow || !chatMessages) return;

  let isChatOpen = false;
  let hasWelcomed = false;

  // Toggle chat window
  function openChat() {
    chatWindow.classList.add('show');
    chatWindow.setAttribute('aria-hidden', 'false');
    isChatOpen = true;
    if (fabBadge) fabBadge.style.display = 'none';

    if (!hasWelcomed) {
      renderWelcomeMessage();
      hasWelcomed = true;
    }
    setTimeout(() => {
      if (chatInput) chatInput.focus();
    }, 150);
  }

  function closeChat() {
    chatWindow.classList.remove('show');
    chatWindow.setAttribute('aria-hidden', 'true');
    isChatOpen = false;
  }

  fabBtn.addEventListener('click', () => {
    if (isChatOpen) closeChat();
    else openChat();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeChat);

  // Close on Escape
  window.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape' && isChatOpen) {
      closeChat();
    }
  });

  // Clear chat
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      chatMessages.innerHTML = '';
      renderWelcomeMessage();
      showToast('تم بدء محادثة جديدة مع شيف تيمو 👨‍🍳');
    });
  }

  // Quick Chips
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const q = chip.getAttribute('data-query');
      if (!q) return;
      handleUserQuery(q);
    });
  });

  // Form submit
  if (chatForm) {
    chatForm.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const text = chatInput.value.trim();
      if (!text) return;
      chatInput.value = '';
      handleUserQuery(text);
    });
  }

  function renderWelcomeMessage() {
    const welcomeHtml = `
      <div class="ai-msg ai-msg-bot">
        👋 أهلاً بيك في مطعم <strong>Temo (Hot Which)</strong>!<br>
        أنا <strong>شيف تيمو الذكي 👨‍🍳🔥</strong>، مستشارك الخاص لاختيار ألذ وجبة على ذوقك وميزانيتك.<br><br>
        تقدر تسألني عن أي صنف أو سعر، أو ميزانيتك، أو تضغط على أي اقتراح سريع في الأسفل! ⬇️
      </div>
    `;
    chatMessages.insertAdjacentHTML('beforeend', welcomeHtml);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function appendUserMessage(text) {
    const msgEl = document.createElement('div');
    msgEl.className = 'ai-msg ai-msg-user';
    msgEl.textContent = text;
    chatMessages.appendChild(msgEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function showTypingIndicator() {
    const typingEl = document.createElement('div');
    typingEl.className = 'ai-msg ai-msg-bot ai-typing';
    typingEl.id = 'ai-typing-indicator';
    typingEl.innerHTML = `
      <span class="ai-typing-dot"></span>
      <span class="ai-typing-dot"></span>
      <span class="ai-typing-dot"></span>
    `;
    chatMessages.appendChild(typingEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return typingEl;
  }

  function removeTypingIndicator() {
    const typingEl = document.getElementById('ai-typing-indicator');
    if (typingEl) typingEl.remove();
  }

  function appendBotMessage(html) {
    const msgEl = document.createElement('div');
    msgEl.className = 'ai-msg ai-msg-bot';
    msgEl.innerHTML = html;
    chatMessages.appendChild(msgEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function handleUserQuery(userQuery) {
    appendUserMessage(userQuery);
    showTypingIndicator();

    // Natural processing delay
    setTimeout(() => {
      removeTypingIndicator();
      const responseHtml = generateAiResponse(userQuery);
      appendBotMessage(responseHtml);
    }, 450);
  }

  // Knowledge base helper: Flatten all items
  function getAllMenuItems() {
    const all = [];
    CATEGORIES.forEach(cat => {
      cat.items.forEach(it => {
        all.push({
          ...it,
          catId: cat.id,
          catName: cat.name
        });
      });
    });
    return all;
  }

  // Conversational response generator
  function generateAiResponse(rawQuery) {
    const q = rawQuery.toLowerCase().trim();
    const allItems = getAllMenuItems();

    // 1. Greetings
    if (/^(أهلاً|اهلا|مرحبا|سلام|صباح|مساء|هاي|ازيك|ازي حضرتك|السلام عليكم|hello|hi)/i.test(q)) {
      return `
        أهلاً وسهلاً بيك يا فندم في مطعم <strong>Temo</strong>! 👨‍🍳✨<br>
        أنا هنا لمساعدتك تختار أشهى أكلة. تحب تقولي ميزانيتك كام، ولا أرشحلك وجباتنا الأكثر طلباً؟ 🔥
        <div class="ai-msg-actions">
          <a href="#categories-wrap" class="ai-msg-action-link" onclick="document.getElementById('ai-chat-window').classList.remove('show')">استعراض المنيو 📖</a>
        </div>
      `;
    }

    // 2. Budget matching (e.g. "معايا 100", "في حدود 150", "تحت 80", "50 جنيه")
    const budgetMatch = q.match(/(\d+)\s*(ج|جنيه|ج\.م)?/);
    const hasBudgetIntent = /(ميزاني|معايا|معي|بـ|تحت|أقل|اقل|حدود|جنيه|فلوس)/i.test(q);
    if (budgetMatch && (hasBudgetIntent || (!isNaN(parseInt(budgetMatch[1])) && parseInt(budgetMatch[1]) >= 20 && parseInt(budgetMatch[1]) <= 600))) {
      const budget = parseInt(budgetMatch[1], 10);
      if (budget >= 20) {
        const affordable = allItems.filter(it => {
          const price = it.price || it.price1 || 0;
          return price > 0 && price <= budget;
        });

        if (affordable.length > 0) {
          // Sort by price descending to get best value within budget
          affordable.sort((a, b) => (b.price || b.price1 || 0) - (a.price || a.price1 || 0));
          const topPicks = affordable.slice(0, 4);

          let listHtml = topPicks.map(it => {
            const p = it.price ? `${it.price} ج.م` : `سوري ${it.price1} ج.م / فرنساوي ${it.price2} ج.م`;
            return `• <strong>${it.name}</strong> (${it.catName}) <span class="ai-price-pill">${p}</span>`;
          }).join('<br>');

          return `
            بميزانية <span class="ai-price-pill">${budget} ج.م</span>، دي أفضل اقتراحات شيف تيمو ليك: 😋🔥<br><br>
            ${listHtml}<br><br>
            تحب تطلب أي صنف منهم؟
            <div class="ai-msg-actions">
              <a href="https://wa.me/201034645003?text=${encodeURIComponent('مرحبا، اريد طلب أوردر بميزانية ' + budget + ' ج.م')}" target="_blank" rel="noopener noreferrer" class="ai-msg-action-btn">📲 اطلب الآن عبر واتساب</a>
            </div>
          `;
        } else {
          return `
            أقل صنف مميز عندنا هو ساندوتش بطاطس سوري بـ <span class="ai-price-pill">30 ج.م</span> أو حواوشي بلدي بـ <span class="ai-price-pill">50 ج.م</span> 🌯!
          `;
        }
      }
    }

    // 3. Most Popular / Signature Recommendations
    if (/(أكثر طلبا|اكثر طلبا|أكتر طلبا|اكتر طلبا|رشح|ترشيح|أحسن|احسن|أفضل|افضل|مميز|مميزة|أشهر|اشهر|signature)/i.test(q)) {
      return `
        منيو <strong>Temo (Hot Which)</strong> مليان أصناف جبارة، بس دي الوجبات الأكثر طلباً وإعجاباً بشهادة عملائنا: ⭐🔥<br><br>
        • 🌯 <strong>وجبة شاورما هوت ويتش</strong> <span class="ai-price-pill">150 ج.م</span> (الوجبة الرسمية بتتبيلة سرية خاصة)<br>
        • 🍔 <strong>برجر Temo Tower</strong> <span class="ai-price-pill">150 ج.م</span> (ستربس كرسبي سخن مع صوصات غنية)<br>
        • 🍗 <strong>وجبة Family Meal بروست</strong> <span class="ai-price-pill">450 ج.م</span> (8 قطع كرسبي + بطاطس + كولسلو + عيش)<br>
        • 🥩 <strong>فرخة كاملة مشوي فحم</strong> <span class="ai-price-pill">350 ج.م</span> (مشوية على الفحم بتتبيلة لذيذة)<br>
        • 🥟 <strong>حواوشي ميكس لحوم سوري</strong> <span class="ai-price-pill">75 ج.م</span>
        <div class="ai-msg-actions">
          <a href="https://wa.me/201034645003?text=${encodeURIComponent('مرحبا مطعم Temo، اريد طلب إحدى الوجبات الأكثر طلباً')}" target="_blank" rel="noopener noreferrer" class="ai-msg-action-btn">📲 اطلب الأكثر طلباً واتساب</a>
        </div>
      `;
    }

    // 4. Family / Group Meals
    if (/(عيلة|عائلة|عائلي|عائلية|أفراد|افراد|مجموعة|كبير|تكفي|لمة)/i.test(q)) {
      return `
        للمة العيلة والأصحاب، أرشحلك أقوى وجبات توفير وتكفي كل الأفراد: 👨‍👩‍👧‍👦🎉<br><br>
        • 🍗 <strong>وجبة Family Meal بروست</strong> <span class="ai-price-pill">450 ج.م</span> (8 قطع فراخ بروست كرسبي + بطاطس حجم عائلي + كولسلو + عيش)<br>
        • 🥩 <strong>كيلو كفتة مشويات فحم</strong> <span class="ai-price-pill">500 ج.م</span> (أو نص كيلو بـ 250 ج.م)<br>
        • 🍗 <strong>فرخة كاملة مشوية فحم</strong> <span class="ai-price-pill">350 ج.م</span><br>
        • 🌯 <strong>وجبة شاورما عربي سوبر</strong> <span class="ai-price-pill">199 ج.م</span>
        <div class="ai-msg-actions">
          <a href="https://wa.me/201034645003?text=${encodeURIComponent('مرحبا مطعم Temo، اريد الاستفسار عن الوجبات العائلية')}" target="_blank" rel="noopener noreferrer" class="ai-msg-action-btn">📲 طلب وجبة عائلية</a>
        </div>
      `;
    }

    // 5. Burger Queries
    if (/(برجر|burger|تاور|تيمو تاور|ديناميت|سنجل|دبل|تربل)/i.test(q)) {
      return `
        عشاق البرجر ليهم مكانة خاصة في <strong>Temo Burger</strong>! 🍔🔥<br><br>
        • <strong>Single burger</strong>: <span class="ai-price-pill">75 ج.م</span><br>
        • <strong>Double burger</strong>: <span class="ai-price-pill">110 ج.م</span><br>
        • <strong>Triple burger</strong>: <span class="ai-price-pill">140 ج.م</span><br>
        • <strong>Temo Tower</strong>: <span class="ai-price-pill">150 ج.م</span> (دبل: 190 ج.م)<br>
        • <strong>Dynamite burger</strong>: <span class="ai-price-pill">120 ج.م</span><br>
        • <strong>Cone burger</strong>: <span class="ai-price-pill">130 ج.م</span>
        <div class="ai-msg-actions">
          <a href="#cat-temo-burger" class="ai-msg-action-link" onclick="document.getElementById('ai-chat-window').classList.remove('show')">عرض قسم البرجر 🍔</a>
        </div>
      `;
    }

    // 6. Shawarma Queries
    if (/(شاورما|شوارما|shawarma|فتة|فته|ماريا)/i.test(q)) {
      return `
        الشاورما عندنا بتتبيلة خاصة وعيش طازة يومياً! 🌯🔥<br><br>
        <strong>سندوتشات الشاورما:</strong><br>
        • شاورما كبير: <span class="ai-price-pill">100 ج.م</span> | وسط: <span class="ai-price-pill">80 ج.م</span> | فرنساوي: <span class="ai-price-pill">110 ج.م</span><br><br>
        <strong>وجبات الشاورما:</strong><br>
        • وجبة شاورما هوت ويتش المميزة: <span class="ai-price-pill">150 ج.م</span><br>
        • وجبة شاورما عربي سوبر: <span class="ai-price-pill">199 ج.م</span> (سينجل: 125 ج.م)<br>
        • وجبة ماريا: <span class="ai-price-pill">135 ج.م</span> | فتة شاورما: <span class="ai-price-pill">99 ج.م</span>
        <div class="ai-msg-actions">
          <a href="#cat-shawarma-meals" class="ai-msg-action-link" onclick="document.getElementById('ai-chat-window').classList.remove('show')">استعراض وجبات الشاورما 🌯</a>
        </div>
      `;
    }

    // 7. Grills / Mashawy Queries
    if (/(مشويات|مشوي|مشوية|فحم|كفتة|كفته|فراخ مشوية|فرخة)/i.test(q)) {
      return `
        مشويات <strong>Temo</strong> على الفحم الأصلي: 🥩🔥<br><br>
        • <strong>فرخة كاملة مشوية</strong>: <span class="ai-price-pill">350 ج.م</span><br>
        • <strong>نص فرخة</strong>: <span class="ai-price-pill">190 ج.م</span> (ربع صدر: 110 ج.م | ربع ورك: 100 ج.م)<br>
        • <strong>كيلو كفتة مشوي</strong>: <span class="ai-price-pill">500 ج.م</span><br>
        • <strong>نص كيلو كفتة</strong>: <span class="ai-price-pill">250 ج.م</span> | ربع كفتة: <span class="ai-price-pill">125 ج.م</span>
        <div class="ai-msg-actions">
          <a href="#cat-mashawy" class="ai-msg-action-link" onclick="document.getElementById('ai-chat-window').classList.remove('show')">عرض المشويات 🥩</a>
        </div>
      `;
    }

    // 8. Broast Queries
    if (/(بروست|broast|دجاج مقلي|فراخ مقلية|ريزو)/i.test(q)) {
      return `
        البروست في <strong>Temo</strong> كرانشي ومقرمش من بره ومستوي وطري من جوه: 🍗✨<br><br>
        • <strong>وجبة بروست سينجل</strong>: <span class="ai-price-pill">130 ج.م</span><br>
        • <strong>وجبة بروست سوبر</strong>: <span class="ai-price-pill">175 ج.م</span><br>
        • <strong>Family meal بروست</strong>: <span class="ai-price-pill">450 ج.م</span> (8 قطع + بطاطس + كولسلو + عيش)<br>
        • <strong>ريزو ستربس</strong>: <span class="ai-price-pill">60 ج.م</span> (ريزو سادة: 40 ج.م)
        <div class="ai-msg-actions">
          <a href="#cat-broast" class="ai-msg-action-link" onclick="document.getElementById('ai-chat-window').classList.remove('show')">عرض البروست 🍗</a>
        </div>
      `;
    }

    // 9. Hawawshy Queries
    if (/(حواوشي|حواوشى)/i.test(q)) {
      return `
        الحواوشي المظبوط على أصوله: 🥟🔥<br><br>
        • <strong>حواوشي بلدي</strong>: <span class="ai-price-pill">50 ج.م</span><br>
        • <strong>حواوشي سوري</strong>: <span class="ai-price-pill">65 ج.م</span><br>
        • <strong>ميكس لحوم بلدي</strong>: <span class="ai-price-pill">65 ج.م</span><br>
        • <strong>ميكس لحوم سوري</strong>: <span class="ai-price-pill">75 ج.م</span><br>
        • إضافة جبنة: <span class="ai-price-pill">+20 ج.م</span>
      `;
    }

    // 10. Western / Sandwiches (Zinger, Crispy, Fajita, Mexicano)
    if (/(زنجر|كرسبي|فاهيتا|مكسيكانو|سكالوب|سجق|شيش|بطاطس)/i.test(q)) {
      return `
        سندوتشات ووجبات القسم الغربي اللذيذة: 🍟✨<br><br>
        • <strong>زنجر / كرسبي / سكالوب</strong>: سوري <span class="ai-price-pill">70 ج.م</span> | فرنساوي <span class="ai-price-pill">80 ج.م</span> (وجبة: 130 ج.م)<br>
        • <strong>شيش طاووق</strong>: سوري <span class="ai-price-pill">75 ج.م</span> | فرنساوي <span class="ai-price-pill">85 ج.م</span> (وجبة: 150 ج.م)<br>
        • <strong>فاهيتا / مكسيكانو / سجق</strong>: سوري <span class="ai-price-pill">60-70 ج.م</span> | فرنساوي <span class="ai-price-pill">70-85 ج.م</span><br>
        • <strong>بطاطس</strong>: سوري <span class="ai-price-pill">30 ج.م</span> | فرنساوي <span class="ai-price-pill">40 ج.م</span>
        <div class="ai-msg-actions">
          <a href="#cat-gharby" class="ai-msg-action-link" onclick="document.getElementById('ai-chat-window').classList.remove('show')">عرض القسم الغربي 🍟</a>
        </div>
      `;
    }

    // 11. Spicy / Hot
    if (/(سبايسي|حار|شطة|مشطشط|حراق)/i.test(q)) {
      return `
        بتحب الشطة والأكل السبايسي؟ طلبك عندي! 🌶️🔥<br><br>
        • 🍔 <strong>Dynamite burger</strong> <span class="ai-price-pill">120 ج.م</span> - طعم حار متفجر!<br>
        • 🍟 <strong>ساندوتش زنجر حار</strong> <span class="ai-price-pill">70 / 80 ج.م</span><br>
        • 🌯 <strong>ساندوتش مكسيكانو حار</strong> <span class="ai-price-pill">60 / 70 ج.م</span><br>
        • 🌶️ وتقدر تطلب إضافة صوص هالابينو أو تومية حارة مع أي أوردر!
      `;
    }

    // 12. Desserts / Sweets
    if (/(حلو|حلويات|نوتيلا|مولتن|لوتس|كريب حلو|حلى)/i.test(q)) {
      return `
        لازم تحلي بعد الأكلة الجامدة دي! 🍫🍰<br><br>
        • <strong>فطيرة نوتيلا</strong>: <span class="ai-price-pill">80 ج.م</span><br>
        • <strong>كريب نوتيلا</strong>: <span class="ai-price-pill">60 ج.م</span><br>
        • <strong>مولتن كيك غرقان شيكولاتة</strong>: <span class="ai-price-pill">60 ج.م</span>
      `;
    }

    // 13. Location / Branch Info
    if (/(مكان|عنوان|فرع|لوكيشن|فين|موقع|طوخ|طنبشا|ريست مول)/i.test(q)) {
      return `
        تشرفنا بزيارتك في أي وقت! 📍✨<br><br>
        <strong>العنوان:</strong><br>
        طوخ طنبشا - ريست مول (Rest Mall) - مباشرة أمام جامعة المنوفية الأهلية - على طريق مصر إسكندرية الزراعي.
        <div class="ai-msg-actions">
          <a href="https://www.google.com/maps?q=30.610131,31.109887" target="_blank" rel="noopener noreferrer" class="ai-msg-action-link">🗺️ فتح الموقع على Google Maps</a>
        </div>
      `;
    }

    // 14. Delivery / Contact / Order
    if (/(طلب|اطلب|أطلب|دليفري|توصيل|رقم|تليفون|فون|موبايل|واتساب|واتس|اتصل)/i.test(q)) {
      return `
        خدمة التوصيل سريعة والأكل بيوصلك سخن وطازة! 🛵🔥<br><br>
        📞 <strong>رقم الاتصال المباشر:</strong> <span class="ai-price-pill">01034645003</span><br>
        💬 أو راسلنا مباشرة عبر واتساب بضغطة واحدة:
        <div class="ai-msg-actions">
          <a href="https://wa.me/201034645003?text=${encodeURIComponent('مرحبا مطعم Temo، اريد طلب أوردر')}" target="_blank" rel="noopener noreferrer" class="ai-msg-action-btn">📲 تواصل واتساب الآن</a>
          <a href="tel:01034645003" class="ai-msg-action-link">📞 اتصال هاتفي</a>
        </div>
      `;
    }

    // 15. Working Hours
    if (/(مواعيد|ساعات|شغالين|مفتوح|فاتحين|بتقفلوا)/i.test(q)) {
      return `
        مطعم <strong>Temo (Hot Which)</strong> مفتوح يومياً لخدمتكم واستقبال طلباتكم طازجة وسخنة على مدار اليوم! 🕒✨<br>
        للطلب أو الاستفسار كلمنا على: <span class="ai-price-pill">01034645003</span>
      `;
    }

    // 16. Specific Item Price Lookup (Exact & Substring match in all items)
    const matchedItems = allItems.filter(it => {
      const cleanName = it.name.toLowerCase();
      return q.includes(cleanName) || cleanName.split(' ').some(word => word.length > 2 && q.includes(word));
    });

    if (matchedItems.length > 0) {
      const bestMatches = matchedItems.slice(0, 3);
      let itemsList = bestMatches.map(it => {
        const p = it.price ? `${it.price} ج.م` : `سوري ${it.price1} ج.م / فرنساوي ${it.price2} ج.م`;
        return `• <strong>${it.name}</strong> في (${it.catName}) بسعر <span class="ai-price-pill">${p}</span>`;
      }).join('<br>');

      return `
        لقيت لحضرتك هذه الأصناف في منيو <strong>Temo</strong>: 🔍🍽️<br><br>
        ${itemsList}
        <div class="ai-msg-actions">
          <a href="https://wa.me/201034645003?text=${encodeURIComponent('مرحبا مطعم Temo، اريد طلب: ' + bestMatches[0].name)}" target="_blank" rel="noopener noreferrer" class="ai-msg-action-btn">📲 اطلب الآن</a>
        </div>
      `;
    }

    // 17. General Fallback
    return `
      أهلاً بحضرتك! أنا <strong>شيف تيمو الذكي 👨‍🍳</strong>، أقدر أساعدك في: 💡<br><br>
      • معرفة أسعار أي صنف (مثال: <em>"سعر كيلو الكفتة كام؟"</em>)<br>
      • ترشيح وجبات حسب ميزانيتك (مثال: <em>"معايا 100 جنيه"</em>)<br>
      • أفضل وأشهى الوجبات الأكثر طلباً أو الوجبات العائلية 👨‍👩‍👧‍👦<br>
      • معلومات الفرع ورقم الدليفري 🛵<br><br>
      تحب تسألني عن إيه؟
      <div class="ai-msg-actions">
        <a href="https://wa.me/201034645003?text=${encodeURIComponent('مرحبا مطعم Temo، اريد المساعدة في اختيار أوردر')}" target="_blank" rel="noopener noreferrer" class="ai-msg-action-btn">📲 محادثة مع خدمة العملاء</a>
      </div>
    `;
  }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  initFirebase();
  renderReviews();
  initEmbers();
  initEvents();
  initReviewModal();
  initTemoAI();
});


