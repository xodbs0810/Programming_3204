import TodoItemEmpty  from "./TodoItemEmpty.jsx";
import TodoItem from "./TodoItem.jsx";

export default function TodoList(){
    return(
         <ul className="todo_list">
      <TodoItemEmpty />
      <TodoItem/>
    </ul>
    )
}