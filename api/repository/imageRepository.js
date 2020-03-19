import { imageQuery } from '../query'
import { executeQuery } from '../lib'
import DollyRepository from './dollyRepository'

class ImageRepository extends DollyRepository {

    constructor() {
        super(imageQuery)
    }

    async getImagesByItemId(itemId) {
        const queryResult = await executeQuery(this.query.getImagesByItemId(itemId))
        return queryResult
    }

    async getImageById(pid) {
        const queryResult = await executeQuery(this.query.getImageById(pid))
        return queryResult
    }
}

export default new ImageRepository()