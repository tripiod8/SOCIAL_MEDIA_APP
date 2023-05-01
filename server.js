require('dotenv').config()
const colors = require('colors')
const db = require('./data/queries')
const express = require('express')

const app = express()
const authRouter = require('./routes/auth')


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

  app.use(express.json())

app.get('/fail', (req, res) => {
    res.send("Failed")
})

app.get('/users', db.getUsers)

app.get('/', (req, res) => {
    res.send("Hello, World!")
})

app.use('/', authRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`.bold.green);
})

