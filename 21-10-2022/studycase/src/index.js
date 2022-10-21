const express = require("express")
const cors = require("cors")
const path = require("path")
const multer = require("multer")
const dataRoutes = require("./routes/data")
const bodyParser = require("body-parser")

const app = express()
const port = 4000

app.use(cors())
app.use(bodyParser.json())
app.use(multer().single('none'))
app.use("/id", dataRoutes)

app.use((error, req, res, next) => {
    const status = error.errorStatus || 500
    const message = error.message
    const data = error.data

    res.status(status).json({message, data})
})

app.listen(port, () => {
    console.log("Server Running")
})