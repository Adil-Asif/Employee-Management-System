var express = require("express");
var app = express();
router = express.Router();
const user = require("../controllers/user_details_controller");
var router = require("express").Router();

//create new restaurant manager
router.post("/", user.create);
router.get("/", user.findAll);

module.exports = router;
