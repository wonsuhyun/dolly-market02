import { tagQuery } from '../query'
import { Tag } from '../model'
import { MySQLRepositoryBase } from '../../server/base/'

class TagRepository extends MySQLRepositoryBase {
    
    constructor() {
        super(tagQuery)
    }
    
    async getByItemId(itemId) {
        const _tagList = await this.executeQuery(this.query.getByItemId(itemId))

        let tagList = []
        _tagList.map(tag => tagList.push(new Tag(tag)))

        return tagList
    }
}

export default TagRepository