require('dotenv').config();
require('express-async-errors');

const express = require('express')
const app = express()

// rest of package
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

// database


// image


// routers


// middleware


// app use
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser(process.env.JWT_SECRET))

const port = process.env.PORT || 3000
const start = async()=> {
    try {
        app.listen(port, console.log(`server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start();