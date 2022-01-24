#include <iostream>

using namespace std;

int main()
{
    // // new. 동적할당연산자
    // int* ptrInt = new int;
    // *ptrInt = 1024;

    // double* ptrDouble = new double;
    // *ptrDouble = 3.141592; // 주소(*ptrDouble)에 데이터 삽입

    // cout << "int type ptr value : " << *ptrInt << endl; // 1024
    // cout << "int type ptr value : " << ptrInt << endl; // int type ptr value : 0x7fbb88405850
    // cout << "double type ptr value : " << *ptrDouble << endl; // 3.14159
    // cout << "double type ptr value : " << ptrDouble << endl; // double type ptr value : 0x7fbb88405860
    // //결과
    // /*
    //     int type ptr value : 1024
    //     double type ptr value : 3.14159
    // */

    // if(ptrInt != NULL)
    // {
    //     delete ptrInt;
    //     ptrInt = NULL; // 지우고 NULL까지 채워주는게 깔끔
    //     cout << ptrInt; // 0x0
    // }

    // if(ptrDouble != NULL)
    // {
    //     delete ptrDouble;
    //     ptrDouble = NULL; // 지우고 NULL까지 채워주는게 깔끔
    //     cout << ptrDouble; // 0x0
    // }

    // return 0;

    char* pChar = new char;
    *pChar = 'a'; // *없는 pChar는 주소값이다. 
    cout << "Memory pChar address : " << (void*)pChar << "\t value : " << *pChar << endl;
    cout << "pChar Heap size : " << sizeof(*pChar) << endl; // char 1byte
    if(pChar != NULL)
    {
        delete pChar;
        pChar = NULL; // 지우고 NULL까지 채워주는게 깔끔
    } 
    // delete로 주소를 지우고 나면, OS가 알아서 새로운 주소를 할당한다. 
    // 다른 변수에 할당할 때 지웠던 주소를 새로 부여할지, 다른 주소를 부여할지는 OS가 알아서 한다.

    int* ptrNum = new int;
    *ptrNum  = 24;
    cout << "Memory ptrNum address : " << (void*)ptrNum << "\t value : " << *ptrNum << endl;
    cout << "ptrNum Heap size : " << sizeof(*ptrNum) << endl;
    if(ptrNum != NULL)
    {
        delete ptrNum;
        ptrNum = NULL; // 지우고 NULL까지 채워주는게 깔끔
    }

    float* ptrFNum = new float;
    *ptrFNum = 3.14;
    cout << "Memory ptrFNum address : " << (void*)ptrFNum << "\t value : " << *ptrFNum << endl;
    cout << "ptrFNum Heap size : " << sizeof(*ptrFNum) << endl;
    if(ptrFNum != NULL)
    {
        delete ptrFNum;
        ptrFNum = NULL; // 지우고 NULL까지 채워주는게 깔끔
    }

    double* ptrDNum = new double;
    *ptrDNum = 3.141592;
    cout << "Memory ptrFNum address : " << (void*)ptrDNum << "\t value : " << *ptrDNum << endl;
    cout << "ptrDNum Heap size : " << sizeof(*ptrDNum) << endl;
    if(ptrDNum != NULL)
    {
        delete ptrDNum;
        ptrDNum = NULL; // 지우고 NULL까지 채워주는게 깔끔
    }

    return 0;
}