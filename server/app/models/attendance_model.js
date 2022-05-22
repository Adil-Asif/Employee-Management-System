const sql = require("./database.js")

const Attendance = function (attendance) {
    this.time = attendance.time;
    this.status = attendance.status;
    this.userId = attendance.userId;
}

Attendance.create = (newAttendance, result) => {
    sql.query("insert into attendance set ?", newAttendance, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created new Attendance: ", { attendanceId: res.insertId, ...newAttendance });
        result(null, { attendanceId: res.insertId, ...newAttendance });
    });
};


Attendance.getAll = (id, result) => {
    let query = "SELECT * FROM attendance ORDER BY attendanceId DESC;";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("attendance: ", res);
        result(null, res);
    });
};

Attendance.remove = (attendanceId, result) => {
    sql.query("DELETE FROM attendance WHERE attendanceId = ?",attendanceId, (err, res) => {
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

        console.log("deleted attendance with attendanceId: ", attendanceId);
        result(null, res);
    });
};


module.exports = Attendance;