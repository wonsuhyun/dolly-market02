import DollyRouter from './dollyRouter'
import passport from 'passport'
const dollyRouter = new DollyRouter()
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
    passport.authenticate('github', {
        failureRedirect: '/login',
        successRedirect: '/'
    })
})

export default router