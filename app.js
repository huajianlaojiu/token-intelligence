﻿// === TOKEN INTELLIGENCE v3 -- Global Landscape & Data ===
// Last updated: 2025-06-11

// === COMPREHENSIVE GLOBAL TOKEN PRICING DATA ===
// Prices per 1M tokens USD. Some are estimates based on public regional cloud pricing.
// * = verified public API price, ~ = estimated from regional pricing

const REGIONS = {
  NA: 'North America', CN: 'China', EU: 'Europe',
  ME: 'Middle East', KR: 'South Korea', JP: 'Japan',
  IN: 'India', SEA: 'SE Asia', RU: 'Russia'
};

const TOKEN_DATA = [
  // === NORTH AMERICA ===
  { provider: 'OpenAI', model: 'GPT-4o', inputPrice: 2.50, outputPrice: 10.00, context: '128K', region: 'NA', color: '#10a37f', verified: true },
  { provider: 'OpenAI', model: 'GPT-4o-mini', inputPrice: 0.15, outputPrice: 0.60, context: '128K', region: 'NA', color: '#10a37f', verified: true },
  { provider: 'OpenAI', model: 'GPT-4.1', inputPrice: 2.00, outputPrice: 8.00, context: '1M', region: 'NA', color: '#10a37f', verified: true },
  { provider: 'OpenAI', model: 'GPT-4.1-mini', inputPrice: 0.40, outputPrice: 1.60, context: '1M', region: 'NA', color: '#10a37f', verified: true },
  { provider: 'OpenAI', model: 'GPT-4.1-nano', inputPrice: 0.10, outputPrice: 0.40, context: '1M', region: 'NA', color: '#10a37f', verified: true },
  { provider: 'OpenAI', model: 'o3-mini', inputPrice: 1.10, outputPrice: 4.40, context: '200K', region: 'NA', color: '#10a37f', verified: true },
  { provider: 'Anthropic', model: 'Claude 4 Sonnet', inputPrice: 3.00, outputPrice: 15.00, context: '200K', region: 'NA', color: '#d97706', verified: true },
  { provider: 'Anthropic', model: 'Claude 3.5 Sonnet', inputPrice: 3.00, outputPrice: 15.00, context: '200K', region: 'NA', color: '#d97706', verified: true },
  { provider: 'Anthropic', model: 'Claude 3 Opus', inputPrice: 15.00, outputPrice: 75.00, context: '200K', region: 'NA', color: '#d97706', verified: true },
  { provider: 'Anthropic', model: 'Claude 3 Haiku', inputPrice: 0.25, outputPrice: 1.25, context: '200K', region: 'NA', color: '#d97706', verified: true },
  { provider: 'Google', model: 'Gemini 2.5 Pro', inputPrice: 1.25, outputPrice: 10.00, context: '1M', region: 'NA', color: '#4285f4', verified: true },
  { provider: 'Google', model: 'Gemini 2.5 Flash', inputPrice: 0.15, outputPrice: 0.60, context: '1M', region: 'NA', color: '#4285f4', verified: true },
  { provider: 'Google', model: 'Gemini 2.0 Flash', inputPrice: 0.10, outputPrice: 0.40, context: '1M', region: 'NA', color: '#4285f4', verified: true },
  { provider: 'Meta', model: 'Llama 3.3 70B', inputPrice: 0.59, outputPrice: 0.79, context: '128K', region: 'NA', color: '#0668e1', verified: true },
  { provider: 'Meta', model: 'Llama 3.1 405B', inputPrice: 2.68, outputPrice: 3.58, context: '128K', region: 'NA', color: '#0668e1', verified: true },
  { provider: 'xAI', model: 'Grok 3 Beta', inputPrice: 5.00, outputPrice: 15.00, context: '128K', region: 'NA', color: '#e5e7eb', verified: true },
  { provider: 'Cohere', model: 'Command R+', inputPrice: 2.50, outputPrice: 10.00, context: '128K', region: 'NA', color: '#ec4899', verified: true },
  { provider: 'AI21', model: 'Jamba 1.5 Large', inputPrice: 2.00, outputPrice: 8.00, context: '256K', region: 'NA', color: '#14b8a6', verified: true },
  { provider: 'Amazon', model: 'Nova Pro', inputPrice: 1.00, outputPrice: 4.00, context: '300K', region: 'NA', color: '#ff9900', verified: true },
  { provider: 'Amazon', model: 'Nova Lite', inputPrice: 0.15, outputPrice: 0.60, context: '300K', region: 'NA', color: '#ff9900', verified: true },
  { provider: 'Writer', model: 'Palmyra X 004', inputPrice: 3.00, outputPrice: 12.00, context: '256K', region: 'NA', color: '#a855f7', verified: false },

  // === CHINA ===
  { provider: 'DeepSeek', model: 'DeepSeek V3', inputPrice: 0.27, outputPrice: 1.10, context: '64K', region: 'CN', color: '#6366f1', verified: true },
  { provider: 'DeepSeek', model: 'DeepSeek R1', inputPrice: 0.55, outputPrice: 2.19, context: '64K', region: 'CN', color: '#6366f1', verified: true },
  { provider: 'Alibaba', model: 'Qwen3-235B', inputPrice: 2.20, outputPrice: 8.80, context: '128K', region: 'CN', color: '#ff6a00', verified: false },
  { provider: 'Alibaba', model: 'Qwen-Max', inputPrice: 2.80, outputPrice: 11.20, context: '32K', region: 'CN', color: '#ff6a00', verified: true },
  { provider: 'Alibaba', model: 'Qwen-Plus', inputPrice: 0.80, outputPrice: 3.20, context: '128K', region: 'CN', color: '#ff6a00', verified: true },
  { provider: 'Alibaba', model: 'Qwen-Turbo', inputPrice: 0.30, outputPrice: 0.60, context: '128K', region: 'CN', color: '#ff6a00', verified: true },
  { provider: 'Baidu', model: 'ERNIE 4.0 Turbo', inputPrice: 4.20, outputPrice: 16.80, context: '128K', region: 'CN', color: '#2932e1', verified: false },
  { provider: 'Baidu', model: 'ERNIE 3.5', inputPrice: 1.20, outputPrice: 4.80, context: '8K', region: 'CN', color: '#2932e1', verified: false },
  { provider: 'Zhipu AI', model: 'GLM-4-Plus', inputPrice: 7.00, outputPrice: 7.00, context: '128K', region: 'CN', color: '#3b5998', verified: true },
  { provider: 'Zhipu AI', model: 'GLM-4-Flash', inputPrice: 0.10, outputPrice: 0.10, context: '128K', region: 'CN', color: '#3b5998', verified: true },
  { provider: 'ByteDance', model: 'Doubao-Pro-256K', inputPrice: 0.80, outputPrice: 3.20, context: '256K', region: 'CN', color: '#00c4cc', verified: true },
  { provider: 'ByteDance', model: 'Doubao-Lite', inputPrice: 0.10, outputPrice: 0.40, context: '256K', region: 'CN', color: '#00c4cc', verified: true },
  { provider: 'Moonshot AI', model: 'Kimi', inputPrice: 1.60, outputPrice: 6.40, context: '128K', region: 'CN', color: '#8b5cf6', verified: false },
  { provider: '01.AI', model: 'Yi-Lightning', inputPrice: 0.20, outputPrice: 0.80, context: '128K', region: 'CN', color: '#06b6d4', verified: true },
  { provider: '01.AI', model: 'Yi-Large', inputPrice: 2.50, outputPrice: 10.00, context: '32K', region: 'CN', color: '#06b6d4', verified: true },
  { provider: 'Tencent', model: 'Hunyuan-Pro', inputPrice: 1.00, outputPrice: 4.00, context: '32K', region: 'CN', color: '#00c800', verified: false },
  { provider: 'Tencent', model: 'Hunyuan-Lite', inputPrice: 0.10, outputPrice: 0.40, context: '32K', region: 'CN', color: '#00c800', verified: false },
  { provider: 'SenseTime', model: 'SenseChat-5.0', inputPrice: 1.50, outputPrice: 6.00, context: '128K', region: 'CN', color: '#1e3a5f', verified: false },
  { provider: 'MiniMax', model: 'abab6.5s', inputPrice: 0.70, outputPrice: 2.80, context: '128K', region: 'CN', color: '#f472b6', verified: false },
  { provider: 'StepFun', model: 'Step-2', inputPrice: 2.00, outputPrice: 8.00, context: '128K', region: 'CN', color: '#84cc16', verified: false },
  { provider: 'Baichuan', model: 'Baichuan4', inputPrice: 1.40, outputPrice: 5.60, context: '128K', region: 'CN', color: '#dc2626', verified: false },

  // === EUROPE ===
  { provider: 'Mistral', model: 'Mistral Large 2', inputPrice: 4.00, outputPrice: 12.00, context: '128K', region: 'EU', color: '#f59e0b', verified: true },
  { provider: 'Mistral', model: 'Mistral Small', inputPrice: 0.20, outputPrice: 0.60, context: '32K', region: 'EU', color: '#f59e0b', verified: true },
  { provider: 'Aleph Alpha', model: 'Luminous Supreme', inputPrice: 5.00, outputPrice: 20.00, context: '2K', region: 'EU', color: '#9333ea', verified: false },

  // === MIDDLE EAST ===
  { provider: 'G42', model: 'Jais 30B', inputPrice: 0.50, outputPrice: 2.00, context: '2K', region: 'ME', color: '#0891b2', verified: false },
  { provider: 'TII', model: 'Falcon 3 180B', inputPrice: 0.80, outputPrice: 3.20, context: '32K', region: 'ME', color: '#c026d3', verified: false },

  // === SOUTH KOREA ===
  { provider: 'Naver', model: 'HyperCLOVA X', inputPrice: 1.50, outputPrice: 6.00, context: '32K', region: 'KR', color: '#03c75a', verified: false },
  { provider: 'LG AI', model: 'EXAONE 3.0', inputPrice: 1.00, outputPrice: 4.00, context: '32K', region: 'KR', color: '#a50064', verified: false },

  // === JAPAN ===
  { provider: 'PFN', model: 'PLaMo-100B', inputPrice: 2.00, outputPrice: 8.00, context: '32K', region: 'JP', color: '#dc143c', verified: false },
  { provider: 'Sakana AI', model: 'EvoLLM-JP', inputPrice: 0.60, outputPrice: 2.40, context: '32K', region: 'JP', color: '#ff7f50', verified: false },

  // === INDIA ===
  { provider: 'Sarvam AI', model: 'Sarvam-1', inputPrice: 0.30, outputPrice: 1.20, context: '8K', region: 'IN', color: '#ff9933', verified: false },
  { provider: 'Krutrim', model: 'Krutrim-2', inputPrice: 0.40, outputPrice: 1.60, context: '32K', region: 'IN', color: '#138808', verified: false },

  // === SOUTHEAST ASIA ===
  { provider: 'AI Singapore', model: 'SEA-LION v3', inputPrice: 0.50, outputPrice: 2.00, context: '32K', region: 'SEA', color: '#ed2939', verified: false },

  // === RUSSIA ===
  { provider: 'Yandex', model: 'YandexGPT 4', inputPrice: 1.00, outputPrice: 4.00, context: '8K', region: 'RU', color: '#fc3f1d', verified: false },
];

