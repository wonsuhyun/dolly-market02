import { userQuery } from '../query'
import { executeQuery } from '../lib'
import DollyRepository from './dollyRepository'

class UserRepository extends DollyRepository {

    constructor() {
        super(userQuery)
    }

    async getAuth(email, password) {
        const queryResult = await executeQuery(this.query.getAuth(email, password))
        return queryResult[0] ? queryResult[0] : null
    }

    async getUserByEmail(email) {
        const queryResult = await executeQuery(this.query.getUserByEmail(email))
        return queryResult[0]
    }

    async saveUser(user) {
        await executeQuery(this.query.saveUser(user))
    }
}

export default new UserRepository()