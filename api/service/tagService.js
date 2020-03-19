import { tagRepository } from '../repository'
import { Tag } from '../model'
import DollyService from './dollyService'

class TagService extends DollyService {
    
    constructor() {
        super(tagRepository)
    }
    
    async getTagsByItemId(itemId) {
        const tagList_ = await this.repository.getTagsByItemId(itemId)

        const tagList = []

        tagList_.map(tag => {
            tagList.push(new Tag(tag))
        })

        return tagList
    }
}

export default new TagService()