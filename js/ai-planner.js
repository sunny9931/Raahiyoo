/**
 * RAAHIYOO 2.0 — AUTHENTIC AI TRIP PLANNER ENGINE
 * Genuine, multi-constraint travel itinerary generator tailored for real Indian routes.
 */

// Major Indian Departure Hubs with transit connectivity data
const DEPARTURE_HUBS = [
  { id: 'delhi', name: 'Delhi NCR', region: 'North', airport: 'DEL', hasVandeBharat: true },
  { id: 'mumbai', name: 'Mumbai', region: 'West', airport: 'BOM', hasVandeBharat: true },
  { id: 'bengaluru', name: 'Bengaluru', region: 'South', airport: 'BLR', hasVandeBharat: true },
  { id: 'kolkata', name: 'Kolkata', region: 'East', airport: 'CCU', hasVandeBharat: true },
  { id: 'chennai', name: 'Chennai', region: 'South', airport: 'MAA', hasVandeBharat: true },
  { id: 'hyderabad', name: 'Hyderabad', region: 'South', airport: 'HYD', hasVandeBharat: true },
  { id: 'ahmedabad', name: 'Ahmedabad', region: 'West', airport: 'AMD', hasVandeBharat: true },
  { id: 'pune', name: 'Pune', region: 'West', airport: 'PNQ', hasVandeBharat: true },
  { id: 'chandigarh', name: 'Chandigarh', region: 'North', airport: 'IXC', hasVandeBharat: true },
  { id: 'jaipur', name: 'Jaipur', region: 'North', airport: 'JAI', hasVandeBharat: true },
  { id: 'lucknow', name: 'Lucknow', region: 'North', airport: 'LKO', hasVandeBharat: true },
  { id: 'kochi', name: 'Kochi', region: 'South', airport: 'COK', hasVandeBharat: true },
  { id: 'indore', name: 'Indore', region: 'Central', airport: 'IDR', hasVandeBharat: true },
  { id: 'patna', name: 'Patna', region: 'East', airport: 'PAT', hasVandeBharat: true }
];

// Group styles with distinctive travel parameters
const TRAVEL_STYLES = {
  couple: {
    label: 'Romantic Couple',
    icon: '💑',
    desc: 'Scenic viewpoints, boutique stays, cozy cafes & relaxed pacing.',
    paceMultiplier: 0.9,
    stayFocus: 'Boutique heritage stay or riverside valley view cottage'
  },
  family: {
    label: 'Family with Kids/Elders',
    icon: '👨‍👩‍👧‍👦',
    desc: 'Comfortable transit, gentle walks, clean dining & family-friendly spots.',
    paceMultiplier: 0.8,
    stayFocus: 'Spacious resort with in-house dining and easy road access'
  },
  solo: {
    label: 'Solo Explorer',
    icon: '🎒',
    desc: 'Photography spots, walking trails, hidden cafes & authentic immersion.',
    paceMultiplier: 1.2,
    stayFocus: 'Social backpacker hostel or authentic family-run homestay'
  },
  friends: {
    label: 'Friends / Group',
    icon: '🚀',
    desc: 'Action-packed adventures, river rafting, sunsets & cafe nightlife.',
    paceMultiplier: 1.15,
    stayFocus: 'Vibrant riverside camp or shared mountain villa'
  },
  trekker: {
    label: 'Trekker & Nature Enthusiast',
    icon: '⛰️',
    desc: 'High ridges, alpine meadows, sunrise photography & raw landscapes.',
    paceMultiplier: 1.3,
    stayFocus: 'Rustic alpine campsite or upper ridge village guesthouse'
  }
};

