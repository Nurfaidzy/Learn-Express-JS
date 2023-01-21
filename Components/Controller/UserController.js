const user = require('../Model/User');

async function getUsers(req, res) {
  try {
    const response = await user.findAll({ attributes: ['username', 'email'] });
    res.json(response);
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  getUsers,
};
