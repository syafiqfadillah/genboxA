const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const multer = require("multer")
const path = require("path")
const dataRoutes = require("./routes/data")
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 4000


const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + "-" + file.originalname)
    }
})

const cekFileFilter = (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

app.use(cors())
app.use(bodyParser.json())
app.use(multer({storage: fileStorage, cekFileFilter}).single("gambar"))
app.use("/images", express.static(path.join(__dirname, "../images")))
app.use("/id", dataRoutes)

app.use((error, req, res, next) => {
    const status = error.errorStatus || 500
    const message = error.message
    const data = error.data

    res.status(status).json({message, data})
})

mongoose.connect("mongodb+srv://syafiq:IMPpFhxnpKHKbkA6@cluster0.udtezio.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        app.listen(port, () => {
            console.log("server running...")
        })
    })
    .catch(err => {
        console.err(err)
    })
