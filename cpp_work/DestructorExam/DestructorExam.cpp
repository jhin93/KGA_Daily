#include <iostream>
#include "Line.hpp"
using namespace std;



int main()
{
    CLine line; // 선언

    line.SetLength(120.123);
    cout << "The Line Length : " << line.GetLength() << endl;
    return 0;
};