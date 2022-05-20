const sql = require("./database.js")

const User = function (user) {
    this.username = user.username;
    this.emailaddress = user.emailaddress;
    this.password = user.password;
    this.imgUrl = user.imgUrl;
    this.role = user.role;
    this.isOnboard = user.isOnboard;
}

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

User.remove = (id, result) => {
    sql.query("DELETE FROM user_details WHERE userId = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found restaurant_manager with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted user_detail with userId: ", id);
        result(null, res);
    });
};


module.exports = User;