/**
 * RAAHIYOO — Interactive Travel Checklist Controller
 * LocalStorage persistence, progress tracking, and category filtering
 */

function initChecklistEngine(dest) {
  const wrapper = document.getElementById('checklistWrapper');
  if (!wrapper || !dest || !dest.checklist) return;

  const storageKey = `raahiyoo_checklist_${dest.id}`;
  let savedState = {};

  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) savedState = JSON.parse(raw);
  } catch (e) {
    savedState = {};
  }

  function updateProgress() {
    const total = dest.checklist.length;
    const checkedCount = Object.values(savedState).filter(Boolean).length;
    const percentage = total > 0 ? Math.round((checkedCount / total) * 100) : 0;

    const fill = document.getElementById('checklistProgressFill');
    const label = document.getElementById('checklistProgressLabel');

    if (fill) fill.style.width = `${percentage}%`;
    if (label) label.textContent = `${percentage}% Prepared (${checkedCount}/${total} packed)`;
  }

  wrapper.innerHTML = `
    <div class="checklist-header">
      <div>
        <h3 style="font-size: 1.3rem; margin-bottom: 0.25rem;">Essential Packing Checklist</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">Tailored for ${dest.name}'s climate and terrain.</p>
      </div>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <span id="checklistProgressLabel" style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-terracotta); font-weight: 600;">
          0% Prepared
        </span>
        <button class="btn btn-ghost btn-sm" id="resetChecklistBtn" style="font-size: 0.75rem;">Reset</button>
      </div>
    </div>

    <div class="checklist-progress-bar">
      <div class="checklist-progress-fill" id="checklistProgressFill"></div>
    </div>

    <div class="checklist-items">
      ${dest.checklist.map((item, idx) => {
        const isChecked = !!savedState[idx];
        return `
          <div class="checklist-item ${isChecked ? 'checked' : ''}" data-item-index="${idx}">
            <div class="custom-checkbox">
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="item-text">${item.item}</span>
            <span class="item-badge">${item.category}</span>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Attach item toggle listeners
  const items = wrapper.querySelectorAll('.checklist-item');
  items.forEach(el => {
    el.addEventListener('click', () => {
      const idx = el.dataset.itemIndex;
      const isCurrentlyChecked = el.classList.contains('checked');

      if (isCurrentlyChecked) {
        el.classList.remove('checked');
        savedState[idx] = false;
      } else {
        el.classList.add('checked');
        savedState[idx] = true;
      }

      try {
        localStorage.setItem(storageKey, JSON.stringify(savedState));
      } catch (e) {}

      updateProgress();
    });
  });

  // Attach reset button listener
  const resetBtn = document.getElementById('resetChecklistBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      savedState = {};
      try {
        localStorage.removeItem(storageKey);
      } catch (e) {}
      items.forEach(i => i.classList.remove('checked'));
      updateProgress();
    });
  }

  updateProgress();
}
