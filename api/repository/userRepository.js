import { userQuery } from '../query'
import DollyRepository from './dollyRepository'

class UserRepository extends DollyRepository { 

    async getAuth(email, password) {
        const queryResult = await this.executeQuery(userQuery.getAuth(email, password))
        return queryResult
    }

    async getUserByEmail(email, password) {
        const queryResult = await this.executeQuery(userQuery.getUserByEmail(email))
        return queryResult
    }
}

export default new UserRepository()