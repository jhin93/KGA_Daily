#pragma once

class CBox
{
    public:
        CBox()
        {
            m_length = 0.0f;
            m_breath = 0.0f;
            m_height = 0.0f;
        }; // 객체 생성자
        ~CBox(){}; // 객체 소멸자

        double GetVolume(void); // 명시적으로 인자가 없다고 선언
        void SetLength(double length);
        void SetBreath(double breath);
        void SetHeight(double height);
        CBox operator+(const CBox&);
        CBox operator*(const CBox&);

    private:
        double m_length;
        double m_breath;
        double m_height;
};