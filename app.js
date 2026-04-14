/* ============================================
   PlantIQ — Smart Plant Care Application
   Main Application Logic
   ============================================ */

// ── Plant Data Store ──
const plantData = [
  {
    id: 1,
    name: "Peace Lily",
    species: "Spathiphyllum",
    location: "Living Room",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&h=400&fit=crop",
    health: 92,
    status: "healthy",
    type: "indoor",
    moisture: 85,
    light: 65,
    nutrient: 78,
    lastWatered: "2026-04-12",
    wateringFreq: 3,
    nextWatering: "2026-04-15",
    notes: "Prefers indirect light, keep soil moist"
  },
  {
    id: 2,
    name: "Monstera",
    species: "Monstera deliciosa",
    location: "Bedroom",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=400&fit=crop",
    health: 88,
    status: "healthy",
    type: "indoor",
    moisture: 72,
    light: 80,
    nutrient: 70,
    lastWatered: "2026-04-11",
    wateringFreq: 5,
    nextWatering: "2026-04-16",
    notes: "Tropical plant, loves humidity"
  },
  {
    id: 3,
    name: "Snake Plant",
    species: "Sansevieria trifasciata",
    location: "Office",
    image: "https://images.unsplash.com/photo-1572688484438-313a56e6a252?w=400&h=400&fit=crop",
    health: 95,
    status: "healthy",
    type: "indoor",
    moisture: 40,
    light: 55,
    nutrient: 82,
    lastWatered: "2026-04-08",
    wateringFreq: 14,
    nextWatering: "2026-04-22",
    notes: "Very low maintenance, drought tolerant"
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    species: "Ficus lyrata",
    location: "Living Room",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop",
    health: 58,
    status: "warning",
    type: "indoor",
    moisture: 35,
    light: 45,
    nutrient: 50,
    lastWatered: "2026-04-09",
    wateringFreq: 7,
    nextWatering: "2026-04-16",
    notes: "Sensitive to changes, needs bright indirect light"
  },
  {
    id: 5,
    name: "Aloe Vera",
    species: "Aloe barbadensis",
    location: "Kitchen",
    image: "https://images.unsplash.com/photo-1567331711402-509c12c41959?w=400&h=400&fit=crop",
    health: 76,
    status: "healthy",
    type: "indoor",
    moisture: 30,
    light: 90,
    nutrient: 65,
    lastWatered: "2026-04-07",
    wateringFreq: 10,
    nextWatering: "2026-04-17",
    notes: "Succulent, needs well-draining soil"
  },
  {
    id: 6,
    name: "Golden Pothos",
    species: "Epipremnum aureum",
    location: "Bathroom",
    image: "https://images.unsplash.com/photo-1572969176557-753aacc44910?w=400&h=400&fit=crop",
    health: 45,
    status: "warning",
    type: "indoor",
    moisture: 25,
    light: 30,
    nutrient: 40,
    lastWatered: "2026-04-06",
    wateringFreq: 5,
    nextWatering: "2026-04-11",
    notes: "Trailing vine, tolerates low light"
  }
];

// ── Disease Library Data ──
const diseaseLibrary = [
  { name: "Powdery Mildew", type: "Fungal", severity: "medium", dots: 3, description: "White powdery spots on leaves and stems." },
  { name: "Root Rot", type: "Fungal", severity: "high", dots: 5, description: "Caused by overwatering, roots become brown and mushy." },
  { name: "Leaf Spot", type: "Bacterial", severity: "medium", dots: 3, description: "Dark spots with yellow halos on leaves." },
  { name: "Aphid Infestation", type: "Pest", severity: "low", dots: 2, description: "Tiny insects clustering on new growth." },
  { name: "Spider Mites", type: "Pest", severity: "medium", dots: 3, description: "Fine webbing and stippled leaves." },
  { name: "Nitrogen Deficiency", type: "Nutrient", severity: "low", dots: 2, description: "Yellowing of older leaves from the bottom up." },
  { name: "Botrytis (Gray Mold)", type: "Fungal", severity: "high", dots: 4, description: "Gray fuzzy mold on flowers and leaves." },
  { name: "Scale Insects", type: "Pest", severity: "medium", dots: 3, description: "Small brown bumps on stems and leaf undersides." }
];

