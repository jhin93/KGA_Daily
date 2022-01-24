#include <iostream>

using namespace std;

int main()
{
    // new. 동적할당연산자
    int* ptrInt = new int;
    *ptrInt = 1024;

    double* ptrDouble = new double;
    *ptrDouble = 3.141592; // 주소(*ptrDouble)에 데이터 삽입

    cout << "int type ptr value : " << *ptrInt << endl;
    cout << "double type ptr value : " << *ptrDouble << endl;
    //결과
    /*
        int type ptr value : 1024
        double type ptr value : 3.14159
    */

    if(ptrInt != NULL)
    {
        delete ptrInt;
        ptrInt = NULL; // 지우고 NULL까지 채워주는게 깔끔
    }

    if(ptrDouble != NULL)
    {
        delete ptrDouble;
        ptrDouble = NULL; // 지우고 NULL까지 채워주는게 깔끔
    }

}