import Checkbox from "./Checkbox.jsx";
import Button from "./Button.jsx";

export default function TodoItem( {todo, toggleTodo, deleteTodo, editTodo} ){ 
    function handleEditClick(){
        if(!is)
    }
    type="text"
    className="todo__input--edit"
    value={editTodo}
    return(
        <li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>
            {!isEditing &&
                <checkbox
                    id={todo.id}
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(todo.id)}
                    >{todo.text}</checkbox>
            </checkbox>
            }
          <Checkbox className="todo__check" id={todo.id} checked={todo.isCompleted} onChange={() => toggleTodo(todo.id)}>
            {todo.text}
          </Checkbox>
          <Button className="todo__button todo__button--edit">🅾️</Button>
          <Button 
          className="todo__button todo__button--delete"
          onClick={() => deleteTodo(todo.id)}
          >❌</Button>
      </li>
    )
}