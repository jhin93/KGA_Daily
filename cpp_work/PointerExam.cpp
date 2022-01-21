#include <iostream>
#include <string>

using namespace std;

int main()
{
    string food = "Hamburger";
    string *ptrFood = &food;

    cout << "food : " << food << ", Address of food : " << &food << endl;

    cout << "ptrFood : " << *ptrFood << ", Address of ptrFood : " << ptrFood << endl;
}