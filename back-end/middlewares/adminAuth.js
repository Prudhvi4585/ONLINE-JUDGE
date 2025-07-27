const jwt = require('jsonwebtoken');
require('dotenv').config();

function adminAuth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'No token provided!' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    if (!decoded.user.isAdmin) {
      return res.status(403).json({ message: 'Access denied. Admins only!' });
    }

    req.user = decoded.user; // optional: attach user data directly
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token!' });
  }
}

module.exports = adminAuth;
