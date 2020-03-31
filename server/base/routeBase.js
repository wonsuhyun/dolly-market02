import { errorToNext } from '../util'
import createError from 'http-errors'

class RouteBase {
    constructor(path, ControllerClass) {
        this.path = path
        this.controller = new ControllerClass()
        this.addRoutes = this.addRoutes.bind(this)
    }

    setRouter(router) {
        this.router = router
    }

    addRoute(uri, httpMethod, boundAction) {
        this.router[httpMethod](uri, this.asyncWrapper(boundAction))
    }

    asyncWrapper = (boundAction) => {    
        return (req, res, next) => boundAction.bind(this.controller)(req, res, next).catch((err) => {
            errorToNext(err, next)
        })
    }
}

export default RouteBase