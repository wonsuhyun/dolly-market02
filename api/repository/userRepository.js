import createError from 'http-errors'
import { v4 as uuidv4 } from 'uuid'

import { userQuery } from '../query'
import ImageRepository from './imageRepository'
import { User, Image } from '../model'
import { criptPassword } from '../util'
import MySQLRepositoryBase from './mySQLRepositoryBase'

class UserRepository extends MySQLRepositoryBase {
   
    constructor() {
        super(userQuery)
        this.imageRepository = new ImageRepository()
    }

    async getAuth(email, password){

        const criptedPassword = criptPassword(password)
        let user = await this.executeQuery(this.query.getAuth(email, criptedPassword))

        if (user.length == 0 || !user) {
            throw new createError(401, `User not Found: ${email}`)
        }

        const imgId = user.img_rid
        if (imgId) user = await this.getProfileImage(imgId)

        user = new User(user[0])

        return user
    }

    async getByEmail(email) {
        let user = await this.executeQuery(this.query.getByEmail(email))
        user = user[0] ? new User(user[0]) : user

        return user
    }

    async getProfileImage(user) {
        const image = await this.imageRepository.getById(imgId)
        user.image = new Image(image[0])

        return user
    }

    async save(user) {
        // 이메일 중복 검사
        const { email, password } = user
        const _user = await this.getByEmail(email)
        if (_user.length > 0) throw new createError(409, `User Already Exists: ${ email }`)

        // 비밀번호 암호화
        user.password = criptPassword(password)
        user.pid = uuidv4()
        await this.executeQuery(this.query.save(user))
    }

}

export default UserRepository