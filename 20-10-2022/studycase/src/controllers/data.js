const id = require("../models/data")
const {validationResult} = require("express-validator")
const path = require("path")
const fs = require("fs")

const post = (req, res) => {
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
        const err = new Error("Invalid!")
        err.errorStatus = 400
        err.data = errors.array()
        throw err
    }

    if (!req.file) {
        const err = new Error("Gambar Harus Di Upload")
        err.status = 422
        throw err
    }

    let result = {
        gambar: req.file.path,
        nama: req.body.nama,
        tanggalLahir: req.body.tanggalLahir,
        agama: req.body.agama,
    }

    const posting = new id(result)

    posting.save()
        .then(respon => {
            res.status(200).json({
                message: "ID Berhasil di Buat!",
                data: respon
            })
        })
        .catch(err => console.error(err))
}

const datas = (req, res) => {
    id.find()
        .then(respon => {
            res.status(200).json({
                message: "Data Berhasil Di Get!",
                data: respon
            })
        })
}

const get = (req, res) => {
    const blogId = req.params.getId
    id.findById(blogId)
        .then(respon => {
            res.status(200).json({
                message: "ID Berhasil di Ambil",
                data: respon
            })
        })
}

const edit = (req, res, next) => {
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
        const err = new Error("Invalid!")
        err.errorStatus = 400
        err.data = errors.array()
        throw err
    }

    if (!req.file) {
        const err = new Error("Gambar Harus Di Upload")
        err.status = 422
        throw err
    }

    let result = {
        gambar: req.file.path,
        nama: req.body.nama,
        tanggalLahir: req.body.tanggalLahir,
        agama: req.body.agama,
    }

    const blogId = req.params.getId

    id.findById(blogId)
        .then(respon => {
            if (!respon) {
                const err = new Error("ID Tidak Ditemukan")
                err.status(422)
                throw err
            }

            respon.gambar = result.gambar
            respon.nama = result.nama
            respon.tanggalLahir = result.tanggalLahir
            respon.agama = result.agama

            return respon.save()
        })
        .then(respon => {
            res.status(200).json({
                message: "data berhasil di update",
                data: respon
            })
        })
        .catch(err => {
            next(err)
        })

}

const del = (req, res, next) => {
    const blogId = req.params.getId
    id.findById(blogId)
        .then(respon => {
            if (!respon) {
                const err = new Error("ID Tidak Ditemukan")
                err.status(422)
                throw err
            }

            hapusGambar(respon.gambar)
            return id.findByIdAndDelete(blogId)
        })
        .then(respon => {
            res.status(200).json({
                message: "ID Berhasil Dihapus",
                data: respon
            })
        })
        .catch(err => next(err))
}

const hapusGambar = (file) => {
    file = path.join(__dirname + "../.." + file)
    fs.unlink(file, err => console.log(err))
}

module.exports = {get, datas, post, edit, del}