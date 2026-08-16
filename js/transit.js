/**
 * RAAHIYOO 2.0 — GUARANTEED INTERACTIVE ENGLISH MAP & TRANSIT ROUTE ENGINE
 * Dynamically updates the SVG map pins, animated route arc, distances, and multi-modal transit cards.
 */

// 1. Comprehensive Database of Indian Departure Hubs & Cities
const INDIAN_CITIES_DB = {
  'delhi': { name: 'Delhi (NCR)', code: 'DEL / NDLS', coords: [28.6139, 77.2090] },
  'new delhi': { name: 'New Delhi', code: 'NDLS', coords: [28.6139, 77.2090] },
  'ncr': { name: 'Delhi NCR', code: 'DEL', coords: [28.6139, 77.2090] },
  'gurugram': { name: 'Gurugram', code: 'GGN', coords: [28.4595, 77.0266] },
  'gurgaon': { name: 'Gurgaon', code: 'GGN', coords: [28.4595, 77.0266] },
  'noida': { name: 'Noida', code: 'NOIDA', coords: [28.5355, 77.3910] },
  'ghaziabad': { name: 'Ghaziabad', code: 'GZB', coords: [28.6692, 77.4538] },
  'faridabad': { name: 'Faridabad', code: 'FDB', coords: [28.4089, 77.3178] },
  'mumbai': { name: 'Mumbai', code: 'BOM / CSMT', coords: [19.0760, 72.8777] },
  'bombay': { name: 'Mumbai', code: 'BOM', coords: [19.0760, 72.8777] },
  'thane': { name: 'Thane', code: 'TNA', coords: [19.2183, 72.9781] },
  'navi mumbai': { name: 'Navi Mumbai', code: 'NMM', coords: [19.0330, 73.0297] },
  'patna': { name: 'Patna', code: 'PAT / PNBE', coords: [25.5941, 85.1376] },
  'bengaluru': { name: 'Bengaluru', code: 'BLR / SBC', coords: [12.9716, 77.5946] },
  'bangalore': { name: 'Bengaluru', code: 'BLR', coords: [12.9716, 77.5946] },
  'kolkata': { name: 'Kolkata', code: 'CCU / HWH', coords: [22.5726, 88.3639] },
  'calcutta': { name: 'Kolkata', code: 'CCU', coords: [22.5726, 88.3639] },
  'pune': { name: 'Pune', code: 'PNQ / PUNE', coords: [18.5204, 73.8567] },
  'hyderabad': { name: 'Hyderabad', code: 'HYD / SC', coords: [17.3850, 78.4867] },
  'secunderabad': { name: 'Secunderabad', code: 'SC', coords: [17.4399, 78.4983] },
  'ahmedabad': { name: 'Ahmedabad', code: 'AMD / ADI', coords: [23.0225, 72.5714] },
  'jaipur': { name: 'Jaipur', code: 'JAI / JP', coords: [26.9124, 75.7873] },
  'lucknow': { name: 'Lucknow', code: 'LKO / LJN', coords: [26.8467, 80.9462] },
  'chandigarh': { name: 'Chandigarh', code: 'IXC / CDG', coords: [30.7333, 76.7794] },
  'varanasi': { name: 'Varanasi', code: 'VNS / BSB', coords: [25.3176, 82.9739] },
  'kashi': { name: 'Varanasi (Kashi)', code: 'BSB', coords: [25.3176, 82.9739] },
  'banaras': { name: 'Varanasi', code: 'BSB', coords: [25.3176, 82.9739] },
  'chennai': { name: 'Chennai', code: 'MAA / MAS', coords: [13.0827, 80.2707] },
  'madras': { name: 'Chennai', code: 'MAA', coords: [13.0827, 80.2707] },
  'kanpur': { name: 'Kanpur', code: 'CNB', coords: [26.4499, 80.3319] },
  'nagpur': { name: 'Nagpur', code: 'NAG / NGP', coords: [21.1458, 79.0882] },
  'indore': { name: 'Indore', code: 'IDR / INDB', coords: [22.7196, 75.8577] },
  'bhopal': { name: 'Bhopal', code: 'BHO / BPL', coords: [23.2599, 77.4126] },
  'surat': { name: 'Surat', code: 'ST', coords: [21.1702, 72.8311] },
  'vadodara': { name: 'Vadodara', code: 'BDQ / BRC', coords: [22.3072, 73.1812] },
  'agra': { name: 'Agra', code: 'AGR / AGC', coords: [27.1767, 78.0081] },
  'prayagraj': { name: 'Prayagraj', code: 'PRYJ', coords: [25.4358, 81.8463] },
  'allahabad': { name: 'Prayagraj', code: 'PRYJ', coords: [25.4358, 81.8463] },
  'ranchi': { name: 'Ranchi', code: 'IXR / RNC', coords: [23.3441, 85.3096] },
  'jamshedpur': { name: 'Jamshedpur', code: 'TATA', coords: [22.8046, 86.2029] },
  'dhanbad': { name: 'Dhanbad', code: 'DHN', coords: [23.7957, 86.4304] },
  'gaya': { name: 'Gaya', code: 'GAY / GAYA', coords: [24.7914, 85.0002] },
  'muzaffarpur': { name: 'Muzaffarpur', code: 'MFP', coords: [26.1226, 85.3906] },
  'amritsar': { name: 'Amritsar', code: 'ATQ / ASR', coords: [31.6200, 74.8765] },
  'ludhiana': { name: 'Ludhiana', code: 'LDH', coords: [30.9010, 75.8573] },
  'jalandhar': { name: 'Jalandhar', code: 'JUC', coords: [31.3260, 75.5762] },
  'dehradun': { name: 'Dehradun', code: 'DED / DDN', coords: [30.3165, 78.0322] },
  'haridwar': { name: 'Haridwar', code: 'HW', coords: [29.9457, 78.1642] },
  'rishikesh': { name: 'Rishikesh', code: 'RKSH / YNRK', coords: [30.0869, 78.2676] },
  'shimla': { name: 'Shimla', code: 'SLV / SML', coords: [31.1048, 77.1734] },
  'manali': { name: 'Manali', code: 'KUU', coords: [32.2396, 77.1887] },
  'dharamshala': { name: 'Dharamshala', code: 'DHM', coords: [32.2190, 76.3234] },
  'guwahati': { name: 'Guwahati', code: 'GAU / GHY', coords: [26.1445, 91.7362] },
  'bhubaneswar': { name: 'Bhubaneswar', code: 'BBI / BBS', coords: [20.2961, 85.8245] },
  'cuttack': { name: 'Cuttack', code: 'CTC', coords: [20.4625, 85.8830] },
  'puri': { name: 'Puri', code: 'PURI', coords: [19.8135, 85.8312] },
  'raipur': { name: 'Raipur', code: 'RPR', coords: [21.2514, 81.6296] },
  'kochi': { name: 'Kochi', code: 'COK / ERS', coords: [9.9312, 76.2673] },
  'cochin': { name: 'Kochi', code: 'COK', coords: [9.9312, 76.2673] },
  'trivandrum': { name: 'Thiruvananthapuram', code: 'TRV / TVC', coords: [8.5241, 76.9366] },
  'thiruvananthapuram': { name: 'Thiruvananthapuram', code: 'TRV', coords: [8.5241, 76.9366] },
  'kozhikode': { name: 'Kozhikode', code: 'CCJ / CLT', coords: [11.2588, 75.7804] },
  'coimbatore': { name: 'Coimbatore', code: 'CJB / CBE', coords: [11.0168, 76.9558] },
  'madurai': { name: 'Madurai', code: 'IXM / MDU', coords: [9.9252, 78.1198] },
  'mysuru': { name: 'Mysuru', code: 'MYA / MYS', coords: [12.2958, 76.6394] },
  'mysore': { name: 'Mysuru', code: 'MYS', coords: [12.2958, 76.6394] },
  'mangalore': { name: 'Mangaluru', code: 'IXE / MAQ', coords: [12.9141, 74.8560] },
  'mangaluru': { name: 'Mangaluru', code: 'IXE', coords: [12.9141, 74.8560] },
  'goa': { name: 'Goa', code: 'GOI / GOX / MAO', coords: [15.2993, 74.1240] },
  'panaji': { name: 'Panaji', code: 'MAO', coords: [15.4909, 73.8278] },
  'srinagar': { name: 'Srinagar', code: 'SXR', coords: [34.0837, 74.7973] },
  'jammu': { name: 'Jammu', code: 'IXJ / JAT', coords: [32.7266, 74.8570] },
  'leh': { name: 'Leh Ladakh', code: 'IXL', coords: [34.1526, 77.5771] },
  'ladakh': { name: 'Ladakh', code: 'IXL', coords: [34.1526, 77.5771] },
  'jodhpur': { name: 'Jodhpur', code: 'JDH / JU', coords: [26.2389, 73.0243] },
  'udaipur': { name: 'Udaipur', code: 'UDR / UDZ', coords: [24.5854, 73.7125] },
  'jaisalmer': { name: 'Jaisalmer', code: 'JSA', coords: [26.9157, 70.9083] },
  'bikaner': { name: 'Bikaner', code: 'BKN', coords: [28.0229, 73.3119] },
  'ajmer': { name: 'Ajmer', code: 'AII', coords: [26.4499, 74.6399] },
  'gwalior': { name: 'Gwalior', code: 'GWL', coords: [26.2183, 78.1828] },
  'jabalpur': { name: 'Jabalpur', code: 'JBP', coords: [23.1815, 79.9864] },
  'ujjain': { name: 'Ujjain', code: 'UJN', coords: [23.1765, 75.7885] },
  'ayodhya': { name: 'Ayodhya', code: 'AY / AYC', coords: [26.7922, 82.1998] },
  'gorakhpur': { name: 'Gorakhpur', code: 'GOP / GKP', coords: [26.7606, 83.3732] },
  'bareilly': { name: 'Bareilly', code: 'BE', coords: [28.3670, 79.4304] },
  'meerut': { name: 'Meerut', code: 'MTC', coords: [28.9845, 77.7064] },
  'mathura': { name: 'Mathura', code: 'MTJ', coords: [27.4924, 77.6737] },
  'vrindavan': { name: 'Vrindavan', code: 'BDB', coords: [27.5806, 77.7006] }
};

