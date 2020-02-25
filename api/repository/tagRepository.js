import { mysqlUtil } from '../util'
import { tagQuery } from '../query'

class TagRepository { 

    async getTagsByItemId(item) {
        const queryResult = await mysqlUtil.executeQuery(tagQuery.getTagsByItemId(item.pid))
        return queryResult
    }
}

export default new TagRepository()