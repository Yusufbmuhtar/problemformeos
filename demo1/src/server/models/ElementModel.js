const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Option = require('./OptionModel');
const Element = sequelize.define('Element', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  label: {
    type: DataTypes.STRING,
    allowNull: false
  },
  elementType: {
    type: DataTypes.ENUM('text', 'textarea', 'select', 'radio', 'checkbox'),
    allowNull: false
  },
  required: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'elements',
  underscored: true,
  timestamps: false
});

Element.hasMany(Option, { foreignKey: 'element_id', as: 'options' });
Option.belongsTo(Element, { foreignKey: 'element_id' });

module.exports = Element;
