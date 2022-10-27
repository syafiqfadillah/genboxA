const db = require("../database/db_config")
const {validationResult} = require("express-validator")

const datas = (req, res) => {
    const command = `SELECT * FROM users`
    db.query(command, (err, result) => {
        res.status(200).json({
            message: "Data Berhasil Di GET",
            data: result
        })
    })
}

const post = (req, res) => {
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
        const err = new Error("Invalid!")
        err.errorStatus = 400
        err.data = errors.array()
        throw err
    }

    let d = {
        nama: req.body.nama,
        tanggal_lahir: req.body.tanggal_lahir,
    }

    const command = `INSERT INTO users (nama, tanggal_lahir)
                     VALUE ('${d.nama}', '${d.tanggal_lahir}')`

    db.query(command, (err, result) => {
        res.status(200).json({
            message: "Data Berhasil Di POST",
            data: d,
        })
    })

}

const get = (req, res) => {
    const blogId = req.params.getId
    const command = `SELECT * FROM users WHERE ID='${blogId}'`
    db.query(command, (err, result) => {
        res.status(200).json({
            message: "Data Berhasil Di POST",
            data: result
        })
    })
}

const edit = (req, res, next) => {
    const id = req.params.getId
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
        const err = new Error("Invalid!")
        err.errorStatus = 400
        err.data = errors.array()
        throw err
    }

    let d = {
        nama: req.body.nama,
        tanggal_lahir: req.body.tanggal_lahir,
    }

    const command = `UPDATE users SET nama='${d.nama}' WHERE id='${id}'`
    db.query(command, (err, result) => {
        res.status(200).json({
            message: "Data Berhasil Di PUT",
            data: d
        })
    })
}

const del = (req, res, next) => {
    const blogId = req.params.getId
    const command = `DELETE FROM users WHERE id="${blogId}"`

    db.query(command, (err, result) => {
        res.status(200).json({
            message: "Data Berhasil Di DELETE",
            data: d
        })
    })

}

module.exports = {get, datas, post, edit, del}