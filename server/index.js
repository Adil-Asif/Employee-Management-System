const express = require('express')
var app = express()
const cors = require('cors')


const db = require('./app/models/database.js')
const signupRouter = require('./app/routes/signup.js')

var corsOptions = { origin: "http://localhost:5000"};

app.use(cors(corsOptions))
app.use(express.json())

app.use('/',signupRouter)

require("./app/routes/user_details_route.js")(app);


app.listen(5000,()=>{
    console.log('App listeneing on port 5000')
})