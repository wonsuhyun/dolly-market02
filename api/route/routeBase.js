import createError from 'http-errors'

class RouteBase {
    constructor() {
        this.router = ''
    }
    errorWrapper = (fn) => {
        return (req, res, next) => fn(req, res, next).catch((err) => {
            errorToNext(err, next)
        })
    }

}