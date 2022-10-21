const db = require("./db_config")

const sql = `DELETE FROM users WHERE id="1"`

db.query(sql, (err, result) => {
    if (err) throw err
    console.log("Data Berhasil Di Delete")
})