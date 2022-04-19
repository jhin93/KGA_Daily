/*
    캔버스 설정
    document
    context    
 */

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

context.clearRect(0, 0, canvas.width, canvas.height);

context.beginPath(); // 그리기 시작


context.rect(canvas.width/2 - 100/2, canvas.height/2 - 100/2, 100, 100);
context.fillStyle = 'red';
context.fill();

context.closePath(); // 그리기 종료

context.beginPath(); // 그리기 시작

context.arc(canvas.width/2 - 100/2, canvas.height/2 - 100/2, 50, 0, 2 * Math.PI)
context.fillStyle = 'blue';
context.fill();

context.closePath(); // 그리기 종료
