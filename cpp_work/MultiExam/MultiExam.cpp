#include <iostream>
#include <set>
#include <string>
#include <map>

using namespace std;

//multiset
template <typename T>
void printMultiSet(const multiset<T>& ms)
{
    for(const auto& ele : ms)
    {
        cout << ele << endl;
    }
}

//multimap
template <typename K, typename V>
void PrintMultiMap(const multimap<K, V>& mm)
{
    for(const auto& kv : mm)
    {
        cout << kv.first << ", " << kv.second << endl; // first key second value
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

    cout << "===========================";

    multimap<int, string> mm; // key는 int, value는 string
    mm.insert(make_pair(1, "Hello World"));
    mm.insert(make_pair(1, "Good morning C++"));
    mm.insert(make_pair(2, "Chau React"));
    mm.insert(make_pair(2, "Aha Javascript"));
    mm.insert(make_pair(2, "Bye nodejs"));
    mm.insert(make_pair(2, "bye World"));

    PrintMultiMap(mm);
    cout << "==========================\n";
    cout << mm.find(1)->second << endl; // key값에 대응하는 value 값을 출력해라.

    cout << "++++++++++++++++++++++++++\n";
    auto range = mm.equal_range(1); // 키값 1 에 해당하는 밸류값을 전부 출력한다.
    for(auto itr = range.first; itr != range.second; ++itr)
    {
        cout << itr -> first << " : " << itr -> second << " " << endl;
    }

    return 0;
}