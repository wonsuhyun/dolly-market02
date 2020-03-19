import { userRepository } from '../repository'
import { imageService } from '../service'
import { User } from '../model'
import { criptPassword } from '../util'
import createError from 'http-errors'
import { v4 as uuidv4 } from 'uuid'

class UserService {

    async getAuth(email, password){

        const criptedPassword = criptPassword(password)
        const user_ = await userRepository.getAuth(email, criptedPassword)

        if (!user_) {
            throw new createError(401, `User not Found: ${email}`)
        }

        const imgId = user_.img_rid
        const image = await this.getProfileImage(imgId)
        const user = new User(user_)
        user.image = image

        return user
    }

    async getUserByEmail(email) {
        const user_ = await userRepository.getUserByEmail(email, password)
        const user = new User(user_)

        return user
    }

    async getProfileImage(imgId) {
        // 마스터 이미지 리스트 추가
        const image = await imageService.getImageById(imgId)

        return image
    }

    async saveUser(user) {
        // 비밀번호 암호화
        const { password } = user
        user.password = criptPassword(password)
        user.pid = uuidv4()

        // Todo: 닉네임, 이메일 등 중복검사
        // Todo: imgId랑 트랜잭선 처리
        // Todo: 이미지 업로드
        await userRepository.saveUser(user)
    }

}

export default new UserService()