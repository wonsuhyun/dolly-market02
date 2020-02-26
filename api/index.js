import express from 'express'
import createError from 'http-errors'
import { itemRoute } from './route'

// server settings
const app = express()
const isAPIDev = (process.argv[1].includes('api-runner.js')) ? true : false

// middlewares
app.use(express.json())

// routes
app.use(['/items', '/api/items'], itemRoute)

if (isAPIDev) {
  const port = process.env.PORT || 3000
  // Server listener
  app.listen(port, () => {
    console.log('Dolly server is up on', port)
  })
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err.status, message: res.locals.message });
});

module.exports = {
  path: '/api',
  handler: app
}
