#include <iostream>

using namespace std;

int main()
{
    try
    {
        throw 128;
    }
    catch(int errCode)
    {
        cout << "An exception occured. Exception Error code : " << errCode;
    }
    
    return 0;
}