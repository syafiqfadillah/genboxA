const db = require("./db_config")

const sql = `UPDATE users SET name='test6' WHERE id='3'`

db.query(sql, (err, result) => {
    if (err) throw err
    console.log("Data Berhasil Diedit : " + result.affectedRows)
})