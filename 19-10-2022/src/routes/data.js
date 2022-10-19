const express = require("express")
const {body} = require("express-validator")
const router = express.Router()

const {data, post} = require("../controllers/data")

router.get("/data", data)
router.post("/post", [
    body("judul").isLength({min: 5}).withMessage("Panjang Judul Kurang!"),
    body("isi").isLength({min: 10}).withMessage("Panjang Isi Kurang!"),
    body("penulis").isLength({min: 3}).withMessage("Panjang Penulis Kurang!")
], post)

module.exports = router