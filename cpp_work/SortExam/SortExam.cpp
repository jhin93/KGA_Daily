#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

template <typename T>
void PrintVector(T begin, T end)
{
    while(begin != end) // begin 이 end와 같지 않을떄까지
    {
        cout << *begin << " ";
        begin++;
    }
    cout << endl;
}

int main () 
{
    vector<int> vec;
    vec.push_back(5);
    vec.push_back(2);
    vec.push_back(3);
    vec.push_back(1);
    vec.push_back(4);
    vec.push_back(6);
    vec.push_back(7);
    vec.push_back(8);
    cout << "Before sorting\n";
    PrintVector(vec.begin(), vec.end());
    
    sort(vec.begin(), vec.end());
    cout << "After sorting\n";
    PrintVector(vec.begin(), vec.end());

    // 결과
    /*
        Before sorting
        5 2 3 1 4 6 7 8 
        After sorting
        1 2 3 4 5 6 7 8 
    */
    return 0;
}