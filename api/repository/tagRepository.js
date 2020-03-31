import { tagQuery } from '../query'
import { Tag } from '../model'
import { MySQLRepositoryBase } from '../../server/base'

class TagRepository extends MySQLRepositoryBase {
    
    constructor() {
        super(tagQuery)
    }
    
    async getTagsByItemId(itemId) {
        const tagList_ = await this.executeQuery(this.query.getTagsByItemId(itemId))

        let tagList = []
        tagList_.map(tag => tagList.push(new Tag(tag)))

        return tagList
    }
}

export default TagRepository