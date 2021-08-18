import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { authenticatedCall } from 'github/client';

const user = process.env.GITHUB_USERNAME;
const password = process.env.GITHUB_PAT;

const handler = nc<NextApiRequest, NextApiResponse>().get(async (req, res) => {
  const data = await authenticatedCall({
    username: 'alejandronanez',
    basicAuth: {
      password,
      user,
    },
  });

  res.status(200).json(data);
});

export default handler;
