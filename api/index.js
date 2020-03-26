import ExpressAPI from './expressAPI'

const isAPI = process.env.NODE_ENV == 'api'

const expressAPI = new ExpressAPI()

const apiModule = {
    path: '/api',
    handler: expressAPI.express
}

export default (isAPI) ? expressAPI.run() : apiModule 