#include <iostream>

using namespace std;

int main()
{
    for(int i = 0; i < 100; i ++)
    {
        // if( i == 59) break; // i == 59 일때, break.
        // if( i == 59) continue; // i == 59는 건너뜀
        // if( (i % 2) == 0) continue; // 짝수는 건너뜀
        if( (i % 2) != 0) continue; // 홀수는 건너뜀

        cout << i << ' ';
    }
    return 0;
}











