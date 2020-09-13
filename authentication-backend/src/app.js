const express = require('express')
require('./db/mongoose')
const cors = require('cors')
const userRouter = require('./routers/user')

const app = express()

const whitelist = ['http://localhost:3001']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      return callback(null, true)
    }
    return callback(new Error('Not allowed by CORS'))
  }
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(userRouter)

module.exports = app