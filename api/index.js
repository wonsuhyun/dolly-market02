import express from 'express'
import consola from 'consola'

// Todo: Refactor passport
import passport from 'passport'
import passportGoogleOAuth from 'passport-google-oauth20'
import oauthInfo from '../credentials/oauth-config.json'
const GoogleStrategy = passportGoogleOAuth.Strategy
const { id, secret } = oauthInfo
import session from 'express-session'

import createError from 'http-errors'

import { itemRoute, authRoute } from './route'

// server settings
const app = express()
const isAPIDev = process.env.NODE_ENV == 'api-development'

// middlewares
app.use(express.json())
app.use(session({
  secret: 'TEST',
  cookie: { maxAge: 60 * 60 * 1000 },
  resave: true,
  saveUninitialized: false
}))
app.use(passport.initialize()) // passport 구동
app.use(passport.session()) // 세션 연결

passport.use(new GoogleStrategy({
  clientID: id,
  clientSecret: secret,
  callbackURL: "http://localhost:3000/api/auth/google/callback"
},
  function (accessToken, refreshToken, profile, callback) {
    return callback(null, profile)
  }
))

passport.serializeUser((user, done) => {
  done(null, user) // user객체가 deserializeUser로 전달됨
})
passport.deserializeUser((user, done) => {
  done(null, user) // 여기의 user가 req.user가 됨
})

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
  res.json({ status, message });
})

module.exports = {
  path: '/api',
  handler: app
}
