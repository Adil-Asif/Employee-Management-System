const express = require('express')
var app = express()
const cors = require('cors')
const db = require('./models/database')
const bodyParser = require("body-parser")
var jsonParser = bodyParser.json()
const { request } = require('express')

app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
  app.use(jsonParser, bodyParser.urlencoded({ extended: false }))

require("./app/routes/signup.js")(app);
require("./app/routes/profile.js")(app);
require("./app/routes/user_details_route.js")(app);
require("./app/routes/salary_route.js")(app);
require("./app/routes/attendance_route.js")(app);
require("./app/routes/benefit_route.js")(app);
require("./app/routes/feedback_route.js")(app);

app.listen(5000,()=>{
    console.log('App listeneing on port 5000')
})