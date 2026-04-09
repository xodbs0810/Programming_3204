export default function Checkbox(props){
    const { children, ...rest } = props;
    return(
        <>
       <input {...rest} id={`chk-${id}`}/>
       <label htmlFor={`chk-${id}`} className="todo_label">{children}</label>
       </>
    )
}