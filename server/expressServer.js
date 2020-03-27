const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const nuxtConfig = require('../nuxt.config.js')

const ExpressBase = require('./expressBase')

class ExpressServer extends ExpressBase {

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

    registerMiddlewares() {
        this.app.use(this.nuxt.render)
    }

    async run() {
        await this.nuxtRun()
        super.run()
    }
}

module.exports = ExpressServer