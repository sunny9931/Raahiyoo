/**
 * RAAHIYOO 2.0 COMMERCIAL EDITION — Luxury Travel Budget Studio
 */

document.addEventListener('DOMContentLoaded', () => {
  initLuxuryBudgetStudio();
});

function initLuxuryBudgetStudio() {
  const destInput = document.getElementById('calcDestSearchInput');
  const destDropdown = document.getElementById('calcDestDropdown');
  const selectedDestImg = document.getElementById('calcBlueprintImg');
  const selectedDestName = document.getElementById('calcBlueprintDestName');
  const selectedDestState = document.getElementById('calcBlueprintDestState');
  
  const daysVal = document.getElementById('calcDaysVal');
  const daysMinus = document.getElementById('calcDaysMinus');
  const daysPlus = document.getElementById('calcDaysPlus');
  const presetPills = document.querySelectorAll('.calc-preset-pill');

  const paxVal = document.getElementById('calcPaxVal');
  const paxMinus = document.getElementById('calcPaxMinus');
  const paxPlus = document.getElementById('calcPaxPlus');

  const tierCards = document.querySelectorAll('.calc-tier-card');

  const totalDisplay = document.getElementById('calcTotalCost');
  const perPersonDisplay = document.getElementById('calcPerPersonCost');
  const stayDisplay = document.getElementById('calcStayCost');
  const foodDisplay = document.getElementById('calcFoodCost');
  const transitDisplay = document.getElementById('calcTransitCost');
  const activityDisplay = document.getElementById('calcActivityCost');
  const tipDisplay = document.getElementById('calcInsiderTipText');

  const barStay = document.getElementById('calcBarStay');
  const barFood = document.getElementById('calcBarFood');
  const barTransit = document.getElementById('calcBarTransit');
  const barActivity = document.getElementById('calcBarActivity');

  if (typeof DESTINATIONS === 'undefined' || DESTINATIONS.length === 0) return;

  let currentDest = DESTINATIONS[0];
  let selectedDays = 3;
  let selectedPax = 2;
  let selectedTier = 'moderate'; // 'budget', 'moderate', 'luxury'

  // 1. Populate & Setup Searchable Destination Dropdown
  function renderDestOptions(q = '') {
    if (!destDropdown) return;
    const query = q.toLowerCase().trim();
    const matches = DESTINATIONS.filter(d => 
      !query || 
      d.name.toLowerCase().includes(query) || 
      d.state.toLowerCase().includes(query)
    ).slice(0, 10);

    destDropdown.innerHTML = matches.map(d => `
      <div class="calc-dest-option" onclick="selectCalcDest('${d.id}')">
        <img src="${d.heroImage}" alt="${d.name}" />
        <div class="calc-dest-option-info">
          <div class="calc-dest-option-name">${d.name}</div>
          <div class="calc-dest-option-sub">📍 ${d.state} &bull; ${d.elevation}</div>
        </div>
      </div>
    `).join('');
  }

  window.selectCalcDest = function(id) {
    const found = DESTINATIONS.find(d => d.id === id);
    if (found) {
      currentDest = found;
      if (destInput) destInput.value = `${found.name} (${found.state})`;
      if (destDropdown) destDropdown.classList.remove('active');
      calculateStudio();
    }
  };

  if (destInput && destDropdown) {
    destInput.value = `${currentDest.name} (${currentDest.state})`;
    destInput.addEventListener('focus', () => {
      renderDestOptions(destInput.value);
      destDropdown.classList.add('active');
    });
    destInput.addEventListener('input', (e) => {
      renderDestOptions(e.target.value);
      destDropdown.classList.add('active');
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.calc-dest-select-wrapper')) {
        destDropdown.classList.remove('active');
      }
    });
  }

  // 2. Days Stepper & Preset Controls
  if (daysMinus && daysPlus && daysVal) {
    daysMinus.addEventListener('click', () => {
      if (selectedDays > 1) {
        selectedDays--;
        daysVal.textContent = `${selectedDays} Days`;
        updateActivePreset();
        calculateStudio();
      }
    });

    daysPlus.addEventListener('click', () => {
      if (selectedDays < 20) {
        selectedDays++;
        daysVal.textContent = `${selectedDays} Days`;
        updateActivePreset();
        calculateStudio();
      }
    });
  }

  presetPills.forEach(pill => {
    pill.addEventListener('click', () => {
      selectedDays = parseInt(pill.dataset.days, 10) || 3;
      if (daysVal) daysVal.textContent = `${selectedDays} Days`;
      updateActivePreset();
      calculateStudio();
    });
  });

  function updateActivePreset() {
    presetPills.forEach(p => {
      p.classList.toggle('active', parseInt(p.dataset.days, 10) === selectedDays);
    });
  }

  // 3. Travelers Stepper
  if (paxMinus && paxPlus && paxVal) {
    paxMinus.addEventListener('click', () => {
      if (selectedPax > 1) {
        selectedPax--;
        paxVal.textContent = selectedPax === 1 ? '1 Person' : `${selectedPax} Persons`;
        calculateStudio();
      }
    });

    paxPlus.addEventListener('click', () => {
      if (selectedPax < 12) {
        selectedPax++;
        paxVal.textContent = `${selectedPax} Persons`;
        calculateStudio();
      }
    });
  }

  // 4. Comfort Style Tiers
  tierCards.forEach(card => {
    card.addEventListener('click', () => {
      tierCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      selectedTier = card.dataset.tier;
      calculateStudio();
    });
  });

  // 5. Core Calculation & Live Visual Blueprint Update
  function calculateStudio() {
    if (!currentDest) return;

    // Update destination preview in right column
    if (selectedDestImg) selectedDestImg.src = currentDest.heroImage;
    if (selectedDestName) selectedDestName.textContent = currentDest.name;
    if (selectedDestState) selectedDestState.textContent = currentDest.state;

    // Multipliers
    let tierMultiplier = 1.0;
    if (selectedTier === 'budget') tierMultiplier = 0.7;
    if (selectedTier === 'moderate') tierMultiplier = 1.25;
    if (selectedTier === 'luxury') tierMultiplier = 2.6;

    // Base per person daily
    const baseDailyPerPerson = currentDest.basePriceINR * tierMultiplier;

    // Itemized costs per person
    const stayPerPerson = Math.round(baseDailyPerPerson * 0.42 * selectedDays);
    const foodPerPerson = Math.round(baseDailyPerPerson * 0.26 * selectedDays);
    const transitPerPerson = Math.round(baseDailyPerPerson * 0.18 * selectedDays);
    const activityPerPerson = Math.round(baseDailyPerPerson * 0.14 * selectedDays);
    const totalPerPerson = stayPerPerson + foodPerPerson + transitPerPerson + activityPerPerson;

    // Total for all travelers (room sharing logic applied)
    const roomCount = Math.ceil(selectedPax / 2);
    const stayTotal = Math.round((stayPerPerson * 2 * roomCount)); // shared twin rooms
    const foodTotal = foodPerPerson * selectedPax;
    const transitTotal = Math.round(transitPerPerson * (selectedPax > 2 ? selectedPax * 0.75 : selectedPax)); // shared cabs
    const activityTotal = activityPerPerson * selectedPax;
    const grandTotal = stayTotal + foodTotal + transitTotal + activityTotal;

    // Format Prices
    const format = typeof formatPrice === 'function' ? formatPrice : (n) => `₹${n.toLocaleString('en-IN')}`;

    if (totalDisplay) totalDisplay.textContent = format(grandTotal);
    if (perPersonDisplay) perPersonDisplay.textContent = `${format(Math.round(grandTotal / selectedPax))} / person`;

    if (stayDisplay) stayDisplay.textContent = format(stayTotal);
    if (foodDisplay) foodDisplay.textContent = format(foodTotal);
    if (transitDisplay) transitDisplay.textContent = format(transitTotal);
    if (activityDisplay) activityDisplay.textContent = format(activityTotal);

    // Update Progress Bar Percentages
    const stayPct = Math.round((stayTotal / grandTotal) * 100);
    const foodPct = Math.round((foodTotal / grandTotal) * 100);
    const transitPct = Math.round((transitTotal / grandTotal) * 100);
    const activityPct = 100 - (stayPct + foodPct + transitPct);

    if (barStay) barStay.style.width = `${stayPct}%`;
    if (barFood) barFood.style.width = `${foodPct}%`;
    if (barTransit) barTransit.style.width = `${transitPct}%`;
    if (barActivity) barActivity.style.width = `${activityPct}%`;

    // Dynamic Insider Savings Tip
    if (tipDisplay) {
      if (currentDest.category === 'mountains') {
        tipDisplay.innerHTML = `<strong>💡 Mountain Pro Tip:</strong> Book local union cabs from the main taxi stand early morning (6:30 AM) to get the fixed government chart rate without peak surge!`;
      } else if (currentDest.category === 'beaches') {
        tipDisplay.innerHTML = `<strong>💡 Coastal Pro Tip:</strong> Renting a self-drive scooter (₹400/day) saves up to ₹2,500 compared to local tourist autos.`;
      } else if (currentDest.category === 'sacred') {
        tipDisplay.innerHTML = `<strong>💡 Sacred Circuit Tip:</strong> Book VIP special darshan tickets 3 weeks ahead on the official temple board trust portal.`;
      } else {
        tipDisplay.innerHTML = `<strong>💡 Insider Tip:</strong> Exploring major monuments during opening hours (8:00 AM - 10:00 AM) avoids heavy tourist crowds and peak afternoon heat.`;
      }
    }
  }

  // Currency change sync
  const currencySelect = document.getElementById('currencySelector');
  if (currencySelect) {
    currencySelect.addEventListener('change', calculateStudio);
  }

  // Initial calculation
  calculateStudio();
}
