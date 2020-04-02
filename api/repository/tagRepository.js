import { tagQuery } from '../query'
import { Tag } from '../model'
import { MySQLRepositoryBase } from '../../server/base/'

class TagRepository extends MySQLRepositoryBase {
    
    constructor() {
        super(tagQuery)
    }
    
    async getByItemId(itemId) {
        const tagList = await this.executeQuery(this.query.getByItemId(itemId))

        tagList.map(tag => tag = new Tag(tag))

        return tagList
    }
}

export default TagRepository