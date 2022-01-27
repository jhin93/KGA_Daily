#include "Book.hpp"

CBook::CBook()
{
    //
}

CBook::CBook(const string& strTitle, int nTotalPage)
{
    m_strTitle = strTitle;
    m_nTotalPage = nTotalPage;
    m_nCurrentPage = 0;
    SetPercent();
}

void CBook::SetPercent() // 헤더파일에 정의만 된 함수를 여기서 작성
{
    m_fPercent = (double)m_nCurrentPage/m_nTotalPage * 100; //형변화(타입캐스팅)
}

const CBook& CBook::ThickerBook(const CBook& compBook) // compBook 는 인자
{
    if(compBook.m_nTotalPage > this -> m_nTotalPage) // 인스턴스화된 자기 자신(this). CBook 자기자신의의 m_nTotalPage
    {
        return compBook;
    }
    else
    {
        return *this; // 자기 자신의 주소값의 내용을 그대로 리턴.
    }
};

// 복사 생성자.
CBook::CBook(const CBook& orgBook)
{
    m_strTitle = orgBook.m_strTitle;
    m_nTotalPage = orgBook.m_nTotalPage;
    m_nCurrentPage = orgBook.m_nCurrentPage;
    m_fPercent = orgBook.m_fPercent;
}