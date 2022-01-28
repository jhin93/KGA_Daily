#pragma once
#ifndef __SHAPE_H__ // __SHAPE_H__ 가 정의되어있지 않으면
#define __SHAPE_H__ // __SHAPE_H__ 를 정의한다
class CShape
{
    public:
        CShape();
        // pure virtual function providing interface framework
        virtual int GetArea() = 0;
        void SetHeight(int nHeight);
        void SetWidth(int nWidth);

    protected:
        int m_width;
        int m_height;
};

#endif // 여기서 ifndef 내용이 끝남