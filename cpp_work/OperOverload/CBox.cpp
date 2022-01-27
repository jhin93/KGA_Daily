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


// 설명
/*
    CBox CBox::operator+(const CBox& b)

    1. 맨 앞의 CBox - 리턴하는 결과물의 형태가 CBox이다
    2. CBox::operator+ - CBox의 클래스의 operator+ 를 사용한다.
    3. const CBox& b - 들어오는 인자는 CBox의 형태여야 하고, 그 인자의 주소값을 참조한다 == 데이터를 읽기만 하겠다.
*/

CBox CBox::operator+(const CBox& b) // '+' 를 재정의 한 것.
{
    CBox box; //내부에 box라는 CBox 클래스 형태의 객체를 생성
    box.m_length = this -> m_length + b.m_length; 
    // 위에서 만든 box의 해당 속성(ex m_length)에 this 즉, 이 operator+를 사용하는 주체 (ex) box1)의 m_length 값을 넣겠다. 그리고 인자로 받은 주소의 m_length 값을 더하는 방법으로 '+' 연산자를 재정의 한다.
    box.m_breath = this -> m_breath + b.m_breath;
    box.m_height = this -> m_height + b.m_height; 

    return box;
}

CBox CBox::operator*(const CBox& b) // '*' 를 재정의 한 것.
{
    CBox box;
    box.m_length = this -> m_length * b.m_length;
    box.m_breath = this -> m_breath * b.m_breath;
    box.m_height = this -> m_height * b.m_height; 

    return box;
}
