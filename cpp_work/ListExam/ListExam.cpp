#include <iostream>
#include <list>

using namespace std;

template <typename T>
void PrintList(list<T>& lst)
{
    cout << "[";
    for(const auto& ele : lst) // range based
    {
        cout << ele << " ";
    }
    cout << "]\n";
}

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

    cout << "=======================" << endl;

    cout << "Initial status at list" << endl;
    PrintList(nList);

    for(list<int>::iterator itr = nList.begin(); itr != nList.end(); ++itr)
    {
        if(*itr == 20)
            nList.insert(itr, 50); // 20 앞에 50을 insert
    }
    cout << "element value before 20 insert 50" << endl;
    PrintList(nList);

    // 삭제

    for(list<int>::iterator itr = nList.begin(); itr != nList.end(); ++itr)
    {
        if(*itr == 30)
        {
            nList.erase(itr); // 30을 삭제
            break; // 원래는 삭제하고 나서도 반복문이 돌기 때문에 삭제로 인한 공간때문에 에러가 나야함. 근데 안나는게 이상함. C++ 버전 차이거나 vscode - vs 차이일지도.
        }
        
    }
    cout << "element value 30 deleted" << endl;
    PrintList(nList);

    return 0;

}