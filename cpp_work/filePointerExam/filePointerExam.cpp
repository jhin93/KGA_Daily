#include <iostream>
#include <fstream>

const char* fileName = "simplefile.txt";

using namespace std;

int main()
{
    long lFirst, lEnd;

    ifstream iFile;
    iFile.open(fileName, ios::in | ios::binary);
    lFirst = iFile.tellg(); // tellg. 오픈만 한 상태에서 현재 파일의 위치를 가져옴. 
    iFile.seekg(0, ios::end); // 읽어오는 포인터 seekg
    lEnd = iFile.tellg(); // tellg 현재 파일 포지션을 가져옴
    iFile.close();

    cout << "file [ " << fileName << " ] size : " << (lEnd - lFirst) << endl;

    return 0;
}