/**
 * RAAHIYOO - Curated Thematic Collections Data Layer
 */

const COLLECTIONS_DATA = [
  {
    id: "himalayan-sanctuaries",
    title: "Himalayan Sanctuaries",
    subtitle: "High alpine ridges, ancient deodar canopies, and snow-mantled massifs.",
    tagline: "Where the Earth touches the sky",
    heroImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=85",
    description: "A curated journey through the most transcendent mountain retreats of the Garhwal, Kullu, and Eastern Himalayas.",
    destinationIds: ["tungnath", "landour", "manali", "darjeeling", "sikkim", "mussoorie"]
  },
  {
    id: "spiritual-gateways",
    title: "Spiritual Gateways of India",
    subtitle: "Sacred river ghats, ancient Jyotirlingas, and thousands of years of continuous Vedic devotion.",
    tagline: "Journeys that transform the inner seeker",
    heroImage: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=85",
    description: "Experience the timeless spiritual powerhouses where seekers, sages, and pilgrims have gathered across millennia.",
    destinationIds: ["rishikesh", "varanasi", "ayodhya", "tungnath", "sikkim"]
  },
  {
    id: "first-time-high-treks",
    title: "First-Time High-Altitude Treks",
    subtitle: "Accessible alpine summits, emerald bugyals, and natural hot spring summits.",
    tagline: "Step beyond the roads into raw mountain wilderness",
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",
    description: "Beginner to intermediate trekking routes that reward travelers with 360-degree snow views and alpine lakes.",
    destinationIds: ["tungnath", "valley-of-flowers", "kasol", "sikkim"]
  },
  {
    id: "offbeat-monsoon-retreats",
    title: "Offbeat Monsoon Retreats",
    subtitle: "Lush green hillocks, roaring tiered waterfalls, and mystical cloud kingdoms.",
    tagline: "When rains awaken the soul of the subcontinent",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    description: "Destinations that come alive with roaring cascades, emerald valleys, and misty romance during the monsoon.",
    destinationIds: ["valley-of-flowers", "goa", "udaipur", "landour"]
  },
  {
    id: "royal-heritage-circuits",
    title: "Royal Heritage & Palatial Circuits",
    subtitle: "Hilltop sandstone forts, floating lake palaces, and living traditions.",
    tagline: "Step into the grandeur of Rajasthan and Awadh",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=85",
    description: "Discover the architectural wonders, royal havelis, and valor-steeped palaces of Northern and Western India.",
    destinationIds: ["jaipur", "udaipur", "varanasi", "ayodhya", "shimla"]
  },
  {
    id: "weekend-mountain-escapes",
    title: "Quick Weekend Escapes",
    subtitle: "Refresh your spirit under pine-scented breezes under 6 to 8 hours from major metro hubs.",
    tagline: "The fast mountain reset for busy wanderers",
    heroImage: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1600&q=85",
    description: "Curated fast itineraries for 2-day resets with minimal transit friction and maximum mountain air.",
    destinationIds: ["landour", "mussoorie", "rishikesh", "jaipur", "shimla"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COLLECTIONS_DATA };
}
