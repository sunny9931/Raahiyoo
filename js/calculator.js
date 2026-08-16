/**
 * RAAHIYOO 2.0 COMMERCIAL EDITION — Visual Interactive Budget Calculator
 */

document.addEventListener('DOMContentLoaded', () => {
  initBudgetCalculator();
});

function initBudgetCalculator() {
  const destSelect = document.getElementById('calcDestSelect');
  const daysDisplay = document.getElementById('calcDaysVal');
  const daysMinusBtn = document.getElementById('calcDaysMinus');
  const daysPlusBtn = document.getElementById('calcDaysPlus');
  const styleCards = document.querySelectorAll('.calc-style-card');

  const totalDisplay = document.getElementById('calcTotalCost');
  const stayDisplay = document.getElementById('calcStayCost');
  const foodDisplay = document.getElementById('calcFoodCost');
  const transitDisplay = document.getElementById('calcTransitCost');
  const activityDisplay = document.getElementById('calcActivityCost');

  let selectedDays = 3;
  let selectedStyle = 'moderate'; // 'budget', 'moderate', 'luxury'

  if (!destSelect || !daysDisplay || typeof DESTINATIONS === 'undefined') return;

  // Populate Destination dropdown
  destSelect.innerHTML = DESTINATIONS.map(d => `
    <option value="${d.id}">${d.name} (${d.state})</option>
  `).join('');

  window.calculate = function() {
    const destId = destSelect.value;
    const dest = DESTINATIONS.find(d => d.id === destId) || DESTINATIONS[0];

    let multiplier = 1.0;
    if (selectedStyle === 'budget') multiplier = 0.75;
    if (selectedStyle === 'moderate') multiplier = 1.25;
    if (selectedStyle === 'luxury') multiplier = 2.5;

    const baseDaily = dest.basePriceINR * multiplier;

    const stayCost = Math.round(baseDaily * 0.45 * selectedDays);
    const foodCost = Math.round(baseDaily * 0.25 * selectedDays);
    const transitCost = Math.round(baseDaily * 0.15 * selectedDays);
    const activityCost = Math.round(baseDaily * 0.15 * selectedDays);
    const totalCost = stayCost + foodCost + transitCost + activityCost;

    if (totalDisplay) totalDisplay.textContent = typeof formatPrice === 'function' ? formatPrice(totalCost) : `₹${totalCost.toLocaleString('en-IN')}`;
    if (stayDisplay) stayDisplay.textContent = typeof formatPrice === 'function' ? formatPrice(stayCost) : `₹${stayCost.toLocaleString('en-IN')}`;
    if (foodDisplay) foodDisplay.textContent = typeof formatPrice === 'function' ? formatPrice(foodCost) : `₹${foodCost.toLocaleString('en-IN')}`;
    if (transitDisplay) transitDisplay.textContent = typeof formatPrice === 'function' ? formatPrice(transitCost) : `₹${transitCost.toLocaleString('en-IN')}`;
    if (activityDisplay) activityDisplay.textContent = typeof formatPrice === 'function' ? formatPrice(activityCost) : `₹${activityCost.toLocaleString('en-IN')}`;
  };

  destSelect.addEventListener('change', calculate);

  if (daysMinusBtn && daysPlusBtn) {
    daysMinusBtn.addEventListener('click', () => {
      if (selectedDays > 1) {
        selectedDays--;
        daysDisplay.textContent = `${selectedDays} Days`;
        calculate();
      }
    });

    daysPlusBtn.addEventListener('click', () => {
      if (selectedDays < 15) {
        selectedDays++;
        daysDisplay.textContent = `${selectedDays} Days`;
        calculate();
      }
    });
  }

  styleCards.forEach(card => {
    card.addEventListener('click', () => {
      styleCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      selectedStyle = card.dataset.style;
      calculate();
    });
  });

  calculate();
}
