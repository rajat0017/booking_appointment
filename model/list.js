const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const list = sequelize.define('list', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true, 
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = list;
