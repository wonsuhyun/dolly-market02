import { userRepository } from '../repository'
import { User } from '../model'
import createError from 'http-errors'

class UserService {

    async getAuth(email, password){
        const user_ = await userRepository.getAuth(email, password)

        const user = new User(user_)

        return user
    }

    async getUserByEmail(email) {
        const user_ = await userRepository.getUserByEmail(email, password)
        const user = new User(user_)

        return user
    }
}

export default new UserService()