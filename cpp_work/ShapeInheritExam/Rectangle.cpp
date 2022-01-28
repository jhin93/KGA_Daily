#include "Rectangle.hpp"
CRectangle::CRectangle(int width, int height) 
{
    m_width = width;
    m_height = height;
}

int CRectangle::GetArea()
{
    return m_width * m_height;
}

CRectangle CRectangle::operator*(int mul) const // class 내부에 operator 재정의
{
    return CRectangle(m_width * mul, m_height * mul);
}

CRectangle operator*(int mul, const CRectangle& orgRect) // class 외부에 operator 재정의
{
    return orgRect * mul;
}