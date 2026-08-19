/**
 * RAAHIYOO 2.0 — VERIFIED HOMESTAYS & WORKATION STAYS ENGINE
 * Zero-commission curated authentic stays with verified WiFi speeds and host details.
 */

const VERIFIED_STAYS = [
  {
    id: 'manali-riverside',
    name: 'Old Manali Apple Orchard Riverside Homestay',
    place: 'Old Manali, Himachal Pradesh',
    category: 'riverside',
    pricePerNightINR: 1400,
    rating: 4.9,
    reviewsCount: 310,
    heroImage: 'images/manali.jpg',
    wifiSpeed: '120 Mbps (Airtel Fiber)',
    stayType: 'Traditional Himachali Wooden Guesthouse',
    meals: 'Organic homemade Siddu, Rajma Chawal & Mountain Herbal Teas',
    highlights: ['Direct access to Manalsu River', 'Workation friendly workstations', 'Evening bonfire in apple orchard'],
    hostName: 'Thakur Family',
    phone: '+919931000000'
  },
  {
    id: 'jibhi-wooden-cottage',
    name: 'Jibhi Pine Valley Cedar Chalet',
    place: 'Jibhi, Tirthan Valley, HP',
    category: 'workation',
    pricePerNightINR: 2200,
    rating: 4.95,
    reviewsCount: 180,
    heroImage: 'images/jibhi.jpg',
    wifiSpeed: '100 Mbps (Jio Fiber)',
    stayType: 'Handcrafted Deodar Wood Chalet',
    meals: 'Fresh Tirthan River Trout, Himachali Kadi & Farm Fresh Salads',
    highlights: ['Panoramic view of Jalori Pass ridge', 'Wood-fired Bukhari heaters', 'Walking distance to Jibhi Waterfall'],
    hostName: 'Rana Brothers',
    phone: '+919931000000'
  },
  {
    id: 'leh-traditional-homestay',
    name: 'Upper Tukcha Ladakhi Heritage Homestay',
    place: 'Leh Main Valley, Ladakh',
    category: 'heritage',
    pricePerNightINR: 1800,
    rating: 4.88,
    reviewsCount: 240,
    heroImage: 'images/leh.jpg',
    wifiSpeed: '60 Mbps (Airtel AirFiber)',
    stayType: 'Authentic Solar-Heated Mudbrick House',
    meals: 'Hot Thukpa, Tingmo with homemade Apricot Jam & Butter Tea',
    highlights: ['View of Leh Palace & Shanti Stupa', 'Heated rooms with electric blankets', 'Doctor on-call with Oxygen concentrator'],
    hostName: 'Dorje Family',
    phone: '+919931000000'
  },
  {
    id: 'spiti-langza-mudhouse',
    name: 'Langza Fossil Village Stargazer Mudhouse',
    place: 'Langza Village (4,400m), Spiti Valley',
    category: 'budget',
    pricePerNightINR: 1200,
    rating: 4.92,
    reviewsCount: 140,
    heroImage: 'images/spiti.jpg',
    wifiSpeed: 'BSNL Wi-Fi / Basic Data',
    stayType: 'Traditional Spitian High-Altitude Mudhouse',
    meals: 'Spitian Barley Soup (Tsampa), Steamed Momos & Yak Cheese',
    highlights: ['Direct view of Giant Buddha Statue & Chau Chau Kang Nilda peak', 'Zero light pollution Milky Way stargazing', 'Local fossil discovery trail'],
    hostName: 'Tenzin & Family',
    phone: '+919931000000'
  },
  {
    id: 'varkala-cliff-hostel',
    name: 'Varkala North Cliff Ocean Breeze Villa',
    place: 'North Cliff, Varkala, Kerala',
    category: 'riverside',
    pricePerNightINR: 1100,
    rating: 4.85,
    reviewsCount: 420,
    heroImage: 'images/varkala.jpg',
    wifiSpeed: '150 Mbps (Fiber WiFi)',
    stayType: 'Bohemian Surfers & Digital Nomad Stay',
    meals: 'Kerala Appam with stew, Fresh Coconut Water & Seafood Thali',
    highlights: ['2-minute walk to red cliff sunset promenade', 'Surfboard rentals & yoga mats included', 'Rooftop hammock deck'],
    hostName: 'Sujith & Crew',
    phone: '+919931000000'
  },
  {
    id: 'munnar-cardamom-estate',
    name: 'Munnar Mist Heritage Plantation Bungalow',
    place: 'Chithirapuram, Munnar, Kerala',
    category: 'heritage',
    pricePerNightINR: 2800,
    rating: 4.94,
    reviewsCount: 290,
    heroImage: 'images/munnar.jpg',
    wifiSpeed: '90 Mbps (BSNL Fiber)',
    stayType: 'Colonial Era Estate Bungalow',
    meals: 'Authentic 18-dish Sadya on Banana Leaf & Spiced Cardamom Chai',
    highlights: ['Nestled inside 15-acre organic spice forest', 'Private waterfall stream inside estate', 'Morning guided birdwatching walks'],
    hostName: 'Kurian Family',
    phone: '+919931000000'
  },
  {
    id: 'rishikesh-ganga-coliving',
    name: 'Tapovan Ganga View Co-Living & Yoga Shala',
    place: 'Tapovan, Rishikesh, Uttarakhand',
    category: 'workation',
    pricePerNightINR: 1300,
    rating: 4.89,
    reviewsCount: 510,
    heroImage: 'images/rishikesh.jpg',
    wifiSpeed: '200 Mbps Dual-Band Fiber',
    stayType: 'Boutique Co-Living & Yoga Studio',
    meals: 'Ayurvedic Sattvic organic meals & Cold-pressed smoothies',
    highlights: ['Rooftop view of Ganga river & mountain foothills', 'Daily morning community yoga & meditation', 'Silent air-conditioned work cubicles'],
    hostName: 'Swami & Team',
    phone: '+919931000000'
  }
];

window.VERIFIED_STAYS = VERIFIED_STAYS;
