#include <iostream>
#include "Rectangle.hpp"
#include "Triangle.hpp"

using namespace std;

int main()
{
    CRectangle* rect = new CRectangle;
    CTriangle* tri = new CTriangle;

    rect->SetWidth(30);
    rect->SetHeight(50);
    cout << "Rectangle Area : " << rect->GetArea() << endl;

    tri->SetWidth(30);
    tri->SetHeight(50);
    cout << "Triangle Area : " << tri->GetArea() << endl;
    
    // delete
    if(rect != NULL) delete rect;
    if(tri != NULL) delete tri;
    return 0;
}