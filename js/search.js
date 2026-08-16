/**
 * RAAHIYOO — Smart Search & Dynamic Discovery Engine
 * Multi-criteria fuzzy matching, category chips, state filters & instant card rendering
 */

document.addEventListener('DOMContentLoaded', () => {
  initDestinationDirectory();
});

function initDestinationDirectory() {
  const directoryGrid = document.getElementById('destinationsDirectoryGrid');
  const searchInput = document.getElementById('destinationSearchInput');
  const categoryChips = document.querySelectorAll('.filter-category-chip');
  const stateFilterSelect = document.getElementById('stateFilterSelect');
  const sortSelect = document.getElementById('sortSelect');
  const resultsCount = document.getElementById('resultsCount');

  if (!directoryGrid || typeof DESTINATIONS_DATA === 'undefined') return;

  let activeCategory = 'all';
  let activeQuery = '';
  let activeState = 'all';
  let activeSort = 'recommended';

  // Read URL search params if present (e.g. ?category=spiritual or ?q=manali)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('category')) {
    activeCategory = urlParams.get('category').toLowerCase();
    categoryChips.forEach(chip => {
      if (chip.dataset.category.toLowerCase() === activeCategory) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });
  }
  if (urlParams.has('q')) {
    activeQuery = urlParams.get('q');
    if (searchInput) searchInput.value = activeQuery;
  }

  function filterAndRender() {
    let filtered = DESTINATIONS_DATA.filter(dest => {
      // Category filter
      if (activeCategory !== 'all') {
        const matchesCategory = dest.category.some(c => c.toLowerCase() === activeCategory.toLowerCase());
        const matchesMood = dest.mood && dest.mood.some(m => m.toLowerCase() === activeCategory.toLowerCase());
        if (!matchesCategory && !matchesMood) return false;
      }

      // State filter
      if (activeState !== 'all' && dest.state.toLowerCase() !== activeState.toLowerCase()) {
        return false;
      }

      // Search query filter (Multi-factor & synonyms)
      if (activeQuery) {
        const q = activeQuery.toLowerCase();
        const inName = dest.name.toLowerCase().includes(q);
        const inState = dest.state.toLowerCase().includes(q);
        const inRegion = dest.region.toLowerCase().includes(q);
        const inDesc = dest.description.toLowerCase().includes(q);
        const inTagline = dest.tagline.toLowerCase().includes(q);
        const inCat = dest.category.some(c => c.toLowerCase().includes(q));
        const inThings = dest.thingsToDo.some(t => t.toLowerCase().includes(q));

        // Synonyms
        let inSynonym = false;
        if (q === 'snow' && (dest.id === 'tungnath' || dest.id === 'manali' || dest.id === 'sikkim')) inSynonym = true;
        if (q === 'temple' && (dest.id === 'varanasi' || dest.id === 'ayodhya' || dest.id === 'tungnath' || dest.id === 'rishikesh')) inSynonym = true;
        if (q === 'rafting' && (dest.id === 'rishikesh')) inSynonym = true;
        if (q === 'beach' && (dest.id === 'goa')) inSynonym = true;

        if (!inName && !inState && !inRegion && !inDesc && !inTagline && !inCat && !inThings && !inSynonym) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    if (activeSort === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (activeSort === 'name-desc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Update count display
    if (resultsCount) {
      resultsCount.textContent = `Showing ${filtered.length} of ${DESTINATIONS_DATA.length} Journeys`;
    }

    // Render HTML Cards
    if (filtered.length === 0) {
      directoryGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <svg class="empty-state-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="empty-state-title">No journeys found</h3>
          <p class="empty-state-desc">Try clearing your filters or searching for terms like "Himalayas", "Spiritual", "Snow", or "Weekend".</p>
          <button class="btn btn-secondary btn-sm" id="resetFiltersBtn">Reset All Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          activeCategory = 'all';
          activeQuery = '';
          activeState = 'all';
          if (searchInput) searchInput.value = '';
          if (stateFilterSelect) stateFilterSelect.value = 'all';
          categoryChips.forEach(c => c.classList.remove('active'));
          const allChip = document.querySelector('.filter-category-chip[data-category="all"]');
          if (allChip) allChip.classList.add('active');
          filterAndRender();
        });
      }
      return;
    }

    directoryGrid.innerHTML = filtered.map(dest => `
      <article class="destination-card" data-id="${dest.id}">
        <div class="card-media">
          <img src="${dest.heroImage}" alt="${dest.name}, ${dest.state}" loading="lazy" />
          <div class="card-media-overlay"></div>
          <div class="card-badges">
            <span class="badge badge-terracotta">${dest.category[0]}</span>
            <span class="badge badge-pine">${dest.elevation}</span>
          </div>
        </div>
        <div class="card-body">
          <div class="card-location">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            ${dest.state} • ${dest.region}
          </div>
          <h3 class="card-title">${dest.name}</h3>
          <p class="card-desc">${dest.description}</p>
          <div class="card-metadata">
            <div class="meta-item">
              <span class="meta-label">Best Time</span>
              <span class="meta-value">${dest.bestTime.split('&')[0].trim()}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Duration</span>
              <span class="meta-value">${dest.recommendedDuration}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Terrain</span>
              <span class="meta-value">${dest.difficulty}</span>
            </div>
          </div>
          <a href="destination.html?id=${dest.id}" class="btn btn-secondary card-cta">
            Explore Journey
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </article>
    `).join('');
  }

  // Event Listeners for Filters
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeQuery = e.target.value.trim();
      filterAndRender();
    });
  }

  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.dataset.category;
      filterAndRender();
    });
  });

  if (stateFilterSelect) {
    stateFilterSelect.addEventListener('change', (e) => {
      activeState = e.target.value;
      filterAndRender();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeSort = e.target.value;
      filterAndRender();
    });
  }

  filterAndRender();
}
