#include <iostream>
#include <string>

using namespace std;

// main 함수 위에 프로토타입 선언
template <typename T> // typename T는 템플릿이라는 뜻
void Swap(T& a, T& b);

// 특정값을 swap하고 싶지 않을 때 ex double을 스왑하고 싶지 않을 때.
template <> void Swap<double>(double&, double&)
{
    // Do not swapping double number
}

// max값 찾는 템플릿 프로토타입 선언
template <typename T>
T const& Max(T const& a, T const& b);

int main()
{
    // int 타입
    int c = 12, d = 15;
    cout << "c : " << c << ", d : " << d << endl;
    Swap(c, d);
    cout << "after swap => " << "c : " << c << ", D : " << d << endl;

    // double 타입
    double x = 12.45, y = 72.12;
    cout << "x : " << x << ", y : " << y << endl;
    Swap(x, y);
    cout << "after swap => " << "x : "  << x << ", y : " << y << endl;

    // str 타입
    string strA = "Hello", strB = "World";
    cout << "strA : " << strA << ", strB : " << strB << endl;
    Swap(strA, strB);
    cout << "after swap => " << "strA : " << strA << ", strB : " << strB << endl;

    cout << "int Max value : " << Max(c, d) << endl;
    cout << "double Max value : " << Max(x, y) << endl;
    cout << "string Max value : " << Max(strA, strB) << endl;

    return 0;
}


template <typename T> // typename T는 템플릿이라는 뜻
void Swap(T& a, T& b)
{
    // T temp;
    // temp = a;
    // a = b;
    // b = temp;
}

template <typename T>
T const& Max(T const& a, T const& b)
{
    return a < b ? b : a;
}