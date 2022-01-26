using namespace std;

namespace BooksInfo
{
    // struct Books
    // {
    //     char title[50];
    //     char author[50];
    //     char subject[100];
    //     int book_id;
    // };

    typedef struct
    {
        char title[50];
        char author[50];
        char subject[100];
        int book_id;
    } Books;

    void PrintBooksInformation(Books* book)
    {
        cout << "book title : " << book -> title << ", author : " << book -> author << ", subject : " << book -> subject << ", book_id : " << book -> book_id << endl;
    }

    // struct 내부에 함수 작성
    Books SetBooksInformation(char* title, char* author, char* subject, int bookId)
    {
        Books book;

        strcpy(book.title, title);
        strcpy(book.author, author);
        strcpy(book.subject, subject);
        book.book_id = bookId;

        return book;
    }
}
