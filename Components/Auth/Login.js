const jwt = require('jsonwebtoken');

const secret = process.env.SECRET_KEY;

module.exports.login = (req, res) => {
  const user = { id: 1, username: 'johndoe' };
  const token = jwt.sign(user, secret);
  res.json({ token });
};
