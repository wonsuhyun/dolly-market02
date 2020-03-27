import passport from 'passport'
import { passportStrategy } from './util'
import createError from 'http-errors'

import { itemRoute, authRoute } from './route'
import ExpressBase from '../server/expressBase'

class ExpressAPI extends ExpressBase {

    constructor() {
        super()
        this.router = this._express.Router()
        this.json = this._express.json()
    }

    registerMiddlewares() {
        this.express.use(this.json)
        
        this.express.use(passport.initialize())
        
        passportStrategy()

        this.registerRoutes()
        
        this.errorHandler()
    }

    registerRoutes() {
        // this.router = itemRoute
        this.express.use(['/auth', '/api/auth'], authRoute)
        this.express.use(['/items', '/api/items'], itemRoute)
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

    run(isAPI = false) {
        this.registerMiddlewares()
        if (isAPI) super.run()
    }
}

export default ExpressAPI