/**
 * RAAHIYOO - Destination Data Layer
 * Written in simple, friendly, practical English that every traveler understands easily.
 */

const DESTINATIONS_DATA = [
  {
    id: "rishikesh",
    name: "Rishikesh",
    state: "Uttarakhand",
    region: "Garhwal Foothills",
    category: ["spiritual", "adventure", "mountains"],
    mood: ["Spiritual", "Adventure", "Peaceful"],
    tagline: "The Yoga Capital & River Rafting Paradise",
    description: "Rishikesh is where the clear, emerald-green Ganga river enters the plains from the high Himalayas. Famous for world-class white water rafting, giant suspension bridges, tranquil ashrams, and the magical evening Ganga Aarti with thousands of floating lamps.",
    whyItMatters: "Rishikesh gives you the best of two worlds: early morning peace with temple bells and yoga by the river, and high-energy adventure in the afternoon with rafting down roaring river rapids.",
    elevation: "372 meters (1,220 ft)",
    bestTime: "September to April (Best for Rafting & Camping)",
    recommendedDuration: "3 to 4 Days",
    difficulty: "Easy (Great for Everyone)",
    budgetEstimate: "₹2,500 – ₹4,500 per day",
    idealTripType: ["Solo Travelers", "Friends Group", "Spiritual Seekers", "Families"],
    heroImage: "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&w=1200&q=80", caption: "Ganga Aarti at Triveni Ghat at sunset" },
      { url: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80", caption: "Ram Jhula suspension bridge over the green river" },
      { url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80", caption: "White-water river rafting in Shivpuri" },
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Beatles Ashram meditation domes and graffiti" }
    ],
    seasonality: {
      spring: "March to April: Warm sunny days, cool breezy evenings. Perfect for camping, rafting, and outdoor yoga (18°C - 30°C).",
      summer: "May to June: Hot afternoons (30°C - 39°C), but evenings are pleasant by the river water. Rafting is active.",
      monsoon: "July to August: Heavy rains (22°C - 29°C). River rafting is strictly closed for safety. Lush green hills and great for peaceful ashram retreats.",
      autumn: "September to November: The best season! Clean blue skies, crisp weather, and river rafting re-opens (16°C - 28°C).",
      winter: "December to February: Chilly mornings and pleasant sunny afternoons (8°C - 22°C). Great for cafe-hopping and temple visits."
    },
    howToReach: {
      originExamples: [
        {
          from: "Delhi",
          routeSummary: "Delhi &rarr; Haridwar &rarr; Rishikesh (240 km • 4 to 5 hours)",
          byTrain: "Take the morning Vande Bharat Express (22457) or Jan Shatabdi from New Delhi. It reaches Rishikesh/Haridwar in just 4.5 hours.",
          byBus: "Direct AC Volvo buses run every 30 minutes from ISBT Kashmiri Gate directly to Rishikesh Bus Stand (approx. 5.5 hours).",
          byFlight: "Fly to Dehradun Airport (Jolly Grant), then take a 35-minute direct taxi (21 km) to Tapovan.",
          byRoad: "Drive via Delhi-Meerut Expressway and NH334. Smooth 4-lane highway all the way."
        },
        {
          from: "Patna",
          routeSummary: "Patna &rarr; Varanasi &rarr; Lucknow &rarr; Haridwar &rarr; Rishikesh (1,050 km)",
          byTrain: "Direct Kumbha Express (12369) or Upasana Express from Patna Jn (PNBE) to Haridwar in ~18 hours, then a 30-min auto/cab to Rishikesh.",
          byBus: "Take a train or flight to Delhi/Lucknow, then direct AC Volvo to Rishikesh.",
          byFlight: "Fly from Patna (PAT) to Dehradun (DED) via Delhi, then 35-min taxi to your hotel in Rishikesh.",
          byRoad: "Via Purvanchal Expressway and NH334 (drive time ~20-22 hours)."
        },
        {
          from: "Mumbai",
          routeSummary: "Mumbai &rarr; Dehradun &rarr; Rishikesh (Flight 2 hrs 15 mins)",
          byTrain: "Bandra Terminus to Haridwar Express or Golden Temple Mail (approx. 26-28 hours).",
          byBus: "Fly to Dehradun or Delhi first.",
          byFlight: "Direct daily flights from Mumbai (BOM) to Dehradun (DED) take ~2 hours 15 mins. Direct taxis to Rishikesh take 35 mins.",
          byRoad: "Via NH48 and Delhi-Meerut Expressway."
        },
        {
          from: "Kolkata",
          routeSummary: "Kolkata &rarr; Haridwar / Rishikesh (Direct Trains & Flights)",
          byTrain: "Koonch Express or Doon Express from Howrah to Haridwar/Rishikesh.",
          byBus: "Not recommended. Fly to Dehradun.",
          byFlight: "Flights from Kolkata (CCU) to Dehradun (DED) with short Delhi layover.",
          byRoad: "Via NH19."
        }
      ],
      nearestRailway: "Yog Nagari Rishikesh (YNRK) & Haridwar Junction (HW - 25 km)",
      nearestAirport: "Dehradun Jolly Grant Airport (DED - 21 km • 35 mins taxi)",
      roadConnectivity: "Super smooth 4-lane highway (NH334 / NH7).",
      localTransport: "Electric auto-rickshaws (Vikrams) for ₹20-₹40, scooter rentals for ₹400/day, or simple walking."
    },
    attractions: [
      {
        name: "Triveni Ghat Evening Aarti",
        description: "The biggest and most sacred ghat in Rishikesh. Come at sunset to watch priests chant Vedic hymns and rotate giant brass fire lamps by the river.",
        timing: "Starts around 6:00 PM (Arrive by 5:15 PM for good front seats)",
        bestFor: "Spiritual peace & photo memories"
      },
      {
        name: "The Beatles Ashram (Chaurasi Kutia)",
        description: "The historic jungle ashram where The Beatles stayed and wrote dozens of songs in 1968. Now filled with vibrant street art and stone meditation domes.",
        timing: "9:00 AM – 4:00 PM (Entry ticket: ₹150 for Indians)",
        bestFor: "History, quiet forest walks & photography"
      },
      {
        name: "Neer Garh Natural Waterfall",
        description: "A gorgeous 2-tier crystal clear mountain waterfall in the forest. You can take a refreshing cold splash in natural limestone pools.",
        timing: "8:00 AM – 5:00 PM (5 km from Tapovan)",
        bestFor: "Easy short trek & natural swimming"
      },
      {
        name: "Kunjapuri Sunrise Peak",
        description: "A mountain-top temple at 1,645 meters with stunning 360° sunrise views of high snow peaks like Chaukhamba and Swargarohini.",
        timing: "Early morning (Depart from Tapovan at 4:30 AM for sunrise)",
        bestFor: "Epic sunrise views of snow mountains"
      }
    ],
    thingsToDo: [
      "White-water river rafting from Shivpuri (16 km stretch) with cliff jumping",
      "Sit by the river at Triveni Ghat and watch the evening fire Aarti",
      "Rent a scooter and ride up to Neer Garh waterfall and Vashistha cave",
      "Try world food and herbal drinks at cliffside cafes in Tapovan",
      "Attend a beginner-friendly morning Hatha yoga or sound bath class"
    ],
    itineraries: [
      {
        title: "3-Day Rishikesh Weekend Plan",
        days: [
          { day: 1, title: "Arrival, Bridge Walk & Evening Aarti", details: "Arrive in Tapovan by afternoon. Walk across Ram Jhula suspension bridge. Visit Beatles Ashram. Head to Triveni Ghat by 5:30 PM for the grand evening Ganga Aarti. Dinner at a riverside cafe." },
          { day: 2, title: "Rafting Thrill & Neer Waterfall", details: "Morning 16 km white-water rafting from Shivpuri with fun rapids like Roller Coaster and Golf Course. Have hot maggi and lunch by the river. Afternoon short hike up Neer Garh waterfall." },
          { day: 3, title: "Kunjapuri Sunrise & Departure", details: "Early 4:30 AM cab to Kunjapuri Temple to watch golden sunlight hit the high snow peaks. Return for breakfast, shop for handmade souvenirs, and head back." }
        ]
      }
    ],
    checklist: [
      { item: "Valid Government ID (Aadhaar / Driving License)", category: "Documents", required: true },
      { item: "Quick-dry synthetic t-shirts & shorts for rafting", category: "Clothing", required: true },
      { item: "Waterproof phone pouch with neck lanyard", category: "Gear", required: true },
      { item: "Comfortable sandals / sneakers with good grip", category: "Clothing", required: true },
      { item: "Light jacket for cool mornings and evenings", category: "Clothing", required: false },
      { item: "Sunscreen and refillable water bottle", category: "Health", required: true }
    ],
    travelTips: [
      "Rishikesh is a strictly vegetarian and alcohol-free holy town by law. Respect local customs.",
      "Only book river rafting with licensed operators wearing proper certified life-jackets and helmets.",
      "Beware of friendly monkeys near Ram Jhula—keep food items and sunglasses inside your backpack."
    ],
    importantInfo: {
      permits: "No permits needed for Indian or foreign tourists.",
      atmNetwork: "Plenty of ATMs in Tapovan and Main Market.",
      mobileConnectivity: "Full 5G on Jio, Airtel, and Vi.",
      safetyEmergency: "Government Hospital: 0135-2430030 | Police: 112"
    },
    nearbyDestinations: ["mussoorie", "landour", "tungnath", "manali"],
    faq: [
      {
        q: "Is Rishikesh safe for solo female travelers?",
        a: "Yes! Rishikesh is considered one of the safest destinations in India for solo travelers and backpackers with friendly locals and lively hostels in Tapovan."
      },
      {
        q: "When is river rafting closed?",
        a: "Rafting is closed during the monsoon season (July 1st to mid-September) for safety due to high water currents, reopening around late September."
      }
    ],
    lastUpdated: "August 2026",
    sources: "Uttarakhand Tourism & Ministry of Tourism (Incredible India)"
  },
  {
    id: "manali",
    name: "Manali",
    state: "Himachal Pradesh",
    region: "Kullu Valley",
    category: ["mountains", "adventure", "nature"],
    mood: ["Adventure", "High Treks", "Nature"],
    tagline: "Snow Valleys, Pine Forests & The Atal Tunnel Gateway",
    description: "Surrounded by pine-covered mountains and snowy peaks at 2,050 meters, Manali is India's most loved mountain hub. Enjoy live-music cafes in Old Manali, thrilling paragliding and skiing in Solang Valley, and drive through the world's longest high-altitude Atal Tunnel into the snowy desert of Lahaul.",
    whyItMatters: "Manali gives you easy access to real snow and high alpine landscapes without needing days of difficult trekking.",
    elevation: "2,050 meters (6,725 ft)",
    bestTime: "October to June (Snow: Dec to Feb; Green Summer: Mar to Jun)",
    recommendedDuration: "4 to 5 Days",
    difficulty: "Easy to Moderate",
    budgetEstimate: "₹2,500 – ₹5,000 per day",
    idealTripType: ["Friends", "Couples", "Bikers", "Families", "Adventure Lovers"],
    heroImage: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=1200&q=80", caption: "Snow-covered pine peaks above Solang Valley" },
      { url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80", caption: "Ancient wooden Hadimba Devi Pagoda Temple" },
      { url: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=1200&q=80", caption: "Beas River rushing through Kullu valley" },
      { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80", caption: "Sissu waterfall in Lahaul right after Atal Tunnel" }
    ],
    seasonality: {
      spring: "March to April: Fresh green apple blossoms, crisp mountain air (8°C - 20°C).",
      summer: "May to June: Peak summer escape. Pleasant daytime (14°C - 26°C), perfect for outdoor paragliding.",
      monsoon: "July to August: Heavy rains (15°C - 22°C). High risk of landslides; travel with caution.",
      autumn: "September to November: Golden trees, clear blue skies, crisp nights (5°C - 18°C).",
      winter: "December to February: Heavy snowfall in Old Manali, Solang, and Sissu (-4°C - 10°C). Best for snow games and skiing."
    },
    howToReach: {
      originExamples: [
        {
          from: "Delhi",
          routeSummary: "Delhi &rarr; Chandigarh &rarr; Mandi &rarr; Kullu &rarr; Manali (530 km • 10-12 hours)",
          byTrain: "Train from Delhi to Chandigarh or Anandpur Sahib, then taxi or Volvo bus to Manali.",
          byBus: "Overnight luxury AC Volvo buses leave every evening from Majnu Ka Tilla / Kashmiri Gate Delhi and reach Manali the next morning.",
          byFlight: "Direct flights from Delhi to Kullu Airport at Bhuntar (50 km from Manali), followed by a 1.5-hour taxi.",
          byRoad: "Via Delhi-Chandigarh expressway and the newly completed 4-lane Kiratpur-Manali highway with smooth bypass tunnels."
        },
        {
          from: "Patna",
          routeSummary: "Patna &rarr; Delhi &rarr; Manali",
          byTrain: "Train to New Delhi, then overnight Volvo bus to Manali.",
          byBus: "Connecting buses via Delhi.",
          byFlight: "Flight from Patna to Delhi, connecting to Bhuntar Airport.",
          byRoad: "Via NH19 and NH44 via Delhi."
        },
        {
          from: "Mumbai",
          routeSummary: "Mumbai &rarr; Chandigarh / Delhi &rarr; Manali",
          byTrain: "Train to Chandigarh, then 8-hour taxi to Manali.",
          byBus: "Fly to Chandigarh/Delhi, then Volvo to Manali.",
          byFlight: "Direct flight to Chandigarh (IXC) or Delhi (DEL), then taxi/Volvo to Manali.",
          byRoad: "Via NH48."
        }
      ],
      nearestRailway: "Chandigarh Railway Station (310 km)",
      nearestAirport: "Kullu-Manali Airport at Bhuntar (50 km • 1.5 hrs drive)",
      roadConnectivity: "New 4-lane expressway with mountain tunnels cuts travel time significantly.",
      localTransport: "Royal Enfield motorbike rentals (₹1,000-₹1,500/day), local auto-rickshaws, and private cabs."
    },
    attractions: [
      {
        name: "Atal Tunnel & Sissu Waterfall",
        description: "Drive through the 9 km long high-altitude tunnel to enter the magical snow-covered landscape of Lahaul Valley and Sissu waterfall.",
        timing: "Open 24 hours (Day trips recommended)",
        bestFor: "High snow peaks & road trip memories"
      },
      {
        name: "Old Manali Cafes & Wooden Houses",
        description: "A bohemian hillside village filled with cozy wooden cafes, live acoustic music, apple orchards, and peaceful vibe.",
        timing: "Best from 3:00 PM till late evening",
        bestFor: "Live music, delicious food & relaxing"
      },
      {
        name: "Solang Valley Adventure Arena",
        description: "A giant mountain valley for tandem paragliding, snowmobiles, and winter skiing.",
        timing: "9:00 AM – 5:30 PM",
        bestFor: "Paragliding, snow games & family fun"
      },
      {
        name: "Hadimba Temple & Cedar Forest",
        description: "A 470-year-old timber pagoda temple set in the middle of a peaceful forest of towering cedar trees.",
        timing: "8:00 AM – 6:00 PM",
        bestFor: "Ancient wooden architecture & forest peace"
      }
    ],
    thingsToDo: [
      "Drive through the famous Atal Tunnel into the snowy wonderland of Sissu",
      "Try tandem paragliding soaring over the green Solang Valley",
      "Hike up to the beautiful Jogini Waterfall near Vashisht",
      "Dip into the natural hot sulfur water springs in Vashisht village",
      "Rent a motorbike for a day trip to the historic 15th-century Naggar Castle"
    ],
    itineraries: [
      {
        title: "4-Day Classic Manali & Lahaul Trip",
        days: [
          { day: 1, title: "Arrival, Old Manali & Hadimba Temple", details: "Arrive in Manali. Settle into your hotel or riverside stay. Walk through the cedar forest of Hadimba Temple. Evening cafe hopping in Old Manali." },
          { day: 2, title: "Atal Tunnel & Sissu Snow Valley", details: "Morning scenic drive through the 9 km Atal Tunnel into Lahaul. Visit the icy Sissu waterfall, play in the snow, and return via Solang Valley." },
          { day: 3, title: "Jogini Waterfall Hike & Vashisht Hot Springs", details: "Pleasant 1.5-hour easy forest hike to Jogini Waterfall. Take a relaxing dip in the natural warm sulfur springs at Vashisht." },
          { day: 4, title: "Naggar Castle Heritage & Departure", details: "Drive to Naggar Castle for apple tea and sweeping valley views before catching your return Volvo bus." }
        ]
      }
    ],
    checklist: [
      { item: "Warm heavy jacket & thermal innerwear (essential for snow)", category: "Clothing", required: true },
      { item: "Waterproof shoes or sturdy sneakers", category: "Clothing", required: true },
      { item: "Sunglasses & lip balm (strong mountain sun reflection)", category: "Health", required: true },
      { item: "Driving License (if renting motorbikes/scooters)", category: "Documents", required: true }
    ],
    travelTips: [
      "Stay in Old Manali or Vashisht for mountain views and quiet charm instead of the crowded Mall Road.",
      "Rohtang Pass requires a special online permit with limited daily slots; book online a few days in advance.",
      "In winter (Dec-Feb), heavy snow can block roads past Solang, so 4x4 vehicles are recommended."
    ],
    importantInfo: {
      permits: "Atal Tunnel to Sissu does NOT need a permit for Indian citizens.",
      atmNetwork: "Plenty of ATMs on Mall Road and Old Manali.",
      mobileConnectivity: "Fast 5G on Jio and Airtel."
    },
    nearbyDestinations: ["kasol", "shimla", "tungnath", "rishikesh"],
    faq: [
      {
        q: "When can we see fresh snow in Manali?",
        a: "Late December to mid-February offers the best chance of fresh snowfall in Manali town, while Solang and Sissu have snow from November to April."
      },
      {
        q: "Is Atal Tunnel open all year?",
        a: "Yes! Atal Tunnel stays open year-round, except during extreme blizzards when snowplows clear the road."
      }
    ],
    lastUpdated: "August 2026",
    sources: "Himachal Pradesh Tourism Development Corporation (HPTDC)"
  },
  {
    id: "tungnath",
    name: "Tungnath & Chandrashila",
    state: "Uttarakhand",
    region: "Rudraprayag Garhwal",
    category: ["spiritual", "mountains", "adventure"],
    mood: ["Spiritual", "High Treks", "Adventure"],
    tagline: "The World's Highest Shiva Temple & 360° Himalayan Summit",
    description: "Perched at 3,680 meters, Tungnath is the highest Shiva temple on Earth. Continuing just 1.5 km higher brings you to the top of Chandrashila Peak (4,000 m), with an unforgettable 360° panorama of giant snow mountains like Nanda Devi, Chaukhamba, and Trishul.",
    whyItMatters: "This is one of the most accessible high-altitude Himalayan summits in India. A well-paved 5 km path through green alpine meadows takes you straight into high mountain glory.",
    elevation: "3,680 m (Temple) / 4,000 m (Peak Summit)",
    bestTime: "April to November (Closed in deep winter under heavy snow)",
    recommendedDuration: "2 to 3 Days",
    difficulty: "Moderate (Paved path with steady uphill incline)",
    budgetEstimate: "₹2,000 – ₹3,500 per day",
    idealTripType: ["Trekkers", "Pilgrims", "Photographers", "Adventure Lovers"],
    heroImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80", caption: "Historic 1000-year-old stone Tungnath Temple" },
      { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80", caption: "Golden sunrise on Chaukhamba snow peaks from Chandrashila Summit" },
      { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80", caption: "Green alpine meadows (bugyals) of Chopta in spring" },
      { url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80", caption: "Emerald reflection lake of Deoria Tal" }
    ],
    seasonality: {
      spring: "April to May: Blooming red rhododendron flowers, sunny crisp days (5°C - 16°C). Temple opens.",
      summer: "June to July: Lush green grass, pleasant trekking weather (8°C - 18°C).",
      monsoon: "Late July to August: Misty green hills; carry raincoats for sudden showers.",
      autumn: "September to November: The clearest visibility! Sharpest snow views of Nanda Devi and Trishul (0°C - 14°C).",
      winter: "December to March: Temple closed; Chopta is covered in deep white snow (-8°C - 4°C)."
    },
    howToReach: {
      originExamples: [
        {
          from: "Rishikesh",
          routeSummary: "Rishikesh &rarr; Devprayag &rarr; Rudraprayag &rarr; Ukhimath &rarr; Chopta (200 km • 7 hours drive)",
          byTrain: "Take train to Rishikesh or Haridwar, then hire a private or shared taxi directly to Chopta.",
          byBus: "Direct buses from Rishikesh to Ukhimath or Guptkashi, then local taxi (30 km) to Chopta base.",
          byFlight: "Fly to Dehradun (DED), followed by a scenic mountain taxi drive along the sacred Alaknanda River.",
          byRoad: "Via NH7 Char Dham all-weather highway to Rudraprayag, then state highway to Chopta."
        },
        {
          from: "Delhi",
          routeSummary: "Delhi &rarr; Rishikesh &rarr; Chopta (440 km)",
          byTrain: "Vande Bharat to Rishikesh, then 7-hour mountain drive to Chopta.",
          byBus: "Overnight bus to Rishikesh, then morning taxi to Chopta.",
          byFlight: "Flight to Dehradun Airport (DED).",
          byRoad: "Via Delhi-Meerut expressway and NH7."
        }
      ],
      nearestRailway: "Yog Nagari Rishikesh (200 km)",
      nearestAirport: "Dehradun Jolly Grant Airport (220 km)",
      roadConnectivity: "Paved motorable road reaches Chopta base camp.",
      localTransport: "The trek from Chopta to Tungnath (3.5 km) is on foot or hired mules."
    },
    attractions: [
      {
        name: "Tungnath Shiva Temple",
        description: "The 1000-year-old stone temple built by the Pandavas. One of the sacred Panch Kedars, set in high alpine bugyals.",
        timing: "6:00 AM – 7:00 PM (May to November)",
        bestFor: "Ancient spiritual energy & high-altitude prayer"
      },
      {
        name: "Chandrashila Summit (4,000 m)",
        description: "The 'Moon Rock' peak standing high above the temple. Offers a full 360-degree view of all major Garhwal snow mountains.",
        timing: "Best for sunrise (Reach by 6:00 AM)",
        bestFor: "Epic sunrise above the clouds"
      },
      {
        name: "Chopta Alpine Meadows",
        description: "Called the 'Mini Switzerland of Uttarakhand', with rolling green grass and deodar forests.",
        timing: "Open 24 hours",
        bestFor: "Camping under stars & peaceful walks"
      },
      {
        name: "Deoria Tal Reflection Lake",
        description: "A crystal clear lake located 20 km from Chopta that shows a mirror reflection of the Chaukhamba peaks.",
        timing: "Daylight hours (2 km trek from Sari village)",
        bestFor: "Lake reflection photos & bird watching"
      }
    ],
    thingsToDo: [
      "Wake up early at 4:30 AM for the sunrise climb to Chandrashila Peak",
      "Pay respects at the ancient stone sanctum of Tungnath",
      "Camp in alpine tents in Chopta under a sky full of stars",
      "Trek to the mirror lake of Deoria Tal from Sari village",
      "Spot the colorful Himalayan Monal bird along the trail"
    ],
    itineraries: [
      {
        title: "2-Day Chopta Summit Trek",
        days: [
          { day: 1, title: "Drive to Chopta & Sunset at Deoria Tal", details: "Drive from Rishikesh up the river valleys. Stop at Sari village for a short 2 km hike to Deoria Tal. Check into your Chopta camp by evening." },
          { day: 2, title: "Sunrise Summit at Chandrashila & Tungnath", details: "Start 4:30 AM from Chopta. Reach Tungnath Temple (3.5 km) for morning darshan, then continue 1.5 km to Chandrashila Peak for golden sunrise. Walk back to Chopta by afternoon." }
        ]
      }
    ],
    checklist: [
      { item: "Sturdy sneakers or trekking shoes with good grip", category: "Clothing", required: true },
      { item: "Warm heavy jacket, woolen cap & gloves (very cold at sunrise)", category: "Clothing", required: true },
      { item: "Flashlight / Phone light for early morning start", category: "Gear", required: true },
      { item: "Physical cash (No ATMs in Chopta; withdraw at Rudraprayag)", category: "Money", required: true }
    ],
    travelTips: [
      "Start your trek before 5:00 AM to see the sunrise and avoid afternoon clouds that block mountain views.",
      "Carry sufficient cash: Chopta has no ATMs and relies on solar power, so charge your phones beforehand.",
      "The stone path to the temple is well-built; take slow, steady steps so you don't run out of breath."
    ],
    importantInfo: {
      permits: "Kedarnath Wildlife Sanctuary entry ticket (~₹150) at Chopta gate.",
      atmNetwork: "No ATMs in Chopta. Last ATM is in Ukhimath / Rudraprayag.",
      mobileConnectivity: "Jio and BSNL have basic network; others are patchy."
    },
    nearbyDestinations: ["rishikesh", "manali", "landour"],
    faq: [
      {
        q: "Can a beginner do the Tungnath trek?",
        a: "Yes! The 3.5 km path is paved with stone steps. Anyone with normal walking fitness can easily do it by taking small breaks."
      }
    ],
    lastUpdated: "August 2026",
    sources: "Uttarakhand Tourism & BKTC"
  },
  {
    id: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh",
    region: "Eastern Plains",
    category: ["spiritual", "heritage"],
    mood: ["Spiritual", "Heritage", "Photography"],
    tagline: "The Ancient City of Sacred Ghats & Timeless Rituals",
    description: "Varanasi (Kashi) is one of the oldest living cities in human history. Walk through thousands-of-years-old stone alleys, see the golden spire of Kashi Vishwanath, glide on sunrise wooden boats across the holy Ganga, and witness the unforgettable evening Maha Aarti.",
    whyItMatters: "Varanasi is the spiritual heartbeat of India. Being on a wooden boat at sunrise as the river reflects golden temple towers is an experience you will never forget.",
    elevation: "81 meters (266 ft)",
    bestTime: "October to March (Pleasant weather & Dev Deepawali)",
    recommendedDuration: "3 Days",
    difficulty: "Easy (Lots of fun walking in ancient alleys)",
    budgetEstimate: "₹1,800 – ₹3,500 per day",
    idealTripType: ["Families", "Solo Travelers", "Photographers", "Culture Seekers"],
    heroImage: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80", caption: "Grand evening Maha Aarti at Dashashwamedh Ghat" },
      { url: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=80", caption: "Wooden boat gliding on the Ganga at dawn" },
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Ancient temple towers and heritage havelis along the river" }
    ],
    seasonality: {
      spring: "February to March: Delightful weather (15°C - 28°C), lively Mahashivratri festival.",
      summer: "April to June: Very hot (32°C - 44°C). Early morning and late evening visits recommended.",
      monsoon: "July to September: High water levels in Ganga; vibrant clouds (25°C - 33°C).",
      autumn: "October to November: The best season! Dev Deepawali festival with millions of lamps (18°C - 30°C).",
      winter: "December to January: Mystical morning fog and cool pleasant days (8°C - 22°C)."
    },
    howToReach: {
      originExamples: [
        {
          from: "Delhi",
          routeSummary: "Delhi &rarr; Varanasi (8 hours by Vande Bharat / 1.5 hr by Flight)",
          byTrain: "Vande Bharat Express (22436) runs from New Delhi to Varanasi in just 8 hours.",
          byBus: "Direct AC buses via Purvanchal expressway.",
          byFlight: "Multiple direct flights daily to Varanasi Airport (VNS).",
          byRoad: "Via Agra-Lucknow and Purvanchal Expressways (~11 hours)."
        },
        {
          from: "Patna",
          routeSummary: "Patna &rarr; Varanasi (3.5 to 4.5 hours)",
          byTrain: "Vande Bharat Express (22345) from Patna Jn to Varanasi in ~3.5 hours.",
          byBus: "Direct AC buses via NH19.",
          byFlight: "Direct road/train is fastest.",
          byRoad: "Via NH19 highway (4.5 hours drive)."
        }
      ],
      nearestRailway: "Varanasi Junction (BSB) & Banaras (BSBS)",
      nearestAirport: "Lal Bahadur Shastri International Airport (VNS - 24 km)",
      roadConnectivity: "Directly on NH19 and Purvanchal Expressway.",
      localTransport: "E-rickshaws (Tuk-tuks), cycle-rickshaws, wooden riverboats, and walking."
    },
    attractions: [
      {
        name: "Dashashwamedh Ghat Evening Aarti",
        description: "The most famous and grand fire Aarti in the world. Watch seven young priests perform the synchronized ritual with brass lamps and conch shells.",
        timing: "Starts at 6:30 PM (Book a riverboat by 5:30 PM for best views)",
        bestFor: "Grand spiritual spectacle & photos"
      },
      {
        name: "Kashi Vishwanath Temple & Corridor",
        description: "The sacred Jyotirlinga of Lord Shiva with a golden dome and a grand open marble corridor connecting directly to the Ganga riverbank.",
        timing: "Open from 3:00 AM to 11:00 PM",
        bestFor: "Sacred darshan & historic temple architecture"
      },
      {
        name: "Sarnath Deer Park & Buddhist Stupa",
        description: "Located just 10 km away, where Lord Buddha gave his very first sermon 2,500 years ago.",
        timing: "9:00 AM – 5:00 PM",
        bestFor: "Peaceful gardens, Buddhist stupas & museum"
      }
    ],
    thingsToDo: [
      "Take a sunrise wooden boat ride past all 84 historic ghats",
      "Watch the grand evening Maha Aarti from an anchored boat on the river",
      "Walk the newly built marble Kashi Vishwanath Corridor",
      "Taste authentic street food: hot kachori-jalebi, blue lassi, and Banarasi paan",
      "Visit Sarnath to see the ancient Ashoka Lion Capital"
    ],
    itineraries: [
      {
        title: "3-Day Timeless Kashi Trip",
        days: [
          { day: 1, title: "Ghats Walk & Evening Fire Aarti", details: "Arrive in Varanasi. Settle in a riverside haveli or hotel. Walk along the vibrant ghats. Board a wooden boat at Dashashwamedh Ghat to experience the sunset Aarti." },
          { day: 2, title: "Sunrise Boat, Temple Darshan & Street Food", details: "5:30 AM sunrise boat ride past ancient palaces. Visit Kashi Vishwanath Temple. Explore the old alleys for hot kachoris and malaiyo sweets." },
          { day: 3, title: "Sarnath Peace & Silk Weavers", details: "Morning trip to the quiet gardens of Sarnath. In the afternoon, visit traditional Banarasi silk sari weaving looms before departing." }
        ]
      }
    ],
    checklist: [
      { item: "Comfortable slip-on footwear (easy to remove at ghats)", category: "Clothing", required: true },
      { item: "Modest clothes covering knees and shoulders", category: "Clothing", required: true },
      { item: "Camera / phone with good low-light mode for aarti", category: "Gear", required: false }
    ],
    travelTips: [
      "Watching the evening Aarti from a boat on the river is much more comfortable than sitting in crowded ghat steps.",
      "Do NOT take photos at Manikarnika cremation ghat out of respect for grieving families.",
      "The old city alleys are pedestrian-only—walking is the only way to experience its true charm."
    ],
    importantInfo: {
      permits: "None required.",
      atmNetwork: "Plenty of ATMs across Godowlia and Cantt.",
      mobileConnectivity: "Fast 5G everywhere."
    },
    nearbyDestinations: ["ayodhya", "rishikesh", "jaipur"],
    faq: [
      {
        q: "What is the best time for the boat ride?",
        a: "5:30 AM at sunrise is the absolute best time—the water is calm and the morning golden sunlight hits the ancient stone ghats beautifully."
      }
    ],
    lastUpdated: "August 2026",
    sources: "Uttar Pradesh Tourism"
  },
  {
    id: "landour",
    name: "Landour",
    state: "Uttarakhand",
    region: "Garhwal Hills",
    category: ["mountains", "heritage", "nature"],
    mood: ["Peaceful", "Heritage", "Nature"],
    tagline: "The Quiet Pine Sanctuary of Colonial Cottages & Bakeries",
    description: "Located just above Mussoorie at 2,290 meters, Landour is a peaceful British-era cantonment town. Free from traffic and noise, it is surrounded by ancient deodar trees, cozy bakeries, cobblestone trails, and is the mountain home of author Ruskin Bond.",
    whyItMatters: "If you want pure peace, birdsong, clean mountain breeze, and zero vehicle noise, Landour is the ultimate weekend mountain reset.",
    elevation: "2,290 meters (7,513 ft)",
    bestTime: "Year-Round (Pleasant: Mar-Jun, Snow: Dec-Feb)",
    recommendedDuration: "2 to 3 Days",
    difficulty: "Easy (Pleasant walking paths)",
    budgetEstimate: "₹2,500 – ₹5,000 per day",
    idealTripType: ["Solo Travelers", "Couples", "Book Lovers", "Writers", "Peace Seekers"],
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80", caption: "Historic stone cottage under pine trees in Landour" },
      { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80", caption: "Snow peaks visible from Lal Tibba viewpoint" },
      { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", caption: "Char Dukan tea junction for waffles and chai" }
    ],
    seasonality: {
      spring: "March to April: Sunny days, fresh pine scent (12°C - 20°C).",
      summer: "May to June: Wonderfully cool when plains are burning (14°C - 24°C).",
      monsoon: "July to August: Romantic misty woods, cozy rains (13°C - 18°C).",
      autumn: "September to November: Crystal clear view of snow peaks (7°C - 18°C).",
      winter: "December to February: Snowfall, cozy wood fireplaces (-2°C - 10°C)."
    },
    howToReach: {
      originExamples: [
        {
          from: "Delhi",
          routeSummary: "Delhi &rarr; Dehradun (Train/Flight) &rarr; Landour (6.5 hours total)",
          byTrain: "Take the Dehradun Shatabdi (5.5 hrs), then a 1.5-hour taxi to Landour.",
          byBus: "Overnight Volvo to Dehradun, then direct cab to Char Dukan.",
          byFlight: "Fly to Dehradun (DED), then 2-hour uphill taxi.",
          byRoad: "Via Delhi-Meerut Expressway and Dehradun hill road."
        }
      ],
      nearestRailway: "Dehradun Railway Station (38 km)",
      nearestAirport: "Dehradun Jolly Grant Airport (62 km)",
      roadConnectivity: "Paved narrow cantonment roads.",
      localTransport: "Best explored entirely on foot."
    },
    attractions: [
      {
        name: "Char Dukan & St. Paul's Church",
        description: "A famous cluster of four vintage wooden tea shops beside an 1840 church serving ginger tea, fresh waffles, and bun maska.",
        timing: "Open daylight hours",
        bestFor: "Breakfast, hot chai & quiet reads"
      },
      {
        name: "Lal Tibba Scenic Viewpoint",
        description: "The highest point in the hills with vintage binoculars to see high snow peaks like Kedarnath and Badrinath.",
        timing: "6:00 AM – 7:00 PM",
        bestFor: "Snow mountain views & sunset"
      },
      {
        name: "Sister's Bazaar & Landour Bakehouse",
        description: "Historic bakery famous for cinnamon rolls, fresh bread, and handmade peanut butter and cheese.",
        timing: "9:00 AM – 7:00 PM",
        bestFor: "Fresh artisanal bakes & souvenirs"
      }
    ],
    thingsToDo: [
      "Walk the peaceful 3.5 km Upper Chukkar circular trail under deodar trees",
      "Enjoy fresh apple pie and hot coffee at Landour Bakehouse",
      "Gaze at the Great Himalayan snow peaks from Lal Tibba",
      "Experience pure silence away from traffic honking"
    ],
    itineraries: [
      {
        title: "2-Day Slow Mountain Living",
        days: [
          { day: 1, title: "Char Dukan, Upper Chukkar & Sunset", details: "Arrive in Landour. Have hot tea at Char Dukan. Take the peaceful circular walk passing Ruskin Bond's cottage. Watch the golden sunset from Lal Tibba." },
          { day: 2, title: "Sister's Bazaar & Heritage Bakeries", details: "Morning forest walk to Sister's Bazaar. Pick up artisanal jams and cheese. Relax at a cafe with a book before heading home." }
        ]
      }
    ],
    checklist: [
      { item: "Warm jacket / sweater (evenings are always chilly)", category: "Clothing", required: true },
      { item: "Comfortable walking shoes for uphill paths", category: "Clothing", required: true },
      { item: "A good book to read in the quiet", category: "Gear", required: false }
    ],
    travelTips: [
      "Landour is a quiet residential cantonment: no loud music or honking.",
      "Parking is very limited; walking is the best and most enjoyable way to explore."
    ],
    importantInfo: {
      permits: "None required.",
      atmNetwork: "No ATMs in Landour; withdraw in Mussoorie before coming up.",
      mobileConnectivity: "Strong 4G/5G on all networks."
    },
    nearbyDestinations: ["mussoorie", "rishikesh", "tungnath"],
    faq: [
      {
        q: "How far is Landour from Mussoorie?",
        a: "Landour is just 4-5 km uphill from Mussoorie Mall Road (15 mins by taxi or a scenic 45-min uphill walk)."
      }
    ],
    lastUpdated: "August 2026",
    sources: "Landour Cantonment Board"
  },
  {
    id: "mussoorie",
    name: "Mussoorie",
    state: "Uttarakhand",
    region: "Garhwal Hills",
    category: ["mountains", "nature", "weekend"],
    mood: ["Peaceful", "Nature", "Weekend Escape"],
    tagline: "The Queen of Hills Overlooking the Doon Valley",
    description: "Perched on a mountain ridge at 2,005 meters, Mussoorie has been a favorite mountain getaway for nearly 200 years. Famous for its pedestrian Mall Road, cable car ropeways, cascading Kempty Falls, and the legendary winterline sunset phenomenon.",
    whyItMatters: "Mussoorie offers a classic hill station holiday with lively bazaars, mountain ropeways, and sweeping views of the glittering Doon Valley below.",
    elevation: "2,005 meters (6,578 ft)",
    bestTime: "March to June & September to November",
    recommendedDuration: "2 to 3 Days",
    difficulty: "Easy (Great for families)",
    budgetEstimate: "₹2,500 – ₹4,500 per day",
    idealTripType: ["Families", "Couples", "Weekend Getaways"],
    heroImage: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80", caption: "Sweeping views of the Mussoorie ridge and Doon Valley" },
      { url: "https://images.unsplash.com/photo-1622308644420-a9219b1654b5?auto=format&fit=crop&w=1200&q=80", caption: "Historic Mall Road promenade in the evening" }
    ],
    seasonality: {
      spring: "March to April: Mild temperatures (10°C - 22°C), blooming flowers.",
      summer: "May to June: Peak summer escape (15°C - 26°C). Cool mountain relief.",
      monsoon: "July to August: Lush green hills with dramatic cloud play (14°C - 20°C).",
      autumn: "September to November: Clear blue skies and crisp air (8°C - 20°C).",
      winter: "December to February: Occasional snow and famous winterline sunsets (1°C - 12°C)."
    },
    howToReach: {
      originExamples: [
        {
          from: "Delhi",
          routeSummary: "Delhi &rarr; Dehradun &rarr; Mussoorie (280 km • 6.5 hours)",
          byTrain: "Shatabdi Express to Dehradun (5.5 hrs), then 1.5-hour taxi to Mussoorie.",
          byBus: "Direct Volvo buses from Delhi ISBT to Dehradun / Mussoorie.",
          byFlight: "Fly to Dehradun Airport (DED), then 2-hour taxi drive.",
          byRoad: "Via Delhi-Meerut Expressway and Dehradun hill road."
        }
      ],
      nearestRailway: "Dehradun Railway Station (34 km)",
      nearestAirport: "Dehradun Jolly Grant Airport (58 km)",
      roadConnectivity: "Well-paved 2-lane mountain road.",
      localTransport: "Local taxis and walking on pedestrian Mall Road."
    },
    attractions: [
      {
        name: "Gun Hill Aerial Ropeway",
        description: "Take the cable car to Mussoorie's second-highest peak for stunning sunset views of snow peaks.",
        timing: "8:00 AM – 7:00 PM",
        bestFor: "Cable car ride & sunset panoramas"
      },
      {
        name: "George Everest House & Peak",
        description: "The historic 1832 estate of Sir George Everest with open cliff views of the Himalayan peaks and valleys.",
        timing: "8:00 AM – 6:00 PM",
        bestFor: "Ridge walks & photography"
      }
    ],
    thingsToDo: [
      "Ride the aerial ropeway up to Gun Hill for sunset",
      "Stroll the car-free Mall Road in the evening",
      "Hike up to George Everest Peak for 360° views"
    ],
    itineraries: [
      {
        title: "2-Day Weekend Mountain Getaway",
        days: [
          { day: 1, title: "Mall Road & Gun Hill", details: "Arrive from Dehradun. Settle into hotel. Take the ropeway up Gun Hill for sunset. Evening stroll and dinner on Mall Road." },
          { day: 2, title: "George Everest Estate & Landour", details: "Morning trip to George Everest Peak for valley views. Afternoon visit to quiet Landour before heading back." }
        ]
      }
    ],
    checklist: [
      { item: "Warm jacket / layers", category: "Clothing", required: true },
      { item: "Comfortable walking shoes", category: "Clothing", required: true }
    ],
    travelTips: [
      "Mall Road has vehicle restrictions in the evening (5 PM - 10 PM); enjoy it on foot.",
      "Combine your visit with quiet Landour (just 4 km uphill)."
    ],
    importantInfo: {
      permits: "None needed.",
      atmNetwork: "Abundant across Mall Road.",
      mobileConnectivity: "Strong 5G network."
    },
    nearbyDestinations: ["landour", "rishikesh", "manali"],
    faq: [
      {
        q: "Does it snow in Mussoorie?",
        a: "Yes, Mussoorie often receives snowfall between late December and early February."
      }
    ],
    lastUpdated: "August 2026",
    sources: "Uttarakhand Tourism"
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    region: "Aravalli Range",
    category: ["heritage", "weekend"],
    mood: ["Heritage", "Photography", "Weekend Escape"],
    tagline: "The Pink City of Royal Forts, Palaces & Vibrant Bazaars",
    description: "India's legendary Pink City, famous for the honeycomb Hawa Mahal, the giant hilltop Amber Fort, floating Jal Mahal on the lake, and delicious Rajasthani royal food.",
    whyItMatters: "Just 3.5 hours from Delhi via the new expressway, Jaipur is the ultimate royal weekend escape filled with grandeur, history, and colorful bazaars.",
    elevation: "431 meters (1,414 ft)",
    bestTime: "October to March (Pleasant daytime & cool evenings)",
    recommendedDuration: "2 to 3 Days",
    difficulty: "Easy",
    budgetEstimate: "₹2,000 – ₹4,500 per day",
    idealTripType: ["Families", "Friends", "Photographers", "Foodies"],
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80", caption: "Hawa Mahal Palace of Winds" },
      { url: "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&w=1200&q=80", caption: "Amber Fort mirrored in Maota Lake" }
    ],
    seasonality: {
      spring: "February to March: Pleasant days (16°C - 28°C).",
      summer: "April to June: Hot desert days (30°C - 44°C). Morning fort visits recommended.",
      monsoon: "July to September: Aravalli hills turn emerald green (24°C - 34°C).",
      autumn: "October to November: Best season begins (18°C - 30°C).",
      winter: "December to January: Sunny pleasant days, cool nights (8°C - 22°C)."
    },
    howToReach: {
      originExamples: [
        {
          from: "Delhi",
          routeSummary: "Delhi &rarr; Jaipur (270 km • 3.5 hours via Delhi-Mumbai Expressway)",
          byTrain: "Vande Bharat Express (20978) takes just 3 hours 40 mins from New Delhi.",
          byBus: "Direct AC Volvo buses running round the clock.",
          byFlight: "50-minute flight to Jaipur International Airport (JAI).",
          byRoad: "Via Delhi-Mumbai Expressway (NE4)—super fast 3.5 hours drive."
        }
      ],
      nearestRailway: "Jaipur Junction (JP)",
      nearestAirport: "Jaipur Airport (JAI - 12 km)",
      roadConnectivity: "New 8-lane expressway makes driving effortless.",
      localTransport: "Jaipur Metro, Uber/Ola, auto-rickshaws."
    },
    attractions: [
      {
        name: "Amber Fort & Mirror Palace (Sheesh Mahal)",
        description: "A monumental 16th-century hilltop fort with glowing mirror palaces and sweeping lake views.",
        timing: "8:00 AM – 5:30 PM",
        bestFor: "Royal fort architecture & mirror work"
      },
      {
        name: "Hawa Mahal (Palace of Winds)",
        description: "The iconic 5-story pink honeycomb facade with 953 small windows designed to catch breezes.",
        timing: "9:00 AM – 5:00 PM",
        bestFor: "Iconic photos & old city views"
      }
    ],
    thingsToDo: [
      "Watch the sun set over the Pink City from Nahargarh Fort ramparts",
      "Explore the mirror-studded chambers of Amber Fort",
      "Taste authentic Dal Baati Churma and pyaaz kachoris"
    ],
    itineraries: [
      {
        title: "2-Day Royal Pink City Tour",
        days: [
          { day: 1, title: "Hawa Mahal, City Palace & Sunset at Nahargarh", details: "Arrive in Jaipur. Visit Hawa Mahal and City Palace. Head up to Nahargarh Fort for a breathtaking sunset over the city." },
          { day: 2, title: "Amber Fort & Bapu Bazaar Shopping", details: "Morning trip to the grand Amber Fort. Post-lunch shopping in Bapu Bazaar for textiles and handicrafts before heading home." }
        ]
      }
    ],
    checklist: [
      { item: "Sun hat & sunglasses", category: "Clothing", required: true },
      { item: "Comfortable walking shoes for fort stairs", category: "Clothing", required: true }
    ],
    travelTips: [
      "Visit Amber Fort early in the morning around 8:30 AM to beat the crowds and afternoon heat."
    ],
    importantInfo: {
      permits: "None needed.",
      atmNetwork: "Everywhere.",
      mobileConnectivity: "Full 5G coverage."
    },
    nearbyDestinations: ["udaipur", "varanasi", "ayodhya"],
    faq: [
      {
        q: "How fast is the drive from Delhi now?",
        a: "Thanks to the new Delhi-Mumbai Expressway (NE4), driving from Delhi to Jaipur takes only ~3.5 hours."
      }
    ],
    lastUpdated: "August 2026",
    sources: "Rajasthan Tourism"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DESTINATIONS_DATA };
}
