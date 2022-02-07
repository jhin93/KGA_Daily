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

class IntCompare
{
    public:
        bool operator()(const int& a, const int& b) const {return (a > b); } // 참인 것을 return 한다. 그래서 begin이 end보다 큰 것이 리턴되고 그래서 내림차순으로 정렬됨.
};

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
    
    sort(vec.begin(), vec.end(), IntCompare()); // sort의 3번째 인자는 조건. 결과는 반대로 정렬된다.
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