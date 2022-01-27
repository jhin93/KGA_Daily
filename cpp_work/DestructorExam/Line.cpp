#include "Line.hpp"

CLine::CLine()
{
    cout << "CLine Object is being created" << endl;
}

CLine::~CLine() // 메모리에서 해제될 때 실행
{
    cout << "CLine Object is being deleted" << endl;
}

void CLine::SetLength(double len)
{
    m_dLength = len;
}

double CLine::GetLength()
{
    return m_dLength;
}