var express = require('express')
var app = express()
router = express.Router()
app.use('/',router)
var db = require('../models/database')
const cors = require('cors')
const cookieParser = require('body-parser')
app.use(cookieParser.json())
app.use(cookieParser.urlencoded({extended:true}))
app.use(cors())
app.use(express.json());

router.post('/',(req,res)=>{
    if(req.body.leave){
    console.log(req.body.leave)
    var sql = "insert into helpdesk values(?,?,?,?,?,?)"
    db.query(sql,[0,3,
    req.body.leave.helptitle,
    req.body.leave.helpdescription,
    req.body.leave.helptype,
    false],
    (err,result)=>{
        if(err){
            res.send(err)
        }
        else if(result){
            res.send({helpPlaced:true})
        }
    })
    }    
    else if(req.body.image){
    console.log(req.body.image.imgUrl)
    var sql="update employee set imgUrl=? where employee_id=?"
    db.query(sql,[req.body.image.imgUrl,3],
    (err,result)=>{
        if(err){
            console.log(err)
            res.send(err)
        }
        else if(result){
            res.send('Image updated')
        }
    })
    }
    else if(req.body.Announcement){
    console.log(req.body.Announcement)
    var sql="insert into announcement values(?,?,?)"
    db.query(sql,[0,3,req.body.Announcement.announcementdescription],
    (err,result)=>{
       if(err){
           res.send(err)
       }
       else if(result){
           res.send('Announcement placed')
       }
    })
    }
    // res.send({data:'hiiiiiiiiiii'})
})


module.exports = router;