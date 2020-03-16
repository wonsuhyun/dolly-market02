import { itemQuery } from '../query'
import { executeQuery } from '../lib'
import { paging } from '../constant'

class ItemRepository {

    async get(pageNum) {
        const queryResult = await executeQuery(itemQuery.getItems(pageNum, paging.DEFAULT_PAGE_SIZE))
        // const queryResult = await executeQuery(itemQuery.getItems(9, 1))
        return queryResult
    }

    async getById(pid) {
        const queryResult = await executeQuery(itemQuery.getItemById(pid))
        return queryResult
    }

}

export default new ItemRepository()