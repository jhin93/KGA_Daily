#include <stdio.h>

int main()
{
    // int c;
    // printf("Enter a value : ");
    // c = getchar();
    // printf("\nYour entered value : ");
    // putchar(c);

    char strVar[100] = {0, };
    int iVar = 0;

    // char strVar[100] = {0, }; // 초기값을 0을 주면 100가 다 0이 참

    // printf("Input text : ");
    // gets(strVar);

    // printf("\nYour entered text : ");
    // puts(strVar);

    printf("Input text and number : ");
    scanf("%s %d", strVar, &iVar); // 메모리에 직접 입력을 받는다는 말. 배열은 그 이름이 주소.

    printf("\nYour entered text and number :  %s, %d", strVar, iVar);

    return 0;
}