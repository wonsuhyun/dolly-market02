const express = require('express')
const consola = require('consola')

require('dotenv').config()

// Todo: Base 파일들 하나로 합치기
class ExpressBase {

    constructor() {
        this.port = process.env.PORT
        this.host = process.env.HOST
        this.express = express
        this.app = express()
        this.router = express.Router()
        this.registerMiddlewares = this.registerMiddlewares.bind(this)
        this.registerRoutes = this.registerRoutes.bind(this)
    }

    registerMiddlewares() {
        createError(500, 'Not Implemented')
    }

    run(isListenable = true) {
        this.registerRoutes()
        this.registerMiddlewares()
        if (isListenable) this.listen()
    }

    registerRoutes() {
        // Todo: 더 나은 방법이 없을까
        if (this.routes)
            this.routes.forEach(route => {
                route.setRouter(this.router)
                this.app.use(route.getRouter())
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

module.exports = ExpressBase
