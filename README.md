# KGA_daily

블록체인 4기 김진경.

그날 배운 것을 올리는 매일 1커밋 하는 공간입니다.


css - position.  
https://ofcourse.kr/css-course/position-%EC%86%8D%EC%84%B1  


vscode 단축키  
https://blog.naver.com/jiwon3194/222512040766  



반복문 사용 시, 무한 루프가 돌때는 연산자가 제한범위안에 제대로 있는 지 확인할 것.  

while( i < 10 ) {
    if((i % 2) == 0){
        text += "<br>The number is " + i;
    }
    i++;
}

Math.abs()  
Math.abs() 함수는 주어진 숫자의 절대값을 반환합니다. x가 양수이거나 0이라면 x를 리턴하고, x가 음수라면 x의 반대값, 즉 양수를 반환합니다.  
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/abs  


form태그의 action = # 의 의미  
https://stackoverflow.com/questions/8862035/what-does-it-mean-when-the-form-action-attribute-is-number-pound-symbol-sig/8862207#8862207  


자바스크립트 label  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label  


NodeJS  
nvm 설치 및 버전확인 및 변경  
https://gist.github.com/falsy/8aa42ae311a9adb50e2ca7d8702c9af1  




nvm ls  
nvm 버전 확인  

nvm 버전사용  
nvm nvm use 버전(ex nvm use 16.13.0)

빌트인 모듈은 따로 설치를 안해줘도 사용가능하다 (ex http)




REPL 터미널  
read eval print loop  

var를 선언하고 값을 할당하면 값이 저장되지만,  
출력이 되지는 않는다. 그래서 undefined가 뜸.  
> var y = 10  
undefined  

밑줄을 사용하여 마지막 결과를 얻을 수 있다.
var sum = _ 는 위에서 더한 결과를 담는다.


npm install할때는 -save 옵션을 붙일 것.  
npm install -s 모듈. npm install 모듈 -save  
그래야 package.json의 dependencies에서 관리가 됨.  

npm uninstall 모듈명  
npm search 모듈명  

npm init - package.json을 생성함.  

Buffer의 개념.  
https://tk-one.github.io/2018/08/28/nodejs-buffer/  
https://www.youtube.com/watch?v=BsWWPhM8Lvk  

readFilfe, readFileSync  
https://balmostory.tistory.com/33  

파일시스템(fs.open)  
https://psyhm.tistory.com/15  

tcp ip  
https://aws-hyoh.tistory.com/entry/TCPIP-%EC%89%BD%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0

url.parse()  
URL 문자열을 입력하면 URL 객체를 만든다. 만든 url 객체에서 pathname 키의 밸류를 가져옴. https://gongbu-ing.tistory.com/9  

url.parse에 줄이 생기는 이유는 더이상 사용하지 않으니 추천하지 않는다  
https://velog.io/@satoshi25/url.parse-deprecated  






