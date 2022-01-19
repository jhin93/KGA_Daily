#include <iostream>

int gVar; // 전역변수는 모든 함수 외부에 선언

int main()
{
    int a, b;
    int c;
    // int gVar;

    a = 10;
    b = 40;
    c = a + b;

    std::cout << "c = a + b : " << c << std::endl;
    std::cout << "gVar = a + b : " << gVar << std::endl;

    return 0;
}