const express = require('express')
const consola = require('consola')

require('dotenv').config()

class ExpressBase {

    constructor() {
        this.port = process.env.PORT
        this.host = process.env.HOST
        this.express = express
        this.app = express()
        this.router = express.Router()
        this.registerMiddlewares = this.registerMiddlewares.bind(this)
    }

    run(isExecutable = true) {
        this.registerMiddlewares()
        if (isExecutable) this.execute()
    }

    execute() {
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