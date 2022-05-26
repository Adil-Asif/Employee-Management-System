var express = require("express");
var app = express();
router = express.Router();
const user = require("../controllers/user_details_controller");
const { route } = require("./attendance_route");
var router = require("express").Router();

//create new restaurant manager
router.post("/", user.create);
router.get("/", user.findAll);
router.put('/update', user.update);

module.exports = router;
