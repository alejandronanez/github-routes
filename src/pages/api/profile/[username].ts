async function handler(req, res) {
  const { username } = req.query;

  res.status(200).json({ username });
}

export default handler;
