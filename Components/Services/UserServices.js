const user = require('../Model/User');

module.exports.getUsers = () => user.findAll({ attributes: ['username', 'email'] });

module.exports.newUser = (payload) => user.create({
  username: payload.username,
  email: payload.email,
  password: payload.password,
  access_id: payload.access_id,
});

module.exports.findEmailareSame = (payload) => user.findAll({
  where: payload,
});
