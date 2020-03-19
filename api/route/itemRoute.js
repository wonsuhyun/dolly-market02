import DollyRouter from './dollyRouter'
import { ItemService } from '../service'
const dollyRouter = new DollyRouter()
const itemService = new ItemService()
const router = dollyRouter.getRouter()
import { methods } from '../constant'
/*
Get item list
*/
dollyRouter.handler(methods.GET, '/', async (req, res) => {
    const pageNum = req.query.pageNum
    const items = await itemService.getItems(pageNum)
    res.json(items)
})

/* 
Get item detail
*/
dollyRouter.handler(methods.GET, '/:pid', async (req, res) => {
    const pid = req.params.pid.toUpperCase()
    const item = await itemService.getItemById(pid)
    res.json(item)
})


export default router