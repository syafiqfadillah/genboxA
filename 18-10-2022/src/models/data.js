const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BlogPost = new Schema({
    judul: {
        type: String,
        required: true
    },
    isi: {
        type: String,
        required: true
    },
    penulis: {
        type: String,
        required: true
    }
}, {
    timetamps: true
})

module.exports = mongoose.model("blog", BlogPost)