#include <iostream>
#include <string>

using namespace std;

int main()
{
    string food = "Hamburger";
    string *ptrFood = &food; // 사용하기 전에 포인터는 초기화를 해줘야 한다.

    // 값 변경
    *ptrFood = "Pizza"; // 값이 Pizza로 변경

    cout << "food : " << food << ", Address of food : " << &food << endl;
    cout << "ptrFood : " << *ptrFood << ", Address of ptrFood : " << ptrFood << endl;

    // int nNumber = 1234;
    // int *ptrNumber = &nNumber;

    // cout << "nNumber : " << nNumber << ", Address of food : " << &nNumber << endl;
    // cout << "ptrNumber : " << *ptrNumber << ", Address of ptrNumber : " << ptrNumber << endl;

    //결과
    /*
        food : Hamburger, Address of food : 0x7ffee1777658
        ptrFood : Hamburger, Address of ptrFood : 0x7ffee1777658
        
        nNumber : 1234, Address of food : 0x7ffee1777640
        ptrNumber : 1234, Address of ptrNumber : 0x7ffee1777640
    */
}