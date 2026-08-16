/**
 * RAAHIYOO 2.0 — Comprehensive Master Dataset (122 Authentic Destinations)
 * Fully detailed with Day-by-Day Itineraries, Smart Packing Checklists, Insider Tips, Hubs & Transits.
 */

const CURRENCIES = {
  INR: { symbol: '₹', rate: 1, label: 'INR (₹)' },
  USD: { symbol: '$', rate: 0.012, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.011, label: 'EUR (€)' },
  AED: { symbol: 'AED ', rate: 0.044, label: 'AED (د.إ)' }
};

const DESTINATIONS = [
  {
    "id": "agra",
    "name": "Agra Taj Mahal",
    "state": "Uttar Pradesh",
    "region": "north",
    "tagline": "Wonder of the World & Mughal Imperial Capital",
    "description": "Home to the immortal white marble mausoleum Taj Mahal \u2014 UNESCO World Heritage Wonder of the World \u2014 alongside the massive red sandstone Agra Fort and Fatehpur Sikri.",
    "elevation": "171 m (561 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "2 Days",
    "category": "heritage",
    "mood": [
      "Heritage",
      "Wonder",
      "Romantic"
    ],
    "basePriceINR": 2600,
    "rating": 4.9,
    "reviewsCount": 780,
    "heroImage": "images/agra.jpg",
    "tags": [
      "Taj Mahal",
      "Agra Fort",
      "Fatehpur Sikri",
      "Mehtab Bagh"
    ],
    "highlights": [
      "Sunrise view of the Taj Mahal reflecting in the marble lotus pond",
      "Agra Fort palaces and Musamman Burj where Shah Jahan was imprisoned",
      "Fatehpur Sikri imperial ghost city & Buland Darwaza",
      "Mehtab Bagh sunset view across the Yamuna River"
    ],
    "nearestHubs": {
      "airport": "Agra Airport AGR / Delhi IGI (200 km)",
      "railway": "Agra Cantt AGC",
      "road": "Yamuna Expressway (165 km from Delhi)"
    },
    "transitSummary": "1.5-hour train ride from Delhi via Gatimaan / Vande Bharat Express. 2.5-hour drive from Delhi on 6-lane Yamuna Expressway.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Agra Taj Mahal",
        "desc": "Arrive in Agra Taj Mahal. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Sunrise view of the Taj Mahal reflecting in the marble lotus pond. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Agra Fort palaces and Musamman Burj where Shah Jahan was imprisoned. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "ajanta-ellora",
    "name": "Ajanta & Ellora Caves",
    "state": "Maharashtra",
    "region": "west",
    "tagline": "UNESCO Monolithic Kailash Temple & Ancient Frescoes",
    "description": "World's greatest rock-cut architectural masterpiece! Marvel at the monolithic Kailash Temple (Cave 16 carved top-to-bottom from a single mountain) and 30 Buddhist mural caves of Ajanta.",
    "elevation": "568 m (1,863 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "2 - 3 Days",
    "category": "heritage",
    "mood": [
      "Heritage",
      "Wonder",
      "Art"
    ],
    "basePriceINR": 2700,
    "rating": 4.9,
    "reviewsCount": 460,
    "heroImage": "images/ajanta-ellora.jpg",
    "tags": [
      "Kailash Temple",
      "Ellora Caves",
      "Ajanta Murals",
      "UNESCO World Heritage"
    ],
    "highlights": [
      "Kailash Temple Cave 16 - world's largest monolithic rock excavation",
      "Ajanta Caves 2nd-century BC tempera Buddhist paintings",
      "Bibi Ka Maqbara (Taj of Deccan) in Chhatrapati Sambhajinagar"
    ],
    "nearestHubs": {
      "airport": "Aurangabad Airport IXU (30 km)",
      "railway": "Chhatrapati Sambhajinagar (AWB)",
      "road": "Samruddhi Mahamarg Expressway"
    },
    "transitSummary": "30 km from Aurangabad Airport/Station. 4.5 hours from Mumbai via Samruddhi Expressway.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Ajanta & Ellora Caves",
        "desc": "Arrive in Ajanta & Ellora Caves. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Kailash Temple Cave 16 - world's largest monolithic rock excavation. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Ajanta Caves 2nd-century BC tempera Buddhist paintings. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "alibaug",
    "name": "Alibaug & Kolaba Fort",
    "state": "Maharashtra",
    "region": "west",
    "tagline": "Coastal Getaway, Sea Forts & Sandy Beaches",
    "description": "Mumbai's favorite beach escape. Walk across the seabed during low tide to Kolaba Sea Fort, relax at Varsoli and Nagaon water-sports beaches, and savor Konkani seafood.",
    "elevation": "Sea Level",
    "bestTime": "Oct to May",
    "idealDays": "2 Days",
    "category": "beaches",
    "mood": [
      "Beaches",
      "Water sports",
      "Relaxation"
    ],
    "basePriceINR": 2600,
    "rating": 4.6,
    "reviewsCount": 310,
    "heroImage": "images/alibaug.jpg",
    "tags": [
      "Kolaba Fort",
      "Nagaon Beach",
      "Water Sports",
      "Speedboat"
    ],
    "highlights": [
      "Walk or take horse cart through shallow sea to 17th-century Kolaba Fort",
      "Parasailing, banana rides and jet skiing at Nagaon Beach",
      "45-minute scenic Ro-Ro car ferry ride from Gateway of India / Bhaucha Dhakka"
    ],
    "nearestHubs": {
      "airport": "Mumbai Airport (100 km)",
      "railway": "Roha / Panvel",
      "road": "Mandwa Ro-Ro Ferry or Mumbai-Goa Highway"
    },
    "transitSummary": "45-minute Ro-Pax luxury ferry from Gateway of India/Bhaucha Dhakka (Mumbai) to Mandwa Port with vehicle transport.",
    "itinerary": [
      {
        "day": 1,
        "title": "Coastal Arrival & Sunset Promenade",
        "desc": "Arrive in Alibaug & Kolaba Fort, check in to your seaside resort or cottage. Head down to the golden sands for an evening ocean breeze, beach shack delicacies, and a fiery sunset over the water."
      },
      {
        "day": 2,
        "title": "Water Sports, Island Trips & Marine Adventures",
        "desc": "Morning session for Walk or take horse cart through shallow sea to 17th-century Kolaba Fort. Savor freshly caught coastal seafood and relax at secluded palm-fringed coves."
      },
      {
        "day": 3,
        "title": "Heritage Forts, Backwaters & Beach Cafes",
        "desc": "Explore Parasailing, banana rides and jet skiing at Nagaon Beach. Spend the evening enjoying live acoustic music and seaside cafes."
      }
    ],
    "packing": [
      "Breathable linen & quick-dry cotton clothing",
      "High-grade reef-safe sunscreen (SPF 50+) & aloe vera gel",
      "Polarized sunglasses & wide-brim sun hat",
      "Waterproof phone pouch & dry bag for boat rides",
      "Comfortable flip-flops and water shoes",
      "Mosquito repellent spray & hydration electrolytes",
      "Light swimwear and quick-dry microfiber towel"
    ],
    "tips": [
      "Book ferry and boat transfers in advance, especially during peak season.",
      "Respect coastal flag warnings \u2014 red flags indicate dangerous riptides and no swimming.",
      "Renting a self-drive scooter/scooty is the most economical way to explore coastal towns.",
      "Early mornings (6:30 - 8:30 AM) offer the calmest sea conditions for water sports and dolphin spotting."
    ]
  },
  {
    "id": "alleppey",
    "name": "Alleppey Houseboats",
    "state": "Kerala",
    "region": "south",
    "tagline": "Venice of the East & Backwater Houseboat Cruises",
    "description": "A tranquil network of palm-fringed canals, lagoons, and paddy fields. Drift on traditional thatched Kettuvallam houseboats savoring fresh Karimeen fish fry.",
    "elevation": "Sea Level",
    "bestTime": "Sep to Mar",
    "idealDays": "2 - 3 Days",
    "category": "beaches",
    "mood": [
      "Romantic",
      "Waterways",
      "Relaxation"
    ],
    "basePriceINR": 4000,
    "rating": 4.9,
    "reviewsCount": 470,
    "heroImage": "images/alleppey.jpg",
    "tags": [
      "Houseboat Cruise",
      "Vembanad Lake",
      "Backwaters",
      "Marari Beach"
    ],
    "highlights": [
      "Overnight luxury houseboat cruise on Vembanad Lake",
      "Village canoe Shikara rides through narrow village canals",
      "Sunset at pristine white sand Marari Beach",
      "Authentic Kerala Sadya lunch cooked onboard"
    ],
    "nearestHubs": {
      "airport": "Cochin Airport COK (75 km)",
      "railway": "Alappuzha ALLP",
      "road": "NH-66 Coastal Highway"
    },
    "transitSummary": "75 km from Kochi Airport (COK). Direct trains to Alappuzha Railway Station (ALLP).",
    "itinerary": [
      {
        "day": 1,
        "title": "Coastal Arrival & Sunset Promenade",
        "desc": "Arrive in Alleppey Houseboats, check in to your seaside resort or cottage. Head down to the golden sands for an evening ocean breeze, beach shack delicacies, and a fiery sunset over the water."
      },
      {
        "day": 2,
        "title": "Water Sports, Island Trips & Marine Adventures",
        "desc": "Morning session for Overnight luxury houseboat cruise on Vembanad Lake. Savor freshly caught coastal seafood and relax at secluded palm-fringed coves."
      },
      {
        "day": 3,
        "title": "Heritage Forts, Backwaters & Beach Cafes",
        "desc": "Explore Village canoe Shikara rides through narrow village canals. Spend the evening enjoying live acoustic music and seaside cafes."
      }
    ],
    "packing": [
      "Breathable linen & quick-dry cotton clothing",
      "High-grade reef-safe sunscreen (SPF 50+) & aloe vera gel",
      "Polarized sunglasses & wide-brim sun hat",
      "Waterproof phone pouch & dry bag for boat rides",
      "Comfortable flip-flops and water shoes",
      "Mosquito repellent spray & hydration electrolytes",
      "Light swimwear and quick-dry microfiber towel"
    ],
    "tips": [
      "Book ferry and boat transfers in advance, especially during peak season.",
      "Respect coastal flag warnings \u2014 red flags indicate dangerous riptides and no swimming.",
      "Renting a self-drive scooter/scooty is the most economical way to explore coastal towns.",
      "Early mornings (6:30 - 8:30 AM) offer the calmest sea conditions for water sports and dolphin spotting."
    ]
  },
  {
    "id": "amritsar",
    "name": "Amritsar Golden Temple",
    "state": "Punjab",
    "region": "north",
    "tagline": "Harmandir Sahib, 24x7 Langar & Wagah Border",
    "description": "The spiritual and cultural center of the Sikh faith. Experience the gleaming 24-karat gold Harmandir Sahib reflecting in the Amrit Sarovar, world's largest community kitchen (Langar), and patriotic Wagah Border ceremony.",
    "elevation": "234 m (768 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "2 Days",
    "category": "sacred",
    "mood": [
      "Spiritual",
      "Heritage",
      "Food"
    ],
    "basePriceINR": 2200,
    "rating": 4.9,
    "reviewsCount": 670,
    "heroImage": "images/amritsar.jpg",
    "tags": [
      "Golden Temple",
      "Wagah Border",
      "Langar",
      "Jallianwala Bagh"
    ],
    "highlights": [
      "Night illumination of Sri Harmandir Sahib & Palki Sahib ceremony",
      "Langar community kitchen serving 100,000 free hot meals daily",
      "Electrifying sunset flag-lowering ceremony at Indo-Pak Wagah Border",
      "Authentic Amritsari kulcha and creamy sweet lassi in Old City"
    ],
    "nearestHubs": {
      "airport": "Sri Guru Ram Dass Jee International Airport Amritsar ATQ",
      "railway": "Amritsar Junction ASR",
      "road": "Grand Trunk Road (NH-44)"
    },
    "transitSummary": "Direct international/domestic flights to Amritsar (ATQ). Direct Vande Bharat / Shatabdi Express trains from Delhi in ~5 hours.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Holy Darshan & Evening Maha Aarti",
        "desc": "Arrive at holy Amritsar Golden Temple. Check in to your heritage guest house, take a purifying holy dip, and attend the grand evening temple darshan and divine Aarti ceremony."
      },
      {
        "day": 2,
        "title": "Ancient Shrines, Corridors & Sacred Circumambulation",
        "desc": "Early morning Mangala Aarti followed by visiting Night illumination of Sri Harmandir Sahib & Palki Sahib ceremony. Partake in sacred temple Mahaprasadam."
      },
      {
        "day": 3,
        "title": "Spiritual Excursions & Cultural Heritage",
        "desc": "Visit nearby holy hermitages, river ghats, and Langar community kitchen serving 100,000 free hot meals daily. Shop for authentic prasad and spiritual souvenirs before departure."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "andaman",
    "name": "Andaman & Havelock Island",
    "state": "Andaman & Nicobar Islands",
    "region": "islands",
    "tagline": "Turquoise Coral Lagoons, Radhanagar Beach & Cellular Jail",
    "description": "An exotic tropical archipelago in the Bay of Bengal. Relax on Radhanagar Beach (voted Best in Asia), scuba dive amidst vibrant coral reefs, and experience the historic Cellular Jail.",
    "elevation": "Sea Level",
    "bestTime": "Oct to May",
    "idealDays": "5 - 7 Days",
    "category": "beaches",
    "mood": [
      "Beaches",
      "Diving",
      "Romantic"
    ],
    "basePriceINR": 4800,
    "rating": 4.9,
    "reviewsCount": 510,
    "heroImage": "images/andaman.jpg",
    "tags": [
      "Radhanagar Beach",
      "Scuba Diving",
      "Cellular Jail",
      "Havelock Island"
    ],
    "highlights": [
      "Sunset stroll on Radhanagar Beach (Beach No. 7) powdery white sands",
      "World-class scuba diving & sea-walking at Elephant Beach and Neil Island",
      "Cellular Jail national memorial Light & Sound show in Port Blair",
      "High-speed catamaran cruise across azure islands"
    ],
    "nearestHubs": {
      "airport": "Veer Savarkar International Airport Port Blair (IXZ)",
      "railway": "None (Island)",
      "road": "Andaman Trunk Road"
    },
    "transitSummary": "Direct flights from Chennai, Kolkata, Delhi, and Bengaluru to Port Blair (IXZ). High-speed catamarans (Makruzz/Nautika) connect Port Blair to Havelock & Neil Islands.",
    "itinerary": [
      {
        "day": 1,
        "title": "Coastal Arrival & Sunset Promenade",
        "desc": "Arrive in Andaman & Havelock Island, check in to your seaside resort or cottage. Head down to the golden sands for an evening ocean breeze, beach shack delicacies, and a fiery sunset over the water."
      },
      {
        "day": 2,
        "title": "Water Sports, Island Trips & Marine Adventures",
        "desc": "Morning session for Sunset stroll on Radhanagar Beach (Beach No. 7) powdery white sands. Savor freshly caught coastal seafood and relax at secluded palm-fringed coves."
      },
      {
        "day": 3,
        "title": "Heritage Forts, Backwaters & Beach Cafes",
        "desc": "Explore World-class scuba diving & sea-walking at Elephant Beach and Neil Island. Spend the evening enjoying live acoustic music and seaside cafes."
      }
    ],
    "packing": [
      "Breathable linen & quick-dry cotton clothing",
      "High-grade reef-safe sunscreen (SPF 50+) & aloe vera gel",
      "Polarized sunglasses & wide-brim sun hat",
      "Waterproof phone pouch & dry bag for boat rides",
      "Comfortable flip-flops and water shoes",
      "Mosquito repellent spray & hydration electrolytes",
      "Light swimwear and quick-dry microfiber towel"
    ],
    "tips": [
      "Book ferry and boat transfers in advance, especially during peak season.",
      "Respect coastal flag warnings \u2014 red flags indicate dangerous riptides and no swimming.",
      "Renting a self-drive scooter/scooty is the most economical way to explore coastal towns.",
      "Early mornings (6:30 - 8:30 AM) offer the calmest sea conditions for water sports and dolphin spotting."
    ]
  },
  {
    "id": "araku-valley",
    "name": "Araku Valley & Vizag",
    "state": "Andhra Pradesh",
    "region": "south",
    "tagline": "Coffee Plantations, Borra Caves & Bay of Bengal Coast",
    "description": "Where misty Eastern Ghats meet the Bay of Bengal. Take the scenic Vistadome glass-roof train through 58 tunnels to Araku, explore 150-million-year-old Borra Caves, and relax on Rishikonda Beach.",
    "elevation": "911 m (2,989 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "3 - 4 Days",
    "category": "mountains",
    "mood": [
      "Coffee Hills",
      "Beaches",
      "Nature"
    ],
    "basePriceINR": 2800,
    "rating": 4.8,
    "reviewsCount": 360,
    "heroImage": "images/araku-valley.jpg",
    "tags": [
      "Borra Caves",
      "Vistadome Train",
      "Rishikonda Beach",
      "Katiki Waterfalls"
    ],
    "highlights": [
      "Glass-roof Vistadome train journey through 58 tunnels and 84 bridges",
      "Stalactite and stalagmite formations inside millions of years old Borra Caves",
      "Tasting organic Araku Arabica coffee and tribal Dhimsa dance"
    ],
    "nearestHubs": {
      "airport": "Visakhapatnam International Airport VTZ (110 km)",
      "railway": "Araku (ARK) / Visakhapatnam (VSKP)",
      "road": "Vizag-Araku Hill Road"
    },
    "transitSummary": "110 km (3.5 hours) from Visakhapatnam (Vizag) via the scenic Vistadome train or road.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Araku Valley & Vizag",
        "desc": "Arrive at Araku Valley & Vizag, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (911 m (2,989 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Glass-roof Vistadome train journey through 58 tunnels and 84 bridges. Experience local mountain culture, hiking trails, and Stalactite and stalagmite formations inside millions of years old Borra Caves."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Tasting organic Araku Arabica coffee and tribal Dhimsa dance. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 911 m (2,989 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "auli",
    "name": "Auli Ski Slopes",
    "state": "Uttarakhand",
    "region": "north",
    "tagline": "Premier Himalayan Ski Slopes & Nanda Devi Panoramas",
    "description": "India's signature skiing paradise. Glide on powdered snow slopes with direct 180-degree views of India's 2nd highest peak Nanda Devi (7,816 m), connected by Asia's longest cable car.",
    "elevation": "2,800 m (9,200 ft)",
    "bestTime": "Dec to Mar (Skiing) / Apr to Jun (Lush)",
    "idealDays": "3 - 4 Days",
    "category": "mountains",
    "mood": [
      "Snow",
      "Adventure",
      "High Treks"
    ],
    "basePriceINR": 3800,
    "rating": 4.8,
    "reviewsCount": 290,
    "heroImage": "images/auli.jpg",
    "tags": [
      "Auli Cable Car",
      "Nanda Devi View",
      "Ski Slopes",
      "Gorson Bugyal"
    ],
    "highlights": [
      "Joshimath to Auli 4 km aerial ropeway cable car",
      "Skiing courses certified by GMVN with snow guns and chair lifts",
      "Gorson Bugyal high-altitude alpine meadow trek (3,050 m)",
      "Mirror reflection of peaks on Auli Artificial Lake"
    ],
    "nearestHubs": {
      "airport": "Dehradun Airport (270 km)",
      "railway": "Rishikesh / Haridwar",
      "road": "NH-07 to Joshimath"
    },
    "transitSummary": "Drive from Rishikesh/Haridwar to Joshimath (250 km), then take the 20-minute cable car or a 14 km winding road up to Auli.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Auli Ski Slopes",
        "desc": "Arrive at Auli Ski Slopes, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (2,800 m (9,200 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Joshimath to Auli 4 km aerial ropeway cable car. Experience local mountain culture, hiking trails, and Skiing courses certified by GMVN with snow guns and chair lifts."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Gorson Bugyal high-altitude alpine meadow trek (3,050 m). Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Mirror reflection of peaks on Auli Artificial Lake. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 2,800 m (9,200 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "ayodhya",
    "name": "Ayodhya Ram Mandir",
    "state": "Uttar Pradesh",
    "region": "north",
    "tagline": "The Holy Janmabhoomi of Lord Shri Ram",
    "description": "The revered birthplace of Lord Rama on the banks of sacred River Saryu. Marvel at the grand Nagara-style Shri Ram Janmabhoomi Mandir, Hanuman Garhi, and evening Saryu Aarti.",
    "elevation": "93 m (305 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "2 Days",
    "category": "sacred",
    "mood": [
      "Spiritual",
      "Heritage",
      "Peace"
    ],
    "basePriceINR": 2200,
    "rating": 4.9,
    "reviewsCount": 650,
    "heroImage": "images/ayodhya.jpg",
    "tags": [
      "Ram Mandir",
      "Hanuman Garhi",
      "Saryu Ghat",
      "Kanak Bhawan"
    ],
    "highlights": [
      "Darshan at the monumental pink sandstone Shri Ram Janmabhoomi Mandir",
      "Climb 76 steps to historic 10th-century Hanuman Garhi temple",
      "Evening musical Saryu River Maha Aarti at Ram Ki Paidi",
      "Kanak Bhawan palace temple gifted to Goddess Sita"
    ],
    "nearestHubs": {
      "airport": "Maharishi Valmiki International Airport Ayodhya AY",
      "railway": "Ayodhya Dham Jn (AY) / Ayodhya Cantt",
      "road": "Lucknow-Ayodhya-Gorakhpur 4-lane NH-27"
    },
    "transitSummary": "Direct flights to Ayodhya (AY) from Delhi, Mumbai, Bengaluru, Ahmedabad. 2.5-hour drive from Lucknow (130 km) via NH-27.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Holy Darshan & Evening Maha Aarti",
        "desc": "Arrive at holy Ayodhya Ram Mandir. Check in to your heritage guest house, take a purifying holy dip, and attend the grand evening temple darshan and divine Aarti ceremony."
      },
      {
        "day": 2,
        "title": "Ancient Shrines, Corridors & Sacred Circumambulation",
        "desc": "Early morning Mangala Aarti followed by visiting Darshan at the monumental pink sandstone Shri Ram Janmabhoomi Mandir. Partake in sacred temple Mahaprasadam."
      },
      {
        "day": 3,
        "title": "Spiritual Excursions & Cultural Heritage",
        "desc": "Visit nearby holy hermitages, river ghats, and Climb 76 steps to historic 10th-century Hanuman Garhi temple. Shop for authentic prasad and spiritual souvenirs before departure."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "badrinath",
    "name": "Badrinath & Mana",
    "state": "Uttarakhand",
    "region": "north",
    "tagline": "Sacred Vaikuntha of Lord Vishnu & First Indian Village",
    "description": "Perched between Nar and Narayana mountain ranges along the Alaknanda River. Visit the vibrant Badrinath Temple, Tapt Kund hot springs, and Mana \u2014 India's first village near the Tibet border.",
    "elevation": "3,300 m (10,800 ft)",
    "bestTime": "May to Jun & Sep to Oct",
    "idealDays": "4 - 5 Days",
    "category": "sacred",
    "mood": [
      "Spiritual",
      "Heritage",
      "High Treks"
    ],
    "basePriceINR": 3600,
    "rating": 4.9,
    "reviewsCount": 450,
    "heroImage": "images/badrinath.jpg",
    "tags": [
      "Badrinath Temple",
      "Mana Village",
      "Alaknanda River",
      "Vyas Gufa"
    ],
    "highlights": [
      "Ancient Badrinath Temple with colorful facade",
      "Mana Village: Vyas Gufa, Ganesh Gufa & Bhim Pul stone bridge over Saraswati River",
      "Tapt Kund natural sulfur bath before temple entry",
      "Vasudhara Falls 400 ft cascading mountain waterfall trek"
    ],
    "nearestHubs": {
      "airport": "Dehradun Airport (310 km)",
      "railway": "Rishikesh / Yog Nagari",
      "road": "NH-07 All-Weather Chardham Highway"
    },
    "transitSummary": "Accessible by road via NH-07 from Rishikesh/Haridwar through Devprayag, Rudraprayag, and Joshimath directly up to the temple entrance.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Badrinath & Mana",
        "desc": "Arrive at Badrinath & Mana, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (3,300 m (10,800 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Ancient Badrinath Temple with colorful facade. Experience local mountain culture, hiking trails, and Mana Village: Vyas Gufa, Ganesh Gufa & Bhim Pul stone bridge over Saraswati River."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Tapt Kund natural sulfur bath before temple entry. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Vasudhara Falls 400 ft cascading mountain waterfall trek. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "bandhavgarh",
    "name": "Bandhavgarh National Park",
    "state": "Madhya Pradesh",
    "region": "central",
    "tagline": "World's Highest Royal Bengal Tiger Density",
    "description": "Surrounded by 32 hills and sal forests with the ancient 2,000-year-old Bandhavgarh Fort and reclining Shesh Shaiya Vishnu statue. Renowned for legendary tiger lineages in Tala zone.",
    "elevation": "440 m (1,440 ft)",
    "bestTime": "Oct to Jun",
    "idealDays": "2 - 3 Days",
    "category": "heritage",
    "mood": [
      "Wildlife",
      "Safari",
      "Adventure"
    ],
    "basePriceINR": 3800,
    "rating": 4.9,
    "reviewsCount": 420,
    "heroImage": "images/bandhavgarh.jpg",
    "tags": [
      "Highest Tiger Density",
      "Tala Zone",
      "Shesh Shaiya",
      "Bandhavgarh Fort"
    ],
    "highlights": [
      "Highest tiger sighting hit-rate in India across Tala and Magdhi zones",
      "Shesh Shaiya 35-ft 10th-century reclining Vishnu stone statue beside natural spring",
      "Ancient hill fort ruins and caves with Brahmi inscriptions"
    ],
    "nearestHubs": {
      "airport": "Jabalpur Airport JLR (165 km)",
      "railway": "Umaria UMR (32 km) / Katni (95 km)",
      "road": "Jabalpur-Katni-Umaria Highway"
    },
    "transitSummary": "165 km (3.5 hours) from Jabalpur Airport or 32 km from Umaria Railway Station.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Bandhavgarh National Park",
        "desc": "Arrive in Bandhavgarh National Park. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Highest tiger sighting hit-rate in India across Tala and Magdhi zones. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Shesh Shaiya 35-ft 10th-century reclining Vishnu stone statue beside natural spring. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "bhandardara",
    "name": "Bhandardara & Arthur Lake",
    "state": "Maharashtra",
    "region": "west",
    "tagline": "Fireflies Festival, Umbrella Falls & Kalsubai Peak",
    "description": "A serene Sahyadri mountain resort on the Pravara River. Base for trekking Kalsubai (1,646 m) \u2014 highest peak of Maharashtra \u2014 Arthur Lake camping, and the glowing monsoon Fireflies Festival.",
    "elevation": "740 m (2,427 ft)",
    "bestTime": "Jun to Feb (May-Jun for Fireflies)",
    "idealDays": "2 Days",
    "category": "mountains",
    "mood": [
      "Monsoon",
      "High Treks",
      "Offbeat"
    ],
    "basePriceINR": 2500,
    "rating": 4.7,
    "reviewsCount": 260,
    "heroImage": "images/bhandardara.jpg",
    "tags": [
      "Kalsubai Peak",
      "Fireflies Festival",
      "Arthur Lake",
      "Umbrella Falls"
    ],
    "highlights": [
      "Trek to Kalsubai Peak (5,400 ft) Everest of Maharashtra",
      "Millions of glowing fireflies synchronizing on trees in pre-monsoon",
      "Wilson Dam (1910 AD) & Umbrella Falls cascade"
    ],
    "nearestHubs": {
      "airport": "Nashik Airport (80 km) / Mumbai (165 km)",
      "railway": "Igatpuri IGP (45 km)",
      "road": "Mumbai-Nashik Expressway"
    },
    "transitSummary": "45 km from Igatpuri Railway Station on the Mumbai-Nashik corridor.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Bhandardara & Arthur Lake",
        "desc": "Arrive at Bhandardara & Arthur Lake, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (740 m (2,427 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Trek to Kalsubai Peak (5,400 ft) Everest of Maharashtra. Experience local mountain culture, hiking trails, and Millions of glowing fireflies synchronizing on trees in pre-monsoon."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Wilson Dam (1910 AD) & Umbrella Falls cascade. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 740 m (2,427 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "bhedaghat",
    "name": "Bhedaghat & Marble Rocks",
    "state": "Madhya Pradesh",
    "region": "central",
    "tagline": "Towering 100-ft Marble Gorge & Dhuandhar Falls",
    "description": "Where the sacred Narmada River carves through a breathtaking 3-km gorge of 100-ft pure white and colored marble rocks. Experience moonlight boating and the roaring mist of Dhuandhar Falls.",
    "elevation": "393 m (1,289 ft)",
    "bestTime": "Oct to Apr",
    "idealDays": "1 - 2 Days",
    "category": "heritage",
    "mood": [
      "Nature",
      "Boating",
      "Photography"
    ],
    "basePriceINR": 2300,
    "rating": 4.8,
    "reviewsCount": 290,
    "heroImage": "images/bhedaghat.jpg",
    "tags": [
      "Marble Rocks",
      "Dhuandhar Falls",
      "Narmada Boating",
      "Chausath Yogini"
    ],
    "highlights": [
      "Rowboat ride between 100-ft soaring white marble rock canyons",
      "Dhuandhar (Smoke Cascade) roaring waterfall ropeway",
      "10th-century Chausath Yogini circular hilltop temple with 64 yogini statues"
    ],
    "nearestHubs": {
      "airport": "Jabalpur Dumna Airport JLR (35 km)",
      "railway": "Jabalpur Junction JBP (25 km)",
      "road": "NH-34 via Jabalpur"
    },
    "transitSummary": "25 km (45 mins) from Jabalpur Railway Station / Airport via direct cab.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Bhedaghat & Marble Rocks",
        "desc": "Arrive in Bhedaghat & Marble Rocks. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Rowboat ride between 100-ft soaring white marble rock canyons. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Dhuandhar (Smoke Cascade) roaring waterfall ropeway. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "bikaner",
    "name": "Bikaner & Junagarh Fort",
    "state": "Rajasthan",
    "region": "west",
    "tagline": "Camel Country, Unconquered Fort & Karni Mata Temple",
    "description": "Surrounded by Thar desert dunes. Discover the unconquered Junagarh Fort, the royal Lalgarh Palace, ICAR National Research Centre on Camel, and the sacred Karni Mata (Rat) Temple in Deshnoke.",
    "elevation": "242 m (794 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "2 Days",
    "category": "heritage",
    "mood": [
      "Heritage",
      "Food",
      "Culture"
    ],
    "basePriceINR": 2500,
    "rating": 4.7,
    "reviewsCount": 290,
    "heroImage": "images/bikaner.jpg",
    "tags": [
      "Junagarh Fort",
      "Karni Mata Temple",
      "Camel Breeding Farm",
      "Bikaneri Bhujia"
    ],
    "highlights": [
      "Junagarh Fort with gold leaf Anup Mahal and Badal Mahal blue cloud walls",
      "Karni Mata Temple housing 25,000 sacred black and white rats",
      "Tasting fresh camel milk kulfi and world-famous Bikaneri Bhujia"
    ],
    "nearestHubs": {
      "airport": "Bikaner Airport BKB / Jodhpur (250 km)",
      "railway": "Bikaner Junction BKN",
      "road": "Amritsar-Jamnagar Expressway (NE-5)"
    },
    "transitSummary": "Direct flights from Delhi to Bikaner (BKB) or direct express trains from Delhi and Jaipur.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Bikaner & Junagarh Fort",
        "desc": "Arrive in Bikaner & Junagarh Fort. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Junagarh Fort with gold leaf Anup Mahal and Badal Mahal blue cloud walls. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Karni Mata Temple housing 25,000 sacred black and white rats. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "bir-billing",
    "name": "Bir Billing",
    "state": "Himachal Pradesh",
    "region": "north",
    "tagline": "Paragliding Capital of India & Tibetan Monasteries",
    "description": "World-ranked #2 paragliding takeoff point at Billing (2,400 m) with smooth thermals, landing down in the peaceful Tibetan colony of Bir with monasteries and deer parks.",
    "elevation": "2,400 m (7,870 ft)",
    "bestTime": "Sep to Nov & Mar to May",
    "idealDays": "2 - 3 Days",
    "category": "mountains",
    "mood": [
      "Adventure",
      "Peace",
      "High Treks"
    ],
    "basePriceINR": 3000,
    "rating": 4.9,
    "reviewsCount": 280,
    "heroImage": "images/bir-billing.jpg",
    "tags": [
      "Tandem Paragliding",
      "Chokling Monastery",
      "Sunset Point",
      "Tea Gardens"
    ],
    "highlights": [
      "Tandem 20-30 minute paragliding flight over the Dhauladhar valley",
      "Chokling & Palpung Sherabling ancient Tibetan monasteries",
      "Tea factory tours and Tibetan handicrafts market"
    ],
    "nearestHubs": {
      "airport": "Dharamshala Airport (68 km)",
      "railway": "Pathankot (140 km) / Ahju Toy Train",
      "road": "NH-154 via Baijnath"
    },
    "transitSummary": "68 km from Gaggal-Dharamshala Airport. Direct buses from Delhi/Chandigarh via Baijnath.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Bir Billing",
        "desc": "Arrive at Bir Billing, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (2,400 m (7,870 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Tandem 20-30 minute paragliding flight over the Dhauladhar valley. Experience local mountain culture, hiking trails, and Chokling & Palpung Sherabling ancient Tibetan monasteries."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Tea factory tours and Tibetan handicrafts market. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 2,400 m (7,870 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "bodh-gaya",
    "name": "Bodh Gaya & Rajgir",
    "state": "Bihar",
    "region": "east",
    "tagline": "The Supreme Seat of Lord Buddha's Enlightenment",
    "description": "The holiest Buddhist pilgrimage site in the world. Meditate under the sacred Bodhi Tree at the UNESCO Mahabodhi Temple, explore international monasteries, and visit Rajgir's Glass Bridge and Nalanda ruins.",
    "elevation": "111 m (364 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "2 - 3 Days",
    "category": "sacred",
    "mood": [
      "Spiritual",
      "Peace",
      "Heritage"
    ],
    "basePriceINR": 2400,
    "rating": 4.9,
    "reviewsCount": 480,
    "heroImage": "images/bodh-gaya.jpg",
    "tags": [
      "Mahabodhi Temple",
      "Bodhi Tree",
      "80-Ft Buddha",
      "Rajgir Glass Bridge"
    ],
    "highlights": [
      "UNESCO Mahabodhi Temple and Diamond Throne under sacred Bodhi Tree",
      "Great 80-ft Giant Buddha statue and Japanese, Thai, and Bhutanese monasteries",
      "Rajgir Glass Skywalk Bridge and 5th-century Nalanda University ruins"
    ],
    "nearestHubs": {
      "airport": "Gaya International Airport GAY (12 km) / Patna (110 km)",
      "railway": "Gaya Junction GAYA (15 km)",
      "road": "Patna-Gaya 4-lane Highway (NH-83)"
    },
    "transitSummary": "15 km from Gaya Railway Station/Airport. 2.5 hours from Patna Airport via 4-lane NH-83.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Holy Darshan & Evening Maha Aarti",
        "desc": "Arrive at holy Bodh Gaya & Rajgir. Check in to your heritage guest house, take a purifying holy dip, and attend the grand evening temple darshan and divine Aarti ceremony."
      },
      {
        "day": 2,
        "title": "Ancient Shrines, Corridors & Sacred Circumambulation",
        "desc": "Early morning Mangala Aarti followed by visiting UNESCO Mahabodhi Temple and Diamond Throne under sacred Bodhi Tree. Partake in sacred temple Mahaprasadam."
      },
      {
        "day": 3,
        "title": "Spiritual Excursions & Cultural Heritage",
        "desc": "Visit nearby holy hermitages, river ghats, and Great 80-ft Giant Buddha statue and Japanese, Thai, and Bhutanese monasteries. Shop for authentic prasad and spiritual souvenirs before departure."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "chikmagalur",
    "name": "Chikmagalur & Mullayanagiri",
    "state": "Karnataka",
    "region": "south",
    "tagline": "Birthplace of Indian Coffee & Highest Peak of Karnataka",
    "description": "Where coffee was first planted in India by Baba Budan. Trek up to Mullayanagiri (1,930 m) \u2014 Karnataka's highest peak \u2014 enjoy Hebbe and Jhari waterfalls, and stay in lush coffee estates.",
    "elevation": "1,090 m (3,580 ft)",
    "bestTime": "Sep to May",
    "idealDays": "2 - 3 Days",
    "category": "mountains",
    "mood": [
      "Coffee Hills",
      "High Treks",
      "Romantic"
    ],
    "basePriceINR": 2800,
    "rating": 4.8,
    "reviewsCount": 380,
    "heroImage": "images/chikmagalur.jpg",
    "tags": [
      "Mullayanagiri Peak",
      "Coffee Estates",
      "Baba Budangiri",
      "Hebbe Falls"
    ],
    "highlights": [
      "Trek to Mullayanagiri summit with 360-degree green rolling horizon",
      "Jeep ride through coffee plantations to cascading Jhari (Buttermilk) Falls",
      "Baba Budangiri shrine and scenic ridge drives"
    ],
    "nearestHubs": {
      "airport": "Mangalore Airport IXE (150 km) / Bengaluru (240 km)",
      "railway": "Kadur Junction (40 km) / Hassan",
      "road": "NH-73 via Hassan"
    },
    "transitSummary": "240 km (4.5 hours) from Bengaluru via 4-lane Hassan Highway.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Chikmagalur & Mullayanagiri",
        "desc": "Arrive at Chikmagalur & Mullayanagiri, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (1,090 m (3,580 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Trek to Mullayanagiri summit with 360-degree green rolling horizon. Experience local mountain culture, hiking trails, and Jeep ride through coffee plantations to cascading Jhari (Buttermilk) Falls."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Baba Budangiri shrine and scenic ridge drives. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 1,090 m (3,580 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "chitrakote-falls",
    "name": "Chitrakote Falls (Bastar)",
    "state": "Chhattisgarh",
    "region": "central",
    "tagline": "The Niagara Falls of India on Indravati River",
    "description": "India's widest natural waterfall, spanning nearly 300 meters across a horseshoe cliff on the Indravati River in Bastar. Experience tribal bell-metal craft and Kanger Valley National Park caves.",
    "elevation": "175 m (574 ft)",
    "bestTime": "Jul to Feb (Monsoon for Full Roar)",
    "idealDays": "2 - 3 Days",
    "category": "mountains",
    "mood": [
      "Waterfalls",
      "Tribal",
      "Offbeat"
    ],
    "basePriceINR": 2400,
    "rating": 4.8,
    "reviewsCount": 220,
    "heroImage": "images/chitrakote-falls.jpg",
    "tags": [
      "Niagara of India",
      "Indravati River",
      "Bastar Craft",
      "Kanger Valley"
    ],
    "highlights": [
      "Horseshoe 100-ft waterfall plunging across 300 meters width",
      "Boating to the base of the waterfall spray mist",
      "Kutumsar subterranean limestone caves and Dhurwa tribal craft markets"
    ],
    "nearestHubs": {
      "airport": "Jagdalpur Airport JGB (40 km) / Raipur (300 km)",
      "railway": "Jagdalpur JDB (38 km)",
      "road": "NH-30 via Raipur"
    },
    "transitSummary": "38 km from Jagdalpur Railway Station / Airport. 6 hours from Raipur via 4-lane NH-30.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Chitrakote Falls (Bastar)",
        "desc": "Arrive at Chitrakote Falls (Bastar), check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (175 m (574 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Horseshoe 100-ft waterfall plunging across 300 meters width. Experience local mountain culture, hiking trails, and Boating to the base of the waterfall spray mist."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Kutumsar subterranean limestone caves and Dhurwa tribal craft markets. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 175 m (574 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "chittorgarh",
    "name": "Chittorgarh Fort",
    "state": "Rajasthan",
    "region": "west",
    "tagline": "India's Largest Fort & Legend of Queen Padmini",
    "description": "Spread over 700 acres atop a 590-ft hill. The epitome of Rajput bravery, sacrifice, and romance. Marvel at Vijay Stambha (Tower of Victory), Kirti Stambha, and Padmini Palace.",
    "elevation": "394 m (1,293 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "1 - 2 Days",
    "category": "heritage",
    "mood": [
      "Heritage",
      "History",
      "Architecture"
    ],
    "basePriceINR": 2400,
    "rating": 4.8,
    "reviewsCount": 320,
    "heroImage": "images/chittorgarh.jpg",
    "tags": [
      "Vijay Stambha",
      "Padmini Palace",
      "Gaumukh Reservoir",
      "UNESCO Fort"
    ],
    "highlights": [
      "9-story Vijay Stambha (Tower of Victory) with 157 steps",
      "Padmini Palace surrounded by water lotus pond",
      "Gaumukh holy spring rock reservoir"
    ],
    "nearestHubs": {
      "airport": "Udaipur Airport (90 km)",
      "railway": "Chittaurgarh Junction COR",
      "road": "Golden Quadrilateral (NH-48)"
    },
    "transitSummary": "90 km (1.5 hours) drive from Udaipur Airport via 4-lane expressway.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Chittorgarh Fort",
        "desc": "Arrive in Chittorgarh Fort. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of 9-story Vijay Stambha (Tower of Victory) with 157 steps. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Padmini Palace surrounded by water lotus pond. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "chopta",
    "name": "Chopta & Tungnath",
    "state": "Uttarakhand",
    "region": "north",
    "tagline": "Mini Switzerland & World's Highest Shiva Temple",
    "description": "An unspoiled alpine meadow in Kedarnath Wildlife Sanctuary. Base for the 3.5 km trek to Tungnath (3,680 m) \u2014 the highest of all Panch Kedar temples \u2014 and the Chandrashila summit.",
    "elevation": "2,680 m (8,790 ft)",
    "bestTime": "Apr to Jun & Sep to Nov / Winter Snow",
    "idealDays": "3 - 4 Days",
    "category": "mountains",
    "mood": [
      "High Treks",
      "Spiritual",
      "Offbeat"
    ],
    "basePriceINR": 2600,
    "rating": 4.9,
    "reviewsCount": 320,
    "heroImage": "images/chopta.jpg",
    "tags": [
      "Tungnath Temple",
      "Chandrashila Summit",
      "Deoriatal Lake",
      "Meadows"
    ],
    "highlights": [
      "Trek to 1,000-year-old Tungnath Temple at 12,073 ft",
      "Chandrashila Summit (13,000 ft) with 360-degree panorama of Nanda Devi, Trishul, and Chaukhamba peaks",
      "Deoriatal emerald lake with reflection of Chaukhamba massif"
    ],
    "nearestHubs": {
      "airport": "Dehradun DED (220 km)",
      "railway": "Rishikesh (200 km)",
      "road": "Rudraprayag-Ukhimath-Chopta Road"
    },
    "transitSummary": "Drive from Rishikesh/Haridwar to Chopta via Rudraprayag and Ukhimath (200 km, ~6.5 hours).",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Chopta & Tungnath",
        "desc": "Arrive at Chopta & Tungnath, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (2,680 m (8,790 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Trek to 1,000-year-old Tungnath Temple at 12,073 ft. Experience local mountain culture, hiking trails, and Chandrashila Summit (13,000 ft) with 360-degree panorama of Nanda Devi, Trishul, and Chaukhamba peaks."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Deoriatal emerald lake with reflection of Chaukhamba massif. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 2,680 m (8,790 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "coorg",
    "name": "Coorg Coffee Hills",
    "state": "Karnataka",
    "region": "south",
    "tagline": "Scotland of India, Coffee Estates & Abbey Falls",
    "description": "Lush misty green hills blanketed in coffee plantations, spice gardens, cascading Abbey Falls, Raja Seat sunsets, and the Tibetan Golden Temple at Bylakuppe.",
    "elevation": "1,150 m (3,770 ft)",
    "bestTime": "Oct to May",
    "idealDays": "3 - 4 Days",
    "category": "mountains",
    "mood": [
      "Nature",
      "Romantic",
      "Coffee Hills"
    ],
    "basePriceINR": 3200,
    "rating": 4.8,
    "reviewsCount": 460,
    "heroImage": "images/coorg.jpg",
    "tags": [
      "Coffee Plantations",
      "Abbey Falls",
      "Namdroling Monastery",
      "Raja Seat"
    ],
    "highlights": [
      "Stay in authentic heritage coffee & cardamom plantation homestays",
      "Namdroling Golden Temple with 40-ft gilded Buddha statues in Bylakuppe",
      "Roaring Abbey Falls surrounded by spice groves",
      "Raja Seat hilltop musical fountain sunset"
    ],
    "nearestHubs": {
      "airport": "Kannur Airport CNN (85 km) / Mangalore (135 km) / Bengaluru (260 km)",
      "railway": "Mysuru MYS (115 km)",
      "road": "Mysuru-Madikeri Highway"
    },
    "transitSummary": "115 km from Mysuru Railway Station (2.5 hours) or 260 km from Bengaluru via Mysore Expressway.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Coorg Coffee Hills",
        "desc": "Arrive at Coorg Coffee Hills, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (1,150 m (3,770 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Stay in authentic heritage coffee & cardamom plantation homestays. Experience local mountain culture, hiking trails, and Namdroling Golden Temple with 40-ft gilded Buddha statues in Bylakuppe."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Roaring Abbey Falls surrounded by spice groves. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Raja Seat hilltop musical fountain sunset. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 1,150 m (3,770 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "dalhousie",
    "name": "Dalhousie & Khajjiar",
    "state": "Himachal Pradesh",
    "region": "north",
    "tagline": "Mini Switzerland of India & Colonial Pine Hills",
    "description": "A charming hill station spread across five forested hills, paired with the emerald meadow and lake of Khajjiar encircled by towering cedar deodars.",
    "elevation": "1,970 m (6,460 ft)",
    "bestTime": "Mar to Jun & Dec to Feb (Snow)",
    "idealDays": "3 - 4 Days",
    "category": "mountains",
    "mood": [
      "Romantic",
      "Heritage",
      "Snow"
    ],
    "basePriceINR": 2800,
    "rating": 4.7,
    "reviewsCount": 260,
    "heroImage": "images/dalhousie.jpg",
    "tags": [
      "Khajjiar Meadow",
      "Panchpula",
      "Dainkund Peak",
      "Bakrota Hills"
    ],
    "highlights": [
      "Khajjiar meadow with floating island lake and zorbing",
      "Dainkund Peak (Singing Hill) 360-degree snow panorama",
      "Panchpula cascading waterfalls and historic monument"
    ],
    "nearestHubs": {
      "airport": "Pathankot (75 km) / Gaggal (105 km)",
      "railway": "Pathankot Cantt (PTKC)",
      "road": "Pathankot-Dalhousie Road"
    },
    "transitSummary": "75 km (2.5 hours) from Pathankot Railway Station via scenic mountain road.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Dalhousie & Khajjiar",
        "desc": "Arrive at Dalhousie & Khajjiar, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (1,970 m (6,460 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Khajjiar meadow with floating island lake and zorbing. Experience local mountain culture, hiking trails, and Dainkund Peak (Singing Hill) 360-degree snow panorama."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Panchpula cascading waterfalls and historic monument. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 1,970 m (6,460 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "darjeeling",
    "name": "Darjeeling",
    "state": "West Bengal",
    "region": "east",
    "tagline": "Queen of the Hills, Kanchenjunga & Heritage Toy Train",
    "description": "Perched amidst rolling tea estates overlooking the majestic snow peaks of Mount Kanchenjunga (8,586 m). Ride the UNESCO Darjeeling Himalayan Railway and watch golden sunrises from Tiger Hill.",
    "elevation": "2,042 m (6,700 ft)",
    "bestTime": "Mar to May & Oct to Dec",
    "idealDays": "3 - 4 Days",
    "category": "mountains",
    "mood": [
      "Tea Hills",
      "Heritage",
      "Romantic"
    ],
    "basePriceINR": 3200,
    "rating": 4.8,
    "reviewsCount": 460,
    "heroImage": "images/darjeeling.jpg",
    "tags": [
      "Tiger Hill",
      "Toy Train",
      "Kanchenjunga",
      "Tea Estates"
    ],
    "highlights": [
      "4:00 AM Tiger Hill sunrise illuminating Mount Kanchenjunga and Everest",
      "UNESCO steam Toy Train joyride through Batasia Loop",
      "Happy Valley Tea Estate premium Muscatel tea tasting",
      "Himalayan Mountaineering Institute & Snow Leopard zoo"
    ],
    "nearestHubs": {
      "airport": "Bagdogra Airport IXB (70 km)",
      "railway": "New Jalpaiguri NJP (75 km)",
      "road": "NH-110 Hill Cart Road"
    },
    "transitSummary": "70 km (3 hours) from Bagdogra Airport (IXB) / New Jalpaiguri (NJP) via scenic Hill Cart Road.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Darjeeling",
        "desc": "Arrive at Darjeeling, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (2,042 m (6,700 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit 4:00 AM Tiger Hill sunrise illuminating Mount Kanchenjunga and Everest. Experience local mountain culture, hiking trails, and UNESCO steam Toy Train joyride through Batasia Loop."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Happy Valley Tea Estate premium Muscatel tea tasting. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Himalayan Mountaineering Institute & Snow Leopard zoo. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 2,042 m (6,700 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "dawki-mawlynnong",
    "name": "Dawki & Mawlynnong",
    "state": "Meghalaya",
    "region": "northeast",
    "tagline": "Crystal Umngot Glass River & Asia's Cleanest Village",
    "description": "Boat over the crystal transparent waters of Umngot River where boats appear to float in mid-air, and walk the floral cobblestone paths of Mawlynnong on the India-Bangladesh border.",
    "elevation": "Sea Level to 1,000 m",
    "bestTime": "Oct to Apr",
    "idealDays": "2 Days",
    "category": "mountains",
    "mood": [
      "Waterways",
      "Offbeat",
      "Nature"
    ],
    "basePriceINR": 2900,
    "rating": 4.9,
    "reviewsCount": 360,
    "heroImage": "images/dawki-mawlynnong.jpg",
    "tags": [
      "Umngot River",
      "Transparent Boat",
      "Mawlynnong",
      "Single Root Bridge"
    ],
    "highlights": [
      "Boating on transparent Umngot River seeing riverbed rocks 20-ft deep",
      "Riwai Single Decker Living Root Bridge",
      "Bamboo skywalk tree house overlooking Bangladesh plains"
    ],
    "nearestHubs": {
      "airport": "Guwahati Airport (170 km) / Shillong (85 km)",
      "railway": "Guwahati (160 km)",
      "road": "Shillong-Dawki Highway"
    },
    "transitSummary": "85 km (2.5 hours) from Shillong via scenic road past Pynursla.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Dawki & Mawlynnong",
        "desc": "Arrive at Dawki & Mawlynnong, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (Sea Level to 1,000 m), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Boating on transparent Umngot River seeing riverbed rocks 20-ft deep. Experience local mountain culture, hiking trails, and Riwai Single Decker Living Root Bridge."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Bamboo skywalk tree house overlooking Bangladesh plains. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to Sea Level to 1,000 m.",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "delhi-heritage",
    "name": "Delhi Heritage Capital",
    "state": "Delhi",
    "region": "north",
    "tagline": "The Historic Heart of India & Mughal Architecture",
    "description": "India's vibrant capital spanning 8 historic cities. Experience UNESCO monuments Qutub Minar, Humayun's Tomb, Red Fort, bustling Chandni Chowk street food, and the grandeur of Akshardham.",
    "elevation": "216 m (709 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "2 - 3 Days",
    "category": "heritage",
    "mood": [
      "Heritage",
      "Food",
      "Shopping"
    ],
    "basePriceINR": 2500,
    "rating": 4.8,
    "reviewsCount": 610,
    "heroImage": "images/delhi-heritage.jpg",
    "tags": [
      "Qutub Minar",
      "Humayuns Tomb",
      "Chandni Chowk",
      "Akshardham"
    ],
    "highlights": [
      "Qutub Minar 73-meter victory tower and 1,600-year-old iron pillar",
      "Humayun's Tomb red sandstone precursor to Taj Mahal",
      "Chandni Chowk rickshaw ride tasting Paranthe Wali Gali",
      "Grand water and light show at Swaminarayan Akshardham"
    ],
    "nearestHubs": {
      "airport": "Indira Gandhi International Airport DEL",
      "railway": "New Delhi (NDLS) / Hazrat Nizamuddin",
      "road": "All Major National Highways Hub"
    },
    "transitSummary": "India's primary flight and rail gateway with metro connectivity to every tourist attraction.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Delhi Heritage Capital",
        "desc": "Arrive in Delhi Heritage Capital. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Qutub Minar 73-meter victory tower and 1,600-year-old iron pillar. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Humayun's Tomb red sandstone precursor to Taj Mahal. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "deoghar",
    "name": "Deoghar (Baba Baidyanath)",
    "state": "Jharkhand",
    "region": "east",
    "tagline": "Sacred Baidyanath Jyotirlinga & Shravani Mela",
    "description": "One of the revered 12 Jyotirlingas and a sacred Shaktipeeth. Millions of Kanwariyas undertake the 105 km barefoot pilgrimage from Sultanganj carrying holy Ganga water to Baba Baidyanath.",
    "elevation": "254 m (833 ft)",
    "bestTime": "Oct to Mar (Jul-Aug for Shravani Mela)",
    "idealDays": "2 Days",
    "category": "sacred",
    "mood": [
      "Spiritual",
      "Devotion",
      "Culture"
    ],
    "basePriceINR": 2100,
    "rating": 4.8,
    "reviewsCount": 420,
    "heroImage": "images/deoghar.jpg",
    "tags": [
      "Baidyanath Jyotirlinga",
      "Trikut Ropeway",
      "Naulakha Temple",
      "Tapovan"
    ],
    "highlights": [
      "Baba Baidyanath Temple complex darshan with 21 surrounding shrines",
      "Trikut Pahar cable car ropeway and Mayurakshi river view",
      "Naulakha Mandir grand 146-ft Radha-Krishna marble temple"
    ],
    "nearestHubs": {
      "airport": "Deoghar Airport DGH (8 km)",
      "railway": "Jasidih Junction JSME (7 km)",
      "road": "NH-114A"
    },
    "transitSummary": "Direct flights from Delhi, Kolkata, Patna to Deoghar Airport (DGH). Jasidih Junction is on the main Delhi-Howrah rail corridor.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Holy Darshan & Evening Maha Aarti",
        "desc": "Arrive at holy Deoghar (Baba Baidyanath). Check in to your heritage guest house, take a purifying holy dip, and attend the grand evening temple darshan and divine Aarti ceremony."
      },
      {
        "day": 2,
        "title": "Ancient Shrines, Corridors & Sacred Circumambulation",
        "desc": "Early morning Mangala Aarti followed by visiting Baba Baidyanath Temple complex darshan with 21 surrounding shrines. Partake in sacred temple Mahaprasadam."
      },
      {
        "day": 3,
        "title": "Spiritual Excursions & Cultural Heritage",
        "desc": "Visit nearby holy hermitages, river ghats, and Trikut Pahar cable car ropeway and Mayurakshi river view. Shop for authentic prasad and spiritual souvenirs before departure."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "dharamshala",
    "name": "Dharamshala & McLeodganj",
    "state": "Himachal Pradesh",
    "region": "north",
    "tagline": "Little Lhasa, Dalai Lama Residence & Triund Trek",
    "description": "Set against the dramatic snow peaks of the Dhauladhar range. Home to His Holiness Dalai Lama, vibrant Tibetan monasteries, cedar forest trails, and the breathtaking Triund ridge trek.",
    "elevation": "1,457 m (4,780 ft)",
    "bestTime": "Mar to Jun & Sep to Nov",
    "idealDays": "3 - 4 Days",
    "category": "mountains",
    "mood": [
      "Spiritual",
      "High Treks",
      "Peace"
    ],
    "basePriceINR": 2800,
    "rating": 4.8,
    "reviewsCount": 310,
    "heroImage": "images/dharamshala.jpg",
    "tags": [
      "Dalai Lama Temple",
      "Triund Trek",
      "Bhagsu Falls",
      "Dhauladhar"
    ],
    "highlights": [
      "Tsuglagkhang Complex & Namgyal Monastery spiritual mediation",
      "Famous 9 km Triund Ridge Trek under Dhauladhar mountain face",
      "Bhagsunag ancient Shiva temple & cascading waterfalls",
      "St. John in the Wilderness neo-gothic stone church in deodar woods"
    ],
    "nearestHubs": {
      "airport": "Gaggal-Dharamshala Airport DHM (14 km)",
      "railway": "Pathankot Cantt (85 km)",
      "road": "NH-503 via Kangra"
    },
    "transitSummary": "Direct daily flights to Gaggal Airport (DHM) from Delhi. Overnight luxury Volvo buses from Delhi (470 km) and Chandigarh (240 km).",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Dharamshala & McLeodganj",
        "desc": "Arrive at Dharamshala & McLeodganj, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (1,457 m (4,780 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Tsuglagkhang Complex & Namgyal Monastery spiritual mediation. Experience local mountain culture, hiking trails, and Famous 9 km Triund Ridge Trek under Dhauladhar mountain face."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Bhagsunag ancient Shiva temple & cascading waterfalls. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit St. John in the Wilderness neo-gothic stone church in deodar woods. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 1,457 m (4,780 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "dzukou-valley",
    "name": "Dzukou Valley & Kohima",
    "state": "Nagaland",
    "region": "northeast",
    "tagline": "Valley of Celestial Flowers & Naga Hornbill Festival",
    "description": "A surreal rolling valley of emerald green undulating hills and dwarf bamboo on the Nagaland-Manipur border. Base in Kohima to experience the world-famous Hornbill Tribal Festival in December.",
    "elevation": "2,452 m (8,045 ft)",
    "bestTime": "Jun to Sep (Flowers) & Dec (Hornbill Festival)",
    "idealDays": "3 - 4 Days",
    "category": "mountains",
    "mood": [
      "High Treks",
      "Festivals",
      "Offbeat"
    ],
    "basePriceINR": 3100,
    "rating": 4.9,
    "reviewsCount": 260,
    "heroImage": "images/dzukou-valley.jpg",
    "tags": [
      "Dzukou Valley",
      "Hornbill Festival",
      "Kisama Heritage",
      "Khonoma Village"
    ],
    "highlights": [
      "Trek across rolling green geometric hills and natural streams of Dzukou",
      "Hornbill Festival celebration of 17 Naga tribes in Kisama Village (Dec 1-10)",
      "Khonoma \u2014 India's first official Green Village"
    ],
    "nearestHubs": {
      "airport": "Dimapur Airport DMU (74 km)",
      "railway": "Dimapur (DMV)",
      "road": "Dimapur-Kohima 4-Lane Highway (NH-29)"
    },
    "transitSummary": "74 km (2.5 hours) from Dimapur Airport/Station to Kohima, followed by trek from Viswema or Jakhama village.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Dzukou Valley & Kohima",
        "desc": "Arrive at Dzukou Valley & Kohima, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (2,452 m (8,045 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Trek across rolling green geometric hills and natural streams of Dzukou. Experience local mountain culture, hiking trails, and Hornbill Festival celebration of 17 Naga tribes in Kisama Village (Dec 1-10)."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Khonoma \u2014 India's first official Green Village. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 2,452 m (8,045 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "gandikota",
    "name": "Gandikota & Lepakshi",
    "state": "Andhra Pradesh",
    "region": "south",
    "tagline": "The Grand Canyon of India & Hanging Pillar Temple",
    "description": "A stunning 300-ft red granite gorge carved through the Erramala hills by the Pennar River, paired with the 16th-century Lepakshi Temple famous for its monolithic Nandi and hanging pillar.",
    "elevation": "325 m (1,066 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "2 Days",
    "category": "heritage",
    "mood": [
      "Offbeat",
      "Photography",
      "Adventure"
    ],
    "basePriceINR": 2400,
    "rating": 4.8,
    "reviewsCount": 260,
    "heroImage": "images/gandikota.jpg",
    "tags": [
      "Grand Canyon of India",
      "Pennar Gorge",
      "Gandikota Fort",
      "Lepakshi"
    ],
    "highlights": [
      "Sunrise viewpoint over the 300-ft deep Pennar River Gorge",
      "12th-century Gandikota Fort, Ranganatha Temple and Jama Masjid ruins",
      "Lepakshi hanging pillar mystery and giant monolithic Nandi"
    ],
    "nearestHubs": {
      "airport": "Kadapa (75 km) / Bengaluru (280 km)",
      "railway": "Jammalamadugu (15 km) / Muddanuru",
      "road": "NH-67 via Kadapa"
    },
    "transitSummary": "280 km (5.5 hours) drive from Bengaluru Airport via NH-44 and Kadapa highway.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Gandikota & Lepakshi",
        "desc": "Arrive in Gandikota & Lepakshi. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Sunrise viewpoint over the 300-ft deep Pennar River Gorge. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit 12th-century Gandikota Fort, Ranganatha Temple and Jama Masjid ruins. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "gangtok",
    "name": "Gangtok & Nathu La",
    "state": "Sikkim",
    "region": "northeast",
    "tagline": "Himalayan Silk Route, Monasteries & Tsomgo Lake",
    "description": "The pristine, clean mountain capital of Sikkim. Visit Rumtek Monastery, ride the ropeway over misty valleys, and drive to the Indo-China border at Nathu La Pass and glacial Tsomgo Lake.",
    "elevation": "1,650 m (5,410 ft)",
    "bestTime": "Mar to Jun & Sep to Dec",
    "idealDays": "4 - 5 Days",
    "category": "mountains",
    "mood": [
      "High Treks",
      "Heritage",
      "Snow"
    ],
    "basePriceINR": 3500,
    "rating": 4.8,
    "reviewsCount": 420,
    "heroImage": "images/gangtok.jpg",
    "tags": [
      "Nathu La Pass",
      "Tsomgo Lake",
      "Rumtek Monastery",
      "MG Marg"
    ],
    "highlights": [
      "High-altitude glacial Tsomgo (Changu) Lake (12,310 ft) with yaks",
      "Nathu La Pass (14,140 ft) on the historic Old Silk Route to Tibet",
      "Rumtek 16th-century Tibetan monastery and gold stupas",
      "Vehicle-free, floral cobblestone MG Marg promenade"
    ],
    "nearestHubs": {
      "airport": "Pakyong Airport PYG (30 km) / Bagdogra IXB (120 km)",
      "railway": "New Jalpaiguri NJP (120 km)",
      "road": "NH-10 along Teesta River"
    },
    "transitSummary": "120 km (4.5 hours) from Bagdogra Airport (IXB) along scenic Teesta River. Inner Line Permit (ILP) easily arranged.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Gangtok & Nathu La",
        "desc": "Arrive at Gangtok & Nathu La, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (1,650 m (5,410 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit High-altitude glacial Tsomgo (Changu) Lake (12,310 ft) with yaks. Experience local mountain culture, hiking trails, and Nathu La Pass (14,140 ft) on the historic Old Silk Route to Tibet."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Rumtek 16th-century Tibetan monastery and gold stupas. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Vehicle-free, floral cobblestone MG Marg promenade. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 1,650 m (5,410 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "gir-national-park",
    "name": "Gir National Park",
    "state": "Gujarat",
    "region": "west",
    "tagline": "The Only Natural Abode of the Asiatic Lion in the World",
    "description": "The sole sanctuary of the magnificent Asiatic Lion (Panthera leo leo) on planet Earth. Take open-top jungle safaris across teak forests, riverbeds, and Maldhari tribal settlements.",
    "elevation": "157 m (515 ft)",
    "bestTime": "Dec to Apr",
    "idealDays": "2 - 3 Days",
    "category": "heritage",
    "mood": [
      "Wildlife",
      "Adventure",
      "Nature"
    ],
    "basePriceINR": 3500,
    "rating": 4.8,
    "reviewsCount": 360,
    "heroImage": "images/gir-national-park.jpg",
    "tags": [
      "Asiatic Lions",
      "Lion Safari",
      "Devalia Safari Park",
      "Teak Forests"
    ],
    "highlights": [
      "Spot pure Asiatic Lions, leopards, and marsh crocodiles on open Jeep Safaris",
      "Devalia Gir Interpretation Zone closed-habitat safari",
      "Maldhari indigenous herdsmen village interaction"
    ],
    "nearestHubs": {
      "airport": "Keshod Airport IXK (45 km) / Rajkot (160 km)",
      "railway": "Junagadh JND (55 km) / Veraval",
      "road": "Junagadh-Sasan Gir Road"
    },
    "transitSummary": "55 km from Junagadh Railway Station or 160 km from Rajkot International Airport.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Gir National Park",
        "desc": "Arrive in Gir National Park. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Spot pure Asiatic Lions, leopards, and marsh crocodiles on open Jeep Safaris. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Devalia Gir Interpretation Zone closed-habitat safari. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "goa",
    "name": "Goa Beaches",
    "state": "Goa",
    "region": "west",
    "tagline": "Sun, Sand, Portuguese Heritage & Vibrant Coastlines",
    "description": "India's beach capital! Experience water sports, beach shacks, night markets in North Goa, and tranquil white sand beaches, spice plantations, and churches in South Goa.",
    "elevation": "Sea Level",
    "bestTime": "Oct to May",
    "idealDays": "4 - 6 Days",
    "category": "beaches",
    "mood": [
      "Beaches",
      "Nightlife",
      "Heritage"
    ],
    "basePriceINR": 3500,
    "rating": 4.8,
    "reviewsCount": 680,
    "heroImage": "images/goa.jpg",
    "tags": [
      "Palolem Beach",
      "Baga Beach",
      "Old Goa Churches",
      "Dudhsagar Falls"
    ],
    "highlights": [
      "UNESCO Heritage Basilica of Bom Jesus and Se Cathedral in Old Goa",
      "Crescent white sands and dolphin spotting at Palolem Beach",
      "Water sports (jet-ski, parasailing, scuba) at Calangute and Baga",
      "Fontainhas vibrant Latin Quarter walking heritage tour"
    ],
    "nearestHubs": {
      "airport": "Manohar Int Airport MOPA (GOX) / Dabolim (GOI)",
      "railway": "Madgaon (MAO) / Thivim (THVM)",
      "road": "NH-66 / Mumbai-Goa Highway"
    },
    "transitSummary": "Fly directly into Mopa (GOX) or Dabolim (GOI). Vande Bharat / Tejas Express trains connect Mumbai to Madgaon in ~7.5 hours.",
    "itinerary": [
      {
        "day": 1,
        "title": "Coastal Arrival & Sunset Promenade",
        "desc": "Arrive in Goa Beaches, check in to your seaside resort or cottage. Head down to the golden sands for an evening ocean breeze, beach shack delicacies, and a fiery sunset over the water."
      },
      {
        "day": 2,
        "title": "Water Sports, Island Trips & Marine Adventures",
        "desc": "Morning session for UNESCO Heritage Basilica of Bom Jesus and Se Cathedral in Old Goa. Savor freshly caught coastal seafood and relax at secluded palm-fringed coves."
      },
      {
        "day": 3,
        "title": "Heritage Forts, Backwaters & Beach Cafes",
        "desc": "Explore Crescent white sands and dolphin spotting at Palolem Beach. Spend the evening enjoying live acoustic music and seaside cafes."
      }
    ],
    "packing": [
      "Breathable linen & quick-dry cotton clothing",
      "High-grade reef-safe sunscreen (SPF 50+) & aloe vera gel",
      "Polarized sunglasses & wide-brim sun hat",
      "Waterproof phone pouch & dry bag for boat rides",
      "Comfortable flip-flops and water shoes",
      "Mosquito repellent spray & hydration electrolytes",
      "Light swimwear and quick-dry microfiber towel"
    ],
    "tips": [
      "Book ferry and boat transfers in advance, especially during peak season.",
      "Respect coastal flag warnings \u2014 red flags indicate dangerous riptides and no swimming.",
      "Renting a self-drive scooter/scooty is the most economical way to explore coastal towns.",
      "Early mornings (6:30 - 8:30 AM) offer the calmest sea conditions for water sports and dolphin spotting."
    ]
  },
  {
    "id": "gokarna",
    "name": "Gokarna Beaches",
    "state": "Karnataka",
    "region": "south",
    "tagline": "Sacred Mahabaleshwar Temple & Om Beach Trek",
    "description": "A serene coastal town famous for the sacred Atmalinga Mahabaleshwar Temple and the stunning cliffside 5-beach trek connecting Kudle Beach, Om Beach, Half Moon Beach, and Paradise Beach.",
    "elevation": "Sea Level",
    "bestTime": "Oct to Apr",
    "idealDays": "2 - 3 Days",
    "category": "beaches",
    "mood": [
      "Beaches",
      "Spiritual",
      "Offbeat"
    ],
    "basePriceINR": 2400,
    "rating": 4.8,
    "reviewsCount": 350,
    "heroImage": "images/gokarna.jpg",
    "tags": [
      "Om Beach",
      "Mahabaleshwar Temple",
      "Kudle Beach",
      "Beach Trek"
    ],
    "highlights": [
      "Clifftop hike connecting 5 secluded beaches",
      "Naturally Om-shaped coastline of Om Beach with water sports",
      "4th-century Mahabaleshwar Temple with holy Atmalinga"
    ],
    "nearestHubs": {
      "airport": "Goa Dabolim Airport (140 km) / Hubli (150 km)",
      "railway": "Gokarna Road (GOK) / Ankola",
      "road": "NH-66 Coastal Highway"
    },
    "transitSummary": "140 km from Goa Airport or direct train to Gokarna Road Station (GOK).",
    "itinerary": [
      {
        "day": 1,
        "title": "Coastal Arrival & Sunset Promenade",
        "desc": "Arrive in Gokarna Beaches, check in to your seaside resort or cottage. Head down to the golden sands for an evening ocean breeze, beach shack delicacies, and a fiery sunset over the water."
      },
      {
        "day": 2,
        "title": "Water Sports, Island Trips & Marine Adventures",
        "desc": "Morning session for Clifftop hike connecting 5 secluded beaches. Savor freshly caught coastal seafood and relax at secluded palm-fringed coves."
      },
      {
        "day": 3,
        "title": "Heritage Forts, Backwaters & Beach Cafes",
        "desc": "Explore Naturally Om-shaped coastline of Om Beach with water sports. Spend the evening enjoying live acoustic music and seaside cafes."
      }
    ],
    "packing": [
      "Breathable linen & quick-dry cotton clothing",
      "High-grade reef-safe sunscreen (SPF 50+) & aloe vera gel",
      "Polarized sunglasses & wide-brim sun hat",
      "Waterproof phone pouch & dry bag for boat rides",
      "Comfortable flip-flops and water shoes",
      "Mosquito repellent spray & hydration electrolytes",
      "Light swimwear and quick-dry microfiber towel"
    ],
    "tips": [
      "Book ferry and boat transfers in advance, especially during peak season.",
      "Respect coastal flag warnings \u2014 red flags indicate dangerous riptides and no swimming.",
      "Renting a self-drive scooter/scooty is the most economical way to explore coastal towns.",
      "Early mornings (6:30 - 8:30 AM) offer the calmest sea conditions for water sports and dolphin spotting."
    ]
  },
  {
    "id": "gulmarg",
    "name": "Gulmarg",
    "state": "Jammu & Kashmir",
    "region": "north",
    "tagline": "World's Highest Ski Resort & Snow Gondola",
    "description": "Asia's premier winter sports wonderland. Ride the two-phase Gulmarg Gondola up to Mount Apharwat (13,780 ft) for world-class powder skiing and snowboarding.",
    "elevation": "2,650 m (8,690 ft)",
    "bestTime": "Dec to Mar (Snow) / Apr to Jun (Meadows)",
    "idealDays": "2 - 3 Days",
    "category": "mountains",
    "mood": [
      "Snow",
      "Adventure",
      "High Treks"
    ],
    "basePriceINR": 4200,
    "rating": 4.9,
    "reviewsCount": 350,
    "heroImage": "images/gulmarg.jpg",
    "tags": [
      "Gulmarg Gondola",
      "Apharwat Peak",
      "Skiing",
      "Snowboard"
    ],
    "highlights": [
      "Gulmarg Gondola Phase 2 ascent to Apharwat peak (4,200 m)",
      "Deep powder skiing with certified heli-skiing instructors",
      "St. Mary Historic Church amidst snow pine forests",
      "Frozen Alpather high-altitude lake trek"
    ],
    "nearestHubs": {
      "airport": "Srinagar Airport SXR (56 km)",
      "railway": "Jammu Tawi (315 km)",
      "road": "Srinagar-Tangmarg-Gulmarg Road"
    },
    "transitSummary": "Fly to Srinagar Airport (SXR), then 1.5-hour taxi drive via Tangmarg. Snow tire chains required on Tangmarg-Gulmarg stretch during winter.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Gulmarg",
        "desc": "Arrive at Gulmarg, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (2,650 m (8,690 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Gulmarg Gondola Phase 2 ascent to Apharwat peak (4,200 m). Experience local mountain culture, hiking trails, and Deep powder skiing with certified heli-skiing instructors."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to St. Mary Historic Church amidst snow pine forests. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Frozen Alpather high-altitude lake trek. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 2,650 m (8,690 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "hampi",
    "name": "Hampi",
    "state": "Karnataka",
    "region": "south",
    "tagline": "UNESCO Bouldered Ruins of Vijayanagara Empire",
    "description": "An open-air museum of giant golden granite boulders, ancient palace ruins, monolithic statues, and the famous stone chariot of the 14th-century Vijayanagara Empire on Tungabhadra river.",
    "elevation": "467 m (1,532 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "3 - 4 Days",
    "category": "heritage",
    "mood": [
      "Heritage",
      "Photography",
      "Offbeat"
    ],
    "basePriceINR": 2700,
    "rating": 4.9,
    "reviewsCount": 430,
    "heroImage": "images/hampi.jpg",
    "tags": [
      "Stone Chariot",
      "Virupaksha Temple",
      "Matanga Hill",
      "Coracle Ride"
    ],
    "highlights": [
      "Iconic monolithic Stone Chariot & musical pillars at Vijaya Vittala Temple",
      "Sunrise panorama over boulder ocean from Matanga Hill",
      "Active 7th-century Virupaksha Temple with sacred elephant Lakshmi",
      "Traditional round bamboo coracle boat ride on Tungabhadra River"
    ],
    "nearestHubs": {
      "airport": "Jindal Vijayanagar Airport VDY (35 km) / Hubli (140 km)",
      "railway": "Hosapete HPT (13 km)",
      "road": "NH-50 / NH-67"
    },
    "transitSummary": "13 km from Hosapete Railway Station (HPT). Direct overnight Hampi Express trains from Bengaluru and Goa.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Hampi",
        "desc": "Arrive in Hampi. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Iconic monolithic Stone Chariot & musical pillars at Vijaya Vittala Temple. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Sunrise panorama over boulder ocean from Matanga Hill. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "hanle",
    "name": "Hanle & Dark Sky Reserve",
    "state": "Ladakh",
    "region": "north",
    "tagline": "India's First Official International Dark Sky Sanctuary",
    "description": "Perched at 14,760 ft near the Changthang Wildlife Sanctuary. Home to the Indian Astronomical Observatory and world-renowned for zero light pollution Milky Way astrophotography.",
    "elevation": "4,500 m (14,760 ft)",
    "bestTime": "May to Oct",
    "idealDays": "2 - 3 Days",
    "category": "mountains",
    "mood": [
      "Offbeat",
      "Stargazing",
      "Adventure"
    ],
    "basePriceINR": 3800,
    "rating": 4.9,
    "reviewsCount": 180,
    "heroImage": "images/hanle.jpg",
    "tags": [
      "Dark Sky Sanctuary",
      "Milky Way",
      "Observatory",
      "Changthang"
    ],
    "highlights": [
      "Milky Way and deep cosmos stargazing with telescope",
      "17th-century Hanle Gompa on clifftop",
      "Spotting Tibetan wild ass (Kiang) and black-necked cranes"
    ],
    "nearestHubs": {
      "airport": "Leh Airport (250 km)",
      "railway": "Jammu Tawi",
      "road": "Leh-Chumathang-Nyoma-Hanle Road"
    },
    "transitSummary": "250 km (6-7 hours) drive from Leh via Nyoma. Inner Line Permit (ILP) required.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Hanle & Dark Sky Reserve",
        "desc": "Arrive at Hanle & Dark Sky Reserve, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (4,500 m (14,760 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Milky Way and deep cosmos stargazing with telescope. Experience local mountain culture, hiking trails, and 17th-century Hanle Gompa on clifftop."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Spotting Tibetan wild ass (Kiang) and black-necked cranes. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 4,500 m (14,760 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "haridwar",
    "name": "Haridwar",
    "state": "Uttarakhand",
    "region": "north",
    "tagline": "Gateway to the Gods & Har Ki Pauri Ganga Aarti",
    "description": "One of Hinduism's seven holy cities where River Ganga enters the Indo-Gangetic plains. Witness thousands gather at Har Ki Pauri for the grand evening Ganga Aarti with floating oil diyas.",
    "elevation": "314 m (1,030 ft)",
    "bestTime": "Year-round / Sep-Apr",
    "idealDays": "2 Days",
    "category": "sacred",
    "mood": [
      "Spiritual",
      "Heritage",
      "Culture"
    ],
    "basePriceINR": 2100,
    "rating": 4.8,
    "reviewsCount": 520,
    "heroImage": "images/haridwar.jpg",
    "tags": [
      "Har Ki Pauri",
      "Ganga Aarti",
      "Mansa Devi",
      "Chandi Devi"
    ],
    "highlights": [
      "Spectacular evening Ganga Aarti at Har Ki Pauri with floating marigold lamps",
      "Mansa Devi and Chandi Devi clifftop ropeway darshan",
      "Holy dip at Brahmakund during sunrise"
    ],
    "nearestHubs": {
      "airport": "Dehradun Airport (38 km)",
      "railway": "Haridwar Junction (HW)",
      "road": "NH-58 Delhi-Haridwar Expressway"
    },
    "transitSummary": "Direct Shatabdi and Vande Bharat trains from Delhi (4 hours). 4-hour drive on Delhi-Meerut-Haridwar Expressway.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Holy Darshan & Evening Maha Aarti",
        "desc": "Arrive at holy Haridwar. Check in to your heritage guest house, take a purifying holy dip, and attend the grand evening temple darshan and divine Aarti ceremony."
      },
      {
        "day": 2,
        "title": "Ancient Shrines, Corridors & Sacred Circumambulation",
        "desc": "Early morning Mangala Aarti followed by visiting Spectacular evening Ganga Aarti at Har Ki Pauri with floating marigold lamps. Partake in sacred temple Mahaprasadam."
      },
      {
        "day": 3,
        "title": "Spiritual Excursions & Cultural Heritage",
        "desc": "Visit nearby holy hermitages, river ghats, and Mansa Devi and Chandi Devi clifftop ropeway darshan. Shop for authentic prasad and spiritual souvenirs before departure."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "hyderabad",
    "name": "Hyderabad Heritage",
    "state": "Telangana",
    "region": "south",
    "tagline": "City of Pearls, Charminar, Golconda & Royal Biryani",
    "description": "The 400-year-old capital of the Nizams. Marvel at the acoustic wonders of Golconda Fort, the 4-towered Charminar, opulent Chowmahalla Palace, and world-renowned authentic Hyderabadi Dum Biryani.",
    "elevation": "542 m (1,778 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "2 - 3 Days",
    "category": "heritage",
    "mood": [
      "Heritage",
      "Food",
      "Shopping"
    ],
    "basePriceINR": 2600,
    "rating": 4.8,
    "reviewsCount": 540,
    "heroImage": "images/hyderabad.jpg",
    "tags": [
      "Charminar",
      "Golconda Fort",
      "Hyderabadi Biryani",
      "Ramoji Film City"
    ],
    "highlights": [
      "Climb the 1591 AD Charminar in the heart of Laad Bazaar bangles market",
      "Acoustic clapping hand echo and Sound & Light show at Golconda Fort",
      "Chowmahalla Palace royal Nizam vintage car collection",
      "Ramoji Film City - world's largest integrated film studio"
    ],
    "nearestHubs": {
      "airport": "Rajiv Gandhi International Airport HYD",
      "railway": "Secunderabad (SC) / Hyderabad Deccan (HYB)",
      "road": "ORR Expressways Hub"
    },
    "transitSummary": "Major international airport (HYD) with direct flights from all global hubs and metros.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Hyderabad Heritage",
        "desc": "Arrive in Hyderabad Heritage. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Climb the 1591 AD Charminar in the heart of Laad Bazaar bangles market. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Acoustic clapping hand echo and Sound & Light show at Golconda Fort. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "jaipur",
    "name": "Jaipur Pink City",
    "state": "Rajasthan",
    "region": "west",
    "tagline": "The Royal Pink City of Fortresses & Palaces",
    "description": "UNESCO World Heritage capital of Rajasthan. Marvel at the intricate honeycomb windows of Hawa Mahal, the mirror palace of Amer Fort, and grand City Palace.",
    "elevation": "431 m (1,414 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "3 - 4 Days",
    "category": "heritage",
    "mood": [
      "Heritage",
      "Shopping",
      "Food"
    ],
    "basePriceINR": 2800,
    "rating": 4.8,
    "reviewsCount": 590,
    "heroImage": "images/jaipur.jpg",
    "tags": [
      "Hawa Mahal",
      "Amer Fort",
      "City Palace",
      "Nahargarh"
    ],
    "highlights": [
      "Amer Fort grand ramparts, Sheesh Mahal and elephant ride",
      "Hawa Mahal (Palace of Winds) with 953 jharokhas",
      "Nahargarh Fort panoramic sunset view over the Pink City",
      "World's largest stone sundial at Jantar Mantar observatory"
    ],
    "nearestHubs": {
      "airport": "Jaipur International Airport JAI",
      "railway": "Jaipur Junction JP",
      "road": "Delhi-Jaipur Expressway (NE-4)"
    },
    "transitSummary": "Direct flights to Jaipur (JAI) from all major Indian metros. 3.5-hour drive from Delhi via Delhi-Mumbai Expressway or Vande Bharat Express.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Jaipur Pink City",
        "desc": "Arrive in Jaipur Pink City. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Amer Fort grand ramparts, Sheesh Mahal and elephant ride. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Hawa Mahal (Palace of Winds) with 953 jharokhas. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "jaisalmer",
    "name": "Jaisalmer Desert Dunes",
    "state": "Rajasthan",
    "region": "west",
    "tagline": "The Golden Fort & Thar Desert Sand Dunes",
    "description": "Rising from the heart of the Great Thar Desert. Live inside the world's only living golden sandstone fort, ride camels over Sam Sand Dunes, and camp under starry desert skies.",
    "elevation": "225 m (738 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "3 - 4 Days",
    "category": "heritage",
    "mood": [
      "Adventure",
      "Heritage",
      "Desert"
    ],
    "basePriceINR": 3200,
    "rating": 4.8,
    "reviewsCount": 380,
    "heroImage": "images/jaisalmer.jpg",
    "tags": [
      "Golden Fort",
      "Sam Sand Dunes",
      "Camel Safari",
      "Patwon Ki Haveli"
    ],
    "highlights": [
      "Explore 12th-century Sonar Qila (Golden Fort) where 4,000 residents live",
      "Sunset camel safari and dune bashing at Sam Sand Dunes",
      "Rajasthani folk music, Kalbeliya dance and glamping under desert stars",
      "Intricately carved yellow sandstone Patwon ki Haveli"
    ],
    "nearestHubs": {
      "airport": "Jaisalmer Airport JSA (seasonal) / Jodhpur (280 km)",
      "railway": "Jaisalmer JSA",
      "road": "NH-11 / NH-68"
    },
    "transitSummary": "Direct seasonal flights to Jaisalmer (JSA) or 4.5-hour smooth drive from Jodhpur Airport (JDH). Direct overnight trains from Delhi/Jaipur.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Jaisalmer Desert Dunes",
        "desc": "Arrive in Jaisalmer Desert Dunes. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Explore 12th-century Sonar Qila (Golden Fort) where 4,000 residents live. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Sunset camel safari and dune bashing at Sam Sand Dunes. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "jibhi",
    "name": "Jibhi & Tirthan Valley",
    "state": "Himachal Pradesh",
    "region": "north",
    "tagline": "Hidden Cedar Hamlet, Trout Streams & Jalori Pass",
    "description": "An offbeat fairytale hamlet with Victorian-style wooden cottages, freshwater trout streams, pine forests, Serolsar Lake, and the thrilling 10,800 ft Jalori Pass.",
    "elevation": "1,600 m (5,250 ft)",
    "bestTime": "Year-round",
    "idealDays": "3 - 4 Days",
    "category": "mountains",
    "mood": [
      "Offbeat",
      "Peace",
      "High Treks"
    ],
    "basePriceINR": 2500,
    "rating": 4.9,
    "reviewsCount": 210,
    "heroImage": "images/jibhi.jpg",
    "tags": [
      "Jalori Pass",
      "Serolsar Lake",
      "Tirthan River",
      "Chehni Kothi"
    ],
    "highlights": [
      "Jalori Pass (10,800 ft) trek to sacred Serolsar Lake",
      "Chehni Kothi 1,500-year-old multi-story wooden earthquake-proof tower",
      "Crystal clear Tirthan river angling and Great Himalayan National Park entry"
    ],
    "nearestHubs": {
      "airport": "Bhuntar-Kullu (50 km)",
      "railway": "Chandigarh (250 km)",
      "road": "Aut Tunnel-Jibhi Road"
    },
    "transitSummary": "Take Volvo bus towards Manali, get down at Aut Tunnel, and take a local cab or bus 30 km up to Jibhi.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Jibhi & Tirthan Valley",
        "desc": "Arrive at Jibhi & Tirthan Valley, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (1,600 m (5,250 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Jalori Pass (10,800 ft) trek to sacred Serolsar Lake. Experience local mountain culture, hiking trails, and Chehni Kothi 1,500-year-old multi-story wooden earthquake-proof tower."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Crystal clear Tirthan river angling and Great Himalayan National Park entry. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 1,600 m (5,250 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "jim-corbett",
    "name": "Jim Corbett National Park",
    "state": "Uttarakhand",
    "region": "north",
    "tagline": "India's Oldest National Park & Royal Bengal Tigers",
    "description": "Nestled in the Shivalik foothills on Ramganga River. World-famous for open-top 4x4 jeep safaris in Dhikala, Bijrani, and Jhirna zones to spot Royal Bengal tigers, wild elephants, and gharials.",
    "elevation": "385 m (1,260 ft)",
    "bestTime": "Nov to Jun",
    "idealDays": "2 - 3 Days",
    "category": "mountains",
    "mood": [
      "Wildlife",
      "Adventure",
      "Family"
    ],
    "basePriceINR": 3400,
    "rating": 4.8,
    "reviewsCount": 450,
    "heroImage": "images/jim-corbett.jpg",
    "tags": [
      "Tiger Safari",
      "Dhikala Zone",
      "Ramganga River",
      "Jungle Resort"
    ],
    "highlights": [
      "Overnight stay inside the core Dhikala Forest Rest House",
      "Open-top 4x4 Jeep Safari spotting wild elephants and tigers",
      "Corbett Waterfalls and suspension bridge walk"
    ],
    "nearestHubs": {
      "airport": "Pantnagar (80 km) / Delhi (240 km)",
      "railway": "Ramnagar RMR (12 km)",
      "road": "Delhi-Moradabad-Ramnagar Highway"
    },
    "transitSummary": "12 km from Ramnagar Railway Station. 5-hour drive from Delhi via NH-09.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Jim Corbett National Park",
        "desc": "Arrive at Jim Corbett National Park, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (385 m (1,260 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Overnight stay inside the core Dhikala Forest Rest House. Experience local mountain culture, hiking trails, and Open-top 4x4 Jeep Safari spotting wild elephants and tigers."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Corbett Waterfalls and suspension bridge walk. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 385 m (1,260 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "jodhpur",
    "name": "Jodhpur Blue City",
    "state": "Rajasthan",
    "region": "west",
    "tagline": "The Sun City, Mehrangarh Fort & Indigo Alleys",
    "description": "Guarded by the colossal clifftop Mehrangarh Fort. Wander through medieval blue-painted streets in the old city, explore Umaid Bhawan Palace, and savor rich pyaaz kachoris.",
    "elevation": "231 m (758 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "2 - 3 Days",
    "category": "heritage",
    "mood": [
      "Heritage",
      "Photography",
      "Food"
    ],
    "basePriceINR": 2800,
    "rating": 4.8,
    "reviewsCount": 340,
    "heroImage": "images/jodhpur.jpg",
    "tags": [
      "Mehrangarh Fort",
      "Blue City",
      "Umaid Bhawan",
      "Jaswant Thada"
    ],
    "highlights": [
      "Mehrangarh Fort ramparts with royal palanquins and howdahs",
      "Zipline (Flying Fox) across fort moats and desert lakes",
      "Walk the indigo-blue lanes around Clock Tower & Sardar Market",
      "Jaswant Thada white marble royal cenotaph"
    ],
    "nearestHubs": {
      "airport": "Jodhpur Airport JDH",
      "railway": "Jodhpur Junction JU",
      "road": "NH-62 / Amritsar-Jamnagar Expressway"
    },
    "transitSummary": "Direct flights from Delhi, Mumbai, Bengaluru, and Ahmedabad to Jodhpur (JDH). Direct Vande Bharat trains.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Jodhpur Blue City",
        "desc": "Arrive in Jodhpur Blue City. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Mehrangarh Fort ramparts with royal palanquins and howdahs. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Zipline (Flying Fox) across fort moats and desert lakes. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "kaas-plateau",
    "name": "Kaas Plateau (Satara)",
    "state": "Maharashtra",
    "region": "west",
    "tagline": "UNESCO Valley of Flowers of the Western Ghats",
    "description": "A volcanic laterite plateau near Satara that transforms into a vibrant carpet of 850 species of wild flowering plants, orchids, and insectivorous drosera during post-monsoon.",
    "elevation": "1,200 m (3,937 ft)",
    "bestTime": "Aug to Oct (Peak Blooms)",
    "idealDays": "1 - 2 Days",
    "category": "mountains",
    "mood": [
      "Nature",
      "Photography",
      "Monsoon"
    ],
    "basePriceINR": 2400,
    "rating": 4.8,
    "reviewsCount": 330,
    "heroImage": "images/kaas-plateau.jpg",
    "tags": [
      "Valley of Flowers",
      "UNESCO Plateau",
      "Kaas Lake",
      "Thoseghar Falls"
    ],
    "highlights": [
      "Walking along floral carpets of blue Utricularia, purple Pogostemon, and yellow Smithia",
      "Kaas Lake scenic boating and dense evergreen forests",
      "Thoseghar 1,000-ft cascading monsoon waterfalls nearby"
    ],
    "nearestHubs": {
      "airport": "Pune Airport PNQ (140 km)",
      "railway": "Satara (STR) (25 km)",
      "road": "Satara-Kaas Road"
    },
    "transitSummary": "25 km uphill from Satara or 140 km (3 hours) from Pune Airport via NH-48.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Kaas Plateau (Satara)",
        "desc": "Arrive at Kaas Plateau (Satara), check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (1,200 m (3,937 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Walking along floral carpets of blue Utricularia, purple Pogostemon, and yellow Smithia. Experience local mountain culture, hiking trails, and Kaas Lake scenic boating and dense evergreen forests."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Thoseghar 1,000-ft cascading monsoon waterfalls nearby. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 1,200 m (3,937 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "kanyakumari",
    "name": "Kanyakumari",
    "state": "Tamil Nadu",
    "region": "south",
    "tagline": "Southernmost Tip of Mainland India & 3 Oceans",
    "description": "Where the Arabian Sea, Indian Ocean, and Bay of Bengal converge. Watch simultaneous sunrise and sunset from the same beach, and take a ferry to the Vivekananda Rock Memorial.",
    "elevation": "Sea Level",
    "bestTime": "Oct to Mar",
    "idealDays": "2 Days",
    "category": "beaches",
    "mood": [
      "Ocean",
      "Spiritual",
      "Heritage"
    ],
    "basePriceINR": 2600,
    "rating": 4.7,
    "reviewsCount": 350,
    "heroImage": "images/kanyakumari.jpg",
    "tags": [
      "Vivekananda Rock",
      "Thiruvalluvar Statue",
      "Triveni Sangam",
      "Sunset"
    ],
    "highlights": [
      "Ferry ride to Vivekananda Rock Memorial and 133-ft Thiruvalluvar Statue",
      "Triveni Sangam three-ocean water confluence bath",
      "Witness simultaneous sunrise and sunset over the ocean horizon",
      "3,000-year-old Bhagavathy Amman Temple"
    ],
    "nearestHubs": {
      "airport": "Trivandrum Airport TRV (90 km)",
      "railway": "Kanyakumari CAPE",
      "road": "NH-44 (Southern Terminus)"
    },
    "transitSummary": "90 km (2.5 hours) from Trivandrum Airport (TRV). Direct express trains from all major Indian cities.",
    "itinerary": [
      {
        "day": 1,
        "title": "Coastal Arrival & Sunset Promenade",
        "desc": "Arrive in Kanyakumari, check in to your seaside resort or cottage. Head down to the golden sands for an evening ocean breeze, beach shack delicacies, and a fiery sunset over the water."
      },
      {
        "day": 2,
        "title": "Water Sports, Island Trips & Marine Adventures",
        "desc": "Morning session for Ferry ride to Vivekananda Rock Memorial and 133-ft Thiruvalluvar Statue. Savor freshly caught coastal seafood and relax at secluded palm-fringed coves."
      },
      {
        "day": 3,
        "title": "Heritage Forts, Backwaters & Beach Cafes",
        "desc": "Explore Triveni Sangam three-ocean water confluence bath. Spend the evening enjoying live acoustic music and seaside cafes."
      }
    ],
    "packing": [
      "Breathable linen & quick-dry cotton clothing",
      "High-grade reef-safe sunscreen (SPF 50+) & aloe vera gel",
      "Polarized sunglasses & wide-brim sun hat",
      "Waterproof phone pouch & dry bag for boat rides",
      "Comfortable flip-flops and water shoes",
      "Mosquito repellent spray & hydration electrolytes",
      "Light swimwear and quick-dry microfiber towel"
    ],
    "tips": [
      "Book ferry and boat transfers in advance, especially during peak season.",
      "Respect coastal flag warnings \u2014 red flags indicate dangerous riptides and no swimming.",
      "Renting a self-drive scooter/scooty is the most economical way to explore coastal towns.",
      "Early mornings (6:30 - 8:30 AM) offer the calmest sea conditions for water sports and dolphin spotting."
    ]
  },
  {
    "id": "kasol",
    "name": "Kasol & Parvati Valley",
    "state": "Himachal Pradesh",
    "region": "north",
    "tagline": "Mini Israel of India, Pinewood Trails & Kheerganga",
    "description": "A tranquil riverside village in Parvati Valley famous for Israeli cafes, roaring river trails, Tosh village, and the legendary trek to natural hot sulfur springs at Kheerganga.",
    "elevation": "1,580 m (5,180 ft)",
    "bestTime": "Mar to Jun & Sep to Nov",
    "idealDays": "3 - 5 Days",
    "category": "mountains",
    "mood": [
      "Adventure",
      "High Treks",
      "Offbeat"
    ],
    "basePriceINR": 2400,
    "rating": 4.8,
    "reviewsCount": 390,
    "heroImage": "images/kasol.jpg",
    "tags": [
      "Parvati River",
      "Kheerganga Trek",
      "Tosh Village",
      "Israeli Cafes"
    ],
    "highlights": [
      "12 km trek to Kheerganga natural high-altitude hot water springs",
      "Charming wooden houses of Tosh, Chalal and Grahan villages",
      "Relaxing alongside the turquoise roaring Parvati River",
      "Manikaran Sahib sacred Gurudwara hot springs"
    ],
    "nearestHubs": {
      "airport": "Bhuntar-Kullu Airport (31 km)",
      "railway": "Chandigarh (270 km)",
      "road": "Chandigarh-Mandi-Bhuntar-Kasol"
    },
    "transitSummary": "31 km from Bhuntar Airport / Kullu on Parvati Valley road. Daily Volvo buses from Delhi/Chandigarh drop at Bhuntar.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Kasol & Parvati Valley",
        "desc": "Arrive at Kasol & Parvati Valley, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (1,580 m (5,180 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit 12 km trek to Kheerganga natural high-altitude hot water springs. Experience local mountain culture, hiking trails, and Charming wooden houses of Tosh, Chalal and Grahan villages."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Relaxing alongside the turquoise roaring Parvati River. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Manikaran Sahib sacred Gurudwara hot springs. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 1,580 m (5,180 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "kausani",
    "name": "Kausani & Ranikhet",
    "state": "Uttarakhand",
    "region": "north",
    "tagline": "Switzerland of India & 300 km Himalayan Panorama",
    "description": "Praised by Mahatma Gandhi as the Switzerland of India. Marvel at uninterrupted 300 km sunrise views of Trishul, Nanda Devi, and Panchachuli peaks over tea estates and pine forests.",
    "elevation": "1,890 m (6,200 ft)",
    "bestTime": "Mar to Jun & Sep to Nov",
    "idealDays": "2 - 3 Days",
    "category": "mountains",
    "mood": [
      "Peace",
      "Nature",
      "Romantic"
    ],
    "basePriceINR": 2500,
    "rating": 4.7,
    "reviewsCount": 240,
    "heroImage": "images/kausani.jpg",
    "tags": [
      "Nanda Devi Panorama",
      "Kausani Tea Estate",
      "Anasakti Ashram",
      "Ranikhet Golf"
    ],
    "highlights": [
      "Unobstructed 300-km Himalayan snow peak sunrise",
      "Anasakti Ashram where Mahatma Gandhi wrote Gita commentary",
      "9-hole high-altitude Ranikhet Golf Course"
    ],
    "nearestHubs": {
      "airport": "Pantnagar (170 km)",
      "railway": "Kathgodam (135 km)",
      "road": "Kathgodam-Almora-Kausani Road"
    },
    "transitSummary": "135 km (4.5 hours) from Kathgodam Railway Station via Almora.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Kausani & Ranikhet",
        "desc": "Arrive at Kausani & Ranikhet, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (1,890 m (6,200 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Unobstructed 300-km Himalayan snow peak sunrise. Experience local mountain culture, hiking trails, and Anasakti Ashram where Mahatma Gandhi wrote Gita commentary."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to 9-hole high-altitude Ranikhet Golf Course. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 1,890 m (6,200 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "kaziranga",
    "name": "Kaziranga National Park",
    "state": "Assam",
    "region": "northeast",
    "tagline": "Home of Two-Thirds of the World's Great One-Horned Rhinos",
    "description": "UNESCO World Heritage floodplains of the Brahmaputra River. Famous for early morning elephant safaris through tall elephant grass to see Greater One-Horned Rhinoceros, wild water buffaloes, and Royal Bengal tigers.",
    "elevation": "80 m (260 ft)",
    "bestTime": "Nov to Apr",
    "idealDays": "2 - 3 Days",
    "category": "heritage",
    "mood": [
      "Wildlife",
      "Safari",
      "Nature"
    ],
    "basePriceINR": 3400,
    "rating": 4.9,
    "reviewsCount": 430,
    "heroImage": "images/kaziranga.jpg",
    "tags": [
      "One Horned Rhino",
      "Elephant Safari",
      "Kohora Zone",
      "Brahmaputra"
    ],
    "highlights": [
      "Dawn elephant back safari getting within meters of wild one-horned rhinos",
      "Jeep safaris across Western Bagori and Central Kohora ranges",
      "Kaziranga National Orchid and Biodiversity Park"
    ],
    "nearestHubs": {
      "airport": "Jorhat Airport JRH (95 km) / Guwahati GAU (220 km)",
      "railway": "Furkating (75 km) / Guwahati",
      "road": "Asian Highway AH-1 (NH-715)"
    },
    "transitSummary": "220 km (4.5 hours) from Guwahati Airport via 4-lane Asian Highway.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Kaziranga National Park",
        "desc": "Arrive in Kaziranga National Park. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Dawn elephant back safari getting within meters of wild one-horned rhinos. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Jeep safaris across Western Bagori and Central Kohora ranges. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "kedarnath",
    "name": "Kedarnath Dham",
    "state": "Uttarakhand",
    "region": "north",
    "tagline": "The Holy 11th Jyotirlinga in Garhwal Himalayas",
    "description": "One of India's holiest Chota Char Dham pilgrimage shrines, dedicated to Lord Shiva and backed by snow-clad 6,940 m Mount Kedarnath peak near Mandakini river.",
    "elevation": "3,583 m (11,755 ft)",
    "bestTime": "May to Jun & Sep to Oct",
    "idealDays": "4 - 5 Days",
    "category": "sacred",
    "mood": [
      "Spiritual",
      "High Treks",
      "Glaciers"
    ],
    "basePriceINR": 3800,
    "rating": 4.9,
    "reviewsCount": 610,
    "heroImage": "images/kedarnath.jpg",
    "tags": [
      "11th Jyotirlinga",
      "Char Dham",
      "Mandakini River",
      "Gaurikund Trek"
    ],
    "highlights": [
      "16 km mountain trek from Gaurikund alongside rushing Mandakini River",
      "8th-century stone temple that miraculously survived 2013 flash floods",
      "Evening Maha Aarti under the towering Kedarnath snow face",
      "Bhairavnath Temple clifftop viewpoint overlooking the valley"
    ],
    "nearestHubs": {
      "airport": "Jolly Grant Dehradun DED (230 km)",
      "railway": "Rishikesh / Haridwar",
      "road": "NH-107 via Rudraprayag to Gaurikund"
    },
    "transitSummary": "Drive from Rishikesh/Haridwar to Sonprayag/Gaurikund (220 km), followed by a 16 km trek or heli-shuttle from Guptkashi/Phata/Sersi.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Kedarnath Dham",
        "desc": "Arrive at Kedarnath Dham, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (3,583 m (11,755 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit 16 km mountain trek from Gaurikund alongside rushing Mandakini River. Experience local mountain culture, hiking trails, and 8th-century stone temple that miraculously survived 2013 flash floods."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Evening Maha Aarti under the towering Kedarnath snow face. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Bhairavnath Temple clifftop viewpoint overlooking the valley. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "khajuraho",
    "name": "Khajuraho UNESCO Temples",
    "state": "Madhya Pradesh",
    "region": "central",
    "tagline": "Masterpieces of Medieval Chandela Sculpture & Erotica",
    "description": "UNESCO World Heritage complex of 25 sandstone temples built between 950 and 1050 AD. Celebrated for breathtaking architectural precision, celestial apsaras, and erotic bas-relief carvings.",
    "elevation": "283 m (928 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "2 - 3 Days",
    "category": "heritage",
    "mood": [
      "Heritage",
      "Art",
      "Architecture"
    ],
    "basePriceINR": 2900,
    "rating": 4.8,
    "reviewsCount": 380,
    "heroImage": "images/khajuraho.jpg",
    "tags": [
      "Kandariya Mahadev",
      "Western Group",
      "Chandela Dynasty",
      "Light and Sound"
    ],
    "highlights": [
      "Kandariya Mahadev Temple with over 800 detailed stone statues",
      "Evening Amitabh Bachchan-narrated Western Group Light & Sound show",
      "Raneh Falls Grand Canyon crystalline granite waterfalls nearby"
    ],
    "nearestHubs": {
      "airport": "Khajuraho Airport HJR",
      "railway": "Khajuraho KURJ",
      "road": "NH-39 via Jhansi"
    },
    "transitSummary": "Direct flights from Delhi and Varanasi to Khajuraho Airport (HJR). Direct Vande Bharat from Delhi.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Khajuraho UNESCO Temples",
        "desc": "Arrive in Khajuraho UNESCO Temples. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Kandariya Mahadev Temple with over 800 detailed stone statues. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Evening Amitabh Bachchan-narrated Western Group Light & Sound show. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "kinnaur",
    "name": "Kinnaur & Kalpa",
    "state": "Himachal Pradesh",
    "region": "north",
    "tagline": "Land of Gods, Apple Orchards & Kinner Kailash",
    "description": "Spectacular rugged gorges carved by the Sutlej River. Admire the sacred 6,050 m Kinner Kailash Shivaling peak, apple orchards of Kalpa, and wooden houses of Sangla and Chitkul (last Indian village).",
    "elevation": "2,960 m (9,710 ft)",
    "bestTime": "Apr to Oct",
    "idealDays": "4 - 5 Days",
    "category": "mountains",
    "mood": [
      "High Treks",
      "Offbeat",
      "Culture"
    ],
    "basePriceINR": 3100,
    "rating": 4.9,
    "reviewsCount": 230,
    "heroImage": "images/kinnaur.jpg",
    "tags": [
      "Kinner Kailash",
      "Chitkul Last Village",
      "Sangla Valley",
      "Kalpa"
    ],
    "highlights": [
      "Sunrise view of color-changing Kinner Kailash peak from Kalpa",
      "Chitkul - India's last inhabited village on the Indo-Tibet border",
      "Kamru Fort 1,000-year-old wooden architecture in Sangla"
    ],
    "nearestHubs": {
      "airport": "Shimla Airport (240 km) / Chandigarh (330 km)",
      "railway": "Shimla",
      "road": "Hindustan-Tibet Road (NH-05)"
    },
    "transitSummary": "240 km from Shimla along the dramatic cliffside Hindustan-Tibet Highway (NH-05).",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Kinnaur & Kalpa",
        "desc": "Arrive at Kinnaur & Kalpa, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (2,960 m (9,710 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Sunrise view of color-changing Kinner Kailash peak from Kalpa. Experience local mountain culture, hiking trails, and Chitkul - India's last inhabited village on the Indo-Tibet border."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Kamru Fort 1,000-year-old wooden architecture in Sangla. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 2,960 m (9,710 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "kodaikanal",
    "name": "Kodaikanal",
    "state": "Tamil Nadu",
    "region": "south",
    "tagline": "Princess of Hill Stations & Star-Shaped Kodai Lake",
    "description": "Nestled in the Palani Hills at 7,000 ft. Famous for star-shaped Kodai Lake, Pillar Rocks mist viewpoints, Coaker's Walk, and the rare Kurinji flower that blooms once every 12 years.",
    "elevation": "2,133 m (7,000 ft)",
    "bestTime": "Oct to Jun",
    "idealDays": "2 - 3 Days",
    "category": "mountains",
    "mood": [
      "Romantic",
      "Nature",
      "Peace"
    ],
    "basePriceINR": 2900,
    "rating": 4.8,
    "reviewsCount": 410,
    "heroImage": "images/kodaikanal.jpg",
    "tags": [
      "Kodai Lake",
      "Pillar Rocks",
      "Coakers Walk",
      "Silver Cascade"
    ],
    "highlights": [
      "Rowing boats on star-shaped Kodai Lake surrounded by pines",
      "Coaker's Walk 1-km pedestrian path overlooking Dolphin's Nose and plains",
      "Pillar Rocks three giant 400-ft vertical granite pillars"
    ],
    "nearestHubs": {
      "airport": "Madurai Airport IXM (120 km) / Coimbatore (175 km)",
      "railway": "Kodai Road KQN (80 km)",
      "road": "Batlagundu-Kodaikanal Ghat Road"
    },
    "transitSummary": "80 km uphill drive from Kodai Road Railway Station or 120 km (3 hours) from Madurai Airport.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Kodaikanal",
        "desc": "Arrive at Kodaikanal, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (2,133 m (7,000 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Rowing boats on star-shaped Kodai Lake surrounded by pines. Experience local mountain culture, hiking trails, and Coaker's Walk 1-km pedestrian path overlooking Dolphin's Nose and plains."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Pillar Rocks three giant 400-ft vertical granite pillars. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 2,133 m (7,000 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "kumbhalgarh",
    "name": "Kumbhalgarh (Great Wall of India)",
    "state": "Rajasthan",
    "region": "west",
    "tagline": "World's 2nd Longest Continuous Wall (36 km)",
    "description": "A massive Mewar fortress built by Rana Kumbha atop the Aravalis. Features a 36-km fortified perimeter wall \u2014 second only to the Great Wall of China \u2014 with 360 ancient temples inside.",
    "elevation": "1,100 m (3,600 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "1 - 2 Days",
    "category": "heritage",
    "mood": [
      "Heritage",
      "Wonder",
      "History"
    ],
    "basePriceINR": 2800,
    "rating": 4.8,
    "reviewsCount": 350,
    "heroImage": "images/kumbhalgarh.jpg",
    "tags": [
      "Great Wall of India",
      "Badal Mahal",
      "UNESCO Fort",
      "Rana Kumbha"
    ],
    "highlights": [
      "Walking along the 36-km colossal rampart wall where 8 horses could ride abreast",
      "Badal Mahal (Palace of Clouds) top-floor view over Marwar desert and Mewar hills",
      "Evening Sound & Light show illuminating the entire mountain fortress"
    ],
    "nearestHubs": {
      "airport": "Udaipur Airport (100 km)",
      "railway": "Falna (80 km) / Udaipur",
      "road": "Udaipur-Kumbhalgarh Road"
    },
    "transitSummary": "100 km (2.5 hours) scenic mountain drive from Udaipur.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Kumbhalgarh (Great Wall of India)",
        "desc": "Arrive in Kumbhalgarh (Great Wall of India). Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Walking along the 36-km colossal rampart wall where 8 horses could ride abreast. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Badal Mahal (Palace of Clouds) top-floor view over Marwar desert and Mewar hills. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "lachung-yumthang",
    "name": "Lachung & Yumthang Valley",
    "state": "Sikkim",
    "region": "northeast",
    "tagline": "Valley of Rhododendron Flowers & Zero Point Snow",
    "description": "North Sikkim's wonderland at 12,000 ft. Walk through 24 species of wild blooming rhododendrons in Yumthang, soak in natural hot springs, and reach Zero Point (Yumesamdong) at 15,300 ft.",
    "elevation": "3,600 m (11,800 ft)",
    "bestTime": "Mar to Jun (Flowers) / Dec to Mar (Snow)",
    "idealDays": "3 Days",
    "category": "mountains",
    "mood": [
      "Snow",
      "High Treks",
      "Nature"
    ],
    "basePriceINR": 3900,
    "rating": 4.9,
    "reviewsCount": 310,
    "heroImage": "images/lachung-yumthang.jpg",
    "tags": [
      "Yumthang Valley",
      "Zero Point",
      "Lachung Monastery",
      "Hot Springs"
    ],
    "highlights": [
      "Zero Point (15,300 ft) permanent snow playing ground",
      "Yumthang Valley spring rhododendron flower carpet",
      "Lachung traditional wooden village homestays"
    ],
    "nearestHubs": {
      "airport": "Bagdogra Airport (180 km)",
      "railway": "New Jalpaiguri (185 km)",
      "road": "Gangtok-Chungthang-Lachung Road"
    },
    "transitSummary": "Drive from Gangtok via Chungthang (6 hours). North Sikkim special permit required.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Lachung & Yumthang Valley",
        "desc": "Arrive at Lachung & Yumthang Valley, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (3,600 m (11,800 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Zero Point (15,300 ft) permanent snow playing ground. Experience local mountain culture, hiking trails, and Yumthang Valley spring rhododendron flower carpet."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Lachung traditional wooden village homestays. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 3,600 m (11,800 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "lakshadweep",
    "name": "Lakshadweep (Agatti & Bangaram)",
    "state": "Lakshadweep",
    "region": "islands",
    "tagline": "India's Turquoise Atoll Coral Lagoons & Snorkeling",
    "description": "A pristine archipelago of 36 coral atolls with crystal-clear turquoise lagoons in the Arabian Sea. Scuba dive with manta rays and sea turtles at Bangaram and Agatti Islands.",
    "elevation": "Sea Level",
    "bestTime": "Oct to May",
    "idealDays": "4 - 5 Days",
    "category": "beaches",
    "mood": [
      "Beaches",
      "Diving",
      "Luxury"
    ],
    "basePriceINR": 5500,
    "rating": 4.9,
    "reviewsCount": 280,
    "heroImage": "images/lakshadweep.jpg",
    "tags": [
      "Coral Atolls",
      "Bangaram Island",
      "Agatti Airport",
      "Scuba Diving"
    ],
    "highlights": [
      "Landing on Agatti airstrip surrounded by turquoise sea on both sides",
      "Speedboat transfer to uninhabited paradise Bangaram Island",
      "Snorkeling amidst live coral reefs, stingrays, and sea turtles"
    ],
    "nearestHubs": {
      "airport": "Agatti Airport AGX",
      "railway": "None",
      "road": "Direct Flight / Cruise Ship from Kochi"
    },
    "transitSummary": "Direct flights from Kochi (COK) to Agatti Island (AGX). Heritage permit processed online.",
    "itinerary": [
      {
        "day": 1,
        "title": "Coastal Arrival & Sunset Promenade",
        "desc": "Arrive in Lakshadweep (Agatti & Bangaram), check in to your seaside resort or cottage. Head down to the golden sands for an evening ocean breeze, beach shack delicacies, and a fiery sunset over the water."
      },
      {
        "day": 2,
        "title": "Water Sports, Island Trips & Marine Adventures",
        "desc": "Morning session for Landing on Agatti airstrip surrounded by turquoise sea on both sides. Savor freshly caught coastal seafood and relax at secluded palm-fringed coves."
      },
      {
        "day": 3,
        "title": "Heritage Forts, Backwaters & Beach Cafes",
        "desc": "Explore Speedboat transfer to uninhabited paradise Bangaram Island. Spend the evening enjoying live acoustic music and seaside cafes."
      }
    ],
    "packing": [
      "Breathable linen & quick-dry cotton clothing",
      "High-grade reef-safe sunscreen (SPF 50+) & aloe vera gel",
      "Polarized sunglasses & wide-brim sun hat",
      "Waterproof phone pouch & dry bag for boat rides",
      "Comfortable flip-flops and water shoes",
      "Mosquito repellent spray & hydration electrolytes",
      "Light swimwear and quick-dry microfiber towel"
    ],
    "tips": [
      "Book ferry and boat transfers in advance, especially during peak season.",
      "Respect coastal flag warnings \u2014 red flags indicate dangerous riptides and no swimming.",
      "Renting a self-drive scooter/scooty is the most economical way to explore coastal towns.",
      "Early mornings (6:30 - 8:30 AM) offer the calmest sea conditions for water sports and dolphin spotting."
    ]
  },
  {
    "id": "leh-ladakh",
    "name": "Leh Ladakh & Pangong",
    "state": "Ladakh",
    "region": "north",
    "tagline": "The Land of High Passes, Blue Lakes & Monasteries",
    "description": "A breathtaking high-altitude desert surrounded by the Karakoram and Great Himalayas. Famous for the crystal turquoise Pangong Tso lake, magnetic hill, sand dunes of Nubra Valley with double-humped camels, and ancient Buddhist monasteries.",
    "elevation": "3,500 m (11,500 ft)",
    "bestTime": "May to Sep",
    "idealDays": "6 - 8 Days",
    "category": "mountains",
    "mood": [
      "High Treks",
      "Adventure",
      "Photography"
    ],
    "basePriceINR": 4500,
    "rating": 4.9,
    "reviewsCount": 560,
    "heroImage": "images/leh-ladakh.jpg",
    "tags": [
      "Pangong Lake",
      "Nubra Valley",
      "Khardung La",
      "Monasteries"
    ],
    "highlights": [
      "Pangong Tso color-changing blue salt lake at 4,225 m",
      "Drive over Khardung La Pass (5,359 m) \u2014 one of the world's highest motorable roads",
      "Bactrian double-humped camel safari in white sand dunes of Hunder",
      "Clifftop Thiksey and Hemis ancient Buddhist monasteries"
    ],
    "nearestHubs": {
      "airport": "Kushok Bakula Rimpochee Airport Leh (IXL)",
      "railway": "Jammu Tawi (700 km)",
      "road": "Manali-Leh / Srinagar-Leh Highway"
    },
    "transitSummary": "Direct flights from Delhi, Mumbai, and Srinagar to Leh Airport (IXL). By road via Manali-Leh highway (open May to Oct) or Srinagar-Kargil-Leh highway.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Leh Ladakh & Pangong",
        "desc": "Arrive at Leh Ladakh & Pangong, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (3,500 m (11,500 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Pangong Tso color-changing blue salt lake at 4,225 m. Experience local mountain culture, hiking trails, and Drive over Khardung La Pass (5,359 m) \u2014 one of the world's highest motorable roads."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Bactrian double-humped camel safari in white sand dunes of Hunder. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Clifftop Thiksey and Hemis ancient Buddhist monasteries. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 3,500 m (11,500 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "loktak-lake",
    "name": "Loktak Lake & Keibul Lamjao",
    "state": "Manipur",
    "region": "northeast",
    "tagline": "World's Only Floating National Park & Phumdis",
    "description": "The largest freshwater lake in Northeast India, famous for 'Phumdis' (floating circular islands of soil and vegetation) and Keibul Lamjao \u2014 the world's only floating national park, home to the dancing Sangai deer.",
    "elevation": "768 m (2,520 ft)",
    "bestTime": "Oct to Apr",
    "idealDays": "2 - 3 Days",
    "category": "heritage",
    "mood": [
      "Wildlife",
      "Waterways",
      "Offbeat"
    ],
    "basePriceINR": 2700,
    "rating": 4.8,
    "reviewsCount": 190,
    "heroImage": "images/loktak-lake.jpg",
    "tags": [
      "Floating Islands",
      "Sangai Deer",
      "Sendra Island",
      "Phumdis"
    ],
    "highlights": [
      "Keibul Lamjao world's only floating national park boat safari",
      "Spotting the endangered Sangai (Dancing Deer of Manipur)",
      "Staying in floating homestays on Sendra Island"
    ],
    "nearestHubs": {
      "airport": "Imphal Bir Tikendrajit Airport IMF (45 km)",
      "railway": "Dimapur / Jiribam",
      "road": "Imphal-Moirang Highway"
    },
    "transitSummary": "45 km (1 hour) drive from Imphal Airport via Moirang.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Loktak Lake & Keibul Lamjao",
        "desc": "Arrive in Loktak Lake & Keibul Lamjao. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Keibul Lamjao world's only floating national park boat safari. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Spotting the endangered Sangai (Dancing Deer of Manipur). Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "lonavala",
    "name": "Lonavala & Khandala",
    "state": "Maharashtra",
    "region": "west",
    "tagline": "Jewel of Sahyadris, Monsoon Waterfalls & Forts",
    "description": "The quintessential Western Ghats monsoon getaway. Famous for mist-covered Sahyadri ridges, Tiger Point, Bhushi Dam waterfalls, and Karla Buddhist rock caves.",
    "elevation": "624 m (2,047 ft)",
    "bestTime": "Jul to Feb (Monsoon & Winter)",
    "idealDays": "2 - 3 Days",
    "category": "mountains",
    "mood": [
      "Monsoon",
      "Nature",
      "Family"
    ],
    "basePriceINR": 2600,
    "rating": 4.6,
    "reviewsCount": 360,
    "heroImage": "images/lonavala.jpg",
    "tags": [
      "Tiger Point",
      "Bhushi Dam",
      "Karla Caves",
      "Lohagad Fort"
    ],
    "highlights": [
      "Tiger Point & Lion Point clifftop valley views",
      "Lohagad Fort trek with Vinchu Kata scorpion tail ridge",
      "2nd century BC Buddhist Karla & Bhaja rock-cut caves",
      "Tasting iconic hot Lonavala chikki and fudge"
    ],
    "nearestHubs": {
      "airport": "Pune Airport PNQ (65 km) / Mumbai (85 km)",
      "railway": "Lonavala LNL",
      "road": "Mumbai-Pune Expressway"
    },
    "transitSummary": "Located right on the 6-lane Mumbai-Pune Expressway \u2014 1.5 hours from Pune and 2 hours from Mumbai.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Lonavala & Khandala",
        "desc": "Arrive at Lonavala & Khandala, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (624 m (2,047 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Tiger Point & Lion Point clifftop valley views. Experience local mountain culture, hiking trails, and Lohagad Fort trek with Vinchu Kata scorpion tail ridge."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to 2nd century BC Buddhist Karla & Bhaja rock-cut caves. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Tasting iconic hot Lonavala chikki and fudge. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 624 m (2,047 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "lucknow",
    "name": "Lucknow Nawabi Heritage",
    "state": "Uttar Pradesh",
    "region": "north",
    "tagline": "City of Nawabs, Bara Imambara & Galouti Kebabs",
    "description": "The refined cultural capital of Awadh. Experience the gravity-defying architecture of Bara Imambara with its Bhool Bhulaiya labyrinth, Rumi Darwaza, Chikankari embroidery, and legendary Awadhi cuisine.",
    "elevation": "123 m (404 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "2 - 3 Days",
    "category": "heritage",
    "mood": [
      "Heritage",
      "Food",
      "Culture"
    ],
    "basePriceINR": 2400,
    "rating": 4.8,
    "reviewsCount": 480,
    "heroImage": "images/lucknow.jpg",
    "tags": [
      "Bara Imambara",
      "Bhool Bhulaiya",
      "Rumi Darwaza",
      "Tunday Kababi"
    ],
    "highlights": [
      "Bara Imambara - world's largest arched hall built without pillars or beams",
      "Bhool Bhulaiya intricate 489-doorway maze corridor walk",
      "Tasting melt-in-mouth Galouti Kebabs at Tunday Kababi in Aminabad"
    ],
    "nearestHubs": {
      "airport": "Chaudhary Charan Singh International Airport LKO",
      "railway": "Lucknow Charbagh LKO / LJN",
      "road": "Agra-Lucknow / Purvanchal Expressway"
    },
    "transitSummary": "Direct domestic & international flights to Lucknow (LKO). 3.5 hours from Delhi via Vande Bharat / Tejas Express.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Lucknow Nawabi Heritage",
        "desc": "Arrive in Lucknow Nawabi Heritage. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Bara Imambara - world's largest arched hall built without pillars or beams. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Bhool Bhulaiya intricate 489-doorway maze corridor walk. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "madurai",
    "name": "Madurai (Meenakshi Amman)",
    "state": "Tamil Nadu",
    "region": "south",
    "tagline": "Athens of the East & 14 Towers of Meenakshi Temple",
    "description": "One of the oldest continuously inhabited cities in the world. Dominated by the 14 soaring gopurams of the monumental Meenakshi Amman Temple and the Thirumalai Nayakkar Palace.",
    "elevation": "101 m (331 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "2 Days",
    "category": "sacred",
    "mood": [
      "Spiritual",
      "Heritage",
      "Architecture"
    ],
    "basePriceINR": 2400,
    "rating": 4.9,
    "reviewsCount": 510,
    "heroImage": "images/madurai.jpg",
    "tags": [
      "Meenakshi Temple",
      "1000 Pillar Hall",
      "Thirumalai Palace",
      "Jigarthanda"
    ],
    "highlights": [
      "14 towering gopurams decorated with thousands of colorful mythological statues",
      "Hall of Thousand Pillars with musical stone pillars",
      "Tasting authentic Madurai Jigarthanda and Kari Dosa"
    ],
    "nearestHubs": {
      "airport": "Madurai International Airport IXM",
      "railway": "Madurai Junction MDU",
      "road": "NH-44 / NH-85"
    },
    "transitSummary": "Direct domestic and international flights to Madurai (IXM). Direct Vande Bharat trains from Chennai (6 hours).",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Holy Darshan & Evening Maha Aarti",
        "desc": "Arrive at holy Madurai (Meenakshi Amman). Check in to your heritage guest house, take a purifying holy dip, and attend the grand evening temple darshan and divine Aarti ceremony."
      },
      {
        "day": 2,
        "title": "Ancient Shrines, Corridors & Sacred Circumambulation",
        "desc": "Early morning Mangala Aarti followed by visiting 14 towering gopurams decorated with thousands of colorful mythological statues. Partake in sacred temple Mahaprasadam."
      },
      {
        "day": 3,
        "title": "Spiritual Excursions & Cultural Heritage",
        "desc": "Visit nearby holy hermitages, river ghats, and Hall of Thousand Pillars with musical stone pillars. Shop for authentic prasad and spiritual souvenirs before departure."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "mahabaleshwar",
    "name": "Mahabaleshwar & Panchgani",
    "state": "Maharashtra",
    "region": "west",
    "tagline": "Strawberry Capital, Venna Lake & Sahyadri Points",
    "description": "Perched on the high Sahyadri plateau. Famous for lush strawberry farms, Arthur Seat valley view, boat rides on Venna Lake, and Table Land plateau in Panchgani.",
    "elevation": "1,353 m (4,439 ft)",
    "bestTime": "Oct to Jun",
    "idealDays": "3 - 4 Days",
    "category": "mountains",
    "mood": [
      "Romantic",
      "Nature",
      "Family"
    ],
    "basePriceINR": 3000,
    "rating": 4.7,
    "reviewsCount": 310,
    "heroImage": "images/mahabaleshwar.jpg",
    "tags": [
      "Strawberry Farms",
      "Arthur Seat",
      "Venna Lake",
      "Pratapgad Fort"
    ],
    "highlights": [
      "Fresh strawberry picking & strawberry cream at Mapro Garden",
      "Arthur Seat & Wilson Point (Sunrise Point) viewpoints",
      "Historic Pratapgad Fort battle site of Chhatrapati Shivaji Maharaj",
      "Boating on tranquil Venna Lake"
    ],
    "nearestHubs": {
      "airport": "Pune Airport (120 km)",
      "railway": "Wathar (60 km) / Pune",
      "road": "NH-48 via Wai / Shirwal"
    },
    "transitSummary": "120 km (3 hours) from Pune Airport via NH-48 and Pasarni Ghat.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Mahabaleshwar & Panchgani",
        "desc": "Arrive at Mahabaleshwar & Panchgani, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (1,353 m (4,439 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Fresh strawberry picking & strawberry cream at Mapro Garden. Experience local mountain culture, hiking trails, and Arthur Seat & Wilson Point (Sunrise Point) viewpoints."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Historic Pratapgad Fort battle site of Chhatrapati Shivaji Maharaj. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Boating on tranquil Venna Lake. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 1,353 m (4,439 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "majuli",
    "name": "Majuli River Island",
    "state": "Assam",
    "region": "northeast",
    "tagline": "World's Largest River Island & Neo-Vaishnavite Satras",
    "description": "A mystical island on the mighty Brahmaputra River. Cultural center of Assamese Vaishnavism with 500-year-old Satra monasteries, traditional mask-making in Samaguri, and Mishing tribal villages.",
    "elevation": "84 m (276 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "2 - 3 Days",
    "category": "heritage",
    "mood": [
      "Culture",
      "Offbeat",
      "Waterways"
    ],
    "basePriceINR": 2300,
    "rating": 4.8,
    "reviewsCount": 210,
    "heroImage": "images/majuli.jpg",
    "tags": [
      "River Island",
      "Satras",
      "Mask Making",
      "Brahmaputra Ferry"
    ],
    "highlights": [
      "Traditional bamboo mask-making demonstration at Natun Samaguri Satra",
      "Kamalabari and Dakhinpat ancient spiritual dance monasteries",
      "Cycling through Mishing tribal stilt villages during sunset"
    ],
    "nearestHubs": {
      "airport": "Jorhat Airport JRH (20 km to Ghat)",
      "railway": "Jorhat Town (JTTN)",
      "road": "Ferry from Nimati Ghat (Jorhat)"
    },
    "transitSummary": "1-hour government ferry ride across the Brahmaputra River from Nimati Ghat (Jorhat).",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Majuli River Island",
        "desc": "Arrive in Majuli River Island. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Traditional bamboo mask-making demonstration at Natun Samaguri Satra. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Kamalabari and Dakhinpat ancient spiritual dance monasteries. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "manali",
    "name": "Manali",
    "state": "Himachal Pradesh",
    "region": "north",
    "tagline": "Snow Peaks, Pine Forests & Atal Tunnel Gateway",
    "description": "India's favorite mountain retreat nestled in Kullu valley. Enjoy acoustic music cafes in Old Manali, skiing in Solang, and drive through Atal Tunnel into snowy Lahaul.",
    "elevation": "2,050 m (6,725 ft)",
    "bestTime": "Oct to Jun",
    "idealDays": "4 - 5 Days",
    "category": "mountains",
    "mood": [
      "Snow",
      "Adventure",
      "High Treks"
    ],
    "basePriceINR": 3200,
    "rating": 4.8,
    "reviewsCount": 428,
    "heroImage": "images/manali.jpg",
    "tags": [
      "Snow Valleys",
      "Atal Tunnel",
      "Solang Valley",
      "Old Manali"
    ],
    "highlights": [
      "Drive through 9.02 km Atal Tunnel into snow-covered Sissu valley",
      "Solang Valley paragliding, ATV rides and snow tubing",
      "Vashisht natural geothermal hot water sulphur springs",
      "Old Manali vibrant riverside live music cafes"
    ],
    "nearestHubs": {
      "airport": "Kullu-Bhuntar Airport KUU (50 km)",
      "railway": "Chandigarh (310 km)",
      "road": "Kiratpur-Manali 4-Lane Expressway"
    },
    "transitSummary": "Direct luxury AC Volvo buses from Delhi/Chandigarh via new 4-lane Kiratpur expressway (cuts drive time to ~8 hrs). Flights to Bhuntar (KUU).",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Manali",
        "desc": "Arrive at Manali, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (2,050 m (6,725 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Drive through 9.02 km Atal Tunnel into snow-covered Sissu valley. Experience local mountain culture, hiking trails, and Solang Valley paragliding, ATV rides and snow tubing."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Vashisht natural geothermal hot water sulphur springs. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Old Manali vibrant riverside live music cafes. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 2,050 m (6,725 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "matheran",
    "name": "Matheran Hill Station",
    "state": "Maharashtra",
    "region": "west",
    "tagline": "Asia's Only Automobile-Free Eco Hill Station",
    "description": "A pollution-free forested red-soil plateau where no vehicles are allowed. Travel by historic Neral-Matheran Toy Train or horseback amidst 38 lookout points over the Western Ghats.",
    "elevation": "800 m (2,625 ft)",
    "bestTime": "Oct to May",
    "idealDays": "2 Days",
    "category": "mountains",
    "mood": [
      "Offbeat",
      "Nature",
      "Peace"
    ],
    "basePriceINR": 2400,
    "rating": 4.7,
    "reviewsCount": 280,
    "heroImage": "images/matheran.jpg",
    "tags": [
      "Toy Train",
      "Automobile-Free",
      "Panorama Point",
      "Charlotte Lake"
    ],
    "highlights": [
      "Heritage narrow-gauge toy train zig-zagging through deodar hills",
      "Louisa Point and Panorama Point 360-degree valley sunsets",
      "Charlotte Lake pristine drinking water reservoir"
    ],
    "nearestHubs": {
      "airport": "Mumbai Airport BOM (90 km)",
      "railway": "Neral Junction (NRL)",
      "road": "Mumbai-Pune Highway via Dasturi Naka"
    },
    "transitSummary": "Local trains from Mumbai/Pune stop at Neral Junction, then toy train or shared taxi to Dasturi Naka.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Matheran Hill Station",
        "desc": "Arrive at Matheran Hill Station, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (800 m (2,625 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Heritage narrow-gauge toy train zig-zagging through deodar hills. Experience local mountain culture, hiking trails, and Louisa Point and Panorama Point 360-degree valley sunsets."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Charlotte Lake pristine drinking water reservoir. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 800 m (2,625 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "mathura-vrindavan",
    "name": "Mathura & Vrindavan",
    "state": "Uttar Pradesh",
    "region": "north",
    "tagline": "Shri Krishna Janmabhoomi & Banke Bihari Temple",
    "description": "The sacred Braj Bhoomi where Lord Krishna was born and spent his divine childhood. Experience the mystical Banke Bihari Mandir, Prem Mandir's light show, ISKCON, and Nidhivan.",
    "elevation": "174 m (571 ft)",
    "bestTime": "Oct to Mar (Janmashtami & Holi)",
    "idealDays": "2 Days",
    "category": "sacred",
    "mood": [
      "Spiritual",
      "Devotion",
      "Festivals"
    ],
    "basePriceINR": 2100,
    "rating": 4.9,
    "reviewsCount": 590,
    "heroImage": "images/mathura-vrindavan.jpg",
    "tags": [
      "Banke Bihari",
      "Krishna Janmabhoomi",
      "Prem Mandir",
      "Nidhivan"
    ],
    "highlights": [
      "Shri Krishna Janmabhoomi prison cell temple darshan",
      "Banke Bihari Mandir ecstatic darshan with curtain reveal",
      "Prem Mandir white Italian marble carvings and illuminated water fountains"
    ],
    "nearestHubs": {
      "airport": "Agra Airport (60 km) / Delhi (150 km)",
      "railway": "Mathura Junction MTJ",
      "road": "Yamuna Expressway / NH-19"
    },
    "transitSummary": "150 km (2.5 hours) from Delhi via Yamuna Expressway. Direct trains stop at Mathura Junction.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Holy Darshan & Evening Maha Aarti",
        "desc": "Arrive at holy Mathura & Vrindavan. Check in to your heritage guest house, take a purifying holy dip, and attend the grand evening temple darshan and divine Aarti ceremony."
      },
      {
        "day": 2,
        "title": "Ancient Shrines, Corridors & Sacred Circumambulation",
        "desc": "Early morning Mangala Aarti followed by visiting Shri Krishna Janmabhoomi prison cell temple darshan. Partake in sacred temple Mahaprasadam."
      },
      {
        "day": 3,
        "title": "Spiritual Excursions & Cultural Heritage",
        "desc": "Visit nearby holy hermitages, river ghats, and Banke Bihari Mandir ecstatic darshan with curtain reveal. Shop for authentic prasad and spiritual souvenirs before departure."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "mount-abu",
    "name": "Mount Abu",
    "state": "Rajasthan",
    "region": "west",
    "tagline": "Rajasthan's Only Hill Station & Dilwara Marble Temples",
    "description": "Perched at 4,000 ft in the Aravali range. Celebrated for the intricate white marble carvings of Dilwara Jain Temples, sunset boat rides on Nakki Lake, and Guru Shikhar peak.",
    "elevation": "1,220 m (4,003 ft)",
    "bestTime": "Year-round / Oct-Apr",
    "idealDays": "2 - 3 Days",
    "category": "mountains",
    "mood": [
      "Romantic",
      "Heritage",
      "Nature"
    ],
    "basePriceINR": 2700,
    "rating": 4.6,
    "reviewsCount": 290,
    "heroImage": "images/mount-abu.jpg",
    "tags": [
      "Dilwara Temples",
      "Nakki Lake",
      "Guru Shikhar",
      "Sunset Point"
    ],
    "highlights": [
      "11th-century Dilwara Jain temples with astonishing marble filigree",
      "Pedal boating on sacred Nakki Lake with Toad Rock",
      "Highest point in Aravali Range at Guru Shikhar (5,650 ft)"
    ],
    "nearestHubs": {
      "airport": "Udaipur Airport (175 km) / Ahmedabad (220 km)",
      "railway": "Abu Road ABR (28 km)",
      "road": "Abu Road Ghat Highway"
    },
    "transitSummary": "28 km uphill drive from Abu Road Railway Station (1 hour). 3.5 hours from Udaipur.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Mount Abu",
        "desc": "Arrive at Mount Abu, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (1,220 m (4,003 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit 11th-century Dilwara Jain temples with astonishing marble filigree. Experience local mountain culture, hiking trails, and Pedal boating on sacred Nakki Lake with Toad Rock."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Highest point in Aravali Range at Guru Shikhar (5,650 ft). Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 1,220 m (4,003 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "munnar",
    "name": "Munnar Tea Hills",
    "state": "Kerala",
    "region": "south",
    "tagline": "Emerald Tea Plantations, Mist & Nilgiri Tahr",
    "description": "Sprawling rolling hills blanketed in velvety green tea estates at the confluence of three mountain streams. Home to Anamudi \u2014 South India's highest peak \u2014 and the endangered Nilgiri Tahr.",
    "elevation": "1,600 m (5,250 ft)",
    "bestTime": "Sep to May",
    "idealDays": "3 - 4 Days",
    "category": "mountains",
    "mood": [
      "Nature",
      "Romantic",
      "Tea Hills"
    ],
    "basePriceINR": 3200,
    "rating": 4.9,
    "reviewsCount": 490,
    "heroImage": "images/munnar.jpg",
    "tags": [
      "Tea Estates",
      "Eravikulam",
      "Anamudi Peak",
      "Mattupetty Dam"
    ],
    "highlights": [
      "Spot endangered mountain goats (Nilgiri Tahr) in Eravikulam National Park",
      "Tata Tea Museum plucking and processing heritage experience",
      "Speedboating on Mattupetty Lake with mountain echoes",
      "Top Station clifftop clouds view looking into Tamil Nadu valley"
    ],
    "nearestHubs": {
      "airport": "Cochin International Airport COK (110 km)",
      "railway": "Aluva (110 km) / Ernakulam (130 km)",
      "road": "NH-85 Kochi-Dhanushkodi Highway"
    },
    "transitSummary": "110 km scenic drive from Kochi Airport (COK) through Cheeyappara and Valara waterfalls (3.5 hours).",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Munnar Tea Hills",
        "desc": "Arrive at Munnar Tea Hills, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (1,600 m (5,250 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Spot endangered mountain goats (Nilgiri Tahr) in Eravikulam National Park. Experience local mountain culture, hiking trails, and Tata Tea Museum plucking and processing heritage experience."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Speedboating on Mattupetty Lake with mountain echoes. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Top Station clifftop clouds view looking into Tamil Nadu valley. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 1,600 m (5,250 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "mussoorie",
    "name": "Mussoorie & Dhanaulti",
    "state": "Uttarakhand",
    "region": "north",
    "tagline": "Queen of the Hills, Kempty Falls & George Everest",
    "description": "Perched on a horseshoe ridge overlooking the Doon Valley, Mussoorie offers colonial heritage, Kempty Falls, the scenic Camel Back Road, and George Everest Peak.",
    "elevation": "2,005 m (6,578 ft)",
    "bestTime": "Mar to Jun & Sep to Nov",
    "idealDays": "3 - 4 Days",
    "category": "mountains",
    "mood": [
      "Romantic",
      "Heritage",
      "Family"
    ],
    "basePriceINR": 2900,
    "rating": 4.7,
    "reviewsCount": 370,
    "heroImage": "images/mussoorie.jpg",
    "tags": [
      "Mall Road",
      "Kempty Falls",
      "George Everest",
      "Gun Hill"
    ],
    "highlights": [
      "George Everest House and sunset ridge overlooking snow peaks",
      "Gun Hill ropeway with 360-degree views of Himalayan range",
      "Cascading Kempty Falls and Company Garden",
      "Dhanaulti eco-parks and tranquil deodar groves"
    ],
    "nearestHubs": {
      "airport": "Dehradun Jolly Grant DED (55 km)",
      "railway": "Dehradun DDN (34 km)",
      "road": "Dehradun-Mussoorie Highway"
    },
    "transitSummary": "34 km uphill drive from Dehradun Railway Station (1.2 hours) or 55 km from Dehradun Airport.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Mussoorie & Dhanaulti",
        "desc": "Arrive at Mussoorie & Dhanaulti, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (2,005 m (6,578 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit George Everest House and sunset ridge overlooking snow peaks. Experience local mountain culture, hiking trails, and Gun Hill ropeway with 360-degree views of Himalayan range."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Cascading Kempty Falls and Company Garden. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Dhanaulti eco-parks and tranquil deodar groves. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 2,005 m (6,578 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "mysore",
    "name": "Mysore (Mysuru Palace)",
    "state": "Karnataka",
    "region": "south",
    "tagline": "City of Palaces, Dasara Grandeur & Chamundi Hill",
    "description": "The royal heritage capital of the Wodeyars. Famous for the illuminated Mysore Palace with 100,000 bulbs, Chamundeshwari Temple atop Chamundi Hill, and fragrant sandalwood and silk.",
    "elevation": "770 m (2,525 ft)",
    "bestTime": "Oct to Mar (Dasara Season)",
    "idealDays": "2 Days",
    "category": "heritage",
    "mood": [
      "Heritage",
      "Royal",
      "Family"
    ],
    "basePriceINR": 2500,
    "rating": 4.8,
    "reviewsCount": 490,
    "heroImage": "images/mysore.jpg",
    "tags": [
      "Mysore Palace",
      "Chamundi Hill",
      "Brindavan Gardens",
      "Dasara"
    ],
    "highlights": [
      "Sunday 7 PM illumination of Mysore Palace with 100,000 golden bulbs",
      "Chamundeshwari Temple and monolithic Nandi Bull statue",
      "Brindavan Gardens musical dancing fountains"
    ],
    "nearestHubs": {
      "airport": "Mysuru Airport MYQ / Bengaluru (150 km)",
      "railway": "Mysuru Junction (MYS)",
      "road": "10-lane Bengaluru-Mysuru Expressway"
    },
    "transitSummary": "1.5-hour smooth drive from Bengaluru via the new 10-lane access-controlled expressway or 2-hour Vande Bharat Express.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Mysore (Mysuru Palace)",
        "desc": "Arrive in Mysore (Mysuru Palace). Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Sunday 7 PM illumination of Mysore Palace with 100,000 golden bulbs. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Chamundeshwari Temple and monolithic Nandi Bull statue. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "nainital",
    "name": "Nainital & Bhimtal",
    "state": "Uttarakhand",
    "region": "north",
    "tagline": "The City of Lakes, Naina Devi & Kumaon Hills",
    "description": "A picturesque lake resort set around eye-shaped Naini Lake, with panoramic views of snow peaks from Snow View Point, Naina Devi Temple, and nearby Bhimtal.",
    "elevation": "2,084 m (6,837 ft)",
    "bestTime": "Mar to Jun & Dec to Jan (Snow)",
    "idealDays": "3 - 4 Days",
    "category": "mountains",
    "mood": [
      "Family",
      "Romantic",
      "Nature"
    ],
    "basePriceINR": 2800,
    "rating": 4.7,
    "reviewsCount": 410,
    "heroImage": "images/nainital.jpg",
    "tags": [
      "Naini Lake",
      "Boating",
      "Mall Road",
      "Naina Peak"
    ],
    "highlights": [
      "Yachting and boating on emerald Naini Lake",
      "Naina Peak (8,579 ft) highest viewpoint in Nainital",
      "Scenic cable car ropeway to Snow View Point",
      "Bhimtal island aquarium and peaceful waters"
    ],
    "nearestHubs": {
      "airport": "Pantnagar PGH (65 km) / Delhi (300 km)",
      "railway": "Kathgodam KGM (34 km)",
      "road": "NH-109 via Haldwani"
    },
    "transitSummary": "34 km (1 hour) from Kathgodam Railway Station. Shatabdi / Ranikhet Express connects Delhi to Kathgodam.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Nainital & Bhimtal",
        "desc": "Arrive at Nainital & Bhimtal, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (2,084 m (6,837 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Yachting and boating on emerald Naini Lake. Experience local mountain culture, hiking trails, and Naina Peak (8,579 ft) highest viewpoint in Nainital."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Scenic cable car ropeway to Snow View Point. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Bhimtal island aquarium and peaceful waters. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 2,084 m (6,837 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "ooty",
    "name": "Ooty & Nilgiris",
    "state": "Tamil Nadu",
    "region": "south",
    "tagline": "Queen of Nilgiris, Heritage Toy Train & Tea Hills",
    "description": "South India's most famous hill station in the Blue Mountains. Ride the UNESCO Nilgiri Mountain Toy Train, climb Doddabetta Peak (2,637 m), and stroll through lush Botanical Gardens.",
    "elevation": "2,240 m (7,350 ft)",
    "bestTime": "Year-round",
    "idealDays": "3 - 4 Days",
    "category": "mountains",
    "mood": [
      "Romantic",
      "Family",
      "Heritage"
    ],
    "basePriceINR": 3000,
    "rating": 4.7,
    "reviewsCount": 480,
    "heroImage": "images/ooty.jpg",
    "tags": [
      "Nilgiri Toy Train",
      "Doddabetta Peak",
      "Botanical Garden",
      "Pykara Lake"
    ],
    "highlights": [
      "UNESCO steam rack-and-pinion Nilgiri Mountain Railway toy train ride",
      "Doddabetta Peak 360-degree telescope view across three states",
      "Speedboating on Pykara Lake and Pykara Waterfalls",
      "Government Botanical Garden with 650+ species of exotic flora"
    ],
    "nearestHubs": {
      "airport": "Coimbatore Airport CJB (88 km)",
      "railway": "Mettupalayam MTP (50 km) / Udhagamandalam UAM",
      "road": "Mettupalayam-Ooty Ghat Road (36 Hairpin Bends)"
    },
    "transitSummary": "88 km from Coimbatore Airport (CJB). Connected from Mettupalayam via the Nilgiri Mountain toy train or ghat road.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Ooty & Nilgiris",
        "desc": "Arrive at Ooty & Nilgiris, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (2,240 m (7,350 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit UNESCO steam rack-and-pinion Nilgiri Mountain Railway toy train ride. Experience local mountain culture, hiking trails, and Doddabetta Peak 360-degree telescope view across three states."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Speedboating on Pykara Lake and Pykara Waterfalls. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Government Botanical Garden with 650+ species of exotic flora. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 2,240 m (7,350 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "pachmarhi",
    "name": "Pachmarhi (Queen of Satpura)",
    "state": "Madhya Pradesh",
    "region": "central",
    "tagline": "Madhya Pradesh's Only Hill Station & Bee Falls",
    "description": "Nestled at 3,500 ft in the Satpura Tiger Reserve. Famous for cascading Bee Falls, Duchess Falls, Pandava Caves, Dhoopgarh (highest point in MP with 360-degree sunset), and sacred Jatashankar cave.",
    "elevation": "1,067 m (3,500 ft)",
    "bestTime": "Oct to Jun",
    "idealDays": "3 - 4 Days",
    "category": "mountains",
    "mood": [
      "Waterfalls",
      "Nature",
      "Peace"
    ],
    "basePriceINR": 2700,
    "rating": 4.7,
    "reviewsCount": 310,
    "heroImage": "images/pachmarhi.jpg",
    "tags": [
      "Bee Falls",
      "Dhoopgarh",
      "Pandava Caves",
      "Satpura Range"
    ],
    "highlights": [
      "Dhoopgarh (4,429 ft) highest peak in Satpura Range sunset view",
      "Natural cold shower plunge bath at cascading Bee Falls",
      "Jatashankar cave temple with naturally formed stalactites resembling Shiva's matted hair"
    ],
    "nearestHubs": {
      "airport": "Bhopal Airport (200 km) / Jabalpur (240 km)",
      "railway": "Pipariya Junction PPI (47 km)",
      "road": "Pipariya-Pachmarhi Ghat Road"
    },
    "transitSummary": "47 km (1.2 hours) from Pipariya Railway Station (PPI). 4.5 hours from Bhopal Airport.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Pachmarhi (Queen of Satpura)",
        "desc": "Arrive at Pachmarhi (Queen of Satpura), check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (1,067 m (3,500 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Dhoopgarh (4,429 ft) highest peak in Satpura Range sunset view. Experience local mountain culture, hiking trails, and Natural cold shower plunge bath at cascading Bee Falls."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Jatashankar cave temple with naturally formed stalactites resembling Shiva's matted hair. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 1,067 m (3,500 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "pahalgam",
    "name": "Pahalgam & Betaab Valley",
    "state": "Jammu & Kashmir",
    "region": "north",
    "tagline": "The Valley of Shepherds, Pine Groves & Lidder River",
    "description": "A pristine alpine paradise where the Lidder river rushes past pine forests. Base camp for the sacred Amarnath Yatra and gateway to scenic Betaab Valley, Aru Valley, and Baisaran meadow.",
    "elevation": "2,130 m (7,200 ft)",
    "bestTime": "Apr to Oct",
    "idealDays": "3 - 4 Days",
    "category": "mountains",
    "mood": [
      "Nature",
      "Romantic",
      "High Treks"
    ],
    "basePriceINR": 3400,
    "rating": 4.8,
    "reviewsCount": 310,
    "heroImage": "images/pahalgam.jpg",
    "tags": [
      "Betaab Valley",
      "Lidder River",
      "Aru Valley",
      "Baisaran Meadow"
    ],
    "highlights": [
      "Lidder River grade 3 white water rafting and trout angling",
      "Horseback riding through dense pine forests to Baisaran meadow",
      "Betaab Valley crystal streams and Bollywood film spots",
      "Trek gateway to Kolahoi Glacier and Tarsar Marsar alpine lakes"
    ],
    "nearestHubs": {
      "airport": "Srinagar Airport (90 km)",
      "railway": "Jammu Tawi / Udhampur",
      "road": "NH-44 via Anantnag"
    },
    "transitSummary": "90 km scenic drive from Srinagar Airport (2.5 hours) along saffron fields of Pampore and Apple orchards of Anantnag.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Pahalgam & Betaab Valley",
        "desc": "Arrive at Pahalgam & Betaab Valley, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (2,130 m (7,200 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Lidder River grade 3 white water rafting and trout angling. Experience local mountain culture, hiking trails, and Horseback riding through dense pine forests to Baisaran meadow."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Betaab Valley crystal streams and Bollywood film spots. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Trek gateway to Kolahoi Glacier and Tarsar Marsar alpine lakes. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 2,130 m (7,200 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "patnitop",
    "name": "Patnitop & Sanasar",
    "state": "Jammu & Kashmir",
    "region": "north",
    "tagline": "Cedar Meadows & Skyview Gondola in Shivalik Hills",
    "description": "A tranquil hill resort perched on a plateau surrounded by dense pine forests. Experience the state-of-the-art Skyview Gondola ropeway, paragliding at Sanasar, and snow meadows in winter.",
    "elevation": "2,024 m (6,640 ft)",
    "bestTime": "May to Jun & Dec to Mar",
    "idealDays": "2 - 3 Days",
    "category": "mountains",
    "mood": [
      "Nature",
      "Snow",
      "Adventure"
    ],
    "basePriceINR": 2600,
    "rating": 4.7,
    "reviewsCount": 210,
    "heroImage": "images/patnitop.jpg",
    "tags": [
      "Skyview Gondola",
      "Sanasar Lake",
      "Nathatop",
      "Pine Forests"
    ],
    "highlights": [
      "Skyview Gondola Asia's highest ropeway (65 meters off ground)",
      "Tandem paragliding and golfing in Sanasar meadow",
      "Snow sledging on Nathatop ridge"
    ],
    "nearestHubs": {
      "airport": "Jammu Airport (110 km)",
      "railway": "Udhampur (45 km)",
      "road": "NH-44 Chenani-Nashri Tunnel"
    },
    "transitSummary": "110 km (2.5 hours) from Jammu Airport via 4-lane NH-44 through India's longest Dr. Syama Prasad Mookerjee Tunnel.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Patnitop & Sanasar",
        "desc": "Arrive at Patnitop & Sanasar, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (2,024 m (6,640 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Skyview Gondola Asia's highest ropeway (65 meters off ground). Experience local mountain culture, hiking trails, and Tandem paragliding and golfing in Sanasar meadow."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Snow sledging on Nathatop ridge. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 2,024 m (6,640 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "pondicherry",
    "name": "Pondicherry & Auroville",
    "state": "Puducherry",
    "region": "south",
    "tagline": "French Colonial Riviera, Promenade Beach & Matrimandir",
    "description": "A slice of French Riviera on the Coromandel Coast. Wander past pastel yellow villas in White Town, cycle on the seaside Promenade, and experience the golden sphere Matrimandir at Auroville.",
    "elevation": "Sea Level",
    "bestTime": "Oct to Mar",
    "idealDays": "2 - 3 Days",
    "category": "beaches",
    "mood": [
      "Heritage",
      "French Riviera",
      "Wellness"
    ],
    "basePriceINR": 2900,
    "rating": 4.8,
    "reviewsCount": 440,
    "heroImage": "images/pondicherry.jpg",
    "tags": [
      "French Quarter",
      "Auroville",
      "Promenade Beach",
      "Croissant Cafes"
    ],
    "highlights": [
      "Bicycle tour of pastel yellow French Quarter villas and bougainvillea gates",
      "Meditation at the golden dome Matrimandir in experimental township Auroville",
      "Sunset walk on rock-lined Promenade Beach eating French gelato"
    ],
    "nearestHubs": {
      "airport": "Pondicherry Airport PNY / Chennai MAA (150 km)",
      "railway": "Puducherry (PDY)",
      "road": "East Coast Road (ECR)"
    },
    "transitSummary": "150 km (3 hours) scenic drive from Chennai Airport along the coastal East Coast Road (ECR).",
    "itinerary": [
      {
        "day": 1,
        "title": "Coastal Arrival & Sunset Promenade",
        "desc": "Arrive in Pondicherry & Auroville, check in to your seaside resort or cottage. Head down to the golden sands for an evening ocean breeze, beach shack delicacies, and a fiery sunset over the water."
      },
      {
        "day": 2,
        "title": "Water Sports, Island Trips & Marine Adventures",
        "desc": "Morning session for Bicycle tour of pastel yellow French Quarter villas and bougainvillea gates. Savor freshly caught coastal seafood and relax at secluded palm-fringed coves."
      },
      {
        "day": 3,
        "title": "Heritage Forts, Backwaters & Beach Cafes",
        "desc": "Explore Meditation at the golden dome Matrimandir in experimental township Auroville. Spend the evening enjoying live acoustic music and seaside cafes."
      }
    ],
    "packing": [
      "Breathable linen & quick-dry cotton clothing",
      "High-grade reef-safe sunscreen (SPF 50+) & aloe vera gel",
      "Polarized sunglasses & wide-brim sun hat",
      "Waterproof phone pouch & dry bag for boat rides",
      "Comfortable flip-flops and water shoes",
      "Mosquito repellent spray & hydration electrolytes",
      "Light swimwear and quick-dry microfiber towel"
    ],
    "tips": [
      "Book ferry and boat transfers in advance, especially during peak season.",
      "Respect coastal flag warnings \u2014 red flags indicate dangerous riptides and no swimming.",
      "Renting a self-drive scooter/scooty is the most economical way to explore coastal towns.",
      "Early mornings (6:30 - 8:30 AM) offer the calmest sea conditions for water sports and dolphin spotting."
    ]
  },
  {
    "id": "prayagraj",
    "name": "Prayagraj (Triveni Sangam)",
    "state": "Uttar Pradesh",
    "region": "north",
    "tagline": "Holy Confluence of Ganga, Yamuna & Saraswati",
    "description": "The sacred King of Pilgrimages (Teerthraj). Bathe at the holy Triveni Sangam (confluence of 3 sacred rivers), visit the subterranean Akshayavat tree inside the Mughal Fort, and Anand Bhavan.",
    "elevation": "98 m (322 ft)",
    "bestTime": "Oct to Mar (Maha Kumbh Season)",
    "idealDays": "2 Days",
    "category": "sacred",
    "mood": [
      "Spiritual",
      "Heritage",
      "History"
    ],
    "basePriceINR": 2200,
    "rating": 4.8,
    "reviewsCount": 460,
    "heroImage": "images/prayagraj.jpg",
    "tags": [
      "Triveni Sangam",
      "Kumbh Mela",
      "Akshayavat",
      "Anand Bhavan"
    ],
    "highlights": [
      "Boat ride to Triveni Sangam where green Yamuna meets muddy Ganga waters",
      "Reclining Hanuman (Lete Hanuman Ji) subterranean temple",
      "Anand Bhavan ancestral home of the Nehru family museum"
    ],
    "nearestHubs": {
      "airport": "Prayagraj Airport IXD",
      "railway": "Prayagraj Junction (PRYJ)",
      "road": "NH-19 / Ganga Expressway"
    },
    "transitSummary": "Direct flights from Delhi, Mumbai, Bengaluru to Prayagraj (IXD). Direct Vande Bharat from Delhi.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Holy Darshan & Evening Maha Aarti",
        "desc": "Arrive at holy Prayagraj (Triveni Sangam). Check in to your heritage guest house, take a purifying holy dip, and attend the grand evening temple darshan and divine Aarti ceremony."
      },
      {
        "day": 2,
        "title": "Ancient Shrines, Corridors & Sacred Circumambulation",
        "desc": "Early morning Mangala Aarti followed by visiting Boat ride to Triveni Sangam where green Yamuna meets muddy Ganga waters. Partake in sacred temple Mahaprasadam."
      },
      {
        "day": 3,
        "title": "Spiritual Excursions & Cultural Heritage",
        "desc": "Visit nearby holy hermitages, river ghats, and Reclining Hanuman (Lete Hanuman Ji) subterranean temple. Shop for authentic prasad and spiritual souvenirs before departure."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "puri",
    "name": "Puri & Konark Sun Temple",
    "state": "Odisha",
    "region": "east",
    "tagline": "Lord Jagannath Dham, Golden Beach & Black Pagoda",
    "description": "One of the sacred Char Dham coastal pilgrimage hubs. Marvel at the 12th-century Jagannath Temple, world-famous Ratha Yatra, Golden Blue Flag Beach, and the colossal chariot-shaped UNESCO Konark Sun Temple.",
    "elevation": "Sea Level",
    "bestTime": "Oct to Mar",
    "idealDays": "3 - 4 Days",
    "category": "sacred",
    "mood": [
      "Spiritual",
      "Beaches",
      "Heritage"
    ],
    "basePriceINR": 2600,
    "rating": 4.9,
    "reviewsCount": 570,
    "heroImage": "images/puri.jpg",
    "tags": [
      "Jagannath Temple",
      "Konark Sun Temple",
      "Golden Beach",
      "Chilika Lake"
    ],
    "highlights": [
      "Lord Jagannath Mahaprasad (56 Bhog) cooked in earthen pots",
      "13th-century Konark Sun Temple with 24 carved stone sundial wheels",
      "Chilika Lake dolphin cruise at Satapada (Asia's largest brackish lagoon)"
    ],
    "nearestHubs": {
      "airport": "Bhubaneswar Biju Patnaik Airport BBI (60 km)",
      "railway": "Puri (PURI)",
      "road": "Marine Drive Puri-Konark Expressway"
    },
    "transitSummary": "60 km (1.5 hours) from Bhubaneswar International Airport (BBI) via 4-lane expressway. Direct trains stop at Puri.",
    "itinerary": [
      {
        "day": 1,
        "title": "Coastal Arrival & Sunset Promenade",
        "desc": "Arrive in Puri & Konark Sun Temple, check in to your seaside resort or cottage. Head down to the golden sands for an evening ocean breeze, beach shack delicacies, and a fiery sunset over the water."
      },
      {
        "day": 2,
        "title": "Water Sports, Island Trips & Marine Adventures",
        "desc": "Morning session for Lord Jagannath Mahaprasad (56 Bhog) cooked in earthen pots. Savor freshly caught coastal seafood and relax at secluded palm-fringed coves."
      },
      {
        "day": 3,
        "title": "Heritage Forts, Backwaters & Beach Cafes",
        "desc": "Explore 13th-century Konark Sun Temple with 24 carved stone sundial wheels. Spend the evening enjoying live acoustic music and seaside cafes."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "pushkar",
    "name": "Pushkar & Ajmer",
    "state": "Rajasthan",
    "region": "west",
    "tagline": "Holy Brahma Lake, Camel Fair & Ajmer Sharif Dargah",
    "description": "One of the world's few temples dedicated to Lord Brahma, set around sacred Pushkar Lake with 52 ghats, surrounded by desert dunes and the Sufi shrine of Ajmer Sharif.",
    "elevation": "510 m (1,673 ft)",
    "bestTime": "Oct to Mar (Nov for Camel Fair)",
    "idealDays": "2 - 3 Days",
    "category": "sacred",
    "mood": [
      "Spiritual",
      "Culture",
      "Festivals"
    ],
    "basePriceINR": 2300,
    "rating": 4.7,
    "reviewsCount": 310,
    "heroImage": "images/pushkar.jpg",
    "tags": [
      "Brahma Temple",
      "Pushkar Camel Fair",
      "Ajmer Sharif",
      "Savitri Temple"
    ],
    "highlights": [
      "Jagatpita Brahma Mandir 14th-century temple darshan",
      "Ropeway ride to Savitri Temple with panoramic desert sunrise",
      "World-famous annual Pushkar Camel Fair in Kartik Purnima",
      "Ajmer Sharif Khwaja Garib Nawaz Dargah"
    ],
    "nearestHubs": {
      "airport": "Kishangarh Airport KQH (35 km) / Jaipur (140 km)",
      "railway": "Ajmer Junction (AII) (15 km)",
      "road": "NH-48 via Jaipur"
    },
    "transitSummary": "15 km from Ajmer Railway Station. 2.5-hour drive from Jaipur Airport.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Holy Darshan & Evening Maha Aarti",
        "desc": "Arrive at holy Pushkar & Ajmer. Check in to your heritage guest house, take a purifying holy dip, and attend the grand evening temple darshan and divine Aarti ceremony."
      },
      {
        "day": 2,
        "title": "Ancient Shrines, Corridors & Sacred Circumambulation",
        "desc": "Early morning Mangala Aarti followed by visiting Jagatpita Brahma Mandir 14th-century temple darshan. Partake in sacred temple Mahaprasadam."
      },
      {
        "day": 3,
        "title": "Spiritual Excursions & Cultural Heritage",
        "desc": "Visit nearby holy hermitages, river ghats, and Ropeway ride to Savitri Temple with panoramic desert sunrise. Shop for authentic prasad and spiritual souvenirs before departure."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "rameswaram",
    "name": "Rameswaram & Dhanushkodi",
    "state": "Tamil Nadu",
    "region": "south",
    "tagline": "Char Dham Island, Ramanathaswamy Corridors & Ram Setu",
    "description": "A sacred island connected by the iconic Pamban Sea Bridge. Features the 1,000-pillar corridor of Ramanathaswamy Temple, 22 sacred teertham wells, and the ghost town of Dhanushkodi near Ram Setu.",
    "elevation": "10 m (33 ft)",
    "bestTime": "Oct to Apr",
    "idealDays": "2 - 3 Days",
    "category": "sacred",
    "mood": [
      "Spiritual",
      "Heritage",
      "Ocean"
    ],
    "basePriceINR": 2800,
    "rating": 4.8,
    "reviewsCount": 390,
    "heroImage": "images/rameswaram.jpg",
    "tags": [
      "Pamban Bridge",
      "Ramanathaswamy Temple",
      "Dhanushkodi",
      "Ram Setu"
    ],
    "highlights": [
      "Drive across Pamban Sea Bridge over the turquoise Indian Ocean",
      "World's longest temple corridor with 1,212 carved granite pillars",
      "Bathing in 22 holy freshwater Teerthams inside the temple complex",
      "Dhanushkodi ghost town beach where Indian Ocean meets Bay of Bengal"
    ],
    "nearestHubs": {
      "airport": "Madurai Airport IXM (175 km)",
      "railway": "Rameswaram RMM",
      "road": "NH-87 across Pamban Road Bridge"
    },
    "transitSummary": "175 km (3 hours) from Madurai International Airport (IXM). Direct express trains across Pamban Bridge directly to Rameswaram (RMM).",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Holy Darshan & Evening Maha Aarti",
        "desc": "Arrive at holy Rameswaram & Dhanushkodi. Check in to your heritage guest house, take a purifying holy dip, and attend the grand evening temple darshan and divine Aarti ceremony."
      },
      {
        "day": 2,
        "title": "Ancient Shrines, Corridors & Sacred Circumambulation",
        "desc": "Early morning Mangala Aarti followed by visiting Drive across Pamban Sea Bridge over the turquoise Indian Ocean. Partake in sacred temple Mahaprasadam."
      },
      {
        "day": 3,
        "title": "Spiritual Excursions & Cultural Heritage",
        "desc": "Visit nearby holy hermitages, river ghats, and World's longest temple corridor with 1,212 carved granite pillars. Shop for authentic prasad and spiritual souvenirs before departure."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "rani-ki-vav",
    "name": "Rani Ki Vav & Modhera Sun Temple",
    "state": "Gujarat",
    "region": "west",
    "tagline": "UNESCO 7-Story Inverted Stepwell & Sun Temple",
    "description": "An architectural marvel in Patan. An inverted subterranean stepwell temple with 7 levels and over 500 sculpted avatars of Vishnu, paired with the 11th-century Modhera Sun Temple.",
    "elevation": "76 m (249 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "1 - 2 Days",
    "category": "heritage",
    "mood": [
      "Heritage",
      "Architecture",
      "Wonder"
    ],
    "basePriceINR": 2400,
    "rating": 4.8,
    "reviewsCount": 310,
    "heroImage": "images/rani-ki-vav.jpg",
    "tags": [
      "Rani Ki Vav",
      "Modhera Sun Temple",
      "Patan Patola",
      "UNESCO Stepwell"
    ],
    "highlights": [
      "7-story subterranean stepwell with 500+ intricate Vishnu sculptures",
      "Modhera Sun Temple with 108 miniature shrines around Surya Kund",
      "Patan traditional double-ikat Patola silk weaving demo"
    ],
    "nearestHubs": {
      "airport": "Ahmedabad Airport AMD (115 km)",
      "railway": "Mehsana Junction (35 km)",
      "road": "State Highway 7 via Mehsana"
    },
    "transitSummary": "115 km (2 hours) from Ahmedabad Airport via smooth 4-lane state highway.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Rani Ki Vav & Modhera Sun Temple",
        "desc": "Arrive in Rani Ki Vav & Modhera Sun Temple. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of 7-story subterranean stepwell with 500+ intricate Vishnu sculptures. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Modhera Sun Temple with 108 miniature shrines around Surya Kund. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "rann-of-kutch",
    "name": "Rann of Kutch",
    "state": "Gujarat",
    "region": "west",
    "tagline": "The Great White Salt Desert & Rann Utsav",
    "description": "World's largest white salt marsh desert! During full moon nights, the salt crystals glisten like silver under the sky. Celebrate with luxury tent cities, camel safaris, and Kutchi handicrafts.",
    "elevation": "Sea Level",
    "bestTime": "Nov to Feb (Rann Utsav)",
    "idealDays": "3 - 4 Days",
    "category": "heritage",
    "mood": [
      "Desert",
      "Festivals",
      "Offbeat"
    ],
    "basePriceINR": 4200,
    "rating": 4.9,
    "reviewsCount": 390,
    "heroImage": "images/rann-of-kutch.jpg",
    "tags": [
      "White Desert",
      "Rann Utsav",
      "Dhordo Tent City",
      "Kala Dungar"
    ],
    "highlights": [
      "Walk on the endless white salt desert under the glowing Full Moon",
      "Kala Dungar (Black Hill) highest point with panoramic desert view",
      "Traditional Rogan art and mirror-work embroidery in Nirona artisan village",
      "Kutch Fossil Park and Dholavira Harappan UNESCO site"
    ],
    "nearestHubs": {
      "airport": "Bhuj Airport BHJ (80 km)",
      "railway": "Bhuj BHUJ",
      "road": "Bhuj-Dhordo Highway"
    },
    "transitSummary": "80 km from Bhuj Airport / Railway station. Regular AC coaches and taxis operate directly to Dhordo Tent City.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Rann of Kutch",
        "desc": "Arrive in Rann of Kutch. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Walk on the endless white salt desert under the glowing Full Moon. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Kala Dungar (Black Hill) highest point with panoramic desert view. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "ranthambore",
    "name": "Ranthambore Tiger Reserve",
    "state": "Rajasthan",
    "region": "west",
    "tagline": "Royal Bengal Tigers, Ancient Banyan Trees & Fortresses",
    "description": "One of India's premier tiger reserves where Royal Bengal tigers hunt amidst the ruins of the 10th-century UNESCO Ranthambore Fort, Padam Talao lake, and ancient chhatris.",
    "elevation": "350 m (1,150 ft)",
    "bestTime": "Oct to Jun",
    "idealDays": "2 - 3 Days",
    "category": "heritage",
    "mood": [
      "Wildlife",
      "Heritage",
      "Adventure"
    ],
    "basePriceINR": 3600,
    "rating": 4.8,
    "reviewsCount": 410,
    "heroImage": "images/ranthambore.jpg",
    "tags": [
      "Tiger Safari",
      "Ranthambore Fort",
      "Zone 1-5",
      "Padam Talao"
    ],
    "highlights": [
      "Open-top 6-seater 4x4 Gypsy Tiger Safari across zones 1-5",
      "Ranthambore Fort UNESCO clifftop ramparts and Trinetra Ganesh Temple",
      "Crocodile and waterbird spotting around Malik Talao lake"
    ],
    "nearestHubs": {
      "airport": "Jaipur Airport JAI (160 km)",
      "railway": "Sawai Madhopur SWM (12 km)",
      "road": "Delhi-Mumbai Expressway (NE-4)"
    },
    "transitSummary": "12 km from Sawai Madhopur Junction (SWM). Direct fast trains from Delhi, Mumbai, and Jaipur.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Ranthambore Tiger Reserve",
        "desc": "Arrive in Ranthambore Tiger Reserve. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Open-top 6-seater 4x4 Gypsy Tiger Safari across zones 1-5. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Ranthambore Fort UNESCO clifftop ramparts and Trinetra Ganesh Temple. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "rishikesh",
    "name": "Rishikesh",
    "state": "Uttarakhand",
    "region": "north",
    "tagline": "Yoga Capital of the World & Ganga River Rafting",
    "description": "Where the sacred Ganges emerges from the Himalayas. Famous for Ram Jhula, world-class white water rafting, Beatles Ashram, and the spellbinding Triveni Ghat evening Ganga Aarti.",
    "elevation": "372 m (1,220 ft)",
    "bestTime": "Sep to May",
    "idealDays": "2 - 3 Days",
    "category": "sacred",
    "mood": [
      "Adventure",
      "Spiritual",
      "Wellness"
    ],
    "basePriceINR": 2400,
    "rating": 4.8,
    "reviewsCount": 580,
    "heroImage": "images/rishikesh.jpg",
    "tags": [
      "Ganga Rafting",
      "Triveni Aarti",
      "Beatles Ashram",
      "Bungee Jumping"
    ],
    "highlights": [
      "16-24 km grade 3-4 white water rafting through Marine Drive and Shivpuri",
      "Triveni Ghat and Parmarth Niketan grand sunset Ganga Maha Aarti",
      "Beatles Ashram (Chaurasi Kutia) graffiti meditation domes in Rajaji National Park",
      "India's highest bungee jump (83 meters) in Mohan Chatti"
    ],
    "nearestHubs": {
      "airport": "Dehradun Jolly Grant DED (18 km)",
      "railway": "Yog Nagari Rishikesh (YNRK) / Haridwar",
      "road": "NH-58 / Delhi-Dehradun Expressway"
    },
    "transitSummary": "18 km from Dehradun Airport (DED). Direct trains to Yog Nagari Rishikesh (YNRK) or 4.5-hour drive from Delhi via NH-58 expressway.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Holy Darshan & Evening Maha Aarti",
        "desc": "Arrive at holy Rishikesh. Check in to your heritage guest house, take a purifying holy dip, and attend the grand evening temple darshan and divine Aarti ceremony."
      },
      {
        "day": 2,
        "title": "Ancient Shrines, Corridors & Sacred Circumambulation",
        "desc": "Early morning Mangala Aarti followed by visiting 16-24 km grade 3-4 white water rafting through Marine Drive and Shivpuri. Partake in sacred temple Mahaprasadam."
      },
      {
        "day": 3,
        "title": "Spiritual Excursions & Cultural Heritage",
        "desc": "Visit nearby holy hermitages, river ghats, and Triveni Ghat and Parmarth Niketan grand sunset Ganga Maha Aarti. Shop for authentic prasad and spiritual souvenirs before departure."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "saputara",
    "name": "Saputara Hill Station",
    "state": "Gujarat",
    "region": "west",
    "tagline": "Gujarat's Only Hill Station in Sahyadri Dang Forests",
    "description": "Perched at 3,000 ft in the lush Dang tribal forest. Enjoy pedal boating on Saputara Lake, the Pushpak ropeway cable car, Gira waterfalls, and tribal museum.",
    "elevation": "875 m (2,870 ft)",
    "bestTime": "Jul to Mar (Monsoon & Winter)",
    "idealDays": "2 Days",
    "category": "mountains",
    "mood": [
      "Nature",
      "Monsoon",
      "Family"
    ],
    "basePriceINR": 2500,
    "rating": 4.6,
    "reviewsCount": 240,
    "heroImage": "images/saputara.jpg",
    "tags": [
      "Saputara Lake",
      "Pushpak Ropeway",
      "Gira Falls",
      "Dang Forests"
    ],
    "highlights": [
      "Pushpak Ropeway gliding over Saputara Lake valley",
      "Gira Waterfalls 75-ft roaring cascade in monsoon",
      "Governor's Hill sunset viewpoint overlooking Khandesh plains"
    ],
    "nearestHubs": {
      "airport": "Surat Airport STV (160 km) / Nashik (80 km)",
      "railway": "Bilimora / Nashik Road (80 km)",
      "road": "Nashik-Saputara Ghat Road"
    },
    "transitSummary": "80 km from Nashik or 160 km from Surat via picturesque forested ghat roads.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Saputara Hill Station",
        "desc": "Arrive at Saputara Hill Station, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (875 m (2,870 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Pushpak Ropeway gliding over Saputara Lake valley. Experience local mountain culture, hiking trails, and Gira Waterfalls 75-ft roaring cascade in monsoon."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Governor's Hill sunset viewpoint overlooking Khandesh plains. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 875 m (2,870 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "shillong",
    "name": "Shillong & Cherrapunji",
    "state": "Meghalaya",
    "region": "northeast",
    "tagline": "Scotland of the East, Living Root Bridges & Waterfalls",
    "description": "The abode of clouds! Hike to the Double Decker Living Root Bridge in Nongriat, marvel at Nohkalikai Falls (India's tallest plunge waterfall), and boat on crystal transparent Dawki River.",
    "elevation": "1,525 m (5,000 ft)",
    "bestTime": "Sep to May",
    "idealDays": "4 - 5 Days",
    "category": "mountains",
    "mood": [
      "Waterfalls",
      "High Treks",
      "Nature"
    ],
    "basePriceINR": 3400,
    "rating": 4.9,
    "reviewsCount": 480,
    "heroImage": "images/shillong.jpg",
    "tags": [
      "Living Root Bridge",
      "Nohkalikai Falls",
      "Dawki River",
      "Umiam Lake"
    ],
    "highlights": [
      "Trek 3,500 stone steps down to the 250-year-old Double Decker Living Root Bridge",
      "Nohkalikai Falls (1,115 ft) plummeting into a turquoise pool",
      "Transparent glass-like Umngot river boating in Dawki",
      "Mawlynnong \u2014 officially awarded Cleanest Village in Asia"
    ],
    "nearestHubs": {
      "airport": "Shillong Airport SHL (30 km) / Guwahati GAU (120 km)",
      "railway": "Guwahati GHY (100 km)",
      "road": "Guwahati-Shillong 4-Lane Expressway (GS Road)"
    },
    "transitSummary": "100 km (3 hours) from Guwahati Airport/Station via smooth 4-lane highway through Umiam Lake.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Shillong & Cherrapunji",
        "desc": "Arrive at Shillong & Cherrapunji, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (1,525 m (5,000 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Trek 3,500 stone steps down to the 250-year-old Double Decker Living Root Bridge. Experience local mountain culture, hiking trails, and Nohkalikai Falls (1,115 ft) plummeting into a turquoise pool."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Transparent glass-like Umngot river boating in Dawki. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Mawlynnong \u2014 officially awarded Cleanest Village in Asia. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 1,525 m (5,000 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "shimla",
    "name": "Shimla & Kufri",
    "state": "Himachal Pradesh",
    "region": "north",
    "tagline": "Queen of the Hills, UNESCO Toy Train & Mall Road",
    "description": "The historic British summer capital with colonial architecture, the bustling pedestrian Mall Road, Jakhu Temple with giant Hanuman statue, and winter snow adventure in Kufri.",
    "elevation": "2,276 m (7,467 ft)",
    "bestTime": "Year-round / Dec-Feb for Snow",
    "idealDays": "3 - 4 Days",
    "category": "mountains",
    "mood": [
      "Heritage",
      "Snow",
      "Family"
    ],
    "basePriceINR": 2900,
    "rating": 4.7,
    "reviewsCount": 380,
    "heroImage": "images/shimla.jpg",
    "tags": [
      "Mall Road",
      "UNESCO Toy Train",
      "Kufri Snow",
      "Jakhu Temple"
    ],
    "highlights": [
      "Scenic Kalka-Shimla UNESCO Heritage Toy Train ride through 103 tunnels",
      "Stroll along Ridge and Mall Road with Neo-Gothic Christ Church",
      "Jakhu Hill ropeway to the 108 ft Hanuman statue",
      "Kufri winter skiing and horse riding"
    ],
    "nearestHubs": {
      "airport": "Shimla Jubbarhatti Airport SLV (22 km) / Chandigarh (115 km)",
      "railway": "Kalka / Shimla",
      "road": "Himalayan Expressway (NH-5)"
    },
    "transitSummary": "115 km (3 hours) from Chandigarh International Airport via 4-lane Himalayan Expressway. Connected by Kalka-Shimla toy train.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Shimla & Kufri",
        "desc": "Arrive at Shimla & Kufri, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (2,276 m (7,467 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Scenic Kalka-Shimla UNESCO Heritage Toy Train ride through 103 tunnels. Experience local mountain culture, hiking trails, and Stroll along Ridge and Mall Road with Neo-Gothic Christ Church."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Jakhu Hill ropeway to the 108 ft Hanuman statue. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Kufri winter skiing and horse riding. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 2,276 m (7,467 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "shirdi",
    "name": "Shirdi Sai Baba",
    "state": "Maharashtra",
    "region": "west",
    "tagline": "The Holy Samadhi Temple of Shri Sai Baba",
    "description": "One of India's most visited spiritual sanctuaries. Pay homage at the sacred Samadhi Mandir of Shri Sai Baba, visit Dwarkamai mosque, Chavadi, and Gurusthan.",
    "elevation": "504 m (1,654 ft)",
    "bestTime": "Year-round",
    "idealDays": "1 - 2 Days",
    "category": "sacred",
    "mood": [
      "Spiritual",
      "Peace",
      "Family"
    ],
    "basePriceINR": 2200,
    "rating": 4.9,
    "reviewsCount": 630,
    "heroImage": "images/shirdi.jpg",
    "tags": [
      "Sai Baba Samadhi",
      "Dwarkamai",
      "Kakad Aarti",
      "Shani Shingnapur"
    ],
    "highlights": [
      "Early morning Kakad Aarti at Sai Baba Samadhi Mandir",
      "Dwarkamai sacred eternal dhuni fire",
      "Day excursion to lockless holy village of Shani Shingnapur"
    ],
    "nearestHubs": {
      "airport": "Shirdi International Airport SAG (14 km)",
      "railway": "Sainagar Shirdi (SNSI)",
      "road": "Samruddhi Mahamarg Expressway"
    },
    "transitSummary": "Direct flights from Mumbai, Delhi, Hyderabad, Bengaluru to Shirdi Airport (SAG). 3 hours from Mumbai via Samruddhi Expressway.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Holy Darshan & Evening Maha Aarti",
        "desc": "Arrive at holy Shirdi Sai Baba. Check in to your heritage guest house, take a purifying holy dip, and attend the grand evening temple darshan and divine Aarti ceremony."
      },
      {
        "day": 2,
        "title": "Ancient Shrines, Corridors & Sacred Circumambulation",
        "desc": "Early morning Mangala Aarti followed by visiting Early morning Kakad Aarti at Sai Baba Samadhi Mandir. Partake in sacred temple Mahaprasadam."
      },
      {
        "day": 3,
        "title": "Spiritual Excursions & Cultural Heritage",
        "desc": "Visit nearby holy hermitages, river ghats, and Dwarkamai sacred eternal dhuni fire. Shop for authentic prasad and spiritual souvenirs before departure."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "somnath-dwarka",
    "name": "Somnath & Dwarka",
    "state": "Gujarat",
    "region": "west",
    "tagline": "First Jyotirlinga & Lord Krishna's Golden Kingdom",
    "description": "Two of India's most holy coastal shrines. Somnath Temple stands eternal on the roaring Arabian Sea, and Dwarkadhish Temple (Char Dham) marks the submerged ancient kingdom of Lord Krishna.",
    "elevation": "Sea Level",
    "bestTime": "Oct to Mar",
    "idealDays": "3 - 4 Days",
    "category": "sacred",
    "mood": [
      "Spiritual",
      "Heritage",
      "Ocean"
    ],
    "basePriceINR": 2600,
    "rating": 4.9,
    "reviewsCount": 490,
    "heroImage": "images/somnath-dwarka.jpg",
    "tags": [
      "First Jyotirlinga",
      "Dwarkadhish",
      "Bet Dwarka",
      "Arabian Sea"
    ],
    "highlights": [
      "Somnath Jyotirlinga evening Sound & Light show with ocean waves",
      "5-story 72-pillar Dwarkadhish Temple with 52-yard flag unfurling",
      "Ferry boat to Bet Dwarka island and Sudama Setu suspension bridge"
    ],
    "nearestHubs": {
      "airport": "Porbandar (100 km) / Rajkot (220 km)",
      "railway": "Veraval VRL (Somnath) / Dwarka DWK",
      "road": "Coastal Highway (NH-51)"
    },
    "transitSummary": "Direct trains connect Somnath (Veraval) and Dwarka. 4-hour drive between Somnath and Dwarka along coastal highway.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Holy Darshan & Evening Maha Aarti",
        "desc": "Arrive at holy Somnath & Dwarka. Check in to your heritage guest house, take a purifying holy dip, and attend the grand evening temple darshan and divine Aarti ceremony."
      },
      {
        "day": 2,
        "title": "Ancient Shrines, Corridors & Sacred Circumambulation",
        "desc": "Early morning Mangala Aarti followed by visiting Somnath Jyotirlinga evening Sound & Light show with ocean waves. Partake in sacred temple Mahaprasadam."
      },
      {
        "day": 3,
        "title": "Spiritual Excursions & Cultural Heritage",
        "desc": "Visit nearby holy hermitages, river ghats, and 5-story 72-pillar Dwarkadhish Temple with 52-yard flag unfurling. Shop for authentic prasad and spiritual souvenirs before departure."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "sonamarg",
    "name": "Sonamarg",
    "state": "Jammu & Kashmir",
    "region": "north",
    "tagline": "Meadow of Gold & Thajiwas Glacier",
    "description": "Flanked by towering snow peaks and the roaring Sindh River, Sonamarg is the golden threshold of Ladakh, celebrated for pony treks to Thajiwas Glacier and base for the Great Lakes Trek.",
    "elevation": "2,800 m (9,200 ft)",
    "bestTime": "Apr to Oct",
    "idealDays": "2 - 3 Days",
    "category": "mountains",
    "mood": [
      "Glaciers",
      "High Treks",
      "Adventure"
    ],
    "basePriceINR": 3200,
    "rating": 4.8,
    "reviewsCount": 240,
    "heroImage": "images/sonamarg.jpg",
    "tags": [
      "Thajiwas Glacier",
      "Sindh River",
      "Kashmir Great Lakes",
      "Zoji La"
    ],
    "highlights": [
      "Thajiwas Glacier snow sledging throughout summer months",
      "Starting trailhead of world-famous Kashmir Great Lakes Trek",
      "Gateway to high-altitude Zoji La Pass connecting Kashmir to Ladakh"
    ],
    "nearestHubs": {
      "airport": "Srinagar Airport (80 km)",
      "railway": "Jammu Tawi",
      "road": "Srinagar-Leh Highway (NH-1)"
    },
    "transitSummary": "80 km smooth drive from Srinagar Airport (2 hours) along the Sindh River valley on NH-1.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Sonamarg",
        "desc": "Arrive at Sonamarg, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (2,800 m (9,200 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Thajiwas Glacier snow sledging throughout summer months. Experience local mountain culture, hiking trails, and Starting trailhead of world-famous Kashmir Great Lakes Trek."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Gateway to high-altitude Zoji La Pass connecting Kashmir to Ladakh. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 2,800 m (9,200 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "spiti-valley",
    "name": "Spiti Valley",
    "state": "Himachal Pradesh",
    "region": "north",
    "tagline": "The Middle Land of Ancient Gompas & Lunar Terrains",
    "description": "An untouched trans-Himalayan wonderland. Discover Key Monastery perched on a pyramid cliff, world's highest post office at Hikkim, fossil villages at Langza, and glowing Chandratal Lake.",
    "elevation": "3,800 m (12,500 ft)",
    "bestTime": "Jun to Oct",
    "idealDays": "7 - 9 Days",
    "category": "mountains",
    "mood": [
      "High Treks",
      "Adventure",
      "Offbeat"
    ],
    "basePriceINR": 3500,
    "rating": 4.9,
    "reviewsCount": 290,
    "heroImage": "images/spiti-valley.jpg",
    "tags": [
      "Key Monastery",
      "Chandratal Lake",
      "Hikkim Post Office",
      "Stargazing"
    ],
    "highlights": [
      "1,000-year-old Key Monastery with ancient Buddhist murals",
      "Send physical postcards from Hikkim post office (14,567 ft)",
      "Turquoise crescent Chandratal lake camping",
      "Milky Way dark-sky stargazing in Kibber"
    ],
    "nearestHubs": {
      "airport": "Bhuntar-Kullu (240 km)",
      "railway": "Chandigarh / Shimla",
      "road": "Shimla-Kaza or Manali-Atal Tunnel-Kaza"
    },
    "transitSummary": "Accessible via Shimla-Kinnaur route year-round or Manali-Atal Tunnel-Kunzum Pass (June to October).",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Spiti Valley",
        "desc": "Arrive at Spiti Valley, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (3,800 m (12,500 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit 1,000-year-old Key Monastery with ancient Buddhist murals. Experience local mountain culture, hiking trails, and Send physical postcards from Hikkim post office (14,567 ft)."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Turquoise crescent Chandratal lake camping. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Milky Way dark-sky stargazing in Kibber. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 3,800 m (12,500 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "srinagar",
    "name": "Srinagar & Dal Lake",
    "state": "Jammu & Kashmir",
    "region": "north",
    "tagline": "Paradise on Earth, Floating Shikaras & Mughal Gardens",
    "description": "The summer jewel of Kashmir. Glide on Dal Lake in wooden Shikaras, stay in hand-carved cedar houseboats, and stroll through Nishat and Shalimar Mughal Gardens under Chinar trees.",
    "elevation": "1,585 m (5,200 ft)",
    "bestTime": "Mar to Oct & Winter Snow",
    "idealDays": "4 - 5 Days",
    "category": "mountains",
    "mood": [
      "Romantic",
      "Heritage",
      "Snow"
    ],
    "basePriceINR": 3800,
    "rating": 4.8,
    "reviewsCount": 420,
    "heroImage": "images/srinagar.jpg",
    "tags": [
      "Dal Lake",
      "Shikara Ride",
      "Mughal Gardens",
      "Houseboats"
    ],
    "highlights": [
      "Early morning floating vegetable market on Dal Lake",
      "Luxury heritage cedar houseboat stay with Kashmiri Kahwa",
      "Terraced cascading fountains of Shalimar and Nishat Gardens",
      "Pari Mahal panoramic view over Dal Lake at sunset"
    ],
    "nearestHubs": {
      "airport": "Sheikh ul-Alam International Airport Srinagar (SXR)",
      "railway": "Srinagar (SXR) / Jammu Tawi",
      "road": "NH-44 via Banihal Qazigund Tunnel"
    },
    "transitSummary": "Frequent direct flights to Srinagar (SXR) from Delhi, Mumbai, Bengaluru, and Chandigarh. Connected by road via 4-lane NH-44 through Banihal Tunnel.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Srinagar & Dal Lake",
        "desc": "Arrive at Srinagar & Dal Lake, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (1,585 m (5,200 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Early morning floating vegetable market on Dal Lake. Experience local mountain culture, hiking trails, and Luxury heritage cedar houseboat stay with Kashmiri Kahwa."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Terraced cascading fountains of Shalimar and Nishat Gardens. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit Pari Mahal panoramic view over Dal Lake at sunset. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 1,585 m (5,200 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "statue-of-unity",
    "name": "Statue of Unity (Kevadia)",
    "state": "Gujarat",
    "region": "west",
    "tagline": "World's Tallest Monument (182 m) Dedicated to Sardar Patel",
    "description": "Standing colossal on the Narmada River at 182 meters (597 ft). Experience the high-speed chest-level observation deck, Valley of Flowers, Zarwani Waterfalls, and the grand evening Laser Light & Sound Show.",
    "elevation": "182 m Statue Height",
    "bestTime": "Oct to Mar",
    "idealDays": "2 Days",
    "category": "heritage",
    "mood": [
      "Wonder",
      "Family",
      "Architecture"
    ],
    "basePriceINR": 2800,
    "rating": 4.9,
    "reviewsCount": 580,
    "heroImage": "images/statue-of-unity.jpg",
    "tags": [
      "World Tallest Statue",
      "Narmada River",
      "Viewing Gallery",
      "Laser Show"
    ],
    "highlights": [
      "Observation deck at 153 meters inside statue chest looking at Sardar Sarovar Dam",
      "Grand multi-beam projection Laser Light & Sound show at 7 PM",
      "Jungle Safari Park, Glow Garden, and Valley of Flowers"
    ],
    "nearestHubs": {
      "airport": "Vadodara Airport BDQ (90 km)",
      "railway": "Ekta Nagar Railway Station (EKNR)",
      "road": "Vadodara-Ekta Nagar Highway"
    },
    "transitSummary": "Direct Vande Bharat and Jan Shatabdi express trains connect directly to Ekta Nagar Station (EKNR).",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Statue of Unity (Kevadia)",
        "desc": "Arrive in Statue of Unity (Kevadia). Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Observation deck at 153 meters inside statue chest looking at Sardar Sarovar Dam. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Grand multi-beam projection Laser Light & Sound show at 7 PM. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "sundarbans",
    "name": "Sundarbans Delta",
    "state": "West Bengal",
    "region": "east",
    "tagline": "World's Largest Mangrove Forest & Swimming Bengal Tigers",
    "description": "A UNESCO World Heritage mangrove biome straddling the Ganges-Brahmaputra delta. Take boat safaris through narrow tidal channels to spot Royal Bengal tigers, saltwater crocodiles, and spotted deer.",
    "elevation": "Sea Level",
    "bestTime": "Sep to Mar",
    "idealDays": "2 - 3 Days",
    "category": "heritage",
    "mood": [
      "Wildlife",
      "Offbeat",
      "Adventure"
    ],
    "basePriceINR": 3100,
    "rating": 4.7,
    "reviewsCount": 270,
    "heroImage": "images/sundarbans.jpg",
    "tags": [
      "Royal Bengal Tiger",
      "Mangrove Safari",
      "Sajnekhali Watch Tower",
      "Delta"
    ],
    "highlights": [
      "Cruising along silent tidal mangrove creeks on motorized boats",
      "Watchtowers at Sajnekhali, Sudhanyakhali, and Do Banki canopy walk",
      "Spotting saltwater crocodiles, kingfishers, and swimming tigers"
    ],
    "nearestHubs": {
      "airport": "Kolkata Netaji Subhash Airport CCU (110 km)",
      "railway": "Canning (48 km) / Kolkata",
      "road": "Kolkata-Godkhali Road"
    },
    "transitSummary": "110 km (3 hours) drive from Kolkata to Godkhali boat jetty, followed by boat transfers to eco-resorts.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Sundarbans Delta",
        "desc": "Arrive in Sundarbans Delta. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Cruising along silent tidal mangrove creeks on motorized boats. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Watchtowers at Sajnekhali, Sudhanyakhali, and Do Banki canopy walk. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "tadoba",
    "name": "Tadoba Andhari Tiger Reserve",
    "state": "Maharashtra",
    "region": "west",
    "tagline": "The Real Land of Tigers & Bamboo Safaris",
    "description": "Maharashtra's oldest and largest national park, renowned for having India's highest tiger sighting probabilities across Moharli, Kolara, and Navegaon safari zones.",
    "elevation": "200 m (656 ft)",
    "bestTime": "Oct to Jun",
    "idealDays": "2 - 3 Days",
    "category": "heritage",
    "mood": [
      "Wildlife",
      "Safari",
      "Adventure"
    ],
    "basePriceINR": 3600,
    "rating": 4.9,
    "reviewsCount": 380,
    "heroImage": "images/tadoba.jpg",
    "tags": [
      "Tiger Safari",
      "Moharli Zone",
      "Tadoba Lake",
      "Bamboo Forest"
    ],
    "highlights": [
      "Unrivaled Royal Bengal Tiger sightings on open 4x4 Gypsy safaris",
      "Tadoba Lake with mugger crocodiles and water birds",
      "Night safari in buffer zones spotting leopards and sloth bears"
    ],
    "nearestHubs": {
      "airport": "Dr. Babasaheb Ambedkar Airport Nagpur NAG (140 km)",
      "railway": "Chandrapur CD (45 km) / Nagpur",
      "road": "Nagpur-Chandrapur Highway"
    },
    "transitSummary": "140 km (3 hours) from Nagpur International Airport via 4-lane highway.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Tadoba Andhari Tiger Reserve",
        "desc": "Arrive in Tadoba Andhari Tiger Reserve. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Unrivaled Royal Bengal Tiger sightings on open 4x4 Gypsy safaris. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Tadoba Lake with mugger crocodiles and water birds. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "tawang",
    "name": "Tawang & Sela Pass",
    "state": "Arunachal Pradesh",
    "region": "northeast",
    "tagline": "India's Largest Buddhist Monastery & 13,700 ft Sela Pass",
    "description": "Perched in the high Himalayas of Arunachal at 10,000 ft. Home to the 1681 AD Tawang Monastery (birthplace of the 6th Dalai Lama), frozen Sela Lake, and cascading Nuranang Waterfalls.",
    "elevation": "3,048 m (10,000 ft)",
    "bestTime": "Mar to Jun & Sep to Nov",
    "idealDays": "5 - 7 Days",
    "category": "mountains",
    "mood": [
      "High Treks",
      "Snow",
      "Monasteries"
    ],
    "basePriceINR": 3800,
    "rating": 4.9,
    "reviewsCount": 320,
    "heroImage": "images/tawang.jpg",
    "tags": [
      "Tawang Monastery",
      "Sela Pass",
      "Sela Tunnel",
      "Nuranang Falls"
    ],
    "highlights": [
      "400-year-old Tawang Monastery with 28-ft gilded Buddha",
      "Drive through the new world's longest bi-lane Sela Tunnel (13,000 ft)",
      "Bum La Pass (15,200 ft) Indo-China border & Madhuri Lake (Sangetsar Tso)"
    ],
    "nearestHubs": {
      "airport": "Tezpur (320 km) / Guwahati (480 km)",
      "railway": "Bhalukpong / Tezpur",
      "road": "Trans-Arunachal Highway via Sela Tunnel"
    },
    "transitSummary": "Drive from Guwahati/Tezpur via Bhalukpong, Dirang, and Sela Pass (2-day scenic mountain journey). Inner Line Permit (ILP) required.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Tawang & Sela Pass",
        "desc": "Arrive at Tawang & Sela Pass, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (3,048 m (10,000 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit 400-year-old Tawang Monastery with 28-ft gilded Buddha. Experience local mountain culture, hiking trails, and Drive through the new world's longest bi-lane Sela Tunnel (13,000 ft)."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Bum La Pass (15,200 ft) Indo-China border & Madhuri Lake (Sangetsar Tso). Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 3,048 m (10,000 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "thekkady",
    "name": "Thekkady (Periyar Wildlife)",
    "state": "Kerala",
    "region": "south",
    "tagline": "Periyar Lake Boat Safari, Spice Hills & Elephants",
    "description": "India's premier elephant and tiger reserve. Enjoy peaceful boat safaris on Periyar Lake watching herds of wild elephants swim, explore cardamom plantations, and watch Kalaripayattu martial arts.",
    "elevation": "900 m (2,950 ft)",
    "bestTime": "Sep to May",
    "idealDays": "2 - 3 Days",
    "category": "mountains",
    "mood": [
      "Wildlife",
      "Spices",
      "Culture"
    ],
    "basePriceINR": 2700,
    "rating": 4.7,
    "reviewsCount": 340,
    "heroImage": "images/thekkady.jpg",
    "tags": [
      "Periyar Lake Safari",
      "Elephant Spotting",
      "Spice Plantations",
      "Kalaripayattu"
    ],
    "highlights": [
      "Boat safari on submerged tree trunks of Periyar Lake spotting wild elephants and bisons",
      "Kadathanadan Kalari Centre live Kalaripayattu martial arts show",
      "Spice plantation walking tour tasting fresh cloves, pepper, and nutmeg"
    ],
    "nearestHubs": {
      "airport": "Madurai Airport IXM (140 km) / Kochi (155 km)",
      "railway": "Kottayam KTYM (105 km)",
      "road": "Kollam-Theni Highway (NH-183)"
    },
    "transitSummary": "105 km from Kottayam Railway Station or 140 km from Madurai Airport.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Thekkady (Periyar Wildlife)",
        "desc": "Arrive at Thekkady (Periyar Wildlife), check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (900 m (2,950 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Boat safari on submerged tree trunks of Periyar Lake spotting wild elephants and bisons. Experience local mountain culture, hiking trails, and Kadathanadan Kalari Centre live Kalaripayattu martial arts show."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Spice plantation walking tour tasting fresh cloves, pepper, and nutmeg. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 900 m (2,950 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "tirupati",
    "name": "Tirupati Balaji",
    "state": "Andhra Pradesh",
    "region": "south",
    "tagline": "World's Most Visited Temple & Lord Venkateswara Shrine",
    "description": "Perched on the sacred Seven Hills of Tirumala. Dedicated to Lord Venkateswara (Balaji) \u2014 millions visit annually to receive blessings and sacred Tirupati Laddu Prasadam.",
    "elevation": "853 m (2,799 ft)",
    "bestTime": "Sep to Mar",
    "idealDays": "2 Days",
    "category": "sacred",
    "mood": [
      "Spiritual",
      "Devotion",
      "Family"
    ],
    "basePriceINR": 2500,
    "rating": 4.9,
    "reviewsCount": 740,
    "heroImage": "images/tirupati.jpg",
    "tags": [
      "Lord Venkateswara",
      "Tirumala Hills",
      "Laddu Prasadam",
      "Silathoranam"
    ],
    "highlights": [
      "Darshan of golden-roofed Ananda Nilayam sanctum sanctorum",
      "Silathoranam rare natural geological rock arch",
      "Akasa Ganga holy mountain water spring"
    ],
    "nearestHubs": {
      "airport": "Tirupati Airport TIR (15 km)",
      "railway": "Tirupati Main (TPTY) / Renigunta",
      "road": "Tirupati-Tirumala Ghat Roads"
    },
    "transitSummary": "Direct flights to Tirupati (TIR) from Hyderabad, Bengaluru, Chennai. Direct express trains to Tirupati (TPTY).",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Holy Darshan & Evening Maha Aarti",
        "desc": "Arrive at holy Tirupati Balaji. Check in to your heritage guest house, take a purifying holy dip, and attend the grand evening temple darshan and divine Aarti ceremony."
      },
      {
        "day": 2,
        "title": "Ancient Shrines, Corridors & Sacred Circumambulation",
        "desc": "Early morning Mangala Aarti followed by visiting Darshan of golden-roofed Ananda Nilayam sanctum sanctorum. Partake in sacred temple Mahaprasadam."
      },
      {
        "day": 3,
        "title": "Spiritual Excursions & Cultural Heritage",
        "desc": "Visit nearby holy hermitages, river ghats, and Silathoranam rare natural geological rock arch. Shop for authentic prasad and spiritual souvenirs before departure."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "udaipur",
    "name": "Udaipur City of Lakes",
    "state": "Rajasthan",
    "region": "west",
    "tagline": "Venice of the East, Lake Pichola & Palaces",
    "description": "Surrounded by the Aravali hills and shimmering azure lakes. Famous for the floating Lake Palace, majestic City Palace complex, and sunset boat cruises on Lake Pichola.",
    "elevation": "598 m (1,962 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "3 - 4 Days",
    "category": "heritage",
    "mood": [
      "Romantic",
      "Heritage",
      "Luxury"
    ],
    "basePriceINR": 3400,
    "rating": 4.9,
    "reviewsCount": 510,
    "heroImage": "images/udaipur.jpg",
    "tags": [
      "Lake Pichola",
      "City Palace",
      "Taj Lake Palace",
      "Fateh Sagar"
    ],
    "highlights": [
      "Sunset boat cruise on Lake Pichola past Jag Mandir Island Palace",
      "Grand City Palace Museum with peacock courtyards and crystal gallery",
      "Saheliyon-ki-Bari royal garden fountains",
      "Monsoon Palace (Sajjangarh) hilltop panoramic view"
    ],
    "nearestHubs": {
      "airport": "Maharana Pratap Airport Udaipur UDR",
      "railway": "Udaipur City UDZ",
      "road": "NH-48 via Ahmedabad / Jaipur"
    },
    "transitSummary": "Direct flights from Mumbai, Delhi, Bengaluru, and Jaipur to Udaipur (UDR). Direct Vande Bharat from Jaipur.",
    "itinerary": [
      {
        "day": 1,
        "title": "Royal Arrival & Architectural Marvels of Udaipur City of Lakes",
        "desc": "Arrive in Udaipur City of Lakes. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
      },
      {
        "day": 2,
        "title": "Fortress Exploration & Cultural Highlights",
        "desc": "Guided tour of Sunset boat cruise on Lake Pichola past Jag Mandir Island Palace. Experience authentic regional thali and evening folk dance performances."
      },
      {
        "day": 3,
        "title": "Nature Reserves, Sunsets & Royal Cenotaphs",
        "desc": "Visit Grand City Palace Museum with peacock courtyards and crystal gallery. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
      }
    ],
    "packing": [
      "Comfortable walking sneakers for long fort/monument walks",
      "Breathable cotton clothes and a light evening jacket",
      "Sun hat, sunglasses & broad-spectrum sunscreen",
      "Universal charging adapter & high-capacity power bank",
      "Refillable insulated water bottle",
      "Mosquito repellent & personal first-aid kit"
    ],
    "tips": [
      "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
      "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
      "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
      "Try authentic local regional eateries and street food hubs recommended by locals."
    ]
  },
  {
    "id": "ujjain",
    "name": "Ujjain Mahakal",
    "state": "Madhya Pradesh",
    "region": "central",
    "tagline": "Mahakaleshwar Jyotirlinga, Bhasma Aarti & Mahakal Lok",
    "description": "One of India's seven holy Moksha puris on the Shipra River. Famous for the south-facing Dakshinmukhi Mahakaleshwar Jyotirlinga, mystical 4 AM Bhasma Aarti, and grand Mahakal Lok corridor.",
    "elevation": "491 m (1,610 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "2 Days",
    "category": "sacred",
    "mood": [
      "Spiritual",
      "Heritage",
      "Peace"
    ],
    "basePriceINR": 2400,
    "rating": 4.9,
    "reviewsCount": 540,
    "heroImage": "images/ujjain.jpg",
    "tags": [
      "Mahakaleshwar",
      "Bhasma Aarti",
      "Mahakal Lok",
      "Shipra River"
    ],
    "highlights": [
      "Witness sacred 4:00 AM Bhasma Aarti performed with sacred ash",
      "Grand 900-meter Mahakal Lok corridor with 108 ornate stone pillars",
      "Kal Bhairav Temple where liquor is offered as prasad",
      "Holy dip at Ram Ghat during evening Shipra Aarti"
    ],
    "nearestHubs": {
      "airport": "Devi Ahilyabai Holkar Airport Indore IDR (55 km)",
      "railway": "Ujjain Junction UJN",
      "road": "Indore-Ujjain 4-Lane Expressway"
    },
    "transitSummary": "55 km (1 hour) from Indore International Airport (IDR) via 4-lane expressway. Direct trains from Mumbai, Delhi, and Jaipur.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Holy Darshan & Evening Maha Aarti",
        "desc": "Arrive at holy Ujjain Mahakal. Check in to your heritage guest house, take a purifying holy dip, and attend the grand evening temple darshan and divine Aarti ceremony."
      },
      {
        "day": 2,
        "title": "Ancient Shrines, Corridors & Sacred Circumambulation",
        "desc": "Early morning Mangala Aarti followed by visiting Witness sacred 4:00 AM Bhasma Aarti performed with sacred ash. Partake in sacred temple Mahaprasadam."
      },
      {
        "day": 3,
        "title": "Spiritual Excursions & Cultural Heritage",
        "desc": "Visit nearby holy hermitages, river ghats, and Grand 900-meter Mahakal Lok corridor with 108 ornate stone pillars. Shop for authentic prasad and spiritual souvenirs before departure."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "vaishno-devi",
    "name": "Vaishno Devi (Katra)",
    "state": "Jammu & Kashmir",
    "region": "north",
    "tagline": "Holy Cave Shrine of Mata Vaishno Devi in Trikuta Hills",
    "description": "One of India's most sacred pilgrimage sites located in Trikuta mountains at 5,200 ft. Millions undertake the 12 km holy trek from Katra to the sanctum sanctorum cave.",
    "elevation": "1,585 m (5,200 ft)",
    "bestTime": "Year-round / Mar-Oct",
    "idealDays": "2 - 3 Days",
    "category": "sacred",
    "mood": [
      "Spiritual",
      "High Treks",
      "Family"
    ],
    "basePriceINR": 2200,
    "rating": 4.9,
    "reviewsCount": 680,
    "heroImage": "images/vaishno-devi.jpg",
    "tags": [
      "Mata Vaishno Devi",
      "Bhavan",
      "Bhairon Temple Ropeway",
      "Ardhkuwari"
    ],
    "highlights": [
      "12 km paved mountain trek with electric autos and pony options",
      "Ardhkuwari holy cave darshan",
      "Bhairon Ghati passenger ropeway with mountain vistas"
    ],
    "nearestHubs": {
      "airport": "Jammu Airport IXJ (50 km)",
      "railway": "Shri Mata Vaishno Devi Katra (SVDK)",
      "road": "NH-44 to Katra"
    },
    "transitSummary": "Direct Vande Bharat and Superfast Express trains to Katra Railway Station (SVDK) from Delhi and major metros.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Vaishno Devi (Katra)",
        "desc": "Arrive at Vaishno Devi (Katra), check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (1,585 m (5,200 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit 12 km paved mountain trek with electric autos and pony options. Experience local mountain culture, hiking trails, and Ardhkuwari holy cave darshan."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Bhairon Ghati passenger ropeway with mountain vistas. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "valley-of-flowers",
    "name": "Valley of Flowers & Hemkund",
    "state": "Uttarakhand",
    "region": "north",
    "tagline": "UNESCO World Heritage Alpine Blossom Sanctuary",
    "description": "A high-altitude Himalayan valley carpeted in over 500 species of wild alpine flowers, paired with the glacial lake and sacred Gurudwara of Hemkund Sahib at 14,107 ft.",
    "elevation": "3,658 m (12,000 ft)",
    "bestTime": "Jul to Sep (Peak Blooms)",
    "idealDays": "5 - 6 Days",
    "category": "mountains",
    "mood": [
      "High Treks",
      "Nature",
      "Photography"
    ],
    "basePriceINR": 3500,
    "rating": 4.9,
    "reviewsCount": 320,
    "heroImage": "images/valley-of-flowers.jpg",
    "tags": [
      "Alpine Flowers",
      "Hemkund Sahib",
      "Govindghat",
      "UNESCO"
    ],
    "highlights": [
      "Walking through endless meadows of blue poppies and orchids",
      "Hemkund Sahib glacial lake surrounded by 7 snow peaks",
      "Pushpawati river stream crossing"
    ],
    "nearestHubs": {
      "airport": "Dehradun (290 km)",
      "railway": "Rishikesh (270 km)",
      "road": "Joshimath-Govindghat Road"
    },
    "transitSummary": "Drive from Rishikesh to Govindghat, then trek 14 km to Ghangaria base camp.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Valley of Flowers & Hemkund",
        "desc": "Arrive at Valley of Flowers & Hemkund, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (3,658 m (12,000 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Walking through endless meadows of blue poppies and orchids. Experience local mountain culture, hiking trails, and Hemkund Sahib glacial lake surrounded by 7 snow peaks."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Pushpawati river stream crossing. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 3,658 m (12,000 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "varanasi",
    "name": "Varanasi (Kashi)",
    "state": "Uttar Pradesh",
    "region": "north",
    "tagline": "World's Oldest Living City & Ganga Maha Aarti",
    "description": "The spiritual heart of India on the banks of sacred River Ganga. Experience the golden Kashi Vishwanath corridor, morning boat rides past historic ghats, and grand evening Dashashwamedh Aarti.",
    "elevation": "81 m (265 ft)",
    "bestTime": "Oct to Mar",
    "idealDays": "2 - 3 Days",
    "category": "sacred",
    "mood": [
      "Spiritual",
      "Heritage",
      "Food"
    ],
    "basePriceINR": 2400,
    "rating": 4.9,
    "reviewsCount": 720,
    "heroImage": "images/varanasi.jpg",
    "tags": [
      "Kashi Vishwanath",
      "Ganga Aarti",
      "Assi Ghat",
      "Sarnath"
    ],
    "highlights": [
      "Mesmerizing multi-tiered brass lamp Ganga Aarti at Dashashwamedh Ghat",
      "Kashi Vishwanath Golden Temple darshan & corridor walk",
      "Dawn boat ride past 84 historic stone ghats from Assi to Manikarnika",
      "Sarnath archaeological site where Lord Buddha gave his first sermon"
    ],
    "nearestHubs": {
      "airport": "Lal Bahadur Shastri Int Airport Varanasi VNS",
      "railway": "Varanasi Jn (BSB) / Banaras (BSBS)",
      "road": "NH-19 / Purvanchal Expressway"
    },
    "transitSummary": "Direct flights to Varanasi (VNS) from Delhi, Mumbai, Bengaluru, Hyderabad. Direct Vande Bharat trains from Delhi (8 hours).",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Holy Darshan & Evening Maha Aarti",
        "desc": "Arrive at holy Varanasi (Kashi). Check in to your heritage guest house, take a purifying holy dip, and attend the grand evening temple darshan and divine Aarti ceremony."
      },
      {
        "day": 2,
        "title": "Ancient Shrines, Corridors & Sacred Circumambulation",
        "desc": "Early morning Mangala Aarti followed by visiting Mesmerizing multi-tiered brass lamp Ganga Aarti at Dashashwamedh Ghat. Partake in sacred temple Mahaprasadam."
      },
      {
        "day": 3,
        "title": "Spiritual Excursions & Cultural Heritage",
        "desc": "Visit nearby holy hermitages, river ghats, and Kashi Vishwanath Golden Temple darshan & corridor walk. Shop for authentic prasad and spiritual souvenirs before departure."
      }
    ],
    "packing": [
      "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
      "Easy slip-on footwear (as shoes are removed at temples)",
      "Cotton scarf/shawl for covering head during prayers",
      "Hand sanitizer & wet wipes for temple visits",
      "Cash in small denominations for prasad and offerings",
      "Reusable cloth bag for carrying offerings and footwear"
    ],
    "tips": [
      "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
      "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
      "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
      "Keep electronic gadgets and leather items in designated temple cloakrooms."
    ]
  },
  {
    "id": "varkala",
    "name": "Varkala Cliff",
    "state": "Kerala",
    "region": "south",
    "tagline": "Red Laterite Ocean Cliffs & Papanasam Beach",
    "description": "The only place in southern Kerala where towering red laterite cliffs overlook the Arabian Sea. Clifftop yoga cafes, surfing waves, and sacred Papanasam mineral springs.",
    "elevation": "Sea Level",
    "bestTime": "Oct to Apr",
    "idealDays": "2 - 3 Days",
    "category": "beaches",
    "mood": [
      "Beaches",
      "Wellness",
      "Relaxation"
    ],
    "basePriceINR": 2800,
    "rating": 4.8,
    "reviewsCount": 310,
    "heroImage": "images/varkala.jpg",
    "tags": [
      "Varkala Cliff",
      "Papanasam Beach",
      "Surfing",
      "Sunset Cafes"
    ],
    "highlights": [
      "Clifftop promenade lined with seafood restaurants and yoga schools",
      "Papanasam sacred natural spring beach",
      "Beginner surf lessons at Black Beach",
      "2,000-year-old Janardhana Swamy Vishnu Temple"
    ],
    "nearestHubs": {
      "airport": "Trivandrum Airport TRV (45 km)",
      "railway": "Varkala Sivagiri VAK",
      "road": "NH-66"
    },
    "transitSummary": "45 km (1 hour) from Trivandrum International Airport (TRV). Direct express trains stop at Varkala Sivagiri station.",
    "itinerary": [
      {
        "day": 1,
        "title": "Coastal Arrival & Sunset Promenade",
        "desc": "Arrive in Varkala Cliff, check in to your seaside resort or cottage. Head down to the golden sands for an evening ocean breeze, beach shack delicacies, and a fiery sunset over the water."
      },
      {
        "day": 2,
        "title": "Water Sports, Island Trips & Marine Adventures",
        "desc": "Morning session for Clifftop promenade lined with seafood restaurants and yoga schools. Savor freshly caught coastal seafood and relax at secluded palm-fringed coves."
      },
      {
        "day": 3,
        "title": "Heritage Forts, Backwaters & Beach Cafes",
        "desc": "Explore Papanasam sacred natural spring beach. Spend the evening enjoying live acoustic music and seaside cafes."
      }
    ],
    "packing": [
      "Breathable linen & quick-dry cotton clothing",
      "High-grade reef-safe sunscreen (SPF 50+) & aloe vera gel",
      "Polarized sunglasses & wide-brim sun hat",
      "Waterproof phone pouch & dry bag for boat rides",
      "Comfortable flip-flops and water shoes",
      "Mosquito repellent spray & hydration electrolytes",
      "Light swimwear and quick-dry microfiber towel"
    ],
    "tips": [
      "Book ferry and boat transfers in advance, especially during peak season.",
      "Respect coastal flag warnings \u2014 red flags indicate dangerous riptides and no swimming.",
      "Renting a self-drive scooter/scooty is the most economical way to explore coastal towns.",
      "Early mornings (6:30 - 8:30 AM) offer the calmest sea conditions for water sports and dolphin spotting."
    ]
  },
  {
    "id": "wayanad",
    "name": "Wayanad Rainforests",
    "state": "Kerala",
    "region": "south",
    "tagline": "Misty Western Ghats, Edakkal Caves & Chembra Peak",
    "description": "Sprawling spice plantations, prehistoric petroglyphs at Edakkal Caves, bamboo rafting at Kuruva Island, and the famous heart-shaped alpine lake at Chembra Peak.",
    "elevation": "700 m - 2,100 m",
    "bestTime": "Oct to May",
    "idealDays": "3 - 4 Days",
    "category": "mountains",
    "mood": [
      "High Treks",
      "Nature",
      "Wildlife"
    ],
    "basePriceINR": 2900,
    "rating": 4.8,
    "reviewsCount": 390,
    "heroImage": "images/wayanad.jpg",
    "tags": [
      "Chembra Peak",
      "Edakkal Caves",
      "Banasura Sagar Dam",
      "Kuruva Island"
    ],
    "highlights": [
      "Trek to heart-shaped Hridaya Saras lake atop Chembra Peak",
      "Neolithic stone age rock carvings inside Edakkal Caves",
      "Banasura Sagar Dam - largest earth dam in India"
    ],
    "nearestHubs": {
      "airport": "Calicut Kozhikode Airport CCJ (85 km)",
      "railway": "Kozhikode CLT (75 km)",
      "road": "Thamarassery Ghat Pass (NH-766)"
    },
    "transitSummary": "75 km from Kozhikode (Calicut) Railway Station via 9 scenic hairpin curves of Thamarassery Churam.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Wayanad Rainforests",
        "desc": "Arrive at Wayanad Rainforests, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (700 m - 2,100 m), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Trek to heart-shaped Hridaya Saras lake atop Chembra Peak. Experience local mountain culture, hiking trails, and Neolithic stone age rock carvings inside Edakkal Caves."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Banasura Sagar Dam - largest earth dam in India. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 700 m - 2,100 m.",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "zanskar",
    "name": "Zanskar Valley & Padum",
    "state": "Ladakh",
    "region": "north",
    "tagline": "The Remote Lost Valley & Phugtal Cave Monastery",
    "description": "One of the most secluded valleys in the trans-Himalayas. Marvel at the beehive-like cliff-hanging Phugtal Cave Monastery, Gonbo Rangjon sacred peak, and turquoise Zanskar river.",
    "elevation": "3,650 m (11,975 ft)",
    "bestTime": "Jun to Sep",
    "idealDays": "5 - 7 Days",
    "category": "mountains",
    "mood": [
      "High Treks",
      "Offbeat",
      "Adventure"
    ],
    "basePriceINR": 4200,
    "rating": 4.9,
    "reviewsCount": 195,
    "heroImage": "images/zanskar.jpg",
    "tags": [
      "Phugtal Monastery",
      "Gonbo Rangjon",
      "Shinku La",
      "Padum"
    ],
    "highlights": [
      "Trek to 2,500-year-old Phugtal cave monastery built into cliff",
      "Gonbo Rangjon standalone granite monolith",
      "Crossing high-altitude Shinku La Pass (16,580 ft)"
    ],
    "nearestHubs": {
      "airport": "Leh (240 km) / Kullu (260 km)",
      "railway": "Jammu Tawi",
      "road": "Darcha-Shinku La-Padum Road"
    },
    "transitSummary": "Accessible from Manali via Darcha & Shinku La Pass or from Leh via Kargil & Padum.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Zanskar Valley & Padum",
        "desc": "Arrive at Zanskar Valley & Padum, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (3,650 m (11,975 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Trek to 2,500-year-old Phugtal cave monastery built into cliff. Experience local mountain culture, hiking trails, and Gonbo Rangjon standalone granite monolith."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Crossing high-altitude Shinku La Pass (16,580 ft). Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 3,650 m (11,975 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  },
  {
    "id": "ziro-valley",
    "name": "Ziro Valley",
    "state": "Arunachal Pradesh",
    "region": "northeast",
    "tagline": "UNESCO Cultural Pine Valley & Apatani Tribal Homeland",
    "description": "A picturesque valley of layered emerald paddy fields and pine-clad hills. Home to the unique Apatani tribe known for facial tattoos and nose plugs, and the outdoor Ziro Music Festival.",
    "elevation": "1,500 m (4,920 ft)",
    "bestTime": "Mar to Oct (Sep for Ziro Music Festival)",
    "idealDays": "3 - 4 Days",
    "category": "mountains",
    "mood": [
      "Tribal",
      "Festivals",
      "Offbeat"
    ],
    "basePriceINR": 2900,
    "rating": 4.8,
    "reviewsCount": 240,
    "heroImage": "images/ziro-valley.jpg",
    "tags": [
      "Apatani Tribe",
      "Ziro Music Festival",
      "Paddy Fields",
      "Tarin Fish Farm"
    ],
    "highlights": [
      "Apatani tribal heritage village walk and paddy-cum-pisciculture system",
      "Annual open-air Ziro Music Festival in September",
      "Tarin high-altitude bamboo groves and fish farm"
    ],
    "nearestHubs": {
      "airport": "Hollongi Donyi Polo Airport Itanagar (120 km)",
      "railway": "Naharlagun (95 km)",
      "road": "Itanagar-Ziro Highway"
    },
    "transitSummary": "95 km (3.5 hours) from Naharlagun Railway Station or 120 km from Itanagar Airport.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival, Acclimatization & Local Charm in Ziro Valley",
        "desc": "Arrive at Ziro Valley, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation (1,500 m (4,920 ft)), sipping hot local tea, and exploring nearby viewpoints and village markets."
      },
      {
        "day": 2,
        "title": "Core Valley Exploration & Iconic Landmarks",
        "desc": "Early morning start to visit Apatani tribal heritage village walk and paddy-cum-pisciculture system. Experience local mountain culture, hiking trails, and Annual open-air Ziro Music Festival in September."
      },
      {
        "day": 3,
        "title": "Adventure Trails & Riverside / Meadow Retreat",
        "desc": "Hike to Tarin high-altitude bamboo groves and fish farm. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
      },
      {
        "day": 4,
        "title": "Offbeat Villages & Farewell Views",
        "desc": "Visit nearby historic monasteries and artisanal handicraft centers. Pack memories and proceed for smooth onward return transit."
      }
    ],
    "packing": [
      "Thermal innerwear & down jacket for cold evenings",
      "Sturdy trekking shoes with good grip & ankle support",
      "SPF 50+ sunscreen, UV sunglasses & lip balm",
      "Personal water bottle with purification tablets",
      "Power bank & camera spare batteries (drain fast in cold)",
      "Diamox & basic altitude sickness / motion sickness meds",
      "Windproof & waterproof outer jacket or poncho"
    ],
    "tips": [
      "Take it easy on Day 1 to allow your body to acclimatize to 1,500 m (4,920 ft).",
      "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
      "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
      "Always hire local union-registered taxis for high pass crossings and snow terrain."
    ]
  }
];

if (typeof window !== 'undefined') {
  window.DESTINATIONS = DESTINATIONS;
  window.CURRENCIES = CURRENCIES;
}
