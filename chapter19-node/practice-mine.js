// const { response } = require('express');
var express = require('express');
var http = require('http');

var app = express();

var router = express.Router();
app.use(router);

app.all('/a', function (request, response){
    response.send("<h1>Page A</h1>")
});

app.all('/b', function (request, response){
    response.send("<h1>Page B</h1>")
});

app.all('/c', function (request, response){
    response.send("<h1>Page C</h1>")
});

app.use(function (request,response){
    response.send("hello nodeJs")
})

// 웹 서버를 실행합니다.
http.createServer(app).listen(8080, function () {
    console.log('Server Running at http://127.0.0.1:8080');
});

/*
/data.html  데이터를 Html 형식으로 제공
/data.json  데이터를 JSON 형식으로 제공
/data.xml   데이터를 XML 형식으로 제공
*/

// --------------------------- 내코드 ----------------------------------------------

// var express = require('express');
// var http = require('http');


// var app = express();
// var router = express.Router();
// app.use(router);

// app.all('/a', function(request, response) {
//     response.send("<h1> A - Hello NodeJS</h1>")
// });

// app.use(function (request,response, next){
//     console.log("first")
//     next();
// })
// app.use(function (request,response, next){
//     console.log("second")
//     next();
// })
// app.use(function (request,response, next){
//     response.send("<h1> Hello NodeJS</h1>")
// })


// //var router = express.Router();

// /*
// app.use(function (request,response, next){
//     response.send("hello middleware")
// })*/


// // 웹 서버를 실행합니다.
// http.createServer(app).listen(8080, function () {
//     console.log('Server Running at http://127.0.0.1:8080');
// });