const { pool } = require('./credentials');

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users', (err, results) => {
        if(err) throw err
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getUsers
}