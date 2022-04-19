/*
    캔버스 설정
    document
    context    
 */

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

let arcPosX = canvas.width/2;
let arcPosY = canvas.height/2;
let arcMoveDir = -1;
let arcMoveSpeed = 2;

// 실습. 동그라미가 오른쪽으로 움직이다가 캔버스 끝에 닿으면 왼쪽으로 이동.
// 왼쪽으로 이동하다가 오른쪽에 닿으면 다시 반대로 이동.




function update() {
    // 데이터 수정(도형의 위치 이동)
    if(arcPosX - 50 < 0) {
        arcMoveDir = 1
    } else if (arcPosX + 50 > canvas.width) {
        arcMoveDir = -1
    }

    arcPosX += arcMoveDir * arcMoveSpeed; // 원 움직이기. 
}





// 그리기


function draw() {
    // 화면 클리어
    context.clearRect(0, 0, canvas.width, canvas.height); // 움직이고 이전 상태는 지운다. 아니면 잔상이 남음
    // 다른 도형 그리기
    drawRect();
    drawArc();
}

// 사각형 그리는 함수
function drawRect() {
    context.beginPath(); // 그리기 시작


    context.rect(canvas.width/2 - 100/2, canvas.height/2 - 100/2, 100, 100); // rect는 좌상단 기준으로 그리기
    context.fillStyle = 'red';
    context.fill();

    context.closePath(); // 그리기 종료

}

// 원 그리는 함수
function drawArc(){
    context.beginPath(); // 그리기 시작

    context.arc(arcPosX, arcPosY, 50, 0, 2 * Math.PI)
    context.fillStyle = 'blue';
    context.fill();
    
    context.closePath(); // 그리기 종료
}


// 지속적인 변화주기 setInterval. 함수이름, 시간, 
setInterval(update, 10);
setInterval(draw, 10);


