export default function handler(req, res) {
  res.status(200).json({ email: 'admin@bukapedia.com', password: 'admin123' });
}
