const db = require("./db_config")

const sql = `CREATE TABLE users
            (
                id INT NOT NULL AUTO_INCREMENT,
                nama VARCHAR(30),
                tanggal_lahir VARCHAR(12),
                PRIMARY KEY(id)
            )
            `
db.query(sql, (err, result) => {
    if (err) throw err
    console.log("Table Berhasil Dibuat")
})