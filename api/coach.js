import { callBreeth } from './breeth.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed.' });
  try {
    const day = req.query.day || '12';
    const data = await callBreeth('/search', { query: `ABTalks student progress, learning preferences, and Day ${day} challenge context`, limit: 4 });
    const memories = (data.edges || []).map(edge => edge.fact).filter(Boolean);
    return res.status(200).json({
      memories,
      guidance: memories.length
        ? `I remembered ${memories.length} learning signal${memories.length > 1 ? 's' : ''}. For Day ${day}, begin with the smallest visible screen, then test it at a phone width before adding polish.`
        : `Start Day ${day} with a 10-minute focus sprint: build the page structure first, then make it responsive before styling details.`,
    });
  } catch (error) { return res.status(502).json({ error: error.message }); }
}
