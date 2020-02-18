const mysql = require('mysql')
const connectionInfo = require('../../credentials/mysql')

var connection = mysql.createConnection(connectionInfo)

connection.connect()

connection.query('SELECT * FROM item', (err, res) => {
    if (err) throw err
    console.log(res[0])
})

connection.end()