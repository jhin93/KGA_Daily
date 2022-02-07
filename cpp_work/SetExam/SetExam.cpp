// 2/07 2번째

#include <iostream>
#include <set>

using namespace std;

template <typename T>
void PrintSetElement(set<T>& s)
{
    cout << "[";
    for (typename set<T>::iterator itr = s.begin(); itr != s.end(); ++itr)
        // 포인터 연산자를 재정의 해서 마치 참조연산자처럼 쓰게 해준다
    {
        cout << *itr << " ";
    }
    cout << "]\n";
}

int main()
{
    set<int> s;
    s.insert(10);
    s.insert(50);
    s.insert(20);
    s.insert(30);
    s.insert(40);

    cout << "Initial status set : sorted print" << endl;
    PrintSetElement(s);

    cout << "20 is s element ? :: ";
    auto itr = s.find(20);
    if (itr != s.end())
    {
        cout << "Yes" << endl;
    }
    else
    {
        cout << "No" << endl;
    }

    cout << "25 is s element ? :: ";
    itr = s.find(25); // 여긴 auto가 있으면 안돼
    if (itr != s.end())
    {
        cout << "Yes" << endl;
    }
    else
    {
        cout << "No" << endl;
    }

    return 0;
}