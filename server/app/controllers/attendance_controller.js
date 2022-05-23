const Attendance = require("../models/attendance_model.js");

exports.create = (req, res) => {
  //validate request
  // console.log(req);
  if (!req.body) {
    res.status(400).send({
      message: "content cannot be empty!",
    });
  }
  // Create a Manager
  const attendance = new Attendance({
    time: req.body.time,
    status: req.body.status,
    userId: req.body.userid,
  });

  // Save Manager in the database

  Attendance.create(attendance, (err, data) => {
    console.log(attendance);
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the attendance.",
      });
    // console.log(data);
    else {
      res.send(data);
      console.log(attendance);
    }
  });
};

// Retrieve all Attendance from the database (with condition).
exports.findAll = (req, res) => {
  const id = req.query.id;
  console.log(req.query.userId);
  Attendance.getAll(id, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving attendance.",
      });
      console.log(err);
    } else {
      // console.log(data,"2");
      res.send(data);
    }
  });
};
