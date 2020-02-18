const mysql = require('mysql')
const connectionInfo = require('../../credentials/mysql')

var connection = mysql.createConnection(connectionInfo)

connection.connect()

const items = connection.query('SELECT * FROM item', (err, res) => {
    if (err) throw err
    return res[0]
})

connection.end()

export { items }