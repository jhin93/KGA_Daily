#include <iostream>
#include <stdlib.h>

using namespace std;

int main()
{
    int i;
    int arrLen = 3; //array길이를 3으로
    int* ptrArr;

    ptrArr = (int*)malloc(arrLen * sizeof(int)); // dynamic allocation memory

    if(ptrArr  == NULL) // dynamic allocation fail
    {
        cout << "Dynamic memory allocation fail..." << endl;   
        exit(1); // 프로그램을 빠져나가는 명령어 exit. 1은 그냥 쓴 것
    }

    cout << "Dynamic allocation memory initial value : \n";
    for(int i = 0; i < arrLen; i ++)
    {
        cout << ptrArr[i] << endl;
    } 

    free(ptrArr); // 다쓰고 free 적용

    return 0;
}