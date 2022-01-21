#include <iostream>

using namespace std;

// ptrArrayExam 응용

// 구구단 가로세로 출력함수
int main()
{
    // 입력받을 정수 초기화.
    int inputNum;

    while(inputNum != 0)
    {
        cout << "Enter number for multiplication table : ";
        // 숫자 입력받기
        cin >> inputNum;
        cout << inputNum * 1 << " " << inputNum * 2 << " " << inputNum * 3 << " " << inputNum * 4 << " " << inputNum * 5 << " " << inputNum * 6 << " " << inputNum * 7 << " " << inputNum * 8 << " " << inputNum * 9 << endl;
        if(inputNum != 0)
        {
            for(int i = 2; i < 10; i ++)
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