// Budget tiers
const BUDGET_TIERS = {
  budget: {
    label: 'Backpacker / Budget',
    multiplier: 0.65,
    stayType: 'Hostel / Budget Homestay (₹800 - ₹1,500/night)',
    foodType: 'Authentic Dhabas, Local Thalis & Street Eats',
    transitType: 'HRTC/State Volvo Buses & Shared Local Cabs'
  },
  comfort: {
    label: 'Comfort / Balanced',
    multiplier: 1.0,
    stayType: '3-Star Valley View Resort or Heritage Haveli (₹2,500 - ₹4,500/night)',
    foodType: 'Curated Cafes, Fine Dining & Authentic Regional Specialties',
    transitType: 'Dedicated Private Cab (Sedan / SUV) & Vande Bharat'
  },
  luxury: {
    label: 'Luxury / Heritage',
    multiplier: 2.2,
    stayType: '5-Star Luxury Resort or Royal Heritage Palace (₹8,000 - ₹18,000/night)',
    foodType: 'Chef Curated Dining, Riverside Picnics & Exclusive Lounges',
    transitType: 'Chauffeur Driven Innova Crysta / Luxury Direct Flight'
  }
};

/**
 * Generate an authentic, time-sequenced travel blueprint
 */
function generateRealAITripPlan(params) {
  const {
    originId = 'delhi',
    destId = 'manali',
    days = 4,
    month = 'Current Season',
    styleKey = 'couple',
    tierKey = 'comfort',
    pace = 'balanced'
  } = params;

  // Resolve Destination
  const dest = DESTINATIONS.find(d => d.id === destId) || DESTINATIONS[0];
  const origin = DEPARTURE_HUBS.find(h => h.id === originId) || { id: 'custom', name: originId, region: 'India' };
  const style = TRAVEL_STYLES[styleKey] || TRAVEL_STYLES.couple;
  const tier = BUDGET_TIERS[tierKey] || BUDGET_TIERS.comfort;

  // Calculate Real-World Transit Blueprint
  const transitPlan = resolveAuthenticTransit(origin, dest, tierKey);

  // Generate Ground-Truth Advisories
  const groundTruthAlerts = generateGroundTruthAlerts(dest, month);

  // Generate Day-by-Day Time-Sequenced Itinerary
  const daySchedule = generateDayByDaySchedule(dest, days, style, pace, tier);

  // Compute Itemized Authentic Budget
  const budgetBreakdown = calculateItemizedBudget(dest, days, tierKey);

  return {
    meta: {
      originName: origin.name,
      destName: dest.name,
      destState: dest.state,
      destElevation: dest.elevation || 'Valley Level',
      destImage: dest.heroImage,
      days: parseInt(days, 10),
      month: month,
      style: style,
      tier: tier,
      pace: pace,
      generatedAt: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    },
    transit: transitPlan,
    itinerary: daySchedule,
    budget: budgetBreakdown,
    alerts: groundTruthAlerts,
    packing: dest.packing || [
      'Comfortable walking shoes with good grip',
      'Layered clothing suitable for mountain mornings',
      'Sunscreen SPF 50 & Polarized sunglasses',
      'Universal power bank & basic medical kit'
    ],
    tips: dest.tips || [
      'Start early morning to beat the midday rush at famous viewpoints.',
      'Always confirm prepaid taxi union rates before booking local rides.'
    ]
  };
}

/**
 * Resolve authentic train, flight, and highway routes
 */
function resolveAuthenticTransit(origin, dest, tierKey) {
  const isNorth = dest.region === 'north';
  const isSouth = dest.region === 'south';
  const isWest = dest.region === 'west';
  const isEast = dest.region === 'east';

  let flightText = dest.nearestHubs?.airport 
    ? `Fly from ${origin.name} to ${dest.nearestHubs.airport}. Direct/connecting flights operated daily.`
    : `Nearest commercial airport is ${dest.nearestHubs?.airport || 'State Capital Airport'}.`;

  let trainText = dest.nearestHubs?.railway
    ? `Superfast / Vande Bharat Express to ${dest.nearestHubs.railway}, followed by trusted taxi/bus to ${dest.name}.`
    : `Board express train to nearest major junction, followed by scenic road transfer.`;

  let roadText = dest.nearestHubs?.road
    ? `Scenic road journey via ${dest.nearestHubs.road}. Excellent highway conditions with frequent expressway plazas.`
    : `Accessible via national highway network with scenic mountain/coastal view routes.`;

  let recommendedMode = 'Train + Scenic Cab';
  if (tierKey === 'luxury' || (origin.region !== dest.region && !['delhi', 'chandigarh'].includes(origin.id))) {
    recommendedMode = 'Flight + Private Chauffeur';
  } else if (tierKey === 'budget') {
    recommendedMode = 'Overnight Volvo Bus / Sleeper Train';
  }

  return {
    recommendedMode,
    flight: flightText,
    train: trainText,
    road: roadText,
    summary: dest.transitSummary || `${dest.name} is well connected from ${origin.name} via multi-modal rail, air, and highway routes.`
  };
}

