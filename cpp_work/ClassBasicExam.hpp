#include <iostream>
#include <string>

using namespace std;


// 클래스 선언
class CBooks // class라는걸 명시하기 위해 C를 붙임
{
    public:
        // constructor(객체 생성자)
        CBooks() // 가장 먼저 실행되기에 초기화를 해줄 수 있다
        {
            cout << "CBooks Object Constructor!!!" << endl;
            m_Title = "Learning Javascript 21 days";
            m_Author = "Bla Bla Foo";
            m_Subject = "Javascript web programming";
            m_nBookId = 353523;

        };

        // struct BooksInfo m_BooksInfo;
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
