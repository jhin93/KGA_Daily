#pragma once
#include <iostream>

using namespace std;

class CShape
{
    protected:
        int m_nWidth, m_nHeight;
    public:
        CShape(); // 생성자 정의
        CShape(int nWidth, int nHeight);
        virtual int Area() = 0; // 순수 가상함수. CShape에서 파생된 클래스들은 각자가 내부에 virtual int Area를 반드시 재정의해야 한다.
};

// C++ 에서는 하나 이상의 순수 가상함수를 포함하는 클래스를 추상 클래스(abstract class)라고 한다.