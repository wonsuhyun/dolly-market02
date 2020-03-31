const express = require('express')
const consola = require('consola')

require('dotenv').config()

class ServerBase {

    constructor(isListenable = true) {
        this.isListenable = isListenable
        this.port = process.env.PORT
        this.host = process.env.HOST
        this.app = express()
        this.router = express.Router()
        this.express = express
        this.registerMiddlewares = this.registerMiddlewares.bind(this)
        this.registerRoutes = this.registerRoutes.bind(this)
    }

    registerMiddlewares() {
        createError(500, 'Not Implemented')
    }

    run() {
        this.registerMiddlewares()
        this.registerRoutes()
        if (this.isListenable) this.listen()
    }

    registerRoutes() {
        // Todo: 더 나은 방법이 없을까
        if (this.routes)
            this.routes.forEach(routeBuilder => {
                routeBuilder.setRouter(this.router)
                routeBuilder.addRoutes()
                this.app.use(routeBuilder.router)
            })
    }

    listen() {
        const { host, port } = this

        // Listen the server
        this.app.listen({ port, host }, () => {
            consola.ready({
                message: `Server listening on http://${host}:${port}`,
                badge: true
            })
        })
    }
}

module.exports = ServerBase