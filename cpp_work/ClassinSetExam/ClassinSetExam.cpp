#include <iostream>
#include <string>
#include <set>

using namespace std;

template <typename T>
void PrintSet(set<T>& s)
{
   cout << "[";
   for (const auto& ele : s) {
      cout << ele << " ";
   }
   cout << "]\n";
}

class Todo
{
private:
   int priority;
   string jobDesc;

public:
   Todo(int nPriority, string strJobDesc)   // 초기화
      : priority(nPriority),
      jobDesc(strJobDesc)
   {
   }

   bool operator<(const Todo& t) const // < 가 있어야 컴파일러가 재대로 작동한다.
   {
      if (priority == t.priority)
      {
         return jobDesc < t.jobDesc; // 중요도가 같다면 job_desc 비교
      }

      return priority > t.priority; // 중요도가 다르면 중요도 값이 높은 것이 위로 가게 하였다.
   }

   friend ostream& operator<<(ostream& o, const Todo& td);
};

ostream& operator<<(ostream& o, const Todo& td)
{
   o << "[Priority : " << td.priority << "] : " << td.jobDesc << endl;
   return o;
}

int main()
{
   set<Todo> todos;
   
   todos.insert(Todo(1, "Delivery work"));
   todos.insert(Todo(3, "Wake up early in the morning"));
   todos.insert(Todo(2, "Exercise for 1 hour every day"));
   todos.insert(Todo(4, "Study Maths/Algorithms/Computer Science"));
   todos.insert(Todo(5, "Meet friends"));

   PrintSet(todos);

   cout << "=========================================" << endl;
   cout << "if you complete exercise math" << endl;
   todos.erase(todos.find(Todo(2, "Exercise for 1 hour every day")));
   cout << endl;

   PrintSet(todos);
   return 0;
}