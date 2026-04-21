

function TodoInput(text, setText, handleAdd) {

    return( 
        <div>
            <input 
                type="text" 
                value={text}
                placeholder="Write here" 
                onChange={(e) => setText(e.target.value)} 
            />
            <button onClick={handleAdd}>
                Add
            </button>
        </div>
    )
}

export default TodoInput