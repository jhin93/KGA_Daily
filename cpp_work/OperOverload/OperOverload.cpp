#include <iostream>
#include "CBox.hpp"

using namespace std;

int main()
{
    CBox box1;
    CBox box2;
    CBox box3;
    double volume = 0.0f; // f는 실수

    box1.SetLength(6.5);
    box1.SetBreath(7.0);
    box1.SetHeight(5.0);

    box2.SetLength(12.5);
    box2.SetBreath(13.0);
    box2.SetHeight(10.25);

    volume = box1.GetVolume();
    cout << "Volume of box1 : " << volume << endl;

    volume = box2.GetVolume();
    cout << "Volume of box2 : " << volume << endl;

    box3 = box1 + box2; // 재정의한 +를 사용한 결과
    volume = box3.GetVolume();
    cout << "Volume of box3 : " << volume << endl;

    return 0;
}