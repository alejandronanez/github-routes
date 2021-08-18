import { unauthenticatedCall } from 'github/client';

async function handler(req, res) {
  const data = await unauthenticatedCall('alejandronanez');

  res.status(200).json(data);
}

export default handler;
