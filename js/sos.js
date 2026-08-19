/**
 * RAAHIYOO 2.0 — MOUNTAIN EMERGENCY SOS & HIGH-ALTITUDE MEDICAL ENGINE
 * Verified medical lifelines, oxygen cylinder hubs, and mountain rescue directories.
 */

const NATIONAL_SOS = [
  { service: 'National All-in-One Emergency', number: '112', desc: 'Direct link to Police, Fire & Medical anywhere in India' },
  { service: 'Medical Ambulance Helpline', number: '108', desc: '24/7 Government Emergency Medical Ambulance' },
  { service: 'Disaster Management Control (NDRF)', number: '1078', desc: 'Landslide, Flood & Avalanches Rescue Response' },
  { service: 'BRO Mountain Road Clearance Helpline', number: '011-25686000', desc: 'Border Roads Organisation Highway Control' }
];

const OXYGEN_HUBS = [
  {
    region: 'Ladakh (Leh, Nubra, Pangong, Kargil)',
    locations: [
      { name: 'SNM District Hospital Oxygen Center', place: 'Leh Main City', phone: '+91 1982 252014', address: 'Hospital Road, Leh 194101 (24x7 ICU & High-Altitude Wing)' },
      { name: 'Diskit Community Health Centre', place: 'Nubra Valley', phone: '+91 1980 220023', address: 'Near Main Market, Diskit, Nubra Valley' },
      { name: 'Kargil District Hospital', place: 'Kargil Junction', phone: '+91 1985 232223', address: 'Baroo, Kargil, Ladakh 194103' }
    ]
  },
  {
    region: 'Spiti Valley & Lahaul (Himachal Pradesh)',
    locations: [
      { name: 'Community Health Centre (CHC) Kaza', place: 'Kaza (Spiti Valley)', phone: '+91 1906 222256', address: 'Main Kaza, Spiti (Equipped with High Altitude Oxygen Beds)' },
      { name: 'Civil Hospital Keylong', place: 'Keylong (Lahaul)', phone: '+91 1900 222255', address: 'Keylong Main Road (Near Manali-Leh Highway)' },
      { name: 'Regional Hospital Reckong Peo', place: 'Reckong Peo (Kinnaur)', phone: '+91 1786 222228', address: 'Reckong Peo, Kinnaur, HP' }
    ]
  },
  {
    region: 'Uttarakhand High Peaks (Kedarnath & Badrinath)',
    locations: [
      { name: 'Joshimath Community Health Centre', place: 'Joshimath / Badrinath', phone: '+91 1389 222120', address: 'Upper Bazaar, Joshimath (Base for Badrinath & Hemkund Sahib)' },
      { name: 'Guptkashi Primary Health Centre', place: 'Guptkashi / Sonprayag', phone: '+91 1364 267232', address: 'Kedarnath Highway Base, Guptkashi' }
    ]
  },
  {
    region: 'North Sikkim (Lachung, Lachen, Gurudongmar)',
    locations: [
      { name: 'Mangan District Hospital', place: 'Mangan (North Sikkim Hub)', phone: '+91 3592 234244', address: 'Mangan, North Sikkim (Permit & Medical Base)' },
      { name: 'STNM Multi-Specialty Hospital', place: 'Gangtok', phone: '+91 3592 202944', address: 'Sochakgang, Sichey, Gangtok 737101' }
    ]
  }
];

const AMS_PROTOCOL = [
  { step: 1, action: 'Stop Ascending Immediately', desc: 'Never climb higher with symptoms (headache, nausea, dizziness, insomnia).' },
  { step: 2, action: 'Administer Oxygen & Hydration', desc: 'Inhale medical oxygen at 2–4 Liters/min. Drink warm water with electrolytes (electral/ORS).' },
  { step: 3, action: 'Mandatory Descent (500m – 1000m)', desc: 'If symptoms do not improve within 2 hours, immediately descend to lower altitude.' },
  { step: 4, action: 'Emergency Contact', desc: 'Dial 112 / 108 or contact nearest Army / ITBP / BRO post on mountain highways.' }
];

window.NATIONAL_SOS = NATIONAL_SOS;
window.OXYGEN_HUBS = OXYGEN_HUBS;
window.AMS_PROTOCOL = AMS_PROTOCOL;
