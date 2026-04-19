import { useState } from 'react'
import './App.css'

function MessageList() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  function handleAdd() {
    if(text === "") return;

    const newMessage = {
      id : Date.now(),
      text: text,
    }; 
    
    setMessages((prev) => [...prev, newMessage])
    setText("");
  }

  function handleDelete(idToDelete) {
    setMessages((prev) => prev.filter((msg) => msg.id !== idToDelete))
  }
  
  return(
    <div>
      <input 
      type="text" value={text} placeholder='Write here' 
      onChange={(e) => setText(e.target.value)} />

    <button 
    onClick={handleAdd} style={{borderRadius:"10px", border:"1px solid"}}>
      Add
    </button>
    {messages.map((msg) => (<p key={msg.id}>{msg.text} <button onClick={() => handleDelete(msg.id)}>Delete</button></p>))}
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
