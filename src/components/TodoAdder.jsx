export default function TodoAdder(){
    return(
        <form className="todo__form">
            <input type="text" className="todo__input"/>
            <button type="submit" className="todo__button">Add</button>
        </form>
    )
}