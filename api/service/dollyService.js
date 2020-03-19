import { executeQuery } from '../lib'

class DollyService {
    constructor(query) {
        this.query = query
        // this.executeQuery = executeQuery
    }

    async executeQuery(...args) {
        return executeQuery(...args)
    }
}

export default DollyService