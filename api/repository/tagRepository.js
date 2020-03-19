import { tagQuery } from '../query'
import { executeQuery } from '../lib'
import DollyRepository from './dollyRepository'

class TagRepository extends DollyRepository {

    constructor() {
        super(tagQuery)
    }

    async getTagsByItemId(pid) {
        const queryResult = await executeQuery(this.query.getTagsByItemId(pid))
        return queryResult
    }
}

export default new TagRepository()