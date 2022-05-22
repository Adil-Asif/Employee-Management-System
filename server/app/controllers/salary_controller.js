const Salary = require("../models/salary_model.js");

exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({
            message: "content cannot be empty!"

        });

    }
    // Create a Manager
    const salary = new Salary({
        month : req.body.month,
        baseSalary : req.body.baseSalary,
        reimbursements : req.body.reimbursements,
        bonuses : req.body.bonuses, 
        userId: req.body.userId,
    });

    // Save Manager in the database
    Salary.create(salary, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the salary."
            });
        else 
        // console.log(data);
        res.send(data);
    });

    
};
exports.findAll = (req, res) => {
    const id = req.query.id;

    Salary.getAll(id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving salary."
            });
        else res.send(data);
    });
};


//Delete a Salary with the specified id in the request
exports.delete = (req, res) => {
    //console.log(req.params);
    Salary.remove(req.params.salaryId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found salary with salaryId ${req.params.salaryId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete salary with salaryId " + req.params.salaryId
                });
            }
        } else res.send({ message: `Salary was deleted successfully!` });
    });
};
