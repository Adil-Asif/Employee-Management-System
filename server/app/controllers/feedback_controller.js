const Feedback = require("../models/feedback_model.js");

exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({
            message: "content cannot be empty!"

        });

    }
    // Create a Manager
    const feedback = new Feedback({
        feedbackDescription : req.body.feedbackDescription,
        userId : req.body.userId,
    });

    // Save Manager in the database
    Feedback.create(feedback, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the feedback."
            });
        else 
        // console.log(data);
        res.send(data);
    });

    
};

// Retrieve all Feedback from the database (with condition).
exports.findAll = (req, res) => {
    const id = req.query.id;

    Feedback.getAll(id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving feedback."
            });
        else res.send(data);
    });
};

//Delete a Manager with the specified id in the request
exports.delete = (req, res) => {
    //console.log(req.params);
    Feedback.remove(req.params.feedbackId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found feedback with feedbackId ${req.params.feedbackId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete feedback with feedbackId " + req.params.feedbackId
                });
            }
        } else res.send({ message: `Feedback was deleted successfully!` });
    });
};
