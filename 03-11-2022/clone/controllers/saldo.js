const model = require('../models/model')

const getSaldo = (req, res) => {
    const command = `SELECT * FROM saldo`

    model(command, res, 'DI GET!')
}

const postSaldo = (req, res) => {
    const command = `INSERT INTO saldo (saldo) VALUES ('0')`

    model(command, res, 'DI POST!')
}

const putSaldo = (req, res) => {
    const command = `UPDATE saldo SET saldo='${req.body.saldo}'`

    model(command, res, 'Di PUT!')
}

module.exports = {getSaldo, postSaldo, putSaldo}