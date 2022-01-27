#include <iostream>
#include "Book.hpp"

using namespace std;

int main()
{
    CBook web_book("HTML + CSS", 350);
    CBook html_book("Learning HTML 21 days", 200);
    CBook copyBook(web_book); // 복사 생성자

    cout << "First Book's Title : " << web_book.m_strTitle << ", Total Page : " << web_book.m_nTotalPage << endl;
    cout << "Copy Book's Title : " << copyBook.m_strTitle << ", Total Page : " << copyBook.m_nTotalPage << endl; // 복사 생성자 출력

    cout << web_book.ThickerBook(html_book).m_strTitle << endl; // 더 두꺼운 책을 출력하게끔 함
    
    return 0;
}