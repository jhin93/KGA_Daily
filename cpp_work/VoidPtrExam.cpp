#include <iostream>
#include "./VoidPtrExam.hpp" // 함수 원형 선언을 가져옴

using namespace std;

int main()
{
    char a = 'x';
    int b = 1024;
    increase(&a, sizeof(a)); // increase함수에 인자로 포인터를 받기 때문에, 데이터를 넣기 위해선 주소값(&a)을 넣어야 한다.
    increase(&b, sizeof(b));
    cout << "a : " << a << ", b : " << b << endl; 
    return 0;

    // 결과
    // a : y, b : 1025
}

void increase(void *pData, int nSize)
{
    if(nSize == sizeof (char))
    {
        char* pChar;
        // 문법 : (변환해줄 데이터 타입 *)변환할 대상
        pChar = (char*)pData; // 형변환 해준다.
        ++(*pChar);
    }
    else if(nSize == sizeof(int))
    {
        int* pInt;
        pInt = (int*)pData; // 형변환 해준다
        ++(*pInt);
    }
}