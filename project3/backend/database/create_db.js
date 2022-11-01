const db = require("./db_config")

const sql = "CREATE DATABASE pulsa"

db.query(sql, err => {
    if (err) throw err
    console.log("Database Berhasil Dibuat")
})