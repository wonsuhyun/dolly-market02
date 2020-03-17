import { tagRepository } from '../repository'
import { Tag } from '../model'

class TagService {

    async getTagsByItemId(itemId) {
        const tagList_ = await tagRepository.getTagsByItemId(itemId)

        const tagList = []

        tagList_.map(tag => {
            tagList.push(new Tag(tag))
        })

        return tagList
    }
}

export default new TagService()