// ── Task/Reminder Data ──
const tasks = [
  { id: 1, type: "water", name: "Water Peace Lily", plant: "Peace Lily — Living Room", time: "Tomorrow", urgency: "soon" },
  { id: 2, type: "fertilize", name: "Fertilize Monstera", plant: "Monstera — Bedroom", time: "In 2 days", urgency: "" },
  { id: 3, type: "water", name: "Water Golden Pothos", plant: "Golden Pothos — Bathroom", time: "Overdue!", urgency: "urgent" },
  { id: 4, type: "prune", name: "Prune dead leaves", plant: "Fiddle Leaf Fig — Living Room", time: "In 3 days", urgency: "" },
  { id: 5, type: "water", name: "Water Aloe Vera", plant: "Aloe Vera — Kitchen", time: "In 4 days", urgency: "" },
  { id: 6, type: "repot", name: "Repot Snake Plant", plant: "Snake Plant — Office", time: "In 7 days", urgency: "" }
];

// ── Activity Log ──
const activities = [
  { text: "Watered Peace Lily", time: "2 hours ago", color: "sky" },
  { text: "Monstera health improved to 88%", time: "5 hours ago", color: "green" },
  { text: "Golden Pothos needs watering", time: "Yesterday", color: "red" },
  { text: "Fiddle Leaf Fig showing signs of stress", time: "Yesterday", color: "amber" },
  { text: "Added new Aloe Vera plant", time: "2 days ago", color: "green" },
  { text: "Snake Plant soil pH adjusted", time: "3 days ago", color: "sky" },
  { text: "Environmental sensors calibrated", time: "4 days ago", color: "green" },
  { text: "Watering schedule updated", time: "5 days ago", color: "sky" }
];

// ── Simulated Disease Analysis Results ──
const diseaseResults = [
  {
    name: "Leaf Spot Disease",
    confidence: 78,
    level: "medium",
    description: "Leaf spot disease is identified by dark, circular spots on the foliage. It's typically caused by fungal pathogens that thrive in humid conditions. Early detection is crucial to prevent spreading.",
    treatments: [
      "Remove affected leaves immediately and dispose of them",
      "Improve air circulation around the plant",
      "Avoid overhead watering — water at soil level",
      "Apply a copper-based organic fungicide",
      "Reduce humidity levels if possible"
    ]
  },
  {
    name: "Minor Nutrient Deficiency",
    confidence: 45,
    level: "low",
    description: "Some yellowing patterns suggest a possible nutrient deficiency, likely nitrogen or iron. This is common when plants outgrow their soil nutrients.",
    treatments: [
      "Apply balanced liquid fertilizer at half strength",
      "Check soil pH — optimal range is 6.0 to 7.0",
      "Consider repotting with fresh nutrient-rich soil",
      "Monitor new growth for improvement"
    ]
  }
];

// ══════════════════════════════════════════════
// APPLICATION INITIALIZATION
// ══════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderDashboard();
  renderPlants();
  renderDiseaseLibrary();
  renderCalendar();
  renderReminders();
  drawRadarChart();
  drawEnvironmentChart();
  initDiseaseScanner();
  initModal();
  initMobileMenu();
  animateOnLoad();
});

// ── Navigation ──
function initNavigation() {
  document.querySelectorAll('.nav-item[data-page]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const page = item.dataset.page;
      navigateTo(page);
    });
  });
}

function navigateTo(page) {
  // Update nav items
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navItem = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (navItem) navItem.classList.add('active');

  // Update page sections
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  const section = document.getElementById(`page-${page}`);
  if (section) section.classList.add('active');

  // Update header
  const titles = {
    dashboard: { title: 'Dashboard', subtitle: 'Welcome back, Nihal! Your plants are looking great.' },
    plants: { title: 'My Plants', subtitle: 'Manage and track all your plants.' },
    disease: { title: 'Disease Scanner', subtitle: 'Upload a photo to detect plant diseases.' },
    environment: { title: 'Environment', subtitle: 'Monitor temperature, humidity, and light levels.' },
    reminders: { title: 'Reminders', subtitle: 'Stay on top of your plant care schedule.' }
  };

  const t = titles[page] || titles.dashboard;
  document.getElementById('pageTitle').textContent = t.title;
  document.getElementById('pageSubtitle').textContent = t.subtitle;

  // Close mobile menu
  closeMobileMenu();

  // Redraw charts if needed
  if (page === 'environment') {
    setTimeout(() => drawEnvironmentChart(), 100);
  }
  if (page === 'dashboard') {
    setTimeout(() => drawRadarChart(), 100);
  }
}

