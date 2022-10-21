const express = require("express")
const {body} = require("express-validator")
const router = express.Router()

// const {get, datas, post, edit, del} = require("../controllers/data")
const {datas, post, get, edit} = require("../controllers/data")

router.get("/get", datas)

router.post("/post", [
    body("nama").isLength({min: 5}).withMessage("Nama Terlalu Pendek!"),
    body("tanggal_lahir").isLength({min: 8}).withMessage("Tanggal Terlalu Pendek"),
], post)

router.get("/get/:getId", get)

router.put("/put/:getId", [
    body("nama").isLength({min: 5}).withMessage("Nama Terlalu Pendek!"),
    body("tanggal_lahir").isLength({min: 6}).withMessage("Tanggal Terlalu Pendek"),
], edit)

// router.delete("/del/:getId", del)

module.exports = router