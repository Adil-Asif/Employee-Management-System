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
    var arr=[]
    var arr1=[]
    var arr2=[]
    console.log('in projects')
    var sql="select employee_id,imgUrl from employee where emailaddress=?"
    for(let i=0;i<req.body.length;i++){
        arr2.push({member:req.body[i]})
        db.query(sql,[req.body[i]],(err,result)=>{
          arr.push(result[0].employee_id)
          arr1.push(result[0].imgUrl)
        //   console.log('array:::',arr1)
        // console.log(result[0])
        if(i==req.body.length-1){
            res.send({member:arr2,member_id:arr,imgUrl:arr1})
        }
        })
    }
})

router.get('/',(req,res)=>{
    var sql="select *from project"
    var arr=[]
    var arr1=[]
    db.query(sql,(err,result)=>{
        // console.log(result[0].members_id)
        var str = result[0].members_id.replace(/\s+/g,' ').trim();
        str = str.split(' ')
        var sql1 = "select username,imgUrl from employee where employee_id=?"
        for(let i=0;i<str.length;i++)
        db.query(sql1,[parseInt(str[i])],(error,results)=>{
            arr.push(results[0].username)
            arr1.push(results[0].imgUrl)
        if(i==str.length-1){
            res.send({result:result,name:arr,image:arr1})
        }
        })
    })
})

module.exports = router;