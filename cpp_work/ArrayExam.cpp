
//

#include <iostream>
#include <string>

using namespace std;

int main()
{
    int grade[3] = {85, 65, 90}; // 주소가 이렇게 만들어짐. 변수를 선언할 때, 메모리의 주소가 부여됨.

    cout << grade << endl; // 메모리의 주소.
    for(int i = 0; i < 3; i ++)
    {
        // cout << grade[i] << endl; // 주소의 데이터를 나타냄. 85, 65, 90
        cout << &grade[i] << endl; // &는 주소를 나타내는(메모리를 참조하는) 참조 연산자
    }

    string itCompany[] = {"Apple", "Microsoft", "IBM", "Amazon", "ESP Guitar"};
    // string itCompany[5];
    // itCompany[0] = "Apple";
    // itCompany[1] = "Microsoft";
    // itCompany[2] = "IBM";
    // itCompany[3] = "Amazon";
    // itCompany[4] = "ESP Guitar";
    cout << itCompany[4] << endl;
    itCompany[0] = "Snakebyte Guitar"; // 다시 초기화
    for(string str : itCompany) // range-based
        cout << str << endl;
    

    for(int i = 0; i < (sizeof(itCompany)/sizeof(itCompany[0])); i++)
        cout << "sizeof itCompany[" << i << "] : " << itCompany[i] << endl;

    return 0;

}