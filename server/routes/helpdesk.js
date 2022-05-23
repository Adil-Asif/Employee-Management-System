var express = require('express')
var app = express()
router = express.Router()
app.use('/', router)
var db = require('../models/database')
const cors = require('cors')
const cookieParser = require('body-parser')
app.use(cookieParser.json())
app.use(cookieParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json());

router.get('/', (req, res) => {
    var sql = "select employee.username,helpdesk.help_id,helpdesk.helptitle,helpdesk.helpdescription,helpdesk.helptype,helpdesk.isapproved from employee,helpdesk where helpdesk.user_id=employee.employee_id and helpdesk.user_id=3"
    db.query(sql, [3], (err, result) => {
        if (err) {
            res.send(err)
        }
        else if (result) {
            res.send(result)
        }
    })
})
module.exports = router;