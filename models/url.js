'use strict'
module.exports = (sequelize, DataTypes) => {
  const Url = sequelize.define('Url', {
    origin: DataTypes.STRING,
    shorten: DataTypes.STRING,
  }, {})
  Url.associate = function (models) {
    // associations can be defined here
  }
  return Url
}
