#include <iostream>
#include <algorithm>
#include <functional>
#include <string>
#include <vector>

using namespace std;

template <typename T>
void PrintVector(T begin, T end) {
    while (begin != end) {
        cout << "[" << *begin << "]";
        begin++;
    }
    cout << endl;
}

class LambdaTest 
{
private:
    vector<int> vec;
    int nNumErased;

public:
    LambdaTest()
    {
        vec.push_back(22);
        vec.push_back(2);
        vec.push_back(12);
        vec.push_back(33);
        vec.push_back(16);
        vec.push_back(17);
        vec.push_back(1);
        vec.push_back(188);

        nNumErased = 1;

        vec.erase(remove_if(vec.begin(), vec.end(),
            [this](int i) -> bool {
                if (this->nNumErased > 2) return false;
                else if (i % 2 == 1) {
                    this->nNumErased++;
                    return true;
                }
                return false;
            }), vec.end());

        PrintVector(vec.begin(), vec.end());
    }
};


int main()
{
    vector<int> vec;
    vec.push_back(22);
    vec.push_back(2);
    vec.push_back(12);
    vec.push_back(33);
    vec.push_back(16);
    vec.push_back(17);
    vec.push_back(1);
    vec.push_back(188);

    cout << "Initial Status : " << endl;
    PrintVector(vec.begin(), vec.end());
    cout << endl;

    cout << "delete odd number in vector" << endl;
    //auto func = [](int i) {return i % 2 == 1;};
    //func(4);
    int numErased = 0;
    vec.erase(remove_if(vec.begin(), vec.end(),
        [&numErased](int i) -> bool {
            if (numErased >= 2)
                return false;
            else if (i % 2 == 1) {
                numErased++;
                return true;
            }
            return false;
        }
        //[](int i) {return i % 2 == 1;}
    ), vec.end());

    PrintVector(vec.begin(), vec.end());
    cout << endl;

    cout << "class lambda test : " << endl;

    LambdaTest lTest;

    return 0;
}