/**
 * RAAHIYOO 2.0 — MULTI-STOP ROAD TRIP & CIRCUIT ENGINE
 * Master dataset and calculation logic for India's greatest road trip circuits.
 */

const ROAD_CIRCUITS = [
  {
    id: 'spiti-loop',
    name: 'The Ultimate Spiti Valley Loop',
    region: 'North (Himachal Pradesh)',
    tagline: 'World\'s Highest Villages, Monasteries & High Altitude Passes',
    heroImage: 'images/spiti.jpg',
    duration: '9 – 10 Days',
    totalDistanceKM: 950,
    estimatedDrivingHours: '28 – 32 Hours',
    estimatedTollsINR: 350,
    estimatedFuelCostINR: 8500,
    recommendedVehicle: 'High Clearance SUV / 4x4 (Innova / Thar / Scorpio)',
    bestMonths: 'Jun to Oct (Passes open)',
    difficulty: 'Challenging (High Altitude > 4,000m)',
    routeStops: [
      { stop: 1, name: 'Shimla / Narkanda', nights: 1, altitude: '2,276 m', highlight: 'Hatu Peak & Apple Orchards' },
      { stop: 2, name: 'Sangla & Chitkul', nights: 1, altitude: '3,450 m', highlight: 'Last Indian Village on Indo-Tibet Border & Baspa River' },
      { stop: 3, name: 'Kalpa (Kinnaur)', nights: 1, altitude: '2,960 m', highlight: 'Sunrise view of Kinnaur Kailash Sacred Peak' },
      { stop: 4, name: 'Nako & Tabo', nights: 1, altitude: '3,280 m', highlight: '1,000-year-old UNESCO Tabo Monastery & Nako Lake' },
      { stop: 5, name: 'Kaza (Spiti Hub)', nights: 2, altitude: '3,800 m', highlight: 'Key Monastery, Kibber, Chicham Bridge & Langza Fossil Village' },
      { stop: 6, name: 'Hikkim & Komic', nights: 1, altitude: '4,587 m', highlight: 'World\'s Highest Post Office & Highest Motorable Village' },
      { stop: 7, name: 'Chandratal Lake', nights: 1, altitude: '4,300 m', highlight: 'Crescent Moon Lake camping under million stars' },
      { stop: 8, name: 'Manali via Atal Tunnel', nights: 1, altitude: '2,050 m', highlight: 'Rohtang / Kunzum Pass descent & Old Manali cafes' }
    ],
    roadConditions: 'Good tarmac up to Kinnaur. Rough gravel, water crossings (Malling & Batal nalas) from Tabo to Kunzum Pass. Atal Tunnel is world-class.',
    essentialTip: 'Always travel clockwise (Shimla ➔ Spiti ➔ Manali) for gradual altitude acclimatization to prevent severe AMS.'
  },
  {
    id: 'golden-triangle',
    name: 'The Classic Golden Triangle & Forts',
    region: 'North (Delhi, UP, Rajasthan)',
    tagline: 'Taj Mahal, Mughal Fortresses & Pink City Royalty',
    heroImage: 'images/agra.jpg',
    duration: '5 – 6 Days',
    totalDistanceKM: 720,
    estimatedDrivingHours: '12 – 14 Hours',
    estimatedTollsINR: 1100,
    estimatedFuelCostINR: 5800,
    recommendedVehicle: 'Any Sedan / Hatchback / EV',
    bestMonths: 'Oct to Mar (Pleasant weather)',
    difficulty: 'Easy (6-lane expressways)',
    routeStops: [
      { stop: 1, name: 'Delhi NCR', nights: 1, altitude: '216 m', highlight: 'Red Fort, Qutub Minar & Chandni Chowk street food' },
      { stop: 2, name: 'Agra via Yamuna Expressway', nights: 1, altitude: '171 m', highlight: 'Sunrise Taj Mahal & Agra Fort palaces' },
      { stop: 3, name: 'Fatehpur Sikri & Abhaneri', nights: 1, altitude: '250 m', highlight: 'Buland Darwaza & Chand Baori 3,500-step ancient well' },
      { stop: 4, name: 'Jaipur (Pink City)', nights: 2, altitude: '431 m', highlight: 'Amer Fort elephant trail, Hawa Mahal & Nahargarh sunset' },
      { stop: 5, name: 'Neemrana / Delhi Return', nights: 1, altitude: '310 m', highlight: '15th-century Neemrana Fort Palace ziplining & return' }
    ],
    roadConditions: 'Exceptional 6-lane Yamuna Expressway and Delhi-Mumbai Expressway sections with modern food courts and fuel plazas.',
    essentialTip: 'Visit the Taj Mahal at sunrise (06:00 AM) to experience white marble glowing pink in dawn light without tourist crowds.'
  },
  {
    id: 'kashmir-circuit',
    name: 'Kashmir Valley of Paradise Circuit',
    region: 'North (Jammu & Kashmir)',
    tagline: 'Dal Lake Shikaras, Pine Valleys & Snow Glaciers',
    heroImage: 'images/srinagar.jpg',
    duration: '6 – 7 Days',
    totalDistanceKM: 580,
    estimatedDrivingHours: '14 – 16 Hours',
    estimatedTollsINR: 280,
    estimatedFuelCostINR: 4600,
    recommendedVehicle: 'Sedan / Local Commercial Cab',
    bestMonths: 'Apr to Oct (Flowers & Greenery) / Dec to Feb (Snow)',
    difficulty: 'Moderate (Scenic mountain highways)',
    routeStops: [
      { stop: 1, name: 'Srinagar (Dal Lake)', nights: 2, altitude: '1,585 m', highlight: 'Heritage Houseboat stay, Shikara ride & Mughal Gardens' },
      { stop: 2, name: 'Gulmarg', nights: 1, altitude: '2,650 m', highlight: 'World\'s 2nd Highest Gondola to Apharwat Peak (3,980m)' },
      { stop: 3, name: 'Doodhpathri', nights: 1, altitude: '2,730 m', highlight: 'Valley of Milk lush green meadows and gushing streams' },
      { stop: 4, name: 'Pahalgam', nights: 2, altitude: '2,130 m', highlight: 'Betaab Valley, Aru Valley & Baisaran Pine Meadow (Mini Switzerland)' },
      { stop: 5, name: 'Sonamarg', nights: 1, altitude: '2,740 m', highlight: 'Thajiwas Glacier pony ride & Sindh River trout fishing' }
    ],
    roadConditions: 'Smooth 4-lane NH-44 and well-paved valley roads. Snow chains required in Gulmarg/Sonamarg during heavy winter snowfall.',
    essentialTip: 'Pre-book Phase 1 and Phase 2 Gulmarg Gondola tickets online 2-3 weeks in advance as on-spot tickets are unavailable.'
  },
  {
    id: 'kerala-circuit',
    name: 'Kerala Spice, Hills & Backwaters Loop',
    region: 'South (Kerala)',
    tagline: 'Misty Tea Hills, Wildlife Sanctuaries & Houseboats',
    heroImage: 'images/munnar.jpg',
    duration: '7 Days',
    totalDistanceKM: 620,
    estimatedDrivingHours: '16 – 18 Hours',
    estimatedTollsINR: 220,
    estimatedFuelCostINR: 4900,
    recommendedVehicle: 'Any Car / Compact SUV',
    bestMonths: 'Sep to Mar (Cool & Green)',
    difficulty: 'Easy to Moderate (Curving Ghat roads)',
    routeStops: [
      { stop: 1, name: 'Kochi (Fort Kochi)', nights: 1, altitude: '3 m', highlight: 'Chinese Fishing Nets, Jew Town & Kathakali performances' },
      { stop: 2, name: 'Munnar', nights: 2, altitude: '1,532 m', highlight: 'Tata Tea Gardens, Eravikulam Nilgiri Tahr & Top Station' },
      { stop: 3, name: 'Thekkady (Periyar)', nights: 1, altitude: '900 m', highlight: 'Periyar Tiger Reserve boat safari & organic spice plantation walks' },
      { stop: 4, name: 'Alleppey (Alappuzha)', nights: 1, altitude: '1 m', highlight: 'Overnight luxury houseboat cruise through Vembanad backwaters' },
      { stop: 5, name: 'Varkala Cliff', nights: 2, altitude: '15 m', highlight: 'Red cliff sunset overlooking the Arabian Sea, surfing & cafes' }
    ],
    roadConditions: 'Scenic coastal highways and well-maintained mountain ghat roads through aromatic tea and cardamom estates.',
    essentialTip: 'Try authentic Malabar Fish Curry and Appam with stew at local Toddy shops along the Alleppey waterways.'
  },
  {
    id: 'rajasthan-circuit',
    name: 'Rajasthan Grand Desert & Royalty Loop',
    region: 'West (Rajasthan)',
    tagline: 'Golden Sand Dunes, Majestic Forts & Lake Palaces',
    heroImage: 'images/jaipur.jpg',
    duration: '8 Days',
    totalDistanceKM: 1250,
    estimatedDrivingHours: '24 – 26 Hours',
    estimatedTollsINR: 1450,
    estimatedFuelCostINR: 9800,
    recommendedVehicle: 'Sedan / SUV',
    bestMonths: 'Oct to Mar (Pleasant desert breeze)',
    difficulty: 'Moderate (Long driving stretches)',
    routeStops: [
      { stop: 1, name: 'Jaipur (Pink City)', nights: 2, altitude: '431 m', highlight: 'Amer Fort, City Palace & Johari Bazaar jewelry shopping' },
      { stop: 2, name: 'Pushkar & Ajmer', nights: 1, altitude: '510 m', highlight: 'Holy Pushkar Lake, Brahma Temple & rose garden sunset' },
      { stop: 3, name: 'Jodhpur (Blue City)', nights: 1, altitude: '231 m', highlight: 'Massive Mehrangarh Fort & blue-painted old alleyways' },
      { stop: 4, name: 'Jaisalmer (Golden City)', nights: 2, altitude: '225 m', highlight: 'Living Jaisalmer Fort & Sam Dunes luxury desert camp under stars' },
      { stop: 5, name: 'Udaipur (City of Lakes)', nights: 2, altitude: '598 m', highlight: 'Lake Pichola boat cruise, City Palace & Jagmandir sunset' }
    ],
    roadConditions: 'Exceptional 4-lane national highways across desert plains with smooth tarmac and grand highway dhabas.',
    essentialTip: 'Experience the desert camel safari at Sam Sand Dunes around 05:00 PM for the sunset over rolling sand waves.'
  }
];

function getCircuitById(id) {
  return ROAD_CIRCUITS.find(c => c.id === id) || ROAD_CIRCUITS[0];
}

// Expose globally
window.ROAD_CIRCUITS = ROAD_CIRCUITS;
window.getCircuitById = getCircuitById;
