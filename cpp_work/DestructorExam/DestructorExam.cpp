#include <iostream>
#include "Line.hpp"
using namespace std;


// 여러파일을 링크하고자 한다면 디렉토리를 따로 만들어서 해라
int main()
{
    CLine line; // 선언

    line.SetLength(120.123);
    cout << "The Line Length : " << line.GetLength() << endl;
    return 0;
};