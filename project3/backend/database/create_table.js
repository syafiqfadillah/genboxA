const db = require("./db_config")

const sql = `CREATE TABLE saldo
            (
                id INT NOT NULL AUTO_INCREMENT,
                tanggal VARCHAR(30),
                nominal VARCHAR(6),
                PRIMARY KEY(id)
            )
            `
db.query(sql, (err, result) => {
    if (err) throw err
    console.log("Table Berhasil Dibuat")
})