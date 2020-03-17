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

    handler(method, route, fn) {
        return this.router[method](route, errorWrapper(fn))
    }

}

export default DollyRouter