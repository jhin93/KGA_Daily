#include <iostream>
#include <string>

using namespace std;

// Base Class
class CVehicle
{
    public:
        CVehicle()
        {
            m_brand = "AnyBrand"; // 초기화
        }
        string m_brand;
        void Honk()
        {
            cout << "Pong Pong" << endl;
        };
};

// Derived Class
class CCar:public CVehicle
{
    public:
        CCar()
        {
            m_model = "BMW X7";
            m_brand = "BMW";
        }
        string m_model;
};

int main()
{
    CCar myCar;

    cout << "brand : " << myCar.m_brand <<", model : " << myCar.m_model << endl; // 다 public이라서 .으로 접근 가능
    return 0;
}