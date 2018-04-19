// importer bcrypt

module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    pseudo: {
      type: dataTypes.STRING,
      unique: true,
      required: true
    },
    email: dataTypes.STRING,
    password: dataTypes.STRING,
    admin: {
      type: dataTypes.BOOLEAN,
      defaultValue: false
    }
  })

  User.prototype.comparePassword = function (password) {
    return password === this.password // a changer plus tard par bcrypt.compareAsync(passwordn this.password)
  }

  return User
}
