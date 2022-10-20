const mongoose = require("mongoose")
const Schema = mongoose.Schema

const id = new Schema({
    gambar: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    tanggalLahir: {
        type: String,
        required: true
    },
    agama: {
        type: String,
        required: true
    }
}, {
    timetamps: true
})

module.exports = mongoose.model("ids", id)