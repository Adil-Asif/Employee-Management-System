const express = require('express')
var app = express()
const cors = require('cors')
const db = require('./models/database')
const bodyParser = require("body-parser")
var jsonParser = bodyParser.json()
const signupRouter = require('./routes/signup')
const profileRouter = require('./routes/profile')
const helpdeskRouter = require('./routes/helpdesk')
const projectteamsRouter = require('./routes/projectteams')
const projectfillRouter = require('./routes/projectfill')
const announcementRouter = require('./routes/announcement')
const helpRouter = require('./routes/help')

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
app.use('/helpdesk',helpdeskRouter)
app.use('/projects',projectteamsRouter)
app.use('/fillproject',projectfillRouter)
app.use('/profile/announcement',announcementRouter)
app.use('/profile/project',helpRouter)

app.listen(5000,()=>{
    console.log('App listeneing on port 5000')
})