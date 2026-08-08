import { callBreeth } from './breeth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' });
  if (!req.body?.content?.trim()) return res.status(400).json({ error: 'A memory needs some context.' });
  try {
    const memory = await callBreeth('/episodes', { content: req.body.content, extract_intent: req.body.extractIntent ?? true });
    return res.status(200).json({ ok: true, memory });
  } catch (error) { return res.status(502).json({ error: error.message }); }
}
