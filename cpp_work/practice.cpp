#include <iostream>

using namespace std;

int main(int argc, char* argv[]) // (인자의 개수, 인자를 받을 포인터)
{
    int num = 15;
    cout << num << "\n"; // cout은 출력. num을 출력하고, 줄바꿈

    if(argc > 1)
    {
        cout << "argc = " << argc << endl;
        for(int i = 0; i < argc; i++)
        {
            cout << "argv[" << i << "]" << "=" << argv[i] << endl;
        }
    }
    return 0;
}

// 터미널에서 입력 : ./practice hello world
// 결과
// 15
// argc = 3
// argv[0]=./practice
// argv[1]=hello
// argv[2]=world


