#pragma once
#include <iostream>
#include <string>
using namespace std;

class CCar
{
    public:
        // attribute(속성)
        string m_strCompany;
        string m_strCarName;
        string m_strCarNo;

        // 구현부(Car.cpp)에서 외부정의
        // Method(함수)
        void PrintCarInformation();
        int CarSpeed(int maxSpeed); // 인자를 받는 것도 가능
};