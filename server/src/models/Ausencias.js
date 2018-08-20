module.exports = (sequelize, DataTypes) => {
  const Ausencia = sequelize.define('Ausencia', {
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    email: DataTypes.STRING
  })

  return Ausencia
}
