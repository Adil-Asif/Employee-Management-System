const express = require('express')
var app = express()
const cors = require('cors')
const db = require('./models/database')
const signupRouter = require('./routes/signup')

app.use(cors())

app.use('/',signupRouter)

app.listen(5000,()=>{
    console.log('App listeneing on port 5000')
})