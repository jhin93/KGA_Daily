#include <iostream>

using namespace std;

int main()
{
    // 입력받을 정수 초기화.
    int inputNum;
    while(inputNum != 0)
    {
        cout << "Enter number for multiplication table : ";
        // 숫자 입력받기
        cin >> inputNum;
        if(inputNum != 0)
        {
            for(int i = 1; i < 10; i ++)
            {
                cout << i * inputNum << "\r\n";
            }
        } else
        {
            cout << "done." << endl;
        }
    }
    return 0;
}