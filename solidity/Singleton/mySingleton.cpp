// Singleton_04-04_1.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include "Singleton_04-04_1.h"

using namespace std;

CSingleton* CSingleton::m_pInst = nullptr;

CSingleton::CSingleton()
{
    count = 0;
}

CSingleton::~CSingleton()
{

}

CSingleton* CSingleton::getInstatnce()
{
    if (!m_pInst)
    {
        m_pInst = new CSingleton();
    }
    return m_pInst;
}

void CSingleton::DestroyInst()
{
    if (!m_pInst)
    {
        return;
    }
    delete m_pInst;
    m_pInst = nullptr;
}

void CSingleton::HelloWorld()
{
    count ++;
    cout << "HelloWorld!!!-count(" << count << ")" << endl;
}




// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file