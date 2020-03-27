import { imageQuery } from '../query'
import { Image } from '../model'
import ServiceBase from './serviceBase'

class ImageService extends ServiceBase {

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
        imageList_.map(image => {
            imageList.push(new Image(image))
        })
        
        return imageList
    }

}

export default ImageService