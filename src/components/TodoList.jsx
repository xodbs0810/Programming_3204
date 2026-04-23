import TodoItemEmpty  from "./TodoItemEmpty.jsx";
import TodoItem from "./TodoItem.jsx";

export default function TodoList( {todos}){
    return(
         <ul className="todo_list">
            {/* todos가 없으면, TodoItemEmpty*/}
            {todos.length === 0 && < TodoItemEmpty />}
            {/*  */}
            {todos.length > 0 &&
                // todos에서 하나씩 꺼내서 todo -> <TodoItem todo={todo} /> 
                todos.map((todo) => <TodoItem key={todo.id} todo={todo}/>)
            }
        </ul>
    )
}