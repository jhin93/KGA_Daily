#include <iostream>

using namespace std;

int main()
{
    float f1 = 24e3;
    double d1 = 15E4;
    cout << "f1 : " << f1 << " d1 : " << d1 << endl; // 소수점이 나오는 건 위의 precision의 영향을 받은 것.

    cout << "=========================" << endl;

    return 123;
}