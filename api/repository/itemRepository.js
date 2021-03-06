import createError from "http-errors"
import { MySQLRepositoryBase } from "../../server/base/"
import { itemQuery } from "../query"
import { paging } from "../constant"
import TagRepository from "./tagRepository"
import ImageRepository from "./imageRepository"
import { Image, Item, User } from "../model"

class ItemRepository extends MySQLRepositoryBase {
  constructor() {
    super(itemQuery)
    // Todo: 이 부분 부모로 올리기
    this.tagRepository = new TagRepository()
    this.imageRepository = new ImageRepository()
  }

  async get(pageNum) {
    const _itemList = await this.executeQuery(
      this.query.get(
        pageNum || paging.DEFAULT_PAGE_INDEX,
        paging.DEFAULT_PAGE_SIZE
      )
    )

    // Todo: 리팩토링
    let itemList = _itemList.map((item) => {
      item = this.getMasterImage(item)
      item = this.getUser(item)
      return new Item(item)
    })

    return itemList
  }

  async getById(pid) {
    let _item = await this.executeQuery(this.query.getById(pid))

    if (_item.length < 1) {
      throw new createError(404, `Item not Found: ${pid}`)
    }

    let item = _item[0]

    item = this.getUser(item)
    item = await this.getImages(item)
    item = await this.getTags(item)
    item = new Item(item)

    return item
  }

  getUser(item) {
    // 유저 정보 추가
    const _profileImage = {
      pid: item.user_file_pid,
      create_date: item.user_file_create_date,
      file_name: item.user_file_name,
      file_url: item.user_file_url,
    }

    const profileImage = new Image(_profileImage)

    const user = {
      pid: item.user_pid,
      create_date: item.user_create_date,
      modify_date: item.user_modify_date,
      email: item.user_email,
      nickname: item.user_nickname,
      image: profileImage,
    }

    const _item = item
    _item["user"] = new User(user)

    return _item
  }

  getMasterImage(item) {
    // 마스터 이미지 리스트 추가
    const masterImage = {
      pid: item.master_file_pid,
      create_date: item.master_file_create_date,
      file_name: item.master_file_name,
      file_url: item.master_file_url,
      file_size: item.master_file_size,
      master_flag: item.master_file_master_flag,
    }

    const imageArr = []
    imageArr.push(new Image(masterImage))
    const _item = item

    _item["images"] = imageArr

    return _item
  }

  async getTags(item) {
    const tagList = await this.tagRepository.getByItemId(item.pid)
    const _item = item

    _item["tags"] = tagList

    return _item
  }

  async getImages(item) {
    const imageList = await this.imageRepository.getByItemId(item.pid)
    const _item = item

    _item["images"] = imageList

    return _item
  }
}

export default ItemRepository
