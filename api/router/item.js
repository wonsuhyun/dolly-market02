import express from 'express'
import { itemService } from '../service'

// const itemService = new ItemService()

const router = express.Router()

/* 
Get item list
*/
router.get('/', async (req, res) => {
    res.json(await itemService.get());
})

/* 
Get item detail
*/
router.get(["/:itemId"], async (req, res) => {
    const itemId = req.params.itemId.toUpperCase()
    res.json(await itemService.getById(itemId))
});

module.exports = router