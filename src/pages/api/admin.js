export default function handler(req, res) {
  if (req.method === 'POST') {
    res
      .status(200)
      .json({ email: 'admin@bukapedia.com', password: 'admin123' });
  }
}
