import passport from 'passport'
import { passportStrategy } from './util'
import createError from 'http-errors'
import { itemRoute, authRoute } from './route'
import ExpressBase from '../server/expressBase'

class ExpressAPI extends ExpressBase {

    constructor() {
        super()
        this.registerMiddlewares()
        this.registerRoutes()
        this.errorHandler()
    }

    registerMiddlewares() {
        // middlewares
        this.express.use(this.json)
        this.express.use(passport.initialize())
        passportStrategy()
    }

    registerRoutes() {
        // routes
        this.express.use(['/items', '/api/items'], itemRoute)
        this.express.use(['/auth', '/api/auth'], authRoute)
    }

    errorHandler() {
        this.express.use((req, res, next) => {
            next(createError(404))
        })

        this.express.use((error, req, res, next) => {
            const { status, message } = error
            res.status(status || 500)
            res.json({ status, message })
        })
    }
}

export default ExpressAPI