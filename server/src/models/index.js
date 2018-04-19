const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('./../../config/config')

const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

// read all files in the model directory except index.js: parse files, create a sequelize model and stores in the db object
fs.readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js' && file !== 'README.md'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db.sequelize = sequelize // store the sequelize instance object
db.Sequelize = Sequelize // store the imported sequelize object

// export the db object
module.exports = db
