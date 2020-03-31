import { ItemRepository } from '../repository'
import { ControllerBase } from '../../server/base'

class ItemController extends ControllerBase {

    constructor() {
        super(ItemRepository)
    }

    async get(req, res) {
        const { pageNum } = req.query
        const items = await this.repository.get(pageNum)
        res.json(items)
    }

    async getById(req, res) {
        const { pid } = req.params
        const item = await this.repository.getById(pid)
        res.json(item)
    }
}

export default ItemController