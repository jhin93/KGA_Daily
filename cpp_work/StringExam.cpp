#include <iostream>
#include <string>

using namespace std;

int main()
{
    string firstName = "James ";
    string lastName = "Hetfield";
    string equip = ", ESP Explorer Guitar";

    // string fullNameEquip = firstName + " " + lastName + ", " + equip;
    // append로도 가능. append가 알아보긴 힘들고 빠르긴 빠름.
    string fullNameEquip = firstName.append(lastName.append(equip.append(", Hale SiEun")));

    cout << fullNameEquip << endl;

    string strAlphabet = "ABCDEFJKLMNOPQRSTUV";
    cout << "strAlphabet length : " << strAlphabet.length() << endl;
    cout << "strAlphabet size : " << strAlphabet.size() << endl;

    string strHello = "Hello world!!!";
    cout << strHello[0] << endl; // 배열처럼 사용 가능
    strHello[0] = 'J'; // 요소 교체 가능
    for(int i = 0; i < strHello.length(); i ++)
    {
        cout << strHello[i];
    }
    cout << endl;

    return 0;
}