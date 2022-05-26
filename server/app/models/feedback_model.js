const sql = require("./database.js");

const Feedback = function (feedback) {
  this.feedback = feedback.feedbackDescription;
  this.userId = feedback.userId;
};

Feedback.create = (newFeedback, result) => {
  sql.query("insert into employee_reports set ?", newFeedback, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created new Feedback: ", {
      feedbackId: res.insertId,
      ...newFeedback,
    });
    result(null, { feedbackId: res.insertId, ...newFeedback });
  });
};

Feedback.getAll = (id, result) => {
  let query = "SELECT * FROM employee_reports where userId = ? ORDER BY reportid DESC;";

  sql.query(query,id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("feedback: ", res);
    result(null, res);
  });
};

module.exports = Feedback;
