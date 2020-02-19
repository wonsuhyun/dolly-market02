import mysql from 'mysql2/promise'
import connectionInfo from'../../credentials/mysql'

const pool = mysql.createPool(connectionInfo);

export default pool