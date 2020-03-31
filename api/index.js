import APIServer from './apiServer'
import { ItemRoute, AuthRoute } from './route'

const apiServer = new APIServer([
    new ItemRoute(),
    new AuthRoute()
])

apiServer.run()

const apiServerModule = {
    path: '/api',
    handler: apiServer.app
}

export default apiServerModule 