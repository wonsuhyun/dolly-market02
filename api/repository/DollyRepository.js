import mysql from 'mysql2/promise'
import connectionInfo from '../../credentials/mysql-config.json'

const pool = mysql.createPool(connectionInfo);
const DEFAULT_PAGE_INDEX = 1;
const DEFAULT_PAGE_SIZE = 8;

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