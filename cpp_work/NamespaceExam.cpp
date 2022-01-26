#include <iostream>
#include <string>

using std::cout; // std의 cout만 사용하겠다.

namespace first_space
{
    void myFunc()
    {
        cout << "This function is in first_space\n" << std::endl; // cout만 using 선언했으니 endl는 std를 붙여줘야 한다. 
    }

    namespace second_space
    {
        void myFunc()
        {
            cout << "This function is in second_space\n"; 
        }
    }

}

//using
using namespace first_space;

int main()
{
    std::string strHello = "Hello World!!!"; // using std::cout; - std중 cout만 따로 선언했기에 문장 맨앞에 std::붙여줘야 한다.
    first_space::myFunc(); // using 지시자로 편리하게 사용가능. 근데 second_space의 myFunc()과 이름이 겹치기에 second_space는 using을 쓰면 안된다.
    first_space::second_space::myFunc(); // 범위지정 연산자 - :: // 중첩해서 사용도 가능
    // using 지시자(directive)
    // using 지시자는 명시한 namespace에 속한 이름을 모두 가져와 범위 지정 연산자를 사용하지 않고도 사용할 수 있게 해준다.
    // 전역 범위에서 사용된 using 지시자는 해당 namespace의 모든 이름을 전역적으로 사용할 수 있게 만들어준다.
    // 또한, 블록 내에서 사용된 using 지시자는 해당 블록에서만 해당 namespace의 모든 이름을 사용할 수 있게 해준다.

    // using 선언(declaration)
    // using 지시자가 명시한 namespace의 모든 이름을 사용할 수 있게 했다면,using 선언은 단 하나의 이름만을 범위지정 연산자로 지정하지 않고도 사용할 수 있게 해준다. ex) using std::cout
    return 0;
}