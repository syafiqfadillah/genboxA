const mysql = require('mysql')

const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'pulsa'
    })


db.connect((err) => {
    if (err) throw err
    console.log("mysql is running...")
})

module.exports = db