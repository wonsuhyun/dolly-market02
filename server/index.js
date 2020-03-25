const ExpressServer = require('./expressServer')

const isAPI = process.env.NODE_ENV == 'api'

if (!isAPI) {
    // Normal start with Nuxt
    const expressServer = new ExpressServer()
    expressServer.run()
} else {
    // Start only api
    require = require("esm")(module)
    module.exports = require("../api/index.js")
}