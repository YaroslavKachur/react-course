export default function NoteInput({text, setText, title, setTitle, handleAdd}) {
    return(
        <div>
            <h1>Hello! This is your NoteApp</h1>
            <br />
            <h2>Add your note here</h2>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Here is your title"/> <br />
            <textarea value={text} placeholder="text" onChange={(e) => setText(e.target.value)}/> <br />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}