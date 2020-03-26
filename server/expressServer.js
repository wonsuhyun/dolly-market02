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

    async run() {

        await this.nuxtRun()

        this.express.use(this.nuxt.render)

        super.run()
    }
}

module.exports = ExpressServer