// Compute cost index and sort
TOKEN_DATA.forEach(d => {
  d.costIndex = Math.round((d.inputPrice * 0.7 + d.outputPrice * 0.3) * 10);
});
TOKEN_DATA.sort((a, b) => a.costIndex - b.costIndex);

// === STATE ===
let sortCol = 'costIndex';
let sortDir = 'asc';
let activeRegions = new Set();
let searchQuery = '';

const REGION_COLORS = {
  NA: '#3b82f6', CN: '#ef4444', EU: '#f59e0b',
  ME: '#0891b2', KR: '#03c75a', JP: '#dc143c',
  IN: '#ff9933', SEA: '#ed2939', RU: '#fc3f1d'
};

const REGION_NAMES = {
  NA: 'N.America', CN: 'China', EU: 'Europe', ME: 'Mid.East',
  KR: 'Korea', JP: 'Japan', IN: 'India', SEA: 'SE Asia', RU: 'Russia'
};

function getFilteredData() {
  let data = [...TOKEN_DATA];
  if (activeRegions.size > 0) {
    data = data.filter(d => activeRegions.has(d.region));
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    data = data.filter(d =>
      d.provider.toLowerCase().includes(q) ||
      d.model.toLowerCase().includes(q) ||
      d.region.toLowerCase().includes(q)
    );
  }
  data.sort((a, b) => {
    let va = a[sortCol], vb = b[sortCol];
    if (typeof va === 'string') { va = va.toLowerCase(); vb = vb.toLowerCase(); }
    if (sortDir === 'asc') return va > vb ? 1 : va < vb ? -1 : 0;
    return va < vb ? 1 : va > vb ? -1 : 0;
  });
  return data;
}

