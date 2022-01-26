#include <iostream>
#include "StructExam.hpp"

// using namespace std; // namespace에 std 있으니 여기에는 없어야 됨
using namespace BooksInfo;

int main()
{
    // struct Books book1;
    // struct Books book2;

    // Books book1; struct 생략가능
    // Books book2;

    // 포인터로 사용가능. 동적할당.
    BooksInfo::Books* book1 = new BooksInfo::Books;
    Books book2;

    strcpy(book1 -> title, "Learn C++ Programming 21 days");
    strcpy(book1 -> author, "Sieun Lee");
    strcpy(book1 -> subject, "C++ Programming in Liquor");
    book1 -> book_id = 12423;
    PrintBooksInformation(book1);

    strcpy(book2.title, "Learn C++ Programming 21 days");
    strcpy(book2.author, "Hyein Lee");
    strcpy(book2.subject, "C++ Programming in Liquor");
    book2.book_id = 44423;
    PrintBooksInformation(&book2); // 주소값을 넘겨줌

    // cout << "book1 title : " << book1.title << ", author : " << book1.author << ", subject : " << book1.subject << ", book1.book_id : " << book1.book_id << endl;
    // cout << "book2 title : " << book2.title << ", author : " << book2.author << ", subject : " << book2.subject << ", book2.book_id : " << book2.book_id << endl;

    delete book1;
    // delete book2;

    return 0;
}
