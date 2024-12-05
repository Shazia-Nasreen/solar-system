const planetSearchInput = document.getElementById('planet-search');
const planetsContainer = document.getElementById('planets-container');
const planetDetails = document.getElementById('planet-details');
const closeDetailsButton = document.getElementById('close-details');

// Hämta API-nyckel med en POST-förfrågan
async function getApiKey() {
  const response = await fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys', {
    method: 'POST'
  });
  const data = await response.json();
  return data.key; // Returnera API-nyckeln
}

// Hämta planetdata med en GET-förfrågan
async function fetchPlanetsData(apiKey) {
  const response = await fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
    method: 'GET',
    headers: {
      'x-zocom': apiKey
    }
  });
  const data = await response.json();
  return data; // Returnera information om planeter
}

// Lägg till planeter i DOM
function displayPlanets(planets) {
  planetsContainer.innerHTML = '';
  planets.forEach(planet => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');
    planetDiv.innerHTML = `<h3>${planet.name}</h3>`;
    planetDiv.addEventListener('click', () => showPlanetDetails(planet));
    planetsContainer.appendChild(planetDiv);
  });
}

// Visa planetdetaljer
function showPlanetDetails(planet) {
  planetDetails.classList.remove('hidden');
  document.getElementById('planet-name').textContent = planet.name;
  document.getElementById('planet-desc').textContent = planet.desc;
  document.getElementById('planet-day-temp').textContent = planet.temp.day;
  document.getElementById('planet-night-temp').textContent = planet.temp.night;
  document.getElementById('planet-distance').textContent = planet.distance;
  document.getElementById('planet-orbital-period').textContent = planet.orbitalPeriod;
  document.getElementById('planet-moons').textContent = planet.moons.join(', ') || 'Inga månar';
}

// Stäng planetdetaljer
closeDetailsButton.addEventListener('click', () => {
  planetDetails.classList.add('hidden');
});

// Filtrering för sökning
planetSearchInput.addEventListener('input', () => {
  const query = planetSearchInput.value.toLowerCase();
  const filteredPlanets = planets.filter(planet => planet.name.toLowerCase().includes(query));
  displayPlanets(filteredPlanets);
});

// Initiering
async function init() {
  const apiKey = await getApiKey();
  const data = await fetchPlanetsData(apiKey);
  planets = data.bodies.filter(body => body.type === 'planet'); // Filtrera endast planeter
  displayPlanets(planets);
}

// Starta webbplatsen
init();
