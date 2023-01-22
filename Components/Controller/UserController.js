const jwt = require('jsonwebtoken');
const UserServices = require('../Services/UserServices');

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

async function getUsers(req, res) {
  try {
    const data = await UserServices.getUsers();
    return res.status(200).json({
      status: 'Success',
      message: 'Get All User Successfully',
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'Error',
      message: 'Internal server error',
      data: error.message,
    });
  }
}

module.exports = {
  getUsers, authenticate,
};
