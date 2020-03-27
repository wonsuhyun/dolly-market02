import ExpressAPI from './expressAPI'
const operateOnlyAPI = process.env.NODE_ENV == 'api'

const expressAPI = new ExpressAPI()
expressAPI.run(operateOnlyAPI)

const apiModule = {
    path: '/api',
    handler: expressAPI.app
}

export default apiModule 