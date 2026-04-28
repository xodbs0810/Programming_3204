// https://programming-3204.s2445.workers.dev/
import { useState } from 'react'
import "./todolist.css"
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import TodoItemEmpty from "./components/TodoItemEmpty.jsx";
import TodoHeader from "./components/TodoHeader.jsx";
import TodoAdder from "./components/TodoAdder.jsx";
import TodoItem from "./components/TodoItem.jsx";
import TodoList from "./components/TodoList.jsx";


class Todo {
  constructor(id, text, isCompleted) {
    this.id = id;
    this.text = text;
    this.isCompleted = isCompleted;
  }

}
function TodoListApp() {
  const initTodos = () => {
    //localstorage에서 가져오기 
    const savedTodos = localStorage.getItem(TODOS_STORAGE_KEY);
    //값이 없으면 [] 
    //값이 있으면 todos의 초기값 대입
    return (!savedTodos) ? [] : savedTodos;
  }
  const [todos, setTodos] = useState(initTodos());
  //Todos 변경 시, localStorage에 todos 저장 
  useEffect(() => {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));//JSON 객체 또는 리스트 -> string
  }, [todos]);

  function addTodo(text) {
    //이전 todos에 newTodo 만들어서 추가 -> 그것을 setTodos() 하자 
    setTodos((todos) => [
      ...todos, //todos에 있는 item을 다 꺼내서 새로운 리스트에 하나씩 넣자 
      new Todo(
        Date.now(), //id; 고유 ID 시간을 이용. == new Date().getTime()
        text,      //text; 할 일 내용 
        false      //isCompleted; 할일의 완료 여부, 초기 값은 false 
      )
    ]);
  }

  return (
    <div className="todo">
      <TodoHeader />
      <TodoAdder addTodo={addTodo} />
      <TodoList todos={todos}/>
    </div>
  )
}
function deleteTodo(id){
  todos.filter((todo) => todo.id !== id));
}
function editTodo(id, newText){
  setTodos((todos) =>
  )
}
return (
  <div className="todo">
    <TodoHeader />
    <TodoAdder addTodo={addTodo}/>
    
  </div>
)
export default TodoListApp; 