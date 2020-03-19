import express from 'express'
import passport from 'passport'
import createError from 'http-errors'
import jwt from 'jsonwebtoken'

import { UserService } from '../service'
import { errorToNext } from '../util'
import { errorWrapper } from '../util'

const router = express.Router()
const userService = new UserService()

/*
Login
*/
router.post('/login', errorWrapper(async (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user) => {

        if (err) errorToNext(err, next)

        req.login(user, { session: false }, () => {
            const token = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET)
            return res.json({ user, token })
        })

    })(req, res)
}))

/*
Auth Test
*/
router.get('/test',
    errorWrapper(async (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {

            if (!user) {
                return next(createError(403, 'Forbidden'))
            }

            if (err) errorToNext(err, next)

            return res.json({ message: 'success' })
        })(req, res)

    }))

/*
Signup
*/
router.get('/signup',
    errorWrapper(async (req, res, next) => {
        userService.saveUser({ email: "pho@test.com", nickname: "오늘점심메뉴쌀국수", password: "pho", imgId: "P00001" })
        res.json({ success: true })
    }))

export default router