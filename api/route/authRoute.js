import DollyRouter from './dollyRouter'
import passport from 'passport'
import consola from 'consola'
import jwt from 'jsonwebtoken'
const dollyRouter = new DollyRouter()
// Todo: sync, async 나눠서 리팩토링 해야함
const router = dollyRouter.getRouter()

dollyRouter.post('/token', async (req, res) => {
    passport.authenticate('local', { session: false }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                message: err.message,
                user: user
            })
        }
        debugger
        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err)
            }
            // jwt.sign('token내용', 'JWT secretkey')
            const token = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET);
            return res.json({ user, token })
        })

    })(req, res)
})

// async (req, res) => {
//     const user = await userService.getAuth('8282@test.com', '1234')
//     res.json(user)
// }
router.get('/test', async (req, res) => {
    res.json({ "OK": "OK" })
})

export default router