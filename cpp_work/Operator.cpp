#include <iostream>
#include <stdio.h>
#include <string>

using namespace std;

int main ()
{
    int x = 100 + 200; // 산술연산자 +
    int y = x + 400;
    // float z = y / x;
    float z = (float)y / (float)x; // 타입캐스팅
    int xx = y % x; // 결과 : 100

    cout << "x : " << x << endl;
    cout << "y : " << y << endl;
    cout << "z : " << z << endl; // 0.몇몇은 0으로 출력
    cout << "xx : " << xx << endl;

    int nNumber = 10;
    // nNumber += 25;
    // nNumber *= 25;
    // nNumber /= 25;
    // nNumber %= 25;
    nNumber -= 25;

    cout << "nNumber : " << nNumber << endl;

    int isX = 10, isY = 10;
    cout << "Return value : " << (isX >= isY) << endl; // true면 1, false면 0

    return 0;
}