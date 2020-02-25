import mysql from 'mysql2/promise'
import connectionInfo from '../../credentials/mysql-config.json'

const pool = mysql.createPool(connectionInfo);

class Mysql {
    async executeQuery(query) {
        const connection = await pool.getConnection(async conn => conn);
        await connection.beginTransaction();

        const [rows] = await connection.query(query)

        await connection.commit();
        connection.release();

        return rows
    }
}

export default new Mysql()