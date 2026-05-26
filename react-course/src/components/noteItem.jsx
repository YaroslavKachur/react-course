export default function NoteItem({note, handleDelete}){
    return(
    <div>
        <h3>{note.title}</h3>
        <p>{note.text}</p>
        <small>{note.createdAt}</small>
        <button onClick={() => handleDelete(note.id)}>Delete</button>
    </div>
)}