import express from 'express'
import createError from 'http-errors'
import { itemRoute, loginRoute } from './route'

// server settings
const app = express()
const isAPIDev = (process.argv[1].includes('api-runner.js')) ? true : false

// middlewares
app.use(express.json())

// routes
app.use(['/items', '/api/items'], itemRoute)
app.use(['/login', '/api/login'], loginRoute)

if (isAPIDev) {
  const port = process.env.PORT || 3000
  // Server listener
  app.listen(port, () => {
    console.log('Dolly server is up on', port)
  })
}

// Error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.use((error, req, res, next) => {
  const { status, message } = error
  res.status(status || 500)
  res.json({ status, message });
})

module.exports = {
  path: '/api',
  handler: app
}
