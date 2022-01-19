#include <iostream>

using namespace std;

int main()
{
    int nNum = 6;
    float fNum = 8.1234567890123456;
    double dNum = 8.1234567890123456;
    char cLetter = 'A';
    bool isVar = true;
    string strText = "Hello\tWorld!!!\a"; // \t는 탭

    cout << "int : " << nNum << endl;
    cout.precision(15); // 7자리까지
    cout << "float : " << fixed << fNum << endl;
    cout.precision(15); // 15자리까지
    cout << "double : " << fixed << dNum << endl;
    cout << "char : " << cLetter << endl;
    cout << "bool : " << isVar << endl;
    cout << "string : " << strText << endl;
    printf("cLetter number : %d\r\n", cLetter); // 대문자 'A'는 65다.
    cout << "=========================" << endl;
}