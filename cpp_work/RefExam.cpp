#include <iostream>
#include <string>

using namespace std;
void abc(int &x)
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
    cout << "xx : " << xx << endl; // 메모리 값이 변경된 것.
}