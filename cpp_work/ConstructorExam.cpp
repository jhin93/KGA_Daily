#include <iostream>
#include <string>

using namespace std;

class CCar { // 클래스는 설계도
    public:
        CCar(); // Default constructor. 객체 생성자 선언
        CCar(string brand, string name, int year);
        // 속성값 선언
        string m_strBrand; 
        string m_strName;
        int m_nYear;
};

CCar::CCar() // 외부에도 선언한번 해주기
{
}

CCar::CCar(string brand, string name, int year) // 외부 선언 방식
{    
    m_strBrand = brand;
    m_strName = name;
    m_nYear = year;       
}

int main()
{
    CCar bmwCar("BMW", "X5", 2002);
    CCar audiCar("Audi", "A8", 2012);

    cout << bmwCar.m_strBrand << " : " << bmwCar.m_strName << ", " << bmwCar.m_nYear << endl;
    cout << audiCar.m_strBrand << " : " << audiCar.m_strName << ", " << audiCar.m_nYear << endl;

    return 0;
};