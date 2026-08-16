/**
 * RAAHIYOO 2.0 COMMERCIAL EDITION — REACTIVE MASTER CONTROLLER
 * Luxury Segmented Search Hub, Mountain Pass Advisory Ticker, Interactive Region Explorer, Verified Taxi Union Guide & Community Reviews Engine.
 */

let currentFilter = 'all';
let searchQuery = '';
let selectedOrigin = '';
let selectedDuration = 'any';
let currentCurrency = 'INR';
let wishlist = JSON.parse(localStorage.getItem('raahiyoo_wishlist') || '[]');
let userReviews = JSON.parse(localStorage.getItem('raahiyoo_custom_reviews') || '[]');
let displayedCount = 12; // Initial 12 items
const ITEMS_PER_PAGE = 12;

const POPULAR_HUBS = [
  { city: "Delhi (NCR)", code: "DEL / NDLS", desc: "IGI Airport • New Delhi Jn • Hazrat Nizamuddin" },
  { city: "Mumbai", code: "BOM / CSMT", desc: "CSMT • Mumbai Central • Bandra Terminus" },
  { city: "Patna", code: "PAT / PNBE", desc: "Patna Junction • Jayprakash Narayan Airport" },
  { city: "Bengaluru", code: "BLR / SBC", desc: "Kempegowda Airport • KSR Bengaluru" },
  { city: "Kolkata", code: "CCU / HWH", desc: "Howrah Junction • Netaji Subhash Airport" },
  { city: "Pune", code: "PNQ / PUNE", desc: "Pune Junction • Lohegaon Airport" },
  { city: "Hyderabad", code: "HYD / SC", desc: "Secunderabad • Rajiv Gandhi Airport" },
  { city: "Ahmedabad", code: "AMD / ADI", desc: "Ahmedabad Junction • Sardar Vallabhbhai Airport" },
  { city: "Jaipur", code: "JAI / JP", desc: "Jaipur Junction • Sanganer Airport" },
  { city: "Lucknow", code: "LKO / LJN", desc: "Charbagh Station • Amausi Airport" },
  { city: "Chandigarh", code: "IXC / CDG", desc: "Chandigarh Junction • Shaheed Bhagat Singh Airport" }
];

const POPULAR_VIBES = [
  { label: "🏔️ Snow Summits & High Passes", query: "Snow" },
  { label: "🧗 White-Water River Rafting", query: "Rafting" },
  { label: "🕉️ Sacred Ghats & Jyotirlingas", query: "Spiritual" },
  { label: "🏖️ Tropical Beaches & Coastal Shacks", query: "Beach" },
  { label: "🌿 Rolling Green Tea Plantations", query: "Tea" },
  { label: "🏜️ Thar Desert Dunes & Camels", query: "Desert" },
  { label: "🐠 Coral Reef Scuba Diving", query: "Scuba" },
  { label: "🐅 Tiger & Wildlife Safaris", query: "Wildlife" }
];

document.addEventListener('DOMContentLoaded', () => {
  renderDestinations();
  renderCollections();
  renderReviews();
  initSearchAndFilters();
  initLuxurySearchEngine();
  initCurrencySwitcher();
  initWishlistEvents();
  initLeadModalEvents();
  initReviewFormEvents();
  updateWishlistCountBadge();
  updateRelatedSearches();
  renderPassStatusTicker();
  renderRegionMapSelector();
  renderTaxiRatesGuide();
});

/**
 * Format Price with Current Active Currency
 */
function formatPrice(inrAmount) {
  const curr = CURRENCIES[currentCurrency] || CURRENCIES.INR;
  const converted = Math.round(inrAmount * curr.rate);
  return `${curr.symbol}${converted.toLocaleString('en-IN')}`;
}

/**
 * 1. Render Destination Cards with Smart Pagination
 */
