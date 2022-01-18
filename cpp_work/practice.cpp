#include <iostream> // 인풋 아웃풋 스트림
#include <stdio.h> // 인풋 아웃풋 헤더

using namespace std;

int main(int argc, char* argv[]) // (인자의 개수, 인자를 받을 포인터)
{
    int num;
    num = 15; // 선언 이후 값을 대입할 수도 있다.
    cout << num << "\n"; // cout은 출력. num을 출력하고, 줄바꿈

    if(argc > 1) // argc에 아무것도 넣지 않아도, 스스로 int argc라고 정의되있기 때문에, 인자는 기본적으로 1개부터 시작함.
    {
        cout << "argc = " << argc << endl;
        for(int i = 0; i < argc; i++)
        {
            cout << "argv[" << i << "]" << "=" << argv[i] << endl;
        }
    }

    double fNum = 99.999;
    char cLetter = 'A';
    string strText = "Hello C++ !!";

    cout << "fNum = " << fNum << ", cLetter = " << cLetter << ", strText = " << strText << endl;
    printf("floatNum[%f], charLetter[%c]\n", fNum, cLetter); // %변수타입대응, %f는 float, double %c는 캐릭터 타입 대응

    int x = 15, y = 21, z = 60;
    cout << "x = " << x << ", y = " << y << ", z = " << z << endl;
    cout << "sum = " << x + y + z << endl;

    return 0;
}

// 터미널에서 입력 : ./practice hello world
/* 결과

15
argc = 3
argv[0]=./practice
argv[1]=hello
argv[2]=world
fNum = 99.999, cLetter = A, strText = Hello C++ !!
floatNum[99.999000], charLetter[A]
x = 15, y = 21, z = 60
sum = 96

*/


