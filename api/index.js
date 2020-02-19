import express from 'express'
const app = express()
const ROUTES_PATH = './routes'

app.get('/', (req, res, next) => {
  res.send('작동 여부 확인' + Math.random())
})

app.use('/item', require(`${ROUTES_PATH}/item`))

module.exports = {
  path: '/api',
  handler: app
}