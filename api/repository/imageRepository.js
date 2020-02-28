import { imageQuery } from '../query'
import DollyRepository from './dollyRepository'

class ImageRepository extends DollyRepository {

    async getImagesByItemId(pid) {
        const queryResult = await this.executeQuery(imageQuery.getImagesByItemId(pid))
        return queryResult
    }
}

export default new ImageRepository()