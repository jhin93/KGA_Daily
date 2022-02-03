#include <iostream>
#include <fstream>

using namespace std;

int main()
{
    ofstream file("simplefile.txt");

    file << "Hello world\n";

    file.close();

    return 0;
}