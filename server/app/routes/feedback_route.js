var express = require("express");
var app = express();
router = express.Router();
const feedback = require("../controllers/feedback_controller");
var router = require("express").Router();

router.post("/", feedback.create);

//retrieve all feedback
router.get("/", feedback.findAll);

module.exports = router;
