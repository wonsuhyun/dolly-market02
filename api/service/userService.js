import { userRepository } from '../repository'
import { User } from '../model'

class UserService {

    async getAuth(email, password){
        const user_ = await userRepository.getAuth(email, password)
        const user = new User(user_[0])

        return user
    }

    async getUserByEmail(email) {
        const user_ = await userRepository.getUserByEmail(email, password)
        const user = new User(user_)

        return user
    }
}

export default new UserService()