// ── Dashboard Rendering ──
function renderDashboard() {
  renderTasks();
  renderActivityFeed();
}

function renderTasks() {
  const container = document.getElementById('taskList');
  const taskIcons = { water: '💧', fertilize: '🌱', repot: '🪴', prune: '✂️' };

  container.innerHTML = tasks.slice(0, 5).map(task => `
    <div class="task-item" id="task-${task.id}">
      <div class="task-icon ${task.type}">${taskIcons[task.type]}</div>
      <div class="task-details">
        <div class="task-name">${task.name}</div>
        <div class="task-plant">${task.plant}</div>
      </div>
      <span class="task-time ${task.urgency}">${task.time}</span>
      <div class="task-check" onclick="completeTask(${task.id}, event)" data-tooltip="Mark done"></div>
    </div>
  `).join('');
}

function completeTask(id, event) {
  event.stopPropagation();
  const check = event.target;
  check.classList.toggle('done');
  if (check.classList.contains('done')) {
    check.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
    showToast('Task Completed', 'Great job keeping your plants healthy!', 'success');
  } else {
    check.innerHTML = '';
  }
}

function renderActivityFeed() {
  const container = document.getElementById('activityList');
  container.innerHTML = activities.map(act => `
    <div class="activity-item">
      <div class="activity-dot ${act.color}"></div>
      <div>
        <div class="activity-text">${act.text}</div>
        <div class="activity-time">${act.time}</div>
      </div>
    </div>
  `).join('');
}

// ── Plants Page ──
function renderPlants(filter = 'all') {
  const container = document.getElementById('plantsGrid');
  let filtered = plantData;

  if (filter === 'healthy') filtered = plantData.filter(p => p.status === 'healthy');
  else if (filter === 'warning') filtered = plantData.filter(p => p.status === 'warning');
  else if (filter === 'indoor') filtered = plantData.filter(p => p.type === 'indoor');
  else if (filter === 'outdoor') filtered = plantData.filter(p => p.type === 'outdoor');

  container.innerHTML = filtered.map(plant => `
    <div class="plant-card" onclick="showPlantDetail(${plant.id})" id="plant-card-${plant.id}">
      <div class="plant-card-image">
        <img src="${plant.image}" alt="${plant.name}" loading="lazy">
        <span class="plant-status-badge ${plant.status}">
          ${plant.status === 'healthy' ? '✓ Healthy' : '⚠ Needs Care'}
        </span>
      </div>
      <div class="plant-card-body">
        <div class="plant-card-name">${plant.name}</div>
        <div class="plant-card-species">${plant.species}</div>
        <div class="plant-card-metrics">
          <div class="plant-metric">
            <div class="plant-metric-icon">💧</div>
            <div class="plant-metric-value">${plant.moisture}%</div>
            <div class="plant-metric-label">Moisture</div>
          </div>
          <div class="plant-metric">
            <div class="plant-metric-icon">☀️</div>
            <div class="plant-metric-value">${plant.light}%</div>
            <div class="plant-metric-label">Light</div>
          </div>
          <div class="plant-metric">
            <div class="plant-metric-icon">🌱</div>
            <div class="plant-metric-value">${plant.nutrient}%</div>
            <div class="plant-metric-label">Health</div>
          </div>
        </div>
      </div>
      <div class="plant-card-footer">
        <div class="plant-watering">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
          Next: ${formatDate(plant.nextWatering)}
        </div>
        <div class="plant-health-mini">
          <div class="plant-health-mini-indicator" style="left: ${plant.health}%"></div>
        </div>
      </div>
    </div>
  `).join('');

  // Filter pill events
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderPlants(pill.dataset.filter);
    });
  });
}

function showPlantDetail(id) {
  const plant = plantData.find(p => p.id === id);
  if (!plant) return;
  showToast(plant.name, `Health: ${plant.health}% | Location: ${plant.location} | ${plant.notes}`, 'success');
}

