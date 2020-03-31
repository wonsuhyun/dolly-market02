const { Nuxt, Builder } = require('nuxt')
const nuxtConfig = require('../nuxt.config.js')

const ServerBase = require('./serverBase')

class NuxtServer extends ServerBase {

    async runNuxt() {
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

    registerMiddlewares() {
        this.app.use(this.nuxt.render)
    }

    async run() {
        await this.runNuxt()
        super.run()
    }
}

module.exports = NuxtServer