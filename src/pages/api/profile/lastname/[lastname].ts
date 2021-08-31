function handler(req, res) {
  const { lastname } = req.query;
  res.status(200).json({ lastname });
}

export default handler;
