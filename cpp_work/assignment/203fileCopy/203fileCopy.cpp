#include <iostream>
#include <fstream>
#include <exception>

using namespace std;

class CopyException : public exception
{
    virtual const char* what() const throw()
    {
        return "Error occured during copy";
    }
};

int main()
{
    try
    {
        //미리 파일 크기 확인 후 한번에 읽어서 복사
        ifstream in;
        in.open("./current/crack.png", ios::in | ios::binary); // binary로 읽을 것

        // total file size
        in.seekg(0, ios::end); // current position 0 부터 end 까지. 즉, 파일크기 나옴
        long fileLength = in.tellg();

        cout << "Read file size : " << fileLength << "Byte" << endl;

        // loading total file size in memory
        in.seekg(0, ios::beg);
        char* buf = new char[fileLength]; // 파일 크기만큼 버퍼를 만듬
        in.read(buf, fileLength); // buf에 다 읽어옴
        in.close();

        //buffer to file
        ofstream out;
        out.open("./target/crack_copy.png", ios::out | ios::binary); // 파일 복사
        out.write(buf, fileLength);
        out.close();
    }
    catch(exception& e)
    {
        cout << e.what() << endl;
    }

    return 0;
}