const router = require('express').Router()
import Item from '../model/Item'
const mysql = require('../db/mysql')

router.get('/', (req, res, next) => {
    // const items = new Item({...mysql[0]})
    console.log(items)
    res.send('hello ' + Math.random())
})

module.exports = router