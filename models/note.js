const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Note = sequelize.define('Note', {
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // options
});

module.exports = Note;