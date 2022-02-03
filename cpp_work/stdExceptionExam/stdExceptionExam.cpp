#include <iostream>
#include <exception>

using namespace std;

void ExceptHandler(){
    cout << "Exception!!!" << endl;

    exit(-1); // 프로그램 강제종료
};

// struct MyException : public exception
// {
//     const char* what() const throw()
//     {
//         return "Defining new exception";
//     }
// };

class DefException : public exception
{
    virtual const char* what() const throw()
    {
        return "Defining new class exception";
    }
};

int main()
{
    // set_terminate(ExceptHandler); // 에러핸들러 연결
    // try
    // {
    //     throw 1;
    // }
    // catch(char* const ex)
    // {
    //     // cannot process integer exception
    // }
    // cout << "Hello world" << endl; 

    // // 결과
    // // Exception!!!
    // // Hello World는 뜨지 않는다. exit -1로 프로그램이 강제 종료되었기 때문
    
    try
    {
        // throw DefException();
        int* nArr = new int[1000]; // 에러가 안남.
        delete nArr; // 사용후 메모리 삭제
    }
    catch (exception& e)
    {
        cout << "Standard Exception Caught" << endl;
        cout << e.what() << endl;
    }
    
    cout << "Hello world" << endl; 

    return 0;
}