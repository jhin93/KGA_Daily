#include <iostream>
#include <stdio.h>
#include <string>
#include <bitset>

using namespace std;

// 비트연산자
// A&B - 둘다 겹치는 것만 적용
// A|B - 하나라도 겹치면 적용
// A^B - 겹치는 건 빼고, 안겹치는 것만 적용
// ~A - 그냥 반대로 뒤집음

int main()
{
    unsigned char A = 60, B = 13;
    // 10진수 : 2진수
    // 60 : 0011 1100,
    // 13 : 0000 1101
    cout << "A & B : " << bitset<8>(A & B) << endl; // 0000 1100 : 12
    cout << "A | B : " << bitset<8>(A | B) << endl; // 0011 1101 : 61
    cout << "A ^ B : " << bitset<8>(A ^ B) << endl; // XOR 연산 0011 0001
    cout << "~A : " << bitset<8>(~A) << endl; // 1100 0011
    return 0;
}