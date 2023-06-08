var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

// 데이터 초기화
var items = [{
    name: '우유',
    price: '2000'
}, {
    name: '홍차',
    price: '5000'
}, {
    name: '커피',
    price: '5000'
}];

// 앱 초기화
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all('/data.html', function (request, response) {
    var output = '';
    output += '<!DOCTYPE html>';
    output += '<html>';
    output += '<head>';
    output += '    <title>Data HTML</title>';
    output += '    <script src="http://code.jquery.com/jquery-3.1.1.js"></script>';
    output += '    <script>';
    output += '    $(document).ready(function(){';
    output += '        $("h2").css("color", "red");';
    output += '    });';
    output += '    </script>';
    output += '</head>';
    output += '<body>';
    items.forEach(function (item) {
        output += '<div>';
        output += '    <h1>' + item.name + '</h1>';
        output += '    <h2>' + item.price + '</h2>';
        output += '</div>';
    });
    output += '</body>';
    output += '</html>';
    response.send(output);
});

app.post('/products', function (request, response) {
    var name = "new_prod" + request.body.name;
    var price = request.body.price;
    var item = {
        name: name,
        price: price
    };
    items.push(item);
    response.send({
        message: '데이터를 추가했습니다.',
        data: item
    });
});

app.put('/products/:id', function (request, response) {
    var id = Number(request.params.id);
    var price = request.body.price;

    if (items[id]) {
        if (price) { 
            if (price < 0) {
                items[id].price = '1000'; 
            } else {
                items[id].price = String(Number(price) * 1.1); 
            }
        }
        response.send({
            message: '데이터를 수정했습니다.',
            data: items[id]
        });
    } else {
        response.send({
            error: '존재하지 않는 데이터입니다!'
        });
    }
});

app.delete('/products/:id', function (request, response) {
    var id = Number(request.params.id);

    if (isNaN(id)) {
        response.send({
            error: '숫자를 입력하세요!'
        });
    } else if (items[id]) {
        items.splice(id, 1);
        response.send({
            message: '데이터를 삭제했습니다.'
        });
    } else {
        response.send({
            error: '존재하지 않는 데이터입니다!'
        });
    }
});

http.createServer(app).listen(522
