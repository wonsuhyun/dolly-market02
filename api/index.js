import express from 'express'
const app = express()
const ROUTES_PATH = './router'

app.use('/item', require(`${ROUTES_PATH}/item`))

module.exports = {
  path: '/api',
  handler: app
}