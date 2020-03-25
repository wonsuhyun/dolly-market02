
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const nuxtConfig = require('../nuxt.config.js')

require('dotenv').config()

class ExpressServer {
    constructor() {
        this.express = express()
    }

    async nuxtRun() {
        nuxtConfig.dev = process.env.NODE_ENV !== 'production'

        this.nuxt = new Nuxt(nuxtConfig)

        const { nuxt } = this

        this.port = nuxt.options.server.port
        this.host = nuxt.options.server.host

        await nuxt.ready()

        if (nuxtConfig.dev) {
            const builder = new Builder(nuxt)
            await builder.build()
        }
    }

    async run() {

        await this.nuxtRun()

        this.express.use(this.nuxt.render)

        const { host, port } = this

        // Listen the server
        this.express.listen({ port, host }, () => {
            consola.ready({
                message: `Server listening on http://${host}:${port}`,
                badge: true
            })
        })
    }
}

module.exports = ExpressServer