var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

// 상품 데이터
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

// 웹 서버 생성
var app = express();

// 정적 파일 제공
app.use(express.static('public'));

// body-parser 설정
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 라우트
app.all('/data.html', function (request, response) {
    var output = '';
    output += '<!DOCTYPE html>';
    output += '<html>';
    output += '<head>';
    output += '    <title>Data HTML</title>';
    output += '</head>';
    output += '<body>';

    // 상품 정보 출력
    items.forEach(function (item) {
        output += '<div>';
        output += '    <h1>' + item.name + '</h1>';
        output += '    <h2 style="color:red">' + item.price + '</h2>';
        output += '</div>';
    });

    output += '</body>';
    output += '</html>';

    response.send(output);
});

// 상품 추가 라우트
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

// 상품 수정 라우트
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

// 상품 삭제 라우트
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

// 웹 서버 실행
http.createServer(app).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
