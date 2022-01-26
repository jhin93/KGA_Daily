#include <iostream>

using namespace std;

struct Books
{
    char title[50];
    char author[50];
    char subject[100];
    int book_id;
};


int main()
{
    struct Books book1;
    struct Books book2;

    strcpy(book1.title, "Learn C++ Programming 21 days");
    strcpy(book1.author, "Sieun Lee");
    strcpy(book1.subject, "C++ Programming in Liquor");
    book1.book_id = 12423;

    strcpy(book2.title, "Learn C++ Programming 21 days");
    strcpy(book2.author, "Hyein Lee");
    strcpy(book2.subject, "C++ Programming in Liquor");
    book2.book_id = 44423;

    cout << "book1 title : " << book1.title << ", author : " << book1.author << ", subject : " << book1.subject << ", book1.book_id : " << book1.book_id << endl;
    cout << "book2 title : " << book2.title << ", author : " << book2.author << ", subject : " << book2.subject << ", book2.book_id : " << book2.book_id << endl;

    return 0;
}