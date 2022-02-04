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

template <typename T>
void print_vector_range_based(vector<T>& vec)
{
  for(const auto& elem : vec)
  {
    cout << "auto using : " << elem << endl;
  }
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
    cout << "]" << endl;


    // 새로운 벡터 선언
    vector<int> nVector;
    nVector.push_back(1);
    nVector.push_back(2);
    nVector.push_back(3);
    // reverse iterator를 사용하지 않는 비효율적인 예제
    // for(vector<int>::size_type i = nVector.size() - 1; i >= 0; i --)
    // {
    //   cout << nVector[i] << endl;
    // }

    for(int elem : nVector) // range based for문
    {
      cout << "element : " << elem << endl;
    }

    // auto는 range based 에서 사용가능하다. 모호한 변수를 반복문 돌릴때 사용한다.
    print_vector_range_based(nVector);

    auto nNum = 10;
    auto strHello = "Hello";

    cout << "nNum : " << nNum << ", strHello : " << strHello << endl;

    return 0;
}