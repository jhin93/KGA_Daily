#include <iostream>
#include <vector>

using namespace std;

template <typename T>
void PrintVector(vector<T> &vc) // 벡터 출력함수
{
  // Print all vector elements
  cout << "[";
  for (typename vector<T>::iterator itr = vc.begin(); itr != vc.end(); ++itr)
  {
    cout << *itr << " ";
  }
  cout << "]\n";
}

int main()
{
    vector<int> vec;
    vec.push_back(10);
    vec.push_back(20);
    vec.push_back(30);
    vec.push_back(40);
    vec.push_back(20);

    cout << "Initiate status vector" << endl;
    PrintVector(vec);

    vector<int>::iterator itr = vec.begin() + 2; // vec[2]
    *itr = 50;
    cout << "=====================" << endl;

    PrintVector(vec);
    vector<int>::const_iterator citr = vec.begin() + 2;
    cout << "=====================" << endl;

    // cannot assign to a variable that is const_iterator
    // *citr = 70; // const_iterator는 재할당이 불가능.

    cout << "Reverse Vector Print" << endl;
    vector<int>::reverse_iterator ritr = vec.rbegin();
    cout << "[";
    for(; ritr != vec.rend(); ritr ++)
    {
      cout << *ritr << " ";
    }
    cout << "]";


    return 0;
}