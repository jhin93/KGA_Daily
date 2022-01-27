#include <iostream>
#include <string>

using namespace std;

class CCar {
    public:
    // 객체 생성자는 빈 것이라도 선언해놓는 것을 버릇들여놓을 것
        CCar() {}; // Default constructor. 객체 생성자 선언
        CCar(string brand, string name, int year)
        {
            m_strBrand = brand;
            m_strName = name;
            m_nYear = year;
        }
        // 속성값 선언
        string m_strBrand; 
        string m_strName;
        int m_nYear;
};

int main()
{
    CCar bmwCar("BMW", "X5", 2002);
    CCar audiCar("Audi", "A8", 2012);

    cout << bmwCar.m_strBrand << " : " << bmwCar.m_strName << ", " << bmwCar.m_nYear << endl;
    cout << audiCar.m_strBrand << " : " << audiCar.m_strName << ", " << audiCar.m_nYear << endl;

    return 0;
};