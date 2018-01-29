module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', { // nombre del DataTypes User
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password:DataTypes.STRING
  })
