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
            done: false
        }
        setTodos((prev) => [...prev, newTodo]);
        setText("");
    }

    function handleDelete(idToDelete){
        setTodos((prev) => prev.filter((todo) => todo.id !== idToDelete))
    }

    function handleToggleDone(idToDone){
        setTodos((prev) => prev.map((todo) => todo.id === idToDone ? {...todo, done: !todo.done } : todo ))
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
            handleDelete= {handleDelete}
            handleToggleDone={handleToggleDone}
            />
    </>
)
}

export default TodoApp;