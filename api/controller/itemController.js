import { ItemRepository } from '../repository'
import { ControllerBase } from '../../server/base'

class ItemController extends ControllerBase {

    constructor() {
        super(ItemRepository)
    }

    async get(req, res) {
        // Todo: getById와 같은 포맷으로 데이터 넘겨야함
        const { pageNum } = req.query
        const items = await this.repository.get(pageNum)
        this.ok(res, items)
    }

    async getById(req, res) {
        const { pid } = req.params
        const item = await this.repository.getById(pid)
        this.ok(res, item)
    }
}

export default ItemController