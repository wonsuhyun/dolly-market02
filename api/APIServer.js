import passport from 'passport'
import createError from 'http-errors'
import bodyParser from 'body-parser'

import { passportStrategy } from './util'
import { ServerBase } from '../server/base'

class APIServer extends ServerBase {

    constructor(routes) {
        super()
        this.routes = routes
    }

    registerMiddlewares() {
        this.app.use(this.express.json())
        this.app.use(passport.initialize())        
        passportStrategy()
    }

    run(isListenable) {
        super.run(isListenable)
        this.errorHandler()
    }

    errorHandler() {
        this.app.use((req, res, next) => {
            next(createError(404))
        })

        this.app.use((error, req, res, next) => {
            const { status, message } = error
            res.status(status || 500)
            res.json({ status, message })
        })
    }
}

export default APIServer