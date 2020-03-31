import passport from 'passport'
import createError from 'http-errors'

import { passportStrategy } from './util'
import ServerBase from '../server/serverBase'
const isListenable = process.env.NODE_ENV == 'api'

class APIServer extends ServerBase {

    constructor(routes) {
        super(isListenable)
        this.routes = routes
    }

    registerMiddlewares() {
        this.app.use(this.express.json())
        this.app.use(passport.initialize())        
        passportStrategy()
    }

    run() {
        super.run()
        this.errorHandler()
    }

    errorHandler() {
        this.app.use((req, res, next) => {
            next(createError(404))
        })

        this.app.use((error, req, res, next) => {
            const { status, message } = error
            res.status(status).json({ message })
        })
    }
}

export default APIServer