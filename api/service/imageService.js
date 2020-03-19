import { imageRepository } from '../repository'
import { Image } from '../model'
import DollyService from './dollyService'

class ImageService extends DollyService {

    constructor() {
        super(imageRepository)
    }
    
    async getImageById(imgId) {
        const image = await this.repository.getImageById(imgId)
        return image
    }

    async getImagesByItemId(itemId) {
        const imageList_ = await this.repository.getImagesByItemId(itemId)

        const imageList = []
        imageList_.map(image => {
            imageList.push(new Image(image))
        })
        
        return imageList
    }

}

export default new ImageService()