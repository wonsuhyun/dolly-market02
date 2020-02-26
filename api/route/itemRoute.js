
import DollyRouter from './dollyRouter'
import { itemService } from '../service'
import express from 'express'

const router = express.Router()
import { commonUtil } from '../util'
const errorCaptor = commonUtil.errorCaptor

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

export default router