#include <iostream>

using namespace std;

int main()
{
    int arrNumber[5][2] = {
        {0,0}, 
        {1,2}, 
        {2,4}, 
        {4,8}
    }; // 5행 2열 배열
    
    for(int i = 0; i < 5; i ++)
    {
        for(int j = 0; j < 2; j ++)
        {
            cout << "a[" << i << "]" << j;
        }
    }
}