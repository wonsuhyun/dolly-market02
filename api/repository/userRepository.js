import createError from 'http-errors'
import { v4 as uuidv4 } from 'uuid'

import { userQuery } from '../query'
import ImageRepository from './imageRepository'
import { User, Image } from '../model'
import { criptPassword } from '../util'
import { MySQLRepositoryBase } from '../../server/base/'

class UserRepository extends MySQLRepositoryBase {
   
    constructor() {
        super(userQuery)
        this.imageRepository = new ImageRepository()
    }

    async getAuth(email, password){

        const criptedPassword = criptPassword(password)
        const user_ = await this.executeQuery(this.query.getAuth(email, criptedPassword))

        if (user_.length < 1 || !user_) {
            throw new createError(401, `User not Found: ${email}`)
        }

        let user = await this.getProfileImage(user_[0])

        user = new User(user)

        return user
    }

    async getUserByEmail(email) {
        const user_ = await this.executeQuery(this.query.getUserByEmail(email))
        const user = new User(user_)

        return user
    }

    async getProfileImage(user) {
        // 마스터 이미지 리스트 추가
        const imgId = user.img_rid
        const image = await this.imageRepository.getImageById(imgId)
        user.image = new Image(image[0])

        return user
    }

    async saveUser(user) {
        // 비밀번호 암호화
        const { password } = user
        user.password = criptPassword(password)
        user.pid = uuidv4()

        // Todo: 닉네임, 이메일 등 중복검사
        await this.executeQuery(this.query.saveUser(user))
    }

}

export default UserRepository