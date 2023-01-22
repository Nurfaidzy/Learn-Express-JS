const jwt = require('jsonwebtoken');

const secret = process.env.SECRET_KEY;

function login(req, res) {
  // Authenticate the user and get their information
  const user = { id: 1, username: 'johndoe' };
  // Sign the JWT with the user information and secret key
  const token = jwt.sign(user, secret);
  // Send the JWT to the client
  res.json({ token });
}

module.exports = {
  login,
};
