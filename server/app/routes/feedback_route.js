module.exports = app =>{
    const feedback = require("../controllers/feedback_controller.js");

    var router = require("express").Router();

    //create new feedback
    router.post("/", feedback.create);
    
    //retrieve all feedback
    router.get("/", feedback.findAll);


    router.delete("/:feedbackId" , feedback.delete)

    app.use('/api/feedback', router);
}