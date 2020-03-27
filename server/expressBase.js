const express = require('express')
const consola = require('consola')

require('dotenv').config()

class ExpressBase {
    constructor() {
        this.port = process.env.PORT
        this.host = process.env.HOST
        this._express = express
        this.express = express()
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