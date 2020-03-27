const executeOnlyAPI = process.env.NODE_ENV == 'api'

if (executeOnlyAPI) {
    // Start only api
    require = require("esm")(module)
    module.exports = require("../api")
} else {
    // Execute Nuxt and Nuxt Server (SSR)
    const ExpressServer = require('./expressServer')
    const expressServer = new ExpressServer()
    expressServer.run()
}