#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> vec; //interger 형 vector
    vec.push_back(10);
    vec.push_back(20);
    vec.push_back(30);
    vec.push_back(40);

    // for(vector<int>::size_type i = 0; i < vec.size(); i ++)
    // {
    //     cout << "vec " << i << " : " << vec[i] << endl; 
    // }

    for(vector<int>::iterator itr = vec.begin(); itr != vec.end(); ++itr) // 변수명을 itr로 보통 많이 쓴다. itr != vec.end() - 즉 벡터의 마지막 원소까지를 범위로
    {
        cout << "vector itr : " << *itr << endl;
    } 
    
    // 특정값(3번째)출력
    vector<int>::iterator itr = vec.begin() + 2;
    cout << "third element : " << *itr << endl;

    return 0;
}