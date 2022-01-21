
//

#include <iostream>

using namespace std;

int main()
{
    int grade[3] = {85, 65, 90}; // 주소가 이렇게 만들어짐. 변수를 선언할 때, 메모리의 주소가 부여됨.

    cout << grade << endl; // 메모리의 주소.
    for(int i = 0; i < 3; i ++)
    {
        // cout << grade[i] << endl; // 주소의 데이터를 나타냄. 85, 65, 90
        cout << &grade[i] << endl; // &는 주소를 나타내는(메모리를 참조하는) 참조 연산자
    }

}