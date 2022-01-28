#pragma once
#include "CShape.hpp"
class CRectangle : public CShape
{
    public:
        int GetArea();
        CRectangle(int, int);
        CRectangle operator* (int) const; 
        // const가 붙은 함수 내에서는 다른 const가 붙은 일반함수를 호출하지 못함. 
        // 이 함수안에서 어떤 변수도 바꿀 수 없음을 의미. 인자 mul이 그 어떤 변수도 바꿀 수 없다. m_width를 변경시키는게 아니라 mul을 곱하는 식으로 적용
        friend CRectangle operator*(double mul, const CRectangle&); // Friend function
};