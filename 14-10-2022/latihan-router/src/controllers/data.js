const data = (req, res) => {
    res.status(200).json({
        message: "Data Berhasil Diambil!",
        data: {
            nama: "syafiq",
            umur: 18,
            hobi: "tidur"
        }
    })
}

module.exports = {data}