const data = (req, res) => {
    res.status(200).json({
        message: "Data Berhasil Diambil!",
        data: {
            username: "name",
            nama: "syafiq",
            umur: "tangerang",
            keahlian: "tidur",
            lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    })
}

module.exports = {data}