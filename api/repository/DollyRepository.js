import mysql from 'mysql2/promise'
require('dotenv').config()

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})
const DEFAULT_PAGE_INDEX = 1
const DEFAULT_PAGE_SIZE = 8

// Parent Repository
class DollyRepository {

    static get DEFAULT_PAGE_INDEX() {
        return DEFAULT_PAGE_INDEX;
    }
    static get DEFAULT_PAGE_SIZE() {
        return DEFAULT_PAGE_SIZE;
    }

    async executeQuery(query) {
        const connection = await pool.getConnection(async conn => conn);
        await connection.beginTransaction();

        const [rows] = await connection.query(query)

        await connection.commit();
        connection.release();

        return rows
    }
}

export default DollyRepository