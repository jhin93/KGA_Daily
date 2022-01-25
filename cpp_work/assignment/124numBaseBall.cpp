#include <iostream>
#include <random>

using namespace std;

// 숫자 야구 : 숫자를 맞추면 볼, 숫자와 자리까지 맞추면 스트라이크.
int main()
{
    // 컴퓨터 난수 생성 (3자리). 중복없이 각 자리가 전부 다른수여야 함.
    // 3자리 난수
    int questRannum;
    const int questArrLength = 3; // 3자리
    int questArr[questArrLength] = {0, 0, 0};

    // https://modoocode.com/304
    // 시드값을 얻기 위한 random_device 생성.
    random_device rd;
    // random_device 를 통해 난수 생성 엔진을 초기화 한다.
    mt19937 gen(rd());
    // 0 부터 9 까지 균등하게 나타나는 난수열을 생성하기 위해 균등 분포 정의.
    uniform_int_distribution<int> dis(100, 999);

    questRannum = dis(gen); // 난수삽입
    cout << "난수 : " << questRannum << endl;

    for(int i = 2; i >= 0; i --)
    {
        questArr[i] = questRannum % 10;
        questRannum /= 10;
    }
    
    // 사용자 입력수.
    int inputNum; // 입력받을 정수 초기화.
    int inputArr[] = {0}; // 입력수를 배열화한 배열
    while(true)
    {
        cout << "3자리 수를 입력하세요 : ";
        cin >> inputNum; // 입력수 받기
        int inputArr[3]; // 입력수 배열 정의
        if(inputNum < 100 || inputNum > 999) // 3자리가 아니어도, 3자리가 넘어가도 얼럿 메시지 출력
        {
            cout << "3자리 수를 입력해주세요!" << endl;
        } else {
            // 입력수를 배열화하기.
            // https://stackoverflow.com/questions/1860983/convert-integer-to-array/1861022
            for(int i = 2; i >= 0; i --)
            {
                inputArr[i] = inputNum % 10;
                inputNum /= 10;
                // cout << "test : " << inputArr[i] << " i : " << i << endl;
            }
        }

        int strike; // 맞으면 증가하는 strike 변수
        int ball; // 맞으면 증가하는 ball 변수

        // strike는 자릿수와 그 내용이 일치하는 개수를 체크
        // 랜덤배열과 입력배열의 인덱스들의 주소의 데이터들을 비교할 것
        // ball이 먼저 나오는 조건을 확인 -> 그 중에서 strike가 나오는 조건을 추가로 적용
        for(int i = 0; i < questArrLength; i ++)
        {
            for(int j = 0; j < 3; j ++)
            { // 랜덤배열 내부에 입력수배열의 원소가 있고, 자릿수가 다를 때 ball ++
                if(j != i && questArr[i] == inputArr[j])
                {
                    ball++;
                } else if(questArr[i] == inputArr[j] && j == i)
                {
                    strike++;
                    if(strike == 3)
                    {
                        cout << "HomeRun!!" << endl;
                    }
                }
            }
        }
        cout << "ball : " << ball << endl;
        cout << "strike : " << strike << endl;

        break;

    }
    
    // 홈런을 확인하는 수식. strike가 홈런이면 alert 뜨면서 리로드

    return 0;
}