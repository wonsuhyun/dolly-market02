import passport from 'passport'
import createError from 'http-errors'
import jwt from 'jsonwebtoken'

import { methods } from '../constant'
import DollyRouter from './dollyRouter'
import { UserService } from '../service'
import { errorToNext } from '../util'
const dollyRouter = new DollyRouter()
const userService = new UserService()
const router = dollyRouter.getRouter()

dollyRouter.handler(methods.POST, '/login', async (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user) => {

        if (err) errorToNext(err, next)

        req.login(user, { session: false }, () => {
            const token = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET)
            return res.json({ user, token })
        })

    })(req, res)
})

dollyRouter.handler(methods.GET, '/test',
    async (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {

            // Todo: Error 리팩토링
            if (!user) {
                return next(createError(403, 'Forbidden'))
            }

            if (err) errorToNext(err, next)

            return res.json({ message: 'success' })
        })(req, res)

    })

dollyRouter.handler(methods.GET, '/signup', 
    async (req, res, next) => {
        userService.saveUser({ email: "pho@test.com", nickname: "오늘점심메뉴쌀국수", password: "pho", imgId: "P00001" })
        res.json({success: true})
    }
)

export default router