var express = require('express')
var app = express()
router = express.Router()
app.use('/',router)
const bcrypt = require('bcrypt')
var db = require('../models/database')


router.post('/',(req,res)=>{
    console.log('insignup')
    console.log('insignup')
    var sql = 'insert into user values(?,?,?,?,?)'
    db.query(sql,[0,req.body.username,req.body.emailaddress,bcrypt.hashSync(req.body.password,5),req.body.role],
    (err,result)=>{
        if(err){
            console.log('error',err)
            // console.log(err)
            // res.send('error')
            if(err.includes('email')){
                session.setItem('signup',false)
                res.send({loggedIn:false,error:'Email already exists'})
            }
            else if(err.includes('phone')){
                session.setItem('signup',false)
                res.send({loggedIn:false,error:'Phone number already exists'})
            }
        }
        else if(result){
        console.log('result',result)
        session.setItem('userid',result.insertId)
        session.setItem('completestage',false)
        const i1 = session.getItem('userid')
        console.log('id',i1)
        res.send({loggedIn:true,userid:result.insertId,error:null})
        // req.session.user = result.insertId;
        // console.log('session value')
        // console.log(req.session)
        // res.send(result)
    }
    })
})


module.exports = router;