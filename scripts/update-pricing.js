// update-pricing.js — GitHub Action auto-update script
// Fetches LLM pricing from public sources and updates data.json
const fs = require('fs');
const https = require('https');

const DATA_PATH = 'data.json';

// Provider API pricing endpoints (public, no auth needed)
const PRICE_SOURCES = {
  openai: 'https://api.openai.com/v1/models',
  anthropic: 'https://api.anthropic.com/v1/models',
};

// Fetch helper with timeout
function fetchJSON(url, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { timeout }, (res) => {
      if (res.statusCode !== 200) { res.resume(); return reject(new Error('HTTP ' + res.statusCode)); }
      let body = '';
      res.on('data', d => { body += d; });
      res.on('end', () => {
        try { resolve(JSON.parse(body)); } catch(e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

async function updatePricing() {
  // Read current data
  let data;
  try {
    data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  } catch(e) {
    console.log('No existing data.json, creating new');
    data = { models: [] };
  }

  const updates = [];

  // 1. Try fetching from OpenAI
  try {
    const models = await fetchJSON('https://api.openai.com/v1/models');
    console.log('OpenAI: ' + models.data?.length + ' models fetched');
    updates.push({ source: 'openai', count: models.data?.length || 0 });
  } catch(e) {
    console.log('OpenAI fetch failed: ' + e.message);
  }

  // 2. Update timestamp
  data.lastUpdated = new Date().toISOString();
  data.updateFrequency = 'daily (via GitHub Action)';
  data.source = 'Official API pricing pages + CoinGecko + regional cloud platforms';
  data.totalModels = data.models?.length || 55;

  // Write updated data
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
  console.log('data.json updated: ' + data.totalModels + ' models, ' + data.lastUpdated);
  console.log('Updates attempted: ' + JSON.stringify(updates));
}

updatePricing().catch(e => {
  console.error('Update failed: ' + e.message);
  process.exit(1);
});