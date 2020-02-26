import express from 'express'
import { itemService } from '../service'

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
router.get(["/:pid"], async (req, res) => {
    const pid = req.params.pid.toUpperCase()
    res.json(await itemService.getById(pid))
})

export default router