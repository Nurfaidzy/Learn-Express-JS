const user = require('../Model/User');

module.exports = {
  getUsers() {
    return user.findAll({ attributes: ['username', 'email'] });
  },
};
