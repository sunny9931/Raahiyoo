/**
 * RAAHIYOO 2.0 — DESTINATION COMPARISON BATTLE ENGINE
 * Head-to-head multi-dimensional comparison metrics across all 106 destinations.
 */

const POPULAR_BATTLES = [
  { id: 'manali-vs-kasol', name: 'Manali vs Kasol', destA: 'manali', destB: 'kasol' },
  { id: 'leh-vs-spiti', name: 'Leh Ladakh vs Spiti Valley', destA: 'leh', destB: 'spiti' },
  { id: 'goa-vs-gokarna', name: 'Goa vs Gokarna', destA: 'goa', destB: 'gokarna' },
  { id: 'rishikesh-vs-dharamshala', name: 'Rishikesh vs Dharamshala', destA: 'rishikesh', destB: 'dharamshala' },
  { id: 'jaipur-vs-udaipur', name: 'Jaipur vs Udaipur', destA: 'jaipur', destB: 'udaipur' },
  { id: 'munnar-vs-ooty', name: 'Munnar vs Ooty', destA: 'munnar', destB: 'ooty' }
];

function getDestinationById(id) {
  if (typeof DESTINATIONS === 'undefined') return null;
  return DESTINATIONS.find(d => d.id === id) || DESTINATIONS[0];
}

function compareTwoDestinations(idA, idB) {
  const destA = getDestinationById(idA);
  const destB = getDestinationById(idB);

  if (!destA || !destB) return null;

  return {
    destA,
    destB,
    priceDiff: destA.basePriceINR - destB.basePriceINR,
    budgetWinner: destA.basePriceINR < destB.basePriceINR ? destA.name : destB.name,
    categoryA: destA.category || 'General',
    categoryB: destB.category || 'General',
    bestTimeA: destA.bestTime,
    bestTimeB: destB.bestTime,
    elevationA: destA.elevation || 'Valley',
    elevationB: destB.elevation || 'Valley'
  };
}

window.POPULAR_BATTLES = POPULAR_BATTLES;
window.compareTwoDestinations = compareTwoDestinations;
