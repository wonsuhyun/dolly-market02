import express from 'express'
import createError from 'http-errors'

// Parent Router
class DollyRouter {

    constructor() {
        this.router = express.Router()
    }

    getRouter() {
        return this.router
    }

    get(route, fn) {
        return this.router.get(route, this.asyncWrapper(fn))
    }

    asyncWrapper(fn) {
        return (req, res, next) => fn(req, res, next).catch((error) => {
            next(error || createError(500))
        })
    }
}

export default DollyRouter