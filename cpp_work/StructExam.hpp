using namespace std;

namespace BooksInfo
{
    struct Books
    {
        char title[50];
        char author[50];
        char subject[100];
        int book_id;
    };

    void PrintBooksInformation(struct Books* book)
    {
        cout << "book title : " << book -> title << ", author : " << book -> author << ", subject : " << book -> subject << ", book -> book_id : " << book -> book_id << endl;
    }
}
