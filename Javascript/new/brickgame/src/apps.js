

// var [columnNum, RowNum] = prompt("두 숫자를 띄어쓰기로 입력하세요 ").split(" "


// 벽돌
const brickCol = 4; // 열 4
const brickRow = 5; // 행 5
const brickWidth = 50; // 간격 10
const brickHeight = 25; // 간격 5
let bricks = [];


const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const arcRadius = 20; // 원 반지름

// 원 관련 변수
let arcPosX = canvas.width/2 + 120;
let arcPosY = canvas.height/2;
let arcMoveDirX = -1;
let arcMoveDirY = -1;
let arcMoveSpeed = 2;

let ball = {
    left:0, right:0, top:0, bottom:0,
}

// 벽돌
let brick = {
    left:0, right:0, top:0, bottom:0,
    column : 0, row : 0
}

// 패들 관련 변수
const barWidth = 100;
const barHeight = 20;
let barPosX = canvas.width/2 - barWidth/2;
let barPosY =  canvas.height - barHeight;
let barMoveSpeed = 60;

let paddle = {
    left:0, right:0, top:0, bottom:0
}



// 키 처리 함수 추가
document.addEventListener('keydown', keyDownEventHandler); // keydown이라는 이벤트가 발생하면 함수를 호출한다
// document.addEventListener('keyup', keyUpEventHandler); // keydown이라는 이벤트가 발생하면 함수를 호출한다

// 함수 모음
function keyDownEventHandler(e) { // 무슨키를 눌렀는지 알기 위해 매개변수 e 대입
    if (e.key === 'ArrowRight') {
        // 바를 오른쪽으로 이동
        // console.log("ArrowRight 는", e.key)
        if(barPosX + barWidth < canvas.width) {
            barPosX += barMoveSpeed
        }
    }
    else if (e.key === 'ArrowLeft') {
        // 바를 왼쪽으로 이동
        // console.log("ArrowLeft 는", e.key)
        if(barPosX > 0) {
            barPosX -= barMoveSpeed
        }
        
    }

    paddle.left = barPosX 
    paddle.right = barPosX + barWidth; 

    paddle.top = barPosY 
    paddle.bottom = barPosY + barHeight; 
}


// 도형 움직이기

function update() {
    // 데이터 수정(도형의 위치 이동)
    if(arcPosX - arcRadius < 0) {
        arcMoveDirX = 1
    } else if (arcPosX + arcRadius > canvas.width) {
        arcMoveDirX = -1
    }

    if(arcPosY - arcRadius < 0){
      arcMoveDirY = 1; 
    } else if(arcPosY + arcRadius > canvas.height) {
        arcMoveDirY = -1;
    }

    arcPosX += arcMoveDirX * arcMoveSpeed; // 원 좌우로 움직이기. 
    arcPosY += arcMoveDirY * arcMoveSpeed; // 원 위아래로 움직이기

    ball.left  = arcPosX - (arcRadius)
    ball.right  = arcPosX + (arcRadius)
    ball.top  = arcPosY - (arcRadius)
    ball.bottom  = arcPosY + (arcRadius)


    // 충돌이 되는지 확인
    if(isCollisionRectToRect(ball, paddle)){
        arcMoveDirY = -1;
        arcPosY = paddle.top - arcRadius;
    }

    for(let i = 0; i < brickRow; i ++){
        for(let j = 0; j < brickCol; j ++) {
            if(bricks[i][j].isAlive && isCollisionRectToRect(ball, bricks[i][j])) { //  한번 충돌된 애들은 체크를 안함. false
                // arcMoveDirY *= -1; // 부딪힐때마다 방향이 바뀌어야 하기에 *= 로 적용
                bricks[i][j].isAlive = false; // 여기서 isAlive가 false 바뀜. 충돌한 적 있다고 상태가 바뀐다.
                
                arcMoveDirY = -arcMoveDirY
                break;
            }
        }
    }

  // game over
  // if(isCollisionBallToCanvas(ball, canvas)){
  //   alert("game over!")
  //   console.log(canvas.bottom)
    
  // }


}

// function isCollisionBallToCanvas(rectA, rectB){
//   if(rectA.bottom === rectB.bottom){
//     return false
//   } 
//   return true        
// }



function isCollisionRectToRect(rectA, rectB) {
    // a의 왼쪽과 b의 오른쪽
    // a의 오른쪽과 b의 왼쪽
    // a의 아래쪽과 b의 위쪽
    // a의 위쪽과 b의 아래쪽
    if(rectA.left > rectB.right || 
        rectA.right < rectB.left ||
        rectA.top > rectB.bottom ||
        rectA.bottom < rectB.top )
    { // 이 4가지중 하나라도 만족하면 충돌 X
        return false; // 겹치지 않았다
    }

    return true; // 겹쳤다. 즉, 충돌했다.
}


// 그리기

function draw() {
    // 화면 클리어
    context.clearRect(0, 0, canvas.width, canvas.height); // 움직이고 이전 상태는 지운다. 아니면 잔상이 남음
    // 다른 도형 그리기
    drawRect();
    drawArc();
    drawBricks();
}

// 사각형 그리는 함수
function drawRect() {
    context.beginPath(); // 그리기 시작


    context.rect(barPosX, barPosY, barWidth, barHeight); // rect는 좌상단 기준으로 그리기
    context.fillStyle = 'red';
    context.fill();

    context.closePath(); // 그리기 종료

}

// 원 그리는 함수
function drawArc(){
    context.beginPath(); // 그리기 시작

    context.arc(arcPosX, arcPosY, arcRadius, 0, 2 * Math.PI)
    context.fillStyle = 'blue';
    context.fill();
    
    context.closePath(); // 그리기 종료
}

// 벽돌 생성 함수
function setBricks() {
    for (let i = 0; i < brickRow; i ++) {
        bricks[i] = [];
        for(let j = 0; j < brickCol; j ++) {
            bricks[i][j] = {
                left:55 + j * (brickWidth + 10), 
                right: 55 + j * (brickWidth + 10) + 50, 
                top: 30 + i * (brickHeight + 5), 
                bottom: 30 + i * (brickHeight + 5) + 25,
                column : i, row : j,
                isAlive:true
            };
        }
    }
}

function drawBricks(){
    context.beginPath(); // 그리기 시작
    for (let i = 0; i < brickRow; i ++) {
        for(let j = 0; j < brickCol; j ++) {
            if(bricks[i][j].isAlive) {
                context.rect(bricks[i][j].left, bricks[i][j].top, brickWidth, brickHeight);
                context.fillStyle = 'green';
                context.fill();
            }
        }
    }
    context.closePath(); // 그리기 종료
}


// 지속적인 변화주기 setInterval. 함수이름, 시간, 
setBricks();
setInterval(update, 10);
setInterval(draw, 10);





