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
    var sql = "select *from announcement"
    var sql1 = "select imgUrl from employee where employee_id=?"
    var img = []
    db.query(sql, (err, result) => {
        for (let i = 0; i < result.length; i++) {
            db.query(sql1, [result[i].user_id], (error, results) => {
                img.push(results[0].imgUrl)
                if (i == result.length - 1) {
                    res.send({ announcement: result, image: img})
                }
            })
        }
    })
})

module.exports = router;