const express = require("express")
const cors = require("cors")
const app = express()
const port = 4000

const dataRoutes = require("./routes/data")

app.use(cors())

app.use("/users/v1", dataRoutes)

app.listen(port, () => {
    console.log("Server Running...")
})