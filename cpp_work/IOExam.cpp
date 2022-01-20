#include <iostream>
#include <stdio.h>
#include <string>
#include <bitset>

using namespace std;


int main()
{
    // int x, y; // 항상 초기화를 해줘야 한다.
    // int nSum;
    // cout << "Input a number : ";
    // cin >> x; cout << endl; // 빌드 후 실행시켰을 때 콘솔창에서 직접 데이터를 입력
    // cout << "Input y Number : ";
    // cin >> y; cout << endl;

    // nSum = x + y;
    // cout << "nSum = " << nSum << endl;

    char strName[50]; // 50바이트만 사용
    int age = 0;

    cout << "Enter Your Name and age : ";
    cin >> strName >> age; cout << endl; // 콘솔에서 데이터 입력할 때 이름 입력하고, 엔터치고 나이 입력하고 엔터쳐야 함.
    cout << "Your name is " << strName << ", Your age is " << age << endl;

    char strErr[] = "Welcome to C++ Hell!!";
    // 표준 에러 스트림 cerr
    cerr << "Error Message : " << strErr << endl; // 스트림에 실어주는게 아니라 에러라서 바로 출력.

    char strLog[] = "We gonna die to Hell!!!";
    clog << "Log Message : " << strLog << endl;

    return 0;
}