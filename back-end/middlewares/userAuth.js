const jwt = require('jsonwebtoken');
require('dotenv').config();

function userAuth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'No token provided!' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // includes user ID or whatever you encoded
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token!' });
  }
}

module.exports = userAuth;