const db = require("./db_config")

const sql = "CREATE DATABASE sosmed"

db.query(sql, err => {
    if (err) throw err
    console.log("Database Berhasil Dibuat")
})