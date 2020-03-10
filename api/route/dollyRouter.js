import express from 'express'
import createError from 'http-errors'
import { asyncWrapper } from '../util'

// Parent Router
class DollyRouter {

    constructor() {
        this.router = express.Router()
    }

    getRouter() {
        return this.router
    }

    get(route, fn) {
        return this.router.get(route, asyncWrapper(fn))
    }

    post(route, fn) {
        return this.router.post(route, asyncWrapper(fn))
    }

}

export default DollyRouter