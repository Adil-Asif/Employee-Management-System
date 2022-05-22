module.exports = app =>{
    const benefit = require("../controllers/benefit_controller.js");

    var router = require("express").Router();

    router.post("/", benefit.create);
    
    router.get("/", benefit.findAll);

    router.delete("/:benefitId" , benefit.delete)

    app.use('/api/benefit', router);
}