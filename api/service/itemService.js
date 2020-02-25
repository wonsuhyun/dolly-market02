import express from 'express'
import { itemRepository } from '../repository'

class ItemService {

    async get() {
        return itemRepository.get()
    }
    
    async getById(itemId) {
        return itemRepository.getById(itemId)
    }
}

export default new ItemService()