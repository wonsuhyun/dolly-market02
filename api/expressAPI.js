import passport from 'passport'
import { passportStrategy } from './util'
import createError from 'http-errors'

import { itemRoute, authRoute } from './route'
import ExpressBase from '../server/expressBase'

class ExpressAPI extends ExpressBase {

    constructor() {
        super()
        this.json = this.express.json()
    }

    registerMiddlewares() {
        this.app.use(this.json)
        
        this.app.use(passport.initialize())
        
        passportStrategy()

        this.registerRoutes()
        
        this.errorHandler()
    }

    registerRoutes() {
        // this.router = itemRoute
        // this.app.use(['/auth', '/api/auth'], authRoute)
        // this.express.use('/api/v1', this.expressRouter)
        // this.router.route(uri)[httpMethod](boundAction)
        this.app.use(['/items', '/api/items'], itemRoute)
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

export default ExpressAPI