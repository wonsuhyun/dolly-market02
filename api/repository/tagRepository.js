import { tagQuery } from '../query'
import { Tag } from '../model'
import MySQLRepositoryBase from './mySQLRepositoryBase'

class TagRepository extends MySQLRepositoryBase {
    
    constructor() {
        super(tagQuery)
    }
    
    async getByItemId(itemId) {
        const tagList_ = await this.executeQuery(this.query.getByItemId(itemId))

        let tagList = []
        tagList_.map(tag => tagList.push(new Tag(tag)))

        return tagList
    }
}

export default TagRepository