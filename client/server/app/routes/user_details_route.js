module.exports = app =>{
    const user = require("../controllers/user_details_controller.js");

    var router = require("express").Router();

    //create new restaurant manager
    router.post("/", user.create);

    router.delete("/:userId" , user.delete)

    app.use('/api/user', router);
}