import ExpressAPI from './expressAPI'
const onlyAPIListen = process.env.NODE_ENV == 'api'

const expressAPI = new ExpressAPI()
expressAPI.run(onlyAPIListen)

const apiModule = {
    path: '/api',
    handler: expressAPI.app
}

export default apiModule 