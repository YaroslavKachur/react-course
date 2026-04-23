import './App.css'
import { useState, useEffect } from "react";

function NotesApp() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleAddNote() {
    if (title === "" || content === "") return;

    const now = Date.now();

    const newNote = {
      id: now,
      title,
      content,
      createdAt: now,
    };

    setNotes((prev) => [...prev, newNote]);

    setTitle("");
    setContent("");
  }

  function handleDelete(idToDelete) {
    setNotes((prev) =>
      prev.filter((note) => note.id !== idToDelete)
    );
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <h1>Notes App</h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br />

      <button onClick={handleAddNote}>Add Note</button>

      <hr />

      {notes.length === 0 && <p>No notes yet</p>}

      {notes.map((note) => (
        <div key={note.id} style={{ marginBottom: "10px" }}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>

          <button onClick={() => handleDelete(note.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}




function App() {
 
return (
  <>
    <NotesApp/>
  </>
)
}

export default App
