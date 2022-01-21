#include <iostream>
#include <string>

using namespace std;

int main()
{
    int i = 0;

    // while(i < 10)
    // {
    //     cout << i <<endl;
    //     i ++;
    // }

    // do while문
    // do {
    //     cout << i << endl;
    //     i++;
    // } while ( i < 10); // while문과 상관없이 한번은 찍는다.

    //for문
    // for(int i = 0; i < 10; i += 2)
    // {
    //     cout << "for loop i = " << i << endl;
    // }

    // for(int n = 0, i = 100; n != i; ++n, --i) // 1)초기문이 2)조건문을 통과하고 나서 3)증감문을 적용.
    // {
    //     cout << "n = " << n << ", i = " << i << endl;
    // }

    int nArr[5] = {1, 3, 5, 7, 9};

    for(int i : nArr)
    {
        cout << "Range-Based for loop i = " << i << endl;
    }

    string str ("Hello_World");
    // char str[] = "Hello_world!!!";
    for(char c : str)
    {
        cout << "Range-Based for loop c = " << c << endl;
    }

    return 0;
}

