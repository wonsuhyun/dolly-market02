import express from 'express'
import { itemDTO } from '../dto'

class ItemService {

    async get() {
        return itemDTO.get()
    }
    
    async getById(itemId) {
        return itemDTO.getById(itemId)
    }
}

export default new ItemService()