#include <iostream>
#include <stdio.h>
#include <string>
#include <bitset>

using namespace std;


int main()
{
    int x, y; // 항상 초기화를 해줘야 한다.
    int nSum;
    cout << "Input a number : ";
    cin >> x; cout << endl; // 빌드 후 실행시켰을 때 콘솔창에서 직접 데이터를 입력
    cout << "Input y Number : ";
    cin >> y; cout << endl;

    nSum = x + y;
    cout << "nSum = " << nSum << endl;

    return 0;
}