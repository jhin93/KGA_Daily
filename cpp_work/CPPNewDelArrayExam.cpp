#include <iostream>

using namespace std;

int main()
{
    int n;
    int* ptrNumber;

    cout << "How many numbers input ?"; cin >> n; // 한줄에 입력받는다.
    ptrNumber = new(nothrow) int[n]; // 메모리 할당이 실패할 때 badalloc exception 주거나 nullptr 반환
    if(ptrNumber == nullptr)
    {
        cout << "Error memory could not bed_allocated\n";
        exit(1);
    }
    else
    {
        for(int i = 0; i < n; i ++)
        {
            cout << "Enter a number : "; cin >> ptrNumber[i];    
        }

        cout << "You have entered : ";
        for(int i = 0; i < n; i ++)
        {
            cout << ptrNumber[i] << ", ";    
        }

        delete[] ptrNumber;
    }

    return 0;
}