// ── Disease Scanner ──
function initDiseaseScanner() {
  const uploadZone = document.getElementById('uploadZone');
  const fileInput = document.getElementById('fileInput');
  const uploadBtn = document.getElementById('uploadBtn');
  const preview = document.getElementById('uploadPreview');
  const previewImg = document.getElementById('previewImage');
  const removeBtn = document.getElementById('removeImage');
  const analyzeBtn = document.getElementById('analyzeBtn');

  uploadBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    fileInput.click();
  });

  uploadZone.addEventListener('click', () => fileInput.click());

  uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('dragover');
  });

  uploadZone.addEventListener('dragleave', () => {
    uploadZone.classList.remove('dragover');
  });

  uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleImageUpload(file);
    }
  });

  fileInput.addEventListener('change', () => {
    if (fileInput.files[0]) {
      handleImageUpload(fileInput.files[0]);
    }
  });

  removeBtn.addEventListener('click', () => {
    preview.style.display = 'none';
    uploadZone.style.display = 'block';
    analyzeBtn.disabled = true;
    document.getElementById('diseaseResults').classList.remove('active');
    document.getElementById('diseaseResults').innerHTML = '';
  });

  analyzeBtn.addEventListener('click', () => {
    runDiseaseAnalysis();
  });
}

function handleImageUpload(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    document.getElementById('previewImage').src = e.target.result;
    document.getElementById('uploadPreview').style.display = 'block';
    document.getElementById('uploadZone').style.display = 'none';
    document.getElementById('analyzeBtn').disabled = false;
    document.getElementById('diseaseResults').classList.remove('active');
    document.getElementById('diseaseResults').innerHTML = '';
  };
  reader.readAsDataURL(file);
}

