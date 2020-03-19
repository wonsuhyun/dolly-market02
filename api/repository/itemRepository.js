import { itemQuery } from '../query'
import { executeQuery } from '../lib'
import { paging } from '../constant'
import DollyRepository from './dollyRepository'

class ItemRepository extends DollyRepository {

    constructor() {
        super(itemQuery)
    }

    async get(pageNum) {
        const queryResult = await executeQuery(this.query.getItems(pageNum || paging.DEFAULT_PAGE_INDEX, paging.DEFAULT_PAGE_SIZE))
        return queryResult
    }

    async getById(pid) {
        const queryResult = await executeQuery(this.query.getItemById(pid))
        return queryResult
    }

}

export default new ItemRepository()