import { useState } from 'react';
import Button from './Button.jsx';

export default function TodoAdder({ addTodo }) { //const {addTodo} = props;
    const [inputTodo, setInputTodo] = useState('');
    const handlesubmit = (event) => {
        event.preventDefault(); //기본 동작 막기 
        if(!inputTodo.trim()) return; //input이 비어있으면 추가하지 않음
        addTodo(inputTodo.trim()); //input에 있는 text value를 할일 내용으로 추가 
        setInputTodo(''); //input 초기화
    }
    return (
        <form className="todo__form" onSubmit={handlesubmit}>
            <input
                type="text"
                className="todo__input"
                placeholder="할 일을 입력하세요 "
                value={inputTodo}
                onChange={(event) => setInputTodo(event.target.value)}
            />
            <button type="submit" className="todo__button todo__button--add">Add</button>
        </form>
    )
}