// 2. Destination Coordinates Dataset
const DESTINATION_COORDS_DB = {
  'leh-ladakh': [34.1526, 77.5771],
  'spiti-valley': [32.2461, 78.0349],
  'manali': [32.2396, 77.1887],
  'srinagar': [34.0837, 74.7973],
  'gulmarg': [34.0484, 74.3805],
  'pahalgam': [34.0150, 75.3150],
  'rishikesh': [30.0869, 78.2676],
  'kedarnath': [30.7352, 79.0669],
  'badrinath': [30.7433, 79.4938],
  'auli': [30.5284, 79.5674],
  'amritsar': [31.6200, 74.8765],
  'jaipur': [26.9124, 75.7873],
  'udaipur': [24.5854, 73.7125],
  'jaisalmer': [26.9157, 70.9083],
  'jodhpur': [26.2389, 73.0243],
  'rann-of-kutch': [23.8346, 69.8354],
  'varanasi': [25.3176, 82.9739],
  'agra': [27.1767, 78.0081],
  'ayodhya': [26.7922, 82.1998],
  'ujjain': [23.1765, 75.7885],
  'goa': [15.2993, 74.1240],
  'munnar': [10.0889, 77.0595],
  'alleppey': [9.4981, 76.3388],
  'varkala': [8.7379, 76.7163],
  'hampi': [15.3350, 76.4600],
  'coorg': [12.3375, 75.8069],
  'andaman': [11.9761, 92.9876],
  'rameswaram': [9.2876, 79.3129],
  'darjeeling': [27.0410, 88.2663],
  'gangtok': [27.3389, 88.6065],
  'shillong': [25.5788, 91.8933]
};

