const user = require('../Model/User');

module.exports = {
  getUsers() {
    return user.findAll({ attributes: ['username', 'email'] });
  },
  newUser(payload) {
    return user.create({
      username: payload.username,
      email: payload.email,
      password: payload.password,
      access_id: payload.access_id,
    });
  },
  findEmailareSame(payload) {
    return user.findAll({
      where: payload,
    });
  },
};
