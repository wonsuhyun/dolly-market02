
import DollyRouter from './dollyRouter'
import { itemService } from '../service'

const router = DollyRouter.getRouter()

/*
Get item list
*/
DollyRouter.get('/', async (req, res) => {
    res.json(await itemService.get());
})

/* 
Get item detail
*/
DollyRouter.get(["/:pid"], async (req, res) => {
    const pid = req.params.pid.toUpperCase()
    const item = await itemService.getById(pid)
    res.json(item)
})

export default router