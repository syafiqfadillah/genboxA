const db = require("./db_config")

const sql = `INSERT INTO users (name, tanggal_lahir, bio) VALUES ?`
const values = [
    ["test2", "1-1-1111", "test3-1"],
    ["test3", "2-2-2222", "test4-1"],
    ["test4", "3-3-3333", "test5-1"],
    ["test5", "4-4-4444", "test6-1"]
]

db.query(sql, [values], (err, result) => {
    if (err) throw err
    console.log(result.affectedRows + " Data Berhasil Dibuat")
})