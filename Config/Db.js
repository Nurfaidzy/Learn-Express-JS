const Sequelize = require('sequelize');

const host = process.env.DB_HOST;
const dbname = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;

const sequelize = new Sequelize(
  dbname,
  user,
  password,
  {
    host,
    dialect: 'postgres',
    logging: false,
  },
);

module.exports = sequelize;
