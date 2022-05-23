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

router.get('/',(req,res)=>{
    console.log('in profile help')
    var count=0;
    var sql = "select *from project"
    db.query(sql,(err,result)=>{
        for(let i=0;i<result.length;i++){
         if (result[i].completed==0){
            count++;
         }
        }
        var completed = result.length - count
        res.send({total:result.length,ongoing:count,completed:completed})
    })
})

module.exports = router;