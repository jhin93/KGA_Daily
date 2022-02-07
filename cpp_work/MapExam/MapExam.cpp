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

int main()
{
    map<string, double> pitcherList;
    pitcherList.insert(pair<string, double>("Kershaw", 0.12));
    pitcherList.insert(pair<string, double>("DDung", 7.89));
    pitcherList.insert(pair<string, double>("Otani", 5.34));

    pitcherList.insert(make_pair("Chango", 2.12));
    pitcherList.insert(make_pair("SunWoo", 3.14));
    pitcherList.insert(make_pair("KwangHyun", 3.55));

    pitcherList["DongRyul"] = 3.45;
    pitcherList["DongWon"] = 3.45;
    pitcherList["ChooChoo"] = 2.51;

    PrintMapElement(pitcherList);

    cout << "Chanho's ERA : " << pitcherList["Chanho"] << endl;
    cout << "ChooChoo's ERA : " << pitcherList["ChooChoo"] << endl;

    return 0;
}