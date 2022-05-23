const sql = require("./database.js");

const User = function (user) {
  this.username = user.username;
  this.emailaddress = user.emailaddress;
  this.password = user.password;
  this.imgUrl = user.imgUrl;
  this.role = user.role;
  this.isOnboard = user.isOnboard;
};

User.create = (newUser, result) => {
  sql.query("insert into user_details set ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created new User: ", { userId: res.insertId, ...newUser });
    result(null, { userId: res.insertId, ...newUser });
  });
};

User.getAll = (id, result) => {
  let query = "SELECT * FROM user_details";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = User;
