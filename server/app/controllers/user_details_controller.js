const User = require("../models/user_details_model.js");

exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({
            message: "content cannot be empty!"

        });

    }
    // Create a Manager
    const user = new User({
        username : req.body.username,
        emailaddress : req.body.emailaddress,
        password : req.body.password,
        imgUrl : req.body.imgUrl,
        role : req.body.role,
        isOnboard : req.body.isOnboard,    
    });

    // Save Manager in the database
    User.create(user, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user."
            });
        else 
        // console.log(data);
        res.send(data);
    });

    
};

//Delete a Manager with the specified id in the request
exports.delete = (req, res) => {
    //console.log(req.params);
    User.remove(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found user with userId ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete user with userId " + req.params.userId
                });
            }
        } else res.send({ message: `User was deleted successfully!` });
    });
};
