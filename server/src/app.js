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

// #### -> a voir plus tard site down
// sequelize deprecated String based operators are now deprecated.
// Please use Symbol based operators for better security,
// read more at http://docs.sequelizejs.com/manual/tutorial/querying.html#operators

sequelize.sync().then(() => {
  app.listen(process.env.PORT || config.port,
    () => console.log('Server start listening at: \x1b[32m http://localhost:' + config.port + '\x1b[37m')
  )
})
