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

    for(vector<int>::iterator itr = vec.begin(); itr != vec.end(); ++itr) // 1. 변수명을 itr로 보통 많이 쓴다 2. itr != vec.end() - 즉 벡터의 마지막 원소까지를 범위로. vec.end()는 마지막원소의 바로 뒤를 가리킴
    {
        cout << "vector itr : " << *itr << endl;
        // * 연산자를 이용해서 itr 이 가리키는 원소를 볼 수 있다.
        // 물론 itr은 실제 포인터가 아니고 * 연산자를 오버로딩해서 마치 포인터처럼 동작하게 만든 것이다
        // * 연산자는 itr 이 가리키는 원소의 레퍼런스를 반환한다(주소를 참조한다)
    } 

    // 특정값(3번째)출력
    vector<int>::iterator itr = vec.begin() + 2;
    cout << "third element : " << *itr << endl;

    return 0;
}