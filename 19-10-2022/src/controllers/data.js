const BlogPost = require("../models/data")
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
        penulis: req.body.penulis,
        judul: req.body.judul,
        isi: req.body.isi,
    }

    const posting = new BlogPost(result)

    posting.save()
        .then(respon => {
            res.status(200).json({
                message: "Blog Berhasil Di Upload!",
                data: respon
            })
        })
        .catch(err => console.error(err))
}

const datas = (req, res) => {
    BlogPost.find()
        .then(respon => {
            res.status(200).json({
                message: "Data Berhasil Di Get!",
                data: respon
            })
        })
}

const blog = (req, res) => {
    const blogId = req.params.getId
    BlogPost.findById(blogId)
        .then(respon => {
            res.status(200).json({
                message: "blog berhasil dipanggil",
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
        penulis: req.body.penulis,
        judul: req.body.judul,
        isi: req.body.isi,
    }

    const blogId = req.params.getId

    BlogPost.findById(blogId)
        .then(respon => {
            if (!respon) {
                const err = new Error("data tidak ditemukan")
                err.status(422)
                throw err
            }

            respon.judul = result.judul
            respon.gambar = result.gambar
            respon.isi = result.isi
            respon.penulis = result.penulis

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
    BlogPost.findById(blogId)
        .then(respon => {
            if (!respon) {
                const err = new Error("blog tidak ditemukan")
                err.status(422)
                throw err
            }

            hapusGambar(respon.gambar)
            return BlogPost.findByIdAndDelete(blogId)
        })
        .then(respon => {
            res.status(200).json({
                message: "data berhasil di hapus",
                data: respon
            })
        })
        .catch(err => next(err))
}

const hapusGambar = (file) => {
    file = path.join(__dirname + "../.." + file)
    fs.unlink(file, err => console.log(err))
}

module.exports = {blog, datas, post, edit, del}