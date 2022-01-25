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
void WhereAreYouFrom(string strCountry = "KOREA")
{
    cout << "I came from " << strCountry << "!!!!\n";
}


int main()
{
    HelloWorld("SiEun");
    HelloWorld("HyeJin");
    HelloWorld("TaeHyun");
    HelloFunc();

    WhereAreYouFrom();
    WhereAreYouFrom("USA");
    WhereAreYouFrom("France");
    return 0;
}