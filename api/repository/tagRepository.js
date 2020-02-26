import { mysqlUtil } from '../util'
import { tagQuery } from '../query'

class TagRepository { 

    async getTagsByItemId(pid) {
        const queryResult = await mysqlUtil.executeQuery(tagQuery.getTagsByItemId(pid))
        return queryResult
    }
}

export default new TagRepository()