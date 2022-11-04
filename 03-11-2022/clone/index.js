const express = require('express')
const multer = require('multer')
const cors = require('cors')
const bodyParser = require('body-parser')

const {riwayat, saldo} = require("./routes")

const app = express()
const port = 5000

app.use(cors())
app.use(multer().single('none'))
app.use(bodyParser.json())

app.use('/saldo/v1', saldo)
app.use('/riwayat/v1', riwayat)

app.listen(port, console.log("Server Is Run!"))