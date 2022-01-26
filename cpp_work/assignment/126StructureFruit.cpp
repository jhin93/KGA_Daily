#include <iostream>

using namespace std;

// 입력받은 정보
char inputfName[50]; // 과일 이름
int inputfAmount; // 과일 개수
int inputfPrice; // 과일 가격

// 구조체(structure) 선언
typedef struct 
{
    char fName[50];
    int fAmount;
    int fPrice;
} Fruit;

// 정보출력함수
void PrintFruitInfo(Fruit* fruitInfo)
{
    cout << "Fruit name : " << fruitInfo -> fName << " / Fruit amount : " << fruitInfo -> fAmount << " / Fruit price : " << fruitInfo -> fPrice << endl;
}


int main()
{
    // 정보 입력받기
    cout << "Enter a fruit name : "; cin >> inputfName;
    cout << "Enter a fruit amount : "; cin >> inputfAmount;
    cout << "Enter a fruit price : "; cin >> inputfPrice;

    // 구조체를 Heap에 동적할당.
    Fruit* newfruit = new Fruit;
    // 입력정보를 구조체에 넣기
    strcpy(newfruit -> fName, inputfName);
    newfruit -> fAmount = inputfAmount;
    newfruit -> fPrice = inputfPrice;
    // 가격 출력
    PrintFruitInfo(newfruit);
    delete newfruit;
    return  0;
}