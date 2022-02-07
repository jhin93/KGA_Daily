#include <iostream>
#include <set>
#include <string>


using namespace std;

template <typename T>
void printMultiSet(const multiset<T>& ms)
{
    for(const auto& ele : ms)
    {
        cout << ele << endl;
    }
}

int main()
{
    multiset<string> ms; // multiset
    ms.insert("a");
    ms.insert("a");
    ms.insert("b");
    ms.insert("b");
    ms.insert("d");
    ms.insert("c");

    printMultiSet(ms);

    return 0;
}