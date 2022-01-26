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
