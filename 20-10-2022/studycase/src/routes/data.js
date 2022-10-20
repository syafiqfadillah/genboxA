const express = require("express")
const {body} = require("express-validator")
const router = express.Router()

const {get, datas, post, edit, del} = require("../controllers/data")

router.get("/get", datas)

router.post("/post", [
    body("nama").isLength({min: 5}).withMessage("Nama Terlalu Pendek!"),
    body("nama").isLength({max: 50}).withMessage("Nama Terlalu Panjang!"),
    body("tanggalLahir").isLength({min: 6}).withMessage("Tanggal Terlalu Pendek"),
    body("tanggalLahir").isLength({max: 8}).withMessage("Tanggal Terlalu Penjang"),
    body("agama").isLength({min: 3}).withMessage("Agama Tidak Ditemukan!")
], post)

router.get("/get/:getId", get)

router.put("/put/:getId", [
    body("nama").isLength({min: 5}).withMessage("Nama Terlalu Pendek!"),
    body("nama").isLength({max: 50}).withMessage("Nama Terlalu Panjang!"),
    body("tanggalLahir").isLength({min: 6}).withMessage("Tanggal Terlalu Pendek"),
    body("tanggalLahir").isLength({min: 8}).withMessage("Tanggal Terlalu Penjang"),
    body("agama").isLength({min: 3}).withMessage("Agama Tidak Ditemukan!")
], edit)

router.delete("/del/:getId", del)

module.exports = router