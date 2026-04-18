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

  function handleDelete(indexToDelete){
   setMessages((prev) => prev.filter((_, index) => index !== indexToDelete));
  }
 
  return(
  <div>
    <input type="text" 
    value={text} 
    placeholder='Write your text' 
    onChange={(e) => setText(e.target.value)}
    />     
    <button 
    onClick={handleAdd}
    >
    add
    </button>
    {messages.map(
      (msg, index) => (<p key={index}>{msg} 
      <button onClick={() => handleDelete(index)}>
        Deleate
      </button>
    </p>
))}

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
