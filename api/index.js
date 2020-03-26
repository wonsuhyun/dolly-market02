import ExpressAPI from './expressAPI'

const expressAPI = new ExpressAPI()

const apiModule = {
    path: '/api',
    handler: expressAPI.express,
    run: expressAPI.run()
}

export default apiModule