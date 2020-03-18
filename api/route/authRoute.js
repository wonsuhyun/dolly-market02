import passport from 'passport'
import createError from 'http-errors'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import { methods } from '../constant'
import DollyRouter from './dollyRouter'
import { userService } from '../service'
const dollyRouter = new DollyRouter()
const router = dollyRouter.getRouter()

// Todo: 부모로 extends 받게 리팩토링
dollyRouter.handler(methods.POST, '/login', async (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user) => {

        if (err) {
            return next(createError(500, 'Internal Server Error'))
        }

        if (!user) {
            return next(createError(404, 'User not Found'))
        }

        req.login(user, { session: false }, () => {
            const token = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET)
            return res.json({ user, token })
        })

    })(req, res)
})

dollyRouter.handler(methods.GET, '/test',
    async (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {

            if (err) {
                return next(createError(500, 'Internal Server Error'))
            }

            if (!user) {
                return next(createError(401, 'Unauthorized'))
            }

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