#include <iostream>

using namespace std;

// 함수 프로토타입
double Add(double, double);
double Sub(double, double);
double Mult(double, double);
double Div(double, double);
double Calculator(double, double, double(*func)(double, double));


int main()
{
    // 입력받을 데이터 정의
    int num1; // 첫번째 숫자
    int num2; // 두번째 숫자
    char symbol; // 사칙연산
    cout << "Enter first number : "; cin >> num1;
    cout << "Enter second number : "; cin >> num2;
    cout << "Enter operation character : "; cin >> symbol;

    double (*calc)(double, double) = nullptr; // 함수포인터 정의
    double dNum1 = num1, dNum2 = num2, result = 0.; // .만 찍으면 소수점 이하를 갖는 실수란 뜻
    char oper = symbol;

    switch(oper)
    {
        case '+':
            calc = Add;
            break;
        case '-':
            calc = Sub;
            break;
        case '*':
            calc = Mult;
            break;
        case '/':
            calc = Div;
            break;
        default:
            cout << "Support(+, -, *, /)" << endl;
            break;
    }

    result = Calculator(dNum1, dNum2, calc);
    cout << "result : " << result << endl;

    return 0;
}

double Add(double dNum1, double dNum2)
{
    return dNum1 + dNum2;
}

double Sub(double dNum1, double dNum2)
{
    return dNum1 - dNum2;
}

double Mult(double dNum1, double dNum2)
{
    return dNum1 * dNum2;
}

double Div(double dNum1, double dNum2)
{
    return dNum1 / dNum2;
}

double Calculator(double dNum1, double dNum2, double(*func)(double, double))
{
    return func(dNum1, dNum2);
}