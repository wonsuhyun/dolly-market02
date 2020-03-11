import { imageQuery } from '../query'
import { executeQuery } from '../lib'

class ImageRepository {

    async getImagesByItemId(pid) {
        const queryResult = await executeQuery(imageQuery.getImagesByItemId(pid))
        return queryResult
    }
}

export default new ImageRepository()