#include <iostream>
#include <list>

using namespace std;

int main()
{
    list<int> nList;//int 형으로 정의

    nList.push_back(10);
    nList.push_back(20);
    nList.push_back(30);
    nList.push_back(40);

    // list는 임의의 위치에 있는 원소를 가리킬 수 없다. 
    // 그래서 list의 iterator는 ++ 혹은 -- 만 가능하다. 이어진 List 구조이기 때문에 한번에 한칸씩 이동.

    for(list<int>::iterator itr = nList.begin(); itr != nList.end(); ++itr) 
    {
        cout << *itr << endl;
    }

    return 0;
}