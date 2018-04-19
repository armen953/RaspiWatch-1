module.exports = (sequelize, dataTypes) => sequelize.define('User', {
  id: {
    type: dataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: dataTypes.STRING,
    unique: true
  },
  pseudo: dataTypes.STRING,
  password: dataTypes.STRING,
  admin: dataTypes.BOOLEAN // voir comment mettre valeur par défaut
})
