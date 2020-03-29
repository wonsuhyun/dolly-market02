const onlyAPIListen = process.env.NODE_ENV == 'api'

if (onlyAPIListen) {
    // Start only api
    require = require("esm")(module)
    module.exports = require("../api")
} else {
    // Execute Nuxt and Nuxt Server (SSR)
    const NuxtServer = require('./nuxtServer')
    const nuxtServer = new NuxtServer()
    nuxtServer.run()
}