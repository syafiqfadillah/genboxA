const express = require("express")
const cors = require("cors")
const multer = require("multer")
const bodyParser = require("body-parser")
const {body, validationResult} = require("express-validator")

const db = require("./database/db_config")

const app = express()
const router = express.Router()

const port = 8000

function putSaldo(req, res) {
    const command = `UPDATE saldo SET nominal='${req.body.nominal}' WHERE id='1'`

    db.query(command, (err, result) => {
        if (err) throw err
        console.log("Data Berhasil Diedit : " + result.affectedRows)
    })
}

function getSaldo(req, res) {
    const command = `SELECT * FROM saldo`

    db.query(command, (err, result) => {
        res.status(200).json({
            message: "Data Berhasil di GET!",
            data: result
        })
    })
}

function postHistory(req, res) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        const err = new Error("Invalid!")
        err.errorStatus = 400
        err.data = errors.array()
        throw err
    }

    const data = {
        tanggal: req.body.tanggal,
        jenis: req.body.jenis,
        nominal: req.body.nominal
    }

    const command = `INSERT INTO riwayat (tanggal, jenis, nominal)
                     VALUE ('${data.tanggal}', '${data.jenis}', '${data.nominal}')`

    db.query(command, (err, result) => {
        res.status(200).json({
            message: "History Bertambah!",
            data: data
        })
    })
}

function getHistory(req, res) {
    const command = `SELECT * FROM riwayat`

    db.query(command, (err, result) => {
        res.status(200).json({
            message: "Data Berhasil di GET!",
            data: result
        })
    })
}

router.put("/putSaldo", putSaldo)
router.get("/getSaldo", getSaldo)
router.post("/postHistory", postHistory)
router.get("/getHistory", getHistory)

app.use(cors())
app.use(bodyParser.json())
app.use(multer().single('none'))

app.use("/", router)

app.listen(port, () => {
    console.log("Server Running!")
})