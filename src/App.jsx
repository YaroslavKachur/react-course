import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NoteApp from "./notes-app/noteApp";
import Nav from "./navbar/nav";
import Game from "./tic-tac-toe/game";
import Home from "./home/home"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/react-course/" element={<Home/>} />
        <Route path="/react-course/notes" element={<NoteApp />} />
        <Route path="/react-course/tic-tac-toe" element={<Game/>} />
      </Routes>
    </>
  );
}

export default App;