function renderDestinations() {
  const grid = document.getElementById('destinationsGrid');
  const paginationBox = document.getElementById('destinationsPagination');
  if (!grid || typeof DESTINATIONS === 'undefined') return;

  const filtered = DESTINATIONS.filter(dest => {
    let matchesCategory = currentFilter === 'all';
    if (currentFilter === 'mountains') {
      const nonMountainIds = [
        'delhi-heritage', 'amritsar', 'agra', 'lucknow', 'mathura-vrindavan', 
        'varanasi', 'ayodhya', 'prayagraj', 'bodh-gaya', 'deoghar', 'puri', 
        'hyderabad', 'mysore', 'madurai', 'tirupati', 'shirdi', 'ujjain', 
        'rani-ki-vav', 'statue-of-unity', 'bikaner', 'jaipur', 'jodhpur', 
        'jaisalmer', 'chittorgarh', 'kumbhalgarh', 'pushkar', 'khajuraho', 
        'alibaug', 'goa', 'gokarna', 'pondicherry', 'kanyakumari', 'andaman', 
        'lakshadweep', 'rann-of-kutch', 'gir-national-park', 'ranthambore', 
        'tadoba', 'bandhavgarh', 'jim-corbett', 'chitrakote-falls', 'dawki-mawlynnong'
      ];
      matchesCategory = !nonMountainIds.includes(dest.id) && (
        dest.category === 'mountains' || 
        (dest.mood && (dest.mood.includes('Mountains') || dest.mood.includes('High Treks') || dest.mood.includes('Snow') || dest.mood.includes('Skiing') || dest.mood.includes('High Altitude'))) ||
        ['leh-ladakh', 'spiti-valley', 'kedarnath', 'badrinath', 'auli', 'gulmarg', 'pahalgam', 'sonamarg', 'zanskar', 'hanle', 'manali', 'shimla', 'chopta', 'kausani', 'valley-of-flowers', 'kinnaur', 'dharamshala', 'dalhousie', 'kasol', 'jibhi', 'bir-billing', 'nainital', 'mussoorie', 'patnitop', 'darjeeling', 'gangtok', 'lachung-yumthang', 'tawang', 'shillong', 'ziro-valley', 'dzukou-valley', 'munnar', 'ooty', 'kodaikanal', 'coorg', 'chikmagalur', 'wayanad', 'araku-valley', 'pachmarhi', 'mahabaleshwar', 'matheran', 'bhandardara', 'saputara', 'mount-abu', 'lonavala', 'vaishno-devi', 'srinagar'].includes(dest.id)
      );
    } else if (currentFilter === 'spiritual' || currentFilter === 'sacred') {
      matchesCategory = dest.category === 'sacred' || (dest.mood && (dest.mood.includes('Spiritual') || dest.mood.includes('Sacred') || dest.mood.includes('Temple') || dest.mood.includes('Pilgrimage')));
    } else if (currentFilter === 'heritage') {
      matchesCategory = dest.category === 'heritage' || (dest.mood && (dest.mood.includes('Heritage') || dest.mood.includes('Architecture') || dest.mood.includes('Forts') || dest.mood.includes('Palaces')));
    } else if (currentFilter === 'beach' || currentFilter === 'beaches') {
      matchesCategory = dest.category === 'beaches' || dest.region === 'islands' || (dest.mood && (dest.mood.includes('Beaches') || dest.mood.includes('Coastal') || dest.mood.includes('Backwaters') || dest.mood.includes('Scuba')));
    } else if (currentFilter === 'adventure') {
      matchesCategory = dest.mood && (dest.mood.includes('Adventure') || dest.mood.includes('High Treks') || dest.mood.includes('Rafting') || dest.mood.includes('Wildlife') || dest.mood.includes('Paragliding') || dest.mood.includes('Scuba'));
    } else if (currentFilter === 'north') {
      matchesCategory = dest.region === 'north' || ['Ladakh', 'Jammu & Kashmir', 'Himachal Pradesh', 'Uttarakhand', 'Punjab', 'Delhi', 'Haryana'].includes(dest.state);
    } else if (currentFilter === 'west') {
      matchesCategory = dest.region === 'west' || ['Rajasthan', 'Gujarat', 'Goa', 'Maharashtra'].includes(dest.state);
    } else if (currentFilter === 'south') {
      matchesCategory = dest.region === 'south' || dest.region === 'islands' || ['Kerala', 'Karnataka', 'Tamil Nadu', 'Andhra Pradesh', 'Telangana', 'Puducherry', 'Andaman & Nicobar', 'Lakshadweep'].includes(dest.state);
    } else if (currentFilter === 'central') {
      matchesCategory = dest.region === 'central' || ['Madhya Pradesh', 'Uttar Pradesh', 'Chhattisgarh', 'Bihar', 'Jharkhand'].includes(dest.state);
    } else if (currentFilter === 'east') {
      matchesCategory = dest.region === 'east' || dest.region === 'northeast' || ['West Bengal', 'Odisha', 'Sikkim', 'Meghalaya', 'Assam', 'Arunachal Pradesh', 'Nagaland', 'Manipur'].includes(dest.state);
    } else if (currentFilter !== 'all') {
      matchesCategory = dest.region === currentFilter || dest.category === currentFilter;
    }

    const matchesSearch = !searchQuery || 
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      dest.mood.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <h3 style="color: #0f172a; margin-bottom: 0.5rem;">No destinations found</h3>
        <p style="color: #64748b;">Try searching for "Ladakh", "Kedarnath", "Goa", "Munnar", "Spiti", or "Varanasi".</p>
      </div>
    `;
    if (paginationBox) paginationBox.innerHTML = '';
    return;
  }

  const visibleItems = filtered.slice(0, displayedCount);

  grid.innerHTML = visibleItems.map(dest => {
    return `
      <article class="dest-card">
        <a href="destination.html?id=${dest.id}" class="dest-card-media" aria-label="Explore ${dest.name}">
          <img src="${dest.heroImage}" alt="${dest.name}" loading="lazy" />
          <div class="dest-card-badges">
            <span class="card-badge">★ ${dest.rating} (${dest.reviewsCount})</span>
            <span class="card-badge" style="background: rgba(255, 107, 53, 0.95);">${dest.elevation}</span>
          </div>
        </a>
        <div class="dest-card-body">
          <div class="dest-card-location">📍 ${dest.state}</div>
          <h3 class="dest-card-title">
            <a href="destination.html?id=${dest.id}">${dest.name}</a>
          </h3>
          <p class="dest-card-desc">${dest.description}</p>
          <div class="dest-card-meta">
            <div class="meta-budget">
              ${formatPrice(dest.basePriceINR)} <span>/ day avg</span>
            </div>
            <a href="destination.html?id=${dest.id}" class="btn btn-secondary btn-sm">
              Explore Guide &rarr;
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  if (paginationBox) {
    if (visibleItems.length < filtered.length) {
      paginationBox.innerHTML = `
        <div class="pagination-wrap">
          <div class="pagination-info">Showing ${visibleItems.length} of ${filtered.length} Destinations</div>
          <button class="load-more-btn" onclick="loadMoreDestinations(${filtered.length})">
            Load More Destinations (${filtered.length - visibleItems.length} more) &darr;
          </button>
        </div>
      `;
    } else {
      paginationBox.innerHTML = `
        <div class="pagination-wrap">
          <div class="pagination-info" style="color: #10b981; font-weight: 700;">✓ Showing all ${filtered.length} destinations across India</div>
        </div>
      `;
    }
  }
}

function loadMoreDestinations(total) {
  displayedCount += ITEMS_PER_PAGE;
  renderDestinations();
}

/**
 * 2. Mountain Passes Live Status Ticker
 */
function renderPassStatusTicker() {
  const container = document.getElementById('passTickerContainer');
  if (!container || typeof MOUNTAIN_PASSES_STATUS === 'undefined') return;

  container.innerHTML = MOUNTAIN_PASSES_STATUS.map(p => `
    <div class="pass-card" style="min-width: 280px; padding: 1rem 1.25rem;">
      <div class="pass-status-dot ${p.status}"></div>
      <div style="flex: 1;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.2rem;">
          <div class="pass-name" style="font-size: 0.95rem;">${p.name}</div>
          <span style="font-size: 0.72rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 9999px; background: ${p.status === 'open' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)'}; color: ${p.status === 'open' ? '#047857' : '#b45309'};">
            ${p.status === 'open' ? '🟢 OPEN' : '🟡 CAUTION'}
          </span>
        </div>
        <div class="pass-sub" style="color: #475569; font-size: 0.8rem; margin-bottom: 0.25rem;">
          📍 ${p.location}
        </div>
        <div style="font-size: 0.78rem; color: #64748b; line-height: 1.4; background: #f8fafc; padding: 0.4rem 0.6rem; border-radius: 6px; border-left: 2px solid ${p.status === 'open' ? '#10b981' : '#f59e0b'};">
          ${p.note}
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * 3. Interactive Regional / State Explorer Cards
 */
function renderRegionMapSelector() {
  const container = document.getElementById('regionMapContainer');
  if (!container) return;

  const regions = [
    { id: 'all', title: 'All India Explorer', count: '120+ Famous Places', icon: '🇮🇳' },
    { id: 'north', title: 'North & Himalayas', count: 'Ladakh, Kashmir, HP, UK', icon: '🏔️' },
    { id: 'west', title: 'West & Deserts', count: 'Rajasthan, Gujarat, Goa, MH', icon: '🏰' },
    { id: 'south', title: 'South India & Coast', count: 'Kerala, Karnataka, TN, AP', icon: '🌴' },
    { id: 'central', title: 'Central & Sacred', count: 'UP, MP, Chhattisgarh', icon: '🕉️' },
    { id: 'east', title: 'East & Northeast', count: 'Sikkim, Meghalaya, Bengal, Assam', icon: '🌿' }
  ];

  container.innerHTML = regions.map(r => `
    <button class="region-card-btn ${currentFilter === r.id ? 'active' : ''}" onclick="filterByRegionCard('${r.id}', this)">
      <div class="region-card-icon">${r.icon}</div>
      <div>
        <div class="region-card-title">${r.title}</div>
        <div class="region-card-count">${r.count}</div>
      </div>
    </button>
  `).join('');
}

function filterByRegionCard(regId, element) {
  currentFilter = regId;
  searchQuery = '';
  const searchInput = document.getElementById('mainSearchInput');
  if (searchInput) searchInput.value = '';
  displayedCount = ITEMS_PER_PAGE;
  
  document.querySelectorAll('.region-card-btn').forEach(btn => btn.classList.remove('active'));
  if (element) element.classList.add('active');

  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === regId);
  });

  renderDestinations();
  updateRelatedSearches();
  
  const exploreSec = document.getElementById('exploreSection');
  if (exploreSec) {
    exploreSec.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * 4. Verified Taxi Union Rates Guide
 */
function renderTaxiRatesGuide() {
  const container = document.getElementById('taxiRatesContainer');
  if (!container || typeof VERIFIED_TAXI_RATES === 'undefined') return;

  container.innerHTML = VERIFIED_TAXI_RATES.map(t => `
    <div class="taxi-rate-card">
      <div>
        <div style="font-family: monospace; font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase; margin-bottom: 0.2rem;">
          ⏱️ ${t.time} &bull; ${t.vehicle}
        </div>
        <div class="taxi-route-title">${t.route}</div>
      </div>
      <div>
        <div class="taxi-rate-price">${formatPrice(t.rateINR)}</div>
        <div style="font-size: 0.85rem; color: #64748b; margin: 0;">${t.note}</div>
      </div>
    </div>
  `).join('');
}

/**
 * 5. Luxury Segmented Search Engine
 */
function initLuxurySearchEngine() {
  const destInput = document.getElementById('mainSearchInput');
  const destDropdown = document.getElementById('destSuggestDropdown');
  
  const originInput = document.getElementById('heroOriginInput');
  const originDropdown = document.getElementById('originSuggestDropdown');

  const durationInput = document.getElementById('heroDurationInput');
  const durationDropdown = document.getElementById('durationSuggestDropdown');

  if (destInput && destDropdown) {
    function renderDestDropdown(val = '') {
      const q = val.toLowerCase().trim();

      if (!q) {
        destDropdown.innerHTML = `
          <div class="suggest-section-title">🌟 Trending Destinations</div>
          ${DESTINATIONS.slice(0, 5).map(d => `
            <div class="suggest-item" onclick="selectDestinationSuggestion('${d.name}')">
              <div class="suggest-icon">📍</div>
              <div class="suggest-info">
                <div class="suggest-name">${d.name}</div>
                <div class="suggest-sub">${d.state} &bull; ${d.elevation}</div>
              </div>
              <span class="suggest-badge">★ ${d.rating}</span>
            </div>
          `).join('')}

          <div class="suggest-section-title" style="margin-top: 0.5rem;">🧗 Popular Vibes &amp; Activities</div>
          ${POPULAR_VIBES.map(v => `
            <div class="suggest-item" onclick="selectDestinationSuggestion('${v.query}')">
              <div class="suggest-info">
                <div class="suggest-name">${v.label}</div>
              </div>
            </div>
          `).join('')}
        `;
      } else {
        const matches = DESTINATIONS.filter(d => 
          d.name.toLowerCase().includes(q) || 
          d.state.toLowerCase().includes(q) ||
          d.tags.some(t => t.toLowerCase().includes(q)) ||
          d.mood.some(m => m.toLowerCase().includes(q))
        ).slice(0, 6);

        if (matches.length === 0) {
          destDropdown.innerHTML = `
            <div style="padding: 1rem; text-align: center; color: #64748b; font-size: 0.9rem;">
              No direct matches for "${val}". Click "Find Trips" to browse all.
            </div>
          `;
        } else {
          destDropdown.innerHTML = `
            <div class="suggest-section-title">Top Matching Destinations</div>
            ${matches.map(m => `
              <div class="suggest-item" onclick="selectDestinationSuggestion('${m.name}')">
                <div class="suggest-icon">📍</div>
                <div class="suggest-info">
                  <div class="suggest-name">${m.name}</div>
                  <div class="suggest-sub">${m.state} &bull; ${m.elevation}</div>
                </div>
                <span class="suggest-badge">★ ${m.rating}</span>
              </div>
            `).join('')}
          `;
        }
      }
      destDropdown.classList.add('active');
    }

    destInput.addEventListener('focus', () => renderDestDropdown(destInput.value));
    destInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderDestDropdown(searchQuery);
      displayedCount = ITEMS_PER_PAGE;
      renderDestinations();
      updateRelatedSearches();
    });
  }

  if (originInput && originDropdown) {
    function renderOriginDropdown(val = '') {
      const q = val.toLowerCase().trim();
      const matches = POPULAR_HUBS.filter(h => 
        !q || 
        h.city.toLowerCase().includes(q) || 
        h.code.toLowerCase().includes(q) ||
        h.desc.toLowerCase().includes(q)
      );

      originDropdown.innerHTML = `
        <div class="suggest-section-title">🛫 Major Departure Hubs</div>
        ${matches.map(h => `
          <div class="suggest-item" onclick="selectOriginSuggestion('${h.city}')">
            <div class="suggest-icon" style="background: rgba(16, 185, 129, 0.1); color: #059669;">🚆</div>
            <div class="suggest-info">
              <div class="suggest-name">${h.city}</div>
              <div class="suggest-sub">${h.desc}</div>
            </div>
            <span class="suggest-badge">${h.code}</span>
          </div>
        `).join('')}
      `;
      originDropdown.classList.add('active');
    }

    originInput.addEventListener('focus', () => renderOriginDropdown(originInput.value));
    originInput.addEventListener('input', (e) => {
      renderOriginDropdown(e.target.value);
    });
  }

  if (durationInput && durationDropdown) {
    const durations = [
      { label: "Any Length", sub: "Explore all journeys", val: "any" },
      { label: "2 - 3 Days (Weekend Trip)", sub: "Quick weekend getaways", val: "weekend" },
      { label: "4 - 5 Days (Extended Holiday)", sub: "Comprehensive valley tours", val: "week" },
      { label: "6+ Days (High Expedition)", sub: "Complete circuits & high passes", val: "long" }
    ];

    durationDropdown.innerHTML = `
      <div class="suggest-section-title">⏱️ Select Trip Duration</div>
      ${durations.map(d => `
        <div class="suggest-item" onclick="selectDurationSuggestion('${d.label}', '${d.val}')">
          <div class="suggest-icon" style="background: rgba(2, 132, 199, 0.1); color: #0284c7;">⏱️</div>
          <div class="suggest-info">
            <div class="suggest-name">${d.label}</div>
            <div class="suggest-sub">${d.sub}</div>
          </div>
        </div>
      `).join('')}
    `;

    durationInput.addEventListener('focus', () => durationDropdown.classList.add('active'));
    durationInput.addEventListener('click', () => durationDropdown.classList.add('active'));
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-segment')) {
      if (destDropdown) destDropdown.classList.remove('active');
      if (originDropdown) originDropdown.classList.remove('active');
      if (durationDropdown) durationDropdown.classList.remove('active');
    }
  });
}

function selectDestinationSuggestion(name) {
  const destInput = document.getElementById('mainSearchInput');
  const destDropdown = document.getElementById('destSuggestDropdown');
  if (destInput) destInput.value = name;
  if (destDropdown) destDropdown.classList.remove('active');
  searchQuery = name;
  displayedCount = ITEMS_PER_PAGE;
  renderDestinations();
  updateRelatedSearches();
}

function selectOriginSuggestion(city) {
  const originInput = document.getElementById('heroOriginInput');
  const originDropdown = document.getElementById('originSuggestDropdown');
  if (originInput) originInput.value = city;
  if (originDropdown) originDropdown.classList.remove('active');
  selectedOrigin = city;
  updateRelatedSearches();
}

function selectDurationSuggestion(label, val) {
  const durationInput = document.getElementById('heroDurationInput');
  const durationDropdown = document.getElementById('durationSuggestDropdown');
  if (durationInput) durationInput.value = label;
  if (durationDropdown) durationDropdown.classList.remove('active');
  selectedDuration = val;
}

/**
 * 6. Dynamic Related Searches Bar
 */
function updateRelatedSearches() {
  const container = document.getElementById('relatedSearchesList');
  if (!container) return;

  const q = searchQuery.toLowerCase();
  let suggestions = [];

  if (q) {
    if (q.includes('snow') || q.includes('ski') || q.includes('mountain')) {
      suggestions = [
        { label: "🏔️ Gulmarg Gondola", query: "Gulmarg" },
        { label: "❄️ Spiti Valley", query: "Spiti" },
        { label: "⛷️ Auli Ski Slopes", query: "Auli" },
        { label: "🏔️ Leh Ladakh", query: "Ladakh" }
      ];
    } else if (q.includes('beach') || q.includes('sea') || q.includes('coast')) {
      suggestions = [
        { label: "🏖️ Goa Beach Shacks", query: "Goa" },
        { label: "🌊 Varkala Red Cliff", query: "Varkala" },
        { label: "🐠 Andaman Scuba", query: "Andaman" },
        { label: "🌴 Alleppey Backwaters", query: "Alleppey" }
      ];
    } else if (q.includes('temple') || q.includes('aarti') || q.includes('sacred') || q.includes('shiva')) {
      suggestions = [
        { label: "🕉️ Kedarnath Dham", query: "Kedarnath" },
        { label: "🔥 Varanasi Maha Aarti", query: "Varanasi" },
        { label: "🛕 Ayodhya Ram Mandir", query: "Ayodhya" },
        { label: "🔱 Ujjain Mahakal", query: "Ujjain" },
        { label: "✨ Amritsar Golden Temple", query: "Amritsar" }
      ];
    } else {
      suggestions = [
        { label: "🏔️ Leh Ladakh", query: "Ladakh" },
        { label: "🕉️ Kedarnath", query: "Kedarnath" },
        { label: "❄️ Spiti Valley", query: "Spiti" },
        { label: "🛕 Ayodhya", query: "Ayodhya" },
        { label: "🏖️ Goa", query: "Goa" },
        { label: "🌿 Munnar Tea", query: "Munnar" }
      ];
    }
  } else if (currentFilter === 'north') {
    suggestions = [
      { label: "🏔️ Leh Ladakh", query: "Ladakh" },
      { label: "🕉️ Kedarnath Dham", query: "Kedarnath" },
      { label: "❄️ Spiti Valley", query: "Spiti" },
      { label: "⛷️ Auli Ski Slopes", query: "Auli" },
      { label: "🚡 Gulmarg Gondola", query: "Gulmarg" },
      { label: "🌲 Manali & Sissu", query: "Manali" },
      { label: "🌿 Rishikesh Rafting", query: "Rishikesh" },
      { label: "✨ Amritsar Golden Temple", query: "Amritsar" }
    ];
  } else if (currentFilter === 'west') {
    suggestions = [
      { label: "🏰 Jaipur Forts", query: "Jaipur" },
      { label: "🏖️ Goa Beaches", query: "Goa" },
      { label: "🌅 Udaipur City Palace", query: "Udaipur" },
      { label: "🐪 Jaisalmer Thar Dunes", query: "Jaisalmer" },
      { label: "🦁 Gir Forest Safari", query: "Gir" },
      { label: "🤍 Rann of Kutch Salt Desert", query: "Kutch" },
      { label: "⛰️ Mount Abu Dilwara", query: "Mount Abu" }
    ];
  } else if (currentFilter === 'south') {
    suggestions = [
      { label: "🌴 Munnar Tea Hills", query: "Munnar" },
      { label: "⛵ Alleppey Houseboats", query: "Alleppey" },
      { label: "🌊 Varkala Red Cliffs", query: "Varkala" },
      { label: "🏛️ Hampi Vijayanagara", query: "Hampi" },
      { label: "☕ Coorg Coffee Estates", query: "Coorg" },
      { label: "🛕 Rameswaram Bridge", query: "Rameswaram" },
      { label: "🐠 Andaman Radhanagar", query: "Andaman" }
    ];
  } else if (currentFilter === 'central') {
    suggestions = [
      { label: "🔥 Varanasi Ganga Aarti", query: "Varanasi" },
      { label: "🛕 Ayodhya Ram Janmabhoomi", query: "Ayodhya" },
      { label: "🔱 Ujjain Mahakaleshwar", query: "Ujjain" },
      { label: "🏛️ Khajuraho UNESCO", query: "Khajuraho" },
      { label: "🐅 Bandhavgarh National Park", query: "Bandhavgarh" },
      { label: "🌊 Chitrakote Waterfalls", query: "Chitrakote" }
    ];
  } else if (currentFilter === 'east') {
    suggestions = [
      { label: "☕ Darjeeling Toy Train", query: "Darjeeling" },
      { label: "🌁 Shillong Living Root Bridges", query: "Shillong" },
      { label: "🦏 Kaziranga 1-Horn Rhinos", query: "Kaziranga" },
      { label: "🛶 Dawki Umngot Crystal River", query: "Dawki" },
      { label: "🌸 Ziro Valley Pine Hills", query: "Ziro" },
      { label: "🌊 Puri Jagannath Temple", query: "Puri" }
    ];
  } else if (currentFilter === 'mountains') {
    suggestions = [
      { label: "🏔️ Leh Ladakh", query: "Ladakh" },
      { label: "❄️ Spiti Valley", query: "Spiti" },
      { label: "⛷️ Auli Snow Slopes", query: "Auli" },
      { label: "🚡 Gulmarg", query: "Gulmarg" },
      { label: "🌲 Manali", query: "Manali" },
      { label: "🌿 Chopta Tungnath", query: "Chopta" }
    ];
  } else if (currentFilter === 'beach') {
    suggestions = [
      { label: "🏖️ North Goa", query: "Goa" },
      { label: "🌊 Varkala", query: "Varkala" },
      { label: "🌴 Alleppey", query: "Alleppey" },
      { label: "🐠 Andaman Islands", query: "Andaman" },
      { label: "🏝️ Lakshadweep Coral", query: "Lakshadweep" },
      { label: "🌊 Gokarna Om Beach", query: "Gokarna" }
    ];
  } else if (currentFilter === 'spiritual') {
    suggestions = [
      { label: "🕉️ Kedarnath Dham", query: "Kedarnath" },
      { label: "🔥 Varanasi", query: "Varanasi" },
      { label: "🛕 Ayodhya", query: "Ayodhya" },
      { label: "🔱 Ujjain", query: "Ujjain" },
      { label: "✨ Amritsar", query: "Amritsar" },
      { label: "🛕 Badrinath", query: "Badrinath" }
    ];
  } else {
    suggestions = [
      { label: "🏔️ Leh Ladakh", query: "Ladakh" },
      { label: "🕉️ Kedarnath", query: "Kedarnath" },
      { label: "❄️ Spiti Valley", query: "Spiti" },
      { label: "🛕 Ayodhya", query: "Ayodhya" },
      { label: "🏖️ Goa", query: "Goa" },
      { label: "🌿 Munnar Tea", query: "Munnar" },
      { label: "🐠 Andaman", query: "Andaman" },
      { label: "🏛️ Jaipur Forts", query: "Jaipur" }
    ];
  }

  container.innerHTML = suggestions.map(s => `
    <button class="related-chip" onclick="applyRelatedSearch('${s.query}')">
      ${s.label}
    </button>
  `).join('');
}

function applyRelatedSearch(query) {
  const destInput = document.getElementById('mainSearchInput');
  if (destInput) destInput.value = query;
  searchQuery = query;
  displayedCount = ITEMS_PER_PAGE;
  renderDestinations();
  updateRelatedSearches();
  document.getElementById('exploreSection').scrollIntoView({ behavior: 'smooth' });
}

/**
 * 7. Multi-Currency Switcher
 */
function initCurrencySwitcher() {
  const select = document.getElementById('currencySelector');
  if (!select) return;

  select.addEventListener('change', (e) => {
    currentCurrency = e.target.value;
    renderDestinations();
    renderWishlistDrawer();
    renderTaxiRatesGuide();
  });
}

/**
 * 8. Wishlist / Saved Trips Manager
 */
function toggleWishlist(destId) {
  if (wishlist.includes(destId)) {
    wishlist = wishlist.filter(id => id !== destId);
  } else {
    wishlist.push(destId);
  }
  localStorage.setItem('raahiyoo_wishlist', JSON.stringify(wishlist));
  updateWishlistCountBadge();
  renderDestinations();
  renderWishlistDrawer();
}

function updateWishlistCountBadge() {
  const badge = document.getElementById('wishlistCountBadge');
  if (badge) badge.textContent = wishlist.length;
}

function openWishlistDrawer() {
  const drawer = document.getElementById('wishlistDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  if (drawer && backdrop) {
    renderWishlistDrawer();
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeWishlistDrawer() {
  const drawer = document.getElementById('wishlistDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  if (drawer) drawer.classList.remove('active');
  if (backdrop) backdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function renderWishlistDrawer() {
  const container = document.getElementById('wishlistItemsContainer');
  if (!container) return;

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem; color: #64748b;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🤍</div>
        <h4>Your Wishlist is Empty</h4>
        <p style="font-size: 0.92rem; margin-top: 0.5rem;">Click the heart icon on any destination card to save your favorite trips here!</p>
      </div>
    `;
    return;
  }

  const savedDests = DESTINATIONS.filter(d => wishlist.includes(d.id));

  container.innerHTML = savedDests.map(dest => `
    <div style="display: flex; gap: 1rem; padding: 1rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; align-items: center;">
      <img src="${dest.heroImage}" alt="${dest.name}" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;" />
      <div style="flex-grow: 1;">
        <h4 style="margin: 0 0 0.2rem; font-size: 1.1rem; color: #0f172a;">${dest.name}</h4>
        <div style="font-size: 0.85rem; color: #64748b;">${dest.state} &bull; ${formatPrice(dest.basePriceINR)}/day</div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.4rem;">
        <a href="destination.html?id=${dest.id}" class="btn btn-primary btn-sm">View</a>
        <button style="background: none; border: none; color: #ef4444; font-size: 0.8rem; cursor: pointer;" onclick="toggleWishlist('${dest.id}')">Remove</button>
      </div>
    </div>
  `).join('');
}

function initWishlistEvents() {
  const trigger = document.getElementById('wishlistTriggerBtn');
  const closeBtn = document.getElementById('wishlistCloseBtn');
  const backdrop = document.getElementById('drawerBackdrop');

  if (trigger) trigger.addEventListener('click', openWishlistDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeWishlistDrawer);
  if (backdrop) backdrop.addEventListener('click', closeWishlistDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeWishlistDrawer();
      closeLeadModal();
      if (typeof closeReviewModal === 'function') closeReviewModal();
    }
  });
}

