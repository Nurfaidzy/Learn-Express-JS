const jwt = require('jsonwebtoken');

const secret = process.env.SECRET_KEY;

function authenticate(req, res, next) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
}

module.exports = {
  authenticate,
};