// === TABLE RENDER ===
function renderTable() {
  const tbody = document.getElementById('pricingTableBody');
  if (!tbody) return;
  const data = getFilteredData();
  const maxCI = Math.max(...TOKEN_DATA.map(d => d.costIndex));

  // Update header sort indicators
  document.querySelectorAll('#pricingTable thead th').forEach(th => {
    const col = th.dataset.sort;
    th.classList.remove('sorted-asc', 'sorted-desc');
    if (col === sortCol) th.classList.add(sortDir === 'asc' ? 'sorted-asc' : 'sorted-desc');
  });

  tbody.innerHTML = data.length
    ? data.map(d => {
        const ciClass = d.costIndex < maxCI * 0.15 ? 'cost-low' : d.costIndex < maxCI * 0.40 ? 'cost-mid' : 'cost-high';
        const ciLabel = d.costIndex < maxCI * 0.15 ? 'Budget' : d.costIndex < maxCI * 0.40 ? 'Value' : 'Premium';
        const vMark = d.verified ? '' : ' <span class="est-mark">est.</span>';
        return '<tr>' +
          '<td><div class="provider-cell"><span class="provider-dot" style="background:' + d.color + '"></span><span class="provider-name">' + d.provider + '</span><span class="region-tag region-' + d.region + '">' + d.region + '</span></div></td>' +
          '<td class="model-name">' + d.model + vMark + '</td>' +
          '<td class="num">$' + d.inputPrice.toFixed(2) + '</td>' +
          '<td class="num">$' + d.outputPrice.toFixed(2) + '</td>' +
          '<td class="num">' + d.context + '</td>' +
          '<td class="num"><span class="cost-index ' + ciClass + '">' + ciLabel + '</span></td>' +
          '<td></td>' +
          '</tr>';
      }).join('')
    : '<tr><td colspan="7" style="text-align:center;padding:24px;color:#64748b">No models match the current filters.</td></tr>';

  // Update result count
  const countEl = document.getElementById('filterCount');
  if (countEl) countEl.textContent = data.length + ' of ' + TOKEN_DATA.length + ' models';
}

