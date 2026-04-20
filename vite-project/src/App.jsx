import { useState } from 'react'
import './App.css'

function MessageList() {
const [text, setText] = useState("");
const [messages, setMessages] = useState([]);
const [editedText, setEditedText] = useState("");
const [editingId, setEditingdId] = useState(null);

function handleAdd() {
  if(text === "") return;

    const newMessage = {
      id: Date.now(),
      text: text,
      done: false,
    }
  setMessages((prev) => [...prev, newMessage]);
  setText("");
}

function handleToggleDone(idToDone) {
  setMessages((prev) => prev.map((msg) => msg.id === idToDone ? { ...msg, done: !msg.done } : msg ));
}


 function handleDelete(idToDelete) {
  setMessages((prev) => prev.filter((msg) => msg.id !== idToDelete))
 }

 function handleStartEdit(id, currentText) {
  setEditingdId(id);
  setEditedText(currentText);
 }

 function handleSaveEdit(idToSave) {
  setMessages((prev) => prev.map((msg) => msg.id === idToSave ? {...msg, text: editedText} : msg));

  setEditingdId(null);
  setEditedText("");
 }

  return(
    <div>
      <input
        type="text"
        value={text}
        placeholder="write"
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      {messages.map((msg) => (
        <div key={msg.id}>
          {editingId === msg.id ? (
            <>
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button onClick={() => handleSaveEdit(msg.id)}>
                Save
              </button>
            </>
          ) : (
            <>
              {msg.text}{" "}
              <span style={{ color: msg.done ? "green" : "red" }}>
                {msg.done ? "Done" : "Not done"}
              </span>
              <br />
              <button onClick={() => handleToggleDone(msg.id)}>
                {msg.done ? "Undo" : "Do"}
              </button>
              <button onClick={() => handleStartEdit(msg.id, msg.text)}>
                Edit
              </button>
              <button onClick={() => handleDelete(msg.id)}>
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}


function App() {
 
return (
  <>
  <MessageList/>
  </>
)
}

export default App