/**
 * 9. Review Submission Engine
 */
function initReviewFormEvents() {
  const form = document.getElementById('reviewSubmissionForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const author = document.getElementById('revAuthor').value.trim();
    const city = document.getElementById('revCity').value.trim();
    const dest = document.getElementById('revDest').value.trim();
    const text = document.getElementById('revText').value.trim();

    const newRev = {
      author,
      location: city,
      dest,
      rating: "5.0",
      text,
      verified: true
    };

    userReviews.unshift(newRev);
    localStorage.setItem('raahiyoo_custom_reviews', JSON.stringify(userReviews));

    form.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem;">
        <div style="font-size: 3rem; color: #10b981; margin-bottom: 1rem;">✓</div>
        <h3 style="color: #0f172a; margin-bottom: 0.5rem;">Review Published, ${author}!</h3>
        <p style="color: #475569; font-size: 0.95rem; margin-bottom: 1.5rem;">
          Thank you for sharing your authentic journey to <strong>${dest}</strong>. Your review is now live!
        </p>
        <button class="btn btn-primary" onclick="closeReviewModal()">Done</button>
      </div>
    `;

    renderReviews();
  });
}

/**
 * 10. Lead Capture & WhatsApp Consultation Modal
 */
function openLeadModal(destName = 'Custom Journey') {
  const modal = document.getElementById('leadModalBackdrop');
  const destField = document.getElementById('leadDestField');
  if (modal) {
    if (destField) destField.value = destName;
    modal.classList.add('active');
  }
}

function closeLeadModal() {
  const modal = document.getElementById('leadModalBackdrop');
  if (modal) modal.classList.remove('active');
}

function initLeadModalEvents() {
  const closeBtn = document.getElementById('leadModalCloseBtn');
  const form = document.getElementById('leadCaptureForm');

  if (closeBtn) closeBtn.addEventListener('click', closeLeadModal);
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('leadName').value;
      const phone = document.getElementById('leadPhone').value;
      const dest = document.getElementById('leadDestField').value;

      form.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem;">
          <div style="font-size: 3rem; color: #10b981; margin-bottom: 1rem;">✓</div>
          <h3 style="color: #0f172a; margin-bottom: 0.5rem;">Inquiry Received, ${name}!</h3>
          <p style="color: #475569; font-size: 0.95rem; margin-bottom: 1.5rem;">
            Our travel specialist will send the complete verified itinerary and cost breakdown for <strong>${dest}</strong> to <strong>${phone}</strong> via WhatsApp within 15 minutes.
          </p>
          <button class="btn btn-primary" onclick="closeLeadModal()">Done</button>
        </div>
      `;
    });
  }
}

