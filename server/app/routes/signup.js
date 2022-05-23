var express = require("express");
var app = express();
router = express.Router();
const uuid = require("uuid");
app.use("/", router);
const bcrypt = require("bcrypt");
var db = require("../models/database");
var session = require("sessionstorage");

router.post("/", (req, res) => {
  //   console.log(req.body, "output");
  if (req.body.signup) {
    // console.log(req.body);
    var sql = "insert into user_details values(?,?,?,?,?,?,?)";
    const userID = uuid.v1();
    db.query(
      sql,
      [
        userID,
        req.body.signup.username,
        req.body.signup.emailaddress,
        bcrypt.hashSync(req.body.signup.password, 5),
        "",
        "",
        false,
      ],
      (err, result) => {
        if (err) {
          console.log("error", err);
          res.send("Email already registered");
        } else if (result) {
          // console.log("result", result);
          session.setItem("userid", userID);
          session.setItem("completestage", false);
          const i1 = session.getItem("userid");
          // console.log("id", i1, "h1");
          res.send({ userid: userID });
        }
      }
    );
  } else if (req.body.login) {
    // console.log(req.body);
    var check = false;
    var sql = "select *from user_details where emailaddress = ?";
    db.query(sql, [req.body.login.emailaddress], (err, result) => {
      if (err) {
        res.send("Invalid email or password");
      } else {
        if (result.length > 0) {
          check = bcrypt.compareSync(
            req.body.login.password,
            result[0].password,
            (err, res) => {
              if (err) res.send({ loggedIn: false });
            }
          );
          if (check) {
            res.send({ userid: result[0].userId });
          } else {
            res.send({ loggedIn: false });
          }
        }
      }
    });
  }
});
module.exports = router;
