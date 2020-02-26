import express from 'express'
import itemRouter from './router/itemRouter'

// server settings
const app = express()
const port = process.env.PORT || 3000
const isAPIDev = (process.argv[1].includes('api-runner.js')) ? true : false

// middlewares
app.use(express.json())

// routers
app.use(['/items', '/api/items'], itemRouter)

if (isAPIDev) {
  // Server listener
  app.listen(port, () => {
    console.log('Dolly server is up on', port)
  })
}

module.exports = {
  path: '/api',
  handler: app
}
