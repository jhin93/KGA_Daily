#include <iostream>

using namespace std;

class CBox
{
    protected:
        double m_width;
};

class CSmallBox:public CBox // CBox로부터 상속받음. 그래서 m_width를 사용할 수 있음.
{
    public:
        void SetSmallWidth(double width);
        double GetSmallWidth();
};

void CSmallBox::SetSmallWidth(double width)
{
    m_width = width;
};

double CSmallBox::GetSmallWidth()
{
    return m_width;
}

int main()
{
    CSmallBox* smallBox = new CSmallBox();

    smallBox->SetSmallWidth(5.0);
    cout << "Width of small box : " << smallBox->GetSmallWidth() << endl;

    // smallBox->m_width : public이기에 그냥 접근하면 안됨. public에 있는 함수(SetSmallWidth, GetSmallWidth)로 접근해야 함


    delete smallBox;
    return 0;
}