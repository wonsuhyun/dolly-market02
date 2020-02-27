import { itemRepository, imageRepository, tagRepository } from '../repository'
import { Image, Item, Tag, User } from '../model'
import createError from 'http-errors'

class ItemService {

    async get() {

        const itemList_ = await itemRepository.get()

        const itemList = []

        itemList_.map(item => {
            item = this.getMasterImageInfo(item)

            item = this.getUserInfo(item)

            itemList.push(new Item(item))

        })

        return itemList
    }

    async getById(pid) {

        let item_ = await itemRepository.getById(pid)

        let item = item_[0]

        item = this.getUserInfo(item)

        item = await this.getImagesByItemId(item)

        item = await this.getTagsByItemId(item)

        item = new Item(item)

        return item
    }

    getUserInfo(item) {

        // 유저 정보 추가
        const profileImage = {
            pid: item.user_file_pid,
            create_date: item.user_file_create_date,
            file_name: item.user_file_name,
            file_url: item.user_file_url
        }

        const user = {
            pid: item.user_pid,
            create_date: item.user_create_date,
            modify_date: item.user_modify_date,
            email: item.user_email,
            nickname: item.user_nickname,
            image: profileImage
        }

        item['user'] = new User(user)

        return item
    }

    getMasterImageInfo(item) {
        // 마스터 이미지 리스트 추가
        const masterImage = {
            pid: item.master_file_pid,
            create_date: item.master_file_create_date,
            file_name: item.master_file_name,
            file_url: item.master_file_url,
            file_size: item.master_file_size,
            master_flag: item.master_file_master_flag
        }

        const imageArr = []

        imageArr.push(new Image(masterImage))

        item['images'] = imageArr

        return item
    }

    async getTagsByItemId(item) {

        const tagList_ = await tagRepository.getTagsByItemId(item.pid)

        const tagList = []

        tagList_.map(tag => {
            tagList.push(new Tag(tag))
        })

        item['tags'] = tagList

        return item
    }

    async getImagesByItemId(item) {

        const imageList_ = await imageRepository.getImagesByItemId(item.pid)

        const imageList = []

        imageList_.map(image => {
            imageList.push(new Image(image))
        })

        item['images'] = imageList

        return item
    }
}

export default new ItemService()
