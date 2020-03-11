import DollyRouter from './dollyRouter'
import { itemService } from '../service'
const dollyRouter = new DollyRouter()
const router = dollyRouter.getRouter()
import { methods } from '../util'

/*
Get item list
*/
dollyRouter.handler(methods.GET, '/', async (req, res) => {
    const pageNum = req.query.pageNum
    const items = await itemService.get(pageNum)
    res.json(items)
})

/* 
Get item detail
*/
dollyRouter.handler(methods.GET, '/:pid', async (req, res) => {
    const pid = req.params.pid.toUpperCase()
    const item = await itemService.getById(pid)
    res.json(item)
})


export default router