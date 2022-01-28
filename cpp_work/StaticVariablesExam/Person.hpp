#pragma once
#include <string>
using namespace std;

class CPerson
{
    private:
        string m_strName;
        int m_nAge;

    public:
        // 생성자와 소멸자는 맨 위에 위치시킬 것.
        CPerson(const string& strName, int nAge); // 생성자
        ~CPerson(); // 소멸자

        static int m_nPersonCount; // static을 public에 정의
        static int PersonCount();

        void ShowPersonInformation();
};
