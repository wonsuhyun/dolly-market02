import { userQuery } from '../query'
import { executeQuery } from '../lib'

class UserRepository { 

    async getAuth(email, password) {
        const queryResult = await executeQuery(userQuery.getAuth(email, password))
        return queryResult[0]
    }

    async getUserByEmail(email) {
        const queryResult = await executeQuery(userQuery.getUserByEmail(email))
        return queryResult[0]
    }
}

export default new UserRepository()