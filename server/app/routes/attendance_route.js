module.exports = app =>{
    const attendance = require("../controllers/attendance_controller.js");

    var router = require("express").Router();

    //create new attendance
    router.post("/", attendance.create);
    
    //retrieve all attendance
    router.get("/", attendance.findAll);


    router.delete("/:attendanceId" , attendance.delete)

    app.use('/api/attendance', router);
}