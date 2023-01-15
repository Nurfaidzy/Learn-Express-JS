const Sequelize = require('sequelize');
const config = require('../../Config/Db');

const access = config.define('access', {
  name_access: Sequelize.STRING,
}, {
  tableName: 'access',
});

module.exports = access;
