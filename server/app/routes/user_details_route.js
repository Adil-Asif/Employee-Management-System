var express = require("express");
var app = express();
router = express.Router();
const user = require("../controllers/user_details_controller");
const { route } = require("./attendance_route");
var router = require("express").Router();

//create new restaurant manager
router.post("/", user.create);
router.get("/", user.findAll);
router.put('/update', user.update);

<<<<<<< HEAD
module.exports = router;
=======
    //create new restaurant manager
    router.post("/", user.create);

    router.get("/",user.findAll);

    router.delete("/:userId" , user.delete)

    app.use('/api/user', router);
}
>>>>>>> bdc031ecdd7717b5777b645062d664e3d6e44300
