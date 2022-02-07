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

   bool operator<(const Todo& t) const
   {
      if (priority == t.priority)
      {
         return jobDesc < t.jobDesc;
      }

      return priority > t.priority;
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