const data = (req, res) => {
    res.status(200).json({
        message: "Data Berhasil Diambil!",
        data: {
            nama: "syafiq",
            hobi: "tidur"
        }
    })
}

const post = (req, res) => {
    let result = {
        nama: req.body.nama,
        umur: req.body.umur,
        hobi: req.body.hobi
    }

    res.status(200).json({
        message: "data berhasil di ambil hore!",
        data: result
    })
}

module.exports = {data, post}