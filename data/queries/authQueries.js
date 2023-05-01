const jwt_decode = require('jwt-decode')
const { pool } = require('../credentials')

const getUser = (req, res) => {
    const decoded = jwt_decode(req.body["credential"])
    const email = decoded["email"],  name = decoded["name"], picture = decoded["picture"];

    pool.query(`SELECT email, avatar FROM users WHERE email='${email}'`, (err, results) => {
        if(err) throw err
        if(results.rowCount == 0) return res.status(200).json(insertUser(email, name, picture))
        if(results.rowCount == 1) return res.status(200).json(updateUser(email, picture))
        res.status(404).json(JSON.stringify({"error": "Something is wrong"}))
    })
}

function insertUser(_email, _name, _picture)
{
    pool.query(`INSERT INTO users (email, fullname, avatar) VALUES ('${_email}', '${_name}', '${_picture}')`, (err, results) => {
        if(err) throw err
        return results.rows
    })
}

function updateUser(_email, _picture)
{
    pool.query(`UPDATE users SET avatar='${_picture}' WHERE email='${_email}'`, (err, results) => {
        if(err) throw err
        return results.rows
    })
}

module.exports = {
    getUser
}