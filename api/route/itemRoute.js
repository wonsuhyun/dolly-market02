import express from 'express'
import { itemService } from '../service'

const router = express.Router()

/* 
Get item list
*/
router.get('/', errorCaptor(async (req, res) => {
    res.json(await itemService.get());
}))

/* 
Get item detail
*/
router.get(["/:pid"], errorCaptor(async (req, res) => {
    const pid = req.params.pid.toUpperCase()
    const item = await itemService.getById(pid)
    res.json(item)
}))

function errorCaptor(fn) {
    return (req, res, next) => fn(req, res, next).catch(next)
}

export default router