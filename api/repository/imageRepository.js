import { imageQuery } from '../query'
import { Image } from '../model'
import { MySQLRepositoryBase } from '../../server/base'

class ImageRepository extends MySQLRepositoryBase {

    constructor() {
        super(imageQuery)
    }
    
    async getImageById(imgId) {
        const image = await this.executeQuery(this.query.getImageById(imgId))
        return image
    }

    async getImagesByItemId(itemId) {
        const imageList_ = await this.executeQuery(this.query.getImagesByItemId(itemId))

        const imageList = []
        imageList_.map(image => imageList.push(new Image(image)))
        
        return imageList
    }

}

export default ImageRepository