
// 문제 3. 배열에서 모든 요소 중 3개씩 골라 더하는 과정을 반복한다. 그 각각의 결과값 중 소수가 도출되는 경우만 센다.

// 1. 모든 요소 중 3개씩 골라 더하기.
// 2. 소수를 구하는 로직. 3개의 숫자 중 어느것으로도 나누어떨어지지 않음.
// 3. 1의 결과값들을 2의 로직으로 소수인지 검사.

// 변수 선언
let primeNumArr = []; // 소수를 만드는 3개의 수를 담는 배열
let resultArr = []; // 소수 만드는 배열을 모아놓은 배열
let primeNum; // 소수를 담을 변수

// 소수 확인 함수
function checkPrimeNum (num) {
    if (num == 2 || num == 3 || num == 5 || num == 7) {
        return "primeNumber"
    } else if (num % 2 != 0 && num % 3 != 0 && num % 5 != 0 && num % 7 != 0) {
        return "primeNumber"
    }
}

function solution(nums) {
    // 3중 반복문. 
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++){
            for(let k = 2; k < nums.length; k++){
                primeNum = nums[i] + nums[j] + nums[k]; // 일단 더한 값을 변수에 담기
                if(k == nums.length - 1){ // k가 배열의 끝에 도달했을 때 맨 앞 요소를 제거하고 다시 로직 반복
                    nums.shift();
                }
                if(checkPrimeNum(primeNum) == "primeNumber"){ // checkPrimeNum로 소수인 상황을 전제로 둠.
                    primeNumArr.push(nums[i], nums[j], nums[k]) // 소수를 만드는 3개의 수를 담는 배열
                    resultArr.push(primeNumArr) // 소수 만드는 배열들을 하나의 배열에 모은다.
                }
            }
        }
    }
    let result = resultArr.length;
    return result;
}










