const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const port = 4000

const dataRoutes = require("./routes/data")
const bodyParser = require("body-parser")

app.use(cors())

app.use(bodyParser.json())
app.use("/blog/v1", dataRoutes)

// app.listen(port, () => console.log("server running"))
mongoose.connect("mongodb+srv://syafiq:IMPpFhxnpKHKbkA6@cluster0.udtezio.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        app.listen(port, () => {
            console.log("server running...")
        })
    })
    .catch(err => {
        console.err(err)
    })
