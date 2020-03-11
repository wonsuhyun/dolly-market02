import express from 'express'
import { asyncWrapper } from '../util'

// Parent Router
class DollyRouter {

    constructor() {
        this.router = express.Router()
    }

    getRouter() {
        return this.router
    }

    handler(method, route, ...args) {
        const { fn, middlewares } = this.prepareArguments(args)
        return this.router[method](route, middlewares, asyncWrapper(fn))
    }

    prepareArguments(args) {
        const size = args.length
        const fn = args[size-1]
        const middlewares = args.slice(0, -1)
        return { fn, middlewares }
    }

}

export default DollyRouter