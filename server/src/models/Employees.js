module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    nombre: DataTypes.STRING,
    empresa: DataTypes.STRING,
    puesto: DataTypes.STRING,
    telefono: DataTypes.STRING,
    notas: DataTypes.STRING,
    email: DataTypes.STRING
  })

  return Employee
}
