

    // 클래스로 객체의 설계도를 만든다.
    // 명사로 지칭되는 객체를 설계한다. 자동차(속성), 책(속성과 기능), 몬스터(속성과 기능), 사람...
    class Brick {
        constructor(left, top, right, bottom, color) {
            this.left = left;
            this.top = top;
            this.right = right;
            this.bottom = bottom;
            this.isAlive = true; // 처음 생성될때는 alive가 맞음
            this.color = color
        }

        draw() {
            if(this.isAlive) {
                context.rect(this.left, this.top, brickWidth, brickHeight);
                context.fillStyle = this.color;
                context.fill();
            }
        }
    }

    // 프롬프트로 블록 개수 입력받기
    // var [columnNum, RowNum] = prompt("두 숫자를 띄어쓰기로 입력하세요 ").split(" ")

    // 타일
    const brickCol = 10; // 열
    const brickRow = 10; // 행
    const brickWidth = 40; 
    const brickHeight = 40; 
    let bricks = [];

    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    

    // 패들 관련 변수
    const barWidth = 40;
    const barHeight = 40;
    // let barPosX = canvas.width/2 - barWidth/2;
    let barPosX = 55;
    // let barPosY =  canvas.height - barHeight;
    let barPosY =  480;
    let barMoveSpeed = 50;
    
    let paddle = {
        left:0, right:0, top:0, bottom:0
    }

    // 장애물 변수

    class Obstacle {
        constructor(left, top, right, bottom, color) {
            this.left = left;
            this.top = top;
            this.right = right;
            this.bottom = bottom;
            this.isAlive = true; // 패들과 부딪힐때 false로 바뀌면서 게임클리어
            this.color = color
        }

        draw() {
            if(this.isAlive) {
                context.rect(this.left, this.top, brickWidth, brickHeight);
                context.fillStyle = this.color;
                context.fill();
            }
        }
    }

    // let obstacle = new Obstacle(40, 40, 40, 40, "black")
    // obstacle.draw()


    const obsWidth = 40;
    const obsHeight = 40;
    let obsPosX = 505;
    let obsPosY = 30;








    // game clear 변수

    

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
            if(barPosX > 0) {
                barPosX -= barMoveSpeed
            }
        }
        else if (e.key === 'ArrowUp') {
            // 바를 위쪽으로 이동
            if(barPosY + barHeight < canvas.height) {
                barPosY -= barMoveSpeed
            }
        }
        else if (e.key === 'ArrowDown') {
            // 바를 위쪽으로 이동
            if(barPosY + barHeight < canvas.height) {
                barPosY += barMoveSpeed
            }
        }
    
        paddle.left = barPosX 
        paddle.right = barPosX + barWidth; 
    
        paddle.top = barPosY 
        paddle.bottom = barPosY + barHeight; 
    }
    

    // 도형 움직이기
    
    // 게임 이겼는지 체크
    function checkToWin() {

        // 목표 블럭과 패들이 겹칠 경우, 클리어.
        // 1. 목표블럭 생성
        // 2. 패들과 겹치는 것을 조건으로 클리어.
    }
    

    // 그리기
    
    function draw() {
        // 화면 클리어
        context.clearRect(0, 0, canvas.width, canvas.height); // 움직이고 이전 상태는 지운다. 아니면 잔상이 남음
        // 다른 도형 그리기
        drawBricks();
        drawRect();
        drawObstacle();

    }

    // 패들 그리는 함수
    function drawRect() {
        context.beginPath(); // 그리기 시작
    
        context.rect(barPosX, barPosY, barWidth, barHeight); // rect는 좌상단 기준으로 그리기
        context.fillStyle = 'green';
        context.fill();
    
        context.closePath(); // 그리기 종료
    }

        // 목표지점 그리는 함수
        function drawObstacle() {
            context.beginPath(); // 그리기 시작
        
            context.rect(obsPosX, obsPosY, obsWidth, obsHeight); // rect는 좌상단 기준으로 그리기
            context.fillStyle = 'black';
            context.fill();
        
            context.closePath(); // 그리기 종료
            // let obstacle = new Obstacle(500, 60, 40, 40, "black")
            // obstacle.draw()
        
        }

    // 타일 생성 함수
    function setBricks() {
        bricks = [];
        for (let i = 0; i < brickRow; i ++) {
            bricks[i] = [];
            for(let j = 0; j < brickCol; j ++) {
                bricks[i][j] = new Brick(
                    55 + j * (brickWidth + 10), 
                    30 + i * (brickHeight + 10), 
                    55 + j * (brickWidth + 10) + 50, 
                    30 + i * (brickHeight + 10) + 25,
                    'lightgreen'
                );

            }
        }
    }

    // 타일 그리기.
    function drawBricks(){
        context.beginPath(); // 그리기 시작
        for (let i = 0; i < brickRow; i ++) {
            for(let j = 0; j < brickCol; j ++) {
                bricks[i][j].draw(); // 클래스 class 사용. 최상단 클래스
                // 이게 가능한 이유는 bricks[i][j]가 바로 위에서 bricks[i][j] = new Brick라고 클래스를 복사해서 사용하기 때문이다.
                // 만약 위의 bricks[i][j] = new Brick가 없다면 당연히 bricks[i][j].draw(); 처럼 메소드를 꺼내쓰는 건 불가능.
            }
        }



        context.closePath(); // 그리기 종료
    }
    
    
    // 지속적인 변화주기 setInterval. 함수이름, 시간, 
    setBricks();
    // setInterval(update, 10);
    setInterval(draw, 10);
    
    
    


