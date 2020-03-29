import APIServer from './apiServer'
import { ItemRoute } from './route'

const onlyAPIListen = process.env.NODE_ENV == 'api'

const apiServer = new APIServer([
    new ItemRoute()
])

apiServer.run(onlyAPIListen)

const apiServerModule = {
    path: '/api',
    handler: apiServer.app
}

export default apiServerModule 