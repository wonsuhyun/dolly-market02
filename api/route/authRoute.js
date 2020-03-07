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
router.get('/google/callback', 
    passport.authenticate('google', {
        failureRedirect: '/',
        successRedirect: '/'
    })
)

router.get('/test', ensureAuthenticated, async (req, res) => {
    console.log('OK')
})

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next() }
    res.redirect('/login')
}

export default router