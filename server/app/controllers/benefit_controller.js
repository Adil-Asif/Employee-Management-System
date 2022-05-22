const Benefit = require("../models/benefit_model.js");

exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({
            message: "content cannot be empty!"

        });

    }
    // Create a Manager
    const benefit = new Benefit({
        benefitTitle : req.body.benefitTitle,
        benefitDescription : req.body.benefitDescription,
        benefitPromoCode : req.body.benefitPromoCode,
    });

    // Save Manager in the database
    Benefit.create(benefit, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the benefit."
            });
        else 
        // console.log(data);
        res.send(data);
    });

    
};
exports.findAll = (req, res) => {
    const id = req.query.id;

    Benefit.getAll(id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving benfit."
            });
        else res.send(data);
    });
};

//Delete a Benefit with the specified id in the request
exports.delete = (req, res) => {
    //console.log(req.params);
    Benefit.remove(req.params.benefitId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found employee_benefit with benefitId ${req.params.benefitId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete employee_benefit with benefitId " + req.params.benefitId
                });
            }
        } else res.send({ message: `Benefit was deleted successfully!` });
    });
};
