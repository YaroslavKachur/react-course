import NoteItem from "./noteItem";

export default function NoteList({notes, setNotes, handleDelete}){
return(
    <div>
         {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          handleDelete={handleDelete}
        />
      ))}
    </div>
)
}