import NoteList from "./noteList"
import NoteItem from './noteItem';
import NoteInput from './noteInput';
import { useState, useEffect } from "react";

export default function NoteApp() {
const [title, setTitle] = useState("");
const [text, setText] = useState("");
const [notes, setNotes] = useState(() => {
  const savedNotes = localStorage.getItem("notes")

  if(savedNotes) {
    return JSON.parse(savedNotes) ;
  }
  return [];
});
const today = new Date();


useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes))
}, [notes])

function handleAdd() {
  if(title.trim() === "" || text.trim() === "") return;

  const newNote = {
    id: Date.now(),
    text: text.trim(),
    title: title.trim(),
    createdAt: today.toLocaleDateString("de-CH")

  }
  setNotes((prev) => [...prev, newNote]);
  setText("");
  setTitle("");
}

function handleDelete(idToDelete) {
setNotes((prev) => prev.filter((note) => note.id !== idToDelete))
}

return(
  <div>
    <NoteInput 
      text={text} 
      setText={setText} 
      title={title} setTitle={setTitle} 
      handleAdd={handleAdd} 
    />
    <NoteList 
      notes={notes} 
      setNotes={setNotes} 
      handleDelete={handleDelete}
    />
  </div>
)
}
