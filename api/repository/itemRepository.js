import { mysqlUtil } from '../util'
import { itemQuery } from '../query'

class ItemRepository {

    async get() {
        const queryResult = await mysqlUtil.executeQuery(itemQuery.getItems())

        return queryResult
    }

    async getById(pid) {
        const queryResult = await mysqlUtil.executeQuery(itemQuery.getItemById(pid))

        return queryResult
    }

}

export default new ItemRepository()