#include <iostream>
#include "Line.hpp"
using namespace std;


// 여러파일을 링크하고자 한다면 디렉토리를 따로 만들어서 해라
int main()
{
    // CLine line; // 선언
    CLine *line = new CLine(); // 동적할당

    // line.SetLength(120.123);
    line -> SetLength(120.123);
    // cout << "The Line Length : " << line.GetLength() << endl;
    cout << "The Line Length : " << line -> GetLength() << endl;
    delete line; // 쓰고 나면 지워버림.

    cout << "after deleted line\n";

    return 0;
};