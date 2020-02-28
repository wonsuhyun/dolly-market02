// import { mysqlUtil } from '../util'
import { itemQuery } from '../query'
import DollyRepository from './dollyRepository'

class ItemRepository extends DollyRepository {

    async get(pageNum) {
        const queryResult = await this.executeQuery(itemQuery.getItems(pageNum, this.DEFAULT_PAGE_INDEX, this.DEFAULT_PAGE_SIZE))
        return queryResult
    }

    async getById(pid) {
        const queryResult = await this.executeQuery(itemQuery.getItemById(pid))
        return queryResult
    }

}

export default new ItemRepository()