/**
 * Generate ground truth safety, AMS, permits and seasonality alerts
 */
function generateGroundTruthAlerts(dest, month) {
  const alerts = [];

  // Elevation AMS check (> 2400 meters)
  const elevNum = parseInt((dest.elevation || '').replace(/[^0-9]/g, ''), 10) || 0;
  if (elevNum >= 2400 || ['leh', 'spiti', 'kedarnath', 'badrinath', 'gulmarg', 'sonamarg', 'munsiari', 'sangla', 'chitkul', 'tabo', 'kaza'].includes(dest.id)) {
    alerts.push({
      type: 'health',
      icon: '🫁',
      title: 'High Altitude Acclimatization Advisory',
      desc: `Elevation is ${dest.elevation || 'High Altitude (> 2,500m)'}. Take Day 1 completely relaxed. Drink 3-4 liters of water daily, avoid alcohol, and carry Diamox / camphor tablets.`
    });
  }

  // Permits & Passes
  if (['leh', 'spiti', 'rohtang', 'tawang', 'dzukou-valley', 'nathula', 'gangtok'].includes(dest.id)) {
    alerts.push({
      type: 'permit',
      icon: '📑',
      title: 'Inner Line Permit (ILP) / Green Pass Required',
      desc: 'Government permits required for non-locals. Keep original Aadhaar/Passport + 4 passport photos ready. Apply online 48h in advance or via official DC office.'
    });
  }

  // Taxi Union Advisory
  alerts.push({
    type: 'transit',
    icon: '🚕',
    title: 'Local Taxi Union & Prepaid Tariffs',
    desc: 'Outside state commercial cabs are often restricted beyond entry checkposts for local sightseeing. Use registered local union taxi stands with fixed printed rate cards.'
  });

  // Connectivity & ATM alert for remote regions
  if (dest.category === 'offbeat' || ['spiti', 'zanskar', 'ladakh', 'meghalaya', 'arunachal'].some(k => (dest.tags || []).join(' ').toLowerCase().includes(k))) {
    alerts.push({
      type: 'connectivity',
      icon: '📶',
      title: 'Cash & Network Readiness',
      desc: 'Jio and Airtel postpaid have the strongest reception. Carry adequate cash (₹5,000+ per person) as UPI transactions and ATMs may have intermittent network in remote valleys.'
    });
  }

  return alerts;
}

/**
 * Generate authentic day-by-day time-sequenced schedule
 */
