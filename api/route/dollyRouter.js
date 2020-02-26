import { commonUtil } from '../util'
import express from 'express'

const router = express.Router()
const errorCaptor = commonUtil.errorCaptor

class DollyRouter {

    get(route, fn) {
        return router(route, errorCaptor(fn))
    }
}

export default new DollyRouter()