import { unauthenticatedCall } from 'github/client';

async function handler(req, res) {
  const { username } = req.query;
  const userdata = await unauthenticatedCall(username);
  res.status(200).json({ userdata });
}

export default handler;
