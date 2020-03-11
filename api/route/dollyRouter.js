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

    get(route, ...args) {
        const { middlewares, fn } = this.filterArguments(args)
        return this.router.get(route, middlewares, asyncWrapper(fn))
    }

    post(route, ...args) {
        const { middlewares, fn } = this.filterArguments(args)
        return this.router.post(route, middlewares, asyncWrapper(fn))
    }

    filterArguments(args) {
        const size = args.length
        const fn = args[size-1]
        const middlewares = args.slice(0, -1)
        return { fn, middlewares }
    }

}

export default DollyRouter