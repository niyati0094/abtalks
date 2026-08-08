const apiUrl = 'https://api.thebreeth.com/v1';
const groupId = process.env.BREETH_GROUP_ID || 'abtalks-ananya';

export async function callBreeth(path, body) {
  if (!process.env.BREETH_API_KEY) throw new Error('Breeth is not configured. Add BREETH_API_KEY in Vercel project settings.');
  const response = await fetch(`${apiUrl}${path}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.BREETH_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...body, group_id: groupId }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || data.error || 'Breeth request failed.');
  return data;
}
