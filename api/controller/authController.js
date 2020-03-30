import passport from 'passport'
import createError from 'http-errors'
import jwt from 'jsonwebtoken'

import { UserService } from '../service'
import { errorToNext } from '../../server/util'
import { ControllerBase } from '../../server/base'

class AuthController extends ControllerBase {

    constructor() {
        super(UserService)
    }

    async login(req, res, next) {
        passport.authenticate('local', { session: false }, (err, user) => {

            if (err) errorToNext(err, next)

            req.login(user, { session: false }, () => {
                const token = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET)
                return res.json({ user, token })
            })

        })(req, res)
    }

    async test(req, res, next) {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {

            if (!user) {
                return next(createError(403, 'Forbidden'))
            }

            if (err) errorToNext(err, next)

            return res.json({ success: true })
        })(req, res)

    }

    async signup(req, res, next) {
        const user = req.body
        await this.service.saveUser(user)
        res.json({ success: true })
    }

}

export default AuthController