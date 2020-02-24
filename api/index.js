  
import express from 'express'
const app = express()

const itemRouter = require('./router/item')

app.use(['/item', '/api/item'], itemRouter)

module.exports = {
  path: '/api',
  handler: app
}