// importer bcrypt
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

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
  }, {
    hooks: {
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
    // return password === this.password // a changer plus tard par bcrypt.compareAsync(passwordn this.password)
  }

  return User
}
