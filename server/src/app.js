const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors') // used for logs
const morgan = require('morgan') // logs for server
const config = require('./../config/config') // configuration file
const {sequelize} = require('./models') // ORM for databse

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// defind routs
require('./routes')(app)

// sequelize.sync({force: true}) ... -> drop tables
sequelize.sync().then(() => {
  app.listen(process.env.PORT || config.port,
    () => console.log('Server start listening at: \x1b[32m http://localhost:' + config.port + '\x1b[37m')
  )
})
