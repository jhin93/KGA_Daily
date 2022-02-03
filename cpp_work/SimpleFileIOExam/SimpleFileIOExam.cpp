#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main()
{
    // ofstream file("simplefile.txt");

    // file << "Hello world\n";

    // file.close();

    string readString;
    ifstream readFile("simplefile.txt");
    
    while(getline(readFile, readString))
    {
        cout << readString << endl; // endl을 사용하면 줄단위로 읽어온다.
    }

    return 0;
}