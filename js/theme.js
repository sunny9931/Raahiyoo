/**
 * RAAHIYOO — MIDNIGHT MOUNTAIN THEME ENGINE
 * Instant Dark/Light mode switcher with localStorage persistence & OS sync
 */

(function () {
  // 1. Resolve initial theme (LocalStorage > System Preference > Light)
  const savedTheme = (function() {
    try { return localStorage.getItem('raahiyoo_theme'); } catch(e) { return null; }
  })();
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  // Apply immediately to prevent flash
  document.documentElement.setAttribute('data-theme', initialTheme);

  // Expose global helpers
  window.getCurrentTheme = function () {
    return document.documentElement.getAttribute('data-theme') || 'light';
  };

  window.setTheme = function (theme) {
    const validTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', validTheme);
    try {
      localStorage.setItem('raahiyoo_theme', validTheme);
    } catch (e) {}
    updateThemeUI(validTheme);
    window.dispatchEvent(new CustomEvent('raahiyoo_theme_change', { detail: { theme: validTheme } }));
  };

  window.toggleTheme = function () {
    const current = window.getCurrentTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    window.setTheme(next);
  };

  function updateThemeUI(theme) {
    const isDark = theme === 'dark';

    // Update header toggle buttons
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      const label = btn.querySelector('.theme-label');
      if (label) label.textContent = isDark ? 'Dark' : 'Light';
    });

    // Update mobile toggle switch if present
    const mobileSwitches = document.querySelectorAll('.theme-switch-pill');
    mobileSwitches.forEach(sw => {
      sw.classList.toggle('active', isDark);
    });

    const mobileIcons = document.querySelectorAll('#mobileThemeIcon');
    mobileIcons.forEach(icon => {
      icon.textContent = isDark ? '☀️' : '🌙';
    });

    const mobileText = document.querySelectorAll('#mobileThemeText');
    mobileText.forEach(txt => {
      txt.textContent = isDark ? 'Midnight Mode (On)' : 'Midnight Dark Mode';
    });
  }

  // 2. Initialize UI listeners once DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    updateThemeUI(window.getCurrentTheme());

    // Bind click handlers to any theme toggle buttons on page
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        window.toggleTheme();
      };
    });

    document.querySelectorAll('.theme-switch-pill, #mobileThemeRow').forEach(el => {
      el.onclick = (e) => {
        e.preventDefault();
        window.toggleTheme();
      };
    });

    // Listen to system preference changes if user hasn't chosen a preference
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('raahiyoo_theme')) {
          window.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  });
})();
