#include "CBox.hpp"

double CBox::GetVolume(void)
{
    return m_length * m_height * m_breath;
}

void CBox::SetLength(double length)
{
    m_length = length;
}

void CBox::SetBreath(double breath)
{
    m_breath = breath;
}

void CBox::SetHeight(double height)
{
    m_height = height;
}


CBox CBox::operator+(const CBox& b) // '+' 를 재정의 한 것.
{
    CBox box;
    box.m_length = this -> m_length + b.m_length;
    box.m_breath = this -> m_breath + b.m_breath;
    box.m_height = this -> m_height + b.m_height; 

    return box;
}