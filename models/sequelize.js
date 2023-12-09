const { Sequelize } = require('sequelize');

const mySqlConnectionString = process.env.CONNECTION_STRING || '';
const sequelize = new Sequelize(mySqlConnectionString);

module.exports = sequelize;