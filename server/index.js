import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = 8787;
const breethUrl = 'https://api.thebreeth.com/v1';
const groupId = process.env.BREETH_GROUP_ID || 'abtalks-ananya';
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

app.use(express.json());

function configured(res) {
  if (process.env.BREETH_API_KEY) return true;
  res.status(503).json({ error: 'Breeth is not configured. Add BREETH_API_KEY to your .env file, then restart npm run dev.' });
  return false;
}

async function breeth(path, body) {
  const response = await fetch(`${breethUrl}${path}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.BREETH_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || data.error || 'Breeth request failed.');
  return data;
}

app.post('/api/memory', async (req, res) => {
  if (!configured(res)) return;
  const { content, extractIntent = true } = req.body;
  if (!content?.trim()) return res.status(400).json({ error: 'A memory needs some context.' });
  try {
    const data = await breeth('/episodes', { content, group_id: groupId, extract_intent: extractIntent });
    res.json({ ok: true, memory: data });
  } catch (error) { res.status(502).json({ error: error.message }); }
});

app.get('/api/coach', async (req, res) => {
  if (!configured(res)) return;
  const day = req.query.day || '12';
  try {
    const data = await breeth('/search', { query: `ABTalks student progress, learning preferences, and Day ${day} challenge context`, group_id: groupId, limit: 4 });
    const memories = (data.edges || []).map(edge => edge.fact).filter(Boolean);
    res.json({
      memories,
      guidance: memories.length
        ? `I remembered ${memories.length} learning signal${memories.length > 1 ? 's' : ''}. For Day ${day}, begin with the smallest visible screen, then test it at a phone width before adding polish.`
        : `Start Day ${day} with a 10-minute focus sprint: build the page structure first, then make it responsive before styling details.`,
    });
  } catch (error) { res.status(502).json({ error: error.message }); }
});

// In production, Express serves the built React app and keeps client-side routes working.
app.use(express.static(path.join(rootDir, 'dist')));
app.get(/.*/, (req, res) => res.sendFile(path.join(rootDir, 'dist', 'index.html')));

app.listen(port, () => console.log(`ABTalks API ready at http://localhost:${port}`));
