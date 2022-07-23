const { DataTypes } = require('sequelize');
const db = require('../database');

const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING(80),
  email: {
    type: DataTypes.STRING(255),
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
  },
});

module.exports = User;
