import passport from 'passport'
import createError from 'http-errors'

import { UserRepository } from '../repository'
import { issueToken, errorToNext } from '../util'
import ControllerBase from './controllerBase'

class AuthController extends ControllerBase {

    constructor() {
        super(UserRepository)
    }

    async login(req, res, next) {
        passport.authenticate('local', { session: false }, (err, user) => {
            if (err) return errorToNext(err, next)
            return req.login(user, { session: false }, this.ok(res, issueToken(user)))
        })(req, res)
    }

    // Todo: 공통 함수로 빼기
    async test(req, res, next) {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {

            if (!user) return next(createError(403, 'Forbidden'))

            if (err) errorToNext(err, next)

            return res.json({ success: true })
        })(req, res)

    }

    async save(req, res, next) {
        const user = req.body
        const { email } = user
        const _user = this.repository.getByEmail(email)
        if (_user) {
            throw new createError(409, `User Already Exists: ${email}`)
        }
        await this.repository.save(user)
        const data = {email : user.email}
        this.created(res, data)
    }

}

export default AuthController