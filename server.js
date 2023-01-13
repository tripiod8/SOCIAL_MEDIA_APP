require('dotenv').config()
const colors = require('colors')
const db = require('./data/queries')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello, World!")
})

app.get('/users', db.getUsers)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on ${process.env.NODE_ENV} on port ${PORT}`.bold.green);
})