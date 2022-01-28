#include <iostream>
#include "Person.hpp"

int CPerson::m_nPersonCount = 0; // static 멤버변수 초기화

CPerson::CPerson(const string& strName, int nAge) // string은 클래스이기에 
{
    m_strName = strName;
    m_nAge = nAge;
    cout << "No. " << ++m_nPersonCount << " Created Person" << endl;
}

CPerson::~CPerson() // 소멸자
{
    m_nPersonCount--;
    cout << "Person Count " << m_nPersonCount << endl;
}

void CPerson::ShowPersonInformation()
{
    cout << "This person's name " << m_strName << ", Age = " << m_nAge << endl;
}

int CPerson::PersonCount() // static member function
{
    return m_nPersonCount;
}