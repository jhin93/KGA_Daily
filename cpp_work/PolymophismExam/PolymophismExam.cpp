#include <iostream>
#include "Rectangle.hpp"
#include "Triangle.hpp"

int main()
{
    CShape* shape;
    CRectangle rect(20, 30);
    CTriangle tri(10,30);

    // store the address of rectangle
    shape = &rect; // 부모 포인터에 자식을 참조해서 사용하는 것. virtual로 부모가 메소드를 정의한다.

    // call rectangle area
    shape -> Area();

    // store the address of Triangle
    shape = &tri;

    // call triangle area
    shape -> Area();

    
    return 0;
}