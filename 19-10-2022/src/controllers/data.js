const BlogPost = require("../models/data")
const {validationResult} = require("express-validator")

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

const data = (req, res) => {
    BlogPost.find()
        .then(respon => {
            res.status(200).json({
                message: "Data Berhasil Di Get!",
                data: respon
            })
        })
}

module.exports = {data, post}