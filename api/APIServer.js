import passport from 'passport'
import { passportStrategy } from './util'
import createError from 'http-errors'

import ExpressBase from '../server/expressBase'

class APIServer extends ExpressBase {

    constructor(routes) {
        super()
        this.routes = routes
    }

    registerMiddlewares() {
        this.app.use(this.json)
        this.app.use(passport.initialize())
        
        passportStrategy()
        
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