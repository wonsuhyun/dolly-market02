import express from 'express'
import { errorWrapper } from '../util'

// Parent Router
class DollyRouter {

    constructor() {
        this.router = express.Router()
    }

    getRouter() {
        return this.router
    }

    handler(method, route, middleware, fn) {
        return this.router[method](route, middleware, errorWrapper(fn))
    }

}

export default DollyRouter