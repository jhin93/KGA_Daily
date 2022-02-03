#include <iostream>
#include <exception>

using namespace std;

void ExceptHandler(){
    cout << "Exception!!!" << endl;

    exit(-1); // 프로그램 강제종료
};

struct MyException : public exception
{
    const char* what() const throw()
    {
        return "Defining new exception";
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
        throw MyException();
    }
    catch (MyException& e)
    {
        cout << "MyException Caught" << endl;
        cout << e.what() << endl;
    }
    catch(const std::exception& e)
    {
        //other error
    }
    
    cout << "Hello world" << endl; 

    return 0;
}