import { imageQuery } from '../query'
import { executeQuery } from '../lib'

class ImageRepository {

    async getImagesByItemId(itemId) {
        const queryResult = await executeQuery(imageQuery.getImagesByItemId(itemId))
        return queryResult
    }

    async getImageById(pid) {
        const queryResult = await executeQuery(imageQuery.getImageById(pid))
        return queryResult
    }
}

export default new ImageRepository()