import { mysqlUtil } from '../util'
import { imageQuery } from '../query'

class ImageRepository {

    async getImagesByItemId(item) {
        const queryResult = await mysqlUtil.executeQuery(imageQuery.getImagesByItemId(item.pid))
        return queryResult
    }
}

export default new ImageRepository()