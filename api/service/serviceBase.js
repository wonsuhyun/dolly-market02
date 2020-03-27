import { executeQuery } from '../util'

class ServiceBase {
    constructor(query) {
        this.query = query
    }

    async executeQuery(...args) {
        return executeQuery(...args)
    }
}

export default ServiceBase