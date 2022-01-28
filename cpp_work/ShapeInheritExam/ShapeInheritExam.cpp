#include <iostream>
#include "Rectangle.hpp"
#include "Triangle.hpp"

using namespace std;

int main()
{
    CRectangle* rect = new CRectangle(30, 50);
    CTriangle* tri = new CTriangle();

    // rect->SetWidth(30);
    // rect->SetHeight(50);
    cout << "Rectangle Area : " << rect->GetArea() << endl;

    CRectangle rect1 = (*rect) * 2; // 재정의한 오퍼레이터 * 를 적용해서 30*2 * 50*2 = 6000이 나옴
    CRectangle rect2 = (*rect) * 4;
    cout << "Rectangle Area * 2 : " << rect1.GetArea() << endl;
    cout << "Rectangle Area * 4 : " << rect2.GetArea() << endl;

    tri->SetWidth(30);
    tri->SetHeight(50);
    cout << "Triangle Area : " << tri->GetArea() << endl;
    
    // delete
    if(rect != NULL) delete rect;
    if(tri != NULL) delete tri;
    return 0;
}