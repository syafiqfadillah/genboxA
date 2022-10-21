const db = require("./db_config")

const sql = `CREATE TABLE users
            (
                id INT NOT NULL AUTO_INCREMENT,
                name VARCHAR(30),
                tanggal_lahir VARCHAR(12),
                bio VARCHAR(255),
                PRIMARY KEY(id)
            )
            `
db.query(sql, (err, result) => {
    if (err) throw err
    console.log("Table Berhasil Dibuat")
})