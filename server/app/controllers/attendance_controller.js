const Attendance = require("../models/attendance_model.js");

exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({
            message: "content cannot be empty!"

        });

    }
    // Create a Manager
    const attendance = new Attendance({
        time : req.body.time,
        status : req.body.status,
        userId : req.body.userId,
    });

    // Save Manager in the database
    Attendance.create(attendance, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the attendance."
            });
        else 
        // console.log(data);
        res.send(data);
    });

    
};

// Retrieve all Attendance from the database (with condition).
exports.findAll = (req, res) => {
    const id = req.query.id;

    Attendance.getAll(id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving attendance."
            });
        else res.send(data);
    });
};

//Delete a Manager with the specified id in the request
exports.delete = (req, res) => {
    //console.log(req.params);
    Attendance.remove(req.params.attendanceId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found attendance with attendanceId ${req.params.attendanceId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete attendance with attendanceId " + req.params.attendanceId
                });
            }
        } else res.send({ message: `Attendance was deleted successfully!` });
    });
};
