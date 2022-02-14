#include <iostream>
#include "tarea.h" // 면적 구하는 함수
#include "tarea.cpp"
#include "tmove.h" // 이동시키는 함수
#include "tmove.cpp"
#include "tscale.h" // 면적 변화 함수
#include "tscale.cpp"

using namespace std;

// 삼각형 정의
int tri[3][2] = {
    {1, 1},
    {2, 1},
    {1, 2}
};

int main()
{
    // 입력받을 데이터 정의
    int dx; // x축 값
    int dy; // y축 값
    char oper; // 사용할 함수

    // 입력받기
    cout << "Enter Operation Function : "; cin >> oper;
    cout << "Enter dx value : "; cin >> dx;
    cout << "Enter dy value : "; cin >> dy;

    switch (oper)
    {
        case "tmove": // 이동함수
            triangleMove();
            break;

        case "tarea": // 면적함수
            triangleArea();
            break;
        
        case "tscale": // 변화함수
            triangleScale();
            break;

        default:
            break;
    }

    return 0;
}