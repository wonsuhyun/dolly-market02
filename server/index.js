const ExpressServer = require('./expressServer')

const isAPI = process.env.NODE_ENV == 'api'

if (isAPI) {
    // Start only api
    require = require("esm")(module)
    // Todo: run????
    module.exports = require("../api").run
} else {
    // Normal start with Nuxt
    const expressServer = new ExpressServer()
    expressServer.run()
}