import Checkbox from "./Checkbox,jsx";
import Button from "./Button.jsx";

export default function TodoItem(){
    return(
        <li className="todo__item todo__label--complete">
        <input type="checkbox" className="todo__check" name="" id="1" />
        <label htmlFor="chk-1" className="todo__label" >옷 싸기</label>
        <Button className="todo__button todo__button--edit">🅾️</Button>
        <Button className="todo__button todo__button--delete">❌</Button>
      </li>
    )
}