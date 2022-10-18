const BlogPost = require("../models/data")

const post = (req, res) => {
    let result = {
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