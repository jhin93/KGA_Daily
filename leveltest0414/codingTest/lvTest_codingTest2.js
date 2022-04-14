
// 정수 배열과 부호 배열을 매치한 후, 매치한 값들을 더해서 결과값을 추출한다.

// a를 정수배열, b를 부호배열로 받음
// b의 요소가 false인 i 와 true인 i를 구분한다.
// false 요소끼리 더한 후, true 요소끼리 더한 합에서 뺀다.

// 변수선언
let posNum = 0; // 양수의 합을 저장할 변수
let negNum = 0; // 음수의 합을 저장할 변수
let result; // 최종 결과물

function solution(a, b) {
    for(let i = 0; i < a.length; i ++) { // 반복문. a와 b의 길이가 같으므로 둘중 어떤 길이를 써도 a,b 둘다 적용할 수 있다.
        if(b[i] == false){ // 부호가 음수인 i번째 수
            negNum += a[i]; // 음수의 합을 변수에 저장
        }

        if(b[i] == true) {
            posNum += a[i]; // 양수의 합을 변수에 저장
        }
    }
    result = posNum - negNum;
    return result;
}


// function solution(a, b) {
//     for(let i = 0; i < a.length; i ++) { // 반복문. a와 b의 길이가 같으므로 둘중 어떤 길이를 써도 a,b 둘다 적용할 수 있다.
//         if(b[i] == false){ // 부호가 음수인 i번째 수
//             negNum += a[i]; // 음수의 합을 변수에 저장
//             console.log(negNum)
//         }
//     }
// }














