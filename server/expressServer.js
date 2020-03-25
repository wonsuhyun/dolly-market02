
const express = require('express')
const consola = require('consola')

const passport = require('passport')
// const { passportStrategy } = require('./util')
const createError = require('http-errors')

const { Nuxt, Builder } = require('nuxt')

require('dotenv').config()

class ExpressServer {
    constructor() {
        this.port = process.env.PORT
        this.host = process.env.HOST
        this.express = express()
        this.expressRouter = express.Router()
    }

    async runNuxt() {

        const nuxtConfig = require('../nuxt.config.js')
        nuxtConfig.dev = process.env.NODE_ENV !== 'production'

        const nuxt = new Nuxt(nuxtConfig)

        this.port = nuxt.options.server.port
        this.host = nuxt.options.server.host

        await nuxt.ready()

        if (nuxtConfig.dev) {
            const builder = new Builder(nuxt)
            await builder.build()
        }

        this.express.use(nuxt.render)
    }

    run() {
        // Listen the server
        this.express.listen(this.port, this.host)
        consola.ready({
            message: `Server listening on http://${this.host}:${this.port}`,
            badge: true
        })
    }

}

module.exports = ExpressServer