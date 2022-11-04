const db = require('./db_config')

// const sql = `CREATE TABLE saldo (
//                 id INT NOT NULL AUTO_INCREMENT,
//                 saldo INT,
//                 PRIMARY KEY(id)
//             )`

// db.query(sql, err => {
//     if( err ) throw err
//     console.log('table berhasil dibuat');
// })

const sql = `CREATE TABLE riwayat (
    id INT NOT NULL AUTO_INCREMENT,
    tanggal VARCHAR(255),
    jenis VARCHAR(255),
    nomer_hp VARCHAR(255),
    nominal INT,
    provider VARCHAR(255),
    PRIMARY KEY(id)
)`

db.query(sql, err => {
    if( err ) throw err
    console.log('table berhasil dibuat');
})