/**
 * 11. Curated Collections
 */
function renderCollections() {
  const container = document.getElementById('curatedCollectionsGrid');
  if (!container || typeof CURATED_COLLECTIONS === 'undefined') return;

  container.innerHTML = CURATED_COLLECTIONS.map(col => `
    <div class="dest-card" style="cursor: pointer;" onclick="filterByCollection('${col.id}')">
      <div class="dest-card-media" style="aspect-ratio: 16 / 9;">
        <img src="${col.heroImage || col.image}" alt="${col.title || col.name}" loading="lazy" />
        <div class="dest-card-badges">
          <span class="card-badge" style="background: rgba(15, 23, 42, 0.85);">${col.count || '5 Stops'}</span>
        </div>
      </div>
      <div class="dest-card-body">
        <h3 style="font-size: 1.2rem; font-weight: 800; color: #0f172a; margin-bottom: 0.35rem;">${col.title || col.name}</h3>
        <p style="font-size: 0.88rem; color: #64748b; line-height: 1.5; margin: 0;">${col.description || col.tagline || col.subtitle}</p>
      </div>
    </div>
  `).join('');
}

function filterByCollection(colId) {
  const col = CURATED_COLLECTIONS.find(c => c.id === colId);
  if (!col) return;

  const validIds = col.destinations || col.destIds || [];
  const filtered = DESTINATIONS.filter(d => validIds.includes(d.id));
  const grid = document.getElementById('destinationsGrid');
  const paginationBox = document.getElementById('destinationsPagination');
  if (grid) {
    grid.innerHTML = filtered.map(dest => {
      return `
        <article class="dest-card">
          <a href="destination.html?id=${dest.id}" class="dest-card-media">
            <img src="${dest.heroImage}" alt="${dest.name}" loading="lazy" />
            <div class="dest-card-badges">
              <span class="card-badge">★ ${dest.rating}</span>
            </div>
          </a>
          <div class="dest-card-body">
            <div class="dest-card-location">📍 ${dest.state}</div>
            <h3 class="dest-card-title"><a href="destination.html?id=${dest.id}">${dest.name}</a></h3>
            <p class="dest-card-desc">${dest.description}</p>
            <div class="dest-card-meta">
              <div class="meta-budget">${formatPrice(dest.basePriceINR)} <span>/ day</span></div>
              <a href="destination.html?id=${dest.id}" class="btn btn-secondary btn-sm">View Guide &rarr;</a>
            </div>
          </div>
        </article>
      `;
    }).join('');
    if (paginationBox) paginationBox.innerHTML = '';
    document.getElementById('exploreSection').scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * 12. Verified Community Reviews Engine
 */
function renderReviews() {
  const container = document.getElementById('verifiedReviewsGrid');
  if (!container) return;

  const defaultReviews = [
    { author: "Aman Verma", location: "Delhi", dest: "Rishikesh & Haridwar", rating: "5.0", text: "Took the morning Vande Bharat train from Delhi. The step-by-step transit and rafting guide saved us so much confusion!" },
    { author: "Sneha Mukherjee", location: "Kolkata", dest: "Tungnath & Chandrashila", rating: "5.0", text: "Standing on Chandrashila summit at golden sunrise was surreal. The packing checklist was so helpful!" },
    { author: "Vikram Malhotra", location: "Gurugram", dest: "Landour & Mussoorie", rating: "5.0", text: "The perfect quiet mountain retreat. Char Dukan tea and Landour Bakehouse guide were spot on." },
    { author: "Tanya Sen", location: "Mumbai", dest: "Leh Ladakh & Pangong", rating: "5.0", text: "The acclimatization advice in Ladakh guide was a lifesaver! Flawless recommendations." }
  ];

  const allReviews = [...userReviews, ...defaultReviews];

  container.innerHTML = allReviews.map(r => `
    <div class="review-card">
      <div class="review-author">
        <div class="author-avatar">${r.author ? r.author[0].toUpperCase() : 'U'}</div>
        <div class="author-info">
          <h5>${r.author}</h5>
          <span>${r.location} &bull; Visited ${r.dest}</span>
        </div>
      </div>
      <div style="color: #f59e0b; margin-bottom: 0.5rem; font-size: 0.9rem;">★★★★★ <strong style="color: #0f172a; margin-left: 0.25rem;">${r.rating || '5.0'} Verified</strong></div>
      <p style="color: #475569; font-size: 0.92rem; line-height: 1.6; margin: 0;">"${r.text}"</p>
    </div>
  `).join('');
}

/**
 * 13. Search & Category Listeners
 */
function initSearchAndFilters() {
  const catButtons = document.querySelectorAll('.cat-btn');

  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.category;
      displayedCount = ITEMS_PER_PAGE;
      renderDestinations();
    });
  });
}

