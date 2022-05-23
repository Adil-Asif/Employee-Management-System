var express = require('express')
var app = express()
router = express.Router()
app.use('/', router)
const bcrypt = require('bcrypt')
var db = require('../models/database')
var session = require('sessionstorage')

router.post('/', (req, res) => {
    if (req.body.signup) {
        console.log(req.body)
        var sql = 'insert into employee values(?,?,?,?,?,?,?)'
        db.query(sql, [0, req.body.signup.username, req.body.signup.emailaddress, bcrypt.hashSync(req.body.signup.password, 5),'', '', false],
            (err, result) => {
                if (err) {
                    console.log('error', err)
                    if (err.includes('emailaddress')) {
                        session.setItem('signup', false)
                        res.send({ loggedIn: false, error: 'Email already exists' })
                    }
                    else if (err.includes('phone')) {
                        session.setItem('signup', false)
                        res.send({ loggedIn: false, error: 'Phone number already exists' })
                    }
                }
                else if (result) {
                    console.log('result', result)
                    session.setItem('userid', result.insertId)
                    session.setItem('completestage', false)
                    const i1 = session.getItem('userid')
                    console.log('id', i1)
                    res.send({ loggedIn: true, userid: result.insertId, error: null })
                }
            })
    }
    else if (req.body.login) {
        console.log(req.body)
        var check = false
        var sql = "select *from employee where emailaddress = ?"
        db.query(sql, [
            req.body.login.emailaddress
        ], (err, result) => {
            if (result.length > 0) {
                check = bcrypt.compareSync(
                    req.body.login.password,
                    result[0].password,
                    (err, res) => {
                        if (err)
                            res.send({ loggedIn: false })
                    })
                    if(check){
                        res.send({loggedIn:true,userid:result[0].employee_id})
                    }
                    else
                    {
                        res.send({loggedIn:false})
                    }
        }
        })
    }
})
module.exports = router;