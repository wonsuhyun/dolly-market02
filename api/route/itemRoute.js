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
router.get(["/:pid"], wrapAsync(async (req, res) => {
    const pid = req.params.pid.toUpperCase()
    const item = await itemService.getById(pid)
    res.json(item)
}))

function wrapAsync(fn) {
    return (req, res, next) => fn(req, res, next).catch(next)
}

export default router