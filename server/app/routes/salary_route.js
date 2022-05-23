module.exports = app =>{
    const salary = require("../controllers/salary_controller.js");

    var router = require("express").Router();

    router.post("/", salary.create);

    
    router.get("/", salary.findAll);

    router.delete("/:salaryId" , salary.delete)

    app.use('/api/salary', router);
}