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
    double (*calc)(double, double) = nullptr; // 함수포인터 정의
    double dNum1 = 3., dNum2 = 4., result = 0.; // .만 찍으면 소수점 이하를 갖는 실수란 뜻
    char oper = '*';

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