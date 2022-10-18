const express = require("express")
const router = express.Router()

const {data, post} = require("../controllers/data")

router.get("/data", data)
router.post("/post", post)

module.exports = router