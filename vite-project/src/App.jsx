import { useState } from 'react'
import './App.css'

function MessageList() {
const [text, setText] = useState("");
const [messages, setMessages] = useState([]);

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

  return(
    <div>
      <input type="text" value={text} placeholder='write' 
      onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>
        Add
      </button>
      {messages.map((msg) => 
        (<p key={msg.id}> 
        {msg.text}     {msg.done ? <span style={{color:"green"}}>Done</span> : <span style={{color:"red"}}>Not done</span>}        <br />
        <button onClick={
          () => handleToggleDone(msg.id)}>
            {msg.done ? "Undo" : "Do"}</button> 
            <button onClick={() => handleDelete(msg.id)}>Delete</button></p>))}
    </div>
  )
}


function App() {
 
return (
  <>
  <MessageList/>
  </>
)
}

export default App
