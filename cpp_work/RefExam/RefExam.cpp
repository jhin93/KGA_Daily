#include <iostream>
#include <string>

using namespace std;
void abc(int x) // 여기서 &x를 x로 변경한다면, cout의 결과는 200이 나온다. 인자의 기존 주소(&x)가 아닌새로운 주소(메모리)에 값을 할당해버리기 때문
{
    x = 100;
}

int main()
{
    string food = "Pizza";
    string &meal = food; // 주소값을 준 것. meal은 food를 바라보는 새로운 방식(같은 주소)
    meal = "Hamburger"; // 같은 주소(meal과 food의 주소)에 같은 데이터를 넣었기에 food 값도 변경.
    // meal = "Hamburger"; // 같은 주소(meal과 food의 주소)에 같은 데이터를 넣었기에 food 값도 변경.

    cout << food << ", Address of food : " << &food << endl;
    cout << meal << ", Address of meal : " << &meal << endl; // 같은 주소가 나옴

    int xx = 200;
    abc(xx);
    cout << "xx : " << xx << endl; // &x -> 100, x -> 200

    // 결과 : void abc(int &x) - 인자를 주소로 받을 경우
    /* 
        Hamburger, Address of food : 0x7ffee2457648
        Hamburger, Address of meal : 0x7ffee2457648
        xx : 100 - abc함수의 인자의 주소에 100을 넣기 때문.
    */

       // 결과 : void abc(int x) - 인자를 그냥 받을 경우
    /* 
        Hamburger, Address of food : 0x7ffee2457648
        Hamburger, Address of meal : 0x7ffee2457648
        xx : 200 - 인자의 기존 주소(&x)가 아닌새로운 주소(메모리)에 값을 할당해버리기 때문. 새로운 주소에 200을 넣는 것이다. 
        인자에 &를 붙인다면(== 인자로 주소를 받는다면) 기존 주소의 데이터가 200에서 100으로 바뀌는 것
    */
}