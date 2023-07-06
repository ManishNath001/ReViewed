require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

//express app
const app = express()

app.use(cors())

//middleware
app.use(express.json())

app.use((req, res , next) => {
    console.log(req.path, req.method)
    next()
})

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Connected to db and listing on port:', process.env.PORT)
    })
})
.catch((err) => {
    console.log(err)
})