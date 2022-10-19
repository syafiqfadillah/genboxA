const express = require("express")
const {body} = require("express-validator")
const router = express.Router()

const {blog, datas, post, edit, del} = require("../controllers/data")

router.get("/data", datas)

router.post("/post", [
    body("judul").isLength({min: 5}).withMessage("Panjang Judul Kurang!"),
    body("isi").isLength({min: 10}).withMessage("Panjang Isi Kurang!"),
    body("penulis").isLength({min: 3}).withMessage("Panjang Penulis Kurang!")
], post)

router.get("/data/:getId", blog)

router.put("/data/:getId", [
    body("judul").isLength({min: 5}).withMessage("Panjang Judul Kurang!"),
    body("isi").isLength({min: 10}).withMessage("Panjang Isi Kurang!"),
    body("penulis").isLength({min: 3}).withMessage("Panjang Penulis Kurang!")
], edit)

router.delete("/data/:getId", del)

module.exports = router