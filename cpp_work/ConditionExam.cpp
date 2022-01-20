#include <iostream>
#include <time.h>

using namespace std;

int GetCurrentTime(void)
{
    time_t curTime = time(NULL); // 현재 시간을 가져옴
    struct tm *pLocalTime = NULL;

    pLocalTime = localtime(&curTime);

    if(pLocalTime == NULL)
    {
        //time get fail then return 0
        return -1;
    }

    return pLocalTime->tm_hour;
}

int GetCurrentDay(void)
{
    time_t curTime = time(NULL); // 현재 시간을 가져옴
    struct tm *pLocalTime = NULL;

    pLocalTime = localtime(&curTime);

    if(pLocalTime == NULL)
    {
        //time get fail then return 0
        return -1;
    }

    return pLocalTime->tm_wday; // mday는 날짜, wday가 요일
}

int main()
{
    int time = -1;
    int wDay = -1;
    time = GetCurrentTime();
    wDay = GetCurrentDay();

    if(time < 0) return 128;
    if(time < 10)
    {
        cout << "Good Morning KDgital class 4";
    }
    else if(time < 20)
    {
        cout << "Good Day World!\n";
    }else
    {
        cout << "Good evening Kdigital class 4";
    }

    cout << "\r\n";

    if(wDay < 0) return 129;

    switch(wDay)
    {
        case 1:
            cout << "Monday";
            break;
        case 2:
            cout << "Tuesday";
            break;
        case 3:
            cout << "Wednsday";
            break;
        case 4:
            cout << "Thursday";
            break;
        case 5:
            cout << "Friday";
            break;
        case 6:
            cout << "Saturday";
            break;
        case 7:
            cout << "Sunday";
            break;
        default:
            cout << "Nonday";
            break;
    }

    return 0;
}