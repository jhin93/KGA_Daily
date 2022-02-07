#include <iostream>
#include <map>
#include <string>

using namespace std;

template <typename K, typename V>
void PrintMapElement(map<K, V>& m)
{
    for(auto itr = m.begin(); itr != m.end(); ++itr)
    {
        cout << itr -> first << ", " << itr -> second; // first가 키, second가 밸류
    }
}

template <typename K, typename V>
void SearchPrintElement(map<K, V>& m, K key)
{
    auto itr = m.find(key); // map은 오타가 나도 에러를 만들어내는게 아니라 그냥 새로운 키로 넣어버리고 밸류는 0을 할당해버린다. 항상 find로 값을 체크할 것.
    if(itr != m.end())
    {
        cout << key << " => " << itr -> second << endl; // value는 itr -> second
    }
    else
    {
        cout << key << " is not found in map" << endl;
    }
}

int main()
{
    map<string, double> pitcherList;
    pitcherList.insert(pair<string, double>("Kershaw", 0.12));
    pitcherList.insert(pair<string, double>("DDung", 7.89));
    pitcherList.insert(pair<string, double>("Otani", 5.34));

    pitcherList.insert(make_pair("Chanho", 2.12)); 
    pitcherList.insert(make_pair("SunWoo", 3.14));
    pitcherList.insert(make_pair("KwangHyun", 3.55));

    pitcherList["DongRyul"] = 3.45;
    pitcherList["DongWon"] = 3.45;
    pitcherList["ChooChoo"] = 2.51;

    PrintMapElement(pitcherList);

    cout << "Chanho's ERA : " << pitcherList["Chanho"] << endl;
    cout << "ChooChoo's ERA : " << pitcherList["ChooChoo"] << endl;

    SearchPrintElement(pitcherList, string("Chaboom")); // 찾을 키값의 타입을 명시해야 한다(string이라고 타입변환). K key가 뭔지 모르니까.
    // 결과 : Chaboom is not found in map
    SearchPrintElement(pitcherList, string("Otani"));
    // 결과 : Otani => 5.34
    return 0;
}