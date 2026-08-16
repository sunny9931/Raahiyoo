/**
 * RAAHIYOO — Main Global Script
 * Global shell initialization, keyboard shortcuts, search modal, and utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  initGlobalShell();
  initQuickSearchModal();
  initDynamicCopyright();
});

function initGlobalShell() {
  // Highlight active navigation links based on current path
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .drawer-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function initQuickSearchModal() {
  const triggerBtns = document.querySelectorAll('.search-trigger-btn, [data-action="open-search"]');
  const modalOverlay = document.getElementById('searchModalOverlay');
  const searchInput = document.getElementById('searchModalInput');
  const searchResults = document.getElementById('searchModalResults');

  if (!modalOverlay || !searchInput) return;

  function openSearch() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 50);
    renderModalResults(searchInput.value.trim());
  }

  function closeSearch() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openSearch();
    });
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeSearch();
  });

  // Global Keyboard Shortcut: Cmd+K / Ctrl+K & Esc
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (modalOverlay.classList.contains('active')) {
        closeSearch();
      } else {
        openSearch();
      }
    } else if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeSearch();
    }
  });

  // Live Input filtering inside modal
  searchInput.addEventListener('input', (e) => {
    renderModalResults(e.target.value.trim());
  });

  function renderModalResults(query) {
    if (!searchResults) return;

    const lowerQuery = query.toLowerCase();
    const matches = DESTINATIONS_DATA.filter(dest => {
      if (!lowerQuery) return true;
      return (
        dest.name.toLowerCase().includes(lowerQuery) ||
        dest.state.toLowerCase().includes(lowerQuery) ||
        dest.region.toLowerCase().includes(lowerQuery) ||
        dest.category.some(c => c.toLowerCase().includes(lowerQuery)) ||
        (dest.mood && dest.mood.some(m => m.toLowerCase().includes(lowerQuery)))
      );
    }).slice(0, 6);

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div style="padding: 2rem 1rem; text-align: center; color: var(--text-muted);">
          <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-primary);">No destinations found</p>
          <p style="font-size: 0.88rem;">Try searching for "Himalayas", "Rishikesh", "Spiritual", or "Treks".</p>
        </div>
      `;
      return;
    }

    searchResults.innerHTML = matches.map(dest => `
      <a href="destination.html?id=${dest.id}" class="search-result-item">
        <img src="${dest.heroImage}" alt="${dest.name}" class="search-result-thumb" loading="lazy" />
        <div class="search-result-info">
          <div class="search-result-title">${dest.name}</div>
          <div class="search-result-meta">${dest.state} • ${dest.category.join(' • ')}</div>
        </div>
        <span class="badge badge-terracotta" style="font-size: 0.7rem;">Explore →</span>
      </a>
    `).join('');
  }
}

function initDynamicCopyright() {
  const yearSpans = document.querySelectorAll('.dynamic-year');
  const currentYear = new Date().getFullYear();
  yearSpans.forEach(span => {
    span.textContent = currentYear;
  });
}
