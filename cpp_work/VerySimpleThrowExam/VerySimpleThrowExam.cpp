#include <iostream>

using namespace std;

double division(int a, int b)
{
    if(b == 0)
    {
        throw "Division by Zero!!!";
    }

    return (double)(a/b);
}

int main()
{

    int x = 50;
    int y = 0;
    // int y = 25;

    double z = 0.0f; // f는 실수를 나타냄

    try
    {
        // throw 128;
        z = division(x, y);
        cout << "divided value : " << z << endl;
    }
    // catch(int errCode)
    catch(const char* errMsg)
    {
        // cout << "An exception occured. Exception Error code : " << errCode;
        cerr << errMsg << endl; // cerr.
    }
    // try
    // {
    //     z = division(x, y);
    // }
    // catch(const std::exception& e)
    // {
    //     cout << e.what() << endl;
    // }
    
    
    return 0;
}