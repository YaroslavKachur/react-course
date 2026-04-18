import { useState } from 'react'
import './App.css'

function MessageList() {
  const [text, setText] = useState("");
const [messages, setMessages] = useState([]);

  function handleAdd(){
    if (text === "") return;
    setMessages((prev) => [...prev, text]);
    setText("");
  }

  return(
  <div>
    <input type="text" value={text} placeholder='Write your text' onChange={(e) => setText(e.target.value)}/>     
    <button onClick={handleAdd}>add to your list</button>
    {messages.map((msg, index) => (<p key={index}>{msg}</p>))}
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
