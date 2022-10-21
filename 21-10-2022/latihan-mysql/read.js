const db = require("./db_config")

const sql = `SELECT * FROM users`

db.query(sql, (err, result) => {
    if (err) throw err
    console.log(result)
})