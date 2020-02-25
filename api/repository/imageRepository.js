import { mysqlUtil } from '../util'
import { imageQuery } from '../query'

class ImageRepository {

    async getImagesByItemId(pid) {
        const queryResult = await mysqlUtil.executeQuery(imageQuery.getImagesByItemId(pid))
        return queryResult
    }
}

export default new ImageRepository()