document.addEventListener('DOMContentLoaded', () => {
  initTransitHub();
});

/**
 * Smart Fuzzy Resolver for Origin City
 */
function resolveCityCoords(query) {
  if (!query) return { name: 'Delhi (NCR)', code: 'DEL / NDLS', coords: [28.6139, 77.2090] };
  const cleanQ = query.toLowerCase().trim();

  // 1. Direct match
  if (INDIAN_CITIES_DB[cleanQ]) {
    return INDIAN_CITIES_DB[cleanQ];
  }

  // 2. Substring match
  for (const key in INDIAN_CITIES_DB) {
    if (cleanQ.includes(key) || key.includes(cleanQ)) {
      return INDIAN_CITIES_DB[key];
    }
  }

  // 3. Match from DESTINATIONS dataset
  if (typeof DESTINATIONS !== 'undefined') {
    const matchedDest = DESTINATIONS.find(d => 
      d.name.toLowerCase().includes(cleanQ) || 
      d.state.toLowerCase().includes(cleanQ) ||
      d.id.toLowerCase().includes(cleanQ)
    );

    if (matchedDest && DESTINATION_COORDS_DB[matchedDest.id]) {
      return { name: matchedDest.name, code: matchedDest.state, coords: DESTINATION_COORDS_DB[matchedDest.id] };
    }
  }

  return { name: query, code: 'HUB', coords: [28.6139, 77.2090] };
}

