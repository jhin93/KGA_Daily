#pragma once // 컴파일러가 한번만 include 허도록 한다. 여러 헤더파일이 인클루드 될때 중복되서 include 되지 않도록 하는 것.
#include <iostream>

using namespace std;

class CLine
{
    public:
        CLine(); // 선언
        ~CLine(); // 객체 파괴자

        void SetLength(double); // 인자 이름을 여기서 정의하지 않아도 됨. 구현부에서 정의하면 됨.
        double GetLength();
    private:
        double m_dLength;
        char* m_pstrLineName;
};