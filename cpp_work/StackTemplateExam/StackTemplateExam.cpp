#include <stack>
#include <iostream>
#include <string>
#include <vector>
#include <list>
using namespace std;

template <class T>            // typename T는 템플릿이라는 뜻
class CStack {                // 클래스를 이용해서 템플릿을 사용하는 경우
    private:
        vector<T> elements;
    public:
        void push(T const&);  // 원소를 스택에 넣는 함수
        T pop();              // 원소를 스택에서 빼는 함수  
        T top();              // 스택의 가장 위에 있는 원소를 반환하는 함수  
        bool empty() const {  // 스택이 비어있는지 확인하는 함수 : const를 붙이면 탑 안에서 어떤 것도 변경할수 없다.
            return elements.empty();
        }         
};

int main()
{
    try
    {
        CStack<int>              intStack; // integer stack
        CStack<string>           strStack; // string stack

        // manipulate integer stack
        intStack.push(12);

        // manipulate string stack
        strStack.push("Hello");
        strStack.push("Hello C++");


        cout << "intStack : " << intStack.top() << endl;   
        cout << "intStack : " << intStack.empty() << endl;
        cout << "intStack : " << intStack.pop() << endl;
        cout << "intStack : " << intStack.top() << endl;   

        cout << "===================" << endl;

        // cout << "strStack : " << strStack.top() << endl;
        // cout << "strStack : " << strStack.empty() << endl; 
        // cout << "strStack : " << strStack.pop() << endl;
        // cout << "strStack : " << strStack.top() << endl;  
        
        

    }
    catch(const exception& e)
    {
        cerr << e.what() << '\n'; // cerr : 에러를 출력하는 표준 출력 장치 , what : 에러 메시지를 반환하는 함수 , 
    }
}

template <class T>
void CStack<T>::push(T const& element)
{
    elements.push_back(element);
}

template <class T>               
T CStack<T>::pop()           
{
    if(empty())
        throw  out_of_range("CStack<>pop() : Stack is empty");
    

    T element = elements.back(); // 스택의 마지막 원소를 반환하는 함수
    elements.pop_back();         // 스택의 마지막 원소를 제거하는 함수
    return element;              // 스택의 마지막 원소를 반환하는 함수
}

template <class T>
T CStack<T>::top()
{
    if(empty())
        throw  out_of_range("CStack<>top() : Stack is empty");
    
    return elements.back();       // 스택의 마지막 원소를 반환하는 함수

}