/**
 * Smart Resolver for Destination
 */
function resolveDestInfo(destIdOrQuery) {
  if (!destIdOrQuery) return { id: 'leh-ladakh', name: 'Leh Ladakh & Pangong', coords: [34.1526, 77.5771], destObj: (typeof DESTINATIONS !== 'undefined' ? DESTINATIONS[0] : null) };
  const q = destIdOrQuery.toLowerCase().trim();

  if (typeof DESTINATIONS !== 'undefined') {
    const found = DESTINATIONS.find(d => 
      d.id === q || 
      d.name.toLowerCase() === q ||
      d.name.toLowerCase().includes(q) ||
      d.tags.some(t => t.toLowerCase().includes(q))
    ) || DESTINATIONS[0];

    const coords = DESTINATION_COORDS_DB[found.id] || [34.1526, 77.5771];
    return { id: found.id, name: found.name, destObj: found, coords };
  }

  return { id: 'leh-ladakh', name: 'Leh Ladakh & Pangong', coords: [34.1526, 77.5771], destObj: null };
}

/**
 * Great-Circle Distance (in km)
 */
function calculateDistanceKM(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

/**
 * Project Geographic [Lat, Lng] to SVG Map Canvas (ViewBox: 900x520)
 */
function projectToSVG(lat, lng) {
  const minLat = 7.5;
  const maxLat = 37.0;
  const minLng = 68.0;
  const maxLng = 97.0;

  const x = ((lng - minLng) / (maxLng - minLng)) * (900 - 180) + 90;
  const y = 520 - 50 - ((lat - minLat) / (maxLat - minLat)) * (520 - 100);
  return { x: Math.round(x), y: Math.round(y) };
}

/**
 * Global Select Function for Starting Origin Hubs
 */
window.selectTransitOrigin = function(cityName) {
  const originInput = document.getElementById('transitOriginInput');
  const originDropdown = document.getElementById('transitOriginDropdown');
  if (originInput) {
    originInput.value = cityName;
  }
  if (originDropdown) {
    originDropdown.classList.remove('active');
  }

  // Highlight active pill
  document.querySelectorAll('.transit-quick-pill[onclick*="selectTransitOrigin"]').forEach(pill => {
    const isThis = pill.getAttribute('onclick').includes(`'${cityName}'`);
    pill.classList.toggle('active', isThis);
  });

  updateTransitRouteAndMap();
};

/**
 * Global Select Function for Destination Trips
 */
window.selectTransitDest = function(destId, destName) {
  const destInput = document.getElementById('transitDestInput');
  const destIdField = document.getElementById('transitDestId');
  const destDropdown = document.getElementById('transitDestDropdown');

  if (destInput) destInput.value = destName;
  if (destIdField) destIdField.value = destId;
  if (destDropdown) destDropdown.classList.remove('active');

  // Highlight active pill
  document.querySelectorAll('.transit-quick-pill[onclick*="selectTransitDest"]').forEach(pill => {
    const isThis = pill.getAttribute('onclick').includes(`'${destId}'`);
    pill.classList.toggle('active', isThis);
  });

  updateTransitRouteAndMap();
};

/**
 * Initialize Input Event Listeners
 */
function initTransitHub() {
  const originInput = document.getElementById('transitOriginInput');
  const originDropdown = document.getElementById('transitOriginDropdown');
  const clearOriginBtn = document.getElementById('clearOriginBtn');

  const destInput = document.getElementById('transitDestInput');
  const destDropdown = document.getElementById('transitDestDropdown');
  const clearDestBtn = document.getElementById('clearDestBtn');

  if (!originInput || !destInput) return;

  // 1. Origin Input Suggestions
  function renderOriginSuggestions(val = '') {
    const q = val.toLowerCase().trim();
    const cityKeys = Object.keys(INDIAN_CITIES_DB);

    const matches = cityKeys.filter(k => 
      !q || k.includes(q) || INDIAN_CITIES_DB[k].name.toLowerCase().includes(q)
    ).slice(0, 7);

    if (matches.length === 0) {
      originDropdown.innerHTML = `
        <div style="padding: 0.85rem; text-align: center; color: #64748b; font-size: 0.9rem;">
          Using "<strong>${val}</strong>" as departure location.
        </div>
      `;
    } else {
      originDropdown.innerHTML = `
        <div class="suggest-section-title">🛫 Select Departure Hub</div>
        ${matches.map(k => {
          const item = INDIAN_CITIES_DB[k];
          return `
            <div class="suggest-item" onclick="selectTransitOrigin('${item.name}')">
              <div class="suggest-icon" style="background: rgba(16, 185, 129, 0.1); color: #059669;">🚆</div>
              <div class="suggest-info">
                <div class="suggest-name">${item.name}</div>
                <div class="suggest-sub">${item.code} &bull; Departure Hub</div>
              </div>
            </div>
          `;
        }).join('')}
      `;
    }
    originDropdown.classList.add('active');
  }

  originInput.addEventListener('focus', () => renderOriginSuggestions(originInput.value));
  originInput.addEventListener('input', (e) => {
    renderOriginSuggestions(e.target.value);
    updateTransitRouteAndMap();
  });

  if (clearOriginBtn) {
    clearOriginBtn.addEventListener('click', () => {
      originInput.value = '';
      originInput.focus();
      renderOriginSuggestions('');
      updateTransitRouteAndMap();
    });
  }

  // 2. Destination Input Suggestions
  function renderDestSuggestions(val = '') {
    if (typeof DESTINATIONS === 'undefined') return;
    const q = val.toLowerCase().trim();

    const matches = DESTINATIONS.filter(d => 
      !q || 
      d.name.toLowerCase().includes(q) || 
      d.state.toLowerCase().includes(q) ||
      d.tags.some(t => t.toLowerCase().includes(q))
    ).slice(0, 7);

    if (matches.length === 0) {
      destDropdown.innerHTML = `
        <div style="padding: 0.85rem; text-align: center; color: #64748b; font-size: 0.9rem;">
          No destinations found for "${val}".
        </div>
      `;
    } else {
      destDropdown.innerHTML = `
        <div class="suggest-section-title">📍 Matching Destinations</div>
        ${matches.map(d => `
          <div class="suggest-item" onclick="selectTransitDest('${d.id}', '${d.name}')">
            <img src="${d.heroImage}" alt="${d.name}" style="width: 38px; height: 38px; border-radius: 8px; object-fit: cover;" />
            <div class="suggest-info">
              <div class="suggest-name">${d.name}</div>
              <div class="suggest-sub">${d.state} &bull; ${d.elevation}</div>
            </div>
            <span class="suggest-badge">★ ${d.rating}</span>
          </div>
        `).join('')}
      `;
    }
    destDropdown.classList.add('active');
  }

  destInput.addEventListener('focus', () => renderDestSuggestions(destInput.value));
  destInput.addEventListener('input', (e) => {
    const destIdField = document.getElementById('transitDestId');
    if (destIdField) destIdField.value = '';
    renderDestSuggestions(e.target.value);
    updateTransitRouteAndMap();
  });

  if (clearDestBtn) {
    clearDestBtn.addEventListener('click', () => {
      destInput.value = '';
      const destIdField = document.getElementById('transitDestId');
      if (destIdField) destIdField.value = '';
      destInput.focus();
      renderDestSuggestions('');
      updateTransitRouteAndMap();
    });
  }

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.transit-input-col')) {
      if (originDropdown) originDropdown.classList.remove('active');
      if (destDropdown) destDropdown.classList.remove('active');
    }
  });

  // Initial update
  updateTransitRouteAndMap();
}

