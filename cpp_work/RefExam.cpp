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
    string &meal = food; // 주소값을 준 것
    meal = "Hamburger"; // 같은 주소에 같은 데이터를 넣었기에 같은 값이 출력.

    cout << food << ", Address of food : " << &food << endl;
    cout << meal << ", Address of meal : " << &meal << endl; // 같은 주소가 나옴

    int xx = 200;
    abc(xx);
    cout << "xx : " << xx << endl; // 메모리 값이 변경된 것.
}