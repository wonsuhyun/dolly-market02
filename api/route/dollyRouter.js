import express from 'express'
import createError from 'http-errors'

class DollyRouter {

    constructor() {
        this.router = express.Router()
        this.returnObj = { sucess: true }
    }

    getRouter() {
        return this.router
    }

    get(route, fn) {
        return this.router.get(route, this.asyncWrapper(fn))
    }

    asyncWrapper(fn) {
        return (req, res, next) =>
            fn(req, res, next)
                .then((resolve) => {
                    const returnObj = this.returnObj
                    returnObj.data = resolve
                    res.json(returnObj)
                })
                .catch(() => next(createError(500)))
    }
}

export default DollyRouter