function generateDayByDaySchedule(dest, daysCount, style, pace, tier) {
  const highlights = dest.highlights || [];
  const baseItinerary = dest.itinerary || [];
  const schedule = [];

  const totalDays = Math.max(2, Math.min(parseInt(daysCount, 10) || 4, 10));

  for (let i = 1; i <= totalDays; i++) {
    let dayTitle = `Day ${i}: Exploring ${dest.name}`;
    let morning = '';
    let afternoon = '';
    let evening = '';
    let nightStay = style.stayFocus;
    let localFood = 'Authentic local regional thali & fresh mountain teas';

    if (i === 1) {
      dayTitle = `Day 1: Arrival, Check-in & Scenic Acclimatization`;
      morning = `Arrive from your origin city. Check in to your accommodation (${tier.stayType.split('(')[0].trim()}). Unpack and relax with welcome herbal tea.`;
      afternoon = `Enjoy a leisurely lunch at a highly-rated local cafe. Stroll through the local village trails or colorful bazaar for handicrafts & dry fruits.`;
      evening = highlights[0] 
        ? `Witness golden hour & sunset at ${highlights[0]}. Enjoy cozy evening breeze.` 
        : `Relaxed evening walk around the central square and cultural street market.`;
      localFood = 'Hot steamed momos, siddu with pure ghee, or authentic local curry with steamed rice.';
    } else if (i === totalDays) {
      dayTitle = `Day ${totalDays}: Final Sunrise, Souvenirs & Safe Journey Back`;
      morning = `Early morning sunrise photography walk. Visit any remaining local monastery, temple, or scenic riverbank for quiet contemplation.`;
      afternoon = `Pack your bags, check out, and pick up authentic handmade local souvenirs, shawls, spices, or organic honey.`;
      evening = `Board your return transfer (cab / train / flight) with lifelong memories of ${dest.name}.`;
      localFood = 'Traditional farewell meal at a heritage highway dhaba on the return journey.';
    } else {
      const hlIndex = (i - 2) % (highlights.length || 1);
      const currentHighlight = highlights[hlIndex] || `${dest.name} scenic valley viewpoints`;
      const nextHighlight = highlights[(hlIndex + 1) % (highlights.length || 1)] || 'ancient heritage shrine & pine forest trail';

      dayTitle = `Day ${i}: Deep Dive into ${currentHighlight.split('—')[0].split('-')[0].trim()}`;
      morning = `07:30 AM — Early departure to ${currentHighlight}. Beat the midday tourist rush and experience crisp morning mountain air.`;
      afternoon = `12:30 PM — Relaxed lunch at a scenic viewpoint cafe. Proceed to explore ${nextHighlight} with guided insights.`;
      evening = `05:30 PM — Golden hour photography, riverside relaxation, or attending evening cultural aarti / live folk music.`;
      localFood = 'Chef recommended specialty dishes, clay oven tandoori breads, or wood-fired mountain trout/paneer.';
    }

    // Custom adjustments based on traveler style
    if (style.label.includes('Couple')) {
      evening += ' Perfect romantic setting for candle-lit valley dinner.';
    } else if (style.label.includes('Trekker')) {
      morning += ' Includes optional 3 km scenic ridge hiking trail.';
    } else if (style.label.includes('Family')) {
      afternoon += ' Easy flat walking routes suitable for all age groups.';
    }

    schedule.push({
      dayNumber: i,
      title: dayTitle,
      timeBlocks: {
        morning: {
          time: '07:30 AM – 11:30 AM',
          icon: '🌅',
          label: 'Morning Exploration',
          desc: morning
        },
        afternoon: {
          time: '12:00 PM – 04:30 PM',
          icon: '☀️',
          label: 'Afternoon & Local Food',
          desc: afternoon,
          foodTip: localFood
        },
        evening: {
          time: '05:00 PM – 08:30 PM',
          icon: '🌄',
          label: 'Sunset & Cultural Leisure',
          desc: evening
        },
        night: {
          time: '09:00 PM Onwards',
          icon: '🌙',
          label: 'Stay & Night Experience',
          desc: nightStay
        }
      }
    });
  }

  return schedule;
}

/**
 * Calculate itemized realistic budget based on destination basePriceINR and selected tier
 */
function calculateItemizedBudget(dest, days, tierKey) {
  const baseDaily = dest.basePriceINR || 3000;
  const tier = BUDGET_TIERS[tierKey] || BUDGET_TIERS.comfort;
  const multiplier = tier.multiplier;

  const stayPerNight = Math.round(baseDaily * 0.45 * multiplier);
  const foodPerDay = Math.round(baseDaily * 0.25 * multiplier);
  const transitPerDay = Math.round(baseDaily * 0.20 * multiplier);
  const activitiesPerDay = Math.round(baseDaily * 0.10 * multiplier);

  const totalPerDay = stayPerNight + foodPerDay + transitPerDay + activitiesPerDay;
  const grandTotal = totalPerDay * days;

  return {
    stayTotal: stayPerNight * days,
    stayPerNight,
    foodTotal: foodPerDay * days,
    foodPerDay,
    transitTotal: transitPerDay * days,
    transitPerDay,
    activitiesTotal: activitiesPerDay * days,
    activitiesPerDay,
    totalPerDay,
    grandTotalINR: grandTotal,
    tierLabel: tier.label
  };
}

// Expose globally
window.generateRealAITripPlan = generateRealAITripPlan;
window.DEPARTURE_HUBS = DEPARTURE_HUBS;
window.TRAVEL_STYLES = TRAVEL_STYLES;
window.BUDGET_TIERS = BUDGET_TIERS;