function runDiseaseAnalysis() {
  const analyzeBtn = document.getElementById('analyzeBtn');
  const resultsContainer = document.getElementById('diseaseResults');

  // Show loading
  analyzeBtn.disabled = true;
  analyzeBtn.innerHTML = '<div class="spinner"></div> Analyzing...';

  // Simulate analysis delay
  setTimeout(() => {
    // Random chance of healthy vs diseased
    const isHealthy = Math.random() > 0.6;

    if (isHealthy) {
      resultsContainer.innerHTML = `
        <div class="disease-result-card">
          <div class="healthy-result">
            <div class="healthy-icon">🌿</div>
            <div class="healthy-title">Your Plant Looks Healthy!</div>
            <div class="healthy-desc">No signs of disease or nutrient deficiency were detected. Keep up the great care!</div>
          </div>
        </div>
      `;
    } else {
      resultsContainer.innerHTML = diseaseResults.map(result => `
        <div class="disease-result-card">
          <div class="disease-name">${result.name}</div>
          <div class="disease-confidence">
            <span style="font-size:12px;color:var(--neutral-500);min-width:70px;">Confidence</span>
            <div class="confidence-bar">
              <div class="confidence-fill ${result.level}" style="width: ${result.confidence}%"></div>
            </div>
            <span class="confidence-value">${result.confidence}%</span>
          </div>
          <div class="disease-description">${result.description}</div>
          <div class="disease-treatment">
            <h4>💊 Recommended Treatment</h4>
            <ul>
              ${result.treatments.map(t => `<li>${t}</li>`).join('')}
            </ul>
          </div>
        </div>
      `).join('');
    }

    resultsContainer.classList.add('active');
    analyzeBtn.disabled = false;
    analyzeBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      Analyze Again
    `;
  }, 2500);
}

function renderDiseaseLibrary() {
  const container = document.getElementById('diseaseLibrary');
  container.innerHTML = diseaseLibrary.map(disease => `
    <div class="disease-lib-card">
      <div class="disease-lib-name">${disease.name}</div>
      <div class="disease-lib-type">${disease.type}</div>
      <div style="font-size:12px;color:var(--neutral-600);margin-bottom:10px;">${disease.description}</div>
      <div class="disease-lib-severity">
        <div class="severity-dots">
          ${Array.from({length: 5}, (_, i) => `
            <div class="severity-dot ${i < disease.dots ? `active ${disease.severity}` : ''}"></div>
          `).join('')}
        </div>
        <span class="severity-label ${disease.severity}">
          ${disease.severity === 'low' ? 'Low' : disease.severity === 'medium' ? 'Medium' : 'High'} Severity
        </span>
      </div>
    </div>
  `).join('');
}

// ── Radar Chart (Canvas) ──
function drawRadarChart() {
  const canvas = document.getElementById('environmentRadar');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const maxR = 80;

  ctx.clearRect(0, 0, w, h);

  const labels = ['Humidity', 'Light', 'Temp', 'Soil pH', 'Moisture', 'Air Flow'];
  const values = [0.72, 0.65, 0.85, 0.58, 0.80, 0.70];
  const count = labels.length;
  const angleStep = (Math.PI * 2) / count;

  // Draw grid circles
  for (let r = 1; r <= 4; r++) {
    ctx.beginPath();
    const radius = (maxR / 4) * r;
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = r === 4 ? '#d1cec7' : '#e5e2dc';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Draw axis lines
  for (let i = 0; i < count; i++) {
    const angle = angleStep * i - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(angle) * maxR, cy + Math.sin(angle) * maxR);
    ctx.strokeStyle = '#e5e2dc';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Draw data polygon
  ctx.beginPath();
  for (let i = 0; i < count; i++) {
    const angle = angleStep * i - Math.PI / 2;
    const r = values[i] * maxR;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();

  // Fill with gradient
  const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR);
  gradient.addColorStop(0, 'rgba(139, 198, 141, 0.4)');
  gradient.addColorStop(1, 'rgba(95, 169, 99, 0.15)');
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.strokeStyle = '#5fa963';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw data points
  for (let i = 0; i < count; i++) {
    const angle = angleStep * i - Math.PI / 2;
    const r = values[i] * maxR;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#4a8f4e';
    ctx.fill();
  }

  // Draw labels
  ctx.font = '11px Inter, sans-serif';
  ctx.fillStyle = '#5a5750';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (let i = 0; i < count; i++) {
    const angle = angleStep * i - Math.PI / 2;
    const labelR = maxR + 20;
    const x = cx + Math.cos(angle) * labelR;
    const y = cy + Math.sin(angle) * labelR;
    ctx.fillText(labels[i], x, y);
  }
}

// ── Environment Line Chart (Canvas) ──
function drawEnvironmentChart() {
  const canvas = document.getElementById('envChart');
  if (!canvas) return;

  const container = canvas.parentElement;
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;

  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const padding = { top: 20, right: 20, bottom: 40, left: 50 };
  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;

  ctx.clearRect(0, 0, w, h);

  // Generate 24-hour data
  const hours = Array.from({length: 24}, (_, i) => i);
  const tempData = hours.map(h => 20 + Math.sin(h / 4) * 4 + Math.random() * 2);
  const humidityData = hours.map(h => 55 + Math.cos(h / 5) * 10 + Math.random() * 5);
  const lightData = hours.map(h => {
    if (h < 6 || h > 20) return 50 + Math.random() * 30;
    return 400 + Math.sin((h - 6) / 14 * Math.PI) * 600 + Math.random() * 100;
  });

  // Scale functions
  const maxTemp = 30, minTemp = 16;
  const maxHum = 80, minHum = 40;
  const maxLight = 1200, minLight = 0;

  function scaleY(val, min, max) {
    return padding.top + chartH - ((val - min) / (max - min)) * chartH;
  }

  function scaleX(i) {
    return padding.left + (i / 23) * chartW;
  }

  // Grid lines
  ctx.strokeStyle = '#eceae4';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 5; i++) {
    const y = padding.top + (chartH / 5) * i;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(w - padding.right, y);
    ctx.stroke();
  }

  // X-axis labels
  ctx.font = '11px Inter, sans-serif';
  ctx.fillStyle = '#a8a49d';
  ctx.textAlign = 'center';
  for (let i = 0; i < 24; i += 3) {
    ctx.fillText(`${i}:00`, scaleX(i), h - 12);
  }

  // Y-axis labels (Temperature)
  ctx.fillStyle = '#e85d5d';
  ctx.textAlign = 'right';
  for (let i = 0; i <= 5; i++) {
    const val = minTemp + ((maxTemp - minTemp) / 5) * (5 - i);
    const y = padding.top + (chartH / 5) * i;
    ctx.fillText(`${Math.round(val)}°`, padding.left - 8, y + 4);
  }

  // Draw smooth line helper
  function drawSmoothLine(data, min, max, color, fillColor) {
    if (data.length < 2) return;

    ctx.beginPath();
    ctx.moveTo(scaleX(0), scaleY(data[0], min, max));
    for (let i = 1; i < data.length; i++) {
      const prevX = scaleX(i - 1);
      const prevY = scaleY(data[i - 1], min, max);
      const currX = scaleX(i);
      const currY = scaleY(data[i], min, max);
      const cpX = (prevX + currX) / 2;
      ctx.bezierCurveTo(cpX, prevY, cpX, currY, currX, currY);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Fill area under
    if (fillColor) {
      ctx.lineTo(scaleX(data.length - 1), padding.top + chartH);
      ctx.lineTo(scaleX(0), padding.top + chartH);
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartH);
      grad.addColorStop(0, fillColor);
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad;
      ctx.fill();
    }
  }

  // Draw lines
  drawSmoothLine(tempData, minTemp, maxTemp, '#e85d5d', 'rgba(232,93,93,0.08)');
  drawSmoothLine(humidityData, minHum, maxHum, '#5bb8f5', 'rgba(91,184,245,0.08)');
  drawSmoothLine(lightData, minLight, maxLight, '#f5c842', 'rgba(245,200,66,0.08)');

  // Legend
  const legendItems = [
    { label: 'Temperature', color: '#e85d5d' },
    { label: 'Humidity', color: '#5bb8f5' },
    { label: 'Light', color: '#f5c842' }
  ];
  let legendX = w - padding.right - 200;
  ctx.font = '11px Inter, sans-serif';
  legendItems.forEach(item => {
    ctx.fillStyle = item.color;
    ctx.beginPath();
    ctx.arc(legendX, padding.top - 4, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#5a5750';
    ctx.textAlign = 'left';
    ctx.fillText(item.label, legendX + 8, padding.top);
    legendX += 70;
  });
}

// ── Calendar ──
let currentCalDate = new Date(2026, 3, 1); // April 2026

function renderCalendar() {
  const grid = document.getElementById('calendarGrid');
  const monthLabel = document.getElementById('calendarMonth');

  const year = currentCalDate.getFullYear();
  const month = currentCalDate.getMonth();
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  monthLabel.textContent = `${monthNames[month]} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const today = new Date();

  // Task days (simulate)
  const taskDays = [2, 5, 8, 11, 13, 15, 17, 20, 22, 25, 28];

  let html = '';
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  dayNames.forEach(d => {
    html += `<div class="calendar-day-header">${d}</div>`;
  });

  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    html += `<div class="calendar-day other-month">${daysInPrevMonth - i}</div>`;
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
    const hasTask = taskDays.includes(d);
    const classes = ['calendar-day'];
    if (isToday) classes.push('today');
    if (hasTask) classes.push('has-task');
    html += `<div class="${classes.join(' ')}">${d}</div>`;
  }

  // Next month days
  const totalCells = firstDay + daysInMonth;
  const remaining = 42 - totalCells;
  for (let d = 1; d <= remaining; d++) {
    html += `<div class="calendar-day other-month">${d}</div>`;
  }

  grid.innerHTML = html;

  // Nav buttons
  document.getElementById('calPrev').onclick = () => {
    currentCalDate.setMonth(currentCalDate.getMonth() - 1);
    renderCalendar();
  };
  document.getElementById('calNext').onclick = () => {
    currentCalDate.setMonth(currentCalDate.getMonth() + 1);
    renderCalendar();
  };
}

function renderReminders() {
  const container = document.getElementById('reminderList');
  const reminderIcons = { water: '💧', fertilize: '🌱', prune: '✂️', repot: '🪴' };

  // Group tasks by time category
  const groups = [
    { label: 'Today', items: tasks.filter(t => t.urgency === 'urgent') },
    { label: 'Tomorrow', items: tasks.filter(t => t.time === 'Tomorrow') },
    { label: 'This Week', items: tasks.filter(t => !t.urgency && t.time !== 'Tomorrow' && !t.time.includes('Overdue')) }
  ];

  container.innerHTML = groups.filter(g => g.items.length > 0).map(group => `
    <div class="reminder-date-group">
      <div class="reminder-date">${group.label}</div>
      ${group.items.map(task => `
        <div class="reminder-item">
          <div class="reminder-type-icon ${task.type}">${reminderIcons[task.type]}</div>
          <div class="reminder-info">
            <div class="reminder-action">${task.name}</div>
            <div class="reminder-plant-name">${task.plant}</div>
          </div>
          <div class="reminder-time">${task.time}</div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

// ── Add Plant Modal ──
function initModal() {
  const modal = document.getElementById('addPlantModal');
  const openBtn = document.getElementById('addPlantBtn');
  const closeBtn = document.getElementById('modalClose');
  const cancelBtn = document.getElementById('modalCancel');
  const saveBtn = document.getElementById('savePlantBtn');

  openBtn.addEventListener('click', () => modal.classList.add('active'));
  closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  cancelBtn.addEventListener('click', () => modal.classList.remove('active'));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  saveBtn.addEventListener('click', () => {
    const name = document.getElementById('plantName').value;
    const species = document.getElementById('plantSpecies').value;
    const location = document.getElementById('plantLocation').value;
    const freq = document.getElementById('wateringFreq').value;

    if (!name || !species) {
      showToast('Missing Info', 'Please fill in the plant name and species.', 'warning');
      return;
    }

    // Add new plant
    const newPlant = {
      id: plantData.length + 1,
      name,
      species,
      location,
      image: `https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop`,
      health: 80 + Math.floor(Math.random() * 15),
      status: "healthy",
      type: "indoor",
      moisture: 60 + Math.floor(Math.random() * 30),
      light: 50 + Math.floor(Math.random() * 40),
      nutrient: 60 + Math.floor(Math.random() * 30),
      lastWatered: new Date().toISOString().split('T')[0],
      wateringFreq: parseInt(freq),
      nextWatering: getNextWateringDate(parseInt(freq)),
      notes: document.getElementById('plantNotes').value || ''
    };

    plantData.push(newPlant);
    renderPlants();
    modal.classList.remove('active');

    // Clear form
    document.getElementById('plantName').value = '';
    document.getElementById('plantNotes').value = '';

    // Update counts
    document.getElementById('plant-count-badge').textContent = plantData.length;
    document.getElementById('totalPlantsCount').textContent = plantData.length;

    showToast('Plant Added!', `${name} has been added to your collection.`, 'success');
  });
}

function getNextWateringDate(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

// ── Mobile Menu ──
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', closeMobileMenu);
}

function closeMobileMenu() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('active');
}

// ── Toast Notifications ──
function showToast(title, message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const icons = { success: '✅', warning: '⚠️', error: '❌' };
  const toastEl = document.createElement('div');
  toastEl.className = `toast ${type === 'warning' ? 'warning' : type === 'error' ? 'error' : ''}`;
  toastEl.innerHTML = `
    <span class="toast-icon">${icons[type]}</span>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
  `;
  container.appendChild(toastEl);

  // Auto-remove after 4 seconds
  setTimeout(() => {
    toastEl.style.opacity = '0';
    toastEl.style.transform = 'translateX(100px)';
    toastEl.style.transition = 'all 0.3s ease';
    setTimeout(() => toastEl.remove(), 300);
  }, 4000);
}

// ── Utility Functions ──
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const options = { month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// ── Animate on Load ──
function animateOnLoad() {
  // Animate health score number
  const scoreEl = document.getElementById('overallHealthScore');
  animateValue(scoreEl, 0, 0.82, 1200, true);

  // Animate stat cards
  document.querySelectorAll('.stat-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 200 + i * 100);
  });

  // Animate welcome banner
  const banner = document.querySelector('.welcome-banner');
  banner.style.opacity = '0';
  banner.style.transform = 'translateY(20px)';
  setTimeout(() => {
    banner.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    banner.style.opacity = '1';
    banner.style.transform = 'translateY(0)';
  }, 100);
}

function animateValue(el, start, end, duration, isDecimal = false) {
  let startTime = null;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    const current = start + (end - start) * eased;
    el.textContent = isDecimal ? current.toFixed(2) : Math.round(current);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ── Window Resize Handler ──
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    drawEnvironmentChart();
    drawRadarChart();
  }, 200);
});

// ── Keyboard Shortcuts ──
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('addPlantModal').classList.remove('active');
    closeMobileMenu();
  }
});

// ── Search functionality ──
document.getElementById('searchInput').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  if (!query) return;

  // Search through plants
  const matches = plantData.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.species.toLowerCase().includes(query) ||
    p.location.toLowerCase().includes(query)
  );

  if (matches.length > 0 && document.querySelector('.page-section.active').id !== 'page-plants') {
    navigateTo('plants');
  }
});
