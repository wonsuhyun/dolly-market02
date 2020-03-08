import { userQuery } from '../query'
import DollyRepository from './dollyRepository'

class UserRepository extends DollyRepository { 

    async getAuth(email, password) {
        const queryResult = await this.executeQuery(userQuery.getAuth(email, password))
        return queryResult[0]
    }

    async getUserByEmail(email) {
        const queryResult = await this.executeQuery(userQuery.getUserByEmail(email))
        return queryResult[0]
    }
}

export default new UserRepository()