import { imageRepository } from '../repository'
import { Image } from '../model'

class ImageService {
    
    async getImageById(imgId) {
        const image = await imageRepository.getImageById(imgId)
        return image
    }

    async getImagesByItemId(itemId) {
        const imageList_ = await imageRepository.getImagesByItemId(itemId)

        const imageList = []

        imageList_.map(image => {
            imageList.push(new Image(image))
        })

        return imageList
    }

}


export default new ImageService()