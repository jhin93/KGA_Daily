#include <iostream>
#include <string>

using namespace std;

// 클래스 선언
class Books
{
    public:
        string m_Title;
        string m_Author;
        string m_Subject;
        int m_nBookId;

        void PrintBookInforamtion()
        {
            cout << "Book title : " << m_Title << endl;
            cout << "Book Author : " << m_Author << endl;
            cout << "Book Subject : " << m_Subject << endl;
            cout << "Book BookID : " << m_nBookId << endl;
        }
};

int main()
{
    Books booksObj; // stack에 선언. 함수가 끝나면 사라짐
    booksObj.m_Title = "Learning C++ 21 days";
    booksObj.m_Author = "Sieun Lee";
    booksObj.m_Subject = "Learning C++ Programming";
    booksObj.m_nBookId = 19980225;

    booksObj.PrintBookInforamtion(); 

    return 0;
}