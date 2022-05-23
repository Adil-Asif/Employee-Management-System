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

router.post('/',(req,res)=>{
    console.log('project fill::')
    var sqlstring=''
    var sqlstring1=''
    var sqlstring2=''
    // console.log(`"${req.body.members}"`)
    req.body.members_id.forEach(element => {
        sqlstring+=`${element}`
        sqlstring+=" "
    });
    console.log('hi:::::',sqlstring)
    var sql = "insert into project values(?,?,?,?,?,?,?)"
    db.query(sql,[
        0,
        req.body.title,
        req.body.description,
        req.body.image,
        sqlstring,
        req.body.submitted,
        false
    ],(err,result)=>{
        console.log(err)
        console.log(result)
    })
})
module.exports = router;