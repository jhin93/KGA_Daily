
#include <iostream> // CPP 라이브러리라서 import "react" 와 같은 것
#include <stdio.h>

// define은 전역적으로 사용 가능. 헤더파일에 따로 작성해서 가져와서 사용 가능.
#include "Variables_exam.hpp"

using namespace std;

int main(int argc, char* argv[])
{
    const int nNumber = 10;

    cout << nNumber << endl;

    const int iMinutesPerHour = 60;
    const float PI = 3.141592;
    cout << "iMinutesPerHour = " << iMinutesPerHour << NEW_LINE;
    cout << "PI = " << PI << endl;

    // %d = deciamal, 정수 %f = float, 실수
    printf("iMinutesPerHour[%d], PI[%f]\n", iMinutesPerHour, PI);

    cout << "Define const WIDTH = " << WIDTH << NEW_LINE;
    cout << "Define const HEIGHT = " << HEIGHT << NEW_LINE;

    return 0;
}