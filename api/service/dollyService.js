import { executeQuery } from '../util'

class DollyService {
    constructor(query) {
        this.query = query
    }

    async executeQuery(...args) {
        return executeQuery(...args)
    }
}

export default DollyService