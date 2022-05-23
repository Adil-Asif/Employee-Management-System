<<<<<<< HEAD
const express = require('express')
var app = express()
const cors = require('cors')
const db = require('./models/database')
const bodyParser = require("body-parser")
var jsonParser = bodyParser.json()
const signupRouter = require('./routes/signup')
const profileRouter = require('./routes/profile')
const helpdeskRouter = require('./routes/helpdesk')
=======
const express = require("express");
var app = express();
const cors = require("cors");
const db = require("./app/models/database");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
// const { request } = require('express')
const signupRouter = require("./app/routes/signup.js");
const profileRouter = require("./app/routes/profile.js");
const salaryRouter = require("./app/routes/salary_route.js");
const attendanceRouter = require("./app/routes/attendance_route.js");
const benefitRouter = require("./app/routes/benefit_route.js");
const feedbackRouter = require("./app/routes/feedback_route.js");
const userDetailsRouter = require("./app/routes/user_details_route.js");
>>>>>>> 81491908cfa7090a4b1233bb418af3e8e0b81cc8

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(jsonParser, bodyParser.urlencoded({ extended: false }));

<<<<<<< HEAD
app.use('/',signupRouter)
app.use('/profile',profileRouter)
app.use('/helpdesk',helpdeskRouter)
=======
app.use("/", signupRouter);
app.use("/profile", profileRouter);
app.use("/salary", salaryRouter);
app.use("/attendance", attendanceRouter);
app.use("/benefits", benefitRouter);
app.use("/feedback", feedbackRouter);
app.use("/userDetails", userDetailsRouter);
>>>>>>> 81491908cfa7090a4b1233bb418af3e8e0b81cc8

app.listen(5000, () => {
  console.log("App listeneing on port 5000");
});
