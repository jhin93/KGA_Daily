#include <iostream>
#include <vector>

using namespace std;

//프로토타입 선언
template <typename T>
void PrintVector(vector<T> vec) // vec로 만들고 어떤 타입이든 참조(T)
{
    for(typename vector<T>::iterator itr = vec.begin(); itr != vec.end(); ++itr)
        cout << *itr << endl;
}

int main()
{
    vector<int> vec; // integer로 정의
    vec.push_back(1);
    vec.push_back(2);
    vec.push_back(3);
    vec.push_back(4);

    cout << "first vector state" << endl;
    PrintVector(vec);
    cout << "=========================" << endl;

    // insert before vec[2]
    vec.insert(vec.begin() + 2, 55); // insert는 지정 요소의 앞에 삽입한다.두번째 방 앞에다가(vec.begin() + 2).
    PrintVector(vec);

    cout << "=========================" << endl;

    // erase vec[3]
    vec.erase(vec.begin() + 3); // vec.begin() + 3는 4번째 것. vec가 1, 2, 55, 3, 4 이기에 3이 삭제 
    PrintVector(vec);

    return 0;
}