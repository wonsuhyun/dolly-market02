import mysql from 'mysql2/promise'

require('dotenv').config()

class MySqlServiceBase {
    constructor(query) {
        this.query = query
    }

    executeQuery = async (query) => {

        const pool = mysql.createPool({
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        })

        const connection = await pool.getConnection(async conn => conn);
        await connection.beginTransaction();
    
        const [rows] = await connection.query(query)
    
        await connection.commit();
        connection.release();
    
        return rows
    }
}


export default MySqlServiceBase
