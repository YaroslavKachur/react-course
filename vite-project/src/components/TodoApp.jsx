import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoApp() {
const [text, setText] = useState("");
const [todos, setTodos] = useState([]);
    function handleAdd() {
        if(text === "") return;
        const newTodo = {
            id: Date.now(),
            text,

        }
        setTodos((prev) => [...prev, newTodo]);
        setText("");
    }

return(
    <>
        <TodoInput 
            text= {text} 
            setText= {setText} 
            handleAdd={handleAdd}
            />
        <TodoList
            todos= {todos} 
            setTodos= {setTodos}
            />
    </>
)
}

export default TodoApp;