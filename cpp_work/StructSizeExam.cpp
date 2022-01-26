#include <iostream>

using namespace std;

#pragma pack (push,1) // 가장 큰 멤버변수의 메모리 크기를 기준으로 패딩을 결정하지 않고, 1byte를 기본 단위로 사용하겠다는 말.
struct ExamSize
{
    char a; // 1byte
    int b; // 4byte
    double c; // 8byte. 총 13byte
};
#pragma pack (pop) // pragma pack으로 결정해준 메모리 기본 단위를 해제.

struct ExamSize1
{
    char a; // 1byte
    int b; // 4byte
    double c; // 8byte. 총 13byte
};

int main(int argc, char* argv[])
{
    cout << "Structure ExamSize's each Member variable size : " << endl;
    cout << "char : " << sizeof(char) << ", " << sizeof(int) << ", " << sizeof(double) << endl;
    
    cout << "Size of structure : " << sizeof(ExamSize) << endl;
    cout << "Size of structure : " << sizeof(ExamSize1) << endl;
    return 0;
}