var express = require("express");
var app = express();
router = express.Router();
const benefit = require("../controllers/benefit_controller");
var router = require("express").Router();
var router = require("express").Router();

router.post("/", benefit.create);

router.get("/", benefit.findAll);

module.exports = router;
