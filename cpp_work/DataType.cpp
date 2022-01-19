#include <iostream>
#include <stdio.h>
#include <string>

using namespace std;

int main()
{
    int nNum = 6;
    float fNum = 8.1234567890123456;
    double dNum = 8.1234567890123456;
    char cLetter = 'A';
    bool isVar = true, isFalse = false;
    string strText = "Hello\tWorld!!!\a"; // \t는 탭
    int isNumber = true; // 결과가 int 값으로 나옴

    cout << "int : " << nNum << endl;
    // cout.precision(15); // 7자리까지
    cout << "float : " << fixed << fNum << endl;
    // cout.precision(15); // 15자리까지
    cout << "double : " << fixed << dNum << endl;
    cout << "char : " << cLetter << endl;
    cout << "bool isVar : " << isVar << ", bool isFalse : " << isFalse << ", isNumber : " << isNumber << endl;
    cout << "string : " << strText << endl;
    printf("cLetter number : %d\r\n", cLetter); // 대문자 'A'는 65다.
    cout << "=========================" << endl;

    char chA = 'A';
    // char chAA = 65;
    char chAA = 0x41;
    // char chBB = 66;
    char chBB = 0x42;
    // char chCC = 67;
    char chCC = 0x43;

    cout << "chA : " << (int)chA << endl; // (int) - 타입캐스팅(형변환)
    cout << "chA : " << chA << endl;
    cout << chAA << chBB << chCC << endl;

    string strGreeting = "Hello C++!!!";
    cout << strGreeting << endl;

    return 0;
}