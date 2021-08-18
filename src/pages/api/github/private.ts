import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { authenticatedCall } from 'github/client';

const handler = nc<NextApiRequest, NextApiResponse>().get(async (req, res) => {
  const data = await authenticatedCall('alejandronanez');

  res.status(200).json(data);
});

export default handler;
