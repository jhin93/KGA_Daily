#include <iostream>

using namespace std;

struct Books
{
    char title[50];
    char author[50];
    char subject[100];
    int book_id;
};

void PrintBooksInformation(Books* book); // 함수 프로토타입 선언

int main()
{
    // struct Books book1;
    // struct Books book2;

    // Books book1; struct 생략가능
    // Books book2;

    // 포인터로 사용가능. 동적할당.
    Books* book1 = new Books;
    Books* book2 = new Books;

    strcpy(book1 -> title, "Learn C++ Programming 21 days");
    strcpy(book1 -> author, "Sieun Lee");
    strcpy(book1 -> subject, "C++ Programming in Liquor");
    book1 -> book_id = 12423;
    PrintBooksInformation(book1);

    strcpy(book2 -> title, "Learn C++ Programming 21 days");
    strcpy(book2 -> author, "Hyein Lee");
    strcpy(book2 -> subject, "C++ Programming in Liquor");
    book2 -> book_id = 44423;
    PrintBooksInformation(book2);

    // cout << "book1 title : " << book1.title << ", author : " << book1.author << ", subject : " << book1.subject << ", book1.book_id : " << book1.book_id << endl;
    // cout << "book2 title : " << book2.title << ", author : " << book2.author << ", subject : " << book2.subject << ", book2.book_id : " << book2.book_id << endl;

    delete book1;
    delete book2;

    return 0;
}

void PrintBooksInformation(struct Books* book)
{
    cout << "book title : " << book -> title << ", author : " << book -> author << ", subject : " << book -> subject << ", book -> book_id : " << book -> book_id << endl;
}