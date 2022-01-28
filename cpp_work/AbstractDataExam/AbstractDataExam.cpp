#include <iostream>

using namespace std;

class Adder
{
    public: // public으로 total에 접근
        Adder(int i = 0) // constructor. default값 0
        {
            total = i;
        }
        void addNum(int number) // interface to outside world
        {
            total += number;
        }

        int getTotal() // interface to outside world
        {
            return total;
        }

    private:
        // Hidden data from outside from world
        int total; // 이렇게 감추는 것이 데이터 추상화.
};

int main()
{
    Adder add; // 기본값 0

    add.addNum(10);
    add.addNum(20);
    add.addNum(30);
    // 결과 Total : 60
    // Adder add(10); 으로 시작하면 결과는 70

    cout << "Total : " << add.getTotal() << endl;
    return 0;
}