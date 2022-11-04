const express = require('express')
const router = express.Router()

const {getSaldo, putSaldo, postSaldo} = require('../controllers/saldo')

router.get('/saldo', getSaldo)
router.post('/add', postSaldo)
router.put('/transaksi', putSaldo)

module.exports = router