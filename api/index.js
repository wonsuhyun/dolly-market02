import express from 'express'
import consola from 'consola'
import passport from 'passport'
import { passportLib } from './lib'
import createError from 'http-errors'

import { itemRoute, authRoute } from './route'

// server settings
const app = express()
const isAPIDev = process.env.NODE_ENV == 'api-development'

// middlewares
app.use(express.json())
app.use(passport.initialize())
passportLib()

// routes
app.use(['/items', '/api/items'], itemRoute)
app.use(['/auth', '/api/auth'], authRoute)

if (isAPIDev) {
  const host = process.env.HOST || 'localhost'
  const port = process.env.PORT || 3000
  // Server listener
  app.listen({ port, host }, () => {
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    })
  })
}

// Error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.use((error, req, res, next) => {
  const { status, message } = error
  res.status(status || 500)
  res.json({ status, message })
})

module.exports = {
  path: '/api',
  handler: app
}
