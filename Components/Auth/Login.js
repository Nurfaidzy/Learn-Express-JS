const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userServices = require('../Services/UserServices');

const secret = process.env.SECRET_KEY;

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const findUser = await userServices.findEmailareSame({ email });

    if (!findUser) {
      return res.status(401).json({ error: 'Email Not Found' });
    }

    const passwordMatch = await bcrypt.compare(password, findUser.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Password Wrong' });
    }

    const user = { id: findUser.id, email: findUser.email };
    const token = jwt.sign(user, secret, { expiresIn: '1h' });

    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
