
#include <iostream>

using namespace std;

int main()
{
    // 1st.
    // int arrNumber[5][2] = { {0, 0}, {1, 2}, {2, 4}, {3, 6}, {4, 8} };

    // for(int i = 0; i < 5; i++)
    // {
    //     for(int j = 0; j < 2; j++)
    //     {
    //         cout << "a[" << i << "][" << j << "] : " << arrNumber[i][j] << endl;
    //     }
    // }

    // 2nd.
    int row = 3, col = 5;

    int* row_1 = new int[col] {1, 2, 3, 4, 5};
    int* row_2 = new int[col] {6, 7, 8, 9, 10};
    int* row_3 = new int[col] {11, 12, 13, 14, 15};
    int** twod_array = new int* [row] {row_1, row_2, row_3};
    // 윗 문장을 풀어서 설명하면 아래와 같다.
    // int* twod_array[3];
    // twod_array[0] = row_1;
    // twod_array[1] = row_2;
    // twod_array[2] = row_3;

    for(int i = 0; i < row; i++)
    {
        for(int j = 0; j < col; j++)
        {
            cout << "a[" << i << "][" << j << "] : " << twod_array[i][j] << endl;
        }
    }

    delete[] row_1; // new를 사용후 이렇게 delete로 할당을 해제해야 함.
    delete[] row_2;
    delete[] row_3;
    delete[] twod_array;

    return 0;
}