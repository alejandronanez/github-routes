import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { unauthenticatedCall } from 'github/client';

const handler = nc<NextApiRequest, NextApiResponse>().get(async (req, res) => {
  const data = await unauthenticatedCall('alejandronanez');

  res.status(200).json(data);
});

export default handler;
