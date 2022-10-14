const fs = require("fs")
const express = require("express")
const app = express()

app.use("/", (req, res, next) => {
	res.send(fs.readFileSync("./ui.html", "utf-8"))
})

app.listen(4000, () => {
	console.log("Server Running...")
})