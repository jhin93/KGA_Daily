#include <iostream>
#include <stdio.h>
#include <string>

using namespace std;

int main()
{
    short int i; // short가 포함할 수 있는 범위를 넘어갔고, 넘어간 비트만큼이 -로 붙어서 결과가 출력. unsigned와는 반대의 결과
    short unsigned int j; // short, unsigned 등등 뭐가 붙을 수록 범위가 늘어남. 원래 맨 앞비트(0x12..)는 부호를 결정하는데(0이면 +, 1이면 -) unsigned는 그 맨 앞비트마저 데이터를 담아버린다. 즉 0이상으로 만듬

    j = 50000;
    i = j;

    cout << "i(signed) : " << i << " j(unsigned) : " << j << endl;

    return 0;
}