function TodoItems({todo, handleDelete, handleToggleDone}) {
return(
<div> 
                <p style={{ color:"white",backgroundColor: todo.done ? "green" : "red", padding:"5px", borderRadius:"10px",width:"fit-content" }}>{todo.text}</p> 
                <button 
                    onClick={() => handleDelete(todo.id)}>
                    Delete
                </button> 
                <button onClick={() => handleToggleDone(todo.id)}>{todo.done ? "Undo" : "Done"}</button>
            </div>
)
}


export default TodoItems;