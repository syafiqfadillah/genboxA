const mysql = require("mysql")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sosmed"
})

db.connect(err => {
    err ? console.error(err) : console.log("Database Berhasil")
})

module.exports = db