/**
 * 14. Clean Mountain Pledge & Privacy/Terms Modals
 */
function openPledgeModal() {
  const modal = document.getElementById('pledgeModalBackdrop');
  if (modal) modal.classList.add('active');
}

function closePledgeModal() {
  const modal = document.getElementById('pledgeModalBackdrop');
  if (modal) modal.classList.remove('active');
}

function takeMountainPledge() {
  const btn = document.getElementById('takePledgeBtn');
  const msg = document.getElementById('pledgeSuccessMsg');
  if (btn && msg) {
    btn.style.display = 'none';
    msg.style.display = 'block';
    try {
      localStorage.setItem('raahiyoo_clean_mountain_pledged', 'true');
    } catch(e) {}
  }
}

function openTermsModal() {
  const modal = document.getElementById('termsModalBackdrop');
  if (modal) modal.classList.add('active');
}

function closeTermsModal() {
  const modal = document.getElementById('termsModalBackdrop');
  if (modal) modal.classList.remove('active');
}

if (typeof window !== 'undefined') {
  window.openPledgeModal = openPledgeModal;
  window.closePledgeModal = closePledgeModal;
  window.takeMountainPledge = takeMountainPledge;
  window.openTermsModal = openTermsModal;
  window.closeTermsModal = closeTermsModal;
}
