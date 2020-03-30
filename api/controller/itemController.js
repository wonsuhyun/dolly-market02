import { ItemService } from '../service'
import ControllerBase from '../../server/base'

class ItemController extends ControllerBase {

    constructor() {
        super(ItemService)
    }

    async getItems(req, res) {
        const pageNum = req.query.pageNum
        const items = await this.service.getItems(pageNum)
        res.json(items)
    }

    async getItemById(req, res) {
        const { pid } = req.params
        const item = await this.service.getItemById(pid)
        res.json(item)
    }
}

export default ItemController