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


// Retrieve all Feedback from the database (with condition).
exports.findAll = (req, res) => {
    const id = req.query.id;

    User.getAll(id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving feedback."
            });
        else res.send(data);
    });
};


//Delete a Manager with the specified id in the request
// Retrieve all Attendance from the database (with condition).
exports.findAll = (req, res) => {
    const id = req.query.id;
    console.log(req.query.userId);
    User.getAll(id, (err, data) => {
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
