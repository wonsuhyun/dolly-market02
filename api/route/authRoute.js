import DollyRouter from './dollyRouter'
import passport from 'passport'
import consola from 'consola'
import { userService } from '../service'
const dollyRouter = new DollyRouter()
// Todo: sync, async 나눠서 리팩토링 해야함
const router = dollyRouter.getRouter()

router.get('/signin', async (req, res) => {
    const user = await userService.getAuth('8282@test.com', '1234')
    res.json(user)
}
    // passport.authenticate('google', { scope: ['profile'] })
)

router.get('/test', async (req, res) => {
    console.log('OK')
})

export default router