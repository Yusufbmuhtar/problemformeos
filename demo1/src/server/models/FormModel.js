const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Element = require('./ElementModel');
const Option = require('./OptionModel');
const Form = sequelize.define('Form', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  element_id: {
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
  tableName: 'forms',
  underscored: true,
  timestamps: false
});

Form.hasMany(Element, { foreignKey: 'form_id', as: 'elements' });
Element.belongsTo(Form, { foreignKey: 'form_id' });

module.exports = Form;
