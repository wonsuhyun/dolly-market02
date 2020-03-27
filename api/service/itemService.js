import createError from 'http-errors'

import { itemQuery } from '../query'
import { paging } from '../constant'
import TagService from './tagService'
import ImageService from './imageService'
import { Image, Item, User } from '../model'
import ServiceBase from './serviceBase'

class ItemService extends ServiceBase {
    
    constructor() {
        super(itemQuery)
        this.tagService = new TagService()
        this.imageService = new ImageService()
    }
    
    async getItems(pageNum) {

        const itemList_ = await this.executeQuery(this.query.getItems(pageNum || paging.DEFAULT_PAGE_INDEX, paging.DEFAULT_PAGE_SIZE))

        const itemList = []

        itemList_.map(item => {
            item = this.getMasterImageInfo(item)

            item = this.getUserInfo(item)

            itemList.push(new Item(item))

        })

        return itemList
    }

    async getItemById(pid) {

        let item_ = await this.executeQuery(this.query.getItemById(pid))
        
        if (item_.length < 1) {
            throw new createError(404, `Item not Found: ${pid}`)
        }

        let item = item_[0]

        item = this.getUserInfo(item)

        item = await this.getImages(item)

        item = await this.getTags(item)

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

    async getTags(item) {
        const tagList = await this.tagService.getTagsByItemId(item.pid)

        item['tags'] = tagList

        return item
    }

    async getImages(item) {
        const imageList = await this.imageService.getImagesByItemId(item.pid)

        item['images'] = imageList

        return item
    }
}

export default ItemService
