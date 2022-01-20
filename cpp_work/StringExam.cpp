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

    return 0;
}