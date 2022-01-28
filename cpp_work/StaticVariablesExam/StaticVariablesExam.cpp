#include <iostream>
#include "Person.hpp"

using namespace std;

int main()
{
    CPerson* pLas = new CPerson("Lass Ulich", 59);
    CPerson* pJames = new CPerson("James Hettfield", 59);
    CPerson* pKirk = new CPerson("Kirk Hemett", 60);
    CPerson* pRobert = new CPerson("Robert Truejilo", 58);

    cout << "Currently Created People : " << CPerson::PersonCount() << endl; // static이기에 하나만 호출해도 4개의 결과가 호출된다. 그래도 private로 들어가면 이렇게 못씀

    if(pLas != NULL) delete pLas;
    if(pJames != NULL) delete pJames;
    if(pKirk != NULL) delete pKirk;
    if(pRobert != NULL) delete pRobert;

    return 0;
}