#include <iostream>

using namespace std;

void IncrementAll(int* start, int* stop)
{
    int* current = start; // 주소를 준 것
    while(current != stop)
    {
        ++(*current);   // increment value pointed(data)
        ++current;      // increment pointer(address)
    }
}

void PrintAll(const int* start, const int* stop)
{
    const int* current = start;
    while(current != stop)
    {
        cout << *current << endl;
        ++current;      // increment pointer(address)
    }
}

int main()
{
    int nNumbers[] = {10, 20, 30};
    IncrementAll(nNumbers, nNumbers + 3);
    PrintAll(nNumbers, nNumbers + 3);

    return 0;
}
