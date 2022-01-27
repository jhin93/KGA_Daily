#pragma once
#include <iostream>

using namespace std;

class CLine
{
    public:
        CLine(); // 선언
        ~CLine(); // 객체 파괴자

        void SetLength(double len);
        double GetLength();
    private:
        double m_dLength;
};