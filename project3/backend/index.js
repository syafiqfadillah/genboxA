const express = require("express")
const cors = require("cors")
const multer = require("multer")
const bodyParser = require("body-parser")
const {body, validationResult} = require("express-validator")

const db = require("./database/db_config")

const app = express()
const router = express.Router()

const port = 8000

app.use(cors())
app.use(bodyParser.json())
app.use(multer().single('none'))

// for riwayat table
function postRiwayat(req, res) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        const err = new Error("Invalid!")
        err.errorStatus = 400
        err.data = errors.array()
        throw err
    }

    let d = {
        tanggal: req.body.tanggal,
        jenis: req.body.jenis,
        nominal: req.body.nominal
    }

    const command = `INSERT INTO riwayat (tanggal, jenis, nominal)
                     VALUE ('${d.tanggal}', '${d.jenis}', '${d.nominal}')`

    db.query(command, (err, result) => {
        res.status(200).json({
            message: "Data Berhasil di POST!",
            data: d
        })
    })
}

function getRiwayat(req, res) {
    const command = `SELECT * FROM riwayat`

    db.query(command, (err, result) => {
        res.status(200).json({
            message: "Data Berhasil di GET!",
            data: result
        })
    })
}

// for saldo table
function getSaldo(req, res) {
    const command = `SELECT * FROM saldo`

    db.query(command, (err, result) => {
        res.status(200).json({
            message: "Data Berhasil di GET!",
            data: result
        })
    })
}

function postSaldo(req, res) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        const err = new Error("Invalid!")
        err.errorStatus = 400
        err.data = errors.array()
        throw err
    }

    const command = `INSERT INTO saldo (nominal)
                     VALUE ('${req.body.nominal}')`

    db.query(command, (err, result) => {
        res.status(200).json({
            message: "Data Berhasil di POST!",
            data: req.body.nominal
        })
    })
}

function putSaldo(req, res) {
    const command = `UPDATE saldo SET nominal='${req.body.nominal}' WHERE id='1'`

    db.query(command, (err, result) => {
        if (err) throw err
        console.log("Data Berhasil Diedit : " + result.affectedRows)
    })
}

// router handler
router.get("/getSaldo", getSaldo)
router.post("/postSaldo", postSaldo)
router.put("/putSaldo/:id", putSaldo)

router.post("/post", [
    body("tanggal").isLength({min: 1}).withMessage("Tanggal Terlalu Pendek!"),
    body("jenis").isLength({min: 1}).withMessage("Jenis Terlalu Pendek!"),
    body("nominal").isLength({min: 1}).withMessage("Nominal Terlalu Pendek!")
], postRiwayat)

router.get("/get", getRiwayat)

app.use("/", router)

app.listen(port, () => {
    console.log("Server Running!")
})