var express = require("express");
var app = express();
router = express.Router();
const attendance = require("../controllers/attendance_controller");
var router = require("express").Router();

//create new attendance
router.post("/", attendance.create);

//retrieve all attendance
router.get("/", attendance.findAll);

module.exports = router;
