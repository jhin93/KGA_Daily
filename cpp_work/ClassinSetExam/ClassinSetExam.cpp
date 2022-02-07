#include <iostream>
#include <string>
#include <set>

using namespace std;

template <typename T, typename C>
void PrintSetElement(set<T, C>& s)
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

// if endif로 잠시 막기
// #if 0
//    bool operator<(const Todo& t) const // < 가 있어야 컴파일러가 재대로 작동한다. operator < 오름차순, <를 반대로 하면 내림차순. 수업자료 참고할 것
//    {
//       if (priority == t.priority)
//       {
//          return jobDesc < t.jobDesc; // 중요도가 같다면 job_desc 비교
//       }

//       return priority > t.priority; // 중요도가 다르면 중요도 값이 높은 것이 위로 가게 하였다.
//    }
// #endif

   friend class TodoCmp; // friend 선언으로 TodoCmp를 아래에서 쓸 수 있게 함.

   friend ostream& operator<<(ostream& o, const Todo& td);
};

class TodoCmp
{
    public:
        bool operator()(const Todo& t1, const Todo& t2) const
        {
            if(t1.priority == t2.priority)
            {
                return (t1.jobDesc < t2.jobDesc);
            }

            return (t1.priority > t2.priority);
        }
};

ostream& operator<<(ostream& o, const Todo& td)
{
   o << "[Priority : " << td.priority << "] : " << td.jobDesc << endl;
   return o;
}

int main()
{
   set<Todo, TodoCmp> todos;
   
   todos.insert(Todo(1, "Delivery work"));
   todos.insert(Todo(3, "Wake up early in the morning"));
   todos.insert(Todo(2, "Exercise for 1 hour every day"));
   todos.insert(Todo(4, "Study Maths/Algorithms/Computer Science"));
   todos.insert(Todo(5, "Meet friends"));

   PrintSetElement(todos);

   cout << "=========================================" << endl;
   cout << "if you complete exercise math" << endl;
   todos.erase(todos.find(Todo(2, "Exercise for 1 hour every day")));
   cout << endl;

   PrintSetElement(todos);
   return 0;
}