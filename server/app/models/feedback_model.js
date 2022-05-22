const sql = require("./database.js")

const Feedback = function (feedback) {
    this.feedbackDescription = feedback.feedbackDescription;
    this.userId = feedback.userId;
}

Feedback.create = (newFeedback, result) => {
    sql.query("insert into feedback set ?", newFeedback, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created new Feedback: ", { feedbackId: res.insertId, ...newFeedback });
        result(null, { feedbackId: res.insertId, ...newFeedback });
    });
};


Feedback.getAll = (id, result) => {
    let query = "SELECT * FROM feedback ORDER BY feedbackId DESC;";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("feedback: ", res);
        result(null, res);
    });
};

Feedback.remove = (feedbackId, result) => {
    sql.query("DELETE FROM feedback WHERE feedbackId = ?",feedbackId, (err, res) => {
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

        console.log("deleted feedback with feedbackId: ", feedbackId);
        result(null, res);
    });
};


module.exports = Feedback;