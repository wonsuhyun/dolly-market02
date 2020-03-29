import { errorToNext } from '../util'
import createError from 'http-errors'

class RouteBase {
    constructor(path, service) {
        this.path = path
        this.service = service
        this.addRoutes = this.addRoutes.bind(this)
    }

    getRouter() {
        return this.router
    }

    setRouter(router) {
        this.router = router
        this.addRoutes()
    }

    addRoutes() {
        createError(500, 'Not Implemented')
    }

    addRoute(uri, httpMethod, boundAction) {
        this.router.route(this.path + uri)[httpMethod](this.errorWrapper(boundAction))
    }

    errorWrapper = (fn) => {
        return (req, res, next) => fn(req, res, next).catch((err) => {
            errorToNext(err, next)
        })
    }
}

export default RouteBase