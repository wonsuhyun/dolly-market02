import { tagQuery } from '../query'
import { Tag } from '../model'
import DollyService from './dollyService'

class TagService extends DollyService {
    
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

export default new TagService()