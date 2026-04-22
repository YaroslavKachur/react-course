import TodoItems from "./TodoItems"

function TodoList({todos, handleDelete, handleToggleDone}
) {
return(
    <div>
        {todos.map((todo) => 
            (<TodoItems 
                key={todo.id}
                todo={todo}
                handleDelete={handleDelete}
                handleToggleDone={handleToggleDone}/>)
            )}
        </div>
)
}

export default TodoList