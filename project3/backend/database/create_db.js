const db = require("./db_config")

const sql = "CREATE DATABASE genbox_pulsa"

db.query(sql, err => {
    if (err) throw err
    console.log("Database Berhasil Dibuat")
})