#include <iostream>

// using namespace 선언은 말 그대로 소속을 알리는 역할
// https://thinkpro.tistory.com/22
using namespace std; //std는 standard의 약자. 이 문장은 표준 네임스페이스를 사용하겠다는 의미.
// std라는 namespace를 사용할거라고 선언. 그러면 함수 내에서 명시적으로(std::) 안써도 됨.

int main()
{
    cout << "Hello World!!" << endl;

    return 0;
    // HelloWorld를 실행한다. os가 받아준다. start-up 코드가 main을 받는 것.
    // return 0; 은 exit code이다. os에게 알려준다.
}