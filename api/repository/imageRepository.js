import { imageQuery } from '../query'
import { Image } from '../model'
import MySQLRepositoryBase from './mySQLRepositoryBase'

class ImageRepository extends MySQLRepositoryBase {

    constructor() {
        super(imageQuery)
    }
    
    async getById(imgId) {
        const image = await this.executeQuery(this.query.getById(imgId))
        return image
    }

    async getByItemId(itemId) {
        const imageList_ = await this.executeQuery(this.query.getByItemId(itemId))

        const imageList = []
        imageList_.map(image => imageList.push(new Image(image)))
        
        return imageList
    }

}

export default ImageRepository