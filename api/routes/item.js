import express from 'express'
import Item from '../model/Item'
import pool from '../db/mysql'

const router = express.Router()

router.get('/', async (req, res, next) => {
    const connection = await pool.getConnection(async conn=>conn);
    await connection.beginTransaction();

    const [rows] = await connection.query('SELECT * FROM item')

    await connection.commit();
    connection.release();

    console.log(rows)
    res.send(rows)
})

module.exports = router