#include <iostream>
#include <fstream>
#include <sstream>

using namespace std;
struct DATE
{
    int day;
    int month;
    int year;
};

int main()
{
    DATE date[] = {
        {2021, 12, 25},
        {2022, 11, 11},
        {1984, 02, 16}
    };
    DATE date2;
    DATE wDate;

    ofstream outFile;
    outFile.open("test.txt" , ios::out | ios::binary);
    outFile.write((char*)date, sizeof(DATE) * 3);

    outFile.seekp(0);                           // seekp is a function that moves the file pointer to a specified position.
                                                // file pointer is the position of the next byte to be written to the file.

    outFile.write((char*)&date, sizeof(DATE));  // write is a function that writes a specified number of bytes to the file.

    outFile.close();

    ifstream inFile;
    memset(&date, 0, sizeof(DATE));            // memset is a function that fills a block of memory with a specified value.
    inFile.open("test.txt", ios::in | ios::binary);
    inFile.read((char*)&date, sizeof(DATE) *3 );

    for(int i  = 0; i < 3; i++)
    {
        cout << date[i].day << "-" << date[i].month << "-" << date[i].year << endl;
    }

    cout << "------------------------------------" << endl;
    cout << "Random file position readindg file " << endl;
    inFile.seekg(sizeof(DATE) * 2, ios::beg); // 여기서의 위치(파일포지션)로 아래 출력 결과가 결정된다.
    inFile.read((char*)&date2, sizeof(DATE));
    cout << date2.day << "-" << date2.month << "-" << date2.year << endl;
    // 결과
    /*
    2021-12-25
    2022-11-11
    1984-2-16
    ------------------------------------
    Random file position readindg file 
    1984-2-16
    */
    
}