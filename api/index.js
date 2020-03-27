import ExpressAPI from './expressAPI'
const isExecutable = process.env.NODE_ENV == 'api'

const expressAPI = new ExpressAPI()
expressAPI.run(isExecutable)

const apiModule = {
    path: '/api',
    handler: expressAPI.app
}

export default apiModule 