const ExpressAPI = require('./expressAPI')
const isAPI = process.env.NODE_ENV == 'api'
const expressAPI = new ExpressAPI()

const runExpress = expressAPI.run()

const apiModule = {
    path: '/api',
    handler: expressAPI.express
}

module.exports = (isAPI) ? runExpress : apiModule

