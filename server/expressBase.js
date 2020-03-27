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
        // 이 함수에서 쓸 this가 자식의 this일 때
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