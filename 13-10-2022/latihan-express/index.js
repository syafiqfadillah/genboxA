const express = require("express")
const app = express()

app.use("/", (req, res, next) => {
    res.send("<h1>Hello World</h1>")
    next()
})

app.listen(4000, () => {
    console.log("Server Running....")
})