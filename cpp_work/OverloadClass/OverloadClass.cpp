// #include <iostream>
#include "Print.hpp"

// using namespace std;

int main()
{
    CPrint printData;

    printData.print(4);
    printData.print(3.1415);
    printData.print((char*)"Hello World!!!");

    cout << "Hello C++\n" << endl;

    return 0;
}