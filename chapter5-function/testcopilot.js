//  함수를 사용한 객체를 생성하되 네개의 임의의 값을 입 력 받는다. 
// 4개의 포지션의 위치 값은 (leftX,leftY, rightX,rightY) 값으로 생성 되는 사각형의 넓이와 둘레의 길이를 구하여라. 
// 네 값이 없는 경우 초기 값으로 leftX =10 ,left=10, rightX=100,rightY=100 으 로 설정하여라 
// 다음과 같이 여러개의 입력을 배열로 넣었을 경우 결과물을 출력하여라. 
var square = [];
square.push(makeSquare(10,200,150,250));

// 출력 예시
// Area and Circumstance
// Area:(100, 200) to (150, 250) = 2500
// Circumstance:(100, 200) to (150, 250) = 200

// 사각형 객체 생성 함수
function rectangle(leftX = 10, leftY = 10, rightX = 100, rightY = 100) {
    this.leftX = leftX;
    this.leftY = leftY;
    this.rightX = rightX;
    this.rightY = rightY;
  
    // 넓이 계산 메소드
    this.calculateArea = function () {
                const width = Math.abs(this.rightX - this.leftX);
                const height = Math.abs(this.rightY - this.leftY);
            return width * height;
    };
    // 둘레 계산 메소드
    this.calculatePerimeter = function () {
    const width = Math.abs(this.rightX - this.leftX);
    const height = Math.abs(this.rightY - this.leftY);
      return 2 * (width + height);
        };
    }
  
  // 입력 배열

    const inputs = [
    [100, 200, 150, 250],
    ];

  // 결과 출력
    console.log("Area and Circumstance");
    inputs.forEach((input) => {
    const rectangle = new rectangle(...input);
    console.log(`Area:(${rectangle.leftX}, ${rectangle.leftY}) to (${rectangle.rightX}, ${rectangle.rightY}) = ${rectangle.calculateArea()}`);
    console.log(`Circumstance:(${rectangle.leftX}, ${rectangle.leftY}) to (${rectangle.rightX}, ${rectangle.rightY}) = ${rectangle.calculatePerimeter()}`);
    });