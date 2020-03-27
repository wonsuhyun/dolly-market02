import { tagQuery } from '../query'
import { Tag } from '../model'
import ServiceBase from './serviceBase'

class TagService extends ServiceBase {
    
    constructor() {
        super(tagQuery)
    }
    
    async getTagsByItemId(itemId) {
        const tagList_ = await this.executeQuery(this.query.getTagsByItemId(itemId))

        const tagList = []

        tagList_.map(tag => {
            tagList.push(new Tag(tag))
        })

        return tagList
    }
}

export default TagService