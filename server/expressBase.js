
const express = require('express')

require('dotenv').config()

class ExpressBase {
    constructor() {
        this.port = process.env.PORT
        this.host = process.env.HOST
        this.express = express()
        this.router = express.Router()
    }

    run() {
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

module.exports = ExpressBase