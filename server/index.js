const express = require('express')
var app = express()
const cors = require('cors')
const db = require('./models/database')
const bodyParser = require("body-parser")
var jsonParser = bodyParser.json()
const signupRouter = require('./routes/signup')
const profileRouter = require('./routes/profile')

app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
  app.use(jsonParser, bodyParser.urlencoded({ extended: false }))

app.use('/',signupRouter)
app.use('/profile',profileRouter)

app.listen(5000,()=>{
    console.log('App listeneing on port 5000')
})