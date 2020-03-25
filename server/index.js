const ExpressServer = require('./expressServer')

const isAPI = process.env.NODE_ENV == 'server-dev'
const expressServer = new ExpressServer()

// Run Nuxt
if (!isAPI) expressServer.runNuxt()

expressServer.run()