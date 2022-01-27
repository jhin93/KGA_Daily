#include "Car.hpp"
// 정의는 헤더파일(Car.hpp)에 돼있음
void CCar::PrintCarInformation()
{
    cout << "Car Company Name : " << m_strCompany << endl;
    cout << "Car Name : " << m_strCarName << endl;
    cout << "Car No : " << m_strCarNo << endl;
}

// 정의는 헤더파일(Car.hpp)에 돼있음
int CCar::CarSpeed(int maxSpeed)
{
    return maxSpeed;
}