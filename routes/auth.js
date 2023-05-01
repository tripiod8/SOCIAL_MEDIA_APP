const express = require("express")
const db = require('../data/queries/authQueries')

const router = express.Router();

router.post('/login', db.getUser)



module.exports = router