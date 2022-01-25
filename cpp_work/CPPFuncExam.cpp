#include <iostream>

using namespace std;

void HelloFunc()
{
    cout << "Welcome to C++ HELL" << endl;
}

void HelloWorld(string strName)
{
    cout << "Hello " << strName << endl;
}

// default parameter
void WhereAreYouFrom(string strName, int nAge, string strCountry = "KOREA")
{
    cout << "My Name is " << strName << " and My Age is " << nAge << "!!!\n";
    cout << "I came from " << strCountry << "!!!!\n";
}

int HowOldAreYou(int nAge)
{
    int age = nAge;

    return age;
}

void SwapInt(int& x, int& y)
{
    int temp = x;

    x = y;
    y = temp;
}

int main()
{
    HelloWorld("SiEun");
    HelloWorld("HyeJin");
    HelloWorld("TaeHyun");
    HelloFunc();

    WhereAreYouFrom("SiEun", 20);
    WhereAreYouFrom("Hyejin", 24);
    WhereAreYouFrom("James Hetfield", 30, "USA");

    cout << "My Age : " << HowOldAreYou(25) << endl;

    cout << "====================\n";
    int nFirst = 10, nSecond = 30;
    cout << "Before swap nFirst[" << nFirst << "], nSecond[" << nSecond << "]\n";
    SwapInt(nFirst, nSecond);
    cout << "After swap nFirst[" << nFirst << "], nSecond[" << nSecond << "]\n";

    return 0;
}