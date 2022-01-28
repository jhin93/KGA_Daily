#include <iostream>

using namespace std;

class Animal
{
    public:
        virtual ~Animal(){};
        virtual void Cry() = 0;
};

class Dog : public Animal
{
    public:
        void Cry()
        {
            cout << "Bow Wow" << endl;
        }
};

class Cat : public Animal
{
    public:
        void Cry()
        {
            cout << "Meow" << endl;
        }
};

int main()
{
    Dog myDog;
    myDog.Cry();
    Cat myCat;
    myCat.Cry();

}