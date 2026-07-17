import { useState } from "react";
import "./home.css";

export default function Home() {
  const [number, setNumber] = useState(0);

  function handleAdd() {
    setNumber(number + 1);
  }

  return (
    <div className="home">
      
      <img 
        src={`${import.meta.env.BASE_URL}react-course.svg`} 
        alt="react-course logo" 
        className="img" 
      />
      
      <div className="home-content">
       
        <p className="text">Hello!</p>
        <p className="text">
          This is one of my React projects. I built it while learning React through the official React documentation.
        </p>
        <p className="text">
          I created this project to improve my frontend development skills and prepare for an apprenticeship as an Informatiker EFZ in Switzerland.
        </p>
        <p className="text">
          I'm continuously learning and always looking for ways to improve my code and build better applications.
        </p>
      </div>
      
      <p>If you get bored, there's also a button you can click.</p>
      <button onClick={handleAdd}>Number is: {number}</button>
    </div>
  );
}