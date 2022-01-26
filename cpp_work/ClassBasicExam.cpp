#include <iostream>
#include <string>

using namespace std;

// 클래스 선언
class CBooks // class라는걸 명시하기 위해 C를 붙임
{
    public:
        string m_Title;
        string m_Author;
        string m_Subject;
        int m_nBookId;

        // void PrintBookInforamtion() // Inside class definition
        // {
        //     cout << "Book title : " << m_Title << endl;
        //     cout << "Book Author : " << m_Author << endl;
        //     cout << "Book Subject : " << m_Subject << endl;
        //     cout << "Book BookID : " << m_nBookId << endl;
        // }

        void PrintBookInforamtion(); // Outside class definition
};

void CBooks::PrintBookInforamtion() // Outside class definition
{
    cout << "Book title : " << m_Title << endl;
    cout << "Book Author : " << m_Author << endl;
    cout << "Book Subject : " << m_Subject << endl;
    cout << "Book BookID : " << m_nBookId << endl;
}

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

    return 0;
}