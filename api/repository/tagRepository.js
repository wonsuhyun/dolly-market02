import { tagQuery } from '../query'
import DollyRepository from './dollyRepository'

class TagRepository extends DollyRepository { 

    async getTagsByItemId(pid) {
        const queryResult = await this.executeQuery(tagQuery.getTagsByItemId(pid))
        return queryResult
    }
}

export default new TagRepository()