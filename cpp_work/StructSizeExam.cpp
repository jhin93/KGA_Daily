#include <iostream>

using namespace std;

struct ExamSize
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
    return 0;
}