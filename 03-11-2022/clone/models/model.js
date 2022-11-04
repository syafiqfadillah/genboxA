const db = require('./db_config')

const model = (command, res, msg) => {
    db.query(command, (err, result) => {
        if(err) throw err
        res.status(200).json({
            message: `data berhasil ${msg}`,
            data: result
        })
    })
}

module.exports = model