// === SORT ===
function setupSorting() {
  document.querySelectorAll('#pricingTable thead th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.dataset.sort;
      if (sortCol === col) {
        sortDir = sortDir === 'asc' ? 'desc' : 'asc';
      } else {
        sortCol = col;
        sortDir = 'asc';
      }
      renderTable();
    });
  });
}

// === SEARCH ===
function setupSearch() {
  const input = document.getElementById('tableSearch');
  if (!input) return;
  input.addEventListener('input', () => {
    searchQuery = input.value;
    renderTable();
  });
}

// === REGION FILTER ===
function setupRegionFilter() {
  const container = document.getElementById('regionFilters');
  if (!container) return;
  const regionOrder = ['NA', 'CN', 'EU', 'KR', 'JP', 'ME', 'IN', 'SEA', 'RU'];
  container.innerHTML = regionOrder.map(r =>
    '<label class="region-filt"><input type="checkbox" value="' + r + '" class="region-cb">' +
    '<span class="region-filt-label region-' + r + '">' + r + '</span></label>'
  ).join('');

  document.querySelectorAll('.region-cb').forEach(cb => {
    cb.addEventListener('change', () => {
      if (cb.checked) activeRegions.add(cb.value);
      else activeRegions.delete(cb.value);
      renderTable();
    });
  });
}

// === REGIONAL CARDS ===
function renderRegionalCards() {
  const grid = document.getElementById('regionalGrid');
  if (!grid) return;
  const regions = {};
  TOKEN_DATA.forEach(d => {
    if (!regions[d.region]) regions[d.region] = { models: 0, providers: new Set(), minPrice: Infinity, maxPrice: 0 };
    regions[d.region].models++;
    regions[d.region].providers.add(d.provider);
    if (d.inputPrice < regions[d.region].minPrice) regions[d.region].minPrice = d.inputPrice;
    if (d.inputPrice > regions[d.region].maxPrice) regions[d.region].maxPrice = d.inputPrice;
  });

  const order = ['NA', 'CN', 'EU', 'ME', 'JP', 'KR', 'IN', 'SEA', 'RU'];
  grid.innerHTML = order.map(r => {
    const d = regions[r];
    if (!d) return '';
    const avg = Math.round((d.minPrice + d.maxPrice) / 2 * 100) / 100;
    return '<div class="regional-card">' +
      '<div class="regional-header">' +
        '<span class="regional-dot" style="background:' + REGION_COLORS[r] + '"></span>' +
        '<strong>' + REGION_NAMES[r] + '</strong>' +
      '</div>' +
      '<div class="regional-stats">' +
        '<span>' + d.providers.size + ' providers</span>' +
        '<span>' + d.models + ' models</span>' +
        '<span>$' + d.minPrice.toFixed(2) + ' - $' + d.maxPrice.toFixed(2) + '/M</span>' +
      '</div>' +
    '</div>';
  }).join('');
}

