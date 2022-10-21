const db = require("./db_config")

const sql = `INSERT INTO users (name, tanggal_lahir, bio)
            VALUE ('test', '1-1-1111', 'test')`

db.query(sql, (err, result) => {
    if (err) throw err
    console.log("Data Berhasil Dibuat")
})