const user = require('../Model/User');
const access = require('../Model/Access');

module.exports.getUsers = () => user.findAll({
  attributes: ['id', 'username', 'email'],
  include: [{
    model: access,
    as: 'accessRole',
    attributes: ['name_access'],
  }],
});

module.exports.newUser = (payload) => user.create({
  username: payload.username,
  email: payload.email,
  password: payload.password,
  access_id: payload.access_id,
});

module.exports.findEmailareSame = (payload) => user.findOne({
  where: payload,
});
