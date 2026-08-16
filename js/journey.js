/**
 * RAAHIYOO — Interactive Multi-Modal Transit Planner
 * Origin-to-Destination routing engine with step-by-step guidance
 */

document.addEventListener('DOMContentLoaded', () => {
  initHowToReachPlanner();
});

function initHowToReachPlanner() {
  const originSelect = document.getElementById('plannerOriginSelect');
  const destSelect = document.getElementById('plannerDestSelect');
  const resultCard = document.getElementById('plannerResultContainer');

  if (!originSelect || !destSelect || !resultCard || typeof DESTINATIONS_DATA === 'undefined') return;

  // Populate Destination dropdown
  destSelect.innerHTML = DESTINATIONS_DATA.map(d => `
    <option value="${d.id}">${d.name} (${d.state})</option>
  `).join('');

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('to')) {
    destSelect.value = urlParams.get('to');
  }
  if (urlParams.has('from')) {
    originSelect.value = urlParams.get('from');
  }

  function calculateAndRenderRoute() {
    const origin = originSelect.value;
    const destId = destSelect.value;
    const dest = DESTINATIONS_DATA.find(d => d.id === destId) || DESTINATIONS_DATA[0];

    const matchedExample = dest.howToReach.originExamples.find(
      ex => ex.from.toLowerCase() === origin.toLowerCase()
    ) || dest.howToReach.originExamples[0];

    resultCard.innerHTML = `
      <div class="route-guide-card">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
          <div>
            <div class="section-eyebrow">Trip Blueprint</div>
            <h3 style="font-size: 1.7rem; color: #fff; margin-top: 0.25rem;">
              ${origin} &rarr; ${dest.name}
            </h3>
          </div>
          <span class="badge badge-orange">${dest.region}</span>
        </div>

        <div style="background-color: var(--bg-tertiary); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 2rem; border-left: 3px solid var(--accent-orange);">
          <strong>Route Summary:</strong> ${matchedExample.routeSummary}
        </div>

        <div class="route-mode-grid">
          <div class="route-mode-card">
            <div class="route-mode-header">
              <div class="route-mode-icon">🚆</div>
              <div class="route-mode-title">By Train</div>
            </div>
            <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">${matchedExample.byTrain}</p>
            <div style="margin-top: 0.75rem; font-family: var(--font-mono); font-size: 0.78rem; color: var(--accent-gold);">
              Nearest Station: ${dest.howToReach.nearestRailway}
            </div>
          </div>

          <div class="route-mode-card">
            <div class="route-mode-header">
              <div class="route-mode-icon">✈️</div>
              <div class="route-mode-title">By Flight</div>
            </div>
            <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">${matchedExample.byFlight}</p>
            <div style="margin-top: 0.75rem; font-family: var(--font-mono); font-size: 0.78rem; color: var(--accent-gold);">
              Nearest Airport: ${dest.howToReach.nearestAirport}
            </div>
          </div>

          <div class="route-mode-card">
            <div class="route-mode-header">
              <div class="route-mode-icon">🚌</div>
              <div class="route-mode-title">By Bus</div>
            </div>
            <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">${matchedExample.byBus}</p>
          </div>

          <div class="route-mode-card">
            <div class="route-mode-header">
              <div class="route-mode-icon">🚗</div>
              <div class="route-mode-title">By Road</div>
            </div>
            <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">${matchedExample.byRoad}</p>
            <div style="margin-top: 0.75rem; font-family: var(--font-mono); font-size: 0.78rem; color: var(--accent-gold);">
              Highway: ${dest.howToReach.roadConnectivity}
            </div>
          </div>
        </div>

        <!-- VISUAL WAYPOINTS -->
        <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border-subtle);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
            <h4 style="font-size: 1.15rem; color: #fff;">Visual Waypoint Timeline</h4>
            <span class="badge badge-emerald">Simple Steps</span>
          </div>
          <div class="route-timeline-nodes">
            <div class="timeline-node">
              <div class="timeline-node-title">1. Depart from ${origin}</div>
              <div class="timeline-node-desc">Take the train, flight, or start early highway drive.</div>
            </div>
            <div class="timeline-node">
              <div class="timeline-node-title">2. Transit Gateway (${dest.howToReach.nearestRailway.split('&')[0].trim()})</div>
              <div class="timeline-node-desc">Arrive at airport or station: ${dest.howToReach.nearestAirport}.</div>
            </div>
            <div class="timeline-node">
              <div class="timeline-node-title">3. Last-Mile Mountain Road</div>
              <div class="timeline-node-desc">${dest.howToReach.roadConnectivity}</div>
            </div>
            <div class="timeline-node">
              <div class="timeline-node-title">4. Welcome to ${dest.name}!</div>
              <div class="timeline-node-desc">${dest.howToReach.localTransport}</div>
            </div>
          </div>
        </div>

        <div style="margin-top: 2rem; display: flex; justify-content: flex-end;">
          <a href="destination.html?id=${dest.id}" class="btn btn-primary">
            Open Complete ${dest.name} Guide &rarr;
          </a>
        </div>
      </div>
    `;
  }

  originSelect.addEventListener('change', calculateAndRenderRoute);
  destSelect.addEventListener('change', calculateAndRenderRoute);

  calculateAndRenderRoute();
}
