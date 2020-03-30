import { ItemRepository } from '../repository'
import { ControllerBase } from '../../server/base'

class ItemController extends ControllerBase {

    constructor() {
        super(ItemRepository)
    }

    async getItems(req, res) {
        const pageNum = req.query.pageNum
        const items = await this.repository.getItems(pageNum)
        res.json(items)
    }

    async getItemById(req, res) {
        const { pid } = req.params
        const item = await this.repository.getItemById(pid)
        res.json(item)
    }
}

export default ItemController