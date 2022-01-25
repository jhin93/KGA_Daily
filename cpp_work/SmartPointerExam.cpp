#include <iostream>
#include <memory> // 스마트포인터를 쓰기 위해 필요함.

using namespace std;

class CPerson {
private:
    string strName;
    int nAge;
public :
    CPerson(const string& name, int age);
    ~CPerson() {cout << "Object Destructor" << endl;}
    void ShowPersonInfo();
};

int main()
{
    return 0;
}

CPerson::CPerson(const string& name, int age)
{
    unique_ptr <CPerson> ptrPerson = make_unique<CPerson>("James Hetfield, 59");
    ptrPerson->ShowPersonInfo();
    strName = name;
    nAge = age;
    cout << "Object constructor!!!" << endl;
}

void CPerson::ShowPersonInfo()
{
    cout << strName << "'s Age :" << nAge << endl;
}
