const model = require("../models/model")
const {validationResult} = require("express-validator")

const getRiwayat = (req, res) => {
    const command = `SELECT * FROM riwayat`

    model(command, res, "Di GET!")
}

const postRiwayat = (req, res) => {
    const err = validationResult(req)

    if (!err.isEmpty) {
        let error =  new Error("Invalid Value!")
        error.status = 400
        error.data = errror.array()
        throw error
    }

    const command = `INSERT INTO riwayat 
                    (tanggal, jenis, nomer_hp, nominal, provider) VALUES
                    (
                        '${req.body.tanggal}',
                        '${req.body.jenis}',
                        '${req.body.nomer_hp}',
                        '${req.body.nominal}',
                        '${req.body.provider}'
                    )`
    
    model(command, res, 'Di POST!')
}

module.exports = {getRiwayat, postRiwayat}