/**
 * Master Function: Reactively updates the visible SVG map elements and multi-modal transit cards
 */
function updateTransitRouteAndMap() {
  const originInput = document.getElementById('transitOriginInput');
  const destInput = document.getElementById('transitDestInput');
  const destIdField = document.getElementById('transitDestId');
  const routeDisplay = document.getElementById('transitResultBox');

  const originText = (originInput ? originInput.value : 'Delhi').trim() || 'Delhi';
  const destQuery = destIdField && destIdField.value ? destIdField.value : (destInput ? destInput.value : 'leh-ladakh');

  const originInfo = resolveCityCoords(originText);
  const destInfo = resolveDestInfo(destQuery);
  const dest = destInfo.destObj || (typeof DESTINATIONS !== 'undefined' ? DESTINATIONS[0] : null);

  if (!dest) return;

  const distKM = calculateDistanceKM(originInfo.coords[0], originInfo.coords[1], destInfo.coords[0], destInfo.coords[1]);
  const flightHrs = Math.max(1, (distKM / 650).toFixed(1));
  const roadHrs = Math.max(2, Math.round(distKM / 55));
  const trainHrs = Math.max(3, Math.round(distKM / 70));

  // Project coordinates to SVG canvas
  const pOrigin = projectToSVG(originInfo.coords[0], originInfo.coords[1]);
  const pDest = projectToSVG(destInfo.coords[0], destInfo.coords[1]);

  // Calculate curved path midpoint
  const midX = Math.round((pOrigin.x + pDest.x) / 2);
  const midY = Math.round((pOrigin.y + pDest.y) / 2 - 35);

  // 1. Update Map HUD Text & Stats
  const mapTitle = document.getElementById('mapRouteTitle');
  const mapStats = document.getElementById('mapStatsBar');
  if (mapTitle) mapTitle.textContent = `GPS Radar: ${originInfo.name} ➔ ${dest.name}`;
  if (mapStats) {
    mapStats.innerHTML = `
      <span>📏 ~${distKM.toLocaleString('en-IN')} KM</span>
      <span>&bull;</span>
      <span style="color: #60a5fa;">✈️ ~${flightHrs}h</span>
      <span>&bull;</span>
      <span style="color: #fbbf24;">🚆 ~${trainHrs}h</span>
      <span>&bull;</span>
      <span style="color: #f87171;">🚗 ~${roadHrs}h</span>
    `;
  }

  // 2. Update Origin Pin Position & Label in SVG
  const svgOriginPin = document.getElementById('svgOriginPin');
  const svgOriginText = document.getElementById('svgOriginText');
  if (svgOriginPin) svgOriginPin.setAttribute('transform', `translate(${pOrigin.x}, ${pOrigin.y})`);
  if (svgOriginText) svgOriginText.textContent = originInfo.name;

  // 3. Update Destination Pin Position & Label in SVG
  const svgDestPin = document.getElementById('svgDestPin');
  const svgDestText = document.getElementById('svgDestText');
  if (svgDestPin) svgDestPin.setAttribute('transform', `translate(${pDest.x}, ${pDest.y})`);
  if (svgDestText) svgDestText.textContent = dest.name;

  // 4. Update Animated Route Arc in SVG
  const svgRouteArc = document.getElementById('svgRouteArc');
  if (svgRouteArc) {
    svgRouteArc.setAttribute('d', `M ${pOrigin.x} ${pOrigin.y} Q ${midX} ${midY} ${pDest.x} ${pDest.y}`);
  }

  // 5. Update Midpoint Info Badge in SVG
  const svgMidpointBadge = document.getElementById('svgMidpointBadge');
  const svgMidpointText = document.getElementById('svgMidpointText');
  if (svgMidpointBadge) svgMidpointBadge.setAttribute('transform', `translate(${midX}, ${midY})`);
  if (svgMidpointText) svgMidpointText.textContent = `⚡ ~${distKM} KM`;

  // 6. Update Dynamic Route Blueprint Cards Below
  if (routeDisplay) {
    routeDisplay.innerHTML = `
      <div style="background: #ffffff; border: 1.5px solid var(--border-light); border-radius: 24px; padding: clamp(1.5rem, 4vw, 2.5rem); box-shadow: var(--shadow-md); margin-top: 1.5rem;">
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.75rem;">
          <div>
            <div style="font-family: monospace; font-size: 0.8rem; font-weight: 700; color: #ff6b35; text-transform: uppercase;">
              Verified Multi-Modal Route Blueprint
            </div>
            <h3 style="font-size: clamp(1.4rem, 3.5vw, 1.8rem); color: #0f172a; margin: 0.2rem 0 0;">
              ${originInfo.name} ➔ ${dest.name} (~${distKM.toLocaleString('en-IN')} km)
            </h3>
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <span style="background: rgba(255, 107, 53, 0.1); color: #ff6b35; padding: 0.35rem 0.85rem; border-radius: 9999px; font-weight: 700; font-size: 0.82rem; font-family: monospace;">
              📍 ${dest.state}
            </span>
            <span style="background: rgba(16, 185, 129, 0.1); color: #059669; padding: 0.35rem 0.85rem; border-radius: 9999px; font-weight: 700; font-size: 0.82rem; font-family: monospace;">
              🏔️ ${dest.elevation}
            </span>
          </div>
        </div>

        <!-- TRANSIT SUMMARY -->
        <div style="background: #f8fafc; border-left: 4px solid #ff6b35; padding: 1.25rem; border-radius: 8px; font-size: 1.05rem; color: #334155; line-height: 1.65; margin-bottom: 2rem;">
          <strong>Route Overview from ${originInfo.name}:</strong> ${dest.transitSummary}
        </div>

        <!-- 3 MULTI-MODAL CARDS -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
          
          <!-- Flight -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 1.25rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 1.3rem;">✈️</span>
                <strong style="color: #0f172a; font-size: 1.1rem;">By Flight</strong>
              </div>
              <span style="font-family: monospace; font-size: 0.78rem; font-weight: 700; color: #0284c7; background: #e0f2fe; padding: 0.2rem 0.5rem; border-radius: 6px;">~${flightHrs} Hours</span>
            </div>
            <p style="margin: 0 0 0.5rem; color: #475569; font-size: 0.92rem; line-height: 1.5;">
              Fly from ${originInfo.name} (${originInfo.code}) to:
            </p>
            <div style="font-family: monospace; font-size: 0.85rem; font-weight: 700; color: #0284c7; background: #e0f2fe; padding: 0.35rem 0.6rem; border-radius: 6px;">
              ${dest.nearestHubs.airport}
            </div>
          </div>

          <!-- Train -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 1.25rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 1.3rem;">🚆</span>
                <strong style="color: #0f172a; font-size: 1.1rem;">By Train</strong>
              </div>
              <span style="font-family: monospace; font-size: 0.78rem; font-weight: 700; color: #059669; background: #d1fae5; padding: 0.2rem 0.5rem; border-radius: 6px;">~${trainHrs} Hours</span>
            </div>
            <p style="margin: 0 0 0.5rem; color: #475569; font-size: 0.92rem; line-height: 1.5;">
              Direct / Vande Bharat trains from ${originInfo.name} to:
            </p>
            <div style="font-family: monospace; font-size: 0.85rem; font-weight: 700; color: #059669; background: #d1fae5; padding: 0.35rem 0.6rem; border-radius: 6px;">
              ${dest.nearestHubs.railway}
            </div>
          </div>

          <!-- Road -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 1.25rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 1.3rem;">🚗</span>
                <strong style="color: #0f172a; font-size: 1.1rem;">By Road / Cab</strong>
              </div>
              <span style="font-family: monospace; font-size: 0.78rem; font-weight: 700; color: #b45309; background: #fef3c7; padding: 0.2rem 0.5rem; border-radius: 6px;">~${roadHrs} Hours</span>
            </div>
            <p style="margin: 0 0 0.5rem; color: #475569; font-size: 0.92rem; line-height: 1.5;">
              National Highway driving blueprint:
            </p>
            <div style="font-family: monospace; font-size: 0.85rem; font-weight: 700; color: #b45309; background: #fef3c7; padding: 0.35rem 0.6rem; border-radius: 6px;">
              ${dest.nearestHubs.road}
            </div>
          </div>

        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; border-top: 1px solid #e2e8f0; padding-top: 1.25rem;">
          <div style="font-size: 0.95rem; color: #64748b;">
            Recommended Duration: <strong>${dest.idealDays}</strong> &bull; Best Season: <strong>${dest.bestTime}</strong>
          </div>
          <a href="destination.html?id=${dest.id}" class="btn btn-primary btn-sm">
            Open Full ${dest.name} Guide &rarr;
          </a>
        </div>

      </div>
    `;
  }
}
