import { commonUtil } from '../util'
import express from 'express'

const router = express.Router()
const errorCaptor = commonUtil.errorCaptor

class DollyRouter {

    constructor() {
        this.router = router
    }

    getRouter() {
        return this.router
    }

    get(route, fn) {
        return this.router.get(route, errorCaptor(fn))
    }
}

export default new DollyRouter()