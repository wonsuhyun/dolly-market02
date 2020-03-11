import { tagQuery } from '../query'
import { executeQuery } from '../lib'

class TagRepository { 

    async getTagsByItemId(pid) {
        const queryResult = await executeQuery(tagQuery.getTagsByItemId(pid))
        return queryResult
    }
}

export default new TagRepository()