#pragma once
#include <iostream>
#include <string>

using namespace std;

class CBook
{
    private:
        int m_nCurrentPage;
        void SetPercent();

    public:
        CBook(); // 객체 생성자
        CBook(const CBook&); // 복사 생성자. 참조해서 가져옴. 인자 이름은 구현부에.
        CBook(const string& title, int nTotalPage);
        string m_strTitle;
        int m_nTotalPage;
        double m_fPercent;
        void Move(int nPage);
        void Open();
        void Read();

        // 복사 생성자
        const CBook& ThickerBook(const CBook&); // 인자의 이름은 생략
};