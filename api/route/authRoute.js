import DollyRouter from './dollyRouter'
import passport from 'passport'
import consola from 'consola'
import jwt from 'jsonwebtoken'
const dollyRouter = new DollyRouter()
// Todo: sync, async 나눠서 리팩토링 해야함
const router = dollyRouter.getRouter()

dollyRouter.post('/token', async (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user) => {

        if(!user){
            const status = 400
            return res.status(status).json({
                status,
                message: 'User not Found'
            })
        }
        
        req.login(user, { session: false }, () => {
            // jwt.sign('token내용', 'JWT secretkey')
            const token = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET)
            return res.json({ user, token })
        })

    })(req, res)
})

router.get('/test', passport.authenticate('jwt', {session: false}), async (req, res) => {
    res.json({message: 'success'})
})

export default router