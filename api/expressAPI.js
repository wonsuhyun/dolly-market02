import passport from 'passport'
import { passportStrategy } from './util'
import { paths } from './constant'
import createError from 'http-errors'

import { authRoute, itemRouteTemp } from './route'
import ExpressBase from '../server/expressBase'

class ExpressAPI extends ExpressBase {

    constructor(routes) {
        super()
        this.routes = routes
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
        // this.routes.forEach( route => {
        //     route.setRouter(this.router)
        //     this.app.use(paths.API, route.getRouter())
        //     // this.app.use('/api', route.getRouter())
        // })
        this.app.use(['/items', '/api/items'], itemRouteTemp)
        this.app.use(['/auth', '/api/auth'], authRoute)
        debugger
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