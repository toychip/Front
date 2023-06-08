
var express = require('express');
var http = require('http');

var app = express();
/*

app.use(function (request,response, next){
    response.send("<h1> Hello NodeJS</h1>")
})*/


//var router = express.Router();

app.use(function (request,response, next){
    console.log("first");
    next();
})
app.use(function (request,response, next){
    console.log("second");
    next();
})

app.use(function (request,response, next){
    response.send('<h1>Hello middleware</h1>');
})


// 웹 서버를 실행합니다.
http.createServer(app).listen(8080, function () {
    console.log('Server Running at http://127.0.0.1:8080');
});