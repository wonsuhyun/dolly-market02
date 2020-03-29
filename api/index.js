import ExpressAPI from './expressAPI'
import { ItemRoute } from './route'

const onlyAPIListen = process.env.NODE_ENV == 'api'

const expressAPI = new ExpressAPI([
    new ItemRoute()
])

expressAPI.run(onlyAPIListen)

const apiModule = {
    path: '/api',
    handler: expressAPI.app
}

export default apiModule 