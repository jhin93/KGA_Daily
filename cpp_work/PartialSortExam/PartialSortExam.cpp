#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

template <typename T>
void PrintVector(T begin, T end)
{
    while(begin != end)
    {
        cout << *begin << " ";
        begin++;
    }
    cout << endl;
}

int main()
{
    vector<int> vec;
    vec.push_back(5);
    vec.push_back(2);
    vec.push_back(3);
    vec.push_back(1);
    vec.push_back(4);
    vec.push_back(7);
    vec.push_back(6);
    vec.push_back(8);
    cout << "Before sorting\n";
    PrintVector(vec.begin(), vec.end());

    partial_sort(vec.begin(), vec.begin() + 3, vec.end()); // 인수(처음, 중간, 마지막) 으로 범위를 제한한다. partial로 sort 하는거니까
    cout << "After sorting\n";
    PrintVector(vec.begin(), vec.end());

    // 결과
    /*
        Before sorting
        5 2 3 1 4 7 6 8 
        After sorting
        1 2 3 5 4 7 6 8 
    */
    
    return 0;
}