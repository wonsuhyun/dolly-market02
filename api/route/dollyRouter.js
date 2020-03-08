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

    post(route, fn) {
        return this.router.post(route, this.asyncWrapper(fn))
    }

    asyncWrapper(fn) {
        return (req, res, next) => fn(req, res, next).catch((error) => {
            const { status, message } = error
            next(createError(status, message) || createError(500))
        })
    }
}

export default DollyRouter