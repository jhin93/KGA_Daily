#include <iostream>
#include "Print.hpp"

using namespace std;

int main()
{
    CPrint printData;

    printData.print(4);
    printData.print(3.1415);
    printData.print((char*)"Hello World!!!");

    return 0;
}