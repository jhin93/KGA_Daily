#include <iostream>
#include <vector>

using namespace std;

template <typename T>
void PrintVector(vector<T> &vc)
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

  cout << "first status vector" << endl;
  PrintVector(vec);

  vector<int>::iterator itr = vec.begin();
  vector<int>::iterator endItr = vec.end();

  for (vector<int>::size_type i = 0; i != vec.size(); i++)
  {
    if (vec[i] == 20)
    {
      vec.erase(vec.begin() + i); // 조건을 만족할 때, vec의 처음부터 다시 찾겠다. 비효율적.
    }
  }

  cout << "value 2 delete" << endl;
  PrintVector(vec);
}