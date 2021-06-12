var express = require('express');
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var invoke=require('./controller/javascript/invoke')
var query=require('./controller/javascript/query')
var register=require('./controller/javascript/registerUser')

app.post('/student', function (req, res) {

    var  result =async function () {
    var msg=await invoke.invoke(req.body.user,req.body.id,req.body.name,req.body.marks)
    res.send(msg)
    }
    result()
   
})
app.post('/register', function (req, res) {

    var  result =async function () {
    var msg=await register.register(req.body.user)
    res.send(msg)
    }
    result()
   
})
app.post('/query', function (req, res) {

    var  result =async function () {
    console.log(req.body)
    var msg= await query.query(req.body.user,req.body.id)
    res.send(msg);

    }
    result()
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})