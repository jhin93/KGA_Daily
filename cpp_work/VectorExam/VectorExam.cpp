#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> vec; //interger 형 vector
    vec.push_back(10);
    vec.push_back(20);
    vec.push_back(30);
    vec.push_back(40);

    for(vector<int>::size_type i = 0; i < vec.size(); i ++)
    {
        cout << "vec " << i << " : " << vec[i] << endl; 
    }

    return 0;
}