import DollyRouter from './dollyRouter'
import passport from 'passport'
import consola from 'consola'
import createError from 'http-errors'
import jwt from 'jsonwebtoken'
import { methods } from '../util'
const dollyRouter = new DollyRouter()
// Todo: sync, async 나눠서 리팩토링 해야함
const router = dollyRouter.getRouter()

dollyRouter.handler(methods.POST, '/login', async (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user) => {

        if(!user){
            throw new createError(400, 'User not Found')
        }
        
        req.login(user, { session: false }, () => {
            // jwt.sign('token내용', 'JWT secretkey')
            const token = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET)
            return res.json({ user, token })
        })

    })(req, res)
})

// Todo: 에러 핸들링
dollyRouter.handler(methods.GET, '/test', passport.authenticate('jwt', {session: false}), async (req, res) => {
    res.json({message: 'success'})
})

export default router