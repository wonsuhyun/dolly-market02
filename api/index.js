import passport from 'passport'
import { passportStrategy } from './middleware'
import createError from 'http-errors'
import { itemRoute, authRoute } from './route'
import ExpressBase from '../server/expressBase'

const isAPI = process.env.NODE_ENV == 'api'

class ExpressAPI extends ExpressBase {

    constructor() {
        super()
        this.run()
    }

    run() {
        // middlewares
        this.express.use(this.json)
        this.express.use(passport.initialize())
        passportStrategy()

        // routes
        this.express.use(['/items', '/api/items'], itemRoute)
        this.express.use(['/auth', '/api/auth'], authRoute)

        if (isAPI) super.run()

        // Error handler
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

module.exports = {
    path: '/api',
    handler: new ExpressAPI().express
}
