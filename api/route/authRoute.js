import RouteBase from './routeBase'
import { paths, methods } from '../constant'
import { AuthController } from '../controller'

class AuthRoute extends RouteBase {
    constructor() {
        super(paths.AUTH, AuthController)
    }

    addRoutes() {
        this.addRoute('/login', methods.POST, this.controller.login)
        this.addRoute('/test', methods.GET, this.controller.test)
        this.addRoute('/signup', methods.POST, this.controller.save)
    }

}

export default AuthRoute

