const express = require("express")
const app = express()

const port = 4000

app.use((req, res, next) => {
    console.log("testing")
    next()
})

app.get("/", (req, res) => {
    res.send("Test")
})

app.get("/about/:id/nama/:nama", (req, res) => {
    res.send("About")
    console.log(req.params.nama)
})

app.use("/", (req, res) => {
    res.send("Error")
})

app.listen(port, () => {
    console.log("Server Running")
})