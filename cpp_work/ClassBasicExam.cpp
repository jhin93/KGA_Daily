#include <iostream>
#include <string>
#include "ClassBasicExam.hpp"
#include "Car.cpp"

int main()
{
    CBooks booksObj; // stack에 선언. 함수가 끝나면 사라짐
    booksObj.m_Title = "Learning C++ 21 days";
    booksObj.m_Author = "Sieun Lee";
    booksObj.m_Subject = "Learning C++ Programming";
    booksObj.m_nBookId = 19980225;

    booksObj.PrintBookInforamtion(); 

    CBooks cppBook; // stack에 선언. 함수가 끝나면 사라짐
    cppBook.m_Title = "Learning C++ in Hell";
    cppBook.m_Author = "Hades";
    cppBook.m_Subject = "Learning C++ Programming in Olympus";
    cppBook.m_nBookId = 20210225;

    cppBook.PrintBookInforamtion(); 

    CCar carObj;
    carObj.m_strCompany = "BMW";
    carObj.m_strCarName = "BMW X5";
    carObj.m_strCarNo = "NY 3456";
    carObj.PrintCarInformation();

    cout << carObj.m_strCarName  << " : Maximum Speed : " << carObj.CarSpeed(220) << endl;

    return 0;
}