// === PROVIDER INSIGHTS ===
function renderInsights() {
  const grid = document.getElementById('providerInsights');
  if (!grid) return;
  const providers = {};
  TOKEN_DATA.forEach(d => {
    if (!providers[d.provider]) providers[d.provider] = { models: [], color: d.color, region: d.region };
    providers[d.provider].models.push(d);
  });
  const top8 = Object.entries(providers)
    .sort((a, b) => b[1].models.length - a[1].models.length)
    .slice(0, 8);

  grid.innerHTML = top8.map(([name, info]) => {
    const cheapest = info.models.reduce((a, b) => a.inputPrice < b.inputPrice ? a : b);
    const premium = info.models.reduce((a, b) => a.inputPrice > b.inputPrice ? a : b);
    return '<div class="insight-card">' +
      '<h4 style="display:flex;align-items:center;gap:8px"><span class="provider-dot" style="background:' + info.color + '"></span>' + name + '<span class="region-tag region-' + info.region + '" style="font-size:10px">' + info.region + '</span></h4>' +
      '<p>' + info.models.length + ' models. Range: <strong>' + cheapest.model + '</strong> at $' + cheapest.inputPrice.toFixed(2) + ' to <strong>' + premium.model + '</strong> at $' + premium.inputPrice.toFixed(2) + '/M input.</p>' +
    '</div>';
  }).join('');
}

// === CHARTS ===
const CHART_BLUE = '#3b82f6';
const CHART_RED = '#ef4444';
const CHART_GREEN = '#22c55e';
const CHART_AMBER = '#f59e0b';

const CHART_DEFAULTS = {
  return {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      tooltip: {
        backgroundColor: 'rgba(15,23,42,0.95)',
        titleColor: '#e2e8f0',
        bodyColor: '#cbd5e1',
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1,
        padding: 10,
        cornerRadius: 6,
        titleFont: { size: 12 },
        bodyFont: { size: 11 },
      },
    },
  };
}

function initRegionalChart() {
  const el = document.getElementById('regionalChart');
  if (!el) return;
  const ctx = el.getContext('2d');
  const regionOrder = ['NA', 'CN', 'EU', 'ME', 'JP', 'KR', 'IN', 'SEA', 'RU'];
  const names = ['N.America', 'China', 'Europe', 'Mid.East', 'Japan', 'Korea', 'India', 'SE Asia', 'Russia'];
  const avgIn = regionOrder.map(r => { const m = TOKEN_DATA.filter(d => d.region === r); return m.length ? m.reduce((s, d) => s + d.inputPrice, 0) / m.length : 0; });
  const avgOut = regionOrder.map(r => { const m = TOKEN_DATA.filter(d => d.region === r); return m.length ? m.reduce((s, d) => s + d.outputPrice, 0) / m.length : 0; });
  const counts = regionOrder.map(r => TOKEN_DATA.filter(d => d.region === r).length);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [
        { label: 'Avg Input $/1M', data: avgIn, backgroundColor: CHART_BLUE + '99', borderRadius: 3, yAxisID: 'y' },
        { label: 'Avg Output $/1M', data: avgOut, backgroundColor: CHART_RED + '66', borderRadius: 3, yAxisID: 'y' },
        { label: 'Models', data: counts, backgroundColor: 'transparent', yAxisID: 'y1', type: 'line', borderColor: CHART_GREEN, borderWidth: 2, pointRadius: 4, pointBackgroundColor: CHART_GREEN, tension: 0.3 },
      ],
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: { ...CHART_DEFAULTS.plugins, legend: { labels: { color: '#94a3b8', font: { size: 10 }, boxWidth: 8, padding: 10 } } },
      scales: {
        x: { ticks: { color: '#64748b', font: { size: 10 } }, grid: { display: false } },
        y: { type: 'logarithmic', position: 'left', ticks: { color: '#64748b', font: { size: 10 }, callback: v => '$' + v }, grid: { color: 'rgba(255,255,255,0.04)' } },
        y1: { position: 'right', ticks: { color: '#22c55e', font: { size: 10 } }, grid: { display: false }, min: 0 },
      },
    },
  });
}

