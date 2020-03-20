import express from 'express'
import { ItemService } from '../service'
import { errorWrapper } from '../util'

const itemService = new ItemService()
const router = express.Router()

/*
Get item list
*/
router.get('/', errorWrapper(async (req, res) => {
    const pageNum = req.query.pageNum
    const items = await itemService.getItems(pageNum)
    res.json(items)
}))

/* 
Get item detail
*/
router.get('/:pid', errorWrapper(async (req, res) => {
    const item = await itemService.getItemById(pid)
    res.json(item)
}))


export default router