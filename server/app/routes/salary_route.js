var express = require("express");
var app = express();
router = express.Router();
const salary = require("../controllers/salary_controller");
var router = require("express").Router();

router.post("/", salary.create);

router.get("/", salary.findAll);

module.exports = router;
