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
    BooksInfo::Books* book1 = new BooksInfo::Books; // new로 heap에 할당. delete할때 heap에서 삭제.
    // 포인터 사용 X. 동적할당 X.
    Books book2; // 메모리를 스택에 할당. 메인함수의 로컬변수라서 메인함수가 끝나면 사라짐(pop)

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

    Books book3 = SetBooksInformation((char*)"Welcome to Hell in C++", (char*)"Bjane stroustoup", (char*)"Hell in the C++", 3456);
    PrintBooksInformation(&book3);
    delete book1;
    // delete book2;

    return 0;
}
