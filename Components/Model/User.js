const Sequelize = require('sequelize');
const config = require('../../Config/Db');

const Access = require('./Access'); // import the 'access' model

const User = config.define('users', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  access_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Access,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
}, {
  tableName: 'users',
});
User.belongsTo(Access, { foreignKey: 'access', targetKey: 'id', as: 'accessRole' });

module.exports = User;
