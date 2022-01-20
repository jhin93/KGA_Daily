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
    return 0;
}