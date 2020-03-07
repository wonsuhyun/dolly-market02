import DollyRouter from './dollyRouter'
import passport from 'passport'
import consola from 'consola'
const dollyRouter = new DollyRouter()
// Todo: sync, async 나눠서 리팩토링 해야함
const router = dollyRouter.getRouter()

/*
Google oAuth Login
*/
router.get('/google',
    passport.authenticate('google', { scope: ['profile'] })
)

/*
Google oAuth Callback
*/
router.get('/google/callback', function (Req, res, next) {
    consola.success('Login success')
    passport.authenticate('google', {
        failureRedirect: '/',
        successRedirect: '/'
    })
})

export default router