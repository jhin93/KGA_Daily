#include <iostream>

using namespace std;

int main()
{
    int arrNumber[5];
    int* ptr; // 포인터는 새로 주소를 할당하는게 가능 아래에서 확인 가능.

    // ptr = arrNumber, *ptr = 10; // arrNumber[0]
    // ptr++; *ptr = 20; // arrNumber[1]. 포인터가 두번째 방으로 이동해있는 상태
    // ptr = &arrNumber[2]; *ptr = 30; // 3번째 인덱스 주소를 입력해서 위치를 이동하고, 값을 대입
    // ptr = arrNumber + 3; *ptr = 40;  // 첫번째 주소 + 3 = 네번째 방. 값 대입
    // ptr = arrNumber; *(ptr + 4) = 50; // ptr을 첫번째 방(0번째 인덱스. arrNumber)으로 옮기고 4를 더함. 그리고 값 대입



    for(int i = 0; i < 5; i++)
    {
        ptr = &arrNumber[i]; *ptr = i * 10;
        cout << "[" << i << "] = " << arrNumber[i] << endl;
    }

    return 0;
}