function initLeaderboardChart() {
  const el = document.getElementById('leaderboardChart');
  if (!el) return;
  const ctx = el.getContext('2d');
  const providers = {};
  TOKEN_DATA.forEach(d => {
    if (!providers[d.provider]) providers[d.provider] = { count: 0, color: d.color, region: d.region };
    providers[d.provider].count++;
  });
  const sorted = Object.entries(providers).sort((a, b) => b[1].count - a[1].count);
  const top = sorted.slice(0, 15);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: top.map(([n, d]) => n + ' (' + d.region + ')'),
      datasets: [{ data: top.map(([_, d]) => d.count), backgroundColor: top.map(([_, d]) => d.color + 'cc'), borderRadius: 4 }],
    },
    options: {
      indexAxis: 'y',
      ...CHART_DEFAULTS,
      plugins: { legend: { display: false }, tooltip: CHART_DEFAULTS.plugins.tooltip },
      scales: {
        x: { ticks: { color: '#64748b', font: { size: 10 }, stepSize: 1 }, grid: { color: 'rgba(255,255,255,0.04)' } },
        y: { ticks: { color: '#94a3b8', font: { size: 10 } }, grid: { display: false } },
      },
    },
  });
}

function initDeflationChart() {
  const el = document.getElementById('deflationChart');
  if (!el) return;
  const ctx = el.getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2023 Q1', '2023 Q3', '2024 Q1', '2024 Q3', '2025 Q1', '2025 Q3', '2026E'],
      datasets: [
        { label: 'GPT-4 tier', data: [60, 45, 30, 15, 10, 6, 3.5], borderColor: CHART_BLUE, backgroundColor: CHART_BLUE + '22', tension: 0.3, fill: true, pointRadius: 4 },
        { label: 'Mid tier', data: [8, 6, 3.5, 2, 1.2, 0.8, 0.5], borderColor: CHART_AMBER, backgroundColor: CHART_AMBER + '22', tension: 0.3, fill: true, pointRadius: 4 },
        { label: 'Budget tier', data: [2, 1.5, 1.0, 0.6, 0.3, 0.15, 0.08], borderColor: CHART_GREEN, backgroundColor: CHART_GREEN + '22', tension: 0.3, fill: true, pointRadius: 4 },
      ],
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: { ...CHART_DEFAULTS.plugins, legend: { labels: { color: '#94a3b8', font: { size: 10 }, boxWidth: 8 } } },
      scales: {
        x: { ticks: { color: '#64748b', font: { size: 10 } }, grid: { display: false } },
        y: { type: 'logarithmic', ticks: { color: '#64748b', font: { size: 10 }, callback: v => '$' + v + '/M' }, grid: { color: 'rgba(255,255,255,0.04)' } },
      },
    },
  });
}

function initPriceChart() {
  const el = document.getElementById('priceChart');
  if (!el) return;
  const ctx = el.getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: TOKEN_DATA.map(d => d.provider.substring(0, 6) + '.' + d.model.substring(0, 14)),
      datasets: [
        { label: 'Input $/1M', data: TOKEN_DATA.map(d => d.inputPrice), backgroundColor: CHART_BLUE + '99', borderColor: CHART_BLUE, borderWidth: 1, borderRadius: 2 },
        { label: 'Output $/1M', data: TOKEN_DATA.map(d => d.outputPrice), backgroundColor: CHART_RED + '66', borderColor: CHART_RED, borderWidth: 1, borderRadius: 2 },
      ],
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: { legend: { display: false }, tooltip: CHART_DEFAULTS.plugins.tooltip },
      scales: {
        x: { ticks: { color: '#64748b', font: { size: 8 }, maxRotation: 65, minRotation: 50, autoSkip: false }, grid: { color: 'rgba(255,255,255,0.03)' } },
        y: { type: 'logarithmic', ticks: { color: '#64748b', font: { size: 10 }, callback: v => '$' + v }, grid: { color: 'rgba(255,255,255,0.04)' } },
      },
    },
  });
}

function initRatioChart() {
  const el = document.getElementById('ratioChart');
  if (!el) return;
  const ctx = el.getContext('2d');
  const regions = ['NA', 'CN', 'EU', 'ME', 'JP', 'KR', 'IN'];
  const names = ['N.America', 'China', 'Europe', 'Mid.East', 'Japan', 'Korea', 'India'];
  const ratios = regions.map(r => {
    const models = TOKEN_DATA.filter(d => d.region === r);
    return models.length ? models.reduce((s, d) => s + d.outputPrice / d.inputPrice, 0) / models.length : 0;
  });
  new Chart(ctx, {
    type: 'bar',
    data: { labels: names, datasets: [{ label: 'Output/Input Ratio', data: ratios, backgroundColor: regions.map(r => REGION_COLORS[r] + '99'), borderRadius: 4 }] },
    options: {
      ...CHART_DEFAULTS,
      plugins: { legend: { display: false }, tooltip: { ...CHART_DEFAULTS.plugins.tooltip, callbacks: { label: ctx => ctx.raw.toFixed(2) + 'x' } } },
      scales: {
        x: { ticks: { color: '#64748b', font: { size: 9 } }, grid: { display: false } },
        y: { ticks: { color: '#64748b', font: { size: 10 }, callback: v => v.toFixed(1) + 'x' }, grid: { color: 'rgba(255,255,255,0.04)' }, min: 0 },
      },
    },
  });
}

function initGeoChart() {
  const el = document.getElementById('geoChart');
  if (!el) return;
  const ctx = el.getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['US', 'China', 'EU', 'Middle East', 'Japan/Korea', 'India/SEA', 'Other'],
      datasets: [{ data: [42, 28, 12, 5, 5, 5, 3], backgroundColor: ['#3b82f6', '#ef4444', '#f59e0b', '#0891b2', '#dc143c', '#ff9933', '#64748b'], borderWidth: 0 }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#94a3b8', font: { size: 9 }, boxWidth: 8, padding: 8 } } },
    },
  });
}

function initVelocityChart() {
  const el = document.getElementById('velocityChart');
  if (!el) return;
  const ctx = el.getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2023', '2024', '2025', '2026E', '2027E'],
      datasets: [{ label: 'B tokens/month', data: [1, 4.4, 15, 45, 120], borderColor: CHART_RED, backgroundColor: CHART_RED + '22', tension: 0.4, fill: true, pointRadius: 4, pointBackgroundColor: CHART_RED }],
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: { legend: { display: false }, tooltip: { ...CHART_DEFAULTS.plugins.tooltip, callbacks: { label: ctx => ctx.raw + 'B tokens/mo' } } },
      scales: {
        x: { ticks: { color: '#64748b', font: { size: 9 } }, grid: { display: false } },
        y: { ticks: { color: '#64748b', font: { size: 10 }, callback: v => v + 'B' }, grid: { color: 'rgba(255,255,255,0.04)' } },
      },
    },
  });
}

function initEconomyChart() {
  const el = document.getElementById('economyChart');
  if (!el) return;
  const ctx = el.getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2023', '2024', '2025', '2026E', '2027E'],
      datasets: [
        { label: 'AI Token Spend', data: [1.2, 5.8, 22, 68, 180], backgroundColor: CHART_BLUE + '99', borderRadius: 4 },
        { label: 'Crypto Trading Vol', data: [480, 520, 610, 680, 750], backgroundColor: CHART_AMBER + '66', borderRadius: 4 },
        { label: 'Stablecoin Flow', data: [95, 132, 180, 240, 310], backgroundColor: CHART_GREEN + '66', borderRadius: 4 },
      ],
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: { ...CHART_DEFAULTS.plugins, legend: { labels: { color: '#94a3b8', font: { size: 11 }, boxWidth: 10, padding: 12 } } },
      scales: {
        x: { ticks: { color: '#64748b', font: { size: 11 } }, grid: { display: false } },
        y: { ticks: { color: '#64748b', font: { size: 11 }, callback: v => '$' + v + 'B' }, grid: { color: 'rgba(255,255,255,0.04)' } },
      },
    },
  });
}

function initProjectionChart() {
  const el = document.getElementById('projectionChart');
  if (!el) return;
  const ctx = el.getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
      datasets: [
        { label: 'Revenue', data: [0.48, 1.8, 5.6, 14.2, 32], backgroundColor: CHART_BLUE + '99', borderRadius: 4 },
        { label: 'Costs', data: [0.18, 0.52, 1.4, 3.8, 9.2], backgroundColor: CHART_RED + '66', borderRadius: 4 },
        { label: 'Profit', data: [0.30, 1.28, 4.2, 10.4, 22.8], backgroundColor: CHART_GREEN + '99', borderRadius: 4 },
      ],
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: { ...CHART_DEFAULTS.plugins, legend: { labels: { color: '#94a3b8', font: { size: 12 }, boxWidth: 10, padding: 14 } } },
      scales: {
        x: { ticks: { color: '#64748b', font: { size: 12 } }, grid: { display: false } },
        y: { ticks: { color: '#64748b', font: { size: 11 }, callback: v => '$' + v + 'M' }, grid: { color: 'rgba(255,255,255,0.04)' } },
      },
    },
  });
}

