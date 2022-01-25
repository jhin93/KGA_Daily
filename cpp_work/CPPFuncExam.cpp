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

    return 0;
}