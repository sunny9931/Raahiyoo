/**
 * RAAHIYOO — Destination Detail Controller
 * Dynamic renderer with simple, friendly language, 3D cards, and practical travel tools
 */

document.addEventListener('DOMContentLoaded', () => {
  initDestinationPage();
});

function initDestinationPage() {
  const container = document.getElementById('destinationDetailContainer');
  if (!container || typeof DESTINATIONS_DATA === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const destId = urlParams.get('id') || 'rishikesh';

  const dest = DESTINATIONS_DATA.find(d => d.id.toLowerCase() === destId.toLowerCase()) || DESTINATIONS_DATA[0];

  document.title = `${dest.name} Travel Guide — How to Reach, Itinerary & Tips | RAAHIYOO`;

  container.innerHTML = `
    <!-- DESTINATION HERO -->
    <header class="dest-hero">
      <img src="${dest.heroImage}" alt="${dest.name}, ${dest.state}" class="dest-hero-bg" />
      <div class="dest-hero-overlay"></div>
      <div class="container dest-hero-content">
        <nav class="dest-hero-breadcrumb" aria-label="Breadcrumb">
          <a href="index.html">Home</a> &rsaquo;
          <a href="destinations.html">Destinations</a> &rsaquo;
          <span>${dest.name}</span>
        </nav>
        <h1 class="dest-hero-title">${dest.name}</h1>
        <p class="dest-hero-tagline">${dest.tagline}</p>
        <div class="dest-badges-row">
          <span class="badge badge-orange">${dest.state}</span>
          <span class="badge badge-cyan">${dest.region}</span>
          <span class="badge badge-emerald">🏔️ ${dest.elevation}</span>
        </div>
      </div>
    </header>

    <!-- QUICK FACTS MATRIX (SIMPLE & SCANNABLE) -->
    <div class="container" style="margin-bottom: 4rem;">
      <div class="facts-matrix-grid">
        <div class="fact-card">
          <span class="fact-icon-label">🗓️ Best Time</span>
          <span class="fact-value">${dest.bestTime.split('(')[0].trim()}</span>
        </div>
        <div class="fact-card">
          <span class="fact-icon-label">⏱️ Trip Duration</span>
          <span class="fact-value">${dest.recommendedDuration}</span>
        </div>
        <div class="fact-card">
          <span class="fact-icon-label">💰 Daily Budget</span>
          <span class="fact-value" style="font-size: 1.05rem;">${dest.budgetEstimate || '₹2,500 - ₹4,000'}</span>
        </div>
        <div class="fact-card">
          <span class="fact-icon-label">🎒 Great For</span>
          <span class="fact-value" style="font-size: 0.95rem;">${dest.idealTripType.slice(0, 2).join(', ')}</span>
        </div>
      </div>
    </div>

    <!-- WHY THIS JOURNEY MATTERS -->
    <section class="container" style="margin-bottom: 4.5rem;">
      <div class="why-matters-box">
        <div class="section-eyebrow">The Real Experience</div>
        <h2 style="font-size: clamp(1.8rem, 3vw, 2.4rem); margin-bottom: 1rem; color: #fff;">
          What Makes ${dest.name} Special?
        </h2>
        <div class="why-matters-content">
          <p>${dest.whyItMatters}</p>
        </div>
      </div>
    </section>

    <!-- OVERVIEW -->
    <section class="container" style="margin-bottom: 4.5rem;">
      <div class="section-header">
        <div class="section-eyebrow">Quick Summary</div>
        <h2>About the Destination</h2>
      </div>
      <p class="lead-text">${dest.description}</p>
    </section>

    <!-- HOW TO REACH SECTION (INTERACTIVE TRANSIT SWITCHER) -->
    <section class="container" style="margin-bottom: 4.5rem;" id="howToReachSection">
      <div class="section-header">
        <div class="section-eyebrow">Step-by-Step Transit</div>
        <h2>How to Reach ${dest.name}</h2>
        <p class="section-subtitle">Select your departure city to see clear trains, flights, and road routes.</p>
      </div>

      <div class="route-guide-card">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.3rem; color: #fff;">Select Your Departure City:</h3>
          <div class="route-selector-tabs" id="originTabsContainer">
            ${dest.howToReach.originExamples.map((ex, idx) => `
              <button class="route-tab ${idx === 0 ? 'active' : ''}" data-origin-index="${idx}">
                From ${ex.from}
              </button>
            `).join('')}
          </div>
        </div>

        <div id="originRouteDetails">
          ${renderOriginDetails(dest.howToReach.originExamples[0])}
        </div>

        <!-- VISUAL WAYPOINTS -->
        <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border-subtle);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
            <h4 style="font-size: 1.15rem; color: #fff;">Visual Waypoint Timeline</h4>
            <span class="badge badge-emerald">Step-by-Step</span>
          </div>
          <div class="route-timeline-nodes">
            <div class="timeline-node">
              <div class="timeline-node-title">1. Departure Hub</div>
              <div class="timeline-node-desc">Depart via direct train, express flight, or highway.</div>
            </div>
            <div class="timeline-node">
              <div class="timeline-node-title">2. Transit Gateway (${dest.howToReach.nearestRailway.split('&')[0].trim()})</div>
              <div class="timeline-node-desc">Arrival at nearest airport (${dest.howToReach.nearestAirport}).</div>
            </div>
            <div class="timeline-node">
              <div class="timeline-node-title">3. Final Mountain Stretch</div>
              <div class="timeline-node-desc">${dest.howToReach.roadConnectivity}</div>
            </div>
            <div class="timeline-node">
              <div class="timeline-node-title">4. ${dest.name} Arrival</div>
              <div class="timeline-node-desc">${dest.howToReach.localTransport}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PLACES TO VISIT (ATTRACTIONS) -->
    <section class="container" style="margin-bottom: 4.5rem;">
      <div class="section-header">
        <div class="section-eyebrow">Top Sights</div>
        <h2>Places to Visit in ${dest.name}</h2>
      </div>
      <div class="grid-2">
        ${dest.attractions.map(att => `
          <div class="attraction-card">
            <h3 class="attraction-title">${att.name}</h3>
            <p class="attraction-desc">${att.description}</p>
            <div class="attraction-meta">
              <span>🕒 ${att.timing}</span>
              <span style="color: var(--accent-gold); font-weight: 600;">${att.bestFor}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- TOP THINGS TO DO -->
    <section class="container" style="margin-bottom: 4.5rem;">
      <div class="section-header">
        <div class="section-eyebrow">Must-Do Experiences</div>
        <h2>Top Things to Do</h2>
      </div>
      <div class="grid-3">
        ${dest.thingsToDo.map(act => `
          <div class="attraction-card" style="padding: 1.5rem;">
            <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
              <span style="color: var(--accent-orange); font-size: 1.3rem;">✦</span>
              <p style="margin: 0; color: var(--text-primary); font-weight: 500;">${act}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- SUGGESTED ITINERARIES -->
    <section class="container" style="margin-bottom: 4.5rem;">
      <div class="section-header">
        <div class="section-eyebrow">Step-by-Step Plans</div>
        <h2>Suggested Itinerary</h2>
        <p class="section-subtitle">A practical day-by-day plan so you never waste time wondering what to do next.</p>
      </div>

      <div class="itinerary-selector-tabs" id="itineraryTabs">
        ${dest.itineraries.map((it, idx) => `
          <button class="itinerary-tab-btn ${idx === 0 ? 'active' : ''}" data-itin-index="${idx}">
            ${it.title}
          </button>
        `).join('')}
      </div>

      <div id="itineraryDaysContainer" class="itinerary-days-container">
        ${renderItineraryDays(dest.itineraries[0])}
      </div>
    </section>

    <!-- INTERACTIVE PACKING CHECKLIST -->
    <section class="container" style="margin-bottom: 4.5rem;">
      <div class="section-header">
        <div class="section-eyebrow">Smart Preparation</div>
        <h2>Interactive Packing Checklist</h2>
        <p class="section-subtitle">Tap items as you pack. Your progress saves automatically on your phone or laptop!</p>
      </div>
      <div class="checklist-container" id="checklistWrapper" data-dest-id="${dest.id}"></div>
    </section>

    <!-- TRAVEL TIPS & GROUND TRUTH -->
    <section class="container" style="margin-bottom: 4.5rem;">
      <div class="section-header">
        <div class="section-eyebrow">Real Ground Truth</div>
        <h2>Practical Tips &amp; Things to Know</h2>
      </div>
      <div class="grid-2">
        <div class="fact-card" style="padding: 2rem;">
          <h4 style="margin-bottom: 1rem; color: var(--accent-orange);">💡 Essential Travel Tips</h4>
          <ul style="display: flex; flex-direction: column; gap: 0.85rem;">
            ${dest.travelTips.map(tip => `
              <li style="display: flex; gap: 0.6rem; font-size: 0.95rem; color: var(--text-secondary);">
                <span style="color: var(--accent-gold);">✓</span>
                <span>${tip}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="fact-card" style="padding: 2rem;">
          <h4 style="margin-bottom: 1rem; color: var(--accent-emerald);">📶 Connectivity &amp; Permits</h4>
          <ul style="display: flex; flex-direction: column; gap: 0.85rem; font-size: 0.95rem; color: var(--text-secondary);">
            <li><strong>Permits:</strong> ${dest.importantInfo.permits}</li>
            <li><strong>ATMs:</strong> ${dest.importantInfo.atmNetwork}</li>
            <li><strong>Mobile Network:</strong> ${dest.importantInfo.mobileConnectivity}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- PHOTO GALLERY WITH LIGHTBOX -->
    <section class="container" style="margin-bottom: 4.5rem;">
      <div class="section-header">
        <div class="section-eyebrow">Photo Gallery</div>
        <h2>Photos of ${dest.name}</h2>
        <p class="section-subtitle">Click any photo to open the fullscreen view.</p>
      </div>
      <div class="gallery-grid" id="destinationGalleryGrid">
        ${dest.gallery.map((img, idx) => `
          <div class="gallery-item" data-gallery-index="${idx}" data-img-url="${img.url}" data-img-caption="${img.caption}">
            <img src="${img.url}" alt="${img.caption}" loading="lazy" />
            <div class="gallery-item-caption">${img.caption}</div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- FAQ ACCORDION -->
    <section class="container" style="margin-bottom: 4.5rem;">
      <div class="section-header">
        <div class="section-eyebrow">Common Questions</div>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div class="faq-list">
        ${dest.faq.map(f => `
          <div class="faq-item">
            <button class="faq-trigger">
              <span>${f.q}</span>
              <svg class="faq-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="faq-content">
              <div class="faq-inner">${f.a}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- SOURCES & LAST UPDATED -->
    <div class="container" style="margin-bottom: 5rem;">
      <div class="sources-box">
        <div><strong>Sources:</strong> ${dest.sources}</div>
        <div><strong>Last Verified:</strong> ${dest.lastUpdated}</div>
      </div>
    </div>
  `;

  attachOriginTabs(dest);
  attachItineraryTabs(dest);
  attachFAQAccordion();

  if (typeof initChecklistEngine === 'function') {
    initChecklistEngine(dest);
  }
}

function renderOriginDetails(example) {
  return `
    <div style="background-color: var(--bg-tertiary); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; border-left: 3px solid var(--accent-orange);">
      <strong>Route Overview:</strong> ${example.routeSummary}
    </div>
    <div class="route-mode-grid">
      <div class="route-mode-card">
        <div class="route-mode-header">
          <div class="route-mode-icon">🚆</div>
          <div class="route-mode-title">By Train</div>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">${example.byTrain}</p>
      </div>
      <div class="route-mode-card">
        <div class="route-mode-header">
          <div class="route-mode-icon">✈️</div>
          <div class="route-mode-title">By Flight</div>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">${example.byFlight}</p>
      </div>
      <div class="route-mode-card">
        <div class="route-mode-header">
          <div class="route-mode-icon">🚌</div>
          <div class="route-mode-title">By Bus</div>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">${example.byBus}</p>
      </div>
      <div class="route-mode-card">
        <div class="route-mode-header">
          <div class="route-mode-icon">🚗</div>
          <div class="route-mode-title">By Road</div>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">${example.byRoad}</p>
      </div>
    </div>
  `;
}

function renderItineraryDays(itinerary) {
  return itinerary.days.map(d => `
    <div class="itinerary-day-card">
      <div class="itinerary-day-num" style="background: rgba(255, 107, 53, 0.15); color: var(--accent-orange);">0${d.day}</div>
      <div class="itinerary-day-content">
        <h4>${d.title}</h4>
        <p>${d.details}</p>
      </div>
    </div>
  `).join('');
}

function attachOriginTabs(dest) {
  const tabs = document.querySelectorAll('#originTabsContainer .route-tab');
  const detailsContainer = document.getElementById('originRouteDetails');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const idx = parseInt(tab.dataset.originIndex, 10);
      if (detailsContainer && dest.howToReach.originExamples[idx]) {
        detailsContainer.innerHTML = renderOriginDetails(dest.howToReach.originExamples[idx]);
      }
    });
  });
}

function attachItineraryTabs(dest) {
  const tabs = document.querySelectorAll('#itineraryTabs .itinerary-tab-btn');
  const daysContainer = document.getElementById('itineraryDaysContainer');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const idx = parseInt(tab.dataset.itinIndex, 10);
      if (daysContainer && dest.itineraries[idx]) {
        daysContainer.innerHTML = renderItineraryDays(dest.itineraries[idx]);
      }
    });
  });
}

function attachFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });
}