// === CALCULATOR ===
let calcChartInstance = null;
function updateCalcChart(selectedModel) {
  const el = document.getElementById('calcChart');
  if (!el) return;
  const ctx = el.getContext('2d');
  const dailyInput = parseInt(document.getElementById('calcInputTokens')?.value) || 1000000;
  const dailyOutput = parseInt(document.getElementById('calcOutputTokens')?.value) || 500000;
  const daysInMonth = 30;
  const top8 = TOKEN_DATA.slice(0, 8);
  const costs = top8.map(d => Math.round((((dailyInput / 1e6) * d.inputPrice + (dailyOutput / 1e6) * d.outputPrice) * daysInMonth) * 100) / 100);
  const selected = TOKEN_DATA.find(d => d.model === selectedModel);
  const selCost = selected ? Math.round((((dailyInput / 1e6) * selected.inputPrice + (dailyOutput / 1e6) * selected.outputPrice) * daysInMonth) * 100) / 100 : 0;
  if (calcChartInstance) calcChartInstance.destroy();
  calcChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: top8.map(d => d.model),
      datasets: [{ label: 'Monthly Cost', data: costs, backgroundColor: costs.map(c => c === selCost ? CHART_BLUE : '#334155'), borderRadius: 4 }],
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: { legend: { display: false }, tooltip: { ...CHART_DEFAULTS.plugins.tooltip, callbacks: { label: ctx => '$' + ctx.raw + '/mo' } } },
      scales: {
        x: { ticks: { color: '#64748b', font: { size: 9 }, maxRotation: 40 }, grid: { display: false } },
        y: { ticks: { color: '#64748b', font: { size: 11 }, callback: v => '$' + v }, grid: { color: 'rgba(255,255,255,0.04)' } },
      },
    },
  });
}

function populateCalcSelect() {
  const select = document.getElementById('calcModel');
  if (!select) return;
  const top = TOKEN_DATA.slice(0, 20);
  select.innerHTML = top.map(d =>
    '<option value="' + d.model + '">' + d.provider + ' | ' + d.model + ' ($' + d.inputPrice.toFixed(2) + '/' + d.outputPrice.toFixed(2) + ')</option>'
  ).join('');
  select.value = 'GPT-4o';
}

function recalc() {
  const modelName = document.getElementById('calcModel')?.value;
  if (!modelName) return;
  const model = TOKEN_DATA.find(d => d.model === modelName);
  if (!model) return;
  const di = parseInt(document.getElementById('calcInputTokens')?.value) || 0;
  const dOut = parseInt(document.getElementById('calcOutputTokens')?.value) || 0;
  const daily = (di / 1e6) * model.inputPrice + (dOut / 1e6) * model.outputPrice;
  const dailyEl = document.getElementById('calcDaily');
  const monthlyEl = document.getElementById('calcMonthly');
  const annualEl = document.getElementById('calcAnnual');
  if (dailyEl) dailyEl.textContent = '$' + daily.toFixed(2);
  if (monthlyEl) monthlyEl.textContent = '$' + (daily * 30).toFixed(2);
  if (annualEl) annualEl.textContent = '$' + (daily * 365).toFixed(2);
  updateCalcChart(modelName);
}

// === NAV ===
function initNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
  renderTable();
  setupSorting();
  setupSearch();
  setupRegionFilter();
  renderRegionalCards();
  renderInsights();

  initRegionalChart();
  initLeaderboardChart();
  initDeflationChart();
  initPriceChart();
  initRatioChart();
  initGeoChart();
  initVelocityChart();
  initEconomyChart();
  initProjectionChart();

  populateCalcSelect();
  recalc();
  initNav();

  document.getElementById('calcInputTokens')?.addEventListener('input', recalc);
  document.getElementById('calcOutputTokens')?.addEventListener('input', recalc);
  document.getElementById('calcModel')?.addEventListener('change', recalc);

  if (typeof lucide !== 'undefined') lucide.createIcons();

  // Update hero stats
  const sm = document.getElementById('statModels');
  const sp = document.getElementById('statProviders');
  const sr = document.getElementById('statRegions');
  if (sm) sm.textContent = TOKEN_DATA.length;
  if (sp) sp.textContent = new Set(TOKEN_DATA.map(d => d.provider)).size;
  if (sr) sr.textContent = new Set(TOKEN_DATA.map(d => d.region)).size;
});
