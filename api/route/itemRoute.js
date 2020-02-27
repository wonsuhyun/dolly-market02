import DollyRouter from './dollyRouter'
import { itemService } from '../service'

const dollyRouter = new DollyRouter()

const router = dollyRouter.getRouter()

/*
Get item list
*/
dollyRouter.get('/', async (req, res) => {
    const items = await itemService.get()
    return items
})

/* 
Get item detail
*/
dollyRouter.get(["/:pid"], async (req, res) => {
    const pid = req.params.pid.toUpperCase()
    const item = await itemService.getById(pid)
    return item
})

export default router