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

    delete book1;
    // delete book2;

    return 0;
}
