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
};

int main()
{
    Books booksObj; // stack에 선언. 함수가 끝나면 사라짐
    booksObj.m_Title = "Learning C++ 21 days";
    booksObj.m_Author = "Sieun Lee";
    booksObj.m_Subject = "Learning C++ Programming";
    booksObj.m_nBookId = 19980225;

    cout << "Book title : " << booksObj.m_Title << endl;
    cout << "Book Author : " << booksObj.m_Author << endl;
    cout << "Book Subject : " << booksObj.m_Subject << endl;
    cout << "Book BookID : " << booksObj.m_nBookId << endl;

    return 0;
}