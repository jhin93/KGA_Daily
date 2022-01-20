#include <iostream>
#include <time.h>

using namespace std;

int GetCurrentTime(void)
{
    time_t curTime = time(NULL);
    struct tm *pLocalTime = NULL;

    pLocalTime = localtime(&curTime);

    if(pLocalTime == NULL)
    {
        //time get fail then return 0
        return -1;
    }

    return pLocalTime->tm_hour;
}

int main()
{
    int time = -1;
    time = GetCurrentTime();
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

    return 0;
}