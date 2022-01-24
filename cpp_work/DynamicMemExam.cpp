#include <iostream>
#include <stdlib.h>

using namespace std;

int main()
{
    
    int i, totalLen;
    int arrLen = 3, addLen = 2; //array길이를 3으로
    int* ptrArr;
    // malloc() 함수
    // ptrArr = (int*)malloc(arrLen * sizeof(int)); // dynamic allocation memory. 제각기 다른 값이 나옴.
    // 예제
    // int* pi = (int* p) malloc(sizeof(int) * 10);
    // 정수 10개를 저장할 수 있는 메모리공간(즉 40바이트)를 할당하고 그 첫번째 주소를 int*로 형변환하여 pi에 저장
    // char* pc

    // calloc() 함수
    ptrArr = (int*)calloc(arrLen, sizeof(int)); // 문법 : void *calloc(size_t nmemb, size_t size); 
    // calloc함수(clear alloc)는 할당받은 데이터를 모두 0으로 만듬. 출력하면 0으로 나오는게 맞음

    if(ptrArr  == NULL) // dynamic allocation fail
    {
        cout << "Dynamic memory allocation fail..." << endl;   
        exit(1); // 프로그램을 빠져나가는 명령어 exit. 1은 그냥 쓴 것
    }


    //realloc() 함수. 재할당하는 함수.
    totalLen = arrLen + addLen;
    ptrArr = (int*)realloc(ptrArr, (totalLen * sizeof(int)));

    if(ptrArr  == NULL) // dynamic reallocation fail
    {
        cout << "Dynamic memory allocation fail..." << endl;   
        exit(2); // 프로그램을 빠져나가는 명령어 exit. 1은 그냥 쓴 것
    }

    cout << "Dynamic allocation memory initial value : \n";
    for(int i = 0; i < totalLen; i ++)
    {
        cout << ptrArr[i] << endl;
    } 


    free(ptrArr); // 할당받은 메모리 해제

     
    // const char* pStr = "This is character string pointer"; // 초기화
    // char* pStrDest = (char*)calloc(strlen(pStr) + 1, sizeof(char)); // null까지 계산해서 +1

    // cout << "pStrDest Length : " << strlen(pStrDest) << endl; // strlen은 길이를 출력하는 메소드
    // strncpy(pStrDest, pStr, strlen(pStr) + 1); // strncpy - https://blockdmask.tistory.com/348 
    // cout << "pStrDest Length : " << strlen(pStrDest) << endl;
    // cout << "pStrDest : " << pStrDest << endl;

    // free(pStrDest); // 할당받은 메모리 해제

    // 결과
    /*
    pStrDest Length : 0 - calloc 이라서 0
    pStrDest Length : 32
    pStrDest : This is character string pointer
    */

    //calloc 사용예제
    // char cAlphabet, *pAlphabet, *ptr;
    // pAlphabet = (char*)calloc(35, sizeof(char));

    // if(pAlphabet == NULL) // 실수를 방지하기 위한 로직
    // {
    //     cout << "Dynamic memory allocation fail..." << endl;   
    //     exit(1);
    // }

    // ptr = pAlphabet; // 주소를 그대로 준 것

    // for(cAlphabet = 0x41; cAlphabet < 0x5B; cAlphabet++)
    // {
    //     *ptr++ = cAlphabet;
    // }
    // *ptr = '\0'; // 문자열의 마지막은 null이어야해서 \0을 넣음

    // cout << "Alphabet String : " << pAlphabet << endl; // *ptr은 null이 들어가서 찍어도 아무것도 안나옴. 그래서 연산에만 사용하고 pAlphabet을 찍음
    // // Alphabet String : ABCDEFGHIJKLMNOPQRSTUVWXYZ

    // free(pAlphabet);
    return 0;
}