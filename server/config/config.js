const Op = require('sequelize').Op

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'raspiwatch', // -> aller dans mysql creer une tabe raspiwatch: CREATE DATABASE raspiwatch;
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      // loggin -> for debug disable for later
      // logging: false,
      operatorsAliases: Op
    }
  },
  authentification: {
    jwtSecret: process.env.JWT_SECRET || 'eyJhcm1lbiI6ImFybWVuIiwiYXJuYXVkI' // -